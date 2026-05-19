# UV Bengaluru Form API Integration Plan

Last updated: 2026-05-19

## Current State

- `components/TestRideForm.tsx`, `components/ContactForm.tsx`, and `components/WorkshopBookingForm.tsx` submit to local Next handlers under `app/api/*`.
- `app/api/test-ride/route.ts`, `app/api/contact/route.ts`, and `app/api/workshop-booking/route.ts` are stubs. They only log payloads and always return success.
- The live form entry points are:
  - `/test-ride` -> `TestRideForm`
  - `/contact` -> `ContactForm`
  - `/showroom` -> `ContactForm`
  - `/workshop` -> `WorkshopBookingForm`
- None of the forms currently match the backend contract documented under `Ultraviolette Bengaluru Form Submissions`.

## Where The APIs Are Meant To Integrate

### 1. Test ride API

Backend endpoint:

- `POST /api/uvbengaluru/test-ride-requests/`

Frontend integration point:

- UI: `components/TestRideForm.tsx`
- Page using it: `app/test-ride/page.tsx`
- Existing local proxy layer: `app/api/test-ride/route.ts`

Reason:

- The page already posts to `/api/test-ride`, so the intended project shape is client -> local Next route -> backend API.
- Keeping the backend call in `app/api/test-ride/route.ts` centralizes base URL, payload normalization, and server-side error handling.

### 2. Contact request API

Backend endpoint:

- `POST /api/uvbengaluru/contact-requests/`

Frontend integration points:

- UI: `components/ContactForm.tsx`
- Pages using it:
  - `app/contact/page.tsx`
  - `app/showroom/page.tsx`
- Existing local proxy layer: `app/api/contact/route.ts`

Reason:

- One shared form serves two pages, so payload generation should stay in one component while the route handler maps it to the backend contract.
- `source_page` should differ based on where the shared form is rendered.

### 3. Workshop booking API

Backend endpoint:

- `POST /api/uvbengaluru/workshop-bookings/`

Frontend integration point:

- UI: `components/WorkshopBookingForm.tsx`
- Page using it: `app/workshop/page.tsx`
- Existing local proxy layer: `app/api/workshop-booking/route.ts`

Reason:

- Same pattern as the other forms: the component is already wired to a local API route that should become the backend proxy.

## Contract Gaps To Fix

### Test ride

Current client payload:

```json
{
  "name": "",
  "phone": "",
  "email": "",
  "model": "",
  "date": "",
  "slot": "",
  "notes": ""
}
```

Backend expects:

```json
{
  "full_name": "",
  "phone": "",
  "email": "",
  "model": "",
  "preferred_date": "",
  "preferred_slot": "",
  "notes": "",
  "source_page": ""
}
```

Required fixes:

- `name` -> `full_name`
- `date` -> `preferred_date`
- `slot` -> `preferred_slot`
- `email` must be required in the UI
- `source_page` must be added automatically

### Contact

Current client payload:

```json
{
  "name": "",
  "phone": "",
  "email": "",
  "subject": "",
  "message": ""
}
```

Backend expects:

```json
{
  "full_name": "",
  "phone": "",
  "email": "",
  "subject": "",
  "message": "",
  "source_page": ""
}
```

Required fixes:

- `name` -> `full_name`
- `email` should be required in the UI
- `subject` should be marked required in the UI
- `source_page` must be added automatically

### Workshop booking

Current client payload:

```json
{
  "name": "",
  "phone": "",
  "email": "",
  "model": "",
  "serviceType": "",
  "date": "",
  "description": ""
}
```

Backend expects:

```json
{
  "full_name": "",
  "phone": "",
  "email": "",
  "model": "",
  "service_type": "",
  "preferred_date": "",
  "description": "",
  "source_page": ""
}
```

Required fixes:

- `name` -> `full_name`
- `serviceType` -> `service_type`
- `date` -> `preferred_date`
- `email` must be required in the UI
- `source_page` must be added automatically

## Recommended Integration Design

### Keep the current client API shape

Do not make the client components call the production backend directly.

Use this flow:

1. Client form submits to existing local route:
   - `/api/test-ride`
   - `/api/contact`
   - `/api/workshop-booking`
2. Local route validates basic request presence and normalizes field names.
3. Local route forwards to the real backend endpoint under `/api/uvbengaluru/*`.
4. Local route returns:
   - success message on `201`
   - normalized validation errors on `400`
   - safe fallback message for network/server failures

Why this is the right fit for this repo:

- minimal page/component churn
- no backend base URL duplication across three client files
- easier env management
- easier future analytics, spam control, or rate limiting at one choke point

## Implementation Plan

### Phase 1: Runtime config

Files:

- add `lib/api.ts` or similar shared helper
- optionally add `.env.example` update if missing

Work:

- define backend base URL from env, e.g. `NEXT_PUBLIC_API_BASE_URL` for browser-safe use only if needed by client, or `API_BASE_URL` if only server routes need it
- preferred approach here: server routes only need backend base URL, so use a server-side env such as `API_BASE_URL`
- expected value:
  - local: `http://localhost:8000`
  - prod: real backend origin without trailing `/api`

Decision:

- route handlers should construct full URLs like `${API_BASE_URL}/api/uvbengaluru/test-ride-requests/`

### Phase 2: Shared server proxy helper

Files:

- new shared server helper, e.g. `lib/formSubmissions.ts`
- `app/api/test-ride/route.ts`
- `app/api/contact/route.ts`
- `app/api/workshop-booking/route.ts`

Work:

- create shared POST helper for public form submissions
- handle:
  - JSON request parsing
  - backend fetch
  - timeout/failure fallback
  - DRF-style validation error passthrough
  - normalized success shape for current UI

Target response shape back to client:

```json
{
  "success": true,
  "message": "Test ride request received.",
  "data": {}
}
```

or

```json
{
  "success": false,
  "message": "Please correct the highlighted fields.",
  "errors": {
    "email": ["This field is required."]
  }
}
```

### Phase 3: Fix client form contracts

Files:

- `components/TestRideForm.tsx`
- `components/ContactForm.tsx`
- `components/WorkshopBookingForm.tsx`

Work:

- update local form state keys to mirror backend naming where practical, or map them explicitly before submit
- add `source_page`
- make documented required fields actually required:
  - test ride: `email`
  - contact: `email`, `subject`
  - workshop: `email`
- preserve current UX success states
- add field-level or top-level rendering for backend validation errors

Recommended source-page capture:

- use `usePathname()` inside each client form
- pass the path into the payload as `source_page`
- this is especially important for `ContactForm`, which is reused on both `/contact` and `/showroom`

### Phase 4: Align option labels with backend expectations

Files:

- `components/TestRideForm.tsx`
- `components/WorkshopBookingForm.tsx`

Work:

- confirm model names match backend accepted values exactly
- confirm `preferred_slot` strings are acceptable as-is
- confirm `service_type` labels are acceptable as-is

Risk:

- if backend uses strict choices, human-friendly labels may fail validation even if the field names are correct

Open dependency:

- verify accepted choice values with backend team if not documented

### Phase 5: Validation and error UX

Files:

- same 3 form components

Work:

- show API validation feedback cleanly instead of only generic failure text
- prefer:
  - top summary message
  - per-field messages under inputs when backend returns field keys
- keep submit button disabled while pending
- optionally clear errors on input change

### Phase 6: Verification

Work:

1. local test against backend dev server for all three forms
2. verify success flow
3. verify invalid phone
4. verify missing required email
5. verify past-date rejection from backend
6. verify `source_page` differs correctly between `/contact` and `/showroom`
7. run:
   - `npm run lint`
   - `npm run build`

## File-Level Change List

- `app/api/test-ride/route.ts`
  - replace stub with backend proxy to `/api/uvbengaluru/test-ride-requests/`
- `app/api/contact/route.ts`
  - replace stub with backend proxy to `/api/uvbengaluru/contact-requests/`
- `app/api/workshop-booking/route.ts`
  - replace stub with backend proxy to `/api/uvbengaluru/workshop-bookings/`
- `components/TestRideForm.tsx`
  - fix payload keys, require email, add source page, show backend errors
- `components/ContactForm.tsx`
  - fix payload keys, require email/subject, add source page, show backend errors
- `components/WorkshopBookingForm.tsx`
  - fix payload keys, require email, add source page, show backend errors
- `lib/formSubmissions.ts` or `lib/api.ts`
  - shared route helper for backend calls and response normalization
- optional `.env.example`
  - document required backend base URL

## Open Questions Before Implementation

These are the only backend-facing details that may still need confirmation:

1. What is the exact deployed backend origin to use in production?
2. Does the backend require exact enum values for `model`, `preferred_slot`, and `service_type`, or accept free strings?
3. Should `source_page` contain pathname only (`/contact`) or full URL?

## Recommended Execution Order

1. add env-backed backend base URL
2. build shared route proxy helper
3. wire `test-ride`
4. wire `contact`
5. wire `workshop`
6. add backend validation rendering
7. lint and production build
8. manual submit verification against real backend

## Success Criteria

- all three forms create real backend records
- no form shows success when backend submission failed
- required fields in UI match backend required fields
- backend validation errors are visible to the user
- `ContactForm` submits the correct `source_page` on both `/contact` and `/showroom`
- lint and build both pass

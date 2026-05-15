# UV Bengaluru — Complete SEO Growth Plan

## From invisible to top of search. A living document.

**Website:** uvbengaluru.com | **Business:** Aadya Inc. | **Location:** Nagarbhavi, Bengaluru
**Last updated:** May 2026

---

## The Core Mental Model

SEO is not a task. It is a system with five parallel tracks running simultaneously:

1. **Website** — technical health, content, metadata, schema
2. **Backlinks** — who links to you (authority signals)
3. **Google Business Profile** — local/maps visibility (separate from website)
4. **Content** — guides, comparisons, buyer intent pages
5. **Analytics** — measurement, iteration, knowing what to do next

You can't win on any one track alone. A perfect website with no backlinks doesn't rank. A perfect GBP with a broken website loses leads. All five tracks run in parallel.

---

## Phase 0: Week 1–2 — Fix the Foundations

Nothing else matters until these are done. All technical. Minimal content writing.

### Track 1 — Website Fixes (Dev work, ~12 hours total)

#### Canonical tags — CRITICAL

Three pages have their `canonical` pointing to the homepage. Google treats them as duplicates.

| Page       | Current canonical (WRONG) | Fix to                            |
| ---------- | ------------------------- | --------------------------------- |
| /about     | https://uvbengaluru.com   | https://uvbengaluru.com/about     |
| /finance   | https://uvbengaluru.com   | https://uvbengaluru.com/finance   |
| /test-ride | https://uvbengaluru.com   | https://uvbengaluru.com/test-ride |

Also fix OG:URL on /finance and /test-ride — currently pointing to homepage.

**In Next.js App Router:**

```typescript
// app/finance/page.tsx
export const metadata = {
  alternates: { canonical: "https://uvbengaluru.com/finance" },
  openGraph: { url: "https://uvbengaluru.com/finance" },
};
```

#### Title tag fixes

Remove the duplicate brand name:

- `/vehicles` → "Vehicles | UV Bengaluru | UV Bengaluru" → fix to "Ultraviolette Motorcycles in Bengaluru — X-47, F77, Tesseract | UV Bengaluru"
- `/service` → "Service & Workshop | UV Bengaluru | UV Bengaluru" → fix to "Ultraviolette Service Centre in Bengaluru | UV Bengaluru Workshop"
- `/finance` → "Finance Your Ultraviolette | UV Bengaluru | UV Bengaluru" → fix to "Electric Bike Finance in Bengaluru — EMI for Ultraviolette | UV Bengaluru"

#### H1 rewrites — all pages

Current H1s have zero keyword value. Replace:

| Page           | Current H1                                  | Replace with                                                                 |
| -------------- | ------------------------------------------- | ---------------------------------------------------------------------------- |
| Homepage       | "Electric Performance. Refined."            | "Official Ultraviolette Dealership in Bengaluru — UV Bengaluru, Nagarbhavi"  |
| /vehicles      | "The Lineup"                                | "Ultraviolette Motorcycles in Bengaluru — Full Lineup at UV Bengaluru"       |
| /vehicles/x-47 | "X-47"                                      | "Ultraviolette X-47 — Electric Street Crossover in Bengaluru"                |
| /service       | "ULTRAVIOLETTE SERVICE"                     | "Ultraviolette Service Centre Bengaluru — UV Bengaluru Workshop, Nagarbhavi" |
| /finance       | "MAKE YOUR UV YOURS TODAY"                  | "Ultraviolette Finance in Bengaluru — EMI Plans & Ownership Support"         |
| /test-ride     | "FEEL THE DIFFERENCE. BOOK YOUR TEST RIDE." | "Book an Ultraviolette Test Ride in Bengaluru"                               |
| /about         | "BENGALURU'S ELECTRIC FUTURE"               | "About UV Bengaluru — Official Ultraviolette Dealership in Nagarbhavi"       |

#### Technical verification

- Confirm sitemap.xml exists at uvbengaluru.com/sitemap.xml
- Submit sitemap to Google Search Console
- Confirm robots.txt doesn't block any /vehicles/, /test-ride, or guide pages
- Recommended robots.txt:
  User-agent: \*
  Allow: /
  Disallow: /api/
  Sitemap: https://uvbengaluru.com/sitemap.xml

### Track 2 — Schema Markup (CRITICAL — None exists currently)

#### LocalBusiness + MotorcycleDealer — Homepage

```json
{
  "@context": "https://schema.org",
  "@type": ["MotorcycleDealer", "LocalBusiness"],
  "name": "UV Bengaluru",
  "description": "Official Ultraviolette dealership in Nagarbhavi, Bengaluru. X-47, F77 Mach 2, F77 SuperStreet, test rides, service, and finance support.",
  "url": "https://uvbengaluru.com",
  "telephone": "+919606955530",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "SJA Arcade, 904, 10th Cross Rd, ITI Layout, Papareddipalya",
    "addressLocality": "Naagarabhaavi, Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560072",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    }
  ],
  "brand": { "@type": "Brand", "name": "Ultraviolette Automotive" },
  "areaServed": "Bengaluru, Karnataka, India",
  "sameAs": ["https://wa.me/919606955529"]
}
```

#### Product schema — All vehicle pages

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Ultraviolette X-47",
  "description": "High-performance electric street crossover with UV Hypersense radar, 323 km IDC range, and 145 km/h top speed.",
  "image": "https://uvbengaluru.com/assets/vehicles/x47/hero.png",
  "brand": { "@type": "Brand", "name": "Ultraviolette Automotive" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "249000",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "UV Bengaluru" }
  }
}
```

Prices by model:

- X-47: 249000 / InStock
- X-47 Desert Wing: 459000 / InStock
- F77 Mach 2: 399000 / InStock
- F77 SuperStreet: 309000 / InStock
- Tesseract: no price / PreOrder
- Shockwave: 175000 / PreOrder

#### FAQPage schema — All 6 guide pages + vehicle pages

The Q&A content is already written on the site. Just wrap it:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the F77 price in Bengaluru?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The F77 SuperStreet starts from INR 3,09,000 and F77 Mach 2 from INR 3,99,000 in Bengaluru (ex-showroom). Contact UV Bengaluru for current on-road pricing including insurance and registration."
      }
    }
  ]
}
```

Apply to: /f77-price-bengaluru, /ultraviolette-showroom-bengaluru, /ultraviolette-test-ride-bengaluru, /f77-mach-2-vs-f77-superstreet, /ultraviolette-service-centre-bengaluru, /electric-bike-finance-bengaluru, /vehicles/x-47, /vehicles/f77-mach-2, /vehicles/f77-superstreet

#### BreadcrumbList schema — All inner pages

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://uvbengaluru.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Vehicles",
      "item": "https://uvbengaluru.com/vehicles"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "X-47",
      "item": "https://uvbengaluru.com/vehicles/x-47"
    }
  ]
}
```

#### Reusable Next.js SchemaScript component

```typescript
// components/SchemaScript.tsx
export function SchemaScript({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

#### Validation checklist after schema implementation

- https://validator.schema.org — test every JSON-LD object
- https://search.google.com/test/rich-results — check FAQ, Product, LocalBusiness eligibility
- Google Search Console → Enhancements tab → check for schema errors

### Track 3 — Google Business Profile (First-week priority)

Without a verified GBP, you are completely invisible in Google Maps and the Local Pack. The Local Pack appears above all organic results. This is the fastest path to visibility.

#### Setup checklist

- [ ] Claim listing at business.google.com
- [ ] Verify by postcard or phone
- [ ] Primary category: Motorcycle Dealer
- [ ] Secondary category: Electric Vehicle Dealer
- [ ] Add full address (exactly matching website NAP)
- [ ] Add phone: +91 96069 55530
- [ ] Add WhatsApp number: +91 96069 55529
- [ ] Set hours: Mon–Sun, 10:00–19:00
- [ ] Add website URL: https://uvbengaluru.com
- [ ] Write a compelling 750-char description mentioning: Ultraviolette, X-47, F77, test ride, Nagarbhavi, Bengaluru, official dealer
- [ ] Upload minimum 20 photos: showroom exterior (3–4), interior (3–4), each vehicle (2 each), team (2–3), location landmark context (1–2)
- [ ] Add all 4 available vehicles as Products with prices
- [ ] Seed 5 Q&As with answers
- [ ] Add service area: Bengaluru + neighbouring areas

#### NAP — use this EXACTLY everywhere (consistency matters)

- **Name:** UV Bengaluru
- **Address:** SJA Arcade, 904, 10th Cross Rd, ITI Layout, Papareddipalya, Naagarabhaavi, Bengaluru, Karnataka 560072
- **Phone:** +91 96069 55530

---

## Phase 1: Month 1–2 — Listings, Backlinks & Content

### Track 1 — Backlink Acquisition

This is the #1 ranking factor you're missing. Competitors like BikeWale have thousands of authoritative sites linking to them. You need to build your link profile systematically.

#### Tier 1 — Highest priority (do first)

**Ultraviolette official dealer locator**

- Contact: dealers@ultraviolette.in or through your dealer relationship manager
- What to ask for: a link from ultraviolette.in/dealers or their dealer locator page to uvbengaluru.com
- Impact: one link from ultraviolette.in = enormous trust signal for Google. Ultraviolette's DA is very high.
- Timeline: 1–2 weeks after request

**BikeWale**

- URL: bikewale.com/dealer-locator
- How: Contact via their dealer registration form or email dealers@bikewale.com
- What you get: backlink + referral traffic + listing in their dealer locator
- Timeline: 1–2 weeks to get listed

**BikeDekho**

- URL: bikedekho.com/dealers
- How: Submit via their dealer portal or contact their city team
- Timeline: 1–2 weeks

**ZigWheels**

- URL: zigwheels.com/dealers
- How: Contact through their partner registration
- Timeline: 1–2 weeks

**CarWale / BikeWale group**

- As above — same company, submit to both

#### Tier 2 — High value directories

Submit your NAP to all of these. They give backlinks and improve local citation consistency, which feeds into Local Pack ranking.

| Directory          | URL                   | How to submit                   |
| ------------------ | --------------------- | ------------------------------- |
| JustDial           | justdial.com          | justdial.com/list-your-business |
| Sulekha            | sulekha.com           | sulekha.com/list-your-business  |
| IndiaMart          | indiamart.com         | seller.indiamart.com            |
| 91Mobiles (bikes)  | 91mobiles.com         | Contact their editorial team    |
| BikeAdvice.in      | bikeadvice.in         | Contact for dealer listing      |
| EVIndia.com        | evindia.com           | Contact for dealer mention      |
| ElectricVehicleWeb | electricvehicleweb.in | Contact for EV dealer listing   |

#### Tier 3 — Earned media outreach

These take longer but give editorial backlinks (the most valuable kind):

- **Deccan Herald** tech/EV desk — pitch "Bengaluru's first Ultraviolette dealership" angle
- **Times of India Bengaluru** — pitch EV adoption angle + local business story
- **YourStory** — startup angle (new EV dealership, performance bikes, Bengaluru youth)
- **Inc42** — EV ecosystem angle
- **Team-BHP** — Bengaluru chapter / Ultraviolette thread (extremely high DA, very active EV community)
- **Reddit r/bangalore** + **r/ultraviolette** — community presence (not backlinks, but brand awareness that drives branded searches)

### Track 2 — New Content Pages

Publish these in priority order:

#### /x-47-price-bengaluru (Immediate — high search volume)

- Mirror the structure of /f77-price-bengaluru
- Include all 6 variant prices, on-road cost estimate, EMI indication
- Add FAQPage schema
- Target queries: "ultraviolette x47 price bangalore", "x-47 on road price bengaluru"

#### /f77-mach-2-vs-f77-superstreet (improve existing page)

Currently has zero comparison content. Add:

- Side-by-side spec table
- Riding style recommendation section
- Price difference summary
- Which one to choose decision guide

#### /x-47-vs-f77-bengaluru (New)

- "Which Ultraviolette to buy" is a top top-of-funnel query
- Cover: price difference, riding position, use case, range in real Bengaluru conditions
- Add FAQPage schema

#### Service page content expansion

Add to /service:

- 5-question FAQ section with FAQPage schema
- Service visit timing expectations (how long does a service take?)
- What to bring when you come in
- Internal link to /ultraviolette-service-centre-bengaluru guide

#### Neighbourhood coverage

Add to /showroom:
UV Bengaluru serves riders from across Bengaluru including Nagarbhavi,
Rajajinagar, Vijayanagar, Basaveshwara Nagar, Kamakshipalya, RR Nagar,
Malleshwaram, Yeshwanthpur, and surrounding areas.

This single paragraph creates neighbourhood keyword coverage that directly feeds AI answers for "Ultraviolette dealer near [area]" queries.

### Track 3 — Analytics Infrastructure

You cannot improve what you cannot measure. Set this up before doing any content work.

#### Google Analytics 4

- Install GA4 if not done
- Set up conversion events:
  - `test_ride_form_submit` — when test ride form is submitted
  - `whatsapp_click` — when WhatsApp button is tapped
  - `phone_click` — when phone number is clicked
  - `contact_form_submit` — when contact form is submitted
- Create an Audience for "Engaged visitors" (2+ pages viewed, 60+ seconds on site)

#### Google Search Console

- Verify property
- Submit sitemap.xml
- Set target country: India
- Monitor weekly: Index Coverage, Core Web Vitals, Manual Actions

#### Microsoft Clarity (Free — install immediately)

- clarity.microsoft.com — free heatmaps and session recordings
- Shows you exactly where users stop scrolling, what they click, what they ignore
- Particularly useful on the test ride page (do users complete the form? where do they drop off?)

#### Bing Webmaster Tools

- Submit separately at bing.com/webmasters
- Bing powers Copilot AI search — separate submission required

---

## Phase 2: Month 3–4 — Authority Building

By now you should have:

- GBP verified and generating local visibility
- Schema markup live and validated
- First set of directory backlinks live
- Analytics showing real data

### What to do with analytics data

Open GSC → Performance → Queries.
Look for:

- Queries with 50+ impressions but under 3% CTR → these pages need better title tags and meta descriptions
- Queries where you rank position 8–20 → these are pages close to page 1, worth expanding content on
- Queries you appear for that have no dedicated page on your site → create those pages

Open GA4 → Pages and screens.
Look for:

- Pages with high traffic but zero conversions → content problem or CTA problem
- Pages with low time-on-page (under 30 seconds) → content isn't matching what users expected
- Pages with high exit rate → user didn't find what they needed

Open Clarity → Heatmaps.
Look for:

- Dead clicks (users clicking things that aren't links) → something looks clickable but isn't
- Rage clicks → something isn't working, frustrating users
- Scroll depth → are users seeing your CTAs or stopping before them?

### Content expansion based on data

#### Bengaluru EV infrastructure guide (Month 3)

Title: "Where to Charge Your Ultraviolette in Bengaluru — Charging Stations Guide"
This is evergreen, gets searched constantly, and has almost no local competition.

Include:

- Major charging station locations near Nagarbhavi, Koramangala, Whitefield, Electronic City, etc.
- Charging time expectations for X-47 and F77 range
- Home charging setup basics
- Link back to /vehicles and /finance

#### Ownership experience content (Month 3–4)

Title: "Ultraviolette X-47 in Bengaluru — Real-World Range, Traffic, and Ownership Notes"

Why this works:

- Long-tail, low competition, high intent
- Builds trust and time-on-site
- AI engines love first-person, specific, locally grounded content

#### On-road price breakdown (Month 4)

Add to every vehicle page:

- Bengaluru ex-showroom price
- RTO registration estimate (Karnataka)
- Insurance estimate
- Total on-road estimate
- Note that these change — verify with showroom

This closes the biggest content gap vs. BikeWale. Their pages already have this. Yours don't.

### Earned media push (Month 3–4)

**Team-BHP strategy**
Team-BHP has extremely high DA and an active Bengaluru community. Don't spam. Instead:

- Participate genuinely in Ultraviolette threads
- When someone asks "where to buy Ultraviolette in Bangalore" — answer helpfully, mention UV Bengaluru
- Consider sponsoring a Team-BHP reader test ride event at your showroom — generates a thread, photos, and backlinks

**Riding community presence**

- Riders of Bengaluru (Facebook) — 50k+ members, active
- Bangalore Bikers (Facebook/WhatsApp groups)
- Reddit r/bangalore and r/ultraviolette

Don't advertise. Contribute genuinely. Answer questions. Share knowledge.

---

## Phase 3: Month 5–6 — Defend and Expand

By this point:

- You should have page-1 visibility for multiple long-tail queries
- GBP should be generating leads
- You should have your first set of Google reviews

### Review acquisition system

Reviews directly affect Local Pack ranking. Start collecting them systematically.

**System:**

1. Every test ride completion → ask verbally: "Would you mind leaving us a Google review? It takes 30 seconds."
2. WhatsApp the review link immediately after: `https://g.page/r/[your-place-id]/review`
3. Every purchase → same process
4. Every service visit → same process

**Target:** 50+ reviews with 4.5+ average within 6 months.

**Respond to every review within 24 hours:**

- Positive: thank them, mention the specific model/service they interacted with (keyword signal)
- Negative: respond professionally, take it offline, show you care

**Once you have 5+ reviews, add AggregateRating schema:**

```json
{
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "24",
  "bestRating": "5"
}
```

Star ratings in search results increase CTR by 15–35%. This is significant.

### Content audit and refresh

Run this analysis:

- Pages with zero organic sessions in 3 months → consolidate or kill
- Pages with stale prices → update immediately (stale prices cause immediate bounce, hurts ranking)
- Pages where position improved to 11–20 → expand content, improve schema, add internal links

### YouTube and video content

YouTube is a search engine that Google owns. It is almost completely uncontested for "Ultraviolette Bengaluru" video searches.

**Start immediately with:**

- Showroom walkthrough (5 min) — "Inside UV Bengaluru — Ultraviolette's Official Nagarbhavi Showroom"
- X-47 test ride walkaround (3 min) — "Ultraviolette X-47 — First Look at UV Bengaluru"
- F77 vs X-47 (5 min) — "Which Ultraviolette? F77 vs X-47 for Bengaluru Riders"

**Embed these videos on corresponding website pages.** YouTube embeds increase time-on-page, which is a positive engagement signal.

---

## Ongoing: The Permanent Maintenance System

This is the rhythm that keeps you on top once you get there.

### Weekly (every week, no exceptions)

- [ ] Post 1 GBP update (test ride slot open, new colour arrived, event, tip, photo)
- [ ] Respond to all new Google reviews
- [ ] Post 2–3 pieces of Instagram/Reels content (vehicle content, showroom, rider stories)
- [ ] Quick GSC scan: any sudden ranking drops or crawl errors?

### Monthly (first Monday of every month)

#### GSC review — 30 minutes

Open Google Search Console → Performance → compare to previous period.
Ask:

- Which queries gained rankings? Which dropped?
- Which pages have impressions but low CTR? (Fix title tags and meta descriptions)
- Any new queries appearing that don't have a dedicated page? (Content opportunity)

#### GA4 review — 30 minutes

Open Google Analytics → Engagement → Pages and screens.
Ask:

- Which pages are driving test ride form submissions?
- Which pages have high traffic but zero conversions? (Content/CTA problem)
- Where are users entering the site? (Top landing pages)
- Where are users exiting? (Where are we losing them?)

#### Clarity review — 20 minutes

Pick the top 3 pages by traffic. Watch 5 session recordings each.
Ask:

- Are users finding the test ride CTA?
- Are there any dead clicks or rage clicks?
- Where are users stopping? Are they seeing the FAQ section?

#### Competitor check — 20 minutes

Search in incognito: "ultraviolette bengaluru", "ultraviolette x47 bangalore", "ultraviolette test ride bengaluru"
Ask:

- Who is ranking above us?
- Do they have content we don't?
- Are there any new players?

#### Content action — monthly

Based on the above, do one of:

- Publish a new guide page (if data shows a missing query opportunity)
- Expand an existing thin page (if a page has impressions but low CTR/ranking)
- Update outdated pricing or content on any page
- Kill/redirect a page with no traffic and no unique content

### Quarterly (every 3 months)

#### Full technical SEO audit

- Run site through Screaming Frog or ahrefs site audit
- Check for: broken links, redirect chains, missing schema, duplicate content, slow pages
- Core Web Vitals check via PageSpeed Insights (both mobile + desktop) — target: LCP <2.5s, CLS <0.1, INP <200ms

#### Keyword gap analysis

- Use ahrefs or Semrush free tier
- Compare your ranking keywords vs. top competitor (BikeWale Ultraviolette Bengaluru pages)
- Identify queries they rank for that you don't — create pages for the most relevant ones

#### Content performance audit

Run this every quarter:

**Kill criteria** (redirect to nearest relevant page):

- Under 50 organic sessions in 3 months
- Zero conversions in 3 months
- Covers the same topic as another page that ranks better

**Expand criteria:**

- Ranking position 8–20 for a valuable query
- High impressions, low CTR
- High traffic but users bounce in under 30 seconds

**Leave alone:**

- Consistent traffic, reasonable conversion rate, good ranking

#### GBP full audit

- Are all photos current? Have new models arrived that aren't photographed?
- Are all products current with correct prices?
- Are hours correct (holiday adjustments)?
- Is the description still accurate?
- How many reviews in the last quarter? On track for 50+ by month 6?

#### Backlink profile review

- Check ahrefs or Moz for new links pointing to the site
- Check for any toxic/spammy links that need disavowal
- Identify new link opportunities in EV/auto/Bengaluru business space

### Event-triggered actions (no schedule — react within defined timeframes)

| Event                                          | Action                                              | Timeline            |
| ---------------------------------------------- | --------------------------------------------------- | ------------------- |
| New Ultraviolette model announced              | Create guide page for that model                    | Within 24 hours     |
| Price change on any model                      | Update all pages, schema, and GBP products          | Same day            |
| Competitor publishes a new guide for UV in BLR | Publish a more detailed version                     | Within 1 week       |
| New Google review posted (any)                 | Respond                                             | Within 4 hours      |
| Negative review posted                         | Respond professionally + internal follow-up         | Within 2 hours      |
| Google algorithm update                        | Check GSC for ranking changes, adapt                | Within 48 hours     |
| Ultraviolette announces new feature/OTA update | Update spec pages and publish content about it      | Within 48 hours     |
| New Bengaluru EV policy announced              | Create commentary content                           | Within 1 week       |
| Tesseract/Shockwave launch confirmed           | Create pre-launch content, guide pages, GBP updates | Day of announcement |

---

## What Your Competitors Are Actually Doing

Understanding the competitive landscape helps you prioritize correctly.

### BikeWale / BikeDekho

- Have structured data on every single vehicle page (price, specs, images, reviews)
- User-generated reviews (hundreds per model) — AggregateRating schema enabled
- Dealer locator pages that link to authorized dealers (you want a link from here)
- Price comparison tools that drive massive long-tail traffic
- Updated daily by editorial teams
- **You cannot out-content them.** Your strategy is to own the local, dealer-specific, and hyper-specific queries they don't target.

### ZigWheels

- Same structure as BikeWale
- Very strong on "price in [city]" content
- Their Bengaluru-specific pages rank for the exact queries you want

### Ultraviolette's own website

- Their product pages rank for brand + model queries
- They are not competing for "dealer" or "test ride in Bengaluru" queries — that's your lane

### Your actual opportunity

Your competitors are national. They don't serve Bengaluru specifically. They can't:

- Answer "where do I go for a test ride this Saturday?"
- Confirm real Bengaluru on-road pricing with current offers
- Tell someone what the service experience is like at the actual showroom
- Appear in "near me" searches
- Have a GBP that shows up when someone searches on Maps

These are your lanes. Own them completely.

---

## Key Tools Reference

| Tool                       | Purpose                                         | Cost                |
| -------------------------- | ----------------------------------------------- | ------------------- |
| Google Search Console      | Rankings, crawl errors, indexing, schema status | Free                |
| Google Analytics 4         | Traffic, user behaviour, conversions            | Free                |
| Microsoft Clarity          | Heatmaps, session recordings                    | Free                |
| Google Business Profile    | Local/maps visibility                           | Free                |
| Bing Webmaster Tools       | Bing/Copilot indexing                           | Free                |
| PageSpeed Insights         | Core Web Vitals                                 | Free                |
| Schema.org Validator       | Test JSON-LD                                    | Free                |
| Google Rich Results Test   | Test schema for rich result eligibility         | Free                |
| Screaming Frog (free tier) | Site crawl, broken links, duplicate content     | Free up to 500 URLs |
| Ahrefs Webmaster Tools     | Backlink profile, keyword tracking (limited)    | Free                |

---

## The One Rule That Overrides Everything

**Update your prices the same day they change.**

If a user clicks your site from Google, sees ₹2.49L for the X-47, then calls and gets told a different price — they bounce, feel misled, and don't convert. Google sees the bounce. Google demotes the page. Every stale price on your site actively hurts both conversions and ranking. This one operational discipline has compounding SEO impact over time.

---

_This document should be reviewed and updated quarterly. The SEO landscape, competitor content, and Ultraviolette's model lineup will all change. The system that adapts wins._

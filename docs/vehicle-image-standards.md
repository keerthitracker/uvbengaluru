# Vehicle Image Standards

This page defines how vehicle imagery should be used across the UV Bengaluru landing and vehicle detail pages.

## Role Standards

| Role | Standard | Notes |
| --- | --- | --- |
| Homepage hero | Strongest clean product render, no baked-in poster copy, no watermark, no collage | Use the featured launch model with enough contrast for the dark landing page. |
| Vehicle cards | Clean product side profile or near-side profile on a neutral background | Cards are for comparison, so silhouettes should be uniform across models. |
| Vehicle detail hero | Clean product render with more visual weight than the card image | Prefer official studio/configurator imagery. Avoid marketing posters with text overlays. |
| Color variants | Same angle, crop, background, and scale within each model | Only the paint color should change when users switch colors. |
| Feature images | Component-specific or feature-specific official imagery | If a true feature image is unavailable, omit the image instead of reusing an unrelated hero/card file. |
| Gallery | Distinct additional views, lifestyle images, or close details | Do not store the same binary under multiple gallery/detail names. |

## Source Priority

1. Official Ultraviolette product pages and configurator assets.
2. Official Ultraviolette CDN assets referenced by those pages.
3. Reliable automotive media only when official assets do not expose a required color or angle.

## Current Model Decisions

| Model | Card image | Detail hero | Color variants | Notes |
| --- | --- | --- | --- | --- |
| X-47 | Official product render for the model card | Turbo Red clean product render | Official red/white, reliable fallback for Cosmic Black | Lifestyle lineup remains gallery-only. |
| X-47 Desert Wing | Sand product render | Sand product render | Sand finish only | Removed repeated 7 MB binaries from detail/feature/gallery roles. |
| F77 Mach 2 | Official clean side-profile navigation render | Same clean side-profile render until a better official studio hero is available | Existing official color set | Removed text-overlay hero usage from cards and hero. |
| F77 SuperStreet | Official clean side-profile navigation render | Same clean side-profile render until a better official studio hero is available | Existing official color set | Removed text-overlay hero usage from cards and hero. |
| Tesseract | Existing clean official product render | Existing clean official product render | Existing official color set | No immediate replacement needed. |
| Shockwave | Existing side-profile render | Existing hero render | Existing official color set | Replaced tiny wheel/display placeholders with official feature imagery. |
| F99 | Existing race hero | Existing race hero | Not applicable | Removed duplicate carbon-fibre detail reference until a distinct official detail asset is sourced. |

## Maintenance Rules

- Do not use card images as feature-detail images unless the feature is specifically about the full vehicle stance.
- Do not add SVG logo placeholders as vehicle color images.
- Do not keep duplicate binaries under different semantic names.
- Prefer adding one shared file and referencing it in multiple display roles over copying the same binary to several paths.
- Add source context in commit notes when introducing third-party fallback imagery.

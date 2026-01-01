# QPrompt Website Refactor Summary

## Overview
- Converted major sections to data-driven Alpine.js templates.
- Extracted hero/WASM logic into a dedicated module.
- Standardized button/CTA styling with reusable classes.
- Switched to bundled Font Awesome via npm import in SCSS.

## Key Changes
- Alpine bootstrap (`src/js/site.js`):
  - Registers `navigation`, `downloads`, `featureContent`, `communityContent`, `supportContent`.
  - Adds `buttons` store for class variants.
  - Exposes hero `init` from `src/js/hero.js` to `window.init`.
- Hero logic (`src/js/hero.js`):
  - Handles video/WASM reveal, parallax, monitor sync, mobile fallback.
- Data modules:
  - `src/data/navLinks.js`: nav links + CTA.
  - `src/data/downloads.js`: versions, platform filters, cards/links schema.
  - `src/data/features.js`: feature reasons and cards.
  - `src/data/community.js`: community cards, donation options, manuals, support links.
- `index.html`:
  - Uses `<template x-for>` for nav, downloads, features, community, support.
  - Base classes on links/buttons (`glass-link`, `cta-pill`) plus variants.
  - Removed references to deleted static FA/Popper assets; relies on bundled CSS.
- Styling (`src/main.scss`):
  - Imports Font Awesome from npm.
  - Component classes: `glass-link`, `cta-pill`, `filter-chip`, `glass-card`, `nav-link`, `nav-cta`.
  - Green-themed variants for outline/primary CTAs; glass style for download buttons.

## Download Schema (src/data/downloads.js)
```
platformFilters: [
  { id: 'all', label: 'All' },
  { id: 'linux', label: 'Linux', icon: 'fab fa-linux' },
  { id: 'macos', label: 'macOS', icon: 'fab fa-apple' },
  { id: 'windows', label: 'Windows', icon: 'fab fa-windows' },
]

downloadVersions: [
  {
    id: '2.0',
    label: 'v2.0 (Stable)',
    cards: [
      {
        platform: 'linux',
        title: 'Linux',
        icon: 'fab fa-linux',
        iconColor: 'text-brand-primary',
        sections: [
          {
            title: 'Universal',
            links: [
              { label: 'Flatpak (x86_64, arm64)', href: 'https://flathub.org/apps/details/com.cuperino.qprompt', icon: 'fas fa-store', variant: 'ghost' },
            ],
          },
          {
            title: 'Debian 13 / Ubuntu 26.04',
            links: [
              { label: 'Download .deb (amd64)', href: '#', icon: 'fas fa-download', variant: 'ghost' },
              { label: 'Download .deb (arm64)', href: '#', icon: 'fas fa-download', variant: 'ghost' },
            ],
            notes: ['The above ver. plus RPi OS Trixie'],
          },
        ],
      },
      // macOS, Windows cards...
    ],
  },
  // Legacy 1.2 similarly structured
]
```

Alpine `downloads` store:
- State: `versionId`, `platform`
- Helpers: `setVersion(id)`, `setPlatform(id)`, `currentVersion`, `filteredCards`
- `linkClasses(variant)` maps to glass-link variants.

## Button/CTA Classes
- Base: `glass-link` (full-width, glass background, border)
  - Variants: `primary`, `accent`, `ghost`, `info`, `neutral`
- Base: `cta-pill` (rounded pill, glass background)
  - Variants: `primary`, `neutral`, `outline` (green-themed)
- Filters: `filter-chip`, `filter-chip--primary`, `filter-chip--accent`
- Cards: `glass-card`, `download-card` (stretched grid cards)

## Build/Test
- `bun run build` passes (only Bootstrap Sass deprecation warnings).
- Use `bun run dev` for local HMR; hard-refresh to pick up CSS changes.

## Notes
- All buttons/CTAs now share the site theme (glass + brand greens).
- Hero still initialized via `body onload="init()"`, now backed by `src/js/hero.js`.
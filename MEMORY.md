# AES Summit 2026 — Project Memory & Architecture Guide

> **Document Version**: 1.0.0  
> **Repository**: [ACE-Society-IT/aes](https://github.com/ACE-Society-IT/aes)  
> **Tech Stack**: Next.js 16 (App Router, Turbopack), Tailwind CSS, Framer Motion, Lucide React  
> **Host Venue**: Alpha College Karachi · November 13–15, 2026  

---

## 1. Core Principles & Admin Directives

1. **Strict Alternating Background Sequence**:
   - The homepage follows an unbroken Red / White / Red / White rhythm:
     1. `Hero`: **RED** (`#5a0d1b`)
     2. `Vision`: **WHITE** (`#f8eee1`)
     3. `Competition`: **RED** (`#5a0d1b`)
     4. `Modules`: **WHITE** (`#f8eee1`)
     5. `Schedule`: **RED** (`#5a0d1b`)
     6. `Handbook`: **WHITE** (`#f8eee1`)
     7. `Faqs`: **RED** (`#5a0d1b`)
     8. `Footer`: **RED** (`#5a0d1b`)
2. **Device-Specific Proportions (Less Bulk on Mobile Only)**:
   - On mobile (`< 768px`): Reduced padding (`py-10 sm:py-16 md:py-28`, `p-4 sm:p-7 md:p-10`), compact cards, tight vertical footprints.
   - On PC (`md:` and above): Preserve luxury spacing, grand typography, and expansive desktop bulk.
3. **No AI-Generated Image Assets**:
   - The delegate handbook (`Handbook.jsx`) uses an official vector-card emblem layout with `/aes-logo.png` and gold borders. No AI-generated covers.
4. **No Executive Photos for Now**:
   - Executive Council members (`app/executives/page.jsx`) render styled initial monogram badges (`ExecutiveAvatar`) with gold borders and vector silhouettes.
5. **Never Assume Prize Pools or Numbers**:
   - Never display unverified claims like "100,000 PKR" or "1.5M". Top performers and teams receive official summit trophies, shields, and awards at the closing gala.
6. **Plain, Simple English**:
   - Keep website copy, FAQs, and descriptions accessible, clear, and punchy.

---

## 2. 7-Color Strict Palette (`DESIGN-RULES.md`)

| Color Role | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Crimson** | `#5a0d1b` | Primary dark surface, hero background, schedule container |
| **Ruby Burgundy** | `#650d1c` | Secondary text on light backgrounds, gradient undertones |
| **Velvet Wine** | `#701020` | Card hover backgrounds, badge containers, active pill states |
| **Accent Cardinal** | `#89192c` | Structural hairline dividers, borders, subtle shadows |
| **Alabaster Cream** | `#f8eee1` | Primary light section background, high-contrast headline text |
| **Warm Parchment**| `#e8dcc6` | Secondary body text on dark sections, card backdrop tint |
| **Imperial Gold** | `#f1ca7e` | Accent highlights, active progress bars, sparkles, emblem rims |

---

## 3. Section Architecture & Implementations

### A. Navigation (`components/Navbar.jsx`)
- **Desktop**: 3-state morphing pill (Full -> Collapsed Capsule -> Hidden on scroll down, revealed on scroll up).
- **Mobile**: Responsive hamburger button (`Menu` / `X`) with full-screen animated slide-over drawer, quick links (`Schedule`, `Modules`, `Executives`, `Ambassadors`, `FAQs`), direct CTA buttons, and body scroll lock.

### B. Module Overview (`components/home/Modules.jsx`)
- **Outer Background**: **WHITE** (`#f8eee1`).
- **Scroll Mechanism**: 3D Stacking sticky cards with linear scale transforms via Framer Motion `useScroll` / `useTransform`.
- **Custom-Made Simple Emojis**:
  - `01 / Investomania`: 📈 Custom stock chart candle with profit arrow & coin
  - `02 / Defend the Empire`: 🛡️ Gilded imperial crisis defense shield
  - `03 / Market Monopoly`: 🏛️ Classical property & banking column edifice
  - `04 / Venture Verse`: 🚀 Orbital startup venture rocket
  - `05 / Viral Velocity`: ⚡ High-voltage viral speed lightning bolt
- **Badges**: Slanted parallelogram round indicators (`transform -skew-x-12`).

### C. Summit Track / Timeline (`components/home/Schedule.jsx`)
- **Outer Background**: **RED** (`#5a0d1b`).
- **Pinned Scroll-Through**: Container is `h-[240vh] md:h-[320vh]` with `sticky top-0 h-screen`. The user scrolls through Day 01 -> Day 02 -> Day 03 before the page scrolls to the next section.
- **Controls**: No pause/resume buttons. Interactive day tabs with real-time scroll progress line indicators.
- **Milestones**: Ultra-minimalist and punchy (Time, Title, Stage, Tag). Zero long paragraph bloat.

### D. Delegate Handbook (`components/home/Handbook.jsx`)
- **Outer Background**: **WHITE** (`#f8eee1`).
- Vector publication card with official emblem (`/aes-logo.png`), 21-page PDF indicator, 2-column agenda list, and direct PDF download CTA.

### E. Frequently Asked Questions (`components/home/Faqs.jsx`)
- **Outer Background**: **RED** (`#5a0d1b`).
- Smooth accordion with index pills, question toggles, and simplified plain English answers.

### F. Footer (`components/Footer.jsx`)
- **Outer Background**: **RED** (`#5a0d1b`).
- Verified contact information for Presidents, General Secretary, Alpha College Karachi venue, social badges, and monumental interactive `AES` hover text.

---

## 4. Key Project Commands

- **Development Server**: `npm run dev` (starts Turbopack on `http://localhost:3000`)
- **Production Build**: `npm run build`
- **Linting**: `npm run lint`
- **Git Push (PowerShell)**: `git add .; git commit -m "commit message"; git push origin main`

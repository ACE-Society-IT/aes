## Extracted Color Reference

### Light Theme / Content Section (`Our Vision`)



| Element / Usage | Hex Code | RGB Value | Tailwind Equivalent / Custom Token |
| --- | --- | --- | --- |
| **Primary Background** (Warm Cream/Alabaster)

 | `#F5F2EB` | `rgb(245, 242, 235)` | `bg-[#F5F2EB]` or `bg-surface-light` |
| **Icon Card Background** (Pure Crisp White)

 | `#FFFFFF` | `rgb(255, 255, 255)` | `bg-white` |
| **Icon Card Border / Shadow** (Subtle Warm Stone)

 | `#EBE6DC` | `rgb(235, 230, 220)` | `border-[#EBE6DC] shadow-sm` |
| **Primary Heading (`Our Vision`)** (Deep Espresso)

 | `#382A24` | `rgb(56, 42, 36)` | `text-[#382A24]` or `text-brand-dark` |
| **Card Subheadings & Icons** (Dark Roast Brown)

 | `#2B1E18` | `rgb(43, 30, 24)` | `text-[#2B1E18]` |
| **Body Copy / Descriptions** (Cool Muted Slate)

 | `#4B5563` | `rgb(75, 85, 99)` | `text-gray-600` / `text-[#4B5563]` |

### Dark Theme / Hero Section (`AES` Hero)



| Element / Usage | Hex Code | RGB Value | Tailwind Equivalent / Custom Token |
| --- | --- | --- | --- |
| **Hero Background Base** (Deep Espresso Brown)

 | `#281A14` | `rgb(40, 26, 20)` | `bg-[#281A14]` or `bg-surface-dark` |
| **Hero Radial Glow** (Center Warm Undertone)

 | `#38251D` | `rgb(56, 37, 29)` | `from-[#38251D] to-[#211510]` |
| **Primary Brand Accent (`AES` Logo)** (Warm Sand/Beige)

 | `#E5D9C5` | `rgb(229, 217, 197)` | `text-[#E5D9C5]` or `text-brand-beige` |
| **Hero Title & Nav Links** (Crisp Off-White)

 | `#F4EFEA` | `rgb(244, 239, 234)` | `text-[#F4EFEA]` |
| **Hero Subtitle / Muted Copy** (Warm Taupe/Tan)

 | `#B09B8C` | `rgb(176, 155, 140)` | `text-[#B09B8C]` |
| **Date Badge Background** (Translucent Charcoal-Brown)

 | `#3A2D28` | `rgb(58, 45, 40)` | `bg-[#3A2D28]/80` or `bg-white/5` |
| **Date Badge Border** (Subtle Muted Rim)

 | `#52433D` | `rgb(82, 67, 61)` | `border-[#52433D]` or `border-white/10` |
| **Date Badge Weekday Text** (Muted Warm Gray)

 | `#9CA3AF` | `rgb(156, 163, 175)` | `text-gray-400` |
| **Primary CTA (`Register` Pill)** (Pure White / Dark Text)

 | `#FFFFFF` / `#1E1410` | `rgb(255,255,255)` | `bg-white text-[#1E1410] rounded-full` |

---

## Complete `design-rule.md` File

Copy and save the block below directly as `design-rule.md` in your project root:

```markdown
# AI Agent Design & Frontend Architecture Rules (`design-rule.md`)

> **CRITICAL DIRECTIVE FOR AI AGENTS:** 
> You MUST read and strictly follow every constraint in this document before creating, modifying, or styling any component. **NEVER hallucinate, invent, or substitute hex codes, colors, or arbitrary CSS files.**

---

## 1. Strict Color System (Zero Hallucination Policy)

You are strictly forbidden from using default Tailwind colors (like `bg-blue-500`, `bg-amber-900`, `bg-neutral-900`) for brand surfaces or typography unless explicitly mapped below. Use ONLY the following exact hex tokens or their mapped Tailwind classes.

### A. Light Mode / Content Surface Tokens (`Our Vision` Aesthetic)
- **Primary Section Background:** `#F5F2EB` (`bg-[#F5F2EB]`) — Warm cream/alabaster surface. Never use pure white (`#FFFFFF`) as a main page background.
- **Elevated Card / Icon Container Background:** `#FFFFFF` (`bg-white`) — Used strictly for icon containers, floating cards, and pills resting on top of `#F5F2EB`.
- **Card Border & Subtle Divider:** `#EBE6DC` (`border-[#EBE6DC]`) — 1px solid subtle border with soft elevation (`shadow-sm`).
- **Primary Display Heading:** `#382A24` (`text-[#382A24]`) — Deep espresso brown for `h1` and `h2` titles.
- **Card Feature Title & Icon Stroke:** `#2B1E18` (`text-[#2B1E18]`) — Rich dark roast for `h3`/`h4` subheadings and SVG strokes.
- **Body Copy & Descriptions:** `#4B5563` (`text-[#4B5563]` or `text-gray-600`) — Cool muted slate for clean readability against warm backgrounds.

### B. Dark Mode / Hero Surface Tokens (`AES` Hero Aesthetic)
- **Primary Dark Background Base:** `#281A14` (`bg-[#281A14]`) — Deep espresso brown base.
- **Hero Center Spotlight / Gradient:** `radial-gradient(circle at center, #38251D 0%, #281A14 65%, #1E130E 100%)` — Gives depth behind hero logos and central typography.
- **Brand Monogram / Primary Accent:** `#E5D9C5` (`text-[#E5D9C5]` / `bg-[#E5D9C5]`) — Warm sand/champagne beige used for primary brand marks (`AES`).
- **Dark Surface Primary Text & Nav Links:** `#F4EFEA` (`text-[#F4EFEA]`) — Soft warm white for hero headings, dates (`07`, `08`, `09`), and navigation items.
- **Dark Surface Muted Subtitle:** `#B09B8C` (`text-[#B09B8C]`) — Muted warm taupe/tan for hero paragraph descriptions.
- **Glass / Elevated Badge Surface:** `#3A2D28` (`bg-[#3A2D28]/80 backdrop-blur-sm`) — Used for date cards and dark-mode secondary containers.
- **Glass / Elevated Badge Border:** `#52433D` (`border-[#52433D]`) — 1px solid border around dark-mode cards.
- **Dark Surface Micro-Labels:** `#9CA3AF` (`text-gray-400`) — Used for uppercase micro-text (e.g., `FRIDAY`, `SATURDAY`, `SUNDAY`).
- **Primary CTA Button (Dark Surface):** Background `#FFFFFF` (`bg-white`), Text `#1E1410` (`text-[#1E1410]`), Pill shape (`rounded-full`), hover state `hover:bg-[#E5D9C5] transition-colors duration-300`.

---

## 2. CSS & Tailwind Architecture Rules

1. **Tailwind-First Mandate:**
   - **100% of component styling** (layout, spacing, typography, colors, borders, states, responsiveness) MUST be written using Tailwind CSS utility classes directly in the JSX/HTML markup.
   - Do **NOT** use inline `style={{ ... }}` attributes unless dynamically calculating real-time scroll/cursor coordinates via JavaScript.

2. **Single External CSS File Rule:**
   - You are permitted **ONLY ONE** global CSS file in the entire project (e.g., `app/globals.css` or `src/index.css`).
   - Do **NOT** create component-level `.css` or `.module.css` files.
   - Use the single global CSS file exclusively for:
     - `@tailwind base; @tailwind components; @tailwind utilities;` (or `@import "tailwindcss";` in v4).
     - CSS Root Variables (`--bg-light: #F5F2EB`, etc.).
     - Custom `@keyframes` definitions or complex mask/scroll utilities that cannot be expressed as standard Tailwind utilities.

3. **Recommended Tailwind Theme Extension (`tailwind.config.js` / `globals.css`):**
   ```javascript
   // Map these in tailwind.config.js so classes remain clean and deterministic:
   colors: {
     brand: {
       espresso: '#281A14',
       espressoLight: '#38251D',
       roast: '#382A24',
       ink: '#2B1E18',
       cream: '#F5F2EB',
       sand: '#E5D9C5',
       taupe: '#B09B8C',
       cardDark: '#3A2D28',
       borderDark: '#52433D',
       borderLight: '#EBE6DC',
       slateBody: '#4B5563',
     }
   }

```

---

## 3. Typography & Layout Standards

* **Font Stack:** Clean geometric sans-serif (`Inter`, `Plus Jakarta Sans`, or `Geist Sans`).
* **Heading Hierarchy:**
* Section Titles (`Our Vision`): `text-4xl md:text-5xl font-bold tracking-tight text-[#382A24]`
* Hero Subtitle (`Alpha Entrepreneurship Summit`): `text-2xl md:text-4xl font-normal tracking-wide text-[#F4EFEA]`
* Feature Titles (`Vibrant Ecosystem`): `text-base md:text-lg font-semibold text-[#2B1E18]`
* Body Copy: `text-sm md:text-base leading-relaxed text-[#4B5563]`


* **Icon Containers:** Fixed square proportions (`w-12 h-12 rounded-xl bg-white shadow-sm border border-[#EBE6DC] flex items-center justify-center shrink-0`).
* **Date Cards:** Fixed vertical rectangle (`w-24 h-28 rounded-xl bg-[#3A2D28]/80 border border-[#52433D] flex flex-col items-center justify-center`).

---

## 4. Advanced Animations & Interactive Effects

When prompted to add animations, transitions, or modern interactive polish, implement high-craft, performant motion that elevates the executive feel of the web app:

1. **Scroll-Triggered Reveal Animations:**
* Stagger feature grid items (like the 6 vision cards) on viewport entry (`opacity-0 translate-y-6` -> `opacity-100 translate-y-0`) with `75ms–100ms` stagger delay per card.
* Use smooth cubic-bezier easing (`cubic-bezier(0.22, 1, 0.36, 1)`) with durations between `500ms` and `700ms`.


2. **Parallax & Depth Effects:**
* Apply subtle vertical parallax on hero elements: as the user scrolls down, the `AES` monument logo and background radial glow should shift at `0.3x–0.5x` scroll speed relative to the foreground text and date cards.
* Maintain `will-change-transform` on parallax layers to guarantee 60fps performance.


3. **Micro-Interactions & Hover Physics:**
* **Light Feature Cards:** On hover, subtly lift the icon box (`group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300`) and shift icon stroke color toward `#382A24`.
* **Dark Date Cards:** On hover, brighten the border (`hover:border-[#E5D9C5]/50 hover:bg-[#463630] transition-all duration-300 hover:-translate-y-1`).
* **CTA Pill Buttons:** Apply subtle scale and color transition (`hover:scale-[1.03] active:scale-[0.98] hover:bg-[#E5D9C5] transition-all duration-200`).


4. **Accessibility & Performance Guardrails:**
* Always respect `prefers-reduced-motion: reduce` by disabling parallax and heavy transforms for sensitive users.
* Animate **only** composite properties (`transform`, `opacity`) to prevent layout thrashing and repaint lag.



---

## 5. Pre-Execution Checklist for the AI Agent

Before writing or modifying code, verify:

* [ ] Did I check the exact hex codes in Section 1 instead of guessing a brown/beige/gray?
* [ ] Are all styles applied via Tailwind classes with zero extra `.css` files created?
* [ ] Do light sections use `#F5F2EB` as the background and `#FFFFFF` solely for elevated icon/card surfaces?
* [ ] Do dark sections use `#281A14` with `#E5D9C5` accents and `#B09B8C` muted copy?
* [ ] Are scroll, parallax, and hover animations smooth, staggered, and hardware-accelerated?

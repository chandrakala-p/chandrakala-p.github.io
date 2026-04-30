# Chandrakala P — Portfolio · Technical Documentation

> **Audience:** Developers forking, extending, or maintaining this codebase.
> This document covers architecture decisions, component contracts, data layer design, theming, animations, performance, and contribution guidelines.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Directory Structure (Annotated)](#directory-structure-annotated)
3. [Data Layer](#data-layer)
4. [Component Architecture](#component-architecture)
   - [Layout Components](#layout-components)
   - [Section Components](#section-components)
   - [UI Primitives](#ui-primitives)
   - [Common Utilities](#common-utilities)
5. [Theme System](#theme-system)
6. [Animation System](#animation-system)
7. [Navigation & Scrollspy](#navigation--scrollspy)
8. [TypeScript Domain Models](#typescript-domain-models)
9. [Tailwind Configuration](#tailwind-configuration)
10. [Static Export & GitHub Pages](#static-export--github-pages)
11. [CI/CD Pipeline](#cicd-pipeline)
12. [Performance Considerations](#performance-considerations)
13. [Known Constraints & Decisions](#known-constraints--decisions)
14. [Contributing & Extension Guide](#contributing--extension-guide)

---

## Architecture Overview

The site is built on **Next.js 14 App Router** with `output: 'export'` (fully static — no server runtime). Every page is pre-rendered at build time to plain HTML/CSS/JS and served from GitHub Pages via a CDN.

```
Browser
  └─► GitHub Pages CDN (static HTML/CSS/JS)
        └─► next/link / client-side navigation
              └─► React hydration (Server Components → Client Components where needed)
```

### Key architectural choices

| Decision | Rationale |
|---|---|
| Static export (`output: 'export'`) | No server needed; zero infrastructure cost; instant CDN delivery |
| Next.js App Router | Future-proofs for React Server Components, streaming, and metadata API |
| Server Components by default | Reduces JS bundle; only sections needing interactivity opt into `'use client'` |
| Data in `data/*.ts` | Single source of truth; zero component changes to update content |
| Tailwind CSS | Utility-first — no CSS file sprawl; purge keeps bundle small |
| Framer Motion | Declarative, performant animations; `whileInView` avoids painting off-screen |
| next-themes | SSR-safe theme persistence; no flash of unstyled content (FOUC) |

---

## Directory Structure (Annotated)

```
chandrakala-portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # 3-job CI/CD: quality → build → deploy
│
├── app/                        # Next.js App Router root
│   ├── globals.css             # Base styles, CSS custom properties, Tailwind directives
│   ├── layout.tsx              # Root layout — <html>, ThemeProvider, SEO metadata
│   ├── page.tsx                # Single-page composition — imports all sections
│   └── providers.tsx           # Client-only providers (next-themes ThemeProvider)
│
├── components/
│   ├── common/
│   │   └── AnimatedSection.tsx # Framer Motion scroll-trigger wrappers (re-exported)
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky scrollspy nav + mobile drawer
│   │   └── Footer.tsx          # 3-column footer: brand · nav · social links
│   ├── sections/               # One file per portfolio section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Expertise.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/                     # Headless / atomic UI primitives
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       └── ThemeToggle.tsx
│
├── data/                       # ALL site content lives here — edit to update the site
│   ├── personal.ts             # Name, bio, links, stats, nav links
│   ├── experience.ts           # Work history (array, newest first)
│   ├── skills.ts               # Skill categories + pills
│   ├── expertise.ts            # 6 expertise cards (icon, title, description, colour)
│   └── projects.ts             # Featured + compact project cards
│
├── hooks/
│   └── useScrollspy.ts         # IntersectionObserver → active section ID
│
├── lib/
│   └── utils.ts                # cn(), truncate(), getInitials(), staggerDelay()
│
├── types/
│   └── index.ts                # TypeScript domain models
│
├── public/
│   └── assets/                 # Static assets (avatar, og-image, favicon)
│
├── .eslintrc.json              # ESLint — extends next/core-web-vitals
├── next.config.mjs             # Static export, basePath, trailingSlash, image opt-out
├── tailwind.config.ts          # Theme — colours, animations, custom box-shadows
├── tsconfig.json               # Strict TypeScript, path aliases (@/…)
└── package.json
```

---

## Data Layer

All content is decoupled from presentation. To update any portfolio content, **only edit the `data/` directory** — no component changes required.

### `data/personal.ts`

Exports two named constants:

```ts
export const personal: PersonalInfo   // Core identity, bio, links, stats
export const navLinks: NavLink[]       // Ordered navigation items
```

`PersonalInfo` fields:

| Field | Type | Purpose |
|---|---|---|
| `name` | `string` | Full display name |
| `initials` | `string` | 2-letter avatar initials |
| `title` | `string` | Job title (used in Hero, Footer, meta) |
| `company` | `string` | Current employer |
| `tagline` | `string` | Hero sub-headline |
| `bio` | `string` | Paragraph 1 of About section |
| `extendedBio` | `string` | Paragraph 2 of About section |
| `email` | `string` | Mailto link |
| `linkedin` | `string` | Full LinkedIn URL |
| `github` | `string` | Full GitHub URL |
| `blog?` | `string \| undefined` | Optional blog URL (Hashnode etc.) |
| `location` | `string` | City + country |
| `stats` | `Stat[]` | Hero stat bar (4 key numbers) |

### `data/experience.ts`

```ts
export const experiences: Experience[]
```

Each entry: `{ company, role, period, description, tags, highlights? }`. Tags render as Badge pills. Highlights (optional bullet points) surface under the description. **Order: newest first.**

### `data/skills.ts`

```ts
export const skillCategories: SkillCategory[]
```

Each entry: `{ name, icon: ElementType, skills: string[] }`. Icons are Lucide React components passed as values (not JSX — prevents `'use client'` boundary issues).

### `data/expertise.ts`

```ts
export const expertiseCards: ExpertiseCard[]
```

Each entry: `{ icon, title, description, colorClass }`. `colorClass` is a Tailwind string like `'text-emerald-500'` used to colour-code the card icon.

### `data/projects.ts`

```ts
export const featuredProjects: Project[]
export const compactProjects: Project[]
```

`Project`: `{ title, description, tags, link?, github?, featured }`. Featured projects render as large cards with image placeholders; compact projects render as a condensed grid.

---

## Component Architecture

### Layout Components

#### `Navbar.tsx` (`'use client'`)

Responsibilities:
- Sticky positioning (`fixed top-0`) with backdrop blur
- Logo / name brand link
- Desktop horizontal nav with `useScrollspy` active state
- Mobile hamburger → slide-down drawer
- `ThemeToggle` button
- Scroll-based background opacity (transparent at top, opaque on scroll)

State:
- `isOpen: boolean` — mobile drawer
- `activeSection: string` — from `useScrollspy`
- `scrolled: boolean` — scroll position listener

#### `Footer.tsx`

Static Server Component (no client state). Three columns: brand + tagline, navigation links, social links. Conditional blog link (`personal.blog && …`).

---

### Section Components

All sections follow this contract:

```tsx
// Server Component (no directive) — unless interactive
export function SectionName() {
  return (
    <section id="section-id" className="py-20 md:py-28 bg-[...]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading label="..." title={...} subtitle="..." />
        </AnimatedSection>
        {/* section content */}
      </div>
    </section>
  );
}
```

The `id` attribute **must match** the `href` in `data/personal.ts → navLinks` (e.g., `id="about"` ↔ `href="#about"`).

| Section | `id` | Client? | Key data source |
|---|---|---|---|
| Hero | `home` | ✅ (motion) | `personal.ts` |
| About | `about` | ✅ (motion) | `personal.ts` |
| Experience | `experience` | ✅ (motion) | `experience.ts` |
| Expertise | `expertise` | ✅ (motion) | `expertise.ts` |
| Skills | `skills` | ✅ (motion) | `skills.ts` |
| Projects | `projects` | ✅ (motion) | `projects.ts` |
| Contact | `contact` | ✅ (form state) | `personal.ts` |

---

### UI Primitives

#### `Badge.tsx`

```tsx
<Badge variant="emerald">Node.js</Badge>
// variants: 'default' | 'emerald' | 'blue' | 'purple' | 'orange' | 'teal'
```

Renders a `<span>` pill with colour-coded bg/text. Purely presentational — no state.

#### `Button.tsx`

Polymorphic button supporting `as` prop:

```tsx
<Button variant="primary" size="md" as="a" href="...">Download CV</Button>
<Button variant="outline" size="sm" onClick={...}>Send</Button>
// variants: 'primary' | 'outline' | 'ghost'
// sizes: 'sm' | 'md' | 'lg'
```

#### `SectionHeading.tsx`

```tsx
<SectionHeading
  label="Section label"              // Small all-caps label above title
  title={<>Title with <span>gradient</span></>}
  subtitle="Optional subtitle paragraph"
/>
```

Consistent typographic hierarchy across all sections.

#### `ThemeToggle.tsx` (`'use client'`)

Uses `useTheme()` from next-themes. Renders a Sun/Moon icon with a `rotate + scale` Framer Motion animation on toggle.

---

### Common Utilities

#### `AnimatedSection.tsx` (`'use client'`)

Two exports:

```tsx
// Wraps any content in a scroll-triggered Framer Motion animation
<AnimatedSection animation="fade-up" delay={0.1}>
  <MyContent />
</AnimatedSection>

// animation: 'fade-up' | 'slide-left' | 'slide-right' | 'scale-up'
// delay: number (seconds)
// duration: number (seconds, default 0.6)

// Applies stagger timing to direct children via CSS variable
<StaggerContainer staggerChildren={0.15}>
  <Child1 />
  <Child2 />
</StaggerContainer>
```

Both use `whileInView` + `once: true` so animations fire once per page load on scroll entry (not on every re-intersection).

---

## Theme System

### Dark / Light mode

Implemented with `next-themes`:

```tsx
// app/providers.tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
  {children}
</ThemeProvider>
```

- `attribute="class"` → adds `class="dark"` to `<html>` element
- `defaultTheme="dark"` → dark mode on first visit
- `enableSystem` → respects OS preference on second visit if no stored preference

### CSS custom properties

`app/globals.css` defines design tokens that Tailwind utilities reference:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... */
}
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

### Colour palette

| Colour | Tailwind key | Usage |
|---|---|---|
| Emerald 400–700 | `emerald-*` | Primary accent (CTAs, badges, highlights) |
| Slate 50–950 | `slate-*` | Backgrounds, text, borders |
| White | `white` | Card surfaces in dark mode |

To swap the accent colour, replace all `emerald-` references in `tailwind.config.ts` and all component files.

---

## Animation System

### Scroll animations (Framer Motion)

All scroll animations use `whileInView` with `viewport={{ once: true, margin: '-80px' }}`:

```tsx
const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
  variants={variants}
>
```

The `-80px` viewport margin fires the animation slightly before the element reaches the bottom of the viewport — prevents content popping in late.

### Custom Tailwind animations

Defined in `tailwind.config.ts` under `theme.extend.animation` and `theme.extend.keyframes`:

| Animation | Keyframes | Usage |
|---|---|---|
| `float` | `translateY(-8px)` ↔ `translateY(0)` | Hero floating tech badges |
| `pulse-glow` | opacity 0.6 → 1 | Glow pulse on accent elements |
| `gradient-shift` | `background-position 0%` → `100%` | Hero gradient text animation |

### Custom box shadows

```ts
boxShadow: {
  'emerald-glow':    '0 0 20px rgba(16, 185, 129, 0.3)',
  'emerald-glow-lg': '0 0 40px rgba(16, 185, 129, 0.4)',
}
```

Used on CTA buttons and card hover states for the glowing emerald effect.

---

## Navigation & Scrollspy

### `useScrollspy.ts`

```ts
const activeSection = useScrollspy(sectionIds, { rootMargin: '-50% 0px -50% 0px' });
```

Uses a single `IntersectionObserver` watching all `sectionIds`. The active section is the one currently intersecting at the vertical midpoint of the viewport (50% top margin, 50% bottom margin).

Returns the `id` string of the active section, or `''` if none.

### Nav link highlighting

```tsx
// Navbar.tsx
const isActive = activeSection === link.href.replace('#', '');
<a className={cn('...', isActive && 'text-emerald-400 font-semibold')}>
```

---

## TypeScript Domain Models

All interfaces are in `types/index.ts`:

```ts
interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  company: string;
  tagline: string;
  bio: string;
  extendedBio: string;
  email: string;
  linkedin: string;
  github: string;
  blog?: string;
  location: string;
  stats: Stat[];
}

interface Stat { label: string; value: string; }

interface NavLink { label: string; href: string; }

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  highlights?: string[];
}

interface SkillCategory {
  name: string;
  icon: ElementType;
  skills: string[];
}

interface ExpertiseCard {
  icon: ElementType;
  title: string;
  description: string;
  colorClass: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
}
```

`ElementType` is imported from React: `import { type ElementType } from 'react'`. This pattern avoids pulling in the full `React` namespace and satisfies `@typescript-eslint/no-unused-vars`.

---

## Tailwind Configuration

`tailwind.config.ts` extends the default Tailwind theme:

```ts
content: [
  './app/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './data/**/*.{ts,tsx}',
]
```

**Important:** `data/` is included in the `content` array because Tailwind class strings (e.g. `colorClass: 'text-emerald-500'`) originate from data files. Without this, Tailwind would purge those classes in production.

Custom extensions:
- `colors` — no overrides; uses Tailwind's built-in `emerald` and `slate`
- `fontFamily` — inherits Tailwind defaults (system sans-serif)
- `boxShadow` — emerald glow variants
- `animation` — float, pulse-glow, gradient-shift
- `keyframes` — definitions for the above

---

## Static Export & GitHub Pages

### How it works

`next.config.mjs` sets `output: 'export'`. On `npm run build`, Next.js generates a `./out/` directory containing static HTML, CSS, and JS — no Node.js server required.

```
./out/
├── index.html          ← Home page
├── 404.html            ← Custom 404 (auto-generated by Next.js static export)
├── _next/
│   ├── static/css/     ← Compiled Tailwind CSS
│   └── static/chunks/  ← Code-split JS bundles
└── assets/             ← Copied from /public/assets/
```

### basePath handling

GitHub Pages serves content under a sub-path (`/chandrakala-portfolio`). This is configured via:

```js
// next.config.mjs
basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
```

| Environment | `NEXT_PUBLIC_BASE_PATH` | Result |
|---|---|---|
| Local dev | `''` (unset) | Routes: `/`, `/about` |
| GitHub Pages | `/chandrakala-portfolio` | Routes: `/chandrakala-portfolio/`, `/chandrakala-portfolio/about` |

The env var is injected by the CI/CD workflow — no manual configuration needed.

### Trailing slash

`trailingSlash: true` ensures `/about` generates `/about/index.html`. GitHub Pages requires this — without it, direct URL navigation to sub-paths returns 404.

### Image optimisation

`images: { unoptimized: true }` disables Next.js's built-in image optimisation server (which requires a runtime). Images are served as-is from `./public/`.

---

## CI/CD Pipeline

### Workflow: `.github/workflows/deploy.yml`

Triggers: push or PR to `main` branch.

```
Push / PR to main
      │
      ▼
┌─────────────────────┐
│ Job 1: quality      │  tsc --noEmit + next lint
│ ubuntu-latest       │  Fails fast → blocks build
└────────┬────────────┘
         │ needs: quality
         ▼
┌─────────────────────┐
│ Job 2: build        │  npm ci → next build → upload artifact
│ ubuntu-latest       │  NEXT_PUBLIC_BASE_PATH=/chandrakala-portfolio
└────────┬────────────┘
         │ needs: build
         │ only if: push to main (not PR)
         ▼
┌─────────────────────┐
│ Job 3: deploy       │  actions/deploy-pages@v4
│ ubuntu-latest       │  Environment: github-pages
└─────────────────────┘
```

### Concurrency

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

If two pushes land in quick succession, the older in-progress run is cancelled. This prevents race conditions on the `github-pages` environment.

### Required GitHub repository settings

For the deploy job to succeed:

1. **Settings → Pages → Source:** set to "GitHub Actions" (not "Deploy from branch")
2. **Settings → Actions → General → Workflow permissions:** "Read and write permissions"

### Environment protection rules

The `github-pages` environment in the deploy job integrates with GitHub's environment protection. You can add required reviewers or deployment wait timers in **Settings → Environments → github-pages**.

---

## Performance Considerations

### Bundle size

- **Server Components** (no `'use client'`): zero JS shipped to browser; only HTML
- **`'use client'` is opt-in**: only components with state/effects use it — Navbar, ThemeToggle, AnimatedSection, Contact form
- **Framer Motion tree-shaking**: only `motion` and `AnimatePresence` are imported — unused features are excluded
- **Tailwind purge**: `content` array covers all template files; production CSS is typically 8–15 KB

### Runtime performance

- `whileInView` animations use `IntersectionObserver` — no scroll event listeners, no `requestAnimationFrame` loops
- CSS `transform` and `opacity` only (no layout-triggering properties) — all animations run on the compositor thread
- `will-change: transform` applied automatically by Framer Motion during animation
- Static export means TTFB is ~50ms from CDN (no server-side computation)

### Lighthouse targets

| Metric | Target |
|---|---|
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | 100 |

---

## Known Constraints & Decisions

### No server-side functionality

Static export means no API routes (`app/api/…`), no server actions, no dynamic rendering. The contact form simulates submission. To add real form submission:

- **Formspree** — no backend needed; just a `fetch` to their API endpoint
- **Resend** — requires migrating to a hybrid Next.js deployment (e.g., Vercel)
- **EmailJS** — client-side email SDK; works in static export

### Image optimisation disabled

`images: { unoptimized: true }` means no WebP conversion or responsive `srcset` generation. For production-grade image performance, migrate to Vercel (which provides the Next.js image server) or use a third-party CDN image service (Cloudinary, imgix).

### No ISR or SSG with dynamic params

Single-page architecture — all content is statically typed in `data/`. No `generateStaticParams()` needed.

### Framer Motion peer dependency

Framer Motion v11 requires React 18+. This is satisfied by Next.js 14 (which ships React 18).

---

## Contributing & Extension Guide

### Adding a new section

1. Create `components/sections/MySection.tsx`
2. Add `{ label: 'My Section', href: '#my-section' }` to `navLinks` in `data/personal.ts`
3. Add a corresponding data file `data/mySection.ts` if the section has content
4. Import and add `<MySection />` to `app/page.tsx` in the correct order
5. Give the `<section>` element `id="my-section"` to enable scrollspy

### Adding a new skill category

Edit `data/skills.ts` — add a new `SkillCategory` object:

```ts
{
  name: 'My Category',
  icon: SomeLucideIcon,
  skills: ['Tool A', 'Tool B', 'Tool C'],
}
```

No component changes required.

### Adding a project

Edit `data/projects.ts`:

```ts
{
  title: 'My Project',
  description: 'What it does and why it matters.',
  tags: ['Node.js', 'AWS', 'PostgreSQL'],
  link: 'https://example.com',
  github: 'https://github.com/...',
  featured: true,   // true → large card; false → compact grid card
}
```

### Changing the accent colour

1. Open `tailwind.config.ts`
2. Replace `emerald` in all `boxShadow` rgba values with your colour's hex
3. In all component files, run a project-wide find-and-replace: `emerald-` → `violet-` (or your chosen colour)
4. Update the CSS custom property in `globals.css` if referenced

### Running type checks locally

```bash
npm run type-check   # tsc --noEmit — exits 0 on success, lists errors on failure
npm run lint         # ESLint with next/core-web-vitals ruleset
```

Both commands run as pre-deploy quality gates in CI. Fix all errors before pushing to main.

### Development workflow

```bash
npm run dev          # Hot-reload dev server at http://localhost:3000
# Edit any data/*.ts file → browser updates instantly via HMR
# Edit any component → same
```

---

*Last updated: April 2026 · Built with Next.js 14, Tailwind CSS 3, Framer Motion 11*

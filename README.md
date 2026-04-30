# Chandrakala P — Portfolio Website

A modern, production-ready personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — designed to position a Senior Backend Engineer for Solutions Engineering roles through a consultative, impact-driven narrative.

**Live Site:** [https://chandrakala-p.github.io/chandrakala-portfolio](https://chandrakala-p.github.io/chandrakala-portfolio)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Customisation Guide](#customisation-guide)
- [Contact](#contact)

---

## Features

- **Next.js 14 App Router** — Server Components by default, Client Components only where needed
- **Dark / Light theme** — `next-themes` with smooth CSS transitions; defaults to dark mode
- **Framer Motion animations** — scroll-triggered fade-up, slide-in, scale-up; staggered list reveals
- **Fully responsive** — mobile (375px) → tablet → laptop → widescreen, with a dedicated mobile nav drawer
- **Scrollspy navigation** — active section highlight using `IntersectionObserver`
- **GitHub Pages deployment** — static export via `next export`; CI/CD through GitHub Actions
- **SEO-ready** — `metadata`, OpenGraph, Twitter Card, and `viewport` all configured in `layout.tsx`
- **Zero runtime errors** — TypeScript strict mode, ESLint `next/core-web-vitals`, zero warnings

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Theme | next-themes |
| Utilities | clsx + tailwind-merge |
| Linting | ESLint (next/core-web-vitals) |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |

---

## Prerequisites

Make sure these are installed on your machine:

- **Node.js** v18.17 or later (`node --version`)
- **npm** v9 or later (`npm --version`)
- **Git** (`git --version`)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/chandrakala-p/chandrakala-portfolio.git
cd chandrakala-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> The dev server supports Hot Module Replacement (HMR) — edits are reflected instantly without a full reload.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server at `http://localhost:3000` |
| `npm run build` | Build production static export to `./out` |
| `npm run start` | Start production server (after build; not used with static export) |
| `npm run lint` | Run ESLint across all files |
| `npm run type-check` | Run TypeScript compiler without emitting files |

---

## Project Structure

```
chandrakala-portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD: quality → build → deploy to GH Pages
│
├── app/                        # Next.js App Router
│   ├── globals.css             # Global styles, CSS custom properties, Tailwind base
│   ├── layout.tsx              # Root layout — SEO metadata, ThemeProvider wrapper
│   ├── page.tsx                # Home page — composes all sections
│   └── providers.tsx           # Client-side providers (next-themes)
│
├── components/
│   ├── common/
│   │   └── AnimatedSection.tsx # Framer Motion scroll-triggered wrappers
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with scrollspy + mobile drawer
│   │   └── Footer.tsx          # Footer with nav links and social links
│   ├── sections/
│   │   ├── Hero.tsx            # Landing hero with avatar, stats, CTAs
│   │   ├── About.tsx           # Bio, highlights, "What I Do" cards
│   │   ├── Experience.tsx      # Timeline of work history
│   │   ├── Expertise.tsx       # 6-card expertise grid
│   │   ├── Skills.tsx          # 4-category skill pills
│   │   ├── Projects.tsx        # Featured + compact project cards
│   │   └── Contact.tsx         # Contact form + info cards
│   └── ui/
│       ├── Badge.tsx           # Coloured pill badges
│       ├── Button.tsx          # Polymorphic button with variants
│       ├── SectionHeading.tsx  # Consistent section heading component
│       └── ThemeToggle.tsx     # Animated dark/light mode toggle
│
├── data/                       # All content — edit these to update the site
│   ├── personal.ts             # Name, bio, links, stats
│   ├── experience.ts           # Work history
│   ├── skills.ts               # Skill categories
│   ├── expertise.ts            # Expertise cards
│   └── projects.ts             # Project showcase
│
├── hooks/
│   └── useScrollspy.ts         # IntersectionObserver-based active section detection
│
├── lib/
│   └── utils.ts                # cn(), truncate(), getInitials(), staggerDelay()
│
├── types/
│   └── index.ts                # TypeScript domain models (Experience, Project, etc.)
│
├── public/
│   └── assets/                 # Static assets (images, icons)
│
├── .eslintrc.json              # ESLint config (next/core-web-vitals)
├── .gitignore
├── next.config.mjs             # Next.js config — static export + basePath
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts          # Tailwind theme — Emerald + Slate palette, animations
└── tsconfig.json
```

---

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `NEXT_PUBLIC_BASE_PATH` | URL base path (set to `/chandrakala-portfolio` for GH Pages) | `""` (empty) | Only for production build |

**Local development:** no `.env` file needed — the default empty string works.

**Production build (GitHub Actions):** set automatically in `deploy.yml`.

If you need a local `.env` file:

```bash
# .env.local (not committed to Git)
NEXT_PUBLIC_BASE_PATH=
```

---

## Deployment

### GitHub Pages (Automatic via CI/CD)

Every push to the `main` branch triggers the GitHub Actions workflow which:
1. Runs TypeScript type check and ESLint
2. Builds the Next.js static export (`npm run build`)
3. Deploys the `./out` folder to GitHub Pages

Live URL: **[https://chandrakala-p.github.io/chandrakala-portfolio](https://chandrakala-p.github.io/chandrakala-portfolio)**

### Manual Build

To build and preview the static export locally:

```bash
# Build (produces ./out directory)
NEXT_PUBLIC_BASE_PATH="" npm run build

# Serve the static output locally (requires npx serve)
npx serve ./out
```

---

## CI/CD Pipeline

The pipeline is defined in `.github/workflows/deploy.yml` and runs on every push and pull request to `main`.

```
Push to main / Pull Request
         │
         ▼
┌─────────────────────┐
│  Job 1: Quality     │  TypeScript check + ESLint
│  (ubuntu-latest)    │  Fails fast — blocks build if any error
└────────┬────────────┘
         │ needs: quality
         ▼
┌─────────────────────┐
│  Job 2: Build       │  npm ci → npm run build → upload artifact
│  (ubuntu-latest)    │  NEXT_PUBLIC_BASE_PATH=/chandrakala-portfolio
└────────┬────────────┘
         │ needs: build
         │ if: push to main only (not PRs)
         ▼
┌─────────────────────┐
│  Job 3: Deploy      │  actions/deploy-pages → GitHub Pages
│  (ubuntu-latest)    │  Environment: github-pages
└─────────────────────┘
```

**Pull Requests:** run Jobs 1 + 2 only (quality + build verification) — no deployment.

**Pushes to main:** run all 3 jobs — quality, build, and deploy.

---

## Customisation Guide

### Updating content

All site content lives in the `data/` directory — no component changes needed:

```bash
data/
├── personal.ts    # Update name, bio, links, stats
├── experience.ts  # Add/edit work history
├── skills.ts      # Add/remove skill pills
├── expertise.ts   # Edit expertise cards
└── projects.ts    # Add/remove project cards
```

### Changing the colour palette

Edit `tailwind.config.ts`. The site uses **Emerald + Slate**. To change the accent colour, replace all `emerald-` references with your chosen Tailwind colour (e.g., `violet-` or `sky-`).

### Adding a new section

1. Create `components/sections/MySection.tsx`
2. Add the section ID to `data/personal.ts` → `navLinks`
3. Import and add `<MySection />` to `app/page.tsx`

### Connecting the Contact form

The contact form currently simulates submission. To connect a real backend:

1. **Formspree** (simplest): replace the `handleSubmit` function in `Contact.tsx` with a `fetch` to `https://formspree.io/f/YOUR_FORM_ID`
2. **Resend**: add an API route at `app/api/contact/route.ts`
3. **EmailJS**: install `@emailjs/browser` and call `emailjs.send()`

---

## Contact

**Chandrakala P** — Senior Backend Engineer

- Email: [chandrakalapr11@gmail.com](mailto:chandrakalapr11@gmail.com)
- LinkedIn: [linkedin.com/in/chandrakalap](https://www.linkedin.com/in/chandrakalap/)
- GitHub: [github.com/chandrakala-p](https://github.com/chandrakala-p)
- Blog: [chandrakalap.hashnode.dev](https://chandrakalap.hashnode.dev/)

---

*Built with Next.js 14 & Tailwind CSS · Deployed on GitHub Pages*

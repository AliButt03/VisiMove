# VisiMove

VisiMove is a cinematic, accessibility-focused web experience for an eye-driven screen control product. The project presents the product vision, interaction flow, key features, technology direction, and Windows-first download section through a responsive Next.js landing experience with a 3D eye model.

## Project Overview

VisiMove is designed around the idea that eye movement can become a practical input layer for digital interaction. The interface communicates how gaze can be translated into cursor movement, scrolling, and click-style control for users who need hands-free access to screens.

This repository contains the frontend website for the project.

## Key Features

- Responsive landing page for desktop, tablet, and mobile screens
- 3D animated eye model using Three.js and React Three Fiber
- Scroll-aware 3D scene positioning across page sections
- Smooth scrolling and hero scroll choreography
- Glassmorphism-inspired UI components
- Sections for about, workflow, features, technology, and download
- Windows-first product positioning with future mobile platform roadmap

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Three.js
- React Three Fiber
- Drei
- GSAP
- Lenis
- Lucide React

## Project Structure

```text
src/
  app/
    globals.css              Global styles and shared responsive container
    layout.tsx               Root layout, fonts, smooth scroll provider
    page.tsx                 Main page composition

  components/
    layout/                  Navbar and footer
    motion/                  Hero scroll animation logic
    providers/               Smooth scrolling provider
    sections/                Page sections
    three/                   3D scene, controller, and eye model
    ui/                      Reusable UI components

  hooks/
    use-scene-phase.ts       Tracks active page section for 3D scene changes

  lib/
    utils.ts                 Shared className utility

public/
  models/
    visimove-eye.glb         3D eye model asset
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

## Responsive Design

The project uses a mobile-first responsive approach through Tailwind CSS breakpoint classes.

Main responsive files:

- `src/app/globals.css` controls the shared `.visimove-container` width and global page behavior.
- `src/components/sections/hero-section.tsx` controls mobile hero spacing, heading size, text alignment, and CTA layout.
- `src/components/three/visimove-eye-model.tsx` controls responsive 3D eye position and scale for mobile, tablet, and desktop.
- `src/components/layout/navbar.tsx` controls the compact mobile navigation.
- `src/components/layout/footer.tsx` controls the mobile footer layout.
- Section files in `src/components/sections/` control section spacing, card stacking, and grid breakpoints.

## 3D Scene Notes

The 3D eye is loaded from:

```text
public/models/visimove-eye.glb
```

The scene is rendered globally through:

```text
src/components/three/scene-shell.tsx
src/components/three/scene-controller.tsx
src/components/three/visimove-eye-model.tsx
```

The active section is tracked by `use-scene-phase.ts`, allowing the eye model to shift position and scale as the user scrolls.

## Build Notes

The project uses `next/font` to load Google Fonts. A production build requires network access so Next.js can fetch font files during build time.

```bash
npm run build
```

## Project Status

This is the frontend presentation layer for the VisiMove FYP project. The current version focuses on product storytelling, accessibility positioning, responsive UI, and 3D visual identity.

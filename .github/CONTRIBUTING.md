# Contributing to CDES Website

Thank you for contributing to the CDES website!

## Overview

This website is the **public face of CDES** - explaining the standard to potential adopters and providing documentation.

**Tech Stack**: Astro + Tailwind CSS → Azure Static Web Apps

## Development Setup

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/cannabis-data-standard/cdes-website.git
cd cdes-website
npm install
npm run dev
```

Visit `http://localhost:4321`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layouts
├── pages/          # Route pages
├── data/           # JSON data (synced from cdes-reference-data)
└── styles/         # Global CSS
```

## Key Guidelines

### 1. Content Only

- Website content and styling changes go here
- Schema changes → `cdes-spec`
- Reference data → `cdes-reference-data`

### 2. Keep It Static

- No backend, no database
- All pages pre-rendered at build time
- Minimal JavaScript

### 3. Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML
- Keyboard navigation
- Screen reader friendly

## Adding Pages

Create a new `.astro` file in `src/pages/`:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Page Title">
  <main>
    <h1>New Page</h1>
    <p>Content here</p>
  </main>
</Layout>
```

## Styling

Use Tailwind CSS utilities:

```astro
<div class="max-w-4xl mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-green-800">Title</h1>
</div>
```

## Building

```bash
npm run build     # Production build
npm run preview   # Preview production build
```

## Pull Request Process

1. Fork and create a feature branch
2. Make your changes
3. Test locally with `npm run dev`
4. Build successfully with `npm run build`
5. Submit PR with clear description

---

**Deployment**: Automatic via Azure Static Web Apps on merge to `main`

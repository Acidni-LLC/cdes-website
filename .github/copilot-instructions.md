# CDES Website - Copilot Instructions

---

> **PROJECT**: cdes-website - Public documentation for CDES
> **TECH STACK**: Astro + Tailwind CSS (Static Site)
> **DEPLOYMENT**: Azure Static Web Apps  cdes.acidni.net

---

##  PURPOSE

This website is the **public face of CDES** - the Cannabis Data Exchange Standard.
It explains CDES to potential adopters, provides documentation, and showcases the specification.

##  CRITICAL RULES

### 1. WEBSITE ONLY - NO SCHEMA CHANGES

- This repo is for the **website only**
- Schema definitions live in `cdes-spec`
- Reference data lives in `cdes-reference-data`
- If you need schema changes, create a work item

### 2. PULL DATA FROM SIBLING REPOS

- Terpene library: `../cdes-reference-data/terpenes/terpene-library.json`
- Schemas: `../cdes-spec/schemas/v1/`
- Build scripts should copy/import this data

### 3. KEEP IT SIMPLE

- Static site (Astro generates HTML)
- No backend, no database
- CDN-friendly

##  PROJECT STRUCTURE

```
cdes-website/
 src/
    components/     # Reusable UI components
    pages/          # Route pages (index, terpenes, schemas, etc.)
    layouts/        # Page layouts
    styles/         # Global CSS
    data/           # JSON data copied from sibling repos
 public/             # Static assets (images, favicons)
 docs/               # Additional documentation
 astro.config.mjs    # Astro configuration
```

##  DESIGN REQUIREMENTS

- **Professional** - This represents an industry standard
- **Accessible** - WCAG 2.1 AA compliance
- **Fast** - Static HTML, minimal JS
- **Branded** - Use CDES colors (green/white theme for cannabis industry)

##  KEY PAGES TO BUILD

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Explain what CDES is, call-to-action |
| Getting Started | `/getting-started` | Quick start guide |
| Terpene Library | `/terpenes` | Browsable terpene reference |
| Schemas | `/schemas` | JSON Schema documentation |
| API Reference | `/api` | OpenAPI documentation |
| Adopters | `/adopters` | Who uses CDES |
| About | `/about` | History, governance |

##  BUILD COMMANDS

```bash
npm install          # Install dependencies
npm run dev          # Local dev server
npm run build        # Production build
npm run preview      # Preview production build
```

##  DEPLOYMENT

- Azure Static Web App: `swa-cdes-website`
- Custom domain: `cdes.acidni.net` (future: `cdes.org`)
- Automatic deployment via GitHub Actions

---

## TECHNOLOGY CHOICES

### Why Astro?
- **Static-first** - Pre-renders everything to HTML
- **Partial hydration** - JS only where needed
- **Content-focused** - Perfect for documentation sites
- **Fast** - Zero JS by default

### Why Tailwind CSS?
- **Utility-first** - Rapid prototyping
- **Purged** - Only includes used styles
- **Responsive** - Mobile-first by default

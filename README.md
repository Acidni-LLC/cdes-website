# CDES Website

Public website for the **Cannabis Data Exchange Standard** (CDES).

 **Live at**: https://cdes.acidni.net

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Deployment**: Azure Static Web Apps

## Project Structure

```
cdes-website/
 src/
    components/     # Reusable UI components
    layouts/        # Page layouts
    pages/          # Route pages
    styles/         # Global CSS
    data/           # Reference data (copied from sibling repos)
 public/             # Static assets
 docs/               # Additional documentation
 astro.config.mjs    # Astro configuration
 package.json
```

## Key Pages

| Page | Description |
|------|-------------|
| `/` | Homepage - What is CDES |
| `/getting-started` | Quick start guide |
| `/terpenes` | Browsable terpene library |
| `/schemas` | JSON Schema documentation |
| `/api` | OpenAPI reference |
| `/about` | History and governance |

## Related Repositories

| Repository | Description |
|------------|-------------|
| [cdes-spec](https://github.com/Acidni-LLC/cdes-spec) | JSON Schemas and API specs |
| [cdes-reference-data](https://github.com/Acidni-LLC/cdes-reference-data) | Terpene library, cannabinoid registry |
| [cdes-sdk-python](https://github.com/Acidni-LLC/cdes-sdk-python) | Python SDK |

## License

This website is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

---

**CDES** is an open industry standard maintained by the Cannabis Data Exchange Standard Working Group.

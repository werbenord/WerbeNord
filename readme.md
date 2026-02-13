# WerbeNord

## Overview

WerbeNord is a static marketing/agency website for a German web design agency with a Scandinavian/Nordic design aesthetic. The site is a single-page landing page built with vanilla HTML, CSS, and JavaScript (no frameworks). It showcases the agency's services (websites, graphic design, print, SEO/GEO) and targets local German businesses.

The site is served via a simple Python HTTP server (`server.py`) on port 5000 with no-cache headers for development convenience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure static site**: Single `index.html` file with inline sections (hero, services, projects, process, contact), styled by a single `style.css` file, with `script.js` for any interactivity.
- **No frontend framework**: No React, Vue, or similar. Everything is vanilla HTML/CSS/JS.
- **Design system**: CSS custom properties (variables) defined in `:root` for a consistent design token system:
  - Brand colors: `--teal (#00BEA4)`, `--dark-teal (#1D4649)`, `--slate`, `--gray`
  - Neutrals: `--bg`, `--surface`, `--surface-2`, `--ink`, `--muted`, `--border`
  - Dark theme variants for specific sections (footer, icon flow): `--dark`, `--dark-surface`, `--dark-muted`
  - Layout: `--radius: 28px`, `--container: 1200px`
- **Typography**: Inter font loaded from Google Fonts, weights 400/500/600/700.
- **Language**: German (`lang="de"`), all UI copy is in German.
- **Navigation**: Anchor-based smooth scrolling to page sections (`#services`, `#work`, `#process`, `#contact`).
- **BEM-like naming**: Component CSS uses patterns like `wn-card__title`, `wn-features__grid` for scoping.

### Backend Architecture
- **No real backend**: The Python server (`server.py`) is a minimal static file server using `http.server.SimpleHTTPRequestHandler`.
- **Port**: Serves on port 5000, binding to `0.0.0.0`.
- **No-cache headers**: Sends `Cache-Control: no-cache` for development purposes.
- **No database**: There is no database, no API endpoints, no server-side logic.

### Assets
- Logo image stored at `assets/werbenord-logo.png`.
- `attached_assets/` folder contains design reference snippets (pasted HTML/CSS mockups) that serve as design specifications for building out sections of the site. These are reference materials, not served to users.

### Key Design Patterns
- **Single-page layout**: All content lives in one HTML file with sections identified by IDs for anchor navigation.
- **Component-based CSS**: Sections are styled as self-contained components (`.hero`, `.wn-features`, `.wn-card`, etc.).
- **Mobile-responsive**: Viewport meta tag is set; the container uses `min()` for responsive width.
- **CTA pattern**: Multiple call-to-action buttons linking to `#contact` section and a WhatsApp link for direct messaging.

## External Dependencies

- **Google Fonts**: Inter font family loaded via `fonts.googleapis.com` (external CDN dependency).
- **WhatsApp**: Direct link to WhatsApp (`wa.me/4915712345678`) for customer contact — the phone number is a placeholder and should be updated with the real business number.
- **No npm packages**: No `package.json`, no Node.js dependencies.
- **No database**: No database system is used.
- **No third-party JS libraries**: No jQuery, no analytics scripts, no external JavaScript dependencies.
- **Python standard library only**: The server uses only built-in Python modules (`http.server`, `socketserver`, `os`).

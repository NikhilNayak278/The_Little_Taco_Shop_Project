# The Little Taco Shop

A small, responsive static website demo for a taco shop built with plain HTML, CSS and JavaScript. It demonstrates semantic markup, CSS custom properties for theming, a responsive grid-based menu layout, and an accessible dark/light theme toggle that persists the user’s choice.

## Features
- Responsive layout optimized for small and medium screens
- Centralized theming using CSS custom properties (variables)
- Dark mode support:
  - Respects OS/browser `prefers-color-scheme`
  - User-selectable theme persisted to `localStorage`
  - Accessible toggle with ARIA attributes and keyboard focus styles
- Small JS utilities: current year injection and theme management
- Clean, semantic HTML and image assets

## Quick start (local)
Open the site directly or serve it over a local HTTP server (recommended):

PowerShell — open file directly:
```powershell
ii .\index.html
```

PowerShell — serve with Python:
```powershell
python -m http.server 8000
# then open http://localhost:8000
```

PowerShell — serve with a tiny Node server (if Node.js installed):
```powershell
npx http-server . -p 8000
# then open http://localhost:8000
```

## Files of interest
- `index.html` — Home page (header includes theme toggle)
- `about.html`, `hours.html`, `contact.html` — Other pages (theme toggle included)
- `css/style.css` — All styles, CSS variables and theme overrides
- `js/main.js` — Year injection and theme toggle/persistence logic
- `img/` — Image assets used by the site

## How the theme toggle works
- The script stores the user preference under the key `site-theme` in `localStorage`.
- Themes are applied by setting `data-theme="dark"` or `data-theme="light"` on the `<html>` element. If no attribute is present, the site follows the system preference (`prefers-color-scheme`).
- The toggle updates its icon and ARIA attributes (`aria-pressed`, `aria-label`) for accessibility.

## Accessibility & UX notes
- Toggle button has visible focus outline and ARIA state.
- Semantic HTML and landmarks are used throughout (headers, main, footer, time/abbr).

## Contributing
1. Fork the repository.
2. Create a branch: `git checkout -b feature/my-change`.
3. Make changes and test locally.
4. Open a pull request describing your change.

## Author
Nikhil Nayak



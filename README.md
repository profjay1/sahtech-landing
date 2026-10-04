# Sahtech Labs Landing Page

Temporary production landing page for Sahtech Labs.

The purpose of this project is to establish a professional web presence for
Sahtech Labs while the company's full web application is under development.

## Goals

- Present Sahtech Labs professionally to prospective clients and customers.
- Clearly communicate the company's services and capabilities.
- Provide an effective way for prospective clients to make inquiries.
- Deliver an accessible, responsive, fast, and SEO-friendly experience.
- Deploy to the Sahtech Labs VPS and serve the site through
  `sahtechlabs.com`.

## Initial Technology

- HTML5
- CSS3
- Minimal vanilla JavaScript
- Nginx
- Linux VPS

The project intentionally avoids unnecessary frontend frameworks and backend
complexity for the initial landing-page release.

## Status

Initial development.

## Checkpoint 1: visual foundation

The landing page uses semantic HTML, a single CSS stylesheet, minimal vanilla
JavaScript for mobile navigation, and a lightweight SVG favicon. It requires no
package installation or build step.

### Local preview

From the repository root, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/` in your browser. Press Ctrl+C to stop the server.
You can also open `index.html` directly for a basic visual preview.

### Files

- `index.html`: landing-page sections, metadata, navigation, and inactive form.
- `assets/css/styles.css`: design tokens, components, and responsive layouts.
- `assets/js/main.js`: progressive enhancement for mobile navigation.
- `assets/images/favicon.svg`: lightweight provisional brand mark.

### Contact status

`contact@sahtechlabs.com` is the active email contact option. The online form is
intentionally disabled and has no submission handler or external connection.
Do not enable it before approving a submission implementation, privacy content,
server-side validation, spam protection, and delivery/error behavior.

### Validation and remaining work

Check JavaScript syntax with `node --check assets/js/main.js` when Node is
available; Node is not needed to serve or use the site. Review keyboard
navigation, responsive layouts, zoom, contrast, and reduced-motion behavior in
browsers before release.

Later checkpoints require owner approval: final content and brand review,
browser/accessibility testing, privacy and form decisions, Open Graph assets,
robots.txt and sitemap.xml, and production deployment checks. No analytics,
backend, form provider, or deployment configuration is included in Checkpoint 1.

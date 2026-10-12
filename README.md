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

Static website implemented; production deployment checks remain pending.

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

- `index.html`: landing-page sections, metadata, navigation, and Formspark enquiry form.
- `assets/css/styles.css`: design tokens, components, and responsive layouts.
- `assets/js/main.js`: navigation, motion, and progressive enquiry submission.
- `assets/images/favicon.svg`: lightweight provisional brand mark.

### Contact status

Checkpoint 2 enables the enquiry form with a standard HTML POST to
`https://submit-form.com/1XIG57Vay`. Without JavaScript, Formspark handles the
submission and feedback page. With JavaScript, the page sends an allowlisted
JSON payload with `Content-Type` and `Accept` set to `application/json`, prevents
concurrent submissions, and provides inline success or failure feedback.
Only an HTTP success response resets the form. Failure preserves entered data.
Ordinary fields are temporarily locked after capturing the payload and restored
when the request settles. A 15-second abort timeout provides recovery feedback
without automatically retrying a potentially received submission.

Submitted names: `name`, `email`, `company` (optional), `service`, `details`, and
`_honeypot` (a CSS-hidden text field excluded from keyboard navigation and
assistive technology). Formspark's automatic spam filtering and notification
recipient `contact@sahtechlabs.com` are configured by the owner at the provider.
No credentials, backend, CAPTCHA, or additional provider are used.

`contact@sahtechlabs.com` remains the direct email fallback. The form warns
against sensitive information and identifies Formspark as the processor.
The website Privacy Notice is available at `privacy.html`.

### Validation and remaining work

Check JavaScript syntax with `node --check assets/js/main.js` when Node is
available; Node is not needed to serve or use the site. Review keyboard
navigation, responsive layouts, zoom, contrast, and reduced-motion behavior in
browsers before release.

Manual browser checks must cover native required/email validation, keyboard and
screen-reader feedback, duplicate-submit prevention, success reset, failure data
preservation, and the no-JavaScript POST path. Mocked checks cannot establish
Formspark delivery: a real test must verify both the provider submission and
notification arrival in `contact@sahtechlabs.com`.

The Privacy Notice, Open Graph/social preview metadata and image, `robots.txt`,
and `sitemap.xml` are implemented. Production deployment checks remain pending
and require owner approval. No analytics, backend, or deployment configuration
is included.

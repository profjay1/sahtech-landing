# AGENTS.md

## Project

This repository contains the temporary production landing page for Sahtech Labs,
a technology and software engineering consultancy.

The landing page will be publicly deployed at sahtechlabs.com while the main
Sahtech Labs application is being developed separately.

Although temporary, this is a real production-facing company website.
Code and content must therefore meet professional standards.

## Primary Objective

Create a polished, credible, responsive, accessible, fast, and maintainable
landing page that presents Sahtech Labs to prospective clients and encourages
qualified inquiries.

## Technology

Prefer:

- Semantic HTML5
- Modern CSS
- Minimal vanilla JavaScript

Do not introduce React, Angular, Vue, Bootstrap, Tailwind, Node-based application
frameworks, backend frameworks, databases, or other substantial dependencies
without explicit approval.

Small development tooling must have a clear justification.

## Site Structure

The primary site should remain a focused landing page with sections such as:

- Home / Hero
- About
- Services
- Why Sahtech Labs
- How We Work
- Technologies / Capabilities
- Contact
- Footer

Separate legal pages may be introduced when appropriate.

## Design Direction

The site should look like a professional technology consultancy rather than a
personal developer portfolio or generic template.

Prefer:

- strong visual hierarchy
- generous whitespace
- modern typography
- restrained use of gradients
- subtle and purposeful animation
- premium technology-consultancy aesthetic
- excellent desktop and mobile layouts

Avoid:

- visual clutter
- excessive animation
- template-like design
- gimmicks
- unnecessarily large assets
- stock-photo-heavy presentation

## Content Integrity

Never fabricate:

- customers or clients
- testimonials
- partnerships
- certifications
- awards
- case studies
- project outcomes
- company statistics
- employee counts
- office locations
- years of experience
- performance metrics

Do not make unsupported claims such as "industry-leading" or "#1".

Use factual, professional language.

If business information is unknown, leave an appropriate placeholder or request
clarification rather than inventing it.

## Core Service Positioning

Sahtech Labs should primarily be positioned around capabilities such as:

- Software & Product Engineering
- Web & Digital Product Engineering
- Cloud & DevOps
- Technology Consulting
- Automation & Integrations
- Professional Software Engineering Training
- Startup Technology Solutions

Do not overemphasize low-level commodity services in a way that weakens the
company's technology-consultancy positioning.

## Responsive Design

The site must work well on:

- mobile phones
- tablets
- laptops
- desktop displays

Do not design desktop-first and treat mobile as an afterthought.

## Accessibility

Use semantic HTML and appropriate accessibility practices.

Requirements include:

- keyboard-accessible navigation
- visible focus states
- appropriate heading hierarchy
- useful alternative text
- sufficient contrast
- labels for form controls
- reduced-motion consideration where animations are used

## Performance

Keep the landing page lightweight.

Avoid unnecessary JavaScript and large dependencies.

Optimize assets appropriately and avoid loading resources that provide little
user value.

## SEO

Implement sensible foundational SEO, including:

- meaningful page title
- meta description
- semantic headings
- Open Graph metadata where appropriate
- canonical URL when appropriate
- robots.txt
- sitemap.xml

Do not use keyword stuffing or misleading SEO techniques.

## Security and Privacy

Never commit:

- passwords
- API keys
- private keys
- production credentials
- tokens
- secrets

Do not expose sensitive information in frontend JavaScript.

Any contact-form implementation must consider validation, spam protection,
privacy, and secure handling of submitted information.

## Git Discipline

Do not automatically commit or push changes unless explicitly instructed.

Keep changes focused and reviewable.

Before completing a task:

1. review the files changed;
2. run relevant checks;
3. report what changed;
4. report any unresolved issues;
5. avoid unrelated modifications.

## Deployment

The initial production environment is:

- Linux VPS
- Nginx
- sahtechlabs.com
- HTTPS

Deployment configuration should remain simple and understandable.

Do not make infrastructure changes or deploy to production unless explicitly
instructed.

## Working Style

Before making a substantial architectural change, explain why it is necessary.

Prefer the simplest solution that satisfies the requirements without sacrificing
professional quality.

Do not expand the scope of a task unnecessarily.

When requirements are ambiguous and the choice could materially affect the
business, architecture, security, privacy, deployment, or user experience, ask
for clarification instead of making a major assumption.

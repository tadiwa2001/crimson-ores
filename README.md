# Crimson Ores — Website

A modern, responsive, two-page corporate website for **Crimson Ores**, a Zimbabwean mining-technology startup. Built with plain **HTML5, CSS3 and vanilla JavaScript** — no backend, no database, no build step — so it can be hosted anywhere for free and opened locally with a simple dev server.

> **Tagline:** Smart mining solutions for a safer, sustainable future.

---

## 1. What this is

A production-ready static website with two pages:

- **Home (`index.html`)** — hero, About, Mission/Vision/Core Principles, Focus Areas, Innovation, Safety & Sustainability, Featured Projects, Call-to-action, Contact, Footer.
- **Projects (`projects.html`)** — portfolio hero, category filters, dynamically-rendered project cards, and a full project-detail view (with image gallery + lightbox) driven entirely by a JavaScript data file.

Projects are data-driven: adding a new project means editing **one array** in `assets/js/projects.js` — no HTML rewriting required.

---

## 2. Project structure

```
crimson-ores/
├── index.html               # Home page
├── projects.html            # Projects page (+ project detail via ?id=)
├── README.md                # This file
├── robots.txt               # Crawler rules (update the domain)
├── sitemap.xml              # Sitemap (update the domain)
├── favicon.svg              # Site icon
└── assets/
    ├── css/
    │   ├── style.css        # Main styles + design tokens
    │   └── responsive.css   # Responsive breakpoints (mobile → desktop)
    ├── js/
    │   ├── projects.js      # Project data + grid/filter/detail rendering
    │   ├── project-gallery.js # Image lightbox (prev/next/close/keyboard)
    │   └── main.js          # Navigation, scroll effects, contact form
    └── images/
        ├── logo/            # Logo files (replace with the real logo)
        ├── hero/            # Hero background image
        ├── about/           # About-section visual
        └── projects/        # One folder per project (covers + screenshots)
```

---

## 3. How to run it locally

No build tools are required.

**Option A — VS Code Live Server (recommended):**
1. Open the `crimson-ores/` folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **"Open with Live Server"**.

**Option B — any static server:**
```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

**Option C — just double-click `index.html`:** this also works for a quick look, but a local server is recommended so relative paths and the `?id=` project-detail links behave exactly as they will in production.

---

## 4. How to replace the logo

Drop your logo into `assets/images/logo/`. Two variants are used:

- `logo-white.svg` — white/teal logo for dark backgrounds (navbar + footer).
- `logo-teal.svg` — teal/black logo for light backgrounds.
- `logo-mark.svg` — the mark only.

Keep the same filenames to avoid editing HTML, or update the `<img>` in `index.html` / `projects.html`. Use **SVG** or a transparent **PNG** and preserve the logo's proportions. See `assets/images/logo/README.md`.

---

## 5. How to replace the hero image

Add a high-quality, properly-licensed mining image to `assets/images/hero/` (e.g. `hero.jpg`, 1920×1080+) and update the hero `<img src="...">` in `index.html`. A dark overlay is already applied. See `assets/images/hero/README.md`.

---

## 6. How to add a project

Edit **`assets/js/projects.js`** — the `projects` array is the single source of truth.

1. Copy an existing project object and paste it below.
2. Give it a unique `id` (e.g. `"project-004"`).
3. Fill in the text fields (title, category, descriptions, benefits, status, etc.).
4. Set `coverImage` and the `gallery` array to point at your images.
5. Set `featured: true` to also show it on the Home page's "Featured Projects".

Example object shape:

```js
{
  id: "project-004",
  title: "My Project",
  category: "Ventilation",          // must match a filter category
  shortDescription: "One-line summary shown on the card.",
  fullDescription: "Overview shown on the detail page.",
  problem: "The problem this solves.",
  solution: "The proposed solution.",
  howItWorks: "How it works in practice.",
  features: ["Feature 1", "Feature 2"],
  technologies: ["Arduino", "LoRaWAN"],
  miningApplication: "Where it fits in mining.",
  safetyBenefits: ["..."],
  efficiencyBenefits: ["..."],
  sustainabilityBenefits: ["..."],
  status: "Prototype",              // Concept | Research | Prototype | Testing | Pilot | Completed
  statusDescription: "A sentence about the current stage.",
  featured: true,
  coverImage: "assets/images/projects/project-004/cover.jpg",
  gallery: [
    { src: "assets/images/projects/project-004/screenshot-01.jpg", caption: "Dashboard view" },
    { src: "assets/images/projects/project-004/screenshot-02.jpg", caption: "Field testing" }
  ]
}
```

That's it — the grid, filters, featured cards, detail view, gallery and lightbox all update automatically.

---

## 7. How to add project screenshots

Create a folder `assets/images/projects/<project-id>/` and add a `cover` image plus any number of `screenshot-XX` images. Then point `coverImage` and `gallery` in `projects.js` at them. JPG/PNG/WebP at ~1200px wide is recommended. See `assets/images/projects/README.md`.

---

## 8. How to edit company information

| What | Where |
|------|-------|
| Phone number | `index.html` (Contact section + footer), `projects.html` (footer) |
| Email address | same files |
| Copyright year | footer (`Crimson Ores © 2026`) in both pages |
| Tagline / headline copy | `index.html` hero, About, CTA, footer |
| Mission / Vision / Principles | `index.html` About section |
| Focus-area cards | `index.html` "What We Do" section |
| Page title / meta description | `<head>` of each page |

---

## 9. How to configure the contact form

The form uses **client-side validation** (required fields + email format) and is ready to connect to a free static-form provider. No API keys are needed, and nothing is exposed in the front end.

### Option A — Formspree (works on any host)

1. Create a free form at <https://formspree.io>.
2. Copy your endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. In `index.html`, find the `<form id="contact-form" ...>` tag and set:

   ```html
   data-endpoint="https://formspree.io/f/abcdwxyz"
   ```

That's it — submissions are POSTed to Formspree automatically.

### Option B — Netlify Forms (only when hosted on Netlify)

1. In `index.html`, add `name="contact"` and `data-netlify="true"` to the `<form>` and leave `data-endpoint=""`:

   ```html
   <form id="contact-form" name="contact" data-netlify="true" method="POST" ...>
     <input type="hidden" name="form-name" value="contact">
     ...
   </form>
   ```

2. Deploy to Netlify. Netlify automatically detects and processes the form.

If **neither** is configured, the form shows a clear message instead of failing silently — you'll never lose an enquiry without knowing.

---

## 10. How to deploy for free

All four platforms below host static sites for free. For a simple static site, **GitHub Pages** is the simplest (you're likely already using Git), while **Netlify** has the nicest drag-and-drop workflow if you don't want to use Git.

Before deploying, update `robots.txt`, `sitemap.xml` and the `<link rel="canonical">` / Open Graph URLs from `https://crimson-ores.example.com` to your real domain.

### GitHub Pages (simplest)

1. Push the `crimson-ores/` folder to a new repository (e.g. `crimson-ores`).
2. On GitHub, go to **Settings → Pages**.
3. Under **Source**, choose `main` branch and `/ (root)`.
4. Save — your site is live at `https://<username>.github.io/crimson-ores/`.

### Netlify (drag & drop)

1. Go to <https://app.netlify.com/drop>.
2. Drag and drop the `crimson-ores/` folder.
3. Done — Netlify gives you a live URL instantly (and free custom subdomains).

### Cloudflare Pages

1. Push the repo to GitHub/GitLab.
2. In Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository. Build command: *(leave empty)*. Output directory: `/`.
4. Deploy.

### Vercel

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import it at <https://vercel.com/new>.
3. Framework preset: **Other**. Build command: *(leave empty)*. Output directory: `.` (or `/`).
4. Deploy.

---

## 11. Remaining placeholders

- **Logo** — `assets/images/logo/*.svg` (currently a placeholder crossed-pickaxes mark).
- **Hero image** — `assets/images/hero/hero-bg.svg`.
- **About visual** — `assets/images/about/about-mine.svg`.
- **Photos for Projects 3–7** — these currently use generated SVG illustrations; replace them with real photos by dropping files into `assets/images/projects/<id>/` and updating `projects.js`.
- **Contact form endpoint** — see section 9.

---

## 12. Notes

- No analytics trackers, no cookies, no secrets, no external runtime dependencies (only Google Fonts, which gracefully falls back to system fonts).
- The design follows the Crimson Ores palette (near-black, dark teal, teal, cyan) with `prefers-reduced-motion` support, keyboard-accessible navigation and gallery, semantic HTML and descriptive alt text.



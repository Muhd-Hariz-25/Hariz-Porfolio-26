# Project Overview & Rules

## 1. Tech Stack & Hosting
- **Goal:** Personal developer portfolio website designed to appeal to both HR recruiters and technical hiring managers, built with zero-build React so the codebase is transparent and easy to learn from scratch.
- **Stack:** React 18+ (loaded via ESM / CDN in `index.html` with Babel Standalone for JSX) + Plain CSS (using CSS Custom Properties / Variables). No Vite, no Webpack, no npm build step, and no external CSS frameworks.
- **Hosting:** GitHub Pages (served directly from the root `main` branch with zero build pipeline).
- **Navigation & Routing:** Use React state (`useState`) or URL hash routing (`window.location.hash`, e.g., `#home`, `#about`, `#portfolio`, `#contact`) to switch between the 4 pages (`Home`, `About`, `Portfolio`, `Contact`). Never use standard path routing (`/about`), which breaks on GitHub Pages refresh.
- **Asset Paths:** Always use relative paths (e.g., `./assets/image.png`, never `/assets/image.png`) so images, scripts, and stylesheets load properly on GitHub Pages.

## 2. Tone, Audience & Placeholder Rules
- **Target Audience:** Non-technical HR recruiters first, technical hiring managers second.
- **Copywriting Style:** Clear, outcome-focused, and human. Avoid heavy technical jargon in hero headlines and project summaries; focus on the problem solved and user impact. Keep technical stack details neatly organized in small secondary tags/badges.
- **Visual Theme:** Clean, bright, high-trust studio aesthetic. Maintain generous whitespace and clear hierarchy so recruiters can scan the page in under 10 seconds.
- **Strict No-Dummy-Data Rule:** When translating attached mockups into code, **DO NOT copy dummy names, fake project titles, or placeholder metrics** from the mockup images (e.g., do not use "Maya Hart", "Signal Forecast", "Field Notes", etc.). Always use clear bracketed placeholders (`[Your Name]`, `[Your Initials]`, `[Project Title 1]`, `[One-sentence HR-friendly summary]`, `[Key Impact Metric]`) stored in `src/data/portfolioData.js` so real data can be swapped in easily later.

## 3. Design System
- **Typography (Google Fonts):**
  - **Headers / Titles (`h1`–`h3`):** `JetBrains Mono` (monospace). Use tight letter-spacing (`-0.02em`) and clean line-height (`1.15`–`1.2`) so large headers look intentional and structured.
  - **Body & UI Elements:** `Inter` (sans-serif) for all paragraphs, navigation links, buttons, and tech-stack badges.
- **Color Palette (Desaturated Complementary — 60-30-10 Rule):**
  - **Background (60%):** `#FFFFFF` (Pure White)
  - **Surface / Cards (30%):** `#F4F4F5` (Cool Light Gray) — use subtle borders (`#E4E4E7`) or clean padding for card separation.
  - **Primary Text / Headers / Dark Accent Band:** `#0F172A` (Navy-Black) — used for main typography and the high-contrast "Hackathons & experiments" banner on the Portfolio page.
  - **Secondary Text / Body:** `#475569` (Cool Slate)
  - **Primary Accent (10%):** `#D97706` (Warm Amber) — use sparingly for primary CTA buttons ("Explore my work", "Let's talk", "See all projects"), active nav indicators, and highlighted headline keywords. Ensure white text (`#FFFFFF`) or dark text (`#0F172A`) on Amber buttons maintains high contrast.

## 4. Coding & Learning Standards
- **Educational & Transparent:** Write clean, well-commented React functional components using standard Hooks (`useState`, `useEffect`). Avoid overly clever abstractions so every file is easy to read and learn from.
- **Translating Mockups:** Match the layout grids, alternating project rows, filter pills, dropdown menu, and border-radius from the attached hi-fi mockups closely.
- **Responsiveness:** Mobile-first approach. Every section and multi-column grid must stack cleanly on mobile (`375px`), tablet (`768px`), and desktop (`1280px+`).
- **Accessibility & SEO:** Use semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) and include descriptive `alt` text on all images.

## 5. File Structure
- `index.html` - Root HTML entry loading Google Fonts (`JetBrains Mono` & `Inter`), React, ReactDOM, and Babel Standalone
- `styles/main.css` - Global resets, typography rules, layout utilities, and CSS variables (`--bg-primary`, `--bg-surface`, `--text-primary`, `--text-secondary`, `--accent-amber`)
- `src/data/portfolioData.js` - Structured arrays with bracketed placeholders for Projects, Hackathons/Experiments, Milestones, and Certificates
- `src/components/` - Shared UI components (`Navbar.js` with Portfolio dropdown, `Footer.js` with CTA banner, `ProjectCard.js`)
- `src/pages/` - Page views (`HomePage.js`, `AboutPage.js`, `PortfolioPage.js`, `ContactPage.js`)
- `src/App.js` - Root React component managing active page routing (`#home`, `#about`, `#portfolio`, `#contact`) and mounting to `#root`
- `assets/` - Portfolio thumbnails, icons, and resume PDF
# [Portfolio Website](https://pavle-portfolio-website.web.app/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

Yes, this portfolio has a build system, CI/CD pipeline, and modular architecture. For three pages. It's intentionally overengineered because the _how_ demonstrates as much as the _what_.

## Philosophy

**Form follows function.** Bauhaus taught us that design isn't decoration it's the visible expression of structure. This portfolio applies that principle at every level:

- **Visual design**: Geometric primitives (circles, squares, triangles) arranged on a grid system
- **Code architecture**: Modular sections with clear boundaries and single responsibilities
- **CSS methodology**: BEM notation creates self documenting, reusable components
- **Build process**: Every tool serves a purpose no complexity without intention

The same discipline that produces clean layouts produces maintainable code. Bauhaus isn't just an aesthetic; it's a design process that eliminates the unnecessary and celebrates the essential.

## Architecture

Modular sections with colocated HTML/CSS. BEM notation for component naming. CSS variables with `light-dark()` for theme-aware design tokens. Geometric primitives (circles, squares, triangles) as composable classes. P22 Bayer Universal typography on CSS Grid layouts.

## DevOps & Performance

**Vite** provides fast HMR (~50ms updates), automatic minification, tree-shaking, and zero-config builds. **GitHub Actions** CI/CD pipeline builds on push to main and deploys to **Firebase Hosting**.

**Build output**: ~10KB gzipped bundle with cache-busting hashes, 1-year cache headers for immutable assets, 3 HTTP requests total.

## Tech Stack

Vanilla JavaScript • Vite • CSS3 • Firebase Hosting • GitHub Actions

## Development

```bash
npm install && npm start
```

**Scripts**: `start` (dev) • `build` • `preview` • `serve` • `deploy`

## Deployment

Push to `main` triggers GitHub Actions → Vite build → Firebase Hosting. Manual: `npm run deploy`

---

**Built with intentional complexity.** Every tool, every architecture decision, every line of code serves the dual purpose of creating a functional portfolio and demonstrating technical depth. Form follows function all the way down.

# [Portfolio Website](https://pavle-portfolio-website.web.app/)

Personal portfolio site with Bauhaus-inspired design system.

## Philosophy

**Form follows function.** Design decisions visible in both aesthetics and code architecture—geometric primitives, modular components, mathematical scales.

## Tech Stack

Vanilla JavaScript • Vite • CSS3 • Firebase Hosting • GitHub Actions

## Architecture

- Modular sections with colocated HTML/CSS
- BEM naming convention
- CSS variables with `light-dark()` for theming
- Composable utility classes for shapes and animations
- Perfect Fourth (1.333) typographic/spacing scale
- Golden Ratio (1.618) shape sizing

## Development

```bash
npm install && npm start
```

## Deployment

Push to `main` → GitHub Actions → Firebase Hosting

Manual: `npm run deploy`

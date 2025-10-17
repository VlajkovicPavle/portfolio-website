# Portfolio Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A minimalist portfolio website built with vanilla HTML, CSS, and JavaScript, inspired by Bauhaus design principles.

## Features

- **Modern CSS** - Native nesting, CSS variables, and `light-dark()` for automatic theme switching
- **Custom Typography** - Bayer Universal font with optimized preloading
- **Bauhaus Aesthetic** - Clean geometric layouts with a focused color palette
- **Zero Framework** - Pure web standards for maximum performance and simplicity
- **Live Reload** - Browser-sync development server with hot reload

## Tech Stack

- HTML5
- CSS3 (with native nesting)
- Vanilla JavaScript
- Browser-sync for development
- Prettier for code formatting

## Development

```bash
npm install
npm start
```

Opens at `http://localhost:3002` with live reload enabled.

## Design System

### Colors

- **Primary**: Bauhaus Red, Blue, Yellow
- **Theme-aware**: Automatic light/dark mode support via CSS `color-scheme`
- **Neutrals**: Adaptive backgrounds and text colors

### Typography

- **Font**: P22 Bayer Universal
- **Style**: Geometric, modernist aesthetic

## Project Structure

```
src/
├── assets/fonts/          # Custom typography
├── sections/              # Page sections (modular HTML/CSS)
│   └── landing/
├── index.html             # Entry point
├── variables.css          # Design tokens
├── styles.css             # Global styles
└── main.js                # Dynamic section loading
```

## Philosophy

Built with intentional simplicity. No build complexity, no framework overhead—just modern web standards and clean code.

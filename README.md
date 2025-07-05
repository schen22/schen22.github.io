## About

Personal website to keep track of quibbles and projects using the Jekyll theme, [simple](https://github.com/wild-flame/jekyll-simple).

[7/2 Update]: Incorporated Claude to help revamp and modernize website. still a wip, but will iterate from here!

[7/4 Update]: Pretty much complete with all edits. Mainly missing a link to my resume, but i have yet to update that lulz.

## Setup

updates:
`node build.js`

serve:

`python3 -m http.server 8000`

## Documentation

- [Design Decisions](DESIGN_DECISIONS.md) - Technical choices and rationale for future reference

## Architecture

From Claude:

⏺ Here's the current architecture diagram for your portfolio project:

📁 schen22.github.io/
├── 🏗️ CORE BUILD SYSTEM
│ ├── build.js # Assembles components → index.html
│ └── index.html # Final assembled site (12KB)
│
├── 🧩 MODULAR COMPONENTS
│ ├── components/
│ │ ├── partials/
│ │ │ ├── head.html # Meta tags, stylesheets
│ │ │ ├── navigation.html # Nav dots structure
│ │ │ └── scripts.html # JavaScript imports
│ │ └── sections/
│ │ ├── hero.html # Landing/intro section
│ │ ├── about.html # About me + beliefs
│ │ ├── projects.html # Clickable projects + slideshow
│ │ └── contact.html # Contact info + links
│
├── 🎨 STYLING LAYERS
│ ├── assets/css/
│ │ ├── base.css # Reset, global styles (1.1KB)
│ │ ├── layout.css # Grid, section layouts (1.9KB)
│ │ ├── sections.css # Hero, about, contact styles (1.5KB)
│ │ ├── components.css # Reusable UI components (557B)
│ │ ├── projects.css # Project cards + slideshow (3.2KB)
│ │ └── responsive.css # Mobile breakpoints (2.2KB)
│
├── ⚡ INTERACTIVE LAYER
│ ├── assets/js/
│ │ ├── animations.js # Scroll reveals, transitions (1.5KB)
│ │ ├── navigation.js # Nav dots, touch, zoom handling (2.3KB)
│ │ └── projects.js # Clickable cards → slideshow (1.1KB)
│
├── 🖼️ VISUAL ASSETS
│ ├── assets/img/
│ │ ├── yumi-tracker-_.png # Live app screenshots (340KB total)
│ │ ├── pokestrides.png # Flutter app screenshot (204KB)
│ │ ├── its-okay-_.png # Feelings wheel image (156KB)
│ │ ├── antighosting-compressed.gif # iOS app demo (~600KB)
│ │ ├── ar_demo_pikachu.png # AR demo screenshot (597KB)
│ │ └── ar_demo-compressed.gif # AR demo video (~2MB)
│
└── 🔧 DEVELOPMENT TOOLS
├── CLAUDE.md # Project context & instructions
├── color-test.html # Design iteration testing
├── layout-tests.html # Responsive testing suite
└── mockups/ # Design exploration files

🏛️ Architecture Principles

🔄 Modular Assembly

- Components → build.js → index.html
- Easy to update individual sections
- Reusable component patterns

📱 Performance-First

- Total bundle: ~1.36MB (30-65% smaller than average)
- Lazy image loading (only when projects clicked)
- Minimal JavaScript (12KB vs 500KB+ average)

🎯 User Experience

- Clickable project cards → image slideshow
- Smooth scroll navigation with progress bar
- Mobile-responsive with zoom support
- Fast loading on all connection types

🛠️ Maintainability

- Modular CSS (easy to update styles)
- Component-based HTML (easy to add sections)
- Minimal dependencies (no frameworks)
- Build system for consistency

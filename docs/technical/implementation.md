# Technical Implementation Guide

## Hosting & Technology Stack
- **Platform**: GitHub Pages (Jekyll-compatible)
- **Build**: Static HTML/CSS/JS (no Jekyll dependencies for simplicity)
- **Deployment**: Auto-deploy on push to `master` branch
- **Analytics**: Google Analytics (UA-89413148-1)

## File Structure
```
├── index.html (main portfolio page)
├── layout-tests.html (interactive layout testing)
├── visual-regression-tests.html (screenshot comparison)
├── CLAUDE.md (development guide index)
├── README.md (setup instructions)
├── docs/ (organized documentation)
│   ├── development/ (standards, commit guides)
│   ├── testing/ (test procedures)
│   ├── content/ (content strategy)
│   └── technical/ (implementation details)
├── _posts/ (blog posts - preserve existing)
├── assets/
│   ├── img/ (images - preserve existing)
│   └── pokemil/ (Pokemon project assets)
└── resume.pdf (downloadable resume)
```

## Development Environment

### Local Development
```bash
# Simple HTTP server (current approach)
python3 -m http.server 8000

# Previous Jekyll approach (deprecated)
# bundle exec jekyll serve
```

### Testing Commands
```bash
# Start server
python3 -m http.server 8000

# Open test pages
open http://localhost:8000/layout-tests.html
open http://localhost:8000/visual-regression-tests.html
```

## Deployment Process
1. **Test locally**: Run visual regression tests
2. **Verify changes**: Complete layout test checklist
3. **Commit**: Follow commit standards
4. **Push**: Auto-deploys via GitHub Pages
5. **Verify live**: Test production site

## Success Metrics
- Fast load times (< 3 seconds)
- Mobile responsive (looks great on all devices)
- Easy content updates (non-technical friendly)
- Professional appearance that showcases product engineering skills
- SEO optimized for "Sarah Chen product engineer" searches

## Future Enhancements (Post-MVP)
- Contact form integration
- Project filtering by technology
- Dark/light mode toggle
- Blog post search functionality
- Performance analytics integration
- GitHub Actions for automated testing

## Legacy Notes
- Current Jekyll theme appears custom-built
- Existing CSS uses SCSS with modular approach
- Site currently has basic structure but needs complete redesign
- Preserving Google Analytics (UA-89413148-1) and existing Jekyll setup
- GitHub username: schen22, Twitter: srchen22
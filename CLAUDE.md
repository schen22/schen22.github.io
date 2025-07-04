# Sarah Chen's Portfolio Website - Project Context

## 🎯 Primary Goal
Create a **minimal, aesthetic website** to showcase Sarah's experience as a **Product Engineer**, highlight projects with a sleek, modern approach that's **easy to maintain and update**.

## 👤 About Sarah
- **Role**: Product Engineer specializing in iOS development and backend systems
- **Focus**: Building user-centered solutions, bridging gap between user needs and technical implementation
- **Background**: Works with design and product partners to ensure best user experience
- **Personal**: Enjoys hiking, reading (books/manga), anime, K-dramas

### Work Philosophy & Team Dynamics:
- **People-first mentality**: Believes strong teams build strong products
- **Thrives with**: Positive reinforcement and collaborative environments
- **Best collaborators**: Design partners, product managers, and cross-functional teams who value user-centered thinking
- **Leadership style**: Mentoring-focused (has mentored 5+ junior engineers)

## 🌐 Website Requirements

### Required Sections (in priority order):
1. **Hero/About** - Product Engineer specialization and philosophy
   - Main about content (background, focus, personal interests)
   - Core beliefs and work philosophy
   - Personal interests and activities
2. **Projects** - 6 featured projects with business metrics, technical details, links to live sites/repos
3. **Contact** - Resume download + social links (GitHub, LinkedIn) + collaboration interest

### Existing Content to Preserve:
- **3 blog posts** in `_posts/` directory:
  - 2016-12-17: "It's alive!" (Goals category)
  - 2017-03-21: "Gotta Catch 'em All" (Reflections Projects - Pokemon AR at SXSW)
  - 2021-09-25: "derpface" (Reflections - maintenance notice)
- **Assets**: Images in `/assets/img/` and `/assets/pokemil/` directories

## 🎨 Design Preferences (Based on 2024-2025 Research)

### Chosen Style Direction:
- **Interactive Storytelling** (simplified version to avoid complexity)
- Clean, minimal aesthetic with strategic white space
- Modern typography (mix of sans-serif for headings, clean fonts for body)
- Subtle animations and smooth scrolling
- Mobile-first responsive design

### Layout Options Created:
1. **Hero-Focused Minimalist** - Single column, generous white space, timeline
2. **Split-Screen Dashboard** - Dark theme, sidebar nav, code-inspired
3. **Asymmetric Grid** - CSS Grid, varying section sizes, creative layout
4. **Interactive Storytelling** - Vertical narrative flow, smooth animations

### Color Palette Ideas:
- Option 1: Minimalist whites/grays with blue accent (#0066cc)
- Option 2: Dark theme (#0d1117, #161b22) with blue highlights (#58a6ff)
- Avoid overly bright/neon unless specifically requested

### Modern Design Elements to Include:
- Custom cursor interactions (simple)
- Scroll-triggered animations
- Hover effects on project cards
- Smooth transitions between sections
- Grid layouts for projects
- Timeline visualization for experience

## 🛠 Technical Requirements

### Hosting & Maintenance:
- **GitHub Pages** compatible (Jekyll-based)
- Easy to add new projects and blog posts
- Minimal dependencies to reduce maintenance burden
- Fast loading times
- SEO optimized

### File Structure:
```
├── index.html (main portfolio - single file approach)
├── _posts/ (blog posts - preserve existing)
├── assets/
│   ├── css/ (modular CSS files)
│   ├── js/ (minimal JavaScript modules)
│   └── img/ (images - preserve existing)
└── resume.pdf (downloadable resume)
```

### Content Management Strategy:
- **Projects**: Directly in index.html for easy updates
- **Content**: All in index.html - simple, maintainable approach
- **Blog Posts**: Continue using `_posts/` with front matter (linked from projects)
- **Images**: Organized in `assets/img/` with consistent naming
- **Version Control**: Use git for all versioning - no need for backup files

## 📊 Success Metrics
- Fast load times (< 3 seconds)
- Mobile responsive (looks great on all devices)
- Easy content updates (non-technical friendly)
- Professional appearance that showcases product engineering skills
- SEO optimized for "Sarah Chen product engineer" searches

## 🔄 Maintenance Commands
- **Local development**: `bundle exec jekyll serve`
- **Build**: `bundle exec jekyll build`
- **Deploy**: Push to `master` branch (auto-deploys via GitHub Pages)

## 💡 Future Enhancements (Post-MVP)
- Contact form integration
- Project filtering by technology
- Dark/light mode toggle
- Blog post search functionality
- Performance analytics integration

## 🎯 Key Messaging
- **Tagline**: "Product Engineer building user-centered solutions"
- **Value Prop**: Bridge between user needs and technical implementation
- **Team Philosophy**: "Strong teams build strong products"
- **Tone**: Professional but approachable, technical but human-centered

## 📝 Content Priorities
1. **About**: Core beliefs, work philosophy, personal interests
2. **Projects**: Focus on user/business outcomes, technical details, real examples
3. **Contact**: Professional connection points and collaboration interest

## 🎯 Career Theme: "Strategic Translator & Team Unifier"
- **Core Value**: Thrives in ambiguous problems where others are lost
- **Unique Skill**: Diagnosing issues and setting direction through stakeholder alignment  
- **Bridge Role**: Technical depth + cross-functional influence
- **Key Strength**: Mediating between eng/non-eng, preventing scope creep
- **Rapid Growth**: 2 years to Senior (2017-2019), 6 years to Staff (2017-2023)
- **Recognition**: Solving complex problems "no one knew how to solve" through technical skills + influence + cross-org collaboration

---

## 🔧 Development Notes
- **Current Structure**: Single `index.html` file with modular CSS/JS
- **CSS Architecture**: Modular approach (base.css, layout.css, sections.css, components.css, projects.css, responsive.css)
- **Simplified Workflow**: Direct edits to index.html, git for version control
- **Analytics**: Preserving Google Analytics (UA-89413148-1)
- **Social**: GitHub username: schen22, Twitter: srchen22

## ⚠️ Remember
- Keep design SIMPLE to avoid maintenance complexity
- Focus on CONTENT over flashy effects
- Ensure MOBILE-FIRST approach
- Make it easy to ADD/UPDATE projects and blog posts
- Prioritize FAST loading and accessibility
- Highlight COLLABORATION and people-first approach throughout
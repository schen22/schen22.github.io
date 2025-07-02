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
   - **Working With Me subsection** - People-first mentality, collaboration style, what makes teams successful
2. **Experience** - Career progression with product impact metrics + PDF resume download + social links (GitHub, LinkedIn)
3. **Projects** - 4-6 featured projects with business metrics, technical details, previews/screenshots, links to live sites/apps
4. **Thoughts/Blog** - Migrate existing posts + space for future product insights

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
├── _config.yml (Jekyll config)
├── _layouts/ (page templates)
├── _includes/ (reusable components)
├── _posts/ (blog posts - preserve existing)
├── _data/ (structured data for projects/experience)
├── assets/
│   ├── css/ (custom styles)
│   ├── js/ (minimal JavaScript)
│   └── img/ (images - preserve existing)
└── resume.pdf (downloadable resume)
```

### Content Management Strategy:
- **Projects**: Store in `_data/projects.yml` for easy updates
- **Experience**: Store in `_data/experience.yml` for easy updates
- **Blog Posts**: Continue using `_posts/` with front matter
- **Images**: Organized in `assets/img/` with consistent naming

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
1. **Experience**: Quantified impact (40% user engagement improvement, 2M+ users served, etc.)
2. **Projects**: Focus on user/business outcomes, not just technical specs
3. **Collaboration**: Highlight work with design/product partners and mentoring
4. **Process**: Show product thinking, not just engineering execution
5. **Growth**: Career progression and increasing responsibility

## 🤝 "Working With Me" Content Ideas (About Page Subsection):
- People-first mentality in action
- Examples of successful cross-functional collaboration
- Mentoring philosophy and approach
- What energizes you in team environments
- How positive reinforcement drives better outcomes
- Examples of building strong team dynamics

**Implementation Notes**: 
- Can be styled as a distinct subsection within About page with visual separator
- Easy to extract as standalone page later if desired
- Consider using accordions, tabs, or visual cards to organize this content

---

## 🔧 Development Notes
- Current Jekyll theme appears custom-built
- Existing CSS uses SCSS with modular approach
- Site currently has basic structure but needs complete redesign
- Preserving Google Analytics (UA-89413148-1) and existing Jekyll setup
- GitHub username: schen22, Twitter: srchen22

## ⚠️ Remember
- Keep design SIMPLE to avoid maintenance complexity
- Focus on CONTENT over flashy effects
- Ensure MOBILE-FIRST approach
- Make it easy to ADD/UPDATE projects and blog posts
- Prioritize FAST loading and accessibility
- Highlight COLLABORATION and people-first approach throughout
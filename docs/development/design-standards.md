# Design Standards & Requirements

## Layout Structure (Priority Order)
1. **Hero/About** - Product Engineer specialization and philosophy
   - Main about content (background, focus, personal interests)
   - **Working With Me subsection** - People-first mentality, collaboration style
2. **Experience** - Career progression with product impact metrics + PDF resume download + social links
3. **Projects** - 4-6 featured projects with business metrics, technical details, previews/screenshots
4. **Thoughts/Blog** - Migrate existing posts + space for future product insights

## Responsive Design Standards
- **Mobile-first approach** - Design starts with mobile, enhances for desktop
- **Projects Section Layout**:
  - Desktop: 2-row scrollable grid (3 columns × 2 rows)
  - Mobile: Single column stack with vertical scroll
- **Horizontal scroll behavior**: Smooth scrolling with custom scrollbars
- **Navigation**: Dots hidden on mobile, visible on desktop
- **Typography**: Scalable without layout breaks

## Visual Design Guidelines

### Style Direction
- **Interactive Storytelling** (simplified version to avoid complexity)
- Clean, minimal aesthetic with strategic white space
- Modern typography (mix of sans-serif for headings, clean fonts for body)
- Subtle animations and smooth scrolling
- Mobile-first responsive design

### Color Palette Options
- **Option 1**: Minimalist whites/grays with blue accent (#0066cc)
- **Option 2**: Dark theme (#0d1117, #161b22) with blue highlights (#58a6ff)
- Avoid overly bright/neon unless specifically requested

### Modern Design Elements
- Custom cursor interactions (simple)
- Scroll-triggered animations
- Hover effects on project cards
- Smooth transitions between sections
- Grid layouts for projects
- Timeline visualization for experience

## Performance Requirements
- **Load Time**: < 3 seconds on 3G connection
- **Lighthouse Score**: 90+ for Performance, Accessibility, Best Practices
- **Core Web Vitals**: 
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

## Browser Support
- **Desktop**: Chrome, Firefox, Safari (latest 2 versions)
- **Mobile**: Safari (iOS), Chrome (Android)
- **Graceful degradation**: Core content accessible without JavaScript

## Development Principles
- Keep design SIMPLE to avoid maintenance complexity
- Focus on CONTENT over flashy effects
- Ensure MOBILE-FIRST approach
- Make it easy to ADD/UPDATE projects and blog posts
- Prioritize FAST loading and accessibility
- Highlight COLLABORATION and people-first approach throughout
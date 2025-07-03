# Code Organization Standards

## 🏗️ Feature-Based Architecture

The codebase follows a **feature-based organization** approach where all related code is grouped together by functionality rather than file type.

### Core Principles
- **Group all related code together** - Components, styles, and logic for each feature live in proximity
- **Easy to find everything related to a feature** - No hunting across multiple directories
- **Prevents scattered files across the codebase** - Logical grouping prevents fragmentation
- **Makes it clear what features exist** - Directory structure reflects actual product features

## 📂 Project Structure Standards

### Root Level Organization
```
├── components/           # UI components and sections
├── assets/              # Static assets organized by type
├── docs/                # Documentation organized by domain
├── tests/               # Testing files and fixtures
├── build.js             # Build system entry point
├── index.html           # Current production file
├── index-new.html       # Modular assembled version
└── README.md            # Setup and quick start
```

### Feature-Based Component Structure
```
components/
├── sections/            # Page sections (main features)
│   ├── hero.html           # Landing/intro feature
│   ├── about.html          # About Sarah feature
│   ├── experience.html     # Career timeline feature
│   ├── projects.html       # Project showcase feature
│   └── contact.html        # Contact/CTA feature
├── partials/            # Shared/utility components
│   ├── head.html           # Document head setup
│   ├── navigation.html     # Progress bar, nav dots
│   └── scripts.html        # JavaScript includes
└── [future features]/   # New features go here
    ├── feature-name.html
    ├── feature-styles.css
    └── feature-logic.js
```

### Asset Organization by Feature Domain
```
assets/
├── css/                 # Styles organized by responsibility
│   ├── base.css            # Global foundation (reset, typography)
│   ├── layout.css          # Layout systems (grid, sections)
│   ├── sections.css        # Section-specific styles (hero, about, etc)
│   ├── components.css      # Reusable components (timeline, cards)
│   ├── projects.css        # Projects feature styles
│   └── responsive.css      # Device-specific adaptations
├── js/                  # JavaScript organized by feature
│   ├── animations.js       # Scroll effects, visual feedback
│   ├── navigation.js       # Section navigation, touch gestures
│   └── projects.js         # Projects swipe functionality
└── img/                 # Images organized by feature
    ├── projects/           # Project screenshots, assets
    ├── about/              # Personal photos, icons
    └── shared/             # Common assets (logos, backgrounds)
```

### Documentation Organization by Domain
```
docs/
├── development/         # Development standards and processes
│   ├── design-standards.md     # UI/UX guidelines
│   ├── device-specifications.md # Mobile/desktop requirements
│   ├── commit-standards.md     # Git workflow standards
│   └── code-organization.md    # This file
├── testing/             # Testing procedures and standards
│   ├── visual-regression.md    # Screenshot testing
│   └── performance.md          # Performance standards
├── content/             # Content strategy and brand
│   ├── strategy.md             # Content guidelines
│   └── brand-identity.md       # Brand standards
└── technical/           # Technical implementation
    ├── implementation.md       # Hosting, deployment
    └── modular-architecture.md # Component system
```

## 🎯 Feature Development Standards

### Adding New Features
When adding a new feature (e.g., "testimonials", "blog", "portfolio-filter"):

1. **Create feature section component**:
   ```
   components/sections/testimonials.html
   ```

2. **Add feature-specific styles**:
   ```css
   /* In assets/css/sections.css */
   .testimonials {
     /* Feature-specific section styles */
   }
   
   /* In assets/css/components.css */
   .testimonial-card {
     /* Feature-specific component styles */
   }
   ```

3. **Add feature logic if needed**:
   ```
   assets/js/testimonials.js
   ```

4. **Update build system**:
   ```javascript
   // In build.js
   const testimonials = readComponent('components/sections/testimonials.html');
   ```

5. **Document feature requirements**:
   ```
   docs/features/testimonials.md
   ```

### Feature Modification Standards
- **Keep related code together** - Styles, HTML, and JavaScript for a feature should be easily discoverable
- **Use clear naming conventions** - Feature names should be consistent across files
- **Document feature dependencies** - Note any cross-feature interactions
- **Test feature isolation** - Ensure features can be modified independently

## 📝 File Naming Conventions

### Component Files
- **Descriptive names**: `hero.html`, `project-showcase.html`
- **kebab-case**: Use hyphens for multi-word components
- **Feature prefix**: For related components, use `feature-component.html`

### Style Files
- **Purpose-based**: `layout.css`, `components.css`, `responsive.css`
- **Feature-specific**: Add feature styles to appropriate existing files
- **Avoid proliferation**: Don't create new CSS files unless absolutely necessary

### JavaScript Files
- **Action-based**: `animations.js`, `navigation.js`
- **Feature-based**: `projects.js`, `testimonials.js`
- **Module format**: Each file should export clear public APIs

## 🔧 Build System Standards

### Component Assembly
```javascript
// build.js should follow this pattern:
function buildHTML() {
  // 1. Read all feature components
  const hero = readComponent('components/sections/hero.html');
  const about = readComponent('components/sections/about.html');
  // ... more features
  
  // 2. Assemble in logical order
  const html = assembleFeatures([hero, about, experience, projects, contact]);
  
  // 3. Write complete document
  writeHTML(html);
}
```

### Asset Management
- **CSS concatenation order**: base → layout → sections → components → responsive
- **JavaScript module loading**: Load in dependency order
- **Asset optimization**: Maintain source files, optimize during build

## 🧪 Testing Standards by Feature

### Feature-Level Testing
Each major feature should have corresponding tests:
```
tests/
├── sections/
│   ├── hero.test.js
│   ├── projects.test.js
│   └── contact.test.js
├── components/
│   ├── timeline.test.js
│   └── navigation.test.js
└── integration/
    └── full-page.test.js
```

### Visual Regression by Feature
- **Baseline screenshots** should cover each major feature
- **Test scenarios** should include feature-specific interactions
- **Mobile/desktop** testing for each feature's responsive behavior

## 📊 Maintenance Standards

### Regular Organization Review
- **Monthly**: Review if new features fit the established structure
- **Quarterly**: Evaluate if organization is still serving development speed
- **Annually**: Consider major refactoring if structure becomes unwieldy

### Refactoring Guidelines
- **Extract common patterns** into reusable components
- **Consolidate related functionality** when features grow complex
- **Document architectural decisions** in this file
- **Maintain backward compatibility** during transitions

### Performance Considerations
- **Bundle size impact** - Consider feature impact on load time
- **Code splitting** - Larger features should be split into modules
- **Tree shaking** - Ensure unused feature code can be eliminated
- **Lazy loading** - Non-critical features can load on demand

## ⚠️ Anti-Patterns to Avoid

### File Organization
- ❌ **Type-based organization** - Don't separate by file type (all CSS in one folder)
- ❌ **Deep nesting** - Avoid more than 2-3 levels of directory structure
- ❌ **Mixed concerns** - Don't put unrelated features in the same file
- ❌ **Generic names** - Avoid names like `utils.js`, `styles.css`, `helpers.html`

### Feature Development
- ❌ **Scattered related code** - Don't spread feature code across unrelated files
- ❌ **Tight coupling** - Features shouldn't depend heavily on each other
- ❌ **Inconsistent naming** - Use consistent terminology across HTML, CSS, and JS
- ❌ **Undocumented dependencies** - Always document when features interact

## 🚀 Future Enhancements

### Advanced Organization
- **Feature flags** - Enable/disable features via configuration
- **Component library** - Extract reusable components into shared library
- **Micro-frontends** - Independent deployment of feature sections
- **Design system** - Systematic component and style organization

This feature-based organization ensures the codebase remains maintainable, scalable, and easy to understand as the portfolio website grows in complexity.
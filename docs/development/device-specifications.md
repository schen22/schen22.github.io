# Device-Specific Design Specifications

## 📱 Mobile Specifications (≤768px)

### Mobile Viewport Control
- **Zoom Disabled**: `user-scalable=no` to prevent layout breaking
- **Fixed Viewport**: `width=device-width, initial-scale=1.0, maximum-scale=1.0`
- **Layout Protection**: Ensures consistent design across all mobile devices
- **Touch Optimization**: Prevents accidental zoom during navigation

### Mobile Overflow Prevention
- **No Horizontal Overflow**: Content never extends beyond viewport width
- **No Vertical Overflow**: Each section fits within viewport height
- **Text Wrapping**: All text content wraps properly within containers
- **Image Constraints**: All images sized to fit within viewport boundaries
- **Container Limits**: All elements respect viewport dimensions
- **Scroll Control**: Only intentional scrolling (section-to-section or card swipe)

### Mobile Section Layout Requirements
- **Full Viewport Height**: Each section must fit within mobile screen height
- **Content Priority**: Most important information visible without scrolling
- **Scroll Indicators**: Always visible within the same viewport as content
- **Navigation Hints**: Clear indicators for next actions within current view
- **No Hidden Content**: Critical information never requires scrolling to discover

### Projects Section Layout
- **Format**: Swipeable card stack interface (Instagram Stories style)
- **Behavior**: Horizontal swipe between individual project cards (left/right)
- **Navigation**: Touch swipe gestures + dot indicators for direct navigation
- **Card Display**: One card visible at a time, full-width presentation
- **Animation**: Smooth card transitions with cubic-bezier easing (0.25, 0.8, 0.25, 1)
- **Swipe Sensitivity**: 50px minimum swipe distance to trigger card change
- **Indicators**: 6 circular dots showing current position and allowing direct navigation
- **Accessibility**: Touch targets meet 44px minimum, indicators clickable
- **Viewport Constraint**: Entire card + indicators fit within mobile viewport
- **No Card Overflow**: Cards never extend beyond screen boundaries
- **Touch Optimization**: Prevents page scroll during horizontal swipes
- **Swipe Direction**: Left swipe = next card, Right swipe = previous card

### Mobile-Specific Features
- **Touch Optimizations**: 
  - Minimum 44px touch targets
  - Swipe gesture support
  - Momentum scrolling
  - No zoom interference with gestures
- **Performance**:
  - Lazy loading for off-screen cards
  - Optimized images for mobile bandwidth
  - Minimal JavaScript footprint
- **Typography**: 
  - Larger base font sizes (16px minimum)
  - Increased line height for readability
  - Shortened text where appropriate
  - Content truncated to fit viewport when necessary
  - No text overflow beyond container boundaries

### Mobile Navigation Requirements
- **Navigation Dots**: Hidden to reduce clutter OR compact inline design
- **Section Navigation**: Touch-friendly section switching within viewport
- **Scroll Hints**: Visible indicators for scrollable content (within same view)
- **Back-to-Top**: Easy return to hero section
- **Progress Indicators**: Show current position without requiring scroll

### Mobile Content Strategy
- **Prioritized Information**: Most important content first and visible
- **Shortened Descriptions**: Concise project summaries that fit viewport
- **Contact Priority**: Easy access to LinkedIn/resume within view
- **Loading States**: Clear feedback for slower connections
- **Viewport-First Design**: Content designed around mobile screen constraints

## 💻 Desktop Specifications (>768px)

### Desktop Overflow Prevention
- **Controlled Horizontal Overflow**: Only for intentional scrolling (projects section)
- **No Unintended Overflow**: Content containers respect viewport boundaries
- **Zoom-Safe Layout**: No overflow at 50%-200% zoom levels
- **Text Boundaries**: All text content contained within designated areas
- **Image Constraints**: Images scale appropriately without breaking layout

### Desktop Zoom Support
- **Full Zoom Support**: Browser zoom 50%-200% supported
- **Responsive Scaling**: Layout adapts to zoom levels
- **Text Readability**: Maintains readability at all zoom levels
- **No Layout Breaking**: Design remains functional when zoomed
- **No Zoom Overflow**: Content remains contained at all zoom levels

### Projects Section Layout
- **Format**: 2-row horizontal scrolling grid (3×2)
- **Behavior**: Smooth horizontal scroll with mouse/trackpad
- **Navigation**: Custom scrollbars + optional scroll buttons
- **Card Size**: Fixed width (350px) for consistency
- **Animation**: Subtle hover effects and smooth scrolling
- **Accessibility**: Keyboard navigation + screen reader support
- **Controlled Overflow**: Intentional horizontal scroll within container

### Desktop-Specific Features
- **Advanced Interactions**:
  - Hover states on all interactive elements
  - Smooth scroll between sections
  - Navigation dots for section jumping
  - Subtle animations and transitions
- **Performance**:
  - Optimized for faster connections
  - Higher resolution images
  - More detailed animations
- **Typography**:
  - Refined type hierarchy
  - Better line length for reading
  - More detailed project descriptions
  - No text overflow at any zoom level

### Desktop Navigation
- **Navigation Dots**: Visible for easy section navigation
- **Keyboard Shortcuts**: Arrow keys for navigation
- **Mouse Interactions**: Scroll wheel support
- **Precision**: Pixel-perfect hover states

### Desktop Content Strategy
- **Detailed Information**: Full project descriptions
- **Visual Hierarchy**: More sophisticated layouts
- **Professional Presentation**: Optimized for hiring managers
- **Portfolio Showcase**: Emphasis on visual project previews

## 🖥️ Large Desktop Specifications (>1440px)

### Enhanced Features
- **Wider Layouts**: Utilize extra screen real estate
- **More Cards Visible**: Show 4+ project cards simultaneously
- **Enhanced Typography**: Larger, more readable text
- **Sophisticated Animations**: More complex hover effects
- **No Ultra-Wide Overflow**: Content adapts to very wide screens

## 📊 Responsive Breakpoints

### Breakpoint Strategy
```css
/* Mobile First - Viewport-Constrained */
/* Base styles: 320px - 768px */
/* Max height considerations for mobile sections */

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Transition between mobile and desktop */
}

/* Desktop Small */
@media (min-width: 1025px) and (max-width: 1440px) {
  /* Standard desktop experience */
}

/* Desktop Large */
@media (min-width: 1441px) {
  /* Enhanced desktop experience */
}
```

## 🔧 Implementation Requirements

### Mobile Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

### Overflow Prevention CSS
```css
/* Global overflow prevention */
* {
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
}

/* Mobile sections must fit viewport */
@media (max-width: 768px) {
  .section {
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 100vw;
  }
  
  .scroll-indicator {
    position: absolute;
    bottom: 20px;
    /* Always visible within viewport */
  }
  
  /* Prevent any horizontal overflow */
  * {
    max-width: 100vw;
  }
}

/* Desktop controlled overflow */
@media (min-width: 769px) {
  .projects-container {
    overflow-x: auto;
    overflow-y: hidden;
    /* Only projects section has intentional horizontal scroll */
  }
  
  .section:not(.projects) {
    overflow: hidden;
  }
}
```

### Mobile Projects Swipe Implementation
```javascript
// Required features:
- Touch event handling (touchstart, touchmove, touchend)
- Horizontal swipe detection with 50px minimum threshold
- Directional swipe logic (left = next, right = previous)
- Card position tracking (currentProjectIndex)
- Smooth CSS transforms with cubic-bezier easing
- Indicator dots updating automatically
- Direct navigation via dot clicks
- Touch prevention of page scroll during swipes
- Boundary checking (no infinite scroll)
- Instagram Stories-style UX
- 6 total project cards support
```

### Mobile Projects CSS Structure
```css
/* Mobile card container */
.projects-container {
  position: relative;
  overflow: hidden;
}

/* Cards layout - 600% width for 6 cards */
.projects-grid {
  display: flex;
  width: 600%;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Individual cards - each 1/6 of total width */
.project-card {
  width: calc(100% / 6);
  flex-shrink: 0;
}

/* Card indicators */
.mobile-card-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
}
```

### Desktop Scroll Implementation
```javascript
// Required features:
- Smooth horizontal scrolling
- Custom scrollbar styling
- Mouse wheel support
- Keyboard arrow navigation
- Scroll position indicators
- Performance optimization
- Zoom level adaptation
- Overflow boundary management
```

## 🎯 User Experience Goals

### Mobile UX Priorities
1. **Viewport-First Design**: All content and navigation within single screen view
2. **No Overflow**: Content never extends beyond screen boundaries
3. **Consistent Layout**: No zoom-related layout breaks
4. **Touch-Friendly**: Easy navigation with thumbs
5. **Immediate Clarity**: Users know what to do without scrolling
6. **Intuitive Gestures**: Natural swipe interactions
7. **Reduced Cognitive Load**: Simplified navigation

### Desktop UX Priorities
1. **Professional Presentation**: Optimized for hiring managers
2. **Controlled Overflow**: Only intentional scrolling areas
3. **Accessibility Support**: Full zoom functionality without breaking
4. **Smooth Interactions**: Polished hover and scroll effects
5. **Efficient Navigation**: Quick access to all content
6. **Visual Hierarchy**: Clear information architecture

## 📱 Testing Requirements by Device

### Mobile Testing Checklist
- [ ] Each section fits within mobile viewport (no vertical scroll needed)
- [ ] No horizontal overflow at any screen size (320px-768px)
- [ ] No vertical overflow within individual sections
- [ ] Scroll indicators visible within same view as content
- [ ] Navigation hints apparent without scrolling
- [ ] Zoom disabled (pinch gestures ignored)
- [ ] Viewport locked to prevent scaling
- [ ] Swipe gestures work smoothly
- [ ] Cards snap to position correctly
- [ ] Touch targets meet 44px minimum
- [ ] Loading performance acceptable on 3G
- [ ] Accessibility features functional
- [ ] Content readable without zooming
- [ ] Critical information never hidden below fold
- [ ] Text wraps properly within containers
- [ ] Images never exceed container boundaries

### Desktop Testing Checklist
- [ ] Browser zoom 50%-200% works correctly without overflow
- [ ] Layout remains functional at all zoom levels
- [ ] No unintended horizontal overflow except projects section
- [ ] No vertical overflow on any section
- [ ] Horizontal scroll smooth and responsive (projects only)
- [ ] Hover states work correctly
- [ ] Keyboard navigation functional
- [ ] All content visible and accessible
- [ ] Performance smooth at 60fps
- [ ] Cross-browser compatibility
- [ ] Professional visual presentation
- [ ] Content adapts to ultra-wide screens (>1920px)

## ⚡ Performance Targets by Device

### Mobile Performance
- **First Contentful Paint**: <2s on 3G
- **Time to Interactive**: <3s on 3G
- **Bundle Size**: <500KB initial load
- **Image Optimization**: WebP format, lazy loading
- **Layout Stability**: No zoom-induced layout shifts
- **Viewport Rendering**: Instant section visibility
- **No Layout Thrashing**: Overflow prevention reduces reflows

### Desktop Performance
- **First Contentful Paint**: <1s
- **Time to Interactive**: <2s
- **Smooth Animations**: 60fps
- **Lighthouse Score**: 95+ on all metrics
- **Zoom Performance**: Smooth scaling at all levels
- **Scroll Performance**: Smooth horizontal scrolling without jank
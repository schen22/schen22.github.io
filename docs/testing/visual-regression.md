# Visual Regression Testing Guide

## Critical Testing Mandate
**ALL UI changes MUST pass comprehensive testing before commits.** No exceptions.

## Test Files
- `layout-tests.html` - Interactive layout validation
- `visual-regression-tests.html` - Screenshot comparison system

## Testing Workflow (MANDATORY PROCESS)
1. **Before ANY UI changes**: Run `visual-regression-tests.html` to capture baseline
2. **After changes**: Re-run visual tests to detect regressions
3. **Manual testing**: Complete checklist in `layout-tests.html`
4. **Cross-browser**: Test in Chrome, Firefox, Safari (mobile + desktop)
5. **Only commit if**: All tests pass OR new baselines are intentionally updated

## How to Run Tests

### Step 1: Start Local Server
```bash
python3 -m http.server 8000
```

### Step 2: Access Test Pages
- Main site: http://localhost:8000/
- Layout Tests: http://localhost:8000/layout-tests.html
- Visual Regression Tests: http://localhost:8000/visual-regression-tests.html

### Step 3: Visual Regression Testing Process
1. **First time setup**: Open `visual-regression-tests.html`
2. Click **"Capture Baseline Screenshots"** - this creates reference images
3. **After any changes**: Click **"Run Visual Regression Tests"** to compare
4. **If intentional changes**: Click **"Update Baselines"** to accept new visuals

## Viewport Coverage (ALL REQUIRED)
- **Mobile**: 375px, 414px (portrait)
- **Tablet**: 768px, 1024px (both orientations)
- **Desktop**: 1200px, 1440px, 1920px+

## Layout Stability Requirements

### Responsive Behavior Validation
- Projects section: 2-row scrollable grid (desktop) → single column stack (mobile)
- Horizontal scroll MUST work smoothly on all devices
- Navigation elements adapt appropriately
- Typography scales without breaking layout

### Scroll & Zoom Resilience
- No horizontal overflow at any zoom level (50%-200%)
- Scroll hints appear/disappear correctly based on viewport
- Smooth scrolling between sections
- Touch/swipe navigation functional on mobile

### Loading States Testing
- Progressive enhancement - content visible before JavaScript loads
- No layout shift during asset loading
- Graceful degradation if scripts fail

## Element-Specific Test Checklist
- [ ] **Projects Section**: Horizontal scroll, card sizing, grid/flex layout switch
- [ ] **Hero Section**: Typography scaling, background positioning
- [ ] **Timeline**: Vertical alignment, responsive stacking
- [ ] **Contact Links**: Mobile stacking vs desktop inline
- [ ] **Navigation Dots**: Visibility control across breakpoints

## Quality Gates
**No commits allowed without:**
- ✅ Visual regression tests passing
- ✅ Layout tests completed 
- ✅ Cross-viewport validation
- ✅ Performance metrics within bounds
- ✅ Manual checklist completed

## Automated Testing Integration
- Tests must be runnable locally via simple HTML files
- Screenshot comparison stored in localStorage for simplicity
- Future: GitHub Actions integration for automated testing on PR

## Mobile-First Testing Priority
Given the critical importance of mobile experience:
- **Mobile viewports tested FIRST**
- **Touch interactions verified**
- **Scroll behavior validated**
- **Performance on slower devices considered**
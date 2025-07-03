# Performance Testing Standards

## Performance Requirements
- **Load Time**: < 3 seconds on 3G connection
- **Lighthouse Score**: 90+ for Performance, Accessibility, Best Practices
- **Core Web Vitals**: 
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

## Testing Tools
- **Lighthouse**: Built into Chrome DevTools
- **WebPageTest**: For detailed performance analysis
- **GTmetrix**: For comprehensive performance reports
- **Chrome DevTools**: Network tab for load analysis

## Performance Checklist
- [ ] Images optimized and properly sized
- [ ] CSS minified and critical path optimized
- [ ] JavaScript deferred or async where appropriate
- [ ] No render-blocking resources
- [ ] Proper caching headers set
- [ ] No layout shift during loading
- [ ] Fast interaction to next paint

## Mobile Performance Priority
- Test on actual devices when possible
- Use Chrome DevTools mobile simulation
- Consider slower networks (3G, slow 3G)
- Optimize for touch interactions
- Ensure smooth scrolling performance

## Monitoring
- Regular Lighthouse audits
- Performance budget alerts
- Real user monitoring data
- Core Web Vitals tracking
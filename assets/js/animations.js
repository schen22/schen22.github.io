// Animation and Scroll Effects

// Intersection Observer for animations
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const textElement = entry.target.querySelector(".text");
        const visualElement = entry.target.querySelector(".visual");

        if (textElement) textElement.classList.add("visible");
        if (visualElement) visualElement.classList.add("visible");

        // Animate timeline items
        if (entry.target.id === "section-2") {
          const timelineItems = entry.target.querySelectorAll(".timeline-item");
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("visible");
            }, index * 200);
          });
        }

        // Update navigation dots
        const sectionIndex = Array.from(
          document.querySelectorAll(".section")
        ).indexOf(entry.target);
        document.querySelectorAll(".nav-dot").forEach((dot, index) => {
          dot.classList.toggle("active", index === sectionIndex);
        });
      }
    });
  },
  { threshold: 0.3 }
);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Observe all sections
  document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
  });
});

// Progress bar functionality
function updateProgress() {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("progressFill").style.width = scrolled + "%";
}

// Optimize scroll performance
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateProgress();
      ticking = false;
    });
    ticking = true;
  }
});
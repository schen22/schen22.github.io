// Navigation functionality

// Navigation dots functionality
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".nav-dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      document.querySelector(`#section-${index}`).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});

// Touch support for mobile section navigation
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', e => {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
  touchEndY = e.changedTouches[0].screenY;
  handleSectionSwipe();
});

function handleSectionSwipe() {
  const swipeThreshold = 50;
  const swipeDistance = touchStartY - touchEndY;
  
  if (Math.abs(swipeDistance) > swipeThreshold) {
    const sections = document.querySelectorAll('.section');
    const currentSection = Array.from(sections).find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });
    
    if (currentSection) {
      const currentIndex = Array.from(sections).indexOf(currentSection);
      let targetIndex;
      
      if (swipeDistance > 0 && currentIndex < sections.length - 1) {
        // Swipe up - go to next section
        targetIndex = currentIndex + 1;
      } else if (swipeDistance < 0 && currentIndex > 0) {
        // Swipe down - go to previous section
        targetIndex = currentIndex - 1;
      }
      
      if (targetIndex !== undefined) {
        sections[targetIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}
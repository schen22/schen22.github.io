// Project Slideshow Functionality

let currentSlideIndex = 0;
let totalSlides = 5;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  
  // Remove active class from all slides
  slides.forEach(slide => slide.classList.remove('active'));
  
  // Add active class to current slide
  if (slides[index]) {
    slides[index].classList.add('active');
  }
  
  currentSlideIndex = index;
}

// Initialize slideshow functionality
document.addEventListener('DOMContentLoaded', () => {
  const slideshow = document.querySelector('.project-slideshow');
  if (!slideshow) return;
  
  // Add click handlers to project cards
  document.querySelectorAll('.project-card.clickable').forEach((card) => {
    card.addEventListener('click', () => {
      const slideIndex = parseInt(card.getAttribute('data-slide'));
      if (!isNaN(slideIndex)) {
        showSlide(slideIndex);
      }
    });
  });
});

// Export functions for testing
window.projectsModule = {
  showSlide,
  getCurrentSlideIndex: () => currentSlideIndex,
  getTotalSlides: () => totalSlides
};
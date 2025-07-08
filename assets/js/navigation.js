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



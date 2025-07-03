// Mobile Projects Swipe Functionality

let currentProjectIndex = 0;
const totalProjects = 6;
let projectTouchStartX = 0;
let projectTouchStartY = 0;
let projectTouchEndX = 0;
let projectTouchEndY = 0;
let isProjectSwiping = false;

function updateProjectIndicators() {
  const indicators = document.querySelectorAll('.card-indicator');
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentProjectIndex);
  });
}

function showProject(index) {
  if (index < 0 || index >= totalProjects) return;
  
  const projectsGrid = document.querySelector('.projects-grid');
  const translateX = -index * (100 / totalProjects);
  projectsGrid.style.transform = `translateX(${translateX}%)`;
  currentProjectIndex = index;
  updateProjectIndicators();
}

// Initialize mobile projects functionality
document.addEventListener('DOMContentLoaded', () => {
  // Only enable swipe functionality on mobile
  if (window.innerWidth <= 768) {
    initializeMobileProjects();
  }
  
  // Re-initialize on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      initializeMobileProjects();
    }
  });
});

function initializeMobileProjects() {
  const projectsContainer = document.querySelector('.projects-container');
  if (!projectsContainer) return;
  
  // Touch event handlers
  projectsContainer.addEventListener('touchstart', handleProjectTouchStart);
  projectsContainer.addEventListener('touchmove', handleProjectTouchMove);
  projectsContainer.addEventListener('touchend', handleProjectTouchEnd);
  
  // Card indicator click functionality
  document.querySelectorAll('.card-indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showProject(index);
    });
  });
}

function handleProjectTouchStart(e) {
  projectTouchStartX = e.changedTouches[0].screenX;
  projectTouchStartY = e.changedTouches[0].screenY;
  isProjectSwiping = true;
}

function handleProjectTouchMove(e) {
  if (!isProjectSwiping) return;
  e.preventDefault(); // Prevent page scroll during project swipe
}

function handleProjectTouchEnd(e) {
  if (!isProjectSwiping) return;
  
  projectTouchEndX = e.changedTouches[0].screenX;
  projectTouchEndY = e.changedTouches[0].screenY;
  
  const deltaX = projectTouchStartX - projectTouchEndX;
  const deltaY = projectTouchStartY - projectTouchEndY;
  
  // Only handle horizontal swipes (ignore vertical scrolling)
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    if (deltaX > 0 && currentProjectIndex < totalProjects - 1) {
      // Swipe left - next project
      showProject(currentProjectIndex + 1);
    } else if (deltaX < 0 && currentProjectIndex > 0) {
      // Swipe right - previous project
      showProject(currentProjectIndex - 1);
    }
  }
  
  isProjectSwiping = false;
}

// Export functions for testing
window.projectsModule = {
  showProject,
  updateProjectIndicators,
  getCurrentProjectIndex: () => currentProjectIndex,
  getTotalProjects: () => totalProjects
};
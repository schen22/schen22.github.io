// Simple build script to assemble components into index.html
const fs = require('fs');
const path = require('path');

function readComponent(componentPath) {
  try {
    return fs.readFileSync(path.join(__dirname, componentPath), 'utf8');
  } catch (error) {
    console.error(`Error reading component: ${componentPath}`, error);
    return '';
  }
}

function buildHTML() {
  console.log('Building index.html from components...');
  
  // Define sections in order (hero is section 0, but not numbered)
  const sections = [
    { name: 'about', file: 'components/sections/about.html' },
    { name: 'projects', file: 'components/sections/projects.html' },
    { name: 'contact', file: 'components/sections/contact.html' }
  ];
  
  // Read static components
  const head = readComponent('components/partials/head.html');
  const hero = readComponent('components/sections/hero.html');
  const scripts = readComponent('components/partials/scripts.html');
  
  // Generate navigation dots dynamically (hero + sections)
  const totalSections = sections.length + 1; // +1 for hero
  const navDots = Array.from({ length: totalSections }, (_, i) => 
    `  <div class="nav-dot${i === 0 ? ' active' : ''}" data-section="${i}"></div>`
  ).join('\n');
  
  // Process navigation component with dynamic nav dots
  const navigation = readComponent('components/partials/navigation.html')
    .replace('{{NAV_DOTS}}', navDots);
  
  // Process sections with auto-generated IDs
  const processedSections = sections.map((section, index) => {
    let content = readComponent(section.file);
    const sectionId = index + 1; // hero is 0, so sections start at 1
    
    // Replace section ID placeholder
    content = content.replace('{{SECTION_ID}}', `section-${sectionId}`);
    
    return content;
  }).join('\n  \n  ');
  
  // Assemble the complete HTML
  const html = `<!DOCTYPE html>
<html lang="en">
${head}
<body>
  ${navigation}
  
  ${hero}
  
  ${processedSections}
  
  ${scripts}
</body>
</html>`;

  // Write the assembled HTML directly to index.html
  fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
  console.log('✅ index.html built successfully!');
  console.log('📁 File structure:');
  console.log('   📂 components/');
  console.log('   📂 assets/css/ (6 files)');
  console.log('   📂 assets/js/ (3 files)');
  console.log('   📄 index.html (assembled from components)');
  console.log('');
  console.log('🌐 View at: http://localhost:8000/');
}

// Run the build
buildHTML();

// Export for use as module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { buildHTML, readComponent };
}
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
  
  // Read all components
  const head = readComponent('components/partials/head.html');
  const navigation = readComponent('components/partials/navigation.html');
  const hero = readComponent('components/sections/hero.html');
  const about = readComponent('components/sections/about.html');
  const projects = readComponent('components/sections/projects.html');
  const contact = readComponent('components/sections/contact.html');
  const scripts = readComponent('components/partials/scripts.html');
  
  // Assemble the complete HTML (3-section structure: About, Projects, Contact)
  const html = `<!DOCTYPE html>
<html lang="en">
${head}
<body>
  ${navigation}
  
  ${hero}
  
  ${about}
  
  ${projects}
  
  ${contact}
  
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
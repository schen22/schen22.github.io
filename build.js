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
  const experience = readComponent('components/sections/experience.html');
  const projects = readComponent('components/sections/projects.html');
  const contact = readComponent('components/sections/contact.html');
  const scripts = readComponent('components/partials/scripts.html');
  
  // Assemble the complete HTML
  const html = `<!DOCTYPE html>
<html lang="en">
${head}
<body>
  ${navigation}
  
  ${hero}
  
  ${about}
  
  ${experience}
  
  ${projects}
  
  ${contact}
  
  ${scripts}
</body>
</html>`;

  // Write the assembled HTML as index-new.html for comparison
  fs.writeFileSync(path.join(__dirname, 'index-new.html'), html, 'utf8');
  console.log('✅ index-new.html built successfully!');
  console.log('📁 File structure:');
  console.log('   📂 components/');
  console.log('   📂 assets/css/ (6 files)');
  console.log('   📂 assets/js/ (3 files)');
  console.log('   📄 index.html (original version)');
  console.log('   📄 index-new.html (modular version)');
  console.log('');
  console.log('🌐 Compare versions:');
  console.log('   Original: http://localhost:8000/');
  console.log('   Modular:  http://localhost:8000/index-new.html');
}

// Run the build
buildHTML();

// Export for use as module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { buildHTML, readComponent };
}
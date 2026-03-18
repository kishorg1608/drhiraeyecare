/**
 * Dr. Hira Eyecare — Insurance Logo Manifest Generator
 * =====================================================
 * HOW TO USE:
 *   1. Drop your logo images into the /insurance/ folder
 *   2. Open terminal in your project root folder
 *   3. Run:  node generate-manifest.js
 *   4. It auto-updates insurance/manifest.json
 *   5. Upload manifest.json to GitHub — done!
 *
 * Supported formats: .png .jpg .jpeg .svg .webp
 */

const fs   = require('fs');
const path = require('path');

const FOLDER = path.join(__dirname, 'insurance');
const OUTPUT = path.join(FOLDER, 'manifest.json');

const VALID_EXT = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];

// Read all image files from insurance/ folder
const files = fs.readdirSync(FOLDER)
  .filter(f => VALID_EXT.includes(path.extname(f).toLowerCase()))
  .filter(f => f !== 'manifest.json')
  .sort();

const manifest = { logos: files };

fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2));

console.log(`✅ manifest.json updated with ${files.length} logos:`);
files.forEach(f => console.log(`   • ${f}`));

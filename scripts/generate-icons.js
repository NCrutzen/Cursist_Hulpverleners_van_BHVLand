// Generate properly-sized PWA icons from the SVG source
// Run: node scripts/generate-icons.js

import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const iconsDir = join(__dirname, '..', 'public', 'icons');
const svgPath = join(iconsDir, 'icon.svg');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

const svgBuffer = readFileSync(svgPath);

console.log('Generating PWA icons from icon.svg...');

for (const size of sizes) {
  const filename = `icon-${size}x${size}.png`;
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(join(iconsDir, filename));
  console.log(`Created ${filename}`);
}

console.log('Done! All icons generated.');

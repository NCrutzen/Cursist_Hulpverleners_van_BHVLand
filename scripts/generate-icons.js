// Simple script to generate placeholder PWA icons
// Run: node scripts/generate-icons.js
// Or replace with your actual app icons

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const iconsDir = join(__dirname, '..', 'public', 'icons');

// Create a simple 1x1 PNG in the theme color (placeholder)
// These should be replaced with actual icons
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Minimal valid PNG (1x1 pixel, will be stretched - just a placeholder)
// This is the BHV blue color #002b47
const createMinimalPng = () => {
  // PNG header + IHDR + IDAT + IEND for a 1x1 dark blue pixel
  const pngData = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
    0x00, 0x00, 0x00, 0x0D, // IHDR length
    0x49, 0x48, 0x44, 0x52, // IHDR
    0x00, 0x00, 0x00, 0x01, // width: 1
    0x00, 0x00, 0x00, 0x01, // height: 1
    0x08, 0x02, // bit depth: 8, color type: RGB
    0x00, 0x00, 0x00, // compression, filter, interlace
    0x90, 0x77, 0x53, 0xDE, // IHDR CRC
    0x00, 0x00, 0x00, 0x0C, // IDAT length
    0x49, 0x44, 0x41, 0x54, // IDAT
    0x08, 0xD7, 0x63, 0x60, 0x54, 0x8E, 0x00, 0x00, // compressed data (dark blue)
    0x00, 0x04, 0x00, 0x01,
    0x27, 0x34, 0x03, 0x00, // IDAT CRC (approximate)
    0x00, 0x00, 0x00, 0x00, // IEND length
    0x49, 0x45, 0x4E, 0x44, // IEND
    0xAE, 0x42, 0x60, 0x82  // IEND CRC
  ]);
  return pngData;
};

console.log('Creating placeholder icons in', iconsDir);
console.log('NOTE: Replace these with actual app icons for production!');

if (!existsSync(iconsDir)) {
  mkdirSync(iconsDir, { recursive: true });
}

const png = createMinimalPng();
sizes.forEach(size => {
  const filename = `icon-${size}x${size}.png`;
  writeFileSync(join(iconsDir, filename), png);
  console.log(`Created ${filename}`);
});

console.log('Done! Remember to replace placeholders with proper icons.');

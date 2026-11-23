import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function makeBacklitPortrait() {
  const inputPath = path.join(__dirname, '../public/portrait.jpg');
  const outputPath = path.join(__dirname, '../public/assets/hero-silhouette.png');

  // Load portrait, convert to grayscale, boost contrast, and create a stylized backlit silhouette
  // matching Frames 3-4
  const { width, height } = await sharp(inputPath).metadata();
  console.log(`Original portrait dimensions: ${width}x${height}`);

  // Create an artistic monochrome backlit silhouette:
  // We want deep black body/face with illuminated top/edge rim highlights and vignette fade at bottom
  const maskSvg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bottomFade" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="65%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="95%" stop-color="#ffffff" stop-opacity="0" />
      </linearGradient>
      <radialGradient id="rimHalo" cx="50%" cy="20%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" />
        <stop offset="60%" stop-color="#ffffff" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bottomFade)" />
  </svg>
  `;

  // Process portrait to deep editorial monochrome
  const processed = await sharp(inputPath)
    .grayscale()
    .linear(1.4, -40) // high contrast: deepen blacks, lift highlights
    .modulate({ brightness: 0.75, saturation: 0 })
    .composite([
      {
        input: Buffer.from(maskSvg),
        blend: 'dest-in'
      }
    ])
    .png()
    .toFile(outputPath);

  console.log('✓ High-contrast backlit portrait generated:', processed);
}

makeBacklitPortrait().catch(console.error);

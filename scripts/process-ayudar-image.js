import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processAyudarImage() {
  const input = path.join(__dirname, '../public/assets/ayudar-screenshot.png');
  const outLanding = path.join(__dirname, '../public/assets/landing-ayudar.jpg');
  const outWork = path.join(__dirname, '../public/assets/work-ayudar.jpg');

  console.log('Processing real Ayudar screenshot...');

  // Create 16:10 high quality landscape JPEG for gallery and works deck (1280 x 800)
  await sharp(input)
    .resize(1280, 800, {
      fit: 'cover',
      position: 'top'
    })
    .jpeg({ quality: 92 })
    .toFile(outLanding);

  // Also create work-ayudar.jpg
  await sharp(input)
    .resize(1280, 800, {
      fit: 'cover',
      position: 'top'
    })
    .jpeg({ quality: 92 })
    .toFile(outWork);

  console.log('✓ Successfully processed landing-ayudar.jpg and work-ayudar.jpg!');
}

processAyudarImage().catch(console.error);

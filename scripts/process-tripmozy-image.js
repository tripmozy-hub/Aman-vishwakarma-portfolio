import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processTripmozyImage() {
  const input = path.join(__dirname, '../public/assets/tripmozy-screenshot.png');
  const metadata = await sharp(input).metadata();
  console.log('Original image dimensions:', metadata.width, 'x', metadata.height);

  // Crop starting cleanly right below the top sub-bar (around y=72)
  const cropTop = 72;
  const cropHeight = metadata.height - cropTop - 42; // exclude bottom Windows taskbar

  console.log(`Cropping from top ${cropTop}, height ${cropHeight}, width ${metadata.width}`);

  const cropped = await sharp(input)
    .extract({ left: 0, top: cropTop, width: metadata.width, height: cropHeight })
    .jpeg({ quality: 92 })
    .toFile(path.join(__dirname, '../public/assets/tripmozy-showcase.jpg'));

  console.log('✓ tripmozy-showcase.jpg created:', cropped);

  // Also create a polished 16:10 browser frame mockup version
  const mockWidth = 800;
  const mockHeight = 500;
  await sharp(path.join(__dirname, '../public/assets/tripmozy-showcase.jpg'))
    .resize(mockWidth, mockHeight, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 90 })
    .toFile(path.join(__dirname, '../public/assets/work-tripmozy.jpg'));

  console.log('✓ work-tripmozy.jpg created');
}

processTripmozyImage().catch(console.error);

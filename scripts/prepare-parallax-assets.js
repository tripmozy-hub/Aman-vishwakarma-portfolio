import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function makeTransparentAssets() {
  const carInput = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\a7d5be7f-05ee-481c-a42e-045afed0f128\\futuristic_hypercar_silhouette_png_1795519770437.jpg';
  const dnaInput = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\a7d5be7f-05ee-481c-a42e-045afed0f128\\futuristic_dna_helix_1795519781257.jpg';

  // 1. Process DNA: Create transparent PNG where black is transparent and red/white glow is preserved
  const { data: dnaRaw, info: dnaInfo } = await sharp(dnaInput)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const dnaOut = Buffer.alloc(dnaRaw.length);
  for (let i = 0; i < dnaRaw.length; i += 4) {
    const r = dnaRaw[i];
    const g = dnaRaw[i + 1];
    const b = dnaRaw[i + 2];
    
    // Luminance / max brightness determines alpha
    const brightness = Math.max(r, g, b);
    dnaOut[i] = r;
    dnaOut[i + 1] = g;
    dnaOut[i + 2] = b;
    // Smooth threshold
    if (brightness < 10) {
      dnaOut[i + 3] = 0;
    } else {
      dnaOut[i + 3] = Math.min(255, Math.floor(Math.pow(brightness / 255, 0.7) * 255));
    }
  }

  await sharp(dnaOut, {
    raw: {
      width: dnaInfo.width,
      height: dnaInfo.height,
      channels: 4
    }
  })
  .png()
  .toFile(path.join(__dirname, '../public/assets/parallax-dna.png'));

  console.log('✓ Created parallax-dna.png');

  // 2. Process Car:
  const { data: carRaw, info: carInfo } = await sharp(carInput)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const carOut = Buffer.alloc(carRaw.length);
  for (let i = 0; i < carRaw.length; i += 4) {
    const r = carRaw[i];
    const g = carRaw[i + 1];
    const b = carRaw[i + 2];
    
    const brightness = Math.max(r, g, b);
    carOut[i] = r;
    carOut[i + 1] = g;
    carOut[i + 2] = b;

    if (brightness < 8) {
      carOut[i + 3] = 0;
    } else {
      // Keep car silhouette and red glow fully solid
      carOut[i + 3] = Math.min(255, Math.floor(Math.pow(brightness / 255, 0.5) * 255 * 1.4));
    }
  }

  await sharp(carOut, {
    raw: {
      width: carInfo.width,
      height: carInfo.height,
      channels: 4
    }
  })
  .png()
  .toFile(path.join(__dirname, '../public/assets/parallax-car.png'));

  console.log('✓ Created parallax-car.png');

  // Also save a light-mode version of the car with dark silhouette for white backgrounds!
  // Invert/blend so on white backgrounds, the car is a crisp dark silhouette with vibrant red glowing lines!
  const carLightOut = Buffer.alloc(carRaw.length);
  for (let i = 0; i < carRaw.length; i += 4) {
    const r = carRaw[i];
    const g = carRaw[i + 1];
    const b = carRaw[i + 2];
    
    const isRedGlow = r > 80 && g < 70 && b < 70;
    const isCarBody = (r > 15 || g > 15 || b > 15) && !isRedGlow;

    if (isRedGlow) {
      carLightOut[i] = 242; // #f20d20
      carLightOut[i + 1] = 13;
      carLightOut[i + 2] = 32;
      carLightOut[i + 3] = Math.min(255, Math.floor((r / 255) * 255));
    } else if (isCarBody) {
      // Dark carbon silhouette on transparent
      carLightOut[i] = 20;
      carLightOut[i + 1] = 20;
      carLightOut[i + 2] = 24;
      carLightOut[i + 3] = Math.min(240, Math.floor(Math.max(r, g, b) * 2.5));
    } else {
      carLightOut[i + 3] = 0;
    }
  }

  await sharp(carLightOut, {
    raw: {
      width: carInfo.width,
      height: carInfo.height,
      channels: 4
    }
  })
  .png()
  .toFile(path.join(__dirname, '../public/assets/parallax-car-light.png'));

  console.log('✓ Created parallax-car-light.png');
}

makeTransparentAssets().catch(console.error);

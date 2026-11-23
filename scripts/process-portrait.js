import sharp from 'sharp';

async function processImage() {
  const inputPath = 'C:/Users/user/.gemini/antigravity/brain/a7d5be7f-05ee-481c-a42e-045afed0f128/.user_uploaded/media_1795264277288_4cf7bcb1.jpg';
  
  // Test 1: Straighten by -14 degrees, crop to face and shoulders with 4:5 aspect ratio
  // If we rotate by -14 deg:
  const rotated = sharp(inputPath).rotate(-13, { background: '#0a0a0c' });
  const rotMeta = await rotated.metadata();
  console.log('Rotated dimensions:', rotMeta.width, rotMeta.height);

  // We want a clean 4:5 aspect ratio (e.g., 640 x 800)
  // Let's inspect where the face lands in the rotated image
  await rotated
    .toFile('./public/test_rotated.jpg');
}

processImage().catch(console.error);

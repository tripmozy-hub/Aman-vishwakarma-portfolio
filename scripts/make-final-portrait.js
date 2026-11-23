import sharp from 'sharp';

async function generateFinalPortrait() {
  const inputPath = 'C:/Users/user/.gemini/antigravity/brain/a7d5be7f-05ee-481c-a42e-045afed0f128/.user_uploaded/media_1795264277288_4cf7bcb1.jpg';

  // Extract perfect 4:5 headshot: width 576, height 720, top 160
  // Captures hair, face, sunglasses, smile, beard, and shirt collar seamlessly
  await sharp(inputPath)
    .extract({ left: 0, top: 160, width: 576, height: 720 })
    .resize(640, 800)
    .modulate({
      contrast: 1.08,
      saturation: 1.04,
      brightness: 0.98
    })
    .jpeg({ quality: 96 })
    .toFile('./public/portrait.jpg');

  // Copy to src/assets
  await sharp('./public/portrait.jpg').toFile('./src/assets/portrait.jpg');

  console.log('Successfully saved high-resolution centered 4:5 portrait to public/portrait.jpg');
}

generateFinalPortrait().catch(console.error);

import sharp from 'sharp';

async function generateCinematicPortrait() {
  const inputPath = 'C:/Users/user/.gemini/antigravity/brain/a7d5be7f-05ee-481c-a42e-045afed0f128/.user_uploaded/media_1795264277288_4cf7bcb1.jpg';

  // Desired output dimensions: 600 x 750 (4:5 ratio)
  const OUT_W = 600;
  const OUT_H = 750;

  // Step 1: Scale original image to give ample margin, rotate to straighten posture (16 degrees)
  const scaled = await sharp(inputPath)
    .resize(920, 1635)
    .rotate(16, { background: '#0a0a0c' })
    .toBuffer();

  const meta = await sharp(scaled).metadata();

  // Step 2: Extract centered on face and shoulders
  // Face center in rotated image is approximately:
  // left: 340, top: 400
  const cropped = await sharp(scaled)
    .extract({
      left: 310,
      top: 360,
      width: 680,
      height: 850
    })
    .resize(OUT_W, OUT_H)
    .modulate({
      contrast: 1.15,
      brightness: 0.98,
      saturation: 0.92
    })
    .toBuffer();

  // Step 3: Create an ultra-smooth dark gradient vignette overlay (radial fade to #080808)
  const vignetteSvg = `
    <svg width="${OUT_W}" height="${OUT_H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="edgeFade" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stop-color="#080808" stop-opacity="0" />
          <stop offset="85%" stop-color="#080808" stop-opacity="0.45" />
          <stop offset="98%" stop-color="#080808" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#080808" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="bottomShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#080808" stop-opacity="0" />
          <stop offset="70%" stop-color="#080808" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#080808" stop-opacity="0.95" />
        </linearGradient>
        <linearGradient id="topShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#080808" stop-opacity="0.6" />
          <stop offset="30%" stop-color="#080808" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#edgeFade)" />
      <rect width="100%" height="100%" fill="url(#bottomShadow)" />
      <rect width="100%" height="100%" fill="url(#topShadow)" />
    </svg>
  `;

  const finalImage = await sharp(cropped)
    .composite([
      {
        input: Buffer.from(vignetteSvg),
        blend: 'over'
      }
    ])
    .jpeg({ quality: 95 })
    .toBuffer();

  // Save to public/portrait.jpg and src/assets/portrait.jpg
  await sharp(finalImage).toFile('./public/portrait.jpg');
  await sharp(finalImage).toFile('./src/assets/portrait.jpg');

  // Also create a tighter square headshot for the resume & about card
  const avatarCrop = await sharp(scaled)
    .extract({
      left: 360,
      top: 380,
      width: 580,
      height: 580
    })
    .resize(300, 300)
    .modulate({
      contrast: 1.15,
      brightness: 0.98,
      saturation: 0.92
    })
    .jpeg({ quality: 95 })
    .toFile('./public/avatar.jpg');

  console.log('Successfully generated public/portrait.jpg and public/avatar.jpg');
}

generateCinematicPortrait().catch(console.error);

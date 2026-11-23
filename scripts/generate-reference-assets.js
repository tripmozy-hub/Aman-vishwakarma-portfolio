import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, '../public/assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// 1. HERO BACKLIT SILHOUETTE (Frames 3-4)
// Bust silhouette of a person with textured hair, illuminated with crisp white top-down rim lighting
async function generateHeroSilhouette() {
  const width = 800;
  const height = 900;
  
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="topGlow" cx="50%" cy="10%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
        <stop offset="35%" stop-color="#e0e0e0" stop-opacity="0.4" />
        <stop offset="70%" stop-color="#ffffff" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#141416" />
        <stop offset="30%" stop-color="#0a0a0c" />
        <stop offset="100%" stop-color="#050505" />
      </linearGradient>
      <filter id="rimBlur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <!-- Top Halo Light Source -->
    <ellipse cx="400" cy="180" rx="220" ry="120" fill="url(#topGlow)" opacity="0.3" filter="url(#rimBlur)" />

    <!-- Silhouette Base: Shoulders & Collar -->
    <path d="M 120 900 C 130 760, 220 640, 310 600 C 335 590, 345 540, 345 500 C 345 470, 350 450, 350 440 L 450 440 C 450 450, 455 470, 455 500 C 455 540, 465 590, 490 600 C 580 640, 670 760, 680 900 Z" fill="url(#bodyGrad)" />

    <!-- Collar & Shirt Accents with Subtle Light Lines -->
    <path d="M 350 560 L 400 680 L 450 560" stroke="#ffffff" stroke-width="2.5" stroke-opacity="0.5" fill="none" filter="url(#rimBlur)" />
    <path d="M 400 680 L 400 850" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.3" fill="none" />
    <path d="M 330 600 L 400 680 L 470 600" stroke="#333333" stroke-width="2" fill="none" />

    <!-- Head / Jaw & Face Silhouette -->
    <path d="M 350 440 C 340 380, 345 320, 355 270 C 375 250, 395 245, 400 245 C 405 245, 425 250, 445 270 C 455 320, 460 380, 450 440 C 430 470, 370 470, 350 440 Z" fill="#08080a" />

    <!-- Stylish Textured Hair Silhouette -->
    <path d="M 350 280 
             C 335 270, 325 240, 335 200 
             C 340 170, 360 145, 385 135 
             C 410 125, 435 130, 455 145 
             C 475 160, 485 190, 480 220 
             C 485 240, 480 265, 465 285 
             C 455 255, 435 240, 400 240 
             C 370 240, 355 255, 350 280 Z" 
          fill="#0a0a0c" />

    <!-- Rim Lighting / Glow along the Hair & Head Edges -->
    <path d="M 335 240 
             C 338 200, 350 165, 380 145 
             C 410 128, 440 135, 465 155 
             C 480 175, 485 210, 478 245" 
          stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.95" filter="url(#rimBlur)" />

    <!-- Subtle Secondary Rim Light on Cheeks & Jaw -->
    <path d="M 345 320 C 340 370, 345 410, 355 435" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.75" filter="url(#rimBlur)" />
    <path d="M 455 320 C 460 370, 455 410, 445 435" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.75" filter="url(#rimBlur)" />

    <!-- Shoulder Rim Highlights -->
    <path d="M 170 820 C 230 730, 280 660, 330 620" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8" filter="url(#rimBlur)" />
    <path d="M 630 820 C 570 730, 520 660, 470 620" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8" filter="url(#rimBlur)" />
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(assetsDir, 'hero-silhouette.png'));
  console.log('✓ hero-silhouette.png created');
}

// 2. ABOUT BACKDROP (Frames 5-8): Starry Swirls + Cathedral Spire Silhouette
async function generateAboutBackdrop() {
  const width = 1600;
  const height = 1000;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a0a0e" />
        <stop offset="50%" stop-color="#121218" />
        <stop offset="100%" stop-color="#08080a" />
      </linearGradient>
      <filter id="swirlBlur" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#skyGrad)" />

    <!-- Swirling Cosmic Waves (Van Gogh Starry Night Style Monochrome) -->
    <g opacity="0.25" stroke="#ffffff" fill="none" filter="url(#swirlBlur)">
      <!-- Swirl 1 -->
      <path d="M 200 400 C 350 200, 600 250, 700 450 C 750 550, 680 700, 550 700 C 420 700, 380 580, 480 500 C 560 440, 650 490, 640 570" stroke-width="2.5" />
      <path d="M 230 380 C 370 190, 620 230, 720 440 C 770 540, 700 680, 570 680 C 450 680, 410 570, 500 500" stroke-width="1.8" />
      <path d="M 180 430 C 330 230, 580 270, 680 470 C 730 570, 660 720, 530 720" stroke-width="1.5" />

      <!-- Swirl 2 (Right) -->
      <path d="M 900 300 C 1100 150, 1400 200, 1500 450 C 1550 600, 1400 750, 1250 720 C 1120 700, 1100 550, 1200 480 C 1280 420, 1380 480, 1350 580" stroke-width="2.5" />
      <path d="M 940 280 C 1130 140, 1420 180, 1520 430 C 1570 580, 1420 730, 1270 700" stroke-width="1.8" />

      <!-- Sweeping Sky Ribbons -->
      <path d="M 0 350 C 400 300, 800 480, 1200 360 C 1400 300, 1550 350, 1600 380" stroke-width="3" />
      <path d="M 0 380 C 400 330, 800 510, 1200 390 C 1400 330, 1550 380, 1600 410" stroke-width="2" />
      <path d="M 0 420 C 400 370, 800 550, 1200 430 C 1400 370, 1550 420, 1600 450" stroke-width="1.5" />
    </g>

    <!-- Star Orbs -->
    <g fill="#ffffff" opacity="0.6">
      <circle cx="280" cy="220" r="4" filter="url(#swirlBlur)" />
      <circle cx="580" cy="180" r="3" />
      <circle cx="850" cy="240" r="5" filter="url(#swirlBlur)" />
      <circle cx="1120" cy="190" r="4" />
      <circle cx="1380" cy="260" r="3" />
      <circle cx="720" cy="380" r="2.5" />
      <circle cx="1040" cy="420" r="3" />
    </g>

    <!-- Gothic Cathedral Silhouettes (Left Edge, exactly like Frame 5-8) -->
    <g fill="#050507">
      <!-- Main Spire -->
      <polygon points="180,320 200,680 160,680" />
      <polygon points="180,310 183,325 177,325" fill="#ffffff" opacity="0.6" />
      <polygon points="110,420 125,720 95,720" />
      <polygon points="250,450 265,720 235,720" />

      <!-- Castle Walls & Buttresses -->
      <rect x="70" y="650" width="220" height="350" />
      <polygon points="70,650 90,620 110,650 130,620 150,650 170,620 190,650 210,620 230,650 250,620 270,650 290,620 290,680 70,680" />
      
      <!-- Arched Windows in Cathedral -->
      <path d="M 170 520 C 170 500, 190 500, 190 520 L 190 570 L 170 570 Z" fill="#15151e" />
      <path d="M 105 550 C 105 535, 120 535, 120 550 L 120 585 L 105 585 Z" fill="#15151e" />
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(assetsDir, 'about-backdrop.jpg'));
  console.log('✓ about-backdrop.jpg created');
}

// 3. FLOATING FIGURE IN BEAM OF LIGHT (Frames 7-8)
async function generateBeamFigure() {
  const width = 1000;
  const height = 750;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="beamGrad" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
        <stop offset="30%" stop-color="#e0e8ff" stop-opacity="0.5" />
        <stop offset="70%" stop-color="#80a0ff" stop-opacity="0.15" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </linearGradient>
      <radialGradient id="figureGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="40%" stop-color="#d0e0ff" stop-opacity="0.8" />
        <stop offset="80%" stop-color="#ffffff" stop-opacity="0" />
      </radialGradient>
      <filter id="glowBlur" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="10" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <rect width="${width}" height="${height}" fill="#08080a" />

    <!-- Powerful Diagonal Light Beam from top right down across center -->
    <polygon points="780,0 950,0 480,750 250,750" fill="url(#beamGrad)" />

    <!-- Secondary Softer Outer Beam -->
    <polygon points="700,0 1000,0 580,750 150,750" fill="url(#beamGrad)" opacity="0.3" filter="url(#glowBlur)" />

    <!-- Levitating / Floating Human Figure in the Beam of Light -->
    <g transform="translate(500, 360) rotate(-25)" filter="url(#glowBlur)">
      <!-- Ethereal Glow surrounding body -->
      <ellipse cx="0" cy="0" rx="90" ry="35" fill="url(#figureGlow)" opacity="0.75" />

      <!-- Torso & Arched Spine -->
      <path d="M -50 -5 C -20 -15, 20 -15, 50 -5 C 45 10, -10 15, -50 -5 Z" fill="#ffffff" />

      <!-- Head leaning back -->
      <circle cx="65" cy="-12" r="14" fill="#ffffff" />

      <!-- Floating Arms extending backward in zero gravity -->
      <path d="M 20 -10 C 10 -28, -10 -35, -25 -40" stroke="#ffffff" stroke-width="6" stroke-linecap="round" fill="none" />
      <path d="M 0 -8 C -15 -25, -35 -30, -50 -32" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.8" />

      <!-- Floating Bent Legs drifting in light stream -->
      <path d="M -50 -5 C -75 5, -100 20, -120 38" stroke="#ffffff" stroke-width="7" stroke-linecap="round" fill="none" />
      <path d="M -45 5 C -70 18, -90 32, -105 55" stroke="#ffffff" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.8" />
    </g>

    <!-- Star particle specks inside beam -->
    <g fill="#ffffff" opacity="0.85">
      <circle cx="480" cy="280" r="2" />
      <circle cx="560" cy="220" r="2.5" />
      <circle cx="430" cy="420" r="1.5" />
      <circle cx="620" cy="350" r="2" />
      <circle cx="510" cy="460" r="3" />
      <circle cx="680" cy="180" r="2" />
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(assetsDir, 'beam-figure.png'));
  console.log('✓ beam-figure.png created');
}

// 4. LANDING PAGES GALLERY ASSETS (Frames 14-18)
async function generateLandingPagesAssets() {
  // 1. Sip a Story (Artisanal Cafe Interior)
  const sipSvg = `
  <svg width="800" height="480" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="warmWall" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d97736" />
        <stop offset="50%" stop-color="#b85d26" />
        <stop offset="100%" stop-color="#7c3716" />
      </linearGradient>
    </defs>
    <rect width="800" height="480" fill="#f8f4ed" />
    <!-- Cafe Arch and Architecture -->
    <rect x="80" y="60" width="640" height="360" rx="16" fill="url(#warmWall)" />
    <!-- Bright Orange Accent Doors & Windows -->
    <rect x="360" y="140" width="160" height="280" rx="8" fill="#f25c27" />
    <rect x="180" y="200" width="120" height="180" rx="6" fill="#fce4d6" opacity="0.85" />
    <!-- Cafe Chairs & Modern Tables -->
    <circle cx="240" cy="360" r="25" fill="#4a2511" />
    <circle cx="580" cy="350" r="30" fill="#4a2511" />
    <!-- Large Editorial Typography in preview -->
    <text x="140" y="160" font-family="Inter, sans-serif" font-weight="900" font-size="44" fill="#ffffff" letter-spacing="1">SIP A STORY.</text>
    <text x="140" y="195" font-family="Inter, sans-serif" font-weight="500" font-size="16" fill="#fce4d6">Specialty Roasters &amp; Slow Living Space</text>
    <rect x="140" y="230" width="130" height="36" rx="18" fill="#ffffff" />
    <text x="165" y="254" font-family="Inter, sans-serif" font-weight="700" font-size="12" fill="#7c3716">DISCOVER MENU</text>
  </svg>
  `;
  await sharp(Buffer.from(sipSvg)).jpeg().toFile(path.join(assetsDir, 'landing-sip.jpg'));

  // 2. ECHO Design Studio ("Beyond Design / Built to Matter")
  const echoSvg = `
  <svg width="800" height="480" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="480" fill="#08080a" />
    <!-- Topography Wireframe / Neon Red Curves -->
    <path d="M 0 320 C 200 240, 450 420, 800 280" stroke="#f20d20" stroke-width="3" fill="none" opacity="0.8" />
    <path d="M 0 350 C 250 270, 500 450, 800 310" stroke="#f20d20" stroke-width="2" fill="none" opacity="0.6" />
    <path d="M 0 380 C 300 300, 550 480, 800 340" stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.4" />
    
    <text x="60" y="120" font-family="Impact, sans-serif" font-size="64" fill="#ffffff" letter-spacing="4">ECHO</text>
    <text x="60" y="180" font-family="Inter, sans-serif" font-weight="800" font-size="28" fill="#f20d20" letter-spacing="2">BEYOND DESIGN</text>
    <text x="60" y="215" font-family="Inter, sans-serif" font-weight="800" font-size="28" fill="#ffffff" letter-spacing="2">BUILT TO MATTER</text>
    
    <text x="60" y="280" font-family="Inter, sans-serif" font-weight="400" font-size="14" fill="#888888">
      We craft brands, websites, and digital experiences
    </text>
    <text x="60" y="300" font-family="Inter, sans-serif" font-weight="400" font-size="14" fill="#888888">
      engineered with purpose, clarity, and impact.
    </text>
  </svg>
  `;
  await sharp(Buffer.from(echoSvg)).jpeg().toFile(path.join(assetsDir, 'landing-echo.jpg'));

  // 5. Vishnu / Chrono (Kinetic Typography)
  const chronoSvg = `
  <svg width="800" height="480" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="480" fill="#0a0a0c" />
    <text x="50" y="180" font-family="Anton, sans-serif" font-size="90" fill="#f20d20" letter-spacing="4">VISHNU</text>
    <text x="440" y="180" font-family="Anton, sans-serif" font-size="90" fill="#ffffff" letter-spacing="4">CHRONO</text>
    <rect x="50" y="220" width="160" height="4" fill="#f20d20" />
    <text x="50" y="280" font-family="Inter, sans-serif" font-weight="700" font-size="20" fill="#e0e0e0">
      INTERACTIVE ARCHIVE &amp; EXPERIMENTAL DESIGN
    </text>
    <text x="50" y="310" font-family="monospace" font-size="13" fill="#666666">
      REACT • THREE.JS • GLSL SHADERS
    </text>
  </svg>
  `;
  await sharp(Buffer.from(chronoSvg)).jpeg().toFile(path.join(assetsDir, 'landing-chrono.jpg'));

  // 6. Ayudar Platform (NGO Charity)
  const ayudarSvg = `
  <svg width="800" height="480" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="480" fill="#0d141e" />
    <text x="60" y="120" font-family="Syne, sans-serif" font-weight="800" font-size="48" fill="#ffffff">AYUDAR</text>
    <text x="60" y="155" font-family="Inter, sans-serif" font-weight="600" font-size="16" fill="#00f0ff">HUMANITARIAN PLATFORM &amp; SECURE RAZORPAY GIVING</text>
    <rect x="60" y="190" width="680" height="220" rx="12" fill="#152132" stroke="#25354e" stroke-width="1.5" />
    <text x="90" y="250" font-family="Inter, sans-serif" font-weight="700" font-size="24" fill="#ffffff">Direct Aid Verification System</text>
    <text x="90" y="285" font-family="Inter, sans-serif" font-size="14" fill="#8ba0bc">100% Transparent ledger with automated certificate generation.</text>
    <rect x="90" y="320" width="150" height="40" rx="8" fill="#00f0ff" />
    <text x="120" y="345" font-family="Inter, sans-serif" font-weight="700" font-size="13" fill="#0d141e">DONATE NOW</text>
  </svg>
  `;
  await sharp(Buffer.from(ayudarSvg)).jpeg().toFile(path.join(assetsDir, 'landing-ayudar.jpg'));
  console.log('✓ Landing page assets created');
}

// 5. WORKS '26 BROWSER PREVIEWS (Frames 19-26)
async function generateWorksAssets() {
  const works = [
    {
      id: 'aether',
      title: 'AETHER AI',
      headline: 'Think beyond the obvious.',
      sub: 'Next-Generation Autonomous Interface',
      bg: '#f0f3f6',
      cardBg: '#ffffff',
      accent: '#2b59ff'
    },
    {
      id: 'protocol',
      title: 'AETHER PROTOCOL',
      headline: 'Make room for better ideas.',
      sub: 'Decentralized Compute & Verifiable Knowledge',
      bg: '#e8edf2',
      cardBg: '#ffffff',
      accent: '#00a389'
    },
    {
      id: 'afterform',
      title: 'AFTERFORM S01',
      headline: 'Form follows computational emotion.',
      sub: 'Architectural Digital Wardrobe & Physics Engine',
      bg: '#18191c',
      cardBg: '#25262c',
      accent: '#e0e0e0',
      isDark: true
    },
    {
      id: 'eleara',
      title: 'MAISON ÉLEARA',
      headline: 'Poetry in haute perfumery.',
      sub: 'Immersive E-Commerce & Sensory Digital Spatial Store',
      bg: '#f7f4ee',
      cardBg: '#ffffff',
      accent: '#a88958'
    },
    {
      id: 'campaign',
      title: 'ÉLEARA CAMPAIGN',
      headline: 'Where light whispers to scent.',
      sub: 'Global Interactive Editorial Campaign 2026',
      bg: '#ece7df',
      cardBg: '#ffffff',
      accent: '#826541'
    },
    {
      id: 'jobhub',
      title: 'JOBHUB MERN',
      headline: 'Enterprise talent matching at scale.',
      sub: 'Aman Vishwakarma Full-Stack Recruitment Ecosystem',
      bg: '#0f172a',
      cardBg: '#1e293b',
      accent: '#f20d20',
      isDark: true
    }
  ];

  for (const w of works) {
    const textColor = w.isDark ? '#ffffff' : '#111827';
    const subColor = w.isDark ? '#94a3b8' : '#64748b';
    const chromeBg = w.isDark ? '#2b3342' : '#e2e8f0';

    const svg = `
    <svg width="700" height="420" viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg">
      <!-- Browser Outer Frame -->
      <rect width="700" height="420" rx="14" fill="${w.bg}" stroke="#cbd5e1" stroke-width="1.5" />
      
      <!-- Browser Top Chrome Header -->
      <rect width="700" height="42" rx="14" fill="${chromeBg}" />
      <rect y="28" width="700" height="14" fill="${chromeBg}" />
      
      <!-- Traffic Light Dots -->
      <circle cx="24" cy="21" r="5" fill="#ef4444" />
      <circle cx="42" cy="21" r="5" fill="#f59e0b" />
      <circle cx="60" cy="21" r="5" fill="#10b981" />
      
      <!-- Address Bar -->
      <rect x="180" y="10" width="340" height="22" rx="6" fill="${w.cardBg}" opacity="0.9" />
      <text x="350" y="25" text-anchor="middle" font-family="monospace" font-size="10" fill="${subColor}">
        https://${w.id}.internal.net
      </text>

      <!-- Browser Content Window -->
      <g transform="translate(40, 75)">
        <text x="0" y="40" font-family="Anton, sans-serif" font-size="36" fill="${textColor}" letter-spacing="1">
          ${w.title}
        </text>
        <text x="0" y="90" font-family="Inter, sans-serif" font-weight="800" font-size="24" fill="${w.accent}">
          ${w.headline.replace(/&/g, '&amp;')}
        </text>
        <text x="0" y="125" font-family="Inter, sans-serif" font-size="14" fill="${subColor}">
          ${w.sub.replace(/&/g, '&amp;')}
        </text>

        <!-- Mock Content Blocks -->
        <rect x="0" y="160" width="280" height="120" rx="8" fill="${w.cardBg}" stroke="#e2e8f0" stroke-width="1" />
        <rect x="300" y="160" width="320" height="120" rx="8" fill="${w.cardBg}" stroke="#e2e8f0" stroke-width="1" />
      </g>
    </svg>
    `;

    await sharp(Buffer.from(svg)).jpeg().toFile(path.join(assetsDir, `work-${w.id}.jpg`));
  }
  console.log('✓ Works assets created');
}

async function run() {
  console.log('Generating reference website assets...');
  await generateHeroSilhouette();
  await generateAboutBackdrop();
  await generateBeamFigure();
  await generateLandingPagesAssets();
  await generateWorksAssets();
  console.log('All reference assets generated successfully!');
}

run().catch(console.error);

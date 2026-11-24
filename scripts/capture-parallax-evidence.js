import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureParallaxEvidence() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  try {
    // 1. Desktop Capture: Landing Pages with Car background
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:4173/?skipIntro=true', { waitUntil: 'networkidle2' });

    // Scroll to landing pages
    await page.evaluate(() => {
      document.getElementById('landing-pages')?.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/parallax_car_desktop.png') });
    console.log('✓ Captured parallax_car_desktop.png');

    // Toggle to DNA
    await page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll('#landing-pages button')).find(b => b.textContent.includes('DEPTH'));
      if (btn) btn.click();
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/parallax_dna_desktop.png') });
    console.log('✓ Captured parallax_dna_desktop.png');

    // 2. Mobile Capture (matching user's uploaded screenshot viewport)
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({
      width: 393,
      height: 852,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true
    });
    await mobilePage.goto('http://localhost:4173/?skipIntro=true', { waitUntil: 'networkidle2' });

    await mobilePage.evaluate(() => {
      document.getElementById('landing-pages')?.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 600));
    await mobilePage.screenshot({ path: path.join(__dirname, '../screenshots/parallax_mobile_landing.png') });
    console.log('✓ Captured parallax_mobile_landing.png');

  } finally {
    await browser.close();
  }
}

captureParallaxEvidence().catch(console.error);

import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureAyudarShowcase() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:4173/?skipIntro=true', { waitUntil: 'networkidle2' });

    // 1. Featured Section: Select 04 // AYUDAR NGO
    await page.evaluate(() => {
      document.getElementById('featured')?.scrollIntoView({ behavior: 'instant' });
      const buttons = Array.from(document.querySelectorAll('#featured button'));
      const ayudarBtn = buttons.find(b => b.textContent.includes('AYUDAR'));
      if (ayudarBtn) ayudarBtn.click();
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/ayudar_featured.png') });
    console.log('✓ Captured screenshots/ayudar_featured.png');

    // 2. Landing Pages: Select Ayudar
    await page.evaluate(() => {
      document.getElementById('landing-pages')?.scrollIntoView({ behavior: 'instant' });
      // Find Ayudar in landing pages
      const cards = Array.from(document.querySelectorAll('#landing-pages div'));
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/ayudar_landing_pages.png') });
    console.log('✓ Captured screenshots/ayudar_landing_pages.png');

    // 3. Works Deck
    await page.evaluate(() => {
      document.getElementById('works-deck')?.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/ayudar_works_deck.png') });
    console.log('✓ Captured screenshots/ayudar_works_deck.png');

  } finally {
    await browser.close();
  }
}

captureAyudarShowcase().catch(console.error);

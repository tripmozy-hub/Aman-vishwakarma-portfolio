import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function test3DCar() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:4173/?skipIntro=true', { waitUntil: 'networkidle2' });

    // 1. Center of Landing Pages section
    await page.evaluate(() => {
      document.getElementById('landing-pages')?.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/car_3d_center.png') });
    console.log('✓ Captured car_3d_center.png');

    // 2. Scroll down 300px (car turning from right towards left in 3D)
    await page.evaluate(() => {
      window.scrollBy({ top: 350, behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/car_3d_turned_left.png') });
    console.log('✓ Captured car_3d_turned_left.png');

    // 3. Scroll up 700px (car turning back towards right in 3D)
    await page.evaluate(() => {
      window.scrollBy({ top: -700, behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/car_3d_turned_right.png') });
    console.log('✓ Captured car_3d_turned_right.png');

    // 4. Mobile Viewport (iPhone 15 Pro / standard modern mobile)
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
      document.getElementById('landing-pages')?.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await new Promise(r => setTimeout(r, 800));
    await mobilePage.screenshot({ path: path.join(__dirname, '../screenshots/car_3d_mobile.png') });
    console.log('✓ Captured car_3d_mobile.png');

    // 5. Works Deck section (white page 2)
    await page.evaluate(() => {
      document.getElementById('works-deck')?.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/car_3d_works_deck.png') });
    console.log('✓ Captured car_3d_works_deck.png');

  } catch (err) {
    console.error('Test error:', err);
  } finally {
    await browser.close();
  }
}

test3DCar();

import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testRotatingCar() {
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
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/car_center_level.png') });
    console.log('✓ Captured car_center_level.png');

    // 2. Scroll down 250px from center
    await page.evaluate(() => {
      window.scrollBy({ top: 250, behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/car_scrolled_down.png') });
    console.log('✓ Captured car_scrolled_down.png');

    // 3. Scroll up 350px
    await page.evaluate(() => {
      window.scrollBy({ top: -500, behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/car_scrolled_up.png') });
    console.log('✓ Captured car_scrolled_up.png');

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
    await new Promise(r => setTimeout(r, 600));
    await mobilePage.screenshot({ path: path.join(__dirname, '../screenshots/car_mobile_rotating.png') });
    console.log('✓ Captured car_mobile_rotating.png');

    // 5. Works Deck section (white page 2)
    await page.evaluate(() => {
      document.getElementById('works-deck')?.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(__dirname, '../screenshots/car_works_deck.png') });
    console.log('✓ Captured car_works_deck.png');

  } catch (err) {
    console.error('Test error:', err);
  } finally {
    await browser.close();
  }
}

testRotatingCar();

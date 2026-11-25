import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testWorksDeck() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4173/?skipIntro=true', { waitUntil: 'networkidle2' });

  // Scroll to works-deck
  await page.evaluate(() => {
    document.getElementById('works-deck')?.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));

  // Click down arrow 4 times to navigate to the 5th project (WORKING ON IT)
  for (let i = 0; i < 4; i++) {
    await page.evaluate(() => {
      const nextBtn = document.querySelector('#works-deck button[aria-label=\"Next Project\"]');
      if (nextBtn) nextBtn.click();
    });
    await new Promise(r => setTimeout(r, 300));
  }

  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, '../screenshots/works_deck_working_on_it.png') });
  console.log('✓ Captured works_deck_working_on_it.png');

  // Mobile screenshot
  const mobile = await browser.newPage();
  await mobile.setViewport({ width: 393, height: 852, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await mobile.goto('http://localhost:4173/?skipIntro=true', { waitUntil: 'networkidle2' });
  await mobile.evaluate(() => {
    document.getElementById('works-deck')?.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));

  for (let i = 0; i < 4; i++) {
    await mobile.evaluate(() => {
      const nextBtn = document.querySelector('#works-deck button[aria-label=\"Next Project\"]');
      if (nextBtn) nextBtn.click();
    });
    await new Promise(r => setTimeout(r, 300));
  }

  await new Promise(r => setTimeout(r, 600));
  await mobile.screenshot({ path: path.join(__dirname, '../screenshots/works_deck_working_on_it_mobile.png') });
  console.log('✓ Captured works_deck_working_on_it_mobile.png');

  await browser.close();
}

testWorksDeck();

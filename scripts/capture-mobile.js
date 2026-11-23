import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, '../screenshots');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runMobileQA() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  // iPhone 14 viewport
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

  await page.goto('http://localhost:4173/?skipIntro=true', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({ path: path.join(outDir, 'mobile_01_hero.png') });
  console.log('✓ mobile_01_hero.png captured');

  // Test mobile menu drawer
  const menuBtn = await page.$('button[aria-label="Toggle Navigation Menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(outDir, 'mobile_02_menu_drawer.png') });
    console.log('✓ mobile_02_menu_drawer.png captured');
    await menuBtn.click();
  }

  // Mobile About section
  const aboutEl = await page.$('#about');
  if (aboutEl) {
    await aboutEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(outDir, 'mobile_03_about.png') });
    console.log('✓ mobile_03_about.png captured');
  }

  // Mobile Contact section
  const contactEl = await page.$('#contact');
  if (contactEl) {
    await contactEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(outDir, 'mobile_04_contact.png') });
    console.log('✓ mobile_04_contact.png captured');
  }

  await browser.close();
  console.log('Mobile QA complete!');
}

runMobileQA().catch(console.error);

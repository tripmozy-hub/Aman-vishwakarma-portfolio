import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runMobileAudit() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // 1. iPhone 14 Pro (iOS Safari)
    const pageIOS = await browser.newPage();
    await pageIOS.setViewport({
      width: 393,
      height: 852,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true
    });
    await pageIOS.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
    
    await pageIOS.goto('http://localhost:4173/?skipIntro=true', { waitUntil: 'networkidle2' });
    await pageIOS.screenshot({ path: path.join(__dirname, '../screenshots/ios_01_hero.png') });

    // Open Mobile Drawer
    await pageIOS.click('button[aria-label="Toggle Navigation Menu"]');
    await new Promise(r => setTimeout(r, 400));
    await pageIOS.screenshot({ path: path.join(__dirname, '../screenshots/ios_02_menu.png') });

    // Close Mobile Drawer
    await pageIOS.click('button[aria-label="Toggle Navigation Menu"]');
    await new Promise(r => setTimeout(r, 400));

    // Scroll to Landing Pages
    await pageIOS.evaluate(() => {
      document.getElementById('landing-pages')?.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 600));
    await pageIOS.screenshot({ path: path.join(__dirname, '../screenshots/ios_03_landing_pages.png') });

    // Scroll to Works Deck
    await pageIOS.evaluate(() => {
      document.getElementById('works-deck')?.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 600));
    await pageIOS.screenshot({ path: path.join(__dirname, '../screenshots/ios_04_works_deck.png') });

    // 2. Android (Google Pixel 7 / Chrome Mobile)
    const pageAndroid = await browser.newPage();
    await pageAndroid.setViewport({
      width: 412,
      height: 915,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true
    });
    await pageAndroid.setUserAgent('Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36');
    await pageAndroid.goto('http://localhost:4173/?skipIntro=true', { waitUntil: 'networkidle2' });
    
    // Scroll to About section
    await pageAndroid.evaluate(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 600));
    await pageAndroid.screenshot({ path: path.join(__dirname, '../screenshots/android_about.png') });

    // Scroll to Contact section
    await pageAndroid.evaluate(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 600));
    await pageAndroid.screenshot({ path: path.join(__dirname, '../screenshots/android_contact.png') });

    console.log('Mobile screenshots captured successfully!');
  } finally {
    await browser.close();
  }
}

runMobileAudit().catch(console.error);

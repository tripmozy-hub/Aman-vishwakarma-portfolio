import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, '../screenshots');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function scrollTo(page, selector) {
  await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, selector);
  await new Promise(r => setTimeout(r, 800));
}

async function runQA() {
  console.log('Launching headless Chrome for QA inspection...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    // 1. Capture Section 1: Intro Animation (without skipIntro)
    console.log('1. Loading Intro Animation...');
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: path.join(outDir, '01_intro_animation.png') });
    console.log('✓ 01_intro_animation.png captured');

    // Wait for intro to fade out or navigate with skipIntro
    await page.goto('http://localhost:4173/?skipIntro=true', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 600));

    // 2. Capture Section 2: Hero Section
    console.log('2. Inspecting Hero Section...');
    await page.screenshot({ path: path.join(outDir, '02_hero_silhouette.png') });
    console.log('✓ 02_hero_silhouette.png captured');

    // Toggle to real photo view
    const toggleBtn = await page.$('button[title="Toggle silhouette vs photo"]');
    if (toggleBtn) {
      await toggleBtn.click();
      await new Promise(r => setTimeout(r, 400));
      await page.screenshot({ path: path.join(outDir, '02_hero_real_photo.png') });
      console.log('✓ 02_hero_real_photo.png captured');
      await toggleBtn.click(); // toggle back
    }

    // 3. Capture Section 3: About Section
    console.log('3. Inspecting About Section...');
    await scrollTo(page, '#about');
    await page.screenshot({ path: path.join(outDir, '03_about_manifesto.png') });
    console.log('✓ 03_about_manifesto.png captured');

    // 4. Capture Section 4: Creative Technologist / Experience
    console.log('4. Inspecting Creative Technologist / Experience...');
    await scrollTo(page, '#experience');
    await page.screenshot({ path: path.join(outDir, '04_experience_fulltime.png') });
    console.log('✓ 04_experience_fulltime.png captured');

    // Click "TRIPMOZY" tab or skills
    const tabs = await page.$$('button');
    for (const b of tabs) {
      const text = await page.evaluate(el => el.textContent, b);
      if (text && text.includes('SYNTECXHUB')) {
        await b.click();
        await new Promise(r => setTimeout(r, 500));
        await page.screenshot({ path: path.join(outDir, '04_experience_internship_tab.png') });
        console.log('✓ 04_experience_internship_tab.png captured');
        break;
      }
    }

    // 5. Capture Section 5: Featured Project
    console.log('5. Inspecting Featured Project...');
    await scrollTo(page, '#featured');
    await page.screenshot({ path: path.join(outDir, '05_featured_project.png') });
    console.log('✓ 05_featured_project.png captured');

    // Switch to JobHub in Featured Project
    const featButtons = await page.$$('#featured button');
    for (const fb of featButtons) {
      const text = await page.evaluate(el => el.textContent, fb);
      if (text && text.includes('JOBHUB')) {
        await fb.click();
        await new Promise(r => setTimeout(r, 500));
        await page.screenshot({ path: path.join(outDir, '05_featured_project_jobhub.png') });
        console.log('✓ 05_featured_project_jobhub.png captured');
        break;
      }
    }

    // 6. Capture Section 6: Landing Pages Gallery
    console.log('6. Inspecting Landing Pages Gallery...');
    await scrollTo(page, '#landing-pages');
    await page.screenshot({ path: path.join(outDir, '06_landing_pages_gallery.png') });
    console.log('✓ 06_landing_pages_gallery.png captured');

    // 7. Capture Section 7: Works '26
    console.log('7. Inspecting Works 26...');
    await scrollTo(page, '#works-deck');
    await page.screenshot({ path: path.join(outDir, '07_works_3d_deck.png') });
    console.log('✓ 07_works_3d_deck.png captured');

    // Toggle to Hexagonal Wheel view
    for (const b of await page.$$('#works-deck button')) {
      const text = await page.evaluate(el => el.textContent, b);
      if (text && text.includes('LAYOUT')) {
        await b.click();
        await new Promise(r => setTimeout(r, 700));
        await page.screenshot({ path: path.join(outDir, '07_works_hexagonal_wheel.png') });
        console.log('✓ 07_works_hexagonal_wheel.png captured');
        break;
      }
    }

    // 8. Capture Section 8: Services
    console.log('8. Inspecting Services...');
    await scrollTo(page, '#services');
    await page.screenshot({ path: path.join(outDir, '08_services_accordion.png') });
    console.log('✓ 08_services_accordion.png captured');

    // 9. Capture Section 9: Contact & Footer
    console.log('9. Inspecting Contact & Footer...');
    await scrollTo(page, '#contact');
    await page.screenshot({ path: path.join(outDir, '09_contact_lets_talk.png') });
    console.log('✓ 09_contact_lets_talk.png captured');

    // Open contact modal
    for (const b of await page.$$('#contact button')) {
      const text = await page.evaluate(el => el.textContent, b);
      if (text && text.includes('SEND A MESSAGE')) {
        await b.click();
        await new Promise(r => setTimeout(r, 500));
        await page.screenshot({ path: path.join(outDir, '09_contact_modal_open.png') });
        console.log('✓ 09_contact_modal_open.png captured');
        break;
      }
    }

    console.log('All QA screenshots captured successfully!');
  } finally {
    await browser.close();
  }
}

runQA().catch(err => {
  console.error('QA capture error:', err);
  process.exit(1);
});

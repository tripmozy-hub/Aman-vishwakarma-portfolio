import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateWorkingOnItImage() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1200,750']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 750, deviceScaleFactor: 2 });

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      width: 1200px;
      height: 750px;
      background: #0B0B0E;
      font-family: 'Inter', sans-serif;
      color: #FFFFFF;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    /* Subtle cybernetic blueprint grid */
    .grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
    }

    /* Ambient red energy glow */
    .glow-radial {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 650px;
      height: 450px;
      background: radial-gradient(circle, rgba(242, 13, 32, 0.22) 0%, rgba(242, 13, 32, 0.04) 50%, transparent 75%);
      filter: blur(60px);
      pointer-events: none;
    }

    /* Browser Header Bar */
    .browser-header {
      height: 52px;
      background: #141418;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      padding: 0 24px;
      justify-content: space-between;
      position: relative;
      z-index: 10;
    }
    .traffic-lights {
      display: flex;
      gap: 9px;
    }
    .light {
      width: 13px;
      height: 13px;
      border-radius: 50%;
    }
    .light-red { background: #FF5F56; }
    .light-yellow { background: #FFBD2E; }
    .light-green { background: #27C93F; }

    .address-bar {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 6px 28px;
      border-radius: 9999px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #9CA3AF;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .address-bar span.lock {
      color: #10B981;
    }
    .address-bar span.url {
      color: #E5E7EB;
    }

    .status-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      padding: 4px 12px;
      border-radius: 9999px;
      background: rgba(242, 13, 32, 0.12);
      border: 1px solid rgba(242, 13, 32, 0.35);
      color: #F20D20;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #F20D20;
      box-shadow: 0 0 8px #F20D20;
    }

    /* Main Content */
    .content-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
      position: relative;
      z-index: 5;
      text-align: center;
    }

    .badge-top {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 18px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      color: #D1D5DB;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .badge-top .accent {
      color: #F20D20;
    }

    .main-title {
      font-family: 'Anton', sans-serif;
      font-size: 92px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      line-height: 0.95;
      color: #FFFFFF;
      margin-bottom: 16px;
      text-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
    }
    .main-title .highlight {
      color: #F20D20;
      text-shadow: 0 0 45px rgba(242, 13, 32, 0.6);
    }

    .sub-headline {
      font-family: 'Syne', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: #9CA3AF;
      max-width: 680px;
      line-height: 1.4;
      margin-bottom: 34px;
    }

    /* Interactive Terminal Window */
    .terminal-card {
      background: rgba(18, 18, 22, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 14px;
      padding: 18px 28px;
      max-width: 720px;
      width: 100%;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      text-align: left;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(12px);
    }

    .term-line {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }
    .term-line:last-child {
      margin-bottom: 0;
    }
    .term-prompt {
      color: #F20D20;
      font-weight: 700;
    }
    .term-cmd {
      color: #F3F4F6;
    }
    .term-muted {
      color: #6B7280;
    }
    .term-highlight {
      color: #38BDF8;
    }

    .progress-bar-container {
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .progress-track {
      flex: 1;
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 9999px;
      overflow: hidden;
      position: relative;
    }
    .progress-fill {
      width: 78%;
      height: 100%;
      background: linear-gradient(90deg, #F20D20 0%, #FF4D5E 100%);
      box-shadow: 0 0 12px #F20D20;
      border-radius: 9999px;
    }
    .progress-text {
      font-size: 11px;
      font-weight: 700;
      color: #F20D20;
      letter-spacing: 0.05em;
    }
  </style>
</head>
<body>
  <div class="grid-bg"></div>
  <div class="glow-radial"></div>

  <!-- Top Mockup Browser Header -->
  <div class="browser-header">
    <div class="traffic-lights">
      <div class="light light-red"></div>
      <div class="light light-yellow"></div>
      <div class="light light-green"></div>
    </div>
    <div class="address-bar">
      <span class="lock">🔒</span>
      <span class="url">https://aman-v.vercel.app/project-in-progress</span>
    </div>
    <div class="status-pill">
      <div class="status-dot"></div>
      <span>ACTIVE DEV</span>
    </div>
  </div>

  <!-- Center Content -->
  <div class="content-area">
    <div class="badge-top">
      <span class="accent">⚡</span> PRODUCTION ROADMAP // UPCOMING RELEASE
    </div>

    <h1 class="main-title">
      WORKING <span class="highlight">ON IT</span>
    </h1>

    <p class="sub-headline">
      Architecting the next high-performance full-stack web application & AI system.
    </p>

    <!-- Terminal Status Card -->
    <div class="terminal-card">
      <div class="term-line">
        <span class="term-prompt">aman@dev:~$</span>
        <span class="term-cmd">git checkout -b feature/production-release-2026</span>
      </div>
      <div class="term-line">
        <span class="term-prompt">aman@dev:~$</span>
        <span class="term-cmd">npm run dev --turbopack</span>
        <span class="term-muted">// Next.js 15 • React 19 • TypeScript • Tailwind</span>
      </div>
      <div class="term-line">
        <span class="term-prompt">></span>
        <span class="term-muted">Engine:</span>
        <span class="term-cmd">High-Throughput Full-Stack MERN & AI Agent Pipeline</span>
      </div>

      <div class="progress-bar-container">
        <div class="progress-track">
          <div class="progress-fill"></div>
        </div>
        <span class="progress-text">78% COMPLETE • COMING SOON</span>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  const outPath = path.join(__dirname, '../public/assets/work-in-progress.jpg');
  await page.screenshot({ path: outPath, type: 'jpeg', quality: 92 });
  console.log('✓ Successfully generated:', outPath);

  await browser.close();
}

generateWorkingOnItImage();

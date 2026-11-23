# AMAN VISHWAKARMA — Cinematic Developer Portfolio

An award-winning editorial, high-contrast, black-and-red cinematic portfolio website engineered for **Aman Vishwakarma** (Full Stack Developer & MERN Specialist).

Designed and developed to reflect the visual design language of high-end creative web agencies (Awwwards / FWA style): oversized condensed typography, asymmetric layouts, dual-rim lighting (vivid red & electric cyan), smooth motion design, and complete real-world career data.

---

## 🎨 Visual Identity & Design System

- **Background:** `#080808` (Deep Cinematic Black)
- **Primary Accent:** `#F20D20` (Vivid Signal Red)
- **Secondary Accent:** `#E92735` (Crimson Glow)
- **Primary Typography:** `#FFFFFF` (Pure Editorial White)
- **Secondary Typography:** `#9CA3AF` / `#8E8E93` (Muted Technical Grey)
- **Lighting Accents:** Electric Cyan (`#00F0FF`) and Blue (`#0066FF`) rim lighting
- **Display Typography:** `Anton`, `Bebas Neue`, `Syne`
- **Body & UI Typography:** `Inter`, `JetBrains Mono`

---

## 🏛️ Architecture & Sections

1. **Top Navigation (`Navbar.jsx`):**
   - Brand logo `AMAN.V` with animated red pulse.
   - Smooth navigation links with active scrollspy indicator.
   - Dedicated `RESUME` download button directly linking to `/resume.pdf`.
   - Full-screen mobile drawer menu with staggered editorial links.

2. **Hero Composition (`Hero.jsx`):**
   - Massive **"PORTFOLIO"** typography in vivid red spanning across the viewport width behind the hero elements.
   - Layered portrait composition overlapping the typography with interactive mouse parallax and dual-rim lighting (red left, cyan right).
   - Left side: Editorial introduction, title, quote, and high-impact CTAs (`VIEW MY WORK →`, `DOWNLOAD RESUME`).
   - Right side: Numerical highlights (4 Development Internships, 2025–Present Experience, Raniganj, India).

3. **Project Showcase (`Projects.jsx`):**
   - Heading: `WORK THAT SPEAKS.`
   - Asymmetric project layouts with custom high-fidelity mockup previews.
   - **01 — JOBHUB:** Full-Stack Job Portal & Recruitment Platform (React, Node, Express, MongoDB Atlas, Tailwind).
   - **02 — AYUDAR:** Animal Welfare Foundation Website (Next.js, React, Razorpay). Live at `https://animal-ngo-website.vercel.app`.
   - **03 — TRIPMOZY:** Travel Technology Platform (Production travel web platform & AI workflows). Live at `https://tripmozy.com`.

4. **Development Journey (`Journey.jsx`):**
   - Heading: `FROM IDEAS TO REAL DIGITAL PRODUCTS.`
   - 6-stage engineering lifecycle: `01 DISCOVER`, `02 PLAN`, `03 DESIGN`, `04 DEVELOP`, `05 INTEGRATE`, `06 DEPLOY` with laser connector line and micro-interactions.

5. **More Than Code (`Skills.jsx`):**
   - Split 3-column layout:
     - Left: Technical skill tags across 5 domains (Frontend, Backend, Database, Tools, AI & Other).
     - Center: Engineering principles (Clean Code, Responsive Design, Scalable Architecture, Problem Solving, API Integration, Continuous Learning).
     - Right: High-contrast red quote panel featuring Aman Vishwakarma's development philosophy.

6. **Professional Experience (`Experience.jsx`):**
   - Heading: `BUILDING EXPERIENCE. DELIVERING SOLUTIONS.`
   - Complete career timeline:
     - Tripmozy Pvt. Ltd. (Nov 2025 – Present)
     - SyntecxHub (March 2026 – April 2026)
     - Cognifyz Technologies (April 2025 – May 2025)
     - Ardent Computech Pvt. Ltd. (January 2025 – April 2025)
     - Code Alpha (4-Week Intensive Program)

7. **About Me (`About.jsx`):**
   - Heading: `A LITTLE ABOUT THE DEVELOPER.`
   - In-depth narrative, BCA graduation details (Kazi Nazrul University), and digital developer credentials.

8. **Education & Certifications (`Education.jsx`):**
   - BCA at R.I.C.I.S Institute (2022–2025), Higher Secondary at Techno India School, Secondary at Gyan Bharti School.
   - 7 verified industry certifications from Great Learning, Data Space Academy, and TCS iON.

9. **Dramatic Contact Ending (`Contact.jsx`):**
   - Enormous headline: `LET'S BUILD SOMETHING TOGETHER.` with red accent.
   - Verified contact information: `amanvishwakarma8016@gmail.com`, `+91 7478290140`, Raniganj, West Bengal.
   - 1-click email/phone copy buttons, GitHub & LinkedIn direct integration.
   - Interactive contact form with input validation, success celebration with confetti, and direct mail dispatch.

---

## 🚀 Local Setup & Development

### 1. Prerequisites
- Node.js (v18.0.0 or higher)
- npm or pnpm

### 2. Installation
```bash
# Clone or navigate to the repository
cd C:\Users\user\Documents\AMAN

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

### Option 1: Deploy with Vercel CLI
```bash
# Install Vercel CLI globally (if not installed)
npm install -g vercel

# Deploy directly
vercel
```

### Option 2: Deploy via GitHub / GitLab / Bitbucket
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: cinematic developer portfolio for Aman Vishwakarma"
   git remote add origin https://github.com/<your-username>/aman-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click **Deploy**. Your portfolio will be live worldwide on a high-speed CDN within seconds!

---

## 📄 Managing Resume & Custom Portrait

- **Resume PDF:** Place your updated resume file at `public/resume.pdf`. The download buttons throughout the site automatically serve this file.
- **Custom Portrait Photo:** If you wish to use your real portrait photograph instead of the cinematic dual-rim silhouette, drop an image named `portrait.jpg` into `public/portrait.jpg`. The hero section automatically displays it with high-contrast grayscale and lighting effects!

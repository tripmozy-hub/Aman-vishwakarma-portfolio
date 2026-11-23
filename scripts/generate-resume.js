import fs from 'fs';
import PDFDocument from 'pdfkit';

const doc = new PDFDocument({
  size: 'A4',
  margin: 30,
  autoFirstPage: false,
  info: {
    Title: 'Aman Vishwakarma - Full Stack Developer (MERN & Next.js) Resume',
    Author: 'Aman Vishwakarma',
    Subject: 'Professional Resume',
    Keywords: 'Full Stack Developer, MERN, Next.js 14, Prisma ORM, React, Node.js, MongoDB, Express, Gemini 3.8 Flash, Leaflet.js, Aman Vishwakarma'
  }
});

doc.addPage({ size: 'A4', margin: 30 });

const outputStream = fs.createWriteStream('./public/resume.pdf');
doc.pipe(outputStream);

const PRIMARY = '#0F172A';
const BLUE = '#2563EB';
const DARK = '#1E293B';
const GREY = '#475569';
const ACCENT = '#0284C7';

// Header Banner with Profile Photo
doc.rect(30, 24, 535, 80).fill('#0B1120');

try {
  doc.save();
  doc.roundedRect(40, 30, 56, 68, 6).clip();
  doc.image('./public/portrait.jpg', 40, 30, { width: 56, height: 68, fit: [56, 68], align: 'center', valign: 'center' });
  doc.restore();
  doc.roundedRect(40, 30, 56, 68, 6).lineWidth(1.5).stroke('#38BDF8');
} catch (e) {
  console.log('PDF photo notice:', e.message);
}

// Header Text (Beside Photo)
doc.fillColor('#FFFFFF').fontSize(18).font('Helvetica-Bold').text('AMAN VISHWAKARMA', 108, 32);
doc.fillColor('#38BDF8').fontSize(9.5).font('Helvetica-Bold').text('Full Stack Developer (MERN & Next.js 14) & AI Engineer', 108, 53);
doc.fillColor('#CBD5E1').fontSize(8).font('Helvetica').text(
  'Raniganj, West Bengal, India   |   +91 7478290140   |   amanvishwakarma8016@gmail.com',
  108, 67
);
doc.fillColor('#94A3B8').fontSize(7.4).font('Helvetica').text(
  'TripMozy: ai-trip-planner.tripmozy.com   |   Hill Queen: hillqueenecoresorts.com   |   JobHub: jobhub-tau.vercel.app',
  108, 80
);

let y = 112;

function sectionTitle(title) {
  doc.rect(30, y, 535, 15).fill('#F1F5F9');
  doc.fillColor('#0F172A').fontSize(8.5).font('Helvetica-Bold').text(title.toUpperCase(), 38, y + 3.5);
  doc.rect(30, y, 3.5, 15).fill('#2563EB');
  y += 20;
}

// 1. PROFESSIONAL SUMMARY
sectionTitle('Professional Summary');
doc.fillColor(DARK).fontSize(7.8).font('Helvetica').text(
  'BCA graduate and Full Stack Developer (MERN / Next.js) with active production experience at Tripmozy and 4 completed internships. Architected TripMozy’s flagship AI Travel Planning Engine (ai-trip-planner.tripmozy.com) integrating Google Gemini 3.8 Flash & Leaflet.js mapping across 150+ Indian destinations. Built Hill Queen Eco Resort’s full-stack hospitality platform (hillqueenecoresorts.com) with Next.js 14, TypeScript & Prisma ORM, and JobHub HQ (jobhub-tau.vercel.app). Proficient in React, Node.js, Express, MongoDB, SQL, and automated test pipelines. Seeking a full-time or trainee Full Stack Developer role.',
  36, y, { width: 523, lineGap: 1.8 }
);
y += 38;

// 2. TECHNICAL SKILLS
sectionTitle('Technical Skills');
const skills = [
  { label: 'Generative AI & Maps', text: 'Google Gemini 3.8 Flash, Multi-turn Chat, Leaflet.js, Geoapify API, OpenStreetMap Nominatim, Natural Language Refinement' },
  { label: 'Frontend', text: 'Next.js 14 (App Router), React 18 / React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Chart.js' },
  { label: 'Backend & DB', text: 'Node.js, Express.js, Prisma ORM, REST API Architecture, JWT Authentication, bcrypt Hashing, MongoDB (Atlas), SQL' },
  { label: 'Testing & DevOps', text: 'Chrome DevTools Protocol (CDP) headless automation, 148-test suites, Git, GitHub, Postman, Vite, Vercel, PWA Manifests' }
];

skills.forEach(s => {
  doc.fillColor(DARK).fontSize(7.8).font('Helvetica-Bold').text(`${s.label}: `, 36, y, { continued: true });
  doc.font('Helvetica').text(s.text, { width: 523 });
  y += 11.5;
});
y += 4;

// 3. KEY PRODUCTION PROJECTS
sectionTitle('Key Production Projects');

// Project 1: TripMozy AI
doc.fillColor(DARK).fontSize(8.4).font('Helvetica-Bold').text('TripMozy — AI Travel Planning Engine & Geospatial Platform', 36, y, { continued: true });
doc.fillColor(GREY).fontSize(7.2).font('Helvetica-Oblique').text('  |  ai-trip-planner.tripmozy.com', { align: 'right' });
y += 9.5;
doc.fillColor(BLUE).fontSize(7.2).font('Helvetica').text('Stack: Vanilla JS (ES6+), Google Gemini 3.8 Flash AI, Leaflet.js, Geoapify APIs, Tailwind CSS, Chart.js, Vercel', 36, y);
y += 9.5;

const tripmozyBullets = [
  'Architected an end-to-end intelligent travel itinerary engine with 100% offline-resilient fallbacks across 150+ Indian destinations with 0 external service lock-in.',
  'Integrated Google Gemini 3.8 Flash via official generative AI endpoints for dynamic schedules, local insider tips, and natural-language itinerary refinements.',
  'Built real-time Geospatial Radar using Leaflet.js & Geoapify API; engineered deterministic Tour Pack Financial Engine and 148 automated CDP tests (100% pass).'
];
tripmozyBullets.forEach(b => {
  doc.fillColor('#2563EB').fontSize(6.5).text('• ', 40, y, { continued: true });
  doc.fillColor(DARK).fontSize(7.4).font('Helvetica').text(b, 48, y, { width: 511 });
  y += 9.2;
});
y += 3;

// Project 2: Hill Queen Eco Resort
doc.fillColor(DARK).fontSize(8.4).font('Helvetica-Bold').text('Hill Queen Eco Resort – Full-Stack Hospitality Platform', 36, y, { continued: true });
doc.fillColor(GREY).fontSize(7.2).font('Helvetica-Oblique').text('  |  hillqueenecoresorts.com', { align: 'right' });
y += 9.5;
doc.fillColor(BLUE).fontSize(7.2).font('Helvetica').text('Stack: Next.js 14 (App Router), React 18, TypeScript, Prisma ORM, SQL, JWT, bcrypt, Tailwind CSS, Vercel', 36, y);
y += 9.5;

const hillqueenBullets = [
  'Built full-stack hospitality platform using Next.js 14, React 18, and TypeScript featuring 7 room categories, 13 tourist destinations, and photo galleries.',
  'Designed database architecture with Prisma ORM and SQL; implemented secure JWT authentication, bcrypt password hashing, and role-based admin access.',
  'Developed WhatsApp-based booking enquiry workflow, optimized SEO metadata and mobile UX; deployed on custom domain with HTTPS on Vercel.'
];
hillqueenBullets.forEach(b => {
  doc.fillColor('#2563EB').fontSize(6.5).text('• ', 40, y, { continued: true });
  doc.fillColor(DARK).fontSize(7.4).font('Helvetica').text(b, 48, y, { width: 511 });
  y += 9.2;
});
y += 3;

// Project 3: JobHub HQ
doc.fillColor(DARK).fontSize(8.4).font('Helvetica-Bold').text('JobHub HQ – Web Your Dream Career (Full-Stack Recruitment Platform)', 36, y, { continued: true });
doc.fillColor(GREY).fontSize(7.2).font('Helvetica-Oblique').text('  |  jobhub-tau.vercel.app', { align: 'right' });
y += 9.5;
doc.fillColor(BLUE).fontSize(7.2).font('Helvetica').text('Stack: React.js, Node.js, Express.js, MongoDB Atlas, Tailwind CSS, Vercel & Render', 36, y);
y += 9.5;

const jobhubBullets = [
  'Built JobHub HQ ("Web Your Dream Career") — a production recruitment network connecting candidates with tech alliances across 10,000+ active missions.',
  'Implemented multi-role JWT authentication with custom dashboards for job seekers, recruiters, and admins, with resume uploads and real-time search filters.',
  'Deployed frontend on Vercel, REST API backend on Render, and cloud database on MongoDB Atlas.'
];
jobhubBullets.forEach(b => {
  doc.fillColor('#2563EB').fontSize(6.5).text('• ', 40, y, { continued: true });
  doc.fillColor(DARK).fontSize(7.4).font('Helvetica').text(b, 48, y, { width: 511 });
  y += 9.2;
});
y += 3;

// Project 4: Ayudar NGO
doc.fillColor(DARK).fontSize(8.4).font('Helvetica-Bold').text('Ayudar Animal Welfare Foundation – NGO Web Platform', 36, y, { continued: true });
doc.fillColor(GREY).fontSize(7.2).font('Helvetica-Oblique').text('  |  animal-ngo-website.vercel.app', { align: 'right' });
y += 9.5;
doc.fillColor(BLUE).fontSize(7.2).font('Helvetica').text('Stack: Next.js, React, Razorpay Gateway, Tailwind CSS, Vercel', 36, y);
y += 9.5;

const ayudarBullets = [
  'Built responsive NGO platform for emergency rescue reporting, animal adoption profiles, Gaushala care, and automated Razorpay donation receipts.'
];
ayudarBullets.forEach(b => {
  doc.fillColor('#2563EB').fontSize(6.5).text('• ', 40, y, { continued: true });
  doc.fillColor(DARK).fontSize(7.4).font('Helvetica').text(b, 48, y, { width: 511 });
  y += 9.2;
});
y += 4;

// 4. PROFESSIONAL EXPERIENCE
sectionTitle('Professional Experience');
doc.fillColor(DARK).fontSize(8.2).font('Helvetica-Bold').text('Web Developer & AI Operations Executive', 36, y, { continued: true });
doc.fillColor(GREY).fontSize(7.8).font('Helvetica').text(' | Tripmozy Pvt. Ltd., West Bengal', { continued: true });
doc.fillColor('#2563EB').fontSize(7.8).font('Helvetica-Bold').text('  Nov 2025 – Present', { align: 'right' });
y += 10.5;

const expBullets = [
  'Architect, deploy and maintain company web applications and AI-driven travel planning tools (ai-trip-planner.tripmozy.com).',
  'Integrate generative AI APIs and automated test pipelines, ensuring zero downtime and sub-second PWA load times.'
];
expBullets.forEach(b => {
  doc.fillColor('#2563EB').fontSize(6.5).text('• ', 40, y, { continued: true });
  doc.fillColor(DARK).fontSize(7.4).font('Helvetica').text(b, 48, y, { width: 511 });
  y += 9.2;
});
y += 4;

// 5. INTERNSHIP EXPERIENCE
sectionTitle('Internship Experience');

const internships = [
  {
    role: 'Full Stack Developer Intern',
    company: 'SyntecxHub',
    period: 'Mar 2026 – Apr 2026',
    desc: 'Built reusable React components, connected Express/MongoDB endpoints, and collaborated via Git pull requests.'
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Cognifyz',
    period: 'Apr 2025 – May 2025',
    desc: 'Developed full-stack modules end-to-end, from MongoDB schema modeling to front-end CRUD UI rendering in React.'
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Ardent Computech Pvt Ltd, Raniganj',
    period: 'Jan 2025 – Apr 2025',
    desc: 'Built responsive MERN applications with user authentication, CRUD operations, REST APIs, and mobile-first design.'
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Code Alpha',
    period: '4-week program',
    desc: 'Completed project-based full-stack web development tasks and practical software engineering modules.'
  }
];

internships.forEach(item => {
  doc.fillColor(DARK).fontSize(7.8).font('Helvetica-Bold').text(item.role, 36, y, { continued: true });
  doc.fillColor(GREY).fontSize(7.5).font('Helvetica').text(` | ${item.company}`, { continued: true });
  doc.fillColor('#2563EB').fontSize(7.5).font('Helvetica-Bold').text(`  ${item.period}`, { align: 'right' });
  y += 9.5;
  doc.fillColor('#2563EB').fontSize(6.5).text('• ', 40, y, { continued: true });
  doc.fillColor(DARK).fontSize(7.3).font('Helvetica').text(item.desc, 48, y, { width: 511 });
  y += 9.8;
});
y += 3;

// 6. EDUCATION
sectionTitle('Education');
const education = [
  { degree: 'Bachelor of Computer Applications (BCA)', school: 'R.I.C.I.S Institute, Raniganj (WB), Kazi Nazrul University', period: '2022 – 2025' },
  { degree: 'Higher Secondary (CBSE)', school: 'Techno India School', period: '2022' },
  { degree: 'Secondary (CBSE)', school: 'Gyan Bharti School', period: '2020' }
];
education.forEach(edu => {
  doc.fillColor(DARK).fontSize(7.6).font('Helvetica-Bold').text(edu.degree, 36, y, { continued: true });
  doc.fillColor(GREY).fontSize(7.4).font('Helvetica').text(` | ${edu.school}`, { continued: true });
  doc.fillColor('#0F172A').fontSize(7.4).font('Helvetica-Bold').text(`  ${edu.period}`, { align: 'right' });
  y += 10;
});
y += 3;

// 7. CERTIFICATIONS & TRAINING
sectionTitle('Certifications & Training');
doc.fillColor(DARK).fontSize(7.4).font('Helvetica').text(
  '• Great Learning Academy: Full Stack Web Development, Front End (HTML/CSS), Back End Development, UI/UX for Beginners\n• Ethical Hacking (Industrial Training) – Data Space Academy   |   TCS iON Career Edge – Young Professional Certification',
  36, y, { width: 523, lineGap: 2.2 }
);
y += 20;

// Footer line
doc.rect(30, 814, 535, 1).fill('#E2E8F0');
doc.fillColor('#64748B').fontSize(6.8).font('Helvetica').text(
  'Aman Vishwakarma   •   Full Stack Developer (MERN & Next.js 14)   •   Available for Full-Time Roles',
  30, 819, { align: 'center', width: 535 }
);

console.log('Final y position:', y, 'out of 842. Page count:', doc.bufferedPageRange().count);
doc.end();
console.log('✓ Modern 1-to-1 resume.pdf successfully created at ./public/resume.pdf');

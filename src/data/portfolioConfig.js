/**
 * MASTER PORTFOLIO CONFIGURATION
 * Comprehensive details from Aman Vishwakarma's CV & TripMozy Flagship Production Architecture
 */

export const portfolioConfig = {
  // 1. Personal Identity & Bio
  personal: {
    name: "AMAN VISHWAKARMA",
    shortName: "AMAN",
    title: "FULL STACK DEVELOPER (MERN) & AI ENGINEER",
    headline: "EXPLORE MY PORTFOLIO",
    location: "Raniganj, West Bengal, India",
    coordinates: "LAT 23.62° N // LONG 87.12° E",
    estYear: "EST. 2023",
    status: "SEEKING FULL-TIME OR TRAINEE FULL STACK DEVELOPER ROLE",
    email: "amanvishwakarma8016@gmail.com",
    phone: "+91 7478290140",
    resumeUrl: "/resume.pdf",
    portraitUrl: "/portrait.jpg",
    silhouetteUrl: "/assets/hero-silhouette.png",
    githubUrl: "https://github.com/amanvishwakarma8016",
    tripmozyUrl: "https://ai-trip-planner.tripmozy.com/",
    introStatement: "I AM PASSIONATE ABOUT CREATING WEBSITES THAT STAND OUT FROM THE CROWD",
    heroDisciplines: [
      "NEXT.JS 14 & PRISMA",
      "GEMINI 3.8 FLASH AI",
      "FULL STACK MERN",
      "LEAFLET.JS & GEOMAPS"
    ],
    aboutStatement: "TURNING VISIONARY IDEAS INTO FAST, DISTINCTIVE DIGITAL EXPERIENCES",
    aboutSummary: "BCA graduate and Full Stack Developer (MERN / Next.js) with 4 internships and active production experience at Tripmozy. Architected TripMozy's flagship AI Travel Planning Engine (ai-trip-planner.tripmozy.com), developed Hill Queen Eco Resort's full-stack hospitality platform (hillqueenecoresorts.com) with Next.js 14 & Prisma ORM, and built JobHub HQ (jobhub-tau.vercel.app). Proficient in React, Next.js, TypeScript, Express REST APIs, MongoDB, and automated testing pipelines.",
    aboutBio: "I specialize in building bespoke digital products where purposeful editorial design meets robust engineering. Creating experiences with intentional motion, systematic rigor, and measurable impact.",
    aboutCraft: "01/04 • NEXT.JS 14 • MERN STACK • GEMINI AI • PRISMA ORM"
  },

  // 2. Navigation Items
  navigation: [
    { label: "HOME", href: "#home" },
    { label: "ABOUT ME", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#featured" },
    { label: "LANDING PAGES", href: "#landing-pages" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" }
  ],

  // 3. Social Media & Live Demo Links
  socialLinks: [
    { label: "TRIPMOZY AI DEMO", url: "https://ai-trip-planner.tripmozy.com/", icon: "ExternalLink" },
    { label: "HILL QUEEN RESORT", url: "https://www.hillqueenecoresorts.com", icon: "ExternalLink" },
    { label: "JOBHUB HQ DEMO", url: "https://jobhub-tau.vercel.app/", icon: "ExternalLink" },
    { label: "AYUDAR NGO DEMO", url: "https://animal-ngo-website.vercel.app", icon: "ExternalLink" },
    { label: "GITHUB", url: "https://github.com/amanvishwakarma8016", icon: "Github" },
    { label: "LINKEDIN", url: "https://linkedin.com/in/aman-vishwakarma-dev", icon: "Linkedin" }
  ],

  // 4. Detailed Technical Skills Categorized
  technicalSkills: {
    generativeAI: [
      { name: "Google Gemini 3.8 Flash", level: "Production", icon: "Sparkles" },
      { name: "Multi-turn Chat & System Instructions", level: "Production", icon: "Terminal" },
      { name: "Natural Language Itinerary Refinement", level: "Advanced", icon: "Route" },
      { name: "OpenAI API Integration", level: "Proficient", icon: "Cpu" },
      { name: "AI Tooling (Copilot, Claude, Cursor)", level: "Advanced", icon: "Wrench" }
    ],
    geospatial: [
      { name: "Leaflet.js Mapping", level: "Advanced", icon: "Map" },
      { name: "Geoapify API (Geocoding & Places Radar)", level: "Advanced", icon: "Compass" },
      { name: "HD Map Tiles & Dynamic Radii (15-60km)", level: "Advanced", icon: "Target" },
      { name: "OpenStreetMap Nominatim", level: "Proficient", icon: "Globe" }
    ],
    frontend: [
      { name: "Next.js 14 (App Router)", level: "Production", icon: "Globe" },
      { name: "React 18 / React.js", level: "Advanced", icon: "Code2" },
      { name: "TypeScript", level: "Advanced", icon: "FileCode" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Terminal" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "HTML5 & CSS3 Variables", level: "Advanced", icon: "Layout" },
      { name: "Chart.js (Budget Analytics)", level: "Proficient", icon: "BarChart" },
      { name: "Bootstrap & Redux / Context API", level: "Proficient", icon: "Layers" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "Server" },
      { name: "Express.js", level: "Advanced", icon: "Route" },
      { name: "Prisma ORM Architecture", level: "Production", icon: "Database" },
      { name: "JWT Auth & bcrypt Hashing", level: "Advanced", icon: "Lock" },
      { name: "REST API Architecture", level: "Advanced", icon: "Network" }
    ],
    database: [
      { name: "Prisma ORM & SQL Architecture", level: "Production", icon: "Database" },
      { name: "MongoDB (Atlas)", level: "Advanced", icon: "Database" },
      { name: "SQL & Relational Schemas", level: "Advanced", icon: "Table" }
    ],
    toolsTesting: [
      { name: "Chrome DevTools Protocol (CDP)", level: "Advanced", icon: "Cpu" },
      { name: "Node.js Test Harnesses (148 tests)", level: "Advanced", icon: "CheckCircle" },
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "Postman & Vite", level: "Advanced", icon: "Zap" },
      { name: "Vercel Serverless & CNAME DNS", level: "Advanced", icon: "Cloud" },
      { name: "PWA Web Manifests & DOM Virtualization", level: "Proficient", icon: "Box" }
    ],
    alsoFamiliarWith: [
      "Python",
      "Java",
      "OpenAI API Integration",
      "AI-assisted development (Copilot, Claude, Cursor)"
    ]
  },

  // 5. Professional & Internship Experience Tracks (Section 4)
  experienceTracks: [
    {
      id: "tripmozy",
      tabLabel: "TRIPMOZY (CURRENT)",
      role: "Web Developer & AI Operations Executive",
      company: "Tripmozy Pvt. Ltd., West Bengal",
      period: "Nov 2025 – Present",
      type: "Professional Production Role",
      description: "Architected and deployed TripMozy's flagship AI Travel Planning Engine (ai-trip-planner.tripmozy.com) with 100% offline-resilient fallbacks across 150+ Indian destinations.",
      bullets: [
        "Architected and deployed an end-to-end intelligent travel itinerary engine handling travel planning across 150+ Indian destinations with 0 external service lock-in.",
        "Integrated Google Gemini 3.8 Flash via official generative AI endpoints to synthesize personalized day-by-day schedules, dynamic local tips, and natural-language itinerary refinements.",
        "Built a real-time Geospatial Radar & Route Visualizer using Leaflet.js and Geoapify Places API, plotting chronological sightseeing stops with live driving radius filters (15 km – 60 km).",
        "Designed deterministic Tour Pack Financial Engine (india_travel_engine.js) calculating room allocations, vehicle sizing (Sedan/SUV/Tempo), fuel surcharges, and permits.",
        "Developed comprehensive automated test suite of 148 unit, integration, and headless Chrome DevTools Protocol (CDP) tests with 100% pass rates.",
        "Delivered sub-second load time, zero-bundle-overhead PWA experience with custom print-to-PDF itinerary generation and proactive cache invalidation."
      ],
      metrics: [
        { label: "LIVE ENGINE", value: "ai-trip-planner.tripmozy.com" },
        { label: "AI MODEL", value: "Google Gemini 3.8 Flash" },
        { label: "AUTOMATION", value: "148 CDP & Unit Tests" }
      ]
    },
    {
      id: "syntecxhub",
      tabLabel: "SYNTECXHUB",
      role: "Full Stack Developer Intern",
      company: "SyntecxHub",
      period: "Mar 2026 – Apr 2026",
      type: "Developer Internship",
      description: "Engineered scalable React views and robust MongoDB REST backend pipelines in a collaborative team.",
      bullets: [
        "Built reusable React components from UI requirements, keeping layouts fluid and responsive across devices.",
        "Connected front-end views to an Express.js and MongoDB backend through structured REST APIs.",
        "Worked in an agile team using Git/GitHub branches, pull requests, peer reviews, and code standards."
      ],
      metrics: [
        { label: "STACK", value: "React • Express • MongoDB" },
        { label: "COLLABORATION", value: "Git/GitHub Branches & PRs" },
        { label: "DELIVERY", value: "Production REST Endpoints" }
      ]
    },
    {
      id: "cognifyz",
      tabLabel: "COGNIFYZ",
      role: "Full Stack Developer Intern",
      company: "Cognifyz",
      period: "Apr 2025 – May 2025",
      type: "Developer Internship",
      description: "Full lifecycle MERN module development from schema architecture to responsive client interactions.",
      bullets: [
        "Developed full-stack modules end-to-end, from MongoDB schema design directly to the React UI.",
        "Implemented secure CRUD operations and maintained strict data consistency between client and server.",
        "Optimized client state management and streamlined asynchronous API responses."
      ],
      metrics: [
        { label: "SCOPE", value: "End-to-End MERN Lifecycle" },
        { label: "DATA LAYER", value: "MongoDB Schema & Aggregations" },
        { label: "INTEGRATION", value: "Full CRUD & State Consistency" }
      ]
    },
    {
      id: "ardent",
      tabLabel: "ARDENT COMPUTECH",
      role: "Full Stack Developer Intern",
      company: "Ardent Computech Pvt Ltd, Raniganj",
      period: "Jan 2025 – Apr 2025",
      type: "Developer Internship",
      description: "Intensive 4-month full-stack development internship focusing on clean-code architecture and REST APIs.",
      bullets: [
        "Built responsive MERN applications with user authentication, CRUD features, and REST APIs.",
        "Integrated MongoDB and strictly adhered to clean-code practices, Git version control, and mobile-first design.",
        "Participated in daily technical standups and sprint demonstrations."
      ],
      metrics: [
        { label: "DURATION", value: "4 Months (Jan–Apr 2025)" },
        { label: "SECURITY", value: "User Authentication & Roles" },
        { label: "DESIGN", value: "Mobile-First & Clean Code" }
      ]
    },
    {
      id: "codealpha",
      tabLabel: "CODE ALPHA",
      role: "Full Stack Developer Intern",
      company: "Code Alpha",
      period: "4-Week Intensive Program",
      type: "Developer Internship",
      description: "Delivered project-based full-stack engineering assignments adhering to strict milestone deadlines.",
      bullets: [
        "Completed project-based full-stack development tasks as part of the specialized engineering internship program.",
        "Implemented interactive client UI features and backend request validations.",
        "Received performance recognition for code quality and punctual project deployment."
      ],
      metrics: [
        { label: "PROGRAM", value: "4-Week Intensive Sprint" },
        { label: "FOCUS", value: "Project-Based Full-Stack Tasks" },
        { label: "OUTCOME", value: "Successful Deployment & Signoff" }
      ]
    }
  ],

  // 6. Formal Education
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "R.I.C.I.S Institute, Raniganj (WB)",
      university: "Kazi Nazrul University",
      period: "2022 – 2025",
      status: "Graduated Graduate"
    },
    {
      degree: "Higher Secondary (CBSE)",
      institution: "Techno India School",
      period: "2022",
      status: "Class XII Completed"
    },
    {
      degree: "Secondary (CBSE)",
      institution: "Gyan Bharti School",
      period: "2020",
      status: "Class X Completed"
    }
  ],

  // 7. Verified Certifications
  certifications: [
    { title: "Full Stack Web Development", issuer: "Great Learning Academy", category: "Full-Stack" },
    { title: "Front End Development (HTML)", issuer: "Great Learning Academy", category: "Frontend" },
    { title: "Front End Development (CSS)", issuer: "Great Learning Academy", category: "Frontend" },
    { title: "Back End Development", issuer: "Great Learning Academy", category: "Backend" },
    { title: "UI/UX for Beginners", issuer: "Great Learning Academy", category: "UI/UX Design" },
    { title: "Ethical Hacking (Industrial Training)", issuer: "Data Space Academy", category: "Security" },
    { title: "TCSiON Career Edge – Young Professional", issuer: "Tata Consultancy Services", category: "Professional" }
  ],

  // 8. Projects (Flagship Quartet)
  projects: [
    {
      id: "tripmozy",
      tabLabel: "01 // TRIPMOZY AI",
      badge: "FLAGSHIP AI PRODUCTION // 01",
      title: "TripMozy — AI Travel Planning Engine & Geospatial Itinerary Platform",
      category: "AI Travel Architecture • Geospatial Mapping • 150+ Destinations",
      stack: "Vanilla JS (ES6+), Google Gemini 3.8 Flash, Geoapify APIs, Leaflet.js, Tailwind CSS, Chart.js, Vercel",
      technologies: ["Google Gemini 3.8 Flash", "Leaflet.js", "Geoapify APIs", "Vanilla JS (ES6+)", "Tailwind CSS", "Chart.js", "CDP Headless Testing", "PWA"],
      image: "/assets/work-tripmozy.jpg",
      liveUrl: "https://ai-trip-planner.tripmozy.com/",
      githubUrl: "https://github.com/amanvishwakarma8016",
      bullets: [
        "Architected and deployed an end-to-end intelligent travel itinerary engine with 100% offline-resilient fallbacks across 150+ Indian destinations with 0 external service lock-in.",
        "Integrated Google Gemini 3.8 Flash via official generative AI endpoints to synthesize personalized day-by-day schedules, dynamic local tips, and natural-language itinerary refinements.",
        "Built a real-time Geospatial Radar & Route Visualizer using Leaflet.js and Geoapify Places API, plotting chronological sightseeing stops with live driving radius filters (15 km – 60 km).",
        "Designed deterministic Tour Pack Financial Engine (india_travel_engine.js) calculating room allocations, vehicle sizing (Sedan/SUV/Tempo), fuel surcharges, and permits.",
        "Developed automated test suite of 148 unit, integration, and headless Chrome DevTools Protocol (CDP) tests achieving 100% test pass rates.",
        "Delivered sub-second load time, zero-bundle-overhead PWA with custom print-to-PDF itinerary generation and session-persisted viewer metrics."
      ],
      stats: [
        { label: "AI ENGINE", value: "GEMINI 3.8 FLASH" },
        { label: "GEO-MAPPING", value: "LEAFLET + GEOAPIFY" },
        { label: "TEST SUITE", value: "148 CDP TESTS (100% PASS)" }
      ]
    },
    {
      id: "hillqueen",
      tabLabel: "02 // HILL QUEEN RESORT",
      badge: "HOSPITALITY NEXT.JS 14 // 02",
      title: "Hill Queen Eco Resort – Modern Hospitality Platform",
      category: "Full-Stack Hospitality Management & Direct Booking Engine",
      stack: "Next.js 14, React 18, TypeScript, Prisma ORM, SQL, Tailwind CSS",
      technologies: ["Next.js 14", "React 18", "TypeScript", "Prisma ORM", "SQL", "Tailwind CSS", "JWT Auth", "bcrypt", "Vercel"],
      image: "/assets/work-hillqueen.jpg",
      liveUrl: "https://www.hillqueenecoresorts.com",
      githubUrl: "https://github.com/amanvishwakarma8016",
      bullets: [
        "Built a full-stack hospitality platform using Next.js 14 (App Router), React 18, and TypeScript with mobile-first responsive architecture.",
        "Designed comprehensive database architecture using Prisma ORM and SQL managing 7 room categories and 13 tourist destinations.",
        "Implemented secure JWT authentication, bcrypt password hashing, and role-based access control for administrative resort management.",
        "Developed WhatsApp-based booking enquiry functionality, optimized SEO metadata, and deployed on custom domain with HTTPS on Vercel."
      ],
      stats: [
        { label: "FRAMEWORK", value: "NEXT.JS 14 + TS" },
        { label: "DATABASE", value: "PRISMA + SQL" },
        { label: "LIVE DOMAIN", value: "hillqueenecoresorts.com" }
      ]
    },
    {
      id: "jobhub",
      tabLabel: "03 // JOBHUB HQ",
      badge: "PRODUCTION MERN // 03",
      title: "JobHub HQ – Assemble Your Dream Career",
      category: "Earth's Mightiest Tech Career Network & Recruitment Ecosystem",
      stack: "React.js, Node.js, Express.js, MongoDB Atlas, Tailwind CSS",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "JWT Auth", "REST APIs", "Vercel"],
      image: "/assets/work-jobhub.jpg",
      liveUrl: "https://jobhub-tau.vercel.app/",
      githubUrl: "https://github.com/amanvishwakarma8016/jobhub",
      bullets: [
        "Built and deployed JobHub HQ ('Web Your Dream Career') — a high-impact recruitment network connecting candidates with top tech alliances.",
        "Engineered multi-role authentication and dynamic dashboards for job seekers ('Hero Seekers'), recruiters ('Verified Commanders'), and admins.",
        "Implemented smart keyword search across 10,000+ active missions with live location filters, hot tech mission tags, and resume uploads.",
        "Deployed frontend on Vercel, REST API backend on Render, and cloud database on MongoDB Atlas."
      ],
      stats: [
        { label: "NETWORK", value: "10,000+ MISSIONS" },
        { label: "ARCHITECTURE", value: "MERN STACK + JWT" },
        { label: "DEPLOYED ON", value: "jobhub-tau.vercel.app" }
      ]
    },
    {
      id: "ayudar",
      tabLabel: "04 // AYUDAR NGO",
      badge: "LIVE NGO PLATFORM // 04",
      title: "Ayudar Animal Welfare Foundation – NGO Web Platform",
      category: "Animal Welfare & Online Giving Platform",
      stack: "Next.js, React, Razorpay Gateway, Tailwind CSS, Vercel",
      technologies: ["Next.js", "React.js", "Razorpay Payment Gateway", "Tailwind CSS", "SEO Metadata", "Vercel"],
      image: "/assets/landing-ayudar.jpg",
      liveUrl: "https://animal-ngo-website.vercel.app/",
      githubUrl: "https://github.com/amanvishwakarma8016/ayudar-ngo",
      bullets: [
        "Built a responsive multi-page web platform for Ayudar Animal Welfare Foundation covering rescue reporting, pet adoption, cow care (Gaushala), shelter, volunteer sign-up and online donations.",
        "Developed pet adoption listings with individual animal profile pages, health status tags, and intuitive 'Adopt Me' request flows.",
        "Engineered an emergency 24/7 report-an-animal portal across Raniganj, Asansol & Durgapur, plus a donation system with preset amounts and secure Razorpay integration.",
        "Optimised for mobile-first viewports and search engines with structured SEO metadata, deployed live on Vercel."
      ],
      stats: [
        { label: "RESCUED", value: "1,250+ ANIMALS" },
        { label: "PAYMENT ENGINE", value: "RAZORPAY INTEGRATED" },
        { label: "LIVE DOMAIN", value: "animal-ngo-website.vercel.app" }
      ]
    }
  ],

  // 9. Landing Pages Gallery
  landingPages: [
    {
      id: "tripmozy-ai",
      title: "TRIPMOZY AI PLANNER",
      category: "AI Travel Architecture • Gemini 3.8 Flash • Leaflet",
      year: "2026",
      image: "/assets/work-tripmozy.jpg",
      liveUrl: "https://ai-trip-planner.tripmozy.com/",
      tags: ["Gemini AI", "Leaflet Maps", "Geoapify", "PWA", "150+ Cities"],
      description: "Search your dream destination & unlock adventure. Live intelligent travel itinerary engine with budget calculations in INR (₹) and geospatial radar."
    },
    {
      id: "jobhub-portal",
      title: "JOBHUB HQ CAREERS",
      category: "Earth's Mightiest Career Network & Tech Job Portal",
      year: "2026",
      image: "/assets/work-jobhub.jpg",
      liveUrl: "https://jobhub-tau.vercel.app/",
      tags: ["MERN Stack", "JWT Auth", "Hot Missions", "Vercel"],
      description: "'Web Your Dream Career' — High-impact recruitment platform connecting candidates with tech alliances across 10,000+ active missions."
    },
    {
      id: "ayudar-platform",
      title: "AYUDAR NGO FOUNDATION",
      category: "Animal Welfare Platform & Razorpay Giving",
      year: "2026",
      image: "/assets/landing-ayudar.jpg",
      liveUrl: "https://animal-ngo-website.vercel.app/",
      tags: ["Next.js", "Razorpay", "Live Vercel", "1,250+ Rescued"],
      description: "Live animal-rescue platform covering 24/7 rescue reporting across Raniganj & Asansol, pet adoption profiles, volunteer signups, and automated Razorpay donation receipts."
    },
    {
      id: "hillqueen-resort",
      title: "HILL QUEEN ECO RESORT",
      category: "Hospitality Management Platform & Booking System",
      year: "2026",
      image: "/assets/work-hillqueen.jpg",
      liveUrl: "https://www.hillqueenecoresorts.com",
      tags: ["Next.js 14", "Prisma ORM", "TypeScript", "SQL", "WhatsApp"],
      description: "Full-stack hospitality management platform with 7 room categories, 13 tourist destinations, interactive galleries, Prisma ORM database, and direct WhatsApp booking."
    }
  ],

  // 10. Works '26
  works26: [
    {
      id: "tripmozy-flagship",
      title: "TRIPMOZY AI ENGINE",
      headline: "Search your dream destination & unlock adventure.",
      role: "Lead Web Developer & AI Architect",
      client: "Tripmozy Pvt. Ltd.",
      stack: "Vanilla JS, Gemini 3.8 Flash, Leaflet.js, Geoapify, Vercel",
      year: "2026",
      image: "/assets/work-tripmozy.jpg",
      liveUrl: "https://ai-trip-planner.tripmozy.com/",
      description: "Architected end-to-end intelligent travel itinerary engine with 150+ Indian destinations, automated budgeting, and Leaflet geospatial radar."
    },
    {
      id: "hillqueen-resort",
      title: "HILL QUEEN RESORT",
      headline: "Discover your peaceful escape with modern hospitality engineering.",
      role: "Full-Stack Web Developer & Database Architect",
      client: "Hill Queen Eco Resort, Murguma, Purulia",
      stack: "Next.js 14, React 18, TypeScript, Prisma ORM, SQL, Tailwind, Vercel",
      year: "2026",
      image: "/assets/work-hillqueen.jpg",
      liveUrl: "https://www.hillqueenecoresorts.com",
      description: "Full-stack hospitality platform with 7 room categories, 13 tourist spots, Prisma ORM database architecture, JWT authentication, and WhatsApp booking workflows."
    },
    {
      id: "jobhub-mern",
      title: "JOBHUB HQ",
      headline: "Web your dream career with Earth's mightiest career network.",
      role: "Full-Stack Developer (MERN)",
      client: "JobHub HQ — Production Recruitment Platform",
      stack: "React, Node.js, Express, MongoDB Atlas, Tailwind",
      year: "2026",
      image: "/assets/work-jobhub.jpg",
      liveUrl: "https://jobhub-tau.vercel.app/",
      description: "Production MERN career network featuring multi-role authentication, 10,000+ tech missions, candidate application tracking, and cloud MongoDB Atlas."
    },
    {
      id: "ayudar-ngo",
      title: "AYUDAR FOUNDATION",
      headline: "Every animal deserves a second chance.",
      role: "Lead Full-Stack Web Developer",
      client: "Ayudar Animal Welfare NGO — Raniganj & Asansol",
      stack: "Next.js, React, Razorpay Gateway, Tailwind CSS, Vercel",
      year: "2026",
      image: "/assets/landing-ayudar.jpg",
      liveUrl: "https://animal-ngo-website.vercel.app/",
      description: "Animal rescue platform with 24/7 emergency rescue reporting across Raniganj, Asansol & Durgapur, pet adoption profiles, Gaushala support, and Razorpay donation system."
    },
    {
      id: "work-in-progress",
      title: "WORKING ON IT",
      headline: "Architecting the next high-performance digital experience.",
      role: "Full Stack Engineer & AI Architect",
      client: "Next Production Release // 2026",
      stack: "Next.js 15, React 19, TypeScript, Full-Stack MERN, Tailwind CSS",
      year: "2026",
      image: "/assets/work-in-progress.jpg",
      liveUrl: "#",
      description: "Currently under active development. Engineering a scalable, production-grade full-stack platform with high-velocity data pipelines and modern user experience."
    }
  ],

  // 11. Services Provided (Section 8)
  services: {
    heading: "THE SERVICES WE PROVIDE",
    subtext: "CREATING VISUALLY APPEALING AND FUNCTIONAL WEBSITES TAILORED TO CLIENT'S NEEDS AND BRAND, PROVIDING A CONSISTENT USER EXPERIENCE ACROSS PLATFORMS",
    items: [
      {
        id: "ai-systems",
        number: "01",
        title: "GENERATIVE AI ENGINES & GEOSPATIAL PLATFORMS",
        summary: "Production AI systems integrated with Google Gemini 3.8 Flash, multi-turn LLMs, and real-time mapping.",
        description: "Architecting intelligent domain-specific engines like TripMozy's AI Travel Platform. Combining generative AI prompts, Leaflet.js map radars, Geoapify geocoding, deterministic financial calculators, and zero-downtime offline fallbacks.",
        deliverables: "GOOGLE GEMINI 3.8 FLASH • LEAFLET.JS MAPS • GEOAPIFY RADAR • DETERMINISTIC BUDGET ENGINES • PWA"
      },
      {
        id: "mern-dev",
        number: "02",
        title: "FULL STACK MERN DEVELOPMENT",
        summary: "Production-ready web applications built with React, Node.js, Express, and MongoDB Atlas.",
        description: "End-to-end architecture from MongoDB schema design and RESTful APIs to high-performance React/Next.js frontends. Includes JWT authentication, role-based dashboards, and cloud deployment on Vercel and Render.",
        deliverables: "REACT / NEXT.JS • NODE & EXPRESS APIS • MONGODB ATLAS • JWT AUTH • VERCEL / RENDER"
      },
      {
        id: "ui-ux",
        number: "03",
        title: "UI/UX & FRONTEND ENGINEERING",
        summary: "Responsive, mobile-first layouts with Tailwind CSS, TypeScript, and state management.",
        description: "Transforming design systems and wireframes into pixel-perfect, accessible, and fast web experiences with Redux/Context API, custom animations, and clean reusable components.",
        deliverables: "TAILWIND CSS • TYPESCRIPT • REDUX / CONTEXT API • MOBILE-FIRST AUDIT • ACCESSIBILITY"
      },
      {
        id: "landing-page",
        number: "04",
        title: "LANDING PAGE DESIGN",
        summary: "High-converting editorial landing pages tailored for visionary product launches and personal brands.",
        description: "Engineered to capture attention and boost conversions with striking visual storytelling, high-contrast typography, and lightning-fast load times across devices.",
        deliverables: "OPTIMIZED STRUCTURE • CUSTOM 3D/ASSETS • TAILWIND / CODE • SEO AUDIT"
      },
      {
        id: "testing-automation",
        number: "05",
        title: "AUTOMATED TESTING & PERFORMANCE",
        summary: "Comprehensive unit, integration, and headless Chrome DevTools Protocol (CDP) test harnesses.",
        description: "Robust testing pipelines (148+ test suites) guaranteeing 100% test pass rates across cross-browser viewports, network throttle conditions, and sub-second PWA load times.",
        deliverables: "HEADLESS CDP HARNESSES • NODE.JS TEST SUITES • CROSS-BROWSER QA • 100% TEST PASS RATES"
      }
    ]
  },

  // 12. Contact & Footer (Section 9)
  contact: {
    heading: "LET'S TALK",
    subheading: "SEEKING A FULL-STACK DEVELOPER (MERN) & AI ENGINEER? LET'S BUILD TOGETHER.",
    ticker: "TRIPMOZY AI TRAVEL ENGINE • HILL QUEEN ECO RESORT • JOBHUB HQ • AYUDAR FOUNDATION • BCA GRADUATE & FULL STACK DEVELOPER • 4 INDUSTRY INTERNSHIPS •",
    availability: "AVAILABLE FOR FULL-TIME / TRAINEE ROLES & WORLDWIDE COMMISSIONS",
    copyright: "PORTFOLIO • ALL RIGHTS RESERVED © 2026",
    credit: "DESIGNED & DEVELOPED BY AMAN VISHWAKARMA",
    locationPill: "Raniganj, West Bengal, India"
  }
};

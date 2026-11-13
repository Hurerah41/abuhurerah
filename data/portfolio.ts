export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    description: string;
    badge?: string;
  }[];
}

export interface JourneyItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  type: 'experience' | 'education' | 'achievement';
  description: string;
  skills?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const portfolioData = {
  personal: {
    name: "Abu Hurerah",
    monogram: "AH.",
    title: "Full-Stack Web Developer",
    tagline: "Building scalable web apps, robust APIs, and modern animated UIs.",
    statusBadge: "Available for freelance & onsite · Karachi, Pakistan",
    location: "Karachi, Pakistan",
    email: "developerhurerah@gmail.com",
    github: "https://github.com/Hurerah41",
    linkedin: "https://www.linkedin.com/in/abu-hurerah-27585a343/",
    about: {
      bio: [
        "I'm a dedicated Full-Stack Web Developer based in Karachi, Pakistan, currently completing my Bachelor's in Computer Science (4th Semester) alongside a comprehensive Software Engineering Diploma from Aptech.",
        "I combine modern frontend aesthetics (React, Next.js, Tailwind CSS, Framer Motion) with solid, scalable backend engineering (Laravel, Node.js, Express, MySQL, MongoDB). My focus is writing clean, maintainable code that directly solves business bottlenecks.",
        "Whether it's orchestrating a complex clinic queue system like MediQueue or crafting high-converting modern client interfaces, I build for real performance, accessibility, and delight."
      ],
      quote: "Clean code is good. Code that solves a real human problem and scales effortlessly is great.",
      avatar: "/images/avatar.jpg",
    },
    stats: [
      { value: "5+", label: "Completed Projects" },
      { value: "14+", label: "Technologies Mastered" },
      { value: "3+", label: "Years Hands-on Experience" },
      { value: "100%", label: "Client Dedication" },
    ],
  },

  skills: [
    {
      name: "React.js",
      category: "Frontend",
      proficiency: "Advanced",
      icon: "Code2",
      description: "SPA architecture, custom hooks, state management, modern component design",
      badge: "Core Stack",
    },
    {
      name: "Next.js",
      category: "Frontend",
      proficiency: "Advanced",
      icon: "Layers",
      description: "App Router, SSR, SSG, Server Actions, SEO optimization",
      badge: "Preferred",
    },
    {
      name: "Laravel",
      category: "Backend",
      proficiency: "Advanced",
      icon: "Server",
      description: "MVC architecture, Eloquent ORM, REST APIs, authentication, Blade",
      badge: "Core Stack",
    },
    {
      name: "Node.js & Express",
      category: "Backend",
      proficiency: "Intermediate",
      icon: "Cpu",
      description: "RESTful microservices, middleware pipelines, JWT auth, async I/O",
      badge: "Full-Stack",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      proficiency: "Expert",
      icon: "Palette",
      description: "Custom design systems, responsive layouts, glassmorphism, fluid dark mode",
      badge: "Styling",
    },
    {
      name: "MySQL",
      category: "Database",
      proficiency: "Advanced",
      icon: "Database",
      description: "Relational schema design, complex joins, indexing, query optimization",
      badge: "Relational",
    },
    {
      name: "MongoDB",
      category: "Database",
      proficiency: "Intermediate",
      icon: "HardDrive",
      description: "NoSQL document modeling, Mongoose aggregation pipelines",
      badge: "NoSQL",
    },
    {
      name: "TypeScript & JavaScript",
      category: "Language",
      proficiency: "Advanced",
      icon: "Terminal",
      description: "ES6+, strict typing, async patterns, DOM manipulation",
      badge: "Languages",
    },
    {
      name: "Framer Motion",
      category: "Frontend",
      proficiency: "Intermediate",
      icon: "Sparkles",
      description: "Fluid page transitions, scroll-triggered reveals, spring physics, gesture controls",
      badge: "Animation",
    },
    {
      name: "WordPress & WooCommerce",
      category: "CMS",
      proficiency: "Advanced",
      icon: "Globe",
      description: "Custom store configuration, theme tweaks, payment gateway integration",
      badge: "eCommerce",
    },
    {
      name: "Git & GitHub",
      category: "DevOps",
      proficiency: "Advanced",
      icon: "GitBranch",
      description: "Branching workflows, version control, CI/CD collaboration, code review",
      badge: "Tools",
    },
    {
      name: "REST APIs & Postman",
      category: "Backend",
      proficiency: "Advanced",
      icon: "Send",
      description: "API contract testing, endpoint documentation, status code handling",
      badge: "Integration",
    },
  ],

  workProcess: [
    {
      step: "01",
      title: "Understand & Scope",
      tagline: "Clarity Before Code",
      description:
        "Every successful build starts with crystal-clear requirements. I dig deep into your product vision, target audience, core bottlenecks, and user workflows.",
      deliverables: ["Product specification", "User stories & flowcharts", "Tech stack selection"],
    },
    {
      step: "02",
      title: "Architecture & Design",
      tagline: "Scalable Foundations",
      description:
        "I create thoughtful wireframes, component hierarchies, and relational database schemas that accommodate future growth without painful refactoring.",
      deliverables: ["Component tree", "Database ERD / schemas", "Responsive UI layouts"],
    },
    {
      step: "03",
      title: "Develop & Test",
      tagline: "Precision Engineering",
      description:
        "Writing clean, modular code with strict typing and defensive programming. Continuous testing ensures snappy performance, security, and cross-browser reliability.",
      deliverables: ["Modular React/Next.js code", "Secure backend endpoints", "API & usability tests"],
    },
    {
      step: "04",
      title: "Launch & Support",
      tagline: "Smooth Deployment",
      description:
        "Deploying to production with environment safeguards, performance caching, SEO optimization, and client walkthrough documentation.",
      deliverables: ["Production deployment", "Performance audit", "Handoff documentation"],
    },
  ],

  projects: [
    {
      id: "mediqueue",
      title: "MediQueue",
      category: "Healthcare SaaS / Full-Stack",
      description:
        "A full-featured smart clinic queue and patient appointment management system designed to eliminate waiting room congestion and streamline doctor schedules.",
      tags: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Blade"],
      image: "/images/mediqueue.jpg",
      featured: true,
      githubUrl: "https://github.com/Hurerah41",
      liveUrl: "#mediqueue-case-study",
      highlights: [
        "Live token generation and digital queue display",
        "Role-based dashboards for Receptionists, Doctors, and Admin",
        "Patient appointment booking with automated queue slot calculations",
        "Analytics on average patient wait time and consultation duration",
      ],
      metrics: [
        { label: "Wait Time Reduction", value: "40%" },
        { label: "Architecture", value: "Laravel MVC" },
        { label: "Security", value: "Role-Based ACL" },
      ],
    },
    {
      id: "apex-auto",
      title: "Apex Auto Detailing",
      category: "Automotive / High-Converting Web",
      description:
        "Sleek, high-performance web experience for a premium auto detailing studio featuring smooth transitions, service tier calculators, and fast inquiry flows.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
      image: "/images/apex-auto.jpg",
      githubUrl: "https://github.com/Hurerah41",
      liveUrl: "https://github.com/Hurerah41",
      highlights: [
        "Dark-mode luxury aesthetic with custom micro-animations",
        "Interactive service package selector and booking form",
        "Optimized 100/100 Lighthouse performance score",
      ],
      metrics: [
        { label: "Performance", value: "98+ Lighthouse" },
        { label: "Design", value: "Luxury Dark" },
      ],
    },
    {
      id: "marketlink",
      title: "MarketLink eBasket",
      category: "eCommerce / MERN Stack",
      description:
        "Full-stack multi-category eCommerce application equipped with dynamic product catalog, real-time cart state, secure checkout, and comprehensive admin inventory manager.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      image: "/images/marketlink.jpg",
      githubUrl: "https://github.com/Hurerah41",
      liveUrl: "https://github.com/Hurerah41",
      highlights: [
        "Dynamic cart and checkout with order persistence in MongoDB",
        "Admin portal for product catalog, stock updates, and order tracking",
        "JWT-based user authentication and protected checkout routes",
      ],
      metrics: [
        { label: "Database", value: "MongoDB" },
        { label: "Auth", value: "JWT Protected" },
      ],
    },
    {
      id: "forge-athletics",
      title: "Forge Athletics",
      category: "Fitness & Lifestyle / Landing Page",
      description:
        "High-energy fitness coaching and athletic training platform with modern typography, interactive program selector, and membership conversion funnels.",
      tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      image: "/images/forge-athletics.jpg",
      githubUrl: "https://github.com/Hurerah41",
      liveUrl: "https://github.com/Hurerah41",
      highlights: [
        "Bold sports typography with impactful visual contrast",
        "Membership tiers and interactive class schedule overview",
        "Mobile-first responsive layout with fast load speeds",
      ],
      metrics: [
        { label: "Mobile First", value: "100% Fluid" },
        { label: "Conversion", value: "Optimized CTA" },
      ],
    },
    {
      id: "kcom-store",
      title: "KCOM WooCommerce Store",
      category: "eCommerce / WordPress",
      description:
        "Full-scale commercial WordPress & WooCommerce store build with custom styling, streamlined product filters, localized payment methods, and automated inventory sync.",
      tags: ["WordPress", "WooCommerce", "PHP", "CSS3"],
      image: "/images/kcom-store.jpg",
      githubUrl: "https://github.com/Hurerah41",
      liveUrl: "https://github.com/Hurerah41",
      highlights: [
        "Custom child-theme styling matching client brand guidelines",
        "Smooth payment gateway integration and order notification pipeline",
        "Optimized speed caching and database query trimming",
      ],
      metrics: [
        { label: "Platform", value: "WooCommerce" },
        { label: "Gateways", value: "Integrated" },
      ],
    },
  ],

  caseStudy: {
    id: "mediqueue",
    title: "MediQueue: Smart Clinic Queue & Appointment System",
    subtitle: "A deep dive into tackling patient wait times and reception bottlenecks.",
    summary:
      "Traditional clinics suffer from overcrowding, lost tokens, agitated patients, and overwhelmed staff. MediQueue was architected as an all-in-one system providing real-time queuing, doctor consultation pacing, and clear status displays.",
    problem:
      "Patients frequently wait 60 to 90 minutes without knowing when they will be seen. Receptionists struggle with manual paper logs, duplicate entries, and frustrated patients crowding the reception counter.",
    solution:
      "A centralized web application built with Laravel and MySQL. Patients receive instant digital queue numbers; doctors have a one-click 'Call Next' interface that instantly updates the waiting room screen and estimates accurate consultation wait times.",
    role: "Full-Stack Software Engineer (System Architecture, Database Schema, Backend APIs, UI Implementation)",
    stack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Blade Engine"],
    features: [
      {
        title: "Digital Queue Display",
        desc: "High-contrast waiting room screen showing current serving token and upcoming queue numbers in real time.",
      },
      {
        title: "Doctor Consultation Dashboard",
        desc: "One-click 'Call Next', 'Mark In-Consultation', and 'Complete' workflow designed for fast zero-friction usage during busy clinic hours.",
      },
      {
        title: "Reception Booking & Token Dispenser",
        desc: "Fast patient registration and token dispatch with emergency prioritizing and doctor assignment.",
      },
      {
        title: "Clinic Analytics",
        desc: "Visual charts detailing average consultation durations, peak arrival hours, and total daily throughput.",
      },
    ],
    results: [
      "Simulated up to 40% reduction in perceived patient wait times.",
      "Eliminated 100% of paper-based log confusion and lost appointment slips.",
      "Demonstrated at university software exhibition with high commendations.",
    ],
  },

  journey: [
    {
      period: "Aug 2023 – Present",
      title: "Chat & Sales Support Representative",
      organization: "Customer Engagement & Tech Services",
      location: "Karachi, Pakistan",
      type: "experience",
      description:
        "Providing first-class client assistance, problem resolution, and communication for high-volume inquiries. Honed deep empathy for user pain points, requirement elicitation, and cross-timezone collaboration.",
      skills: ["Client Communication", "Problem Resolution", "Active Listening", "CRM Systems"],
    },
    {
      period: "2023 – Present (In Progress)",
      title: "Bachelor of Science in Computer Science (BSCS)",
      organization: "University Level (4th Semester)",
      location: "Karachi, Pakistan",
      type: "education",
      description:
        "Studying core computer science theory including Object-Oriented Programming, Data Structures & Algorithms, Relational Database Management Systems, and Software Engineering methodologies.",
      skills: ["Algorithms", "Data Structures", "OOP", "DBMS", "Software Engineering"],
    },
    {
      period: "2022 – 2024",
      title: "Aptech Certified Software Engineer (ACSE)",
      organization: "Aptech Computer Education",
      location: "Karachi, Pakistan",
      type: "education",
      description:
        "Rigorous 2-year diploma specializing in full-stack web and enterprise software development. Covered modern frontend frameworks, backend architectures with Laravel and Node.js, database administration, and project lifecycles.",
      skills: ["Full-Stack Engineering", "Laravel", "React", "Database Architecture", "REST APIs"],
    },
    {
      period: "2024",
      title: "MediQueue Innovation Showcase",
      organization: "Aptech Tech & Project Exhibition",
      location: "Karachi, Pakistan",
      type: "achievement",
      description:
        "Designed, built, and presented the MediQueue clinic management platform before faculty judges and industry evaluators. Received standout recognition for practical utility and clean architecture.",
      skills: ["System Architecture", "Product Presentation", "Real-World Impact"],
    },
  ],

  faq: [
    {
      question: "What core technologies do you specialize in?",
      answer:
        "I specialize across the full web stack. On the frontend, I focus on React, Next.js, TypeScript, and Tailwind CSS with smooth Framer Motion animations. On the backend, I have strong experience building robust systems with Laravel, PHP, Node.js, Express, MySQL, and MongoDB. I also work with WordPress and WooCommerce.",
    },
    {
      question: "Can you handle both UI design implementation and backend architecture?",
      answer:
        "Yes, absolutely! I bridge the gap between polished, responsive UI design and dependable backend logic. I build relational database schemas, secure REST APIs, authentication pipelines, and match them with pixel-perfect responsive user interfaces.",
    },
    {
      question: "Are you available for freelance projects or full-time opportunities?",
      answer:
        "Yes, I am currently available for freelance client projects, contract roles, and full-time opportunities in Karachi (onsite/hybrid) as well as remote positions worldwide.",
    },
    {
      question: "How do we collaborate and communicate during a project?",
      answer:
        "Clear communication is my top priority. I communicate via email (developerhurerah@gmail.com), WhatsApp, or Slack, providing regular progress demos, Git version control updates, and scheduled milestones so you always know the exact status of your project.",
    },
    {
      question: "How quickly can you start on a new project?",
      answer:
        "Depending on the scope, I can usually begin onboarding and architectural planning within 24 to 48 hours. Feel free to send me a message through the contact form or email me directly!",
    },
  ],
};

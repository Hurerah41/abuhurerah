# Abu Hurerah — Full-Stack Web Developer Portfolio

A modern, high-performance portfolio website built with **Next.js (App Router)**, **React 19**, **Framer Motion**, and **Tailwind CSS**.

Converted and upgraded from the original single-file HTML/CSS portfolio into a modular, production-grade architecture.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (*Archivo* for bold headlines, *Inter* for body, *JetBrains Mono* for technical badges)

---

## 📁 Project Structure

```text
abuhurerah-portfolio/
├── app/
│   ├── globals.css              # Custom styling, neon glows, scrollbars & grid patterns
│   ├── layout.tsx               # App Shell, SEO metadata & OpenGraph configuration
│   └── page.tsx                 # Composed main view with all sections
├── components/
│   ├── Navbar.tsx               # Glassmorphism header, brand monogram, mobile drawer
│   ├── Hero.tsx                 # Ambient animated glows, headline, CTA & key metrics
│   ├── About.tsx                # Bio, avatar with neon gradient border, credentials
│   ├── SkillsSection.tsx        # Interactive category filter & skills grid with badges
│   ├── Projects.tsx             # 5 project cards with category filters, mockups & links
│   ├── MediQueueCaseStudy.tsx   # Interactive case study tabs (Problem, Solution, Impact)
│   ├── WorkProcess.tsx          # 4-stage engineering lifecycle cards
│   ├── Journey.tsx              # Career & education timeline with milestone indicators
│   ├── FAQ.tsx                  # Animated collapsible accordion
│   ├── Contact.tsx              # Interactive contact form with validation & mailto fallback
│   └── Footer.tsx               # Monogram, quick links, social channels & scroll-to-top
├── data/
│   └── portfolio.ts             # Central typed data model for projects, skills, and info
├── public/
│   └── images/                  # Extracted project mockups & avatar
│       ├── apex-auto.jpg
│       ├── avatar.jpg
│       ├── forge-athletics.jpg
│       ├── kcom-store.jpg
│       ├── marketlink.jpg
│       └── mediqueue.jpg
└── package.json
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

'use client';

import { useState, useRef } from 'react';

const skillsData = [
  {
    small: 'Foundation of every project',
    title: 'HTML & CSS',
    desc: 'Clean, semantic, responsive layouts that look sharp on every screen.',
  },
  {
    small: 'Frontend + server',
    title: 'JavaScript',
    desc: 'Interactive interfaces and logic, on the frontend and the server.',
  },
  {
    small: 'MarketLink · Apex',
    title: 'React & Next.js',
    desc: 'Fast component-based apps, like MarketLink and Apex Auto Detailing.',
  },
  {
    small: 'Used in every project',
    title: 'Tailwind CSS',
    desc: 'Modern, consistent styling built quickly without heavy custom CSS.',
  },
  {
    small: 'MediQueue',
    title: 'PHP & Laravel',
    desc: 'Secure backends, authentication and workflows, like MediQueue.',
  },
  {
    small: 'MarketLink · Learning',
    title: 'Node.js & Express',
    desc: 'APIs and server logic for MERN apps. Currently going deeper here.',
  },
  {
    small: 'MediQueue · MarketLink',
    title: 'MySQL & MongoDB',
    desc: 'Well-structured relational and document databases.',
  },
  {
    small: 'KCOM store',
    title: 'WordPress & WooCommerce',
    desc: 'Business sites and online stores that are easy to manage.',
  },
];

export default function Skills() {
  const [userMode, setUserMode] = useState<'auto' | 'carousel' | 'grid'>('auto');
  const carRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carRef.current) {
      carRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carRef.current) {
      carRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (userMode === 'grid') return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollLeft();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollRight();
    }
  };

  const isGrid = userMode === 'grid';
  const isCarousel = userMode === 'carousel';

  return (
    <section className="sec" id="skills">
      <div className="blk">
        <span className="tag">Why Choose me</span>
        <div className="sh">
          <h2>
            My Extensive<br />
            List of Skills
          </h2>
          <div className="r">
            Frontend, backend, databases and CMS, all the tools I use to take a project from idea to launch.
            <hr />
            <div className={`sk-controls ${userMode === 'auto' ? 'mode-auto-controls' : ''}`}>
              <div className={`sk-toggle ${userMode}`} role="radiogroup" aria-label="Skills view">
                <button
                  type="button"
                  className={`sk-tbtn sk-tbtn-car ${isCarousel ? 'active' : ''}`}
                  onClick={() => setUserMode('carousel')}
                  aria-pressed={isCarousel}
                >
                  Carousel
                </button>
                <button
                  type="button"
                  className={`sk-tbtn sk-tbtn-grid ${isGrid ? 'active' : ''}`}
                  onClick={() => setUserMode('grid')}
                  aria-pressed={isGrid}
                >
                  Grid
                </button>
              </div>

              {!isGrid && (
                <div className="ar">
                  <button id="pv" aria-label="Previous" onClick={scrollLeft}>
                    ←
                  </button>
                  <button id="nx" aria-label="Next" onClick={scrollRight}>
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`sk-container ${
            userMode === 'auto' ? 'mode-auto' : isGrid ? 'sk-grid' : 'car'
          }`}
          id="car"
          ref={carRef}
          tabIndex={!isGrid ? 0 : undefined}
          onKeyDown={handleKeyDown}
          role="region"
          aria-label="Skills list"
        >
          {skillsData.map((item, idx) => (
            <article className="sk" key={idx} tabIndex={0}>
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="32" cy="32" rx="26" ry="10" />
                <ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(60 32 32)" />
                <ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(120 32 32)" />
                <circle className="a" cx="32" cy="32" r="4" />
              </svg>
              <div>
                <small>{item.small}</small>
                <h3>{item.title}</h3>
              </div>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

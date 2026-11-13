'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect reduced motion settings
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let io: IntersectionObserver | null = null;
    let timer: ReturnType<typeof setTimeout>;

    const init = () => {
      document.documentElement.classList.add('js');
      const elements = document.querySelectorAll(
        '.blk, .mid h2, .jc, details, .ct, .qt, .pc, .wc, .cta-blk'
      );

      if (!('IntersectionObserver' in window)) {
        elements.forEach((el) => el.classList.add('in'));
        return;
      }

      const vh = window.innerHeight;

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '40px' }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in or near viewport, mark as visible immediately to avoid flash or layout recalculation
        if (rect.top < vh + 100 && rect.bottom > -50) {
          el.classList.add('in');
        } else {
          el.classList.add('rv');
          io?.observe(el);
        }
      });
    };

    // Defer initialization to avoid blocking critical initial paint
    timer = setTimeout(init, 120);

    return () => {
      clearTimeout(timer);
      if (io) io.disconnect();
    };
  }, []);

  return null;
}

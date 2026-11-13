export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="bl m"></div>
      <div className="bl l"></div>
      <div className="bl l2"></div>
      <div className="w">
        <span className="av">
          <span className="dot"></span>Available for freelance &amp; onsite · Karachi, Pakistan
        </span>
        <h1>
          Full-Stack <mark>Developer</mark> for<br />
          Your Website <mark>Projects.</mark>
        </h1>
        <div className="hr">
          <div className="soc">
            <a
              href="https://github.com/Hurerah41"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/abu-hurerah-27585a343/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
            <a href="mailto:developerhurerah@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
            <small>@Hurerah41</small>
          </div>
          <div>
            <p>
              Building websites and web apps with Laravel, React, Node.js and WordPress. Your trusted partner for design-to-database development, from first idea to launch.
            </p>
            <div className="go">
              <a className="btn b" href="#contact">
                <span className="ic">✉</span>Start a Project
              </a>
              <a className="btn" href="#projects">
                <span className="ic">↓</span>See my work
              </a>
            </div>
            <div className="stats">
              <div>
                <b>5</b>
                <span>Projects built</span>
              </div>
              <div>
                <b className="stat-sm">Laravel + React + Node</b>
                <span>Core stack</span>
              </div>
              <div>
                <b>Karachi</b>
                <span>Freelance &amp; onsite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

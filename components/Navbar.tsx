export default function Navbar() {
  return (
    <header className="nav">
      <nav>
        <a className="lg" href="#top" aria-label="Abu Hurerah Portfolio">
          <span className="lg-text">Hurerah</span>
          <span className="lg-badge">.dev</span>
        </a>
        <div className="ls" role="navigation" aria-label="Main menu">
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="btn b nav-cta" href="#contact">
          <span className="ic">↗</span>Start Project
        </a>
      </nav>
    </header>
  );
}

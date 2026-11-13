export default function Faq() {
  return (
    <section className="sec lt a" id="faq" style={{ paddingTop: '80px' }}>
      <span className="tag" style={{ color: 'var(--ink)' }}>
        FAQ
      </span>
      <h2 style={{ fontSize: 'clamp(30px,5vw,56px)', margin: '18px 0 20px', lineHeight: 1.15 }}>
        Common <mark>Questions</mark>
      </h2>
      <details>
        <summary>Are you available for freelance work?</summary>
        <p>Yes. I'm available for both freelance projects and onsite jobs.</p>
      </details>
      <details>
        <summary>What kind of projects do you take on?</summary>
        <p>
          Business websites, WordPress and WooCommerce stores, and full-stack web apps with logins, dashboards and databases.
        </p>
      </details>
      <details>
        <summary>Which technologies do you use?</summary>
        <p>
          HTML, CSS, JavaScript, Tailwind, React and Next.js on the frontend; Laravel, PHP, Node.js and Express on the backend; MySQL and MongoDB for data; and WordPress for content sites.
        </p>
      </details>
      <details>
        <summary>How do we get started?</summary>
        <p>
          Send me a short message about your idea using the form below or email me. I'll reply to discuss scope and timeline.
        </p>
      </details>
    </section>
  );
}

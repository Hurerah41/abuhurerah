export default function Process() {
  const steps = [
    {
      num: '01',
      phase: 'Discovery',
      title: 'Understand & Align',
      desc: 'I dive deep into your project vision, target audience, and core business goals before touching any code. No assumptions—just clarity.',
      deliverables: ['Requirements Doc', 'User Flow', 'Tech Selection'],
      highlight: false,
    },
    {
      num: '02',
      phase: 'Strategy',
      title: 'Architect & Scope',
      desc: 'We map out a clear roadmap, database schema, and milestone schedule tailored to your timeline and budget so you know exactly what to expect.',
      deliverables: ['Database Schema', 'Milestone Plan', 'Fixed Timeline'],
      highlight: true,
    },
    {
      num: '03',
      phase: 'Development',
      title: 'Build & Iterate',
      desc: 'I develop frontend and backend with clean, maintainable code. You receive regular interactive staging previews with zero surprises.',
      deliverables: ['Clean Codebase', 'Weekly Demos', 'Responsive UI'],
      highlight: false,
    },
    {
      num: '04',
      phase: 'Launch & Care',
      title: 'Deliver & Support',
      desc: 'Rigorous testing, performance optimization, and smooth deployment to your server. Plus post-launch support so you are never left stranded.',
      deliverables: ['Live Deployment', 'Speed Audit', 'Post-Launch Care'],
      highlight: false,
    },
  ];

  return (
    <section className="sec" id="process">
      <div className="blk">
        <span className="tag">Work Process</span>
        <div className="sh">
          <h2>My Work Process</h2>
          <div className="r">
            A battle-tested 4-step framework engineered for zero stress, total transparency, and predictable results.
          </div>
        </div>
        <div className="wp">
          {steps.map((step) => (
            <div key={step.num} className={`wc ${step.highlight ? 'hl' : ''}`}>
              <div className="t">
                <span className="wc-phase">{step.phase}</span>
                <span className="wc-num">{step.num}</span>
              </div>
              <h3 className="wc-title">{step.title}</h3>
              <p className="wc-desc">{step.desc}</p>
              <div className="wc-tags">
                {step.deliverables.map((item, idx) => (
                  <span key={idx} className="wc-tag">
                    <span className="wc-check">✓</span> {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

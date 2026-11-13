export default function Journey() {
  return (
    <section className="sec lt" id="journey" style={{ paddingTop: '90px' }}>
      <span className="tag" style={{ color: 'var(--ink)' }}>
        Experience
      </span>
      <h2 style={{ fontSize: 'clamp(30px,5vw,56px)', margin: '18px 0 0', lineHeight: 1.15 }}>
        My <mark>Journey</mark>
      </h2>
      <div className="jr">
        <div className="jc">
          <span className="d">Aug 2023 – Now</span>
          <h3>Chat &amp; Sales Support Representative</h3>
          <p>
            About 3 years of talking to customers every day, which taught me to listen first and solve the real problem.
          </p>
        </div>
        <div className="jc">
          <span className="d">Now</span>
          <h3>BS Computer Science</h3>
          <p>Currently in the 4th semester of my bachelor's degree.</p>
        </div>
        <div className="jc">
          <span className="d">Now</span>
          <h3>Diploma in Software Engineering, Aptech</h3>
          <p>Pursuing a professional software engineering diploma alongside my degree.</p>
        </div>
        <div className="jc">
          <span className="d">Competition</span>
          <h3>Built MediQueue</h3>
          <p>
            A large Laravel healthcare platform created for a vision competition. Now learning Node.js too.
          </p>
        </div>
      </div>
    </section>
  );
}

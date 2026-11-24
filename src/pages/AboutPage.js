/**
 * About Page
 * 1. Hero headline
 * 2. Bio & context with initials badge
 * 3. Milestones that mattered
 * 4. Certificates & continued study
 */
window.AboutPage = function AboutPage() {
  const { personal, milestones, certificates } = window.portfolioData;

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow-text">ABOUT / 02</span>
          <h1 className="page-title">
            Curious by nature.{' '}
            <span className="text-amber">Intentional</span> by practice.
          </h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-white border-top-subtle">
        <div className="container about-grid">
          <div className="about-badge-card">
            <div className="about-amber-arc" aria-hidden="true"></div>
            <span className="about-initials">{personal.initials}</span>
            <div className="about-badge-meta">
              <span>Based in {personal.location}</span>
              <span>Working everywhere</span>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow-text">A LITTLE CONTEXT</span>
            <h2 className="section-title">
              I'm {personal.name} — a builder who likes making complicated things
              feel simple.
            </h2>
            <p>
              I work across product strategy, interface design, and development.
              That range helps me see both the system and the small moments that
              make it feel human.
            </p>
            <p>
              My work is grounded in curiosity, close collaboration, and the
              belief that useful technology should be understandable to the
              people it serves.
            </p>

            <div className="about-chips">
              <span className="info-chip">📍 {personal.location}</span>
              <span className="info-chip">🕒 {personal.timezone}</span>
              <span className="info-chip">✉ Open to collaborations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-surface">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="eyebrow-text">RECOGNITION / 03</span>
              <h2 className="section-title">Milestones that mattered.</h2>
            </div>
            <p className="section-aside">
              A few moments of validation — each one shared with generous
              collaborators.
            </p>
          </div>

          <div className="milestones-grid">
            {milestones.map((item) => (
              <article key={item.id} className="milestone-card">
                <div className="milestone-top">
                  <span className="milestone-year">{item.year}</span>
                  <span className="milestone-icon" aria-hidden="true">★</span>
                </div>
                <span className="milestone-badge">{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="section-white">
        <div className="container">
          <span className="eyebrow-text">ALWAYS LEARNING / 04</span>
          <h2 className="section-title">Certificates &amp; continued study.</h2>

          <div className="certificates-list">
            {certificates.map((cert) => (
              <div key={cert.id} className="certificate-row">
                <div className="certificate-left">
                  <span className="certificate-icon" aria-hidden="true">📖</span>
                  <div>
                    <h3>{cert.title}</h3>
                    <span className="certificate-issuer">{cert.issuer}</span>
                  </div>
                </div>
                <span className="certificate-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

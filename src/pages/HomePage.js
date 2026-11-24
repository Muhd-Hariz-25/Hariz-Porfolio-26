/**
 * Home Page
 * 1. Hero section with amber keyword highlight & portrait card
 * 2. Selected Work (alternating project rows)
 * 3. Clarity before complexity (3-column principles)
 */
window.HomePage = function HomePage({ onNavigate, onSelectProject }) {
  const { projects, personal } = window.portfolioData;
  const featuredProjects = projects.filter((p) => p.featured);
  const ProjectCard = window.ProjectCard;

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          {/* Left Hero Visual */}
          <div className="hero-visual" aria-hidden="true">
            <div className="portrait-card">
              <div className="portrait-ring"></div>
              <div className="portrait-amber-circle"></div>
              <div className="portrait-avatar">
                <span>{personal.initials}</span>
              </div>
              <div className="portrait-card-footer">
                <span>{personal.name}</span>
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          <div className="hero-copy">
            <span className="eyebrow-badge">
              <span className="status-dot" aria-hidden="true"></span>
              AVAILABLE FOR SELECT PROJECTS
            </span>

            <h1 className="hero-title">
              I turn complex ideas into <span className="text-amber">useful</span>{' '}
              digital products.
            </h1>

            <p className="hero-subtitle">
              Product-minded developer and designer creating thoughtful tools at
              the intersection of technology, systems, and human needs.
            </p>

            <div className="hero-actions">
              <a
                href="#portfolio"
                className="btn btn-amber"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('portfolio');
                }}
              >
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a
                href="#about"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('about');
                }}
              >
                More about me <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="section-surface">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="eyebrow-text">01 / SELECTED WORK</span>
              <h2 className="section-title">A few things I've built.</h2>
            </div>
            <p className="section-aside">
              Projects shaped by clear thinking, careful craft, and measurable
              usefulness.
            </p>
          </div>

          <div className="featured-rows">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`featured-row ${index % 2 === 1 ? 'reverse' : ''}`}
              >
                <ProjectCard
                  project={project}
                  onSelectProject={onSelectProject}
                  variant="row"
                />
              </div>
            ))}
          </div>

          <div className="section-center-cta">
            <a
              href="#portfolio"
              className="btn btn-amber"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('portfolio');
              }}
            >
              See all projects <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-white">
        <div className="container">
          <span className="eyebrow-text">02 / HOW I WORK</span>
          <h2 className="section-title">Clarity before complexity.</h2>

          <div className="principles-grid">
            <div className="principle-card">
              <span className="principle-num">01</span>
              <div className="principle-icon" aria-hidden="true">⚡</div>
              <h3>Find the signal</h3>
              <p>Start with the real problem, not the loudest assumption.</p>
            </div>
            <div className="principle-card">
              <span className="principle-num">02</span>
              <div className="principle-icon" aria-hidden="true">◫</div>
              <h3>Shape the system</h3>
              <p>Connect the parts so the whole experience feels inevitable.</p>
            </div>
            <div className="principle-card">
              <span className="principle-num">03</span>
              <div className="principle-icon" aria-hidden="true">&lt;/&gt;</div>
              <h3>Build with care</h3>
              <p>Make it fast, accessible, and genuinely pleasant to use.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

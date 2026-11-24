/**
 * Portfolio Page
 * 1. Hero headline
 * 2. Category filter pills + responsive 3-column project grid
 * 3. High-contrast dark navy "Hackathons & experiments" band
 */
window.PortfolioPage = function PortfolioPage({ onSelectProject }) {
  const { useState } = React;
  const [activeFilter, setActiveFilter] = useState('All');
  const { projects, hackathons } = window.portfolioData;
  const ProjectCard = window.ProjectCard;

  const categories = ['All', 'AI', 'Apps', 'Automation', 'Python', 'Web Apps'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow-text">PORTFOLIO / 03</span>
          <h1 className="page-title">
            Selected work,{' '}
            <span className="text-amber">built to matter.</span>
          </h1>
          <p className="hero-subtitle">
            A collection of products, experiments, and collaborations across AI,
            automation, and the web.
          </p>
        </div>
      </section>

      {/* Filter Pills + Grid */}
      <section className="section-white">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter projects by category">
            <span className="filter-label">Filter by</span>
            <div className="filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={onSelectProject}
                variant="grid"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dark Navy Hackathons & Experiments Band */}
      <section className="section-dark">
        <div className="container">
          <span className="eyebrow-text text-amber">BUILD FAST, LEARN FASTER</span>
          <h2 className="section-title text-white">
            Hackathons &amp; experiments
          </h2>
          <p className="dark-subtitle">
            Short, intense builds where curiosity gets to lead.
          </p>

          <div className="hackathons-grid">
            {hackathons.map((hack) => (
              <div key={hack.id} className="hackathon-card">
                <span className="hackathon-year">{hack.year}</span>
                <div className="hackathon-bottom">
                  <h3>{hack.title}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

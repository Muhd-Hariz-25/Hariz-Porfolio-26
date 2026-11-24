/**
 * Reusable Project Card
 * Used on both the Home page (alternating rows) and Portfolio page (grid).
 */
window.ProjectCard = function ProjectCard({ project, onSelectProject, variant = 'grid' }) {
  return (
    <article className={`project-card project-card--${variant}`}>
      {/* Stylized Thumbnail */}
      <div className={`project-thumb theme-${project.colorTheme}`}>
        <span className="thumb-number">{project.number}</span>
        <div className="thumb-window">
          <div className="thumb-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="thumb-cat">{project.category.toUpperCase()}</span>
          <span className="thumb-initials">{project.initials}</span>
        </div>
        <span className="thumb-year">{project.year} / SELECTED</span>
      </div>

      {/* Card Body */}
      <div className="project-body">
        <div className="project-meta">
          <span className="project-category">{project.category.toUpperCase()}</span>
          <span className="project-year">{project.year}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        {variant === 'row' && (
          <div className="project-impact">
            <span className="impact-value">{project.impact}</span>
            <span className="impact-label">{project.impactLabel}</span>
          </div>
        )}

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="btn-link"
          onClick={() => onSelectProject(project)}
        >
          {variant === 'row' ? 'View case study' : 'View project'}{' '}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
};

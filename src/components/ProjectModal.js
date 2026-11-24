/**
 * Project Case Study Modal
 * Opens when a user clicks "View project" or "View case study" so there are no dead links.
 */
window.ProjectModal = function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="eyebrow-text">
              {project.category.toUpperCase()} / {project.year}
            </span>
            <h2 id="modal-project-title" className="modal-title">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close case study"
          >
            ✕
          </button>
        </div>

        <p className="modal-summary">{project.summary}</p>

        <div className="modal-metrics">
          <div className="modal-metric-box">
            <span className="impact-value">{project.impact}</span>
            <span className="impact-label">{project.impactLabel}</span>
          </div>
          <div className="modal-metric-box">
            <span className="meta-label">Role</span>
            <span className="meta-value">{project.caseStudy.role}</span>
          </div>
        </div>

        <div className="modal-sections">
          <div className="modal-section">
            <h3>The Problem</h3>
            <p>{project.caseStudy.problem}</p>
          </div>
          <div className="modal-section">
            <h3>The Approach</h3>
            <p>{project.caseStudy.solution}</p>
          </div>
          <div className="modal-section">
            <h3>Outcome</h3>
            <p>{project.caseStudy.outcome}</p>
          </div>
        </div>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

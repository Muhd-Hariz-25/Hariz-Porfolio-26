/**
 * Contact Page
 * 1. Hero headline + availability box
 * 2. "Drop me a line." email copy button + social links
 * 3. Closing statement
 */
window.ContactPage = function ContactPage() {
  const { useState } = React;
  const [copied, setCopied] = useState(false);
  const { personal } = window.portfolioData;

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container contact-hero-grid">
          <div>
            <span className="eyebrow-text">CONTACT / 04</span>
            <h1 className="page-title">
              Let's make something{' '}
              <span className="text-amber">useful together.</span>
            </h1>
            <p className="hero-subtitle">
              Have a thoughtful idea, a complex problem, or just want to compare
              notes? My inbox is open.
            </p>
          </div>

          <div className="availability-box">
            <span className="eyebrow-badge">
              <span className="status-dot" aria-hidden="true"></span>
              CURRENT AVAILABILITY
            </span>
            <h3>{personal.availability}</h3>
            <p>{personal.availabilityNote}</p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section-surface">
        <div className="container contact-details-grid">
          <div>
            <span className="eyebrow-text">THE EASIEST WAY</span>
            <h2 className="section-title">Drop me a line.</h2>
            <a href={`mailto:${personal.email}`} className="email-display">
              {personal.email} <span aria-hidden="true">↗</span>
            </a>
            <div className="copy-row">
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleCopyEmail}
              >
                {copied ? '✓ Copied!' : '❐ Copy email'}
              </button>
            </div>
            <p className="reply-note">I usually reply within two working days.</p>
          </div>

          <div>
            <span className="eyebrow-text">ELSEWHERE ONLINE</span>
            <div className="social-cards">
              <a
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                <div className="social-card-left">
                  <span className="social-badge" aria-hidden="true">in</span>
                  <div>
                    <span className="social-label">LinkedIn</span>
                    <strong>{personal.linkedin}</strong>
                  </div>
                </div>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={`https://${personal.github}`}
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                <div className="social-card-left">
                  <span className="social-badge" aria-hidden="true">&lt;/&gt;</span>
                  <div>
                    <span className="social-label">GitHub</span>
                    <strong>{personal.github}</strong>
                  </div>
                </div>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-white">
        <div className="container closing-banner">
          <h2>Good work starts with a good conversation.</h2>
          <span className="closing-icon" aria-hidden="true">☍</span>
        </div>
      </section>
    </div>
  );
};

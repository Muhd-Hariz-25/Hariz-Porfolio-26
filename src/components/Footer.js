/**
 * Shared Site Footer
 * Includes the "Let's make it real" CTA banner and bottom copyright/social bar.
 */
window.Footer = function Footer({ onNavigate }) {
  const { name, initials, location, tagline, email } = window.portfolioData.personal;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href="#home"
              className="brand-logo"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
            >
              <span className="brand-box">{initials}</span>
              <span className="brand-dot" aria-hidden="true"></span>
            </a>
            <p className="footer-tagline">{tagline}</p>
          </div>

          <div className="footer-cta">
            <span className="footer-cta-eyebrow">Have a project in mind?</span>
            <a
              href="#contact"
              className="footer-cta-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
            >
              Let's make it real <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 {name}</span>

          <div className="footer-socials">
            <a
              href="#contact"
              className="social-icon-btn"
              aria-label="GitHub"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
            >
              &lt;/&gt;
            </a>
            <a
              href="#contact"
              className="social-icon-btn"
              aria-label="LinkedIn"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
            >
              in
            </a>
            <a
              href={`mailto:${email}`}
              className="social-icon-btn"
              aria-label="Email"
            >
              ✉
            </a>
          </div>

          <span className="footer-location">Built with care in {location}</span>
        </div>
      </div>
    </footer>
  );
};

/**
 * Shared Navigation Bar
 * Supports hash routing (#home, #about, #portfolio, #contact) and a Portfolio dropdown.
 */
window.Navbar = function Navbar({ currentPage, onNavigate }) {
  const { useState } = React;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { initials } = window.portfolioData.personal;

  const handleNavClick = (e, page) => {
    e.preventDefault();
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="site-header">
      <div className="container navbar-inner">
        {/* Brand / Initials */}
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Home"
        >
          <span className="brand-box">{initials}</span>
          <span className="brand-dot" aria-hidden="true"></span>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <a
            href="#home"
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>

          {/* Portfolio Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger ${
                currentPage === 'portfolio' ? 'active' : ''
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              Portfolio <span className="chevron">▾</span>
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu" role="menu">
                <a
                  href="#portfolio"
                  className="dropdown-item"
                  onClick={(e) => handleNavClick(e, 'portfolio')}
                >
                  <span>All projects</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="#portfolio"
                  className="dropdown-item"
                  onClick={(e) => handleNavClick(e, 'portfolio')}
                >
                  <span>Hackathons</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="#portfolio"
                  className="dropdown-item"
                  onClick={(e) => handleNavClick(e, 'portfolio')}
                >
                  <span>Service learning</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
        </nav>

        {/* Primary Header CTA */}
        <a
          href="#contact"
          className="btn btn-amber nav-cta"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Let's talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
};

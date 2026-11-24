/**
 * Root React Component
 * Manages hash-based routing (#home, #about, #portfolio, #contact)
 * and the Project Case Study modal.
 */
function App() {
  const { useState, useEffect } = React;

  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return ['home', 'about', 'portfolio', 'contact'].includes(hash)
      ? hash
      : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onHashChange = () => setCurrentPage(getPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (page) => {
    window.location.hash = `#${page}`;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Navbar = window.Navbar;
  const Footer = window.Footer;
  const ProjectModal = window.ProjectModal;
  const HomePage = window.HomePage;
  const AboutPage = window.AboutPage;
  const PortfolioPage = window.PortfolioPage;
  const ContactPage = window.ContactPage;

  return (
    <div className="app-shell">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      <main>
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProject={setSelectedProject}
          />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'portfolio' && (
          <PortfolioPage onSelectProject={setSelectedProject} />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={navigateTo} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

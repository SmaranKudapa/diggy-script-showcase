import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isPortfolio = location.pathname === '/' || location.pathname === '/portfolio';

  const scrollToSection = (sectionId: string) => {
    if (isPortfolio) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect shadow-card' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text">
            Diggy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isPortfolio ? (
              <>
                <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">
                  Projects
                </button>
                <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors">
                  Skills
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                  Contact
                </button>
              </>
            ) : (
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
            )}
            
            <Link to="/admin" className="btn-secondary flex items-center gap-2">
              <Settings size={16} />
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-effect"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {isPortfolio ? (
              <>
                <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">
                  About
                </button>
                <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">
                  Projects
                </button>
                <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">
                  Skills
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">
                  Contact
                </button>
              </>
            ) : (
              <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
            )}
            
            <Link to="/admin" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
              Admin Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
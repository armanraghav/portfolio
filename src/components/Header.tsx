import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      scrolled ? 'nav-glass py-3 shadow-md backdrop-blur-lg' : 'bg-transparent py-6'
    }`}>
      <nav className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          <div className="font-bold text-2xl lg:text-3xl tracking-tight">
            {scrolled ? (
              <span className="text-white font-heading relative overflow-hidden group">
                <span className="inline-block transition-all duration-700 transform translate-y-0 opacity-100 animate-in slide-in-from-top-4 fade-in">Arman Singh Raghav</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform transition-all duration-700 group-hover:scale-x-110"></span>
                <span className="absolute inset-0 bg-gradient-vintage opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              </span>
            ) : (
              <span className="text-white font-heading relative overflow-hidden opacity-0 transform -translate-y-4 transition-all duration-700 animate-out slide-out-to-top-4 fade-out">Arman Singh Raghav</span>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 justify-center flex-1">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group ${activeSection === id 
                  ? 'text-white bg-primary' 
                  : 'text-muted-foreground hover:text-white'}`}
              >
                <span className="relative z-10">{label}</span>
                {activeSection === id ? (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                )}
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 -z-0 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden relative overflow-hidden group border-primary/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            {isMenuOpen ? (
              <X size={24} className="transition-transform duration-300 text-primary" />
            ) : (
              <Menu size={24} className="transition-transform duration-300 text-primary" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="nav-glass border-t border-border/50 backdrop-blur-lg shadow-lg">
            <div className="px-6 py-6 space-y-1.5">
              {navItems.map(({ id, label }, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-lg font-medium relative overflow-hidden group ${
                    activeSection === id
                      ? 'bg-primary text-white border-l-2 border-white'
                      : 'text-muted-foreground hover:text-white'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: isMenuOpen ? 'slideInScale 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <span className="relative z-10">{label}</span>
                  {activeSection === id ? (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  )}
                  <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 -z-0 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { DraftingCompass, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Detect scroll to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 100; // Altura aproximada do header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
    }
  };

  const navLinks = [
    { name: 'Projetos', href: '#projects' },
    { name: 'Materiais', href: '#materials' },
    { name: 'Estúdio', href: '#studio' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-[#171611]/95 backdrop-blur-md shadow-lg border-b border-white/5' 
            : 'py-6 bg-transparent'
        } lg:px-12`}
      >
        <div className="mx-auto max-w-[1440px] flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 text-white cursor-pointer hover:opacity-90 transition-opacity z-50 relative"
          >
            <div className="size-8 flex items-center justify-center text-primary">
              <DraftingCompass className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h2 className="text-white text-xl font-bold tracking-widest uppercase">
              Muenda <span className="font-light opacity-80">Arch & Design</span>
            </h2>
          </a>
          
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8 items-center">
              {navLinks.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white/80 hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <button 
              onClick={toggleMenu}
              className="flex items-center justify-center size-10 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary hover:text-black transition-all duration-300 group z-50 relative"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 transition-transform duration-500" />
              ) : (
                <Menu className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Overlay Menu */}
      <div className={`fixed inset-0 bg-[#171611] z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center justify-center`}>
        <nav className="flex flex-col gap-8 text-center">
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-white text-3xl font-light hover:text-primary hover:italic transition-all duration-300 uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="absolute bottom-12 text-white/30 text-xs font-mono uppercase tracking-widest">
          Muenda Arch & Design
        </div>
      </div>
    </>
  );
};
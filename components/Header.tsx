import React from 'react';
import { DraftingCompass, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-6 lg:px-12 transition-all duration-300">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between">
        <div className="flex items-center gap-3 text-white cursor-pointer hover:opacity-90 transition-opacity">
          <div className="size-8 flex items-center justify-center text-primary">
            <DraftingCompass className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <h2 className="text-white text-xl font-bold tracking-widest uppercase">
            Muenda <span className="font-light opacity-80">Arch & Design</span>
          </h2>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8 items-center">
            {['Projetos', 'Materiais', 'Estúdio'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-white/80 hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </nav>
          <button 
            className="flex items-center justify-center size-10 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary hover:text-black transition-all duration-300 group"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </header>
  );
};
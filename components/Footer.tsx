import React from 'react';
import { DraftingCompass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white/40 py-12 px-6 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <a href="#home" className="flex items-center gap-2 group cursor-pointer">
          <DraftingCompass className="text-primary w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
          <span className="text-white text-sm font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
            Muenda Arch & Design
          </span>
        </a>
        
        <div className="flex gap-8 text-sm">
          {['Instagram', 'LinkedIn', 'Facebook'].map((social) => (
            <button 
              key={social} 
              onClick={() => window.alert(`${social} em breve!`)}
              className="hover:text-primary transition-colors uppercase tracking-wider text-xs font-medium bg-transparent border-0 cursor-pointer p-0"
            >
              {social}
            </button>
          ))}
        </div>
        
        <p className="text-xs font-mono opacity-60">
          © 2024 Muenda Arch & Design. Maputo, Moçambique.
        </p>
        
      </div>
    </footer>
  );
};
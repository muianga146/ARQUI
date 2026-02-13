import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_BG_IMAGE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background with slight pulse animation effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ backgroundImage: `url('${HERO_BG_IMAGE}')`, animation: 'none' }} 
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background-dark/90 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center max-w-[1200px] px-6 text-center">
        <span className="text-primary tracking-[0.3em] uppercase text-xs font-bold mb-6 animate-fade-in-down">
          Maputo • Ponta do Ouro • Beira
        </span>
        
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-thin leading-[0.9] tracking-tight mb-8 drop-shadow-lg">
          Arquitetura para a <br />
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Alma Moderna
          </span>
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10 drop-shadow-md">
          Construção de luxo e design moderno em Moçambique. Fundimos a durabilidade brutalista com a elegância refinada.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="#projects" className="h-14 px-8 bg-primary text-[#171611] rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-[#c9a025] transition-colors flex items-center justify-center gap-2 group">
            EXPLORAR PROJETOS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="#contact" className="h-14 px-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#171611] transition-all flex items-center justify-center">
            MARCAR CONSULTORIA
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a href="#studio" className="absolute bottom-10 z-20 animate-bounce text-white/50 cursor-pointer hover:text-white transition-colors">
        <ChevronDown className="w-8 h-8" strokeWidth={1} />
      </a>
    </section>
  );
};
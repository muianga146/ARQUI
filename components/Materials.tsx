import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { MATERIAL_IMAGES } from '../constants';

const MaterialCard: React.FC<{ name: string; details: string; image: string }> = ({ name, details, image }) => (
  <div className="min-w-[280px] md:min-w-[320px] snap-center">
    <div 
      className="h-[320px] rounded-lg bg-cover bg-center relative group overflow-hidden"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
    </div>
    <div className="mt-4">
      <h4 className="text-xl font-bold text-[#171611] dark:text-white">{name}</h4>
      <p className="text-sm text-cement dark:text-gray-500 mt-1">{details}</p>
    </div>
  </div>
);

export const Materials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="materials" className="scroll-mt-32 py-24 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-light text-[#171611] dark:text-white mb-6">
              Materiais <span className="font-bold text-primary">Premium</span>
            </h2>
            <p className="text-cement dark:text-gray-400 text-lg leading-relaxed max-w-lg">
              Utilizamos apenas as melhores matérias-primas. Do travertino italiano às madeiras moçambicanas de origem sustentável, cada textura conta uma história de qualidade.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="size-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-white"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="size-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-white"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x cursor-grab active:cursor-grabbing"
        >
          <MaterialCard 
            name="Mármore Carrara"
            details="Importado • Polido • Alta Qualidade"
            image={MATERIAL_IMAGES.marble}
          />
          <MaterialCard 
            name="Teca Moçambicana"
            details="Local • Sustentável • Durável"
            image={MATERIAL_IMAGES.wood}
          />
          <MaterialCard 
            name="Betão Arquitetônico"
            details="Industrial • Mate • Reforçado"
            image={MATERIAL_IMAGES.concrete}
          />
          <MaterialCard 
            name="Latão Escovado"
            details="Detalhes • Acabamento • Premium"
            image={MATERIAL_IMAGES.gold}
          />
           <MaterialCard 
            name="Mármore Carrara"
            details="Importado • Polido • Alta Qualidade"
            image={MATERIAL_IMAGES.marble}
          />
        </div>

      </div>
    </section>
  );
};
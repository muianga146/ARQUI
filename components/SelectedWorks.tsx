import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECT_IMAGES } from '../constants';

interface ProjectCardProps {
  title: string;
  location: string;
  price?: string;
  image: string;
  colSpan: string; // Tailwind class
  customPriceLabel?: string;
  compactPrice?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  location, 
  price, 
  image, 
  colSpan,
  customPriceLabel = "VALOR ESTIMADO",
  compactPrice = false
}) => (
  <div className={`group relative ${colSpan} rounded-lg overflow-hidden cursor-pointer h-full min-h-[300px]`}>
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url('${image}')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
    
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{location}</p>
          <h3 className="text-white text-2xl md:text-3xl font-bold">{title}</h3>
          {compactPrice && price && (
             <p className="text-white/80 font-mono text-sm mt-2 sm:hidden">{price}</p>
          )}
          {!compactPrice && !price && (
             <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
               <p className="text-white font-mono text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">28.000.000 MT</p>
             </div>
          )}
        </div>
        
        {price && !compactPrice && (
          <div className="text-right hidden sm:block">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{customPriceLabel}</p>
            <p className="text-white font-mono text-lg">{price}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export const SelectedWorks: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-32 py-20 px-6 md:px-12 bg-[#f4f3f0] dark:bg-[#1a1814]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 dark:border-gray-800 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-[#171611] dark:text-white mb-2">Trabalhos Selecionados</h2>
            <p className="text-cement dark:text-gray-500">Obras-primas Residenciais e Comerciais</p>
          </div>
          <button onClick={() => window.alert('Galeria completa em breve.')} className="text-primary font-bold text-sm uppercase tracking-widest hover:text-[#171611] dark:hover:text-white transition-colors flex items-center gap-2 group">
            VER PORTFÓLIO COMPLETO 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          <ProjectCard 
            title="Penthouse Polana"
            location="Cidade de Maputo"
            price="45.000.000 MT"
            image={PROJECT_IMAGES.polana}
            colSpan="md:col-span-8"
          />
          <ProjectCard 
            title="Casa de Luz"
            location="Matola"
            price="12.500.000 MT"
            image={PROJECT_IMAGES.casaDeLuz}
            colSpan="md:col-span-4"
            compactPrice={true}
          />
          <ProjectCard 
            title="Retiro Costeiro"
            location="Ponta do Ouro"
            // Price is handled on hover for this specific card in the original design
            image={PROJECT_IMAGES.retiro}
            colSpan="md:col-span-5"
          />
          <ProjectCard 
            title="Sede Corporativa"
            location="Beira"
            price="110.000.000 MT"
            image={PROJECT_IMAGES.sede}
            colSpan="md:col-span-7"
            customPriceLabel="ORÇAMENTO DO PROJETO"
          />
        </div>

      </div>
    </section>
  );
};
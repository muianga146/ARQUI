import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-32 relative py-32 flex items-center justify-center bg-[#211d11] overflow-hidden text-center">
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(#e0b329 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}
      />
      
      <div className="relative z-10 px-6">
        <h2 className="text-4xl md:text-6xl font-thin text-white mb-8">
          Pronto para construir o seu <span className="italic text-primary serif-feel">legado</span>?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="mailto:info@muenda.co.mz" className="px-10 py-4 bg-primary text-[#171611] text-lg font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-colors">
            INICIAR PROJETO
          </a>
          
          <div className="flex flex-col text-left border-l border-white/20 pl-6">
            <span className="text-white/60 text-xs uppercase tracking-widest mb-1">LIGUE DIRETAMENTE</span>
            <a href="tel:+258841234567" className="text-white text-lg font-mono hover:text-primary transition-colors cursor-pointer">
              +258 84 123 4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
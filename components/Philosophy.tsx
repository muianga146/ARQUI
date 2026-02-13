import React from 'react';
import { PHILOSOPHY_IMAGE } from '../constants';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center gap-4 text-primary">
              <span className="h-px w-12 bg-primary"></span>
              <span className="uppercase tracking-widest text-sm font-semibold">Nossa Filosofia</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-[#171611] dark:text-white leading-[1.1]">
              A Arte da <span className="font-bold italic serif-feel">Permanência</span>
            </h2>
            <p className="text-lg text-cement dark:text-gray-400 leading-relaxed font-light max-w-xl">
              Nossa filosofia está enraizada na criação de espaços que são tão duradouros quanto belos. Ao utilizar amplos espaços negativos e equilíbrio assimétrico, criamos ambientes que respiram.
            </p>
          </div>
          
          {/* Image Content */}
          <div className="lg:col-span-5 relative h-[500px] w-full group">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={PHILOSOPHY_IMAGE}
                alt="Detalhe Arquitetônico" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" 
              />
            </div>
            
            {/* Floating Stat Card */}
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-primary/20 backdrop-blur-md z-10 p-8 flex flex-col justify-end rounded-lg border border-white/10 shadow-lg">
              <span className="text-5xl font-bold text-primary mb-2">15+</span>
              <span className="text-sm font-medium uppercase tracking-widest text-[#171611] dark:text-white">
                Anos de Excelência<br />em Maputo
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
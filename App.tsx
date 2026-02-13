import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { SelectedWorks } from './components/SelectedWorks';
import { Materials } from './components/Materials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <SelectedWorks />
        <Materials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
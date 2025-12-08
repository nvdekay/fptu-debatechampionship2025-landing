import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ParticlesBackground from './components/layout/ParticlesBackground';
import HeroSection from './features/hero/HeroSection';
import MindForgeTimeline from './features/timeline/MindForgeTimeline';
import BenefitsSection from './features/benefits/BenefitsSection';
import PrizesSection from './features/prizes/PrizesSection';
import RulesSection from './features/rules/RulesSection';
import QnASection from './features/rules/QnASection';

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-void-black min-h-screen text-mithril selection:bg-magma-red selection:text-white overflow-x-hidden">
      <ParticlesBackground />
      <Header />

      <main>
        <HeroSection />
        <MindForgeTimeline />
        <BenefitsSection />
        {/* <PrizesSection /> */}
        <RulesSection />
        <QnASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;

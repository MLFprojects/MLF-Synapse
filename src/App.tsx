import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientBentoGrid } from './components/ClientBentoGrid';
import { ComparisonSection } from './components/ComparisonSection';
import { MicroDemo } from './components/MicroDemo';
import { DownloadSection } from './components/DownloadSection';
import { FaqSection } from './components/FaqSection';
import { HowItWorksPage } from './components/HowItWorksPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'how-it-works'>('home');

  useEffect(() => {
    // Check if URL hash indicates how-it-works or scroll
    if (window.location.hash === '#come-funziona') {
      setCurrentPage('how-it-works');
    }
  }, []);

  const handleOpenDownload = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('download');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('download');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoToHowItWorks = () => {
    setCurrentPage('how-it-works');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070b0b] text-[#d6e3e2] selection:bg-[#51a4a2]/30 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        onOpenDownload={handleOpenDownload} 
      />

      {/* Main Content Area */}
      {currentPage === 'home' ? (
        <main>
          {/* 1. Hero */}
          <Hero 
            onOpenDownload={handleOpenDownload} 
            onExploreClick={handleGoToHowItWorks} 
          />

          {/* 2. Bento Grid con i contenuti del client */}
          <ClientBentoGrid />

          {/* 3. Tabella Vantaggi */}
          <ComparisonSection />

          {/* 4. Micro Demo con visualizzazione neural e chat finta (attivare/disattivare Ultra-Memory) */}
          <MicroDemo />

          {/* 5. Download & FAQ */}
          <DownloadSection />
          <FaqSection />
        </main>
      ) : (
        /* Pagina a parte: Come funziona? */
        <main>
          <HowItWorksPage 
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenDownload={handleOpenDownload}
          />
        </main>
      )}

      {/* Footer */}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

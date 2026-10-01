import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowLeft, BrainCircuit } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'how-it-works';
  onNavigate: (page: 'home' | 'how-it-works') => void;
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetHash?: string) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      if (targetHash) {
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (targetHash) {
      const el = document.querySelector(targetHash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080d0d]/90 backdrop-blur-md border-b border-[#51a4a2]/15 shadow-[0_10px_30px_rgba(0,0,0,0.7)]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2 group transition-transform active:scale-95 cursor-pointer text-left"
          aria-label="MLF SynapseAI Home"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#51a4a2] to-[#244f4e] flex items-center justify-center p-[1px] shadow-[0_0_15px_rgba(81,164,162,0.4)]">
            <div className="w-full h-full bg-[#0a1010] rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#51a4a2] animate-pulse shadow-[0_0_8px_#51a4a2]" />
            </div>
          </div>
          <div>
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#51a4a2] transition-colors">
              MLF Synapse<span className="text-[#51a4a2]">AI</span>
            </span>
          </div>
        </button>

        {/* Zone 2: Clean Text Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#9cb0af]">
          <button 
            onClick={() => handleNavClick()} 
            className={`transition-colors py-1 cursor-pointer ${currentPage === 'home' ? 'text-white font-semibold' : 'hover:text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('#client-bento')} 
            className="hover:text-white transition-colors py-1 cursor-pointer"
          >
            Contenuti Client
          </button>
          <button 
            onClick={() => handleNavClick('#tabella-vantaggi')} 
            className="hover:text-white transition-colors py-1 cursor-pointer"
          >
            Vantaggi
          </button>
          <button 
            onClick={() => handleNavClick('#micro-demo')} 
            className="hover:text-white transition-colors py-1 cursor-pointer"
          >
            Micro Demo
          </button>
          <button 
            onClick={() => {
              onNavigate('how-it-works');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className={`transition-colors py-1 cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'how-it-works' 
                ? 'text-[#51a4a2] font-semibold underline underline-offset-8' 
                : 'hover:text-[#51a4a2]'
            }`}
          >
            <BrainCircuit className="w-3.5 h-3.5 text-[#51a4a2]" />
            <span>Come funziona?</span>
          </button>
          <button 
            onClick={() => handleNavClick('#download')} 
            className="hover:text-white transition-colors py-1 cursor-pointer"
          >
            Download & FAQ
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDownload}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide neu-pill-primary cursor-pointer active:scale-95 transition-transform"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Scarica Client</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full neu-flat text-[#9cb0af] hover:text-white cursor-pointer"
            aria-label="Apri menu mobile"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090e0e]/95 backdrop-blur-xl border-b border-[#51a4a2]/20 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-base font-medium">
            <button 
              onClick={() => handleNavClick()}
              className="text-left text-[#cad7d6] hover:text-[#51a4a2] py-2 border-b border-[#51a4a2]/10"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('#client-bento')}
              className="text-left text-[#cad7d6] hover:text-[#51a4a2] py-2 border-b border-[#51a4a2]/10"
            >
              Contenuti Client
            </button>
            <button 
              onClick={() => handleNavClick('#tabella-vantaggi')}
              className="text-left text-[#cad7d6] hover:text-[#51a4a2] py-2 border-b border-[#51a4a2]/10"
            >
              Vantaggi
            </button>
            <button 
              onClick={() => handleNavClick('#micro-demo')}
              className="text-left text-[#cad7d6] hover:text-[#51a4a2] py-2 border-b border-[#51a4a2]/10"
            >
              Micro Demo
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('how-it-works');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-[#51a4a2] py-2 border-b border-[#51a4a2]/10 font-semibold"
            >
              Come funziona? (Approfondimento)
            </button>
            <button 
              onClick={() => handleNavClick('#download')}
              className="text-left text-[#cad7d6] hover:text-[#51a4a2] py-2 border-b border-[#51a4a2]/10"
            >
              Download & FAQ
            </button>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full py-3 rounded-full neu-pill-primary flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Scarica per Desktop (v1.0)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


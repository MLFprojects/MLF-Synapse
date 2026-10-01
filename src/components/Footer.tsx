import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'how-it-works') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (targetHash?: string) => {
    if (onNavigate) onNavigate('home');
    if (targetHash) {
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <footer className="border-t border-[#51a4a2]/15 bg-[#060a0a] pt-16 pb-12 text-[#7d9493]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#51a4a2]/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#51a4a2] to-[#244f4e] p-[1px]">
                <div className="w-full h-full bg-[#0a1010] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#51a4a2]" />
                </div>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                MLF Synapse<span className="text-[#51a4a2]">AI</span>
              </span>
            </div>
            <p className="text-xs font-mono text-[#51a4a2]">
              Beyond memory. Pure understanding.
            </p>
            <p className="text-xs text-[#8ca3a2] max-w-md mt-2">
              Ultra-Memory Synapse: l&apos;architettura cognitiva a comprensione causale attiva. Il client desktop è il mezzo neutrale per portarla sul tuo hardware.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#a0b5b4]">
            <button onClick={() => handleLinkClick()} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => handleLinkClick('#client-bento')} className="hover:text-white transition-colors cursor-pointer">
              Contenuti Client
            </button>
            <button onClick={() => handleLinkClick('#tabella-vantaggi')} className="hover:text-white transition-colors cursor-pointer">
              Vantaggi
            </button>
            <button onClick={() => handleLinkClick('#micro-demo')} className="hover:text-white transition-colors cursor-pointer">
              Micro Demo
            </button>
            <button 
              onClick={() => {
                if (onNavigate) onNavigate('how-it-works');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="text-[#51a4a2] hover:underline transition-colors cursor-pointer font-medium"
            >
              Come funziona?
            </button>
            <button onClick={() => handleLinkClick('#download')} className="hover:text-white transition-colors cursor-pointer">
              Download & FAQ
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full neu-circle flex items-center justify-center text-[#51a4a2] hover:text-white transition-colors cursor-pointer self-end md:self-auto"
            aria-label="Torna in cima"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} MLF SynapseAI Project. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono text-[#617978]">
            <span>Privacy First Architecture</span>
            <span>·</span>
            <span>100% On-Device Ready</span>
            <span>·</span>
            <span>Zero Vendor Lock-in</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

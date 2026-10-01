import React from 'react';
import { Download, ArrowRight, ShieldCheck, Cpu, HardDrive, Network, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenDownload: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onExploreClick }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#51a4a2]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-[#51a4a2]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Display Headline: Cyan-white gradient glow style */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.05] mb-8 text-balance bg-gradient-to-r from-white via-[#8ce5e3] to-[#51a4a2] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(81,164,162,0.5)]">
          Beyond memory.<br className="hidden sm:block" /> Pure understanding.
        </h1>

        {/* Subtitle oriented on Ultra-Memory Synapse */}
        <p className="text-lg sm:text-xl text-[#9cb0af] max-w-3xl mx-auto font-normal leading-relaxed mb-10 text-balance">
          Benvenuto in <strong className="text-white font-medium">Ultra-Memory Synapse</strong>: l&apos;architettura di comprensione attiva che scompone manuali, schemi complessi e diagrammi in relazioni di causa-effetto permanenti. Il client desktop è il mezzo neutrale per eseguirla sul tuo hardware, 100% in locale o connesso al cloud.
        </p>

        {/* 2 Buttons: "Download" and "Come funziona" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-8 py-4 rounded-full neu-pill-primary flex items-center justify-center gap-3 text-base font-bold text-[#070e0e] cursor-pointer group"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Scarica il Client Desktop</span>
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full neu-pill-btn flex items-center justify-center gap-3 text-base font-semibold text-[#d4e4e3] hover:text-white cursor-pointer group"
          >
            <span>Come funziona Ultra-Memory</span>
            <ArrowRight className="w-4 h-4 text-[#51a4a2] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Clean unboxed proof metadata with separators (Anti-Slop compliant) */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-[#7d9493] max-w-3xl mx-auto pt-2 border-t border-[#51a4a2]/10">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#51a4a2]" />
            <span>100% Locale & Offline nativo</span>
          </div>
          <span aria-hidden="true" className="text-[#51a4a2]/30">·</span>
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-[#51a4a2]" />
            <span>Mappa Neurale Visibile</span>
          </div>
          <span aria-hidden="true" className="text-[#51a4a2]/30">·</span>
          <div className="flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-[#51a4a2]" />
            <span>Zero accumulo di file pesanti</span>
          </div>
          <span aria-hidden="true" className="text-[#51a4a2]/30">·</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#51a4a2]" />
            <span>Controllo tri-stato ON / AUTO / OFF</span>
          </div>
        </div>
      </div>
    </section>
  );
};

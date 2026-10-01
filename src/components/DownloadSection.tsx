import React, { useState } from 'react';
import { Download, Check, Apple, Monitor, Terminal, ShieldCheck, Cpu, HardDrive, Sparkles, CheckCircle2 } from 'lucide-react';

interface DownloadSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ isOpenModal, onCloseModal }) => {
  const [downloadingPlatform, setDownloadingPlatform] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [emailSubscribed, setEmailSubscribed] = useState(false);

  const platforms = [
    {
      id: 'macos',
      name: 'macOS Universal',
      badge: 'Apple Silicon & Intel',
      arch: 'M1 / M2 / M3 / M4 & Core i7/i9',
      version: 'v1.0.4 - 148 MB',
      icon: Apple,
      file: 'MLF-SynapseAI-1.0.4-universal.dmg',
      sha: 'e4b9...73a1',
    },
    {
      id: 'windows',
      name: 'Windows 11 / 10',
      badge: 'NVIDIA CUDA & DirectML',
      arch: 'x64 Architecture (64-bit)',
      version: 'v1.0.4 - 162 MB',
      icon: Monitor,
      file: 'MLF-SynapseAI-Setup-1.0.4.exe',
      sha: '8f2d...410c',
    },
    {
      id: 'linux',
      name: 'Linux Universal',
      badge: 'AppImage / .deb',
      arch: 'Ubuntu, Fedora, Arch, Debian',
      version: 'v1.0.4 - 142 MB',
      icon: Terminal,
      file: 'MLF-SynapseAI-1.0.4-x86_64.AppImage',
      sha: 'c911...5b84',
    },
  ];

  const handleDownload = (platformId: string, fileName: string) => {
    setDownloadingPlatform(platformId);
    setTimeout(() => {
      setDownloadingPlatform(null);
      setDownloadSuccess(fileName);
    }, 1200);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput && emailInput.includes('@')) {
      setEmailSubscribed(true);
    }
  };

  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#51a4a2]/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-xs font-mono text-[#51a4a2] border border-[#51a4a2]/20 mb-4">
            <Download className="w-3.5 h-3.5" />
            <span>DISPONIBILITÀ IMMEDIATA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Scarica MLF SynapseAI <br />
            <span className="text-[#51a4a2]">per il tuo sistema operativo</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#95ab9a] text-balance">
            Installazione autonoma in meno di 60 secondi. Nessun ambiente Python, nessun terminale da configurare.
          </p>
        </div>

        {/* Download Success Banner */}
        {downloadSuccess && (
          <div className="max-w-2xl mx-auto mb-8 p-4 rounded-2xl neu-inset border border-[#51a4a2]/40 bg-[#51a4a2]/10 flex items-center justify-between gap-4 animate-in fade-in duration-300">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#51a4a2] shrink-0" />
              <div>
                <p className="text-sm font-bold text-white">Download avviato con successo!</p>
                <p className="text-xs text-[#9eb5b4] font-mono">
                  {downloadSuccess} · Verifica integrità SHA-256 attiva
                </p>
              </div>
            </div>
            <button
              onClick={() => setDownloadSuccess(null)}
              className="text-xs text-[#51a4a2] hover:underline cursor-pointer font-mono"
            >
              Chiudi
            </button>
          </div>
        )}

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isDownloading = downloadingPlatform === p.id;
            return (
              <div
                key={p.id}
                className="rounded-3xl neu-flat p-8 border border-[#51a4a2]/20 flex flex-col justify-between hover:border-[#51a4a2]/40 transition-all duration-300 text-center relative group"
              >
                <div>
                  <div className="w-16 h-16 rounded-full neu-circle mx-auto mb-6 flex items-center justify-center text-[#51a4a2] group-hover:scale-105 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs font-mono text-[#51a4a2] mb-3">
                    {p.badge}
                  </p>
                  <p className="text-xs text-[#8ca3a2] mb-6">
                    {p.arch}
                  </p>

                  <div className="neu-inset p-3 rounded-xl mb-6 text-[11px] text-[#789392] font-mono flex items-center justify-between">
                    <span>Versione:</span>
                    <span className="text-white">{p.version}</span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleDownload(p.id, p.file)}
                    disabled={isDownloading}
                    className="w-full py-3.5 rounded-full neu-pill-primary flex items-center justify-center gap-2 text-sm font-bold text-[#070e0e] cursor-pointer active:scale-95 transition-all"
                  >
                    {isDownloading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-[#070e0e] border-t-transparent animate-spin" />
                        <span>Download in corso...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Scarica {p.name.split(' ')[0]}</span>
                      </>
                    )}
                  </button>
                  <p className="mt-2 text-[10px] text-[#698281] font-mono">
                    SHA256: {p.sha}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hardware Requirements Specs Box */}
        <div className="max-w-4xl mx-auto rounded-3xl neu-inset p-6 sm:p-8 border border-[#51a4a2]/20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#51a4a2] mb-4">
            <Cpu className="w-4 h-4" />
            <span>REQUISITI HARDWARE MINIMI & CONSIGLIATI</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div>
              <p className="font-semibold text-white mb-1">Memoria RAM</p>
              <p className="text-[#8ba2a1]">Minimo 8 GB per modelli 3B/8B quantizzati.</p>
              <p className="text-[#51a4a2] mt-1 font-mono text-[11px]">Consigliati: 16 GB o più</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Accelerazione GPU</p>
              <p className="text-[#8ba2a1]">Apple Silicon M-Series nativa, NVIDIA RTX (CUDA) o CPU multi-core con AVX2.</p>
              <p className="text-[#51a4a2] mt-1 font-mono text-[11px]">Rilevamento auto al primo avvio</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Spazio su Disco</p>
              <p className="text-[#8ba2a1]">2 GB per il client + storage dinamico per i pesi locali selezionati.</p>
              <p className="text-[#51a4a2] mt-1 font-mono text-[11px]">Ultra-Memory salva fino al 90%</p>
            </div>
          </div>
        </div>

        {/* Early Access / Updates Newsletter */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h4 className="text-base font-bold font-display text-white mb-2">
            Rimani aggiornato sulle nuove release di MLF SynapseAI
          </h4>
          <p className="text-xs text-[#8aa1a0] mb-6">
            Nessuno spam. Ricevi solo notifiche sulle nuove versioni e miglioramenti del motore neurale.
          </p>

          {emailSubscribed ? (
            <div className="neu-inset p-4 rounded-full border border-[#51a4a2]/40 text-xs font-mono text-[#51a4a2] flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              <span>Iscrizione completata con successo! Riceverai gli aggiornamenti via email.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Inserisci la tua email..."
                className="w-full sm:flex-1 px-5 py-3 rounded-full neu-inset text-xs sm:text-sm text-white placeholder-[#627a79] border border-[#51a4a2]/20 focus:outline-none focus:border-[#51a4a2]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-full neu-pill-primary text-xs font-bold text-[#070e0e] cursor-pointer whitespace-nowrap active:scale-95"
              >
                Iscriviti agli aggiornamenti
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

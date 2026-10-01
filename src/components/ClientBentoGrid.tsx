import React from 'react';
import { 
  BrainCircuit, 
  Sliders, 
  Network, 
  Cpu, 
  Lock, 
  HardDrive, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const ClientBentoGrid: React.FC = () => {
  return (
    <section id="client-bento" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#51a4a2]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-xs font-mono text-[#51a4a2] border border-[#51a4a2]/20 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>IL MEZZO DI ACCESSO A ULTRA-MEMORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Il client desktop: il veicolo <br />
            <span className="text-[#51a4a2]">per la tua Ultra-Memory</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#95ab9a] text-balance">
            Ultra-Memory Synapse è l&apos;intelligenza concettuale; il client desktop universale è lo strumento essenziale progettato per eseguirla sul tuo hardware senza vincoli.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 2 Cols - Core Ultra-Memory Engine */}
          <div className="md:col-span-2 rounded-3xl neu-flat p-8 border border-[#51a4a2]/25 relative overflow-hidden flex flex-col justify-between group hover:border-[#51a4a2]/45 transition-all">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl neu-inset flex items-center justify-center text-[#51a4a2] border border-[#51a4a2]/25 shadow-inner">
                  <BrainCircuit className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#51a4a2]/15 text-[#51a4a2] border border-[#51a4a2]/30">
                  MOTORE CENTRALE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Assimilazione Attiva Ultra-Memory
              </h3>
              <p className="text-sm sm:text-base text-[#9fb3b2] leading-relaxed max-w-2xl mb-6">
                Non un semplice archivio di file né un banale RAG con testo spezzettato. Ultra-Memory studia schemi tecnici, manuali e diagrammi estraendo assiomi operativi e catene causali. Una volta interiorizzata la logica, i documenti pesanti possono essere rimossi: risparmi oltre il 90% di spazio su disco e RAM.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#51a4a2]/15 text-xs font-mono">
                <div className="neu-inset p-3 rounded-xl border border-[#51a4a2]/15">
                  <span className="text-[#51a4a2] block font-bold text-sm">90%+</span>
                  <span className="text-[#7d9392]">Spazio disco risparmiato</span>
                </div>
                <div className="neu-inset p-3 rounded-xl border border-[#51a4a2]/15">
                  <span className="text-white block font-bold text-sm">Causa-Effetto</span>
                  <span className="text-[#7d9392]">Relazioni formali verificate</span>
                </div>
                <div className="neu-inset p-3 rounded-xl border border-[#51a4a2]/15">
                  <span className="text-emerald-400 block font-bold text-sm">Zero Bloat</span>
                  <span className="text-[#7d9392]">Pixel grezzi scartati</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 1 Col - Tri-Mode Physical Control */}
          <div className="rounded-3xl neu-flat p-8 border border-[#51a4a2]/20 flex flex-col justify-between group hover:border-[#51a4a2]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl neu-inset flex items-center justify-center text-[#51a4a2] border border-[#51a4a2]/25 shadow-inner">
                  <Sliders className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono text-[#51a4a2]">ON · AUTO · OFF</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                Controllo Tri-Stato
              </h3>
              <p className="text-sm text-[#94a8a7] leading-relaxed mb-4">
                La levetta che governa la memoria: <strong>ON</strong> per l&apos;assimilazione profonda, <strong>AUTO</strong> per lasciare decidere al sistema, <strong>OFF</strong> per chat rapide ed effimere senza toccare il reticolo neurale.
              </p>
            </div>

            <div className="pt-4 border-t border-[#51a4a2]/15 flex items-center justify-between text-xs font-mono text-[#51a4a2]">
              <span>GESTIONE INTUITIVA</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </div>
          </div>

          {/* Card 3: 1 Col - Visual Neural Map */}
          <div className="rounded-3xl neu-flat p-8 border border-[#51a4a2]/20 flex flex-col justify-between group hover:border-[#51a4a2]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl neu-inset flex items-center justify-center text-[#51a4a2] border border-[#51a4a2]/25 shadow-inner">
                  <Network className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono text-[#51a4a2]">VISUALIZZAZIONE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                Mappa Neurale Grafica
              </h3>
              <p className="text-sm text-[#94a8a7] leading-relaxed mb-4">
                Uno spazio visivo a nodi interconnessi per navigare nella memoria digitale, ispezionare le deduzioni ed eliminare l&apos;effetto scatola nera dell&apos;AI tradizionale.
              </p>
            </div>

            <div className="pt-4 border-t border-[#51a4a2]/15 flex items-center justify-between text-xs font-mono text-[#51a4a2]">
              <span>ZERO SCATOLA NERA</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </div>
          </div>

          {/* Card 4: 2 Cols - Hybrid Local & Cloud Execution */}
          <div className="md:col-span-2 rounded-3xl neu-flat p-8 border border-[#51a4a2]/20 flex flex-col justify-between group hover:border-[#51a4a2]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl neu-inset flex items-center justify-center text-[#51a4a2] border border-[#51a4a2]/25 shadow-inner">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#51a4a2]/15 text-[#51a4a2] border border-[#51a4a2]/30">
                  ESECUZIONE IBRIDA
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Locale Offline al 100% o Connessione Cloud
              </h3>
              <p className="text-sm sm:text-base text-[#9fb3b2] leading-relaxed mb-6">
                Esegui modelli come Llama 3.3 o Mistral direttamente sulla tua GPU/CPU senza connessione a internet, con latenza immediata e privacy impenetrabile. Se necessario, collega modelli cloud come Claude o GPT con un semplice click, senza vincoli verso alcun provider.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8ca3a2]">
                <span className="flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-4 h-4 text-[#51a4a2]" />
                  Zero terminale o Docker
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5 text-white">
                  <Cpu className="w-4 h-4 text-[#51a4a2]" />
                  Rilevamento hardware automatico
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5 text-white">
                  <Lock className="w-4 h-4 text-[#51a4a2]" />
                  Fallback offline istantaneo
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

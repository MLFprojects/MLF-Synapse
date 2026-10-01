import React from 'react';
import { 
  ArrowLeft, 
  BrainCircuit, 
  Layers, 
  HardDrive, 
  Network, 
  Sliders, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  ArrowRight,
  Cpu,
  Download
} from 'lucide-react';

interface HowItWorksPageProps {
  onBackToHome: () => void;
  onOpenDownload: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBackToHome, onOpenDownload }) => {
  return (
    <div className="min-h-screen bg-[#070b0b] text-[#d6e3e2] pt-28 pb-20">
      
      {/* Top Breadcrumb / Back button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-pill-btn text-xs font-semibold text-[#51a4a2] hover:text-white transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna alla Home</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-xs font-mono text-[#51a4a2] border border-[#51a4a2]/20 mb-4">
            <BrainCircuit className="w-4 h-4" />
            <span>ARCHITETTURA ULTRA-MEMORY SYNAPSE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Come funziona l&apos;assimilazione <br />
            <span className="text-[#51a4a2]">attiva di Ultra-Memory</span>
          </h1>
          <p className="text-base sm:text-lg text-[#95ab9a] leading-relaxed text-balance">
            Una disamina tecnica approfondita sui meccanismi cognitivi, sulla decomposizione causale dei documenti e su come il client desktop funge da puro veicolo on-device.
          </p>
        </div>

        {/* Mechanism 1: RAG vs Ultra-Memory */}
        <div className="mb-12 rounded-3xl neu-flat p-6 sm:p-10 border border-[#51a4a2]/25">
          <div className="flex items-center gap-3 text-xs font-mono text-[#51a4a2] mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#51a4a2]/15 border border-[#51a4a2]/30">MECCANISMO 01</span>
            <span>DALLA LETTURA STATISTICA ALL&apos;ASSIOMATIZZAZIONE</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Perché il RAG tradizionale fallisce e come nasce Ultra-Memory
          </h2>
          
          <p className="text-sm sm:text-base text-[#9fb3b2] leading-relaxed mb-6">
            I comuni sistemi di memoria per AI (Retrieval-Augmented Generation) operano come banali motori di ricerca per parole chiave: carichi un PDF da 100 pagine, il sistema lo spezzetta in frammenti di testo casuali (chunks) e calcola una vicinanza probabilistica. Quando fai una domanda tecnica, il modello legge frammenti slegati e tenta di indovinare la risposta, portando a frequenti allucinazioni su schemi elettrici, diagrammi e procedure complesse.
          </p>

          <div className="neu-inset p-5 rounded-2xl border border-[#51a4a2]/20 text-xs sm:text-sm text-[#c8d9d8] space-y-3">
            <p className="font-semibold text-[#51a4a2]">La risposta di Ultra-Memory Synapse:</p>
            <p className="leading-relaxed">
              Invece di accumulare testo o pixel, il motore applica una scansione semantica di <strong>Comprensione Attiva</strong>. Il materiale viene decostruito in entità fondamentali, parametri operativi, tolleranze e regole condizionali (ad esempio: <em>«SE la temperatura supera 85°C per &gt;120ms ALLORA attiva il relè termico K1»</em>). Una volta compreso il principio logico, il sistema non ha più bisogno di conservare le 100 pagine originali.
            </p>
          </div>
        </div>

        {/* Mechanism 2: Zero Bloat & Deconstruction */}
        <div className="mb-12 rounded-3xl neu-flat p-6 sm:p-10 border border-[#51a4a2]/25">
          <div className="flex items-center gap-3 text-xs font-mono text-[#51a4a2] mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#51a4a2]/15 border border-[#51a4a2]/30">MECCANISMO 02</span>
            <span>RIMOZIONE DEI BYTE GREZZI (ZERO BLOAT)</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            De-frammentazione dei file: oltre il 90% di spazio risparmiato
          </h2>
          
          <p className="text-sm sm:text-base text-[#9fb3b2] leading-relaxed mb-6">
            Uno dei limiti più gravi dell&apos;AI su dispositivi personali è l&apos;accumulo rapido di gigabyte di dati grezzi: manuali di centinaia di megabyte e immagini ad altissima definizione che saturano sia il disco rigido che la preziosa memoria RAM della scheda video.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl neu-inset border border-rose-500/20">
              <span className="text-rose-400 font-mono font-bold block mb-1">APPROCCIO CONVENZIONALE</span>
              <p className="text-[#8ba2a1]">
                Salva i file PDF e le immagini per intero. Ad ogni domanda, ricarica in RAM vettori densi e immagini ad alta risoluzione. Saturazione disco in pochi mesi.
              </p>
            </div>
            <div className="p-4 rounded-xl neu-inset border border-emerald-500/25 bg-[#51a4a2]/5">
              <span className="text-[#51a4a2] font-mono font-bold block mb-1">ULTRA-MEMORY SYNAPSE</span>
              <p className="text-white">
                Isola la logica ed elimina i pixel grezzi. Il manuale da 40 MB viene compresso in una rete relazionale da pochi kilobyte, pronta per risposte a latenza zero.
              </p>
            </div>
          </div>
        </div>

        {/* Mechanism 3: The Neural Synaptic Reticulum */}
        <div className="mb-12 rounded-3xl neu-flat p-6 sm:p-10 border border-[#51a4a2]/25">
          <div className="flex items-center gap-3 text-xs font-mono text-[#51a4a2] mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#51a4a2]/15 border border-[#51a4a2]/30">MECCANISMO 03</span>
            <span>TOPOLOGIA DEL RETICOLO SINAPTICO</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            La Mappa Neurale della Conoscenza Visibile
          </h2>
          
          <p className="text-sm sm:text-base text-[#9fb3b2] leading-relaxed mb-4">
            La conoscenza assimilata non viene rinchiusa in una «scatola nera». Viene tessuta all&apos;interno di una struttura a grafo neurale visibile ed esplorabile:
          </p>

          <ul className="space-y-3 text-xs sm:text-sm text-[#95abab] mb-6">
            <li className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#51a4a2]/20 flex items-center justify-center mt-0.5 text-[#51a4a2]">
                <Check className="w-3 h-3" />
              </div>
              <span><strong>Nodi Concettuali:</strong> identificano componenti hardware, concetti teorici o definizioni normative.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#51a4a2]/20 flex items-center justify-center mt-0.5 text-[#51a4a2]">
                <Check className="w-3 h-3" />
              </div>
              <span><strong>Archi di Causa-Effetto:</strong> collegano due nodi con vincoli orientati e regole di attivazione formalizzate.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#51a4a2]/20 flex items-center justify-center mt-0.5 text-[#51a4a2]">
                <Check className="w-3 h-3" />
              </div>
              <span><strong>Tracciabilità Trasparente:</strong> ogni nodo indica la fonte originaria e il grado di confidenza assiomatica (98-100%).</span>
            </li>
          </ul>
        </div>

        {/* Mechanism 4: Tri-State Gating (ON / AUTO / OFF) */}
        <div className="mb-12 rounded-3xl neu-flat p-6 sm:p-10 border border-[#51a4a2]/25">
          <div className="flex items-center gap-3 text-xs font-mono text-[#51a4a2] mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#51a4a2]/15 border border-[#51a4a2]/30">MECCANISMO 04</span>
            <span>TRI-STATE GATING DELLA MEMORIA</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Come funzionano gli stati ON, AUTO e OFF
          </h2>
          
          <p className="text-sm sm:text-base text-[#9fb3b2] leading-relaxed mb-6">
            Un secondo cervello non deve registrare ogni singola chiacchierata informale o bozza rapida, altrimenti diventerebbe caotico e lento. Il Tri-State Gating garantisce un controllo rigoroso:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="neu-inset p-4 rounded-xl border border-[#51a4a2]/30">
              <span className="text-[#51a4a2] font-mono font-bold block mb-1">STATO ON</span>
              <p className="text-[#8ba2a1]">
                Attiva l&apos;estrazione semantica profonda. Ogni documento o procedura inserita viene scomposta e archiviata per sempre nel grafo.
              </p>
            </div>
            <div className="neu-inset p-4 rounded-xl border border-amber-400/30">
              <span className="text-amber-300 font-mono font-bold block mb-1">STATO AUTO</span>
              <p className="text-[#8ba2a1]">
                Un classificatore euristico analizza l&apos;intento: memorizza solo le regole tecniche formali e ignora le richieste banali.
              </p>
            </div>
            <div className="neu-inset p-4 rounded-xl border border-white/15">
              <span className="text-white font-mono font-bold block mb-1">STATO OFF</span>
              <p className="text-[#8ba2a1]">
                Bypass completo. Chat effimera ultra-rapida con RAM pulita e zero scritture su disco. Ideale per messaggi veloci o traduzioni.
              </p>
            </div>
          </div>
        </div>

        {/* Mechanism 5: Role of the Desktop Client */}
        <div className="mb-14 rounded-3xl neu-flat p-6 sm:p-10 border border-[#51a4a2]/25">
          <div className="flex items-center gap-3 text-xs font-mono text-[#51a4a2] mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#51a4a2]/15 border border-[#51a4a2]/30">MECCANISMO 05</span>
            <span>IL CLIENT DESKTOP COME PURO VEICOLO</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Il client è solo il mezzo, non il fine
          </h2>
          
          <p className="text-sm sm:text-base text-[#9fb3b2] leading-relaxed mb-4">
            Molti strumenti di AI mettono al centro l&apos;interfaccia o la finestra di chat. Per noi, l&apos;unica vera innovazione è <strong>Ultra-Memory Synapse</strong>: il principio per cui un&apos;intelligenza artificiale comprende le cause e gli effetti e non dimentica.
          </p>
          <p className="text-sm sm:text-base text-[#9fb3b2] leading-relaxed">
            Il client desktop esiste esclusivamente per permetterti di usare Ultra-Memory sul tuo computer:
            <strong className="text-white font-medium"> senza dover aprire il terminale</strong>, 
            <strong className="text-white font-medium"> senza cedere i tuoi dati sensibili a server cloud</strong>, 
            e con la libertà totale di scegliere quale modello eseguire (offline con Llama/Mistral o collegando modelli esterni).
          </p>
        </div>

        {/* Call to action box */}
        <div className="text-center rounded-3xl neu-inset p-8 sm:p-12 border border-[#51a4a2]/30">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
            Pronto a testare Ultra-Memory?
          </h3>
          <p className="text-sm text-[#8ba2a1] max-w-lg mx-auto mb-8">
            Scarica il client desktop per iniziare a costruire il tuo reticolo neurale permanente sul tuo computer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDownload}
              className="px-8 py-3.5 rounded-full neu-pill-primary text-sm font-bold text-[#070e0e] flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Scarica il Client</span>
            </button>
            <button
              onClick={onBackToHome}
              className="px-8 py-3.5 rounded-full neu-pill-btn text-sm font-semibold text-white flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#51a4a2]" />
              <span>Torna alla Homepage</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { TriMode } from '../types';
import { INITIAL_NODES } from '../data/mockData';
import { 
  Sliders, 
  BrainCircuit, 
  Network, 
  Send, 
  Sparkles, 
  CheckCircle, 
  Eye, 
  ShieldAlert,
  ArrowRight,
  ZapOff
} from 'lucide-react';

export const MicroDemo: React.FC = () => {
  const [triMode, setTriMode] = useState<TriMode>('ON');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('n3');
  
  // Sample conversations tailored to each mode
  const conversationsByMode: Record<TriMode, Array<{ sender: 'user' | 'ai'; text: string; nodesCited?: string[] }>> = {
    ON: [
      {
        sender: 'user',
        text: 'Se la sonda termica rileva 87°C per oltre 120ms, qual è la sequenza di sicurezza prevista?',
      },
      {
        sender: 'ai',
        text: '🧠 [Ultra-Memory Attiva - Deduce dal Grafo Sinaptico]:\n\n1. In base alla regola "Soglia Sovratemperatura (85°C)", scatta il relè ausiliario K1 entro 120ms.\n2. La ventola attiva entra in modalità sovra-regime tachimetrico.\n3. Il segnale viene inviato sul Bus CANopen al PLC centrale (Allarme E-04).\n\nQuesto collegamento causale è stato convalidato e registrato nel tuo reticolo permanente.',
        nodesCited: ['Soglia Sovratemperatura (85°C)', 'Relè Protezione Termica', 'Protocollo Bus CANopen'],
      }
    ],
    AUTO: [
      {
        sender: 'user',
        text: 'Aggiorna la regola: se lo sbilanciamento supera il 5%, applica derating immediato al 60%.',
      },
      {
        sender: 'ai',
        text: '⚖️ [Ultra-Memory Euristica - Nuova Regola Rilevata]:\n\nIl motore ha identificato una regola tecnica formale di protezione termica. Ho creato il nuovo nodo "Derating 60% su sbilanciamento >5%" e l\'ho connesso al blocco "Architettura Inverter Trifase".\n\nI prompt informali successivi non altereranno questo nodo.',
        nodesCited: ['Architettura Inverter Trifase', 'Nuova Regola Derating'],
      }
    ],
    OFF: [
      {
        sender: 'user',
        text: 'Scrivi un riepilogo rapido e informale della giornata da mandare via chat al team.',
      },
      {
        sender: 'ai',
        text: '⚡ [Ultra-Memory Disattiva - Chat Effimera]:\n\n"Ciao a tutti! Oggi abbiamo completato i test di cablaggio e verificato le risposte termiche dell\'inverter. Tutto nominale, domani passiamo al collaudo del PLC."\n\n*Nessun dato scritto o letto dalla Mappa Neurale. Memoria RAM pulita.*',
      }
    ],
  };

  const currentChat = conversationsByMode[triMode];
  const selectedNode = INITIAL_NODES.find(n => n.id === selectedNodeId) || INITIAL_NODES[0];

  return (
    <section id="micro-demo" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-xs font-mono text-[#51a4a2] border border-[#51a4a2]/20 mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERAZIONE IN TEMPO REALE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Micro Demo: attiva e disattiva <br />
            <span className="text-[#51a4a2]">Ultra-Memory con un click</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#95ab9a] text-balance">
            Guarda come cambia il comportamento dell&apos;AI: passa da <strong>ON</strong> (interiorizzazione profonda con mappa attiva) a <strong>OFF</strong> (chat libera ed effimera senza memoria).
          </p>
        </div>

        {/* The Micro Demo Interactive Workspace */}
        <div className="max-w-6xl mx-auto rounded-3xl neu-flat p-4 sm:p-8 border border-[#51a4a2]/25">
          
          {/* Header Bar with Physical Tri-Mode Switch */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#51a4a2]/15">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#51a4a2] animate-pulse" />
              <span className="text-sm font-bold font-display text-white">
                Stato di Ultra-Memory Synapse:
              </span>
            </div>

            {/* Switch Buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-full neu-inset border border-[#51a4a2]/30">
              {(['ON', 'AUTO', 'OFF'] as TriMode[]).map((mode) => {
                const isActive = triMode === mode;
                return (
                  <button
                    key={mode}
                    onClick={() => setTriMode(mode)}
                    className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? mode === 'ON'
                          ? 'neu-pill-primary text-[#050b0b] shadow-[0_0_15px_rgba(81,164,162,0.5)]'
                          : mode === 'AUTO'
                          ? 'bg-[#1b2f2d] text-[#7ce0dd] border border-[#51a4a2]/50'
                          : 'bg-[#1e2424] text-white border border-white/20'
                        : 'text-[#68807f] hover:text-white'
                    }`}
                  >
                    <span>{mode}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Status Feedback */}
          <div className="mt-4 mb-6 px-4 py-3 rounded-2xl neu-inset text-xs flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white font-mono">
                EFFETTO SWITCH:
              </span>
              <span className="text-[#a4b8b7]">
                {triMode === 'ON' && 'Modalità ON: il modello interroga e aggiorna il grafo neurale sottostante. Ogni deduzione cita vincoli causali.'}
                {triMode === 'AUTO' && 'Modalità AUTO: Ultra-Memory analizza la domanda e decide autonomamente se aggiornare o no il reticolo.'}
                {triMode === 'OFF' && 'Modalità OFF: bypass totale del grafo. Risposte lampo, zero consumo di memoria e zero persistenza.'}
              </span>
            </div>
            <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
              triMode === 'ON' 
                ? 'bg-[#51a4a2]/15 text-[#51a4a2] border-[#51a4a2]/30' 
                : triMode === 'AUTO' 
                ? 'bg-amber-400/15 text-amber-300 border-amber-400/30' 
                : 'bg-zinc-700/30 text-zinc-400 border-zinc-600'
            }`}>
              {triMode === 'OFF' ? 'Graph: Standby' : 'Graph: Sincronizzato'}
            </span>
          </div>

          {/* Split View: Chat + Neural Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Fake Chat (6 cols) */}
            <div className="lg:col-span-6 neu-inset rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-[420px] border border-[#51a4a2]/15">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#51a4a2]/15 mb-3 text-xs text-[#8ca3a2]">
                  <span className="font-mono">Chat Simulatore Synapse</span>
                  <span className="text-[#51a4a2] font-mono">Llama 3.3 (Locale)</span>
                </div>

                {/* Messages */}
                <div className="space-y-3 overflow-y-auto max-h-[280px] pr-1">
                  {currentChat.map((msg, i) => (
                    <div 
                      key={i} 
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div 
                        className={`max-w-[90%] rounded-2xl p-3 text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'neu-flat text-white border border-[#51a4a2]/30'
                            : 'bg-[#0d1414] text-[#d4e4e3] border border-[#51a4a2]/20'
                        }`}
                      >
                        <p className="whitespace-pre-line">{msg.text}</p>
                        
                        {msg.nodesCited && msg.nodesCited.length > 0 && triMode !== 'OFF' && (
                          <div className="mt-2.5 pt-2 border-t border-[#51a4a2]/15 flex flex-wrap items-center gap-1">
                            <span className="text-[10px] font-mono text-[#51a4a2]">NODI CAUSALI:</span>
                            {msg.nodesCited.map((n, idx) => (
                              <span 
                                key={idx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#51a4a2]/10 text-[#51a4a2] border border-[#51a4a2]/20"
                              >
                                {n}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fake Input Area */}
              <div className="pt-3 border-t border-[#51a4a2]/15 flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={triMode === 'OFF' ? 'Chat rapida senza vincoli a grafo...' : 'Interrogazione logica legata alla mappa neurale...'}
                  className="flex-1 px-4 py-2 rounded-full neu-inset text-xs text-[#7d9392] border border-[#51a4a2]/20 select-none cursor-default"
                />
                <button 
                  onClick={() => setTriMode(triMode === 'ON' ? 'OFF' : 'ON')}
                  className="p-2.5 rounded-full neu-pill-primary text-[#070e0e] cursor-pointer"
                  title="Inverti modalità"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Neural Graph Live Reactivity (6 cols) */}
            <div className={`lg:col-span-6 rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-[420px] transition-all duration-300 border ${
              triMode === 'OFF' 
                ? 'neu-inset border-white/5 opacity-60' 
                : 'neu-flat border-[#51a4a2]/30'
            }`}>
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#51a4a2]/15 mb-2">
                  <div className="flex items-center gap-2">
                    <Network className={`w-4 h-4 ${triMode === 'OFF' ? 'text-zinc-500' : 'text-[#51a4a2]'}`} />
                    <span className="text-xs font-bold text-white font-display">
                      Reticolo Neurale in Tempo Reale
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#7d9493]">
                    {triMode === 'OFF' ? 'Modalità Epimera (Bypass)' : 'Nodi Interconnessi Attivi'}
                  </span>
                </div>

                {/* SVG Visualizer */}
                <div className="relative w-full h-[240px] my-auto">
                  <svg className="w-full h-full">
                    {/* Connections */}
                    {INITIAL_NODES.map(sourceNode => (
                      sourceNode.connections.map(targetId => {
                        const targetNode = INITIAL_NODES.find(n => n.id === targetId);
                        if (!targetNode) return null;
                        const isConnectedToSelected = selectedNodeId === sourceNode.id || selectedNodeId === targetId;

                        return (
                          <line
                            key={`${sourceNode.id}-${targetId}`}
                            x1={`${sourceNode.x}%`}
                            y1={`${sourceNode.y}%`}
                            x2={`${targetNode.x}%`}
                            y2={`${targetNode.y}%`}
                            stroke={
                              triMode === 'OFF'
                                ? 'rgba(255, 255, 255, 0.08)'
                                : isConnectedToSelected 
                                ? '#51a4a2' 
                                : 'rgba(81, 164, 162, 0.25)'
                            }
                            strokeWidth={triMode !== 'OFF' && isConnectedToSelected ? 2 : 1}
                            strokeDasharray={triMode === 'OFF' ? '3 3' : 'none'}
                          />
                        );
                      })
                    ))}

                    {/* Nodes */}
                    {INITIAL_NODES.map(node => {
                      const isSelected = selectedNodeId === node.id;
                      return (
                        <g 
                          key={node.id} 
                          onClick={() => triMode !== 'OFF' && setSelectedNodeId(node.id)}
                          className={triMode !== 'OFF' ? 'cursor-pointer' : 'cursor-not-allowed'}
                        >
                          <circle
                            cx={`${node.x}%`}
                            cy={`${node.y}%`}
                            r={node.category === 'core' ? 12 : 8}
                            fill={
                              triMode === 'OFF' 
                                ? '#1b2222' 
                                : isSelected 
                                ? '#51a4a2' 
                                : '#0e1717'
                            }
                            stroke={
                              triMode === 'OFF' 
                                ? '#3f4e4e' 
                                : isSelected 
                                ? '#ffffff' 
                                : '#51a4a2'
                            }
                            strokeWidth={isSelected && triMode !== 'OFF' ? 2 : 1.5}
                          />

                          <text
                            x={`${node.x}%`}
                            y={`${node.y + 8}%`}
                            textAnchor="middle"
                            fill={
                              triMode === 'OFF' 
                                ? '#546867' 
                                : isSelected 
                                ? '#51a4a2' 
                                : '#8da4a3'
                            }
                            fontSize="10"
                            className="pointer-events-none select-none"
                          >
                            {node.label}
                          </text>
                        </g>
                      );
                    })}
                  </svg>

                  {/* Overlay when in OFF mode */}
                  {triMode === 'OFF' && (
                    <div className="absolute inset-0 bg-[#080d0d]/80 backdrop-blur-[2px] rounded-xl flex flex-col items-center justify-center text-center p-4">
                      <ZapOff className="w-8 h-8 text-zinc-500 mb-2" />
                      <p className="text-xs font-bold text-white">Ultra-Memory è DISATTIVATA</p>
                      <p className="text-[11px] text-[#869b9a] max-w-xs mt-1">
                        La chat risponde in modo convenzionale senza registrare o consultare il reticolo.
                      </p>
                      <button
                        onClick={() => setTriMode('ON')}
                        className="mt-3 px-3 py-1.5 rounded-full neu-pill-primary text-[11px] font-bold text-black cursor-pointer"
                      >
                        Attiva Ultra-Memory (ON)
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Node summary bar */}
              <div className="pt-2 border-t border-[#51a4a2]/15 text-xs text-[#8ca3a2] flex items-center justify-between">
                <span>
                  {triMode === 'OFF' ? 'Stato: Inattivo' : `Nodo attivo: ${selectedNode.label}`}
                </span>
                <span className="font-mono text-[#51a4a2]">
                  {triMode === 'OFF' ? '0 byte scritti' : 'Affidabilità 99%+'}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

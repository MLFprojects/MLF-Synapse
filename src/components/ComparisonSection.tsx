import React from 'react';
import { COMPARISON_ROWS } from '../data/mockData';
import { Check, X, Sparkles, HelpCircle } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-xs font-mono text-[#51a4a2] border border-[#51a4a2]/20 mb-4">
            <span>TABELLA VANTAGGI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            I vantaggi di Ultra-Memory <br />
            <span className="text-[#51a4a2]">rispetto all&apos;AI tradizionale</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#95ab9a] text-balance">
            Confronto analitico tra l&apos;assimilazione assiomatica di Ultra-Memory Synapse, il RAG cieco dei chatbot commerciali e gli strumenti locali da riga di comando.
          </p>
        </div>

        {/* Comparison Table in Neumorphic Container */}
        <div id="tabella-vantaggi" className="rounded-3xl neu-flat p-4 sm:p-8 border border-[#51a4a2]/25 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[#51a4a2]/20">
                <th className="py-4 px-4 text-sm font-semibold text-white w-1/3">
                  Capacità Cognitiva & Tecnica
                </th>
                <th className="py-4 px-4 text-sm font-semibold text-[#51a4a2] w-1/3 bg-[#51a4a2]/10 rounded-t-2xl border-t border-x border-[#51a4a2]/30 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#51a4a2]" />
                    <span>Ultra-Memory Synapse</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-xs font-medium text-[#7d9392] w-1/6 text-center">
                  RAG / Chatbot Cloud
                </th>
                <th className="py-4 px-4 text-xs font-medium text-[#7d9392] w-1/6 text-center">
                  Tool Locali Raw (Ollama)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#51a4a2]/10 text-xs sm:text-sm">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-white bg-[#51a4a2]/5 border-x border-[#51a4a2]/20 font-medium text-center">
                    <div className="flex items-center justify-center gap-2 text-[#68dedb]">
                      <Check className="w-4 h-4 text-[#51a4a2] shrink-0" />
                      <span className="text-left">{row.synapse}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[#8ea4a3] text-center">
                    {row.chatgpt}
                  </td>
                  <td className="py-4 px-4 text-[#8ea4a3] text-center">
                    {row.localRaw}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

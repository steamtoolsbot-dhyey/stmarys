import React from 'react';
import { Award, Star, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export default function InstitutionalTicker() {
  const tickerItems = [
    { text: "Admissions Open for Academic Year 2025–2026", icon: Sparkles },
    { text: "45+ Years of Educational Legacy in Gondal (Since 1979)", icon: Star },
  ];

  const repeatedList = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="bg-navy-950 text-white overflow-hidden py-2 border-y border-amber-500/30 relative select-none z-20 shadow-xs">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-[11px] sm:text-xs font-semibold tracking-wide">
        {/* Sequence 1 */}
        {repeatedList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={`seq1-${idx}`} className="flex items-center gap-2.5 px-3">
              <Icon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span className="text-slate-200 hover:text-white transition-colors">{item.text}</span>
              <span className="text-amber-500/60 ml-6 text-xs font-serif">✦</span>
            </div>
          );
        })}

        {/* Sequence 2 (Duplicate for seamless loop) */}
        {repeatedList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={`seq2-${idx}`} className="flex items-center gap-2.5 px-3">
              <Icon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span className="text-slate-200 hover:text-white transition-colors">{item.text}</span>
              <span className="text-amber-500/60 ml-6 text-xs font-serif">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

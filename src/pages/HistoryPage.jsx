import React from 'react';
import { History, ChevronRight } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';

export default function HistoryPage({ onNavigate }) {
  const { historyPage } = fullSchoolData;

  return (
    <div className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-navy-900 font-semibold">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold">History</span>
        </div>

        {/* Page Header */}
        <ScrollReveal animation="fade-up" className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
            Our Founding Journey
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
            {historyPage.title}
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            {historyPage.subtitle}
          </p>
        </ScrollReveal>

        {/* History Text */}
        <div className="max-w-4xl space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mb-16">
          {historyPage.paragraphs.map((p, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 60}>
              <p className="font-normal">
                {p}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Historical Archives Gallery (All 8 Original Photos) - Staggered Pop */}
        <div className="pt-8 border-t border-sand-200">
          <ScrollReveal animation="fade-up">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mb-8">
              Historical Photo Archives
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {historyPage.images.map((item, idx) => (
              <ScrollReveal key={idx} animation="pop" delay={(idx % 4) * 80}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-soft border border-sand-200 flex flex-col group h-full">
                  <div className="h-48 overflow-hidden bg-sand-200">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 text-center flex-1 flex items-center justify-center">
                    <p className="text-xs font-semibold text-slate-700">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

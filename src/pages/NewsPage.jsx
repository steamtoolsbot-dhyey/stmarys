import React from 'react';
import { Newspaper, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';

export default function NewsPage({ onNavigate, onSelectNews }) {
  const { newsPage } = fullSchoolData;

  return (
    <div className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-navy-900 font-semibold">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold">News & Updates</span>
        </div>

        {/* Page Header */}
        <ScrollReveal animation="fade-up" className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
            Campus Announcements
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
            {newsPage.title}
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            {newsPage.subtitle}
          </p>
        </ScrollReveal>

        {/* News Grid - Staggered Pop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsPage.items.map((item, idx) => (
            <ScrollReveal key={idx} animation="pop" delay={(idx % 3) * 100}>
              <div
                className="bg-white rounded-3xl p-6 border border-sand-200 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-sand-100 text-navy-800 font-bold uppercase text-[10px] border border-sand-200">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy-950 mb-3 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectNews(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-gold-700 transition-colors"
                  >
                    <span>Read Full Notice</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}

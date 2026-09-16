import React from 'react';
import { Quote, Award, Sparkles } from 'lucide-react';
import { schoolContent } from '../data/schoolContent';

export default function PrincipalMessage() {
  const { principalQuote } = schoolContent;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 via-navy-950/5 to-slate-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:28px_28px] opacity-25"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lift border border-slate-100 relative overflow-hidden text-center">
          
          {/* Subtle Crest Watermark */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 pointer-events-none">
            <img 
              src="/assets/SCHOOLLOGOCOLOUR-full.png" 
              alt="School Crest" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-xs font-bold tracking-wider uppercase mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>{principalQuote.badge}</span>
          </div>

          {/* Quote Icon */}
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-navy-50 flex items-center justify-center text-navy-800 shadow-soft">
            <Quote className="w-7 h-7 text-gold-600" />
          </div>

          {/* The Inspiring Quote */}
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-950 leading-snug tracking-tight max-w-4xl mx-auto">
            “{principalQuote.quote}”
          </blockquote>

          {/* Author and Role Attribution */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center justify-center">
            <div className="text-xl font-bold font-serif text-navy-900 tracking-wide">
              {principalQuote.author}
            </div>
            <div className="text-sm font-semibold text-gold-700 tracking-wider uppercase mt-0.5">
              {principalQuote.role}
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              {principalQuote.school}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

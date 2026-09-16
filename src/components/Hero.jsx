import React from 'react';
import { ArrowRight, BookOpen, Sparkles, Award, ShieldCheck, Calendar } from 'lucide-react';
import { schoolContent } from '../data/schoolContent';

export default function Hero({ onOpenInquiry }) {
  const { hero } = schoolContent;

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Subtle Glow Spheres */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-100/60 to-amber-100/40 blur-3xl -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Prestige Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-200/80 text-navy-800 text-xs font-bold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{hero.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span className="text-gold-700">SINCE 1979</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15]">
              St. Mary’s School <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 via-navy-600 to-gold-700">
                Gondal
              </span>
            </h1>

            {/* Exact Tagline Preserved */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={hero.primaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-base shadow-card hover:shadow-lift transition-all group"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-navy-900 font-bold text-base border-2 border-navy-900/15 shadow-sm hover:border-navy-900/30 transition-all"
              >
                <Calendar className="w-4 h-4 text-gold-600" />
                <span>Admissions 2025-26</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Gujarat State Board</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-gold-600" />
                <span>Holistic Pedagogy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-navy-600" />
                <span>KG to Std 12</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main School Photo Card with Light Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={hero.bgImage}
                    alt="St. Mary's School Gondal Campus"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/20 to-transparent"></div>
                  
                  {/* Photo Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-gold-600 text-navy-950 inline-block mb-1">
                      Campus Life
                    </span>
                    <h2 className="text-base font-bold text-white leading-snug">
                      Inspiring Next-Generation Leaders
                    </h2>
                  </div>
                </div>
              </div>

              {/* Floating Badge: Official School Crest */}
              <div className="absolute -top-6 -left-6 bg-white p-3 rounded-2xl shadow-card border border-slate-100 hidden sm:flex items-center gap-3 animate-pulse-subtle">
                <img 
                  src={hero.logoImage} 
                  alt="St. Mary's School Crest" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <div className="text-xs font-bold text-navy-950">Official Crest</div>
                  <div className="text-[11px] text-slate-500 font-medium">Est. 1979</div>
                </div>
              </div>

              {/* Floating Stat Badge: Gujarat Board */}
              <div className="absolute -bottom-6 -right-6 bg-white p-3.5 rounded-2xl shadow-card border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-navy-950">Gujarat Board</div>
                  <div className="text-xs text-slate-500">English Medium</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {hero.quickStats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-soft hover:shadow-card transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-serif text-navy-900 group-hover:text-gold-600 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

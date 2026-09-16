import React from 'react';
import { Trophy, Shield, Sparkles, ArrowRight, Activity, Check } from 'lucide-react';
import { schoolContent } from '../data/schoolContent';

export default function CoCurricularSection() {
  const { coCurricular } = schoolContent;

  const iconMap = {
    Trophy: <Trophy className="w-6 h-6 text-gold-600" />,
    Shield: <Shield className="w-6 h-6 text-navy-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-600" />
  };

  return (
    <section id="activities" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-100/70 text-gold-900 text-xs font-bold tracking-wider uppercase border border-gold-300">
            <Activity className="w-3.5 h-3.5 text-gold-700" />
            <span>Beyond Academics</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            {coCurricular.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {coCurricular.subtitle}
          </p>
        </div>

        {/* Feature Hero Banner: Basketball Court Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white mb-12 group">
          <div className="h-72 sm:h-96 relative overflow-hidden">
            <img
              src={coCurricular.bannerImage}
              alt="St. Mary's School Basketball & Sports Court"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-600 text-navy-950 inline-block mb-2">
                  Campus Facilities
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  State-of-the-Art Sports Complex & Courts
                </h3>
                <p className="text-slate-200 text-sm mt-1 max-w-xl">
                  Providing every learner an expansive arena for basketball, track, karate rings, and outdoor discipline.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-navy-950 font-bold text-xs hover:bg-slate-100 shadow-md transition-all self-start sm:self-auto"
              >
                <span>{coCurricular.cta.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-navy-900" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Activities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coCurricular.activities.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-card hover:shadow-lift transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[act.icon] || <Activity className="w-6 h-6 text-navy-600" />}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-navy-950 mb-3 group-hover:text-navy-700 transition-colors">
                  {act.title}
                </h3>

                {/* Exact Description Preserved */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {act.description}
                </p>
              </div>

              {/* Specific Points */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {act.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <div className="w-3.5 h-3.5 rounded-full bg-navy-50 text-navy-700 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

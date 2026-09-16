import React, { useState } from 'react';
import { BookOpen, Award, ArrowRight, GraduationCap, Sparkles, Check } from 'lucide-react';
import { schoolContent } from '../data/schoolContent';

export default function CurriculumSection() {
  const { curriculum } = schoolContent;
  const [activeTab, setActiveTab] = useState('all');

  const filteredLevels = activeTab === 'all' 
    ? curriculum.levels 
    : curriculum.levels.filter(l => l.id === activeTab);

  return (
    <section id="academics" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-100/80 text-navy-800 text-xs font-bold tracking-wider uppercase border border-navy-200">
            <GraduationCap className="w-3.5 h-3.5 text-navy-700" />
            <span>Academic Pathways</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            {curriculum.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {curriculum.description}
          </p>

          {/* Interactive Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Sections
            </button>
            {curriculum.levels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setActiveTab(lvl.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === lvl.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {lvl.title}
              </button>
            ))}
          </div>
        </div>

        {/* Curriculum Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredLevels.map((lvl) => (
            <div
              key={lvl.id}
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-lift border border-slate-100 transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview with building photo */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={lvl.image}
                  alt={lvl.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
                
                {/* Badge on Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 text-navy-900 shadow-sm">
                    {lvl.badge}
                  </span>
                </div>

                {/* Level Title on Image bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl font-bold leading-tight">
                    {lvl.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Exact Grades from original website */}
                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gold-800 mb-0.5">
                      Grades Offered
                    </div>
                    <div className="font-semibold text-navy-900 text-sm whitespace-pre-line leading-relaxed">
                      {lvl.grades}
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {lvl.description}
                  </p>

                  {/* Highlights / Features */}
                  <div className="space-y-2">
                    {lvl.tags.map((tag, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-navy-900 hover:text-gold-700 transition-colors py-1 group/btn"
                  >
                    <span>{curriculum.cta.label}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

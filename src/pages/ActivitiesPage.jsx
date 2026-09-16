import React from 'react';
import { Activity, ChevronRight, Trophy } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';

export default function ActivitiesPage({ onNavigate }) {
  const { activitiesPage } = fullSchoolData;

  return (
    <div className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-navy-900 font-semibold">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold">Activities</span>
        </div>

        {/* Page Header */}
        <ScrollReveal animation="fade-up" className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
            Beyond the Classroom
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
            {activitiesPage.title}
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            {activitiesPage.subtitle}
          </p>
        </ScrollReveal>

        {/* Activities Grid - Staggered Pop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesPage.items.map((act, idx) => (
            <ScrollReveal key={idx} animation="pop" delay={idx * 120}>
              <div
                className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card border border-sand-200 transition-all flex flex-col group h-full"
              >
                <div className="h-56 overflow-hidden bg-sand-200">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy-950 mb-3">
                      {act.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}

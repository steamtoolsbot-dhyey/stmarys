import React from 'react';
import { BookOpen, CheckCircle, Award, ChevronRight } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage({ onNavigate }) {
  const { aboutPage } = fullSchoolData;

  return (
    <div className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-navy-900 font-semibold">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold">About Us</span>
        </div>

        {/* Page Title */}
        <ScrollReveal animation="fade-up" className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
            About The Institution
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
            {aboutPage.title}
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            {aboutPage.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            {aboutPage.paragraphs.map((p, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 70}>
                <p className="font-normal">
                  {p}
                </p>
              </ScrollReveal>
            ))}

            {/* School Aims */}
            <div className="mt-8 pt-6 border-t border-sand-200 space-y-4">
              <ScrollReveal animation="fade-up">
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  Core Institutional Aims
                </h3>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutPage.aims.map((aim, idx) => (
                  <ScrollReveal key={idx} animation="pop" delay={idx * 60}>
                    <div className="p-4 rounded-2xl bg-white border border-sand-200 flex items-start gap-3 shadow-xs h-full">
                      <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-navy-900">{aim}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Principal & Crest Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <ScrollReveal animation="pop" delay={150}>
              <div className="bg-white rounded-3xl p-6 border border-sand-200 text-center shadow-soft">
                <div className="w-48 h-56 mx-auto rounded-2xl overflow-hidden shadow-card border-2 border-sand-100 mb-4">
                  <img
                    src={aboutPage.principalImage}
                    alt="Fr. Rojant K - Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-950">
                  Fr. Rojant K
                </h3>
                <p className="text-xs uppercase font-bold text-gold-700 tracking-wider mt-0.5">
                  Principal
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  St. Mary's School Gondal
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={250}>
              <div className="bg-navy-950 text-white rounded-3xl p-6 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">Governance</span>
                <h4 className="font-serif text-lg font-bold">Rajkot Kelavani Samaj</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Run by the Catholic Minority community and recognized by the Department of Education, Gujarat State.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </div>
  );
}

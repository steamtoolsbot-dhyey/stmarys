import React from 'react';
import { Users, ChevronRight, ShieldCheck } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';

export default function ManagementPage({ onNavigate }) {
  const { managementPage } = fullSchoolData;

  return (
    <div className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-navy-900 font-semibold">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold">Management</span>
        </div>

        {/* Page Header */}
        <ScrollReveal animation="fade-up" className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
            Governance & Leadership
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
            {managementPage.title}
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            {managementPage.subtitle}
          </p>
        </ScrollReveal>

        {/* Paragraphs */}
        <div className="max-w-4xl space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mb-16">
          {managementPage.paragraphs.map((p, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 60}>
              <p className="font-normal">
                {p}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Former Principals Gallery with Tenures - Staggered Pop */}
        <div className="pt-8 border-t border-sand-200">
          <ScrollReveal animation="fade-up" className="mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Former Principals & Managers
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Honoring the visionary leaders who guided St. Mary's School through each era.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {managementPage.formerPrincipals.map((leader, idx) => (
              <ScrollReveal key={idx} animation="pop" delay={(idx % 5) * 70}>
                <div className="bg-white rounded-2xl p-4 border border-sand-200 text-center shadow-soft hover:shadow-card transition-all flex flex-col items-center h-full">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-sand-100 shadow-sm mb-3 bg-sand-200">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-serif text-base font-bold text-navy-950">
                    {leader.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-1 leading-tight">
                    {leader.tenure}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

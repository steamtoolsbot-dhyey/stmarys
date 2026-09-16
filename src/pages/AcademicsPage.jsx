import React from 'react';
import { BookOpen, ChevronRight, GraduationCap } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';

export default function AcademicsPage({ onNavigate, onOpenInquiry }) {
  const { academicsPage } = fullSchoolData;

  return (
    <div className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-navy-900 font-semibold">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold">Academics</span>
        </div>

        {/* Page Header */}
        <ScrollReveal animation="fade-up" className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
            Curriculum & Pedagogy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
            {academicsPage.title}
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            {academicsPage.subtitle}
          </p>
        </ScrollReveal>

        {/* Overview Box */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="bg-sand-100/90 rounded-3xl p-6 sm:p-8 border border-sand-200 mb-14 max-w-4xl">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
              {academicsPage.overview}
            </p>
          </div>
        </ScrollReveal>

        {/* Academic Divisions - Staggered Pop */}
        <div className="space-y-12">
          {academicsPage.sections.map((sec, idx) => (
            <ScrollReveal key={idx} animation="pop" delay={idx * 150}>
              <div
                className="bg-white rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-soft flex flex-col md:flex-row items-center gap-8"
              >
                <div className="w-full md:w-64 h-52 rounded-2xl overflow-hidden flex-shrink-0 bg-sand-100 border-2 border-sand-200/60 shadow-sm group">
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="inline-block px-3 py-1 rounded-md bg-gold-50 text-gold-800 text-xs font-bold uppercase tracking-wider border border-gold-200">
                    {sec.grades}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy-950">
                    {sec.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Banner */}
        <ScrollReveal animation="zoom" delay={150}>
          <div className="mt-16 bg-navy-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Admissions Open for Academic Year 2025-2026
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Apply today to secure a seat for your child in an inspiring academic atmosphere.
            </p>
            <button
              onClick={onOpenInquiry}
              className="px-8 py-3.5 rounded-xl bg-gold-600 hover:bg-gold-500 text-navy-950 font-bold text-sm shadow-md transition-all inline-block"
            >
              Submit Admission Inquiry
            </button>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

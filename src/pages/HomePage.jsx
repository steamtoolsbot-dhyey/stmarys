import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Quote, 
  Trophy, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  Users, 
  CheckCircle2, 
  Compass, 
  Camera 
} from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage({ onNavigate, onOpenInquiry, onSelectNews }) {
  const { home } = fullSchoolData;
  const [activeCampusPhoto, setActiveCampusPhoto] = useState(0);

  const campusShowcase = [
    {
      title: "Main Campus",
      subtitle: "Senior Academic Complex",
      src: "/assets/school-photo.jpg",
      tag: "Academic Wing"
    },
    {
      title: "Kindergarten & Primary",
      subtitle: "Early Learning Center",
      src: "/assets/kg-building.jpg",
      tag: "Foundational Wing"
    },
    {
      title: "Sports Complex",
      subtitle: "Basketball, Skating & Athletics",
      src: "/assets/basketball2.jpg",
      tag: "Co-Curricular Arena"
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. HERO — Aesthetic Light Theme with Decorative Background */}
      <section 
        className="relative pt-14 pb-24 lg:pt-20 lg:pb-32 border-b border-[var(--border-subtle)] overflow-hidden transition-colors duration-300"
        style={{
          background: 'linear-gradient(to bottom, var(--hero-bg-from), var(--hero-bg-via), var(--hero-bg-to))'
        }}
      >
        
        {/* === Full-Cover Hero Background Image === */}
        <div className="absolute inset-0">
          <img 
            src="/assets/kg-building.jpg" 
            alt="" 
            className="w-full h-full object-cover object-center"
          />
          {/* Luminous light overlay for readability */}
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to bottom, var(--hero-overlay-from), var(--hero-overlay-via), var(--hero-overlay-to))'
            }}
          ></div>
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, var(--hero-side-from), transparent, var(--hero-side-to))'
            }}
          ></div>
        </div>

        {/* === Hero Content === */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column — Text Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Prestige Ribbon */}
              <ScrollReveal animation="fade-down" delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-sand-300/80 text-navy-950 text-xs font-bold tracking-wider uppercase shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                  <span>St. Mary's School Gondal</span>
                  <span className="w-1 h-1 rounded-full bg-gold-400"></span>
                  <span className="text-gold-700">Since 1979</span>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-sand-400"></span>
                  <span className="hidden sm:inline-block text-slate-500 font-semibold">Diocese of Rajkot</span>
                </div>
              </ScrollReveal>

              {/* Main Headline */}
              <ScrollReveal animation="fade-up" delay={200}>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-navy-950 tracking-tight leading-[1.08]">
                  St. Mary's
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-amber-500">
                    School Gondal
                  </span>
                </h1>
              </ScrollReveal>

              {/* Tagline */}
              <ScrollReveal animation="fade-up" delay={300}>
                <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {home.hero.subtitle}
                </p>
              </ScrollReveal>

              {/* CTA Buttons */}
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => onNavigate('academics')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow-lg shadow-navy-900/20 hover:shadow-navy-900/30 transition-all group active:scale-[0.97]"
                  >
                    <span>{home.hero.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenInquiry}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-sand-50 text-navy-950 font-bold text-sm border-2 border-sand-300 shadow-sm hover:border-gold-500/60 transition-all active:scale-[0.97]"
                  >
                    <Calendar className="w-4 h-4 text-gold-600" />
                    <span>Admissions Inquiry</span>
                  </button>

                  <button
                    onClick={() => onNavigate('gallery')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-4 text-xs font-bold text-slate-600 hover:text-navy-950 transition-colors"
                  >
                    <Camera className="w-4 h-4 text-gold-600" />
                    <span>Campus Photos</span>
                  </button>
                </div>
              </ScrollReveal>

              {/* Trust Markers */}
              <ScrollReveal animation="fade-up" delay={500}>
                <div className="pt-5 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-600 font-medium border-t border-sand-200/90">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Gujarat State Board</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-gold-600" />
                    <span>English Medium Co-Ed</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-navy-700" />
                    <span>Nursery to Std 12</span>
                  </span>
                </div>
              </ScrollReveal>

            </div>

            {/* Right Column — Campus Photo Card + Stats */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Campus Photo Card - Pops Up */}
                <ScrollReveal animation="pop" delay={250}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-white group">
                    <div className="relative aspect-[4/3] overflow-hidden bg-sand-200">
                      <img
                        src={campusShowcase[activeCampusPhoto].src}
                        alt={campusShowcase[activeCampusPhoto].title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/15 to-transparent"></div>
                      
                      {/* Caption */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded bg-gold-600 text-navy-950 inline-block mb-1">
                          {campusShowcase[activeCampusPhoto].tag}
                        </span>
                        <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {campusShowcase[activeCampusPhoto].title}
                        </h2>
                        <p className="text-xs text-slate-200">
                          {campusShowcase[activeCampusPhoto].subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Floating Crest Badge - Pops Up */}
                <ScrollReveal animation="pop" delay={450} className="absolute -top-5 -left-4 z-20 hidden sm:block">
                  <div className="bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-sand-200 flex items-center gap-3">
                    <div className="w-11 h-11 bg-sand-50 rounded-xl p-1 flex items-center justify-center">
                      <img 
                        src="/assets/SCHOOLLOGOCOLOUR-full.png" 
                        alt="St. Mary's Crest" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="pr-2">
                      <div className="text-xs font-bold text-navy-950">Official Crest</div>
                      <div className="text-[11px] text-gold-700 font-semibold">Since 1979</div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Floating Trophy Badge - Pops Up */}
                <ScrollReveal animation="pop" delay={550} className="absolute -bottom-5 -right-4 z-20 hidden sm:block">
                  <div className="bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-sand-200 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-gold-700">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-navy-950">100% Pass Rate</div>
                      <div className="text-[11px] text-slate-500 font-medium">Gujarat Board Exams</div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Campus Photo Switcher */}
                <ScrollReveal animation="fade-up" delay={350}>
                  <div className="mt-8 flex items-center justify-center gap-2">
                    {campusShowcase.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveCampusPhoto(idx)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                          activeCampusPhoto === idx
                            ? 'bg-navy-900 text-white shadow-sm'
                            : 'bg-white text-slate-700 hover:bg-sand-100 border border-sand-200'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${activeCampusPhoto === idx ? 'bg-gold-400' : 'bg-slate-300'}`}></span>
                        <span>{item.title}</span>
                      </button>
                    ))}
                  </div>
                </ScrollReveal>

              </div>
            </div>

          </div>

          {/* Heritage Stats Row - Staggered Pop In */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto lg:max-w-none">
            <ScrollReveal animation="pop" delay={100}>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-sand-200 shadow-sm text-center hover:shadow-md hover:border-gold-300/50 transition-all">
                <div className="font-serif text-3xl font-extrabold text-navy-950">1979</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">Established</div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="pop" delay={200}>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-sand-200 shadow-sm text-center hover:shadow-md hover:border-gold-300/50 transition-all">
                <div className="font-serif text-3xl font-extrabold text-gold-700">100%</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">Board Results</div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="pop" delay={300}>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-sand-200 shadow-sm text-center hover:shadow-md hover:border-gold-300/50 transition-all">
                <div className="font-serif text-3xl font-extrabold text-navy-950">1500+</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">Students</div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="pop" delay={400}>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-sand-200 shadow-sm text-center hover:shadow-md hover:border-gold-300/50 transition-all">
                <div className="font-serif text-3xl font-extrabold text-navy-950">45+</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">Years Legacy</div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 2. LEARNING BEGINS WITH US */}
      <section className="py-20 bg-[var(--bg-canvas)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-light)] text-[var(--text-primary)] text-xs font-bold tracking-wider uppercase border border-[var(--accent-border)]">
                  <Compass className="w-3.5 h-3.5 text-amber-600" />
                  <span>Foundational Principles</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight mt-3">
                  {home.aboutSection.heading}
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {home.aboutSection.paragraphs[0]}
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={150}>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {home.aboutSection.paragraphs[1]}
                </p>
              </ScrollReveal>

              {/* 3 Core Strengths Cards - Staggered Pop */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <ScrollReveal animation="pop" delay={100}>
                  <div className="bg-white p-4 rounded-xl border border-[var(--border-subtle)] shadow-xs h-full">
                    <div className="font-bold text-navy-950 text-sm flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Inspirational
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Nurturing supportive spaces for young inquiring minds.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="pop" delay={200}>
                  <div className="bg-white p-4 rounded-xl border border-[var(--border-subtle)] shadow-xs h-full">
                    <div className="font-bold text-navy-950 text-sm flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      Character
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Fostering confident thinkers with deep moral integrity.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="pop" delay={300}>
                  <div className="bg-white p-4 rounded-xl border border-[var(--border-subtle)] shadow-xs h-full">
                    <div className="font-bold text-navy-950 text-sm flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-navy-700" />
                      Future-Ready
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Equipping students with real-world skills and acumen.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="fade-up" delay={250} className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow-md transition-all group"
                >
                  <span>{home.aboutSection.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </ScrollReveal>
            </div>

            {/* Right Images - Pop In */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal animation="pop" delay={150}>
                <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white bg-white group">
                  <img
                    src="/assets/school-photo.jpg"
                    alt="St. Mary's School Campus"
                    className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-4">
                <ScrollReveal animation="pop" delay={250}>
                  <div className="rounded-2xl overflow-hidden shadow-soft border-2 border-white bg-white group h-36">
                    <img
                      src="/assets/kg-building.jpg"
                      alt="Kindergarten Wing"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="pop" delay={350}>
                  <div className="rounded-2xl overflow-hidden shadow-soft border-2 border-white bg-white group h-36">
                    <img
                      src="/assets/414147378_1281744095854611_4937657999664666572_n-e1705119049190-1024x686.jpg"
                      alt="Student Celebration"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRINCIPAL'S VISION & STUDENT LIFE */}
      <section className="py-20 bg-[var(--bg-alt)] border-y border-[var(--border-subtle)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent-border)] inline-block">
              {home.principalSection.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
              Inspiring Generations Since 1979
            </h2>
          </ScrollReveal>

          {/* Photos Collage - Staggered Pop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {home.principalSection.images.map((src, i) => (
              <ScrollReveal key={i} animation="pop" delay={i * 150}>
                <div className="rounded-2xl overflow-hidden shadow-soft border-3 border-white group aspect-[4/3] bg-sand-200">
                  <img
                    src={src}
                    alt={`Student Life & Assembly ${i+1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Principal Quote Card with Father Rojant Portrait */}
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-[var(--border-subtle)] max-w-4xl mx-auto relative overflow-hidden">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Father Rojant Portrait Photo - Pop */}
                <div className="md:col-span-4 text-center">
                  <ScrollReveal animation="pop" delay={250}>
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-amber-100 shadow-md">
                      <img
                        src="/assets/site_images/fr_rojantk-1024x730.jpg"
                        alt="Fr. Rojant - Principal"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="mt-3">
                      <div className="font-serif text-lg font-bold text-navy-950">
                        {home.principalSection.author}
                      </div>
                      <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                        {home.principalSection.role}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        St. Mary's School - Gondal
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Quote Content */}
                <div className="md:col-span-8 space-y-4 text-center md:text-left">
                  <Quote className="w-10 h-10 text-amber-500 mx-auto md:mx-0 opacity-80" />
                  <blockquote className="font-serif text-xl sm:text-2xl font-semibold text-navy-950 leading-relaxed">
                    “{home.principalSection.quote}”
                  </blockquote>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Leading St. Mary's School Gondal with a commitment to value-oriented pedagogy, character formation, and holistic excellence.
                  </p>
                </div>

              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 4. CURRICULUM OVERVIEW */}
      <section className="py-20 bg-[var(--bg-canvas)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-alt)] text-navy-950 text-xs font-bold tracking-wider uppercase border border-[var(--border-subtle)]">
              <BookOpen className="w-3.5 h-3.5 text-navy-800" />
              <span>Comprehensive Education</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              {home.curriculumSection.title}
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {home.curriculumSection.description}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {home.curriculumSection.levels.map((lvl, idx) => (
              <ScrollReveal key={idx} animation="pop" delay={idx * 150}>
                <div
                  className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card border border-[var(--border-subtle)] transition-all duration-300 flex flex-col group h-full"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={lvl.image}
                      alt={lvl.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500 text-navy-950 inline-block mb-1">
                        Academic Wing
                      </span>
                      <h3 className="font-serif text-xl font-bold">{lvl.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-3.5">
                      <div className="text-xs font-bold text-navy-950 whitespace-pre-line leading-relaxed">
                        {lvl.grades}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => onNavigate('academics')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-amber-700 transition-colors"
                      >
                        <span>{home.curriculumSection.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                      </button>
                      <span className="text-[11px] text-slate-500 font-medium">Gujarat Board</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWS & UPDATES */}
      <section className="py-20 bg-[var(--bg-alt)] border-t border-[var(--border-subtle)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent-border)] inline-block mb-2">
                  Official Circulars
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
                  {home.newsSection.title}
                </h2>
              </div>
              <button
                onClick={() => onNavigate('news')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-xs font-bold text-navy-950 hover:bg-slate-50 border border-[var(--border-subtle)] shadow-xs transition-colors"
              >
                <span>View All News & Updates</span>
                <ArrowRight className="w-4 h-4 text-amber-600" />
              </button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {home.newsSection.items.map((item, idx) => (
              <ScrollReveal key={idx} animation="pop" delay={idx * 150}>
                <div
                  className="bg-white rounded-2xl p-6 border border-[var(--border-subtle)] shadow-soft hover:shadow-card transition-all flex flex-col justify-between group h-full"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-bold uppercase text-[10px] border border-[var(--border-subtle)]">
                        {item.category}
                      </span>
                      <span className="font-medium">{item.date}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-navy-950 mb-2 group-hover:text-amber-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <button
                      onClick={() => onSelectNews(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-amber-700 transition-colors"
                    >
                      <span>Read Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR CO-CURRICULAR ACTIVITIES */}
      <section className="py-20 bg-[var(--bg-canvas)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-alt)] text-navy-950 text-xs font-bold tracking-wider uppercase border border-[var(--border-subtle)]">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>Beyond Academics</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              {home.activitiesSection.title}
            </h2>
          </ScrollReveal>

          {/* Basketball Court Banner - Zoom In */}
          <ScrollReveal animation="zoom" delay={100}>
            <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white mb-12 group h-72 sm:h-96 relative bg-slate-200">
              <img
                src={home.activitiesSection.bannerImage}
                alt="Basketball Court"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent flex items-end p-6 sm:p-10">
                <div className="text-white flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block mb-1">Campus Sports Facilities</span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold">Furnished Skating Ring, Karate & Sports Complex</h3>
                  </div>
                  <button
                    onClick={() => onNavigate('activities')}
                    className="px-5 py-2.5 rounded-xl bg-white text-navy-950 font-bold text-xs hover:bg-slate-50 transition-all self-start sm:self-auto shadow-sm"
                  >
                    {home.activitiesSection.ctaText}
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3 Activities Cards - Staggered Pop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {home.activitiesSection.items.map((act, idx) => (
              <ScrollReveal key={idx} animation="pop" delay={idx * 150}>
                <div
                  className="bg-white rounded-3xl p-7 border border-[var(--border-subtle)] shadow-soft hover:shadow-card transition-all h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 text-amber-400 flex items-center justify-center mb-5 shadow-xs">
                    {idx === 0 ? <Trophy className="w-6 h-6" /> : (idx === 1 ? <Sparkles className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />)}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-950 mb-3">
                    {act.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

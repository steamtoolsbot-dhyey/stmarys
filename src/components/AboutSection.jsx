import React from 'react';
import { CheckCircle2, ArrowRight, BookCheck, Users, HeartHandshake } from 'lucide-react';
import { schoolContent } from '../data/schoolContent';

export default function AboutSection() {
  const { about } = schoolContent;

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 relative">
              
              {/* Image 1: Main building */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-card border-2 border-slate-100 group">
                  <img
                    src={about.images[1].src}
                    alt={about.images[1].caption}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Highlight callout box */}
                <div className="bg-navy-50 rounded-2xl p-5 border border-navy-100">
                  <div className="text-navy-950 font-bold text-sm mb-1 flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-gold-600" />
                    Supportive Care
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nurturing character, confidence, and early literacy since 1979.
                  </p>
                </div>
              </div>

              {/* Image 2 & 3: Students & Felicitation */}
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-card border-2 border-slate-100 group">
                  <img
                    src={about.images[0].src}
                    alt={about.images[0].caption}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="rounded-2xl overflow-hidden shadow-card border-2 border-slate-100 group">
                  <img
                    src={about.images[2].src}
                    alt={about.images[2].caption}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Center Floating Accent Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-600">
                  <BookCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-navy-950">Proven Record</div>
                  <div className="text-[10px] text-slate-500 font-medium">Holistic Excellence</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Original Text Preserved 100% */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-50 text-gold-800 text-xs font-bold tracking-wider uppercase border border-gold-200">
              <span>About St. Mary's School</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight">
              {about.headingPrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-gold-600">
                {about.headingHighlight}
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {about.paragraphs[0]}
            </p>

            {/* Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {about.paragraphs[1]}
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {about.highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-sm text-navy-900 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href={about.cta.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
              >
                <span>{about.cta.label}</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

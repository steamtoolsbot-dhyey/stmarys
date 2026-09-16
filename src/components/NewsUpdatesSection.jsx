import React, { useState } from 'react';
import { Newspaper, Calendar, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { schoolContent } from '../data/schoolContent';
import NewsModal from './NewsModal';

export default function NewsUpdatesSection({ onOpenInquiry }) {
  const { newsAndUpdates } = schoolContent;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedNews, setSelectedNews] = useState(null);

  const categories = ['All', 'Admissions', 'Ceremony & Awards', 'Careers', 'Student Spotlight'];

  const filteredNews = activeCategory === 'All'
    ? newsAndUpdates
    : newsAndUpdates.filter(item => item.category === activeCategory);

  return (
    <section id="news" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-50 text-gold-800 text-xs font-bold tracking-wider uppercase border border-gold-200 mb-3">
              <Newspaper className="w-3.5 h-3.5 text-gold-600" />
              <span>Campus Circulars</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              News & Updates
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Stay informed with the latest notifications, admission announcements, award ceremonies, and institutional updates.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-navy-950 shadow-sm'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => {
            const isAdmissions = item.category === 'Admissions';

            return (
              <div
                key={item.id}
                className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group border ${
                  isAdmissions 
                    ? 'bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20 border-gold-200/80 shadow-soft hover:shadow-card' 
                    : 'bg-white border-slate-100 shadow-soft hover:shadow-card'
                }`}
              >
                <div>
                  {/* Top Meta: Category & Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase ${
                      isAdmissions 
                        ? 'bg-gold-500/15 text-gold-800 border border-gold-300' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {item.badge || item.category}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-navy-950 group-hover:text-navy-700 transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedNews(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-gold-700 transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {isAdmissions && (
                    <button
                      onClick={onOpenInquiry}
                      className="px-2.5 py-1 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-[11px] font-bold transition-colors"
                    >
                      Inquire
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal */}
      {selectedNews && (
        <NewsModal
          item={selectedNews}
          onClose={() => setSelectedNews(null)}
          onOpenInquiry={onOpenInquiry}
        />
      )}
    </section>
  );
}

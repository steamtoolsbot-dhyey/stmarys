import React, { useState } from 'react';
import { Camera, ChevronRight, X, Maximize2 } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';

export default function GalleryPage({ onNavigate }) {
  const { galleryPage } = fullSchoolData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  const categories = ['All', 'Ceremonies & Events', 'Athletics & Sports', 'Academic Life', 'Campus Life'];

  const filteredPhotos = activeCategory === 'All'
    ? galleryPage.photos
    : galleryPage.photos.filter(p => p.category === activeCategory);

  return (
    <div className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-navy-900 font-semibold">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold">Photo Gallery</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <ScrollReveal animation="fade-up" className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
              Photographic Archives
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
              {galleryPage.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">
              {galleryPage.subtitle}
            </p>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-sand-200/80 rounded-2xl border border-sand-300">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'text-slate-700 hover:text-navy-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Photos Grid (All 41 Images) - Staggered Pop In */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, idx) => (
            <ScrollReveal key={photo.id} animation="pop" delay={(idx % 4) * 80}>
              <div
                onClick={() => setLightboxPhoto(photo)}
                className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-lift border border-slate-100 cursor-pointer aspect-[4/3] bg-slate-100 transition-all duration-300 h-full"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  <div className="self-end p-1.5 rounded-full bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 block">
                      {photo.category}
                    </span>
                    <span className="text-xs font-bold">{photo.title}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy-950/70 text-white hover:bg-navy-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] bg-black flex items-center justify-center">
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="p-5 bg-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-gold-700">
                  {lightboxPhoto.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-navy-950">
                  {lightboxPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxPhoto(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

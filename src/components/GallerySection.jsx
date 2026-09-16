import React, { useState } from 'react';
import { Camera, X, Maximize2, Sparkles } from 'lucide-react';
import { schoolContent } from '../data/schoolContent';

export default function GallerySection() {
  const { gallery } = schoolContent;
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filters = ['All', 'Campus', 'Infrastructure', 'Athletics', 'Student Life', 'Ceremonies'];

  const filteredGallery = activeFilter === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-50 text-navy-800 text-xs font-bold tracking-wider uppercase border border-navy-200 mb-3">
              <Camera className="w-3.5 h-3.5 text-navy-700" />
              <span>Visual Journey</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Photo Gallery
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Glimpses into our vibrant campus, state-of-the-art facilities, student accomplishments, and community celebrations.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
            {filters.map((flt) => (
              <button
                key={flt}
                onClick={() => setActiveFilter(flt)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === flt
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                {flt}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImg(item)}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-lift border border-slate-100 cursor-pointer aspect-[4/3] bg-slate-100 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="self-end p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold leading-tight mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxImg(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy-950/60 text-white hover:bg-navy-950 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                  {lightboxImg.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-navy-950">
                  {lightboxImg.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

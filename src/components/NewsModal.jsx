import React from 'react';
import { X, Calendar, Tag, ExternalLink, ArrowRight } from 'lucide-react';

export default function NewsModal({ item, onClose, onOpenInquiry }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-50 text-gold-800 border border-gold-200">
            {item.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{item.date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4 leading-snug">
          {item.title}
        </h3>

        {/* Content */}
        <div className="text-slate-600 text-sm leading-relaxed space-y-3 mb-6 bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
          <p className="font-medium text-slate-800">
            {item.excerpt}
          </p>
          <p>
            {item.fullText}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          {item.category === 'Admissions' && (
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-md transition-all"
            >
              <span>Submit Admission Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
            </button>
          )}

          <button
            onClick={onClose}
            className="w-full sm:w-auto sm:ml-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-700 font-semibold text-xs border border-sand-200 transition-colors"
          >
            <span>Close</span>
          </button>
        </div>

      </div>
    </div>
  );
}

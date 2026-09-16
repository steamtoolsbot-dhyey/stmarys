import React from 'react';
import { Phone, Clock, Bell, ArrowRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';
import { fullSchoolData } from '../data/fullSchoolData';

export default function TopBar({ onNavigate, onOpenInquiry }) {
  const { meta } = fullSchoolData;

  return (
    <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Admissions Ticker */}
        <div className="flex items-center gap-2 text-center md:text-left flex-wrap justify-center md:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 font-semibold border border-gold-500/30 text-[11px]">
            <Bell className="w-3 h-3" /> Notice
          </span>
          <span className="text-slate-300 font-medium">
            Admissions open for academic Year 2025-2026
          </span>
          <button 
            onClick={() => onNavigate('news')} 
            className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-0.5 ml-1 transition-colors"
          >
            Apply Now <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Right: Phone, Timings & Social */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>{meta.hours}</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <a 
              href={`tel:${meta.phones[0].tel}`} 
              className="hover:text-white transition-colors"
            >
              {meta.phones[0].display}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2 pl-2 border-l border-navy-800">
            <a 
              href="https://www.facebook.com/stmaryschoolgondal/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="text-slate-400 hover:text-[#1877F2] transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.instagram.com/st.marysschoolgondal1979/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="text-slate-400 hover:text-[#E4405F] transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.youtube.com/@st.marysschoolgondaloffici8240" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="text-slate-400 hover:text-[#FF0000] transition-colors"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded bg-gold-600 hover:bg-gold-500 text-navy-950 font-bold text-[11px] transition-all shadow-sm"
          >
            Quick Inquiry
          </button>
        </div>
      </div>
    </div>
  );
}

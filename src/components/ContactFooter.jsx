import React from 'react';
import { MapPin, Phone, Clock, Mail, ArrowUp, ExternalLink } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';
import { fullSchoolData } from '../data/fullSchoolData';

export default function ContactFooter({ onNavigate, onOpenInquiry }) {
  const { meta } = fullSchoolData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exploreLinks = [
    { label: "Home", id: "home" },
    { label: "History", id: "history" },
    { label: "About", id: "about" },
    { label: "Management", id: "management" },
    { label: "Staff", id: "staff" }
  ];

  const usefulLinks = [
    { label: "News and Updates", id: "news" },
    { label: "Academics", id: "academics" },
    { label: "Activities", id: "activities" },
    { label: "Contact", id: "contact" },
    { label: "Our Campus", id: "campus" }
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 relative pt-16 pb-12 overflow-hidden border-t-4 border-gold-600">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Address */}
          <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
                Campus Location
              </div>
              <h4 className="text-white font-bold text-base mb-1">
                {meta.name}
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {meta.address.line} <br />
                {meta.address.townPincode} <br />
                {meta.address.state}
              </p>
              <a
                href={meta.address.mapQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-gold-400 hover:text-gold-300 mt-2 transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Phones */}
          <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
                Direct Telephones
              </div>
              <div className="space-y-1.5 mt-2">
                {meta.phones.map((phone, pIdx) => (
                  <div key={pIdx} className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">{phone.label}:</span>
                    <a
                      href={`tel:${phone.tel}`}
                      className="text-white font-bold hover:text-gold-400 transition-colors"
                    >
                      {phone.display}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Office Hours & Inquiry */}
          <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
                Office Hours
              </div>
              <h4 className="text-white font-bold text-base mb-1">
                Open Monday – Saturday
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mb-3">
                {meta.hours}
              </p>
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold-600 hover:bg-gold-500 text-navy-950 text-xs font-bold transition-all shadow-sm"
              >
                <span>Request Callback</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Navigation & Branding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800/80">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/SCHOOLLOGOCOLOUR-full.png" 
                alt="St. Mary's School Logo" 
                className="w-12 h-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  {meta.title}
                </span>
                <span className="text-xs font-medium text-gold-400 tracking-wider">
                  Since 1979 • Gujarat State Board
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {meta.tagline}
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/stmaryschoolgondal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/st.marysschoolgondal1979/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E4405F] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@st.marysschoolgondaloffici8240"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#FF0000] transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-serif">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {exploreLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-serif">
              Useful Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {usefulLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Scroll to Top */}
          <div className="lg:col-span-1 flex lg:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-navy-900 hover:bg-gold-600 hover:text-navy-950 text-slate-400 transition-all shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-400 leading-relaxed">
          <p>{meta.copyright}</p>
        </div>

      </div>
    </footer>
  );
}

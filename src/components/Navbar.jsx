import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, GraduationCap, PhoneCall } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';

export default function Navbar({ currentPage, onNavigate, onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 rainbow-border-bottom ${
      isScrolled ? 'glass-depth shadow-soft py-2.5' : 'bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--header-border)] py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand & Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3.5 group text-left"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-white rounded-full p-1 shadow-sm border border-sand-200 transition-transform group-hover:scale-105">
            <img 
              src="/assets/SCHOOLLOGOCOLOUR-full.png" 
              alt="St. Mary's School Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-navy-950 group-hover:text-navy-700 transition-colors">
                St. Mary's School
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200/80">
                Gondal
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium tracking-wide flex items-center gap-1.5">
              <span>Since 1979</span>
              <span className="w-1 h-1 rounded-full bg-gold-500 inline-block"></span>
              <span className="text-gold-700 font-semibold">Gujarat Board</span>
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {fullSchoolData.navigation.map((item, idx) => {
            if (item.children) {
              const isGroupActive = item.children.some(c => c.id === currentPage);

              return (
                <div 
                  key={idx} 
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                      isGroupActive 
                        ? 'text-navy-950 bg-sand-200/70 font-bold' 
                        : 'text-slate-700 hover:text-navy-950 hover:bg-sand-100/70'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown Menu — Glassmorphism */}
                  <div className={`absolute top-full left-0 w-52 py-2 glass-depth rounded-2xl shadow-card border border-sand-200/80 transition-all duration-200 ${
                    activeDropdown === idx ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    {item.children.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleNavClick(sub.id)}
                        className={`w-full text-left block px-4 py-2 text-sm font-medium transition-all ${
                          currentPage === sub.id
                            ? 'text-navy-950 bg-sand-100 font-bold pl-5 text-gold-800'
                            : 'text-slate-700 hover:text-navy-950 hover:bg-sand-50 hover:pl-5'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = currentPage === item.id;

            return (
              <button
                key={idx}
                onClick={() => handleNavClick(item.id)}
                className={`nav-active-line px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-navy-950 bg-sand-200/70 font-bold active'
                    : 'text-slate-700 hover:text-navy-950 hover:bg-sand-100/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 transition-all shadow-sm active:scale-95 ripple-effect"
          >
            <GraduationCap className="w-4 h-4 text-gold-400" />
            <span>Admissions</span>
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenInquiry}
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-navy-900"
          >
            Admissions
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto px-6 py-6 animate-slide-up">
          <div className="flex flex-col gap-3">
            {fullSchoolData.navigation.map((item, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-2">
                {item.children ? (
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {item.label}
                    </div>
                    <div className="pl-3 flex flex-col gap-2">
                      {item.children.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleNavClick(sub.id)}
                          className={`text-left text-sm py-1 font-semibold ${
                            currentPage === sub.id ? 'text-navy-900 font-bold' : 'text-slate-700'
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left text-sm py-1.5 font-semibold ${
                      currentPage === item.id ? 'text-navy-900 font-bold' : 'text-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-navy-900 text-white font-bold text-sm"
              >
                <GraduationCap className="w-4 h-4 text-gold-400" />
                Admission Inquiry
              </button>
              <a
                href="tel:02825297026"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm"
              >
                <PhoneCall className="w-4 h-4 text-navy-700" />
                Call: 91 - 2825-297026
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

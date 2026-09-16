import React, { useState, useEffect } from 'react';
import { Palette, Check, Sparkles, X, ChevronUp, ChevronDown } from 'lucide-react';

export const THEMES = [
  {
    id: 'oxford',
    name: '1. Oxford Royal',
    tagline: 'Modern Heritage',
    colors: ['#0A192F', '#D97706', '#F8FAFC'],
    description: 'Crisp porcelain canvas with deep Oxford royal navy & radiant amber gold.'
  },
  {
    id: 'sage',
    name: '2. Nordic Sage',
    tagline: 'Botanical Campus',
    colors: ['#142820', '#C25E3E', '#F4F7F4'],
    description: 'Fresh morning sage canvas with evergreen spruce & warm terracotta clay.'
  },
  {
    id: 'cambridge',
    name: '3. Cambridge Crimson',
    tagline: 'Ivy Collegiate',
    colors: ['#881337', '#B45309', '#FAF7F2'],
    description: 'Warm English alabaster with traditional crimson burgundy & burnished brass.'
  },
  {
    id: 'riviera',
    name: '4. Riviera Cobalt',
    tagline: 'Modern Academy',
    colors: ['#091E3A', '#2563EB', '#F4F8FC'],
    description: 'Ice pearl canvas with electric coastal cobalt blue & high-tech clarity.'
  },
  {
    id: 'cashmere',
    name: '5. Warm Cashmere',
    tagline: 'Editorial Minimalist',
    colors: ['#221A15', '#D97706', '#F7F4EE'],
    description: 'Soft cashmere wool canvas with rich espresso & warm Tuscan ochre.'
  },
  {
    id: 'elysian',
    name: '6. Elysian Platinum',
    tagline: 'Boutique Prestige',
    colors: ['#1B1325', '#C5A059', '#F8F7FA'],
    description: 'Pearlescent platinum canvas with midnight plum & champagne gold.'
  }
];

export default function ThemeSelector({ currentTheme = 'oxford', onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(currentTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('sms_theme') || 'oxford';
    setActiveTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (onThemeChange) {
      onThemeChange(savedTheme);
    }
  }, []);

  const handleSelectTheme = (themeId) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('sms_theme', themeId);
    if (onThemeChange) {
      onThemeChange(themeId);
    }
  };

  const currentThemeObj = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Expanded Theme Chooser Modal */}
      {isOpen && (
        <div className="mb-3 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-2xl p-4 w-[340px] sm:w-[380px] animate-fade-in transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200/60">
                <Palette className="w-4 h-4" />
              </span>
              <div>
                <h4 className="font-serif text-sm font-bold text-slate-900 leading-none">
                  Aesthetic Light Themes
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Select a theme to preview instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close theme selector"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Theme List */}
          <div className="mt-3 space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {THEMES.map((theme) => {
              const isSelected = activeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleSelectTheme(theme.id)}
                  className={`w-full text-left p-2.5 rounded-2xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-50 border-amber-500 shadow-xs ring-2 ring-amber-500/20'
                      : 'bg-white hover:bg-slate-50 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Color Swatch Triad */}
                    <div className="flex -space-x-1.5 flex-shrink-0">
                      <span
                        className="w-5 h-5 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: theme.colors[0] }}
                      />
                      <span
                        className="w-5 h-5 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: theme.colors[1] }}
                      />
                      <span
                        className="w-5 h-5 rounded-full border border-slate-200 shadow-xs"
                        style={{ backgroundColor: theme.colors[2] }}
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900 leading-snug">
                          {theme.name}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          • {theme.tagline}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 line-clamp-1">
                        {theme.description}
                      </p>
                    </div>
                  </div>

                  {isSelected ? (
                    <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      Try
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Currently previewing: <strong>{currentThemeObj.tagline}</strong></span>
            <span className="text-amber-700 font-bold">Theme 1 active</span>
          </div>
        </div>
      )}

      {/* Floating Toggle Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-900 text-xs font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all group"
      >
        <span className="flex -space-x-1">
          <span
            className="w-3.5 h-3.5 rounded-full border border-white"
            style={{ backgroundColor: currentThemeObj.colors[0] }}
          />
          <span
            className="w-3.5 h-3.5 rounded-full border border-white"
            style={{ backgroundColor: currentThemeObj.colors[1] }}
          />
          <span
            className="w-3.5 h-3.5 rounded-full border border-slate-200"
            style={{ backgroundColor: currentThemeObj.colors[2] }}
          />
        </span>
        <span>Theme: {currentThemeObj.name.split(' ')[1]}</span>
        <span className="p-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
          {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
        </span>
      </button>
    </div>
  );
}

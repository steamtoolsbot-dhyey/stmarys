import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3.5px] z-[999] pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500 transition-all duration-75 ease-out relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Radiant Glowing Tip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-amber-300 rounded-full blur-xs opacity-90 shadow-[0_0_12px_rgba(245,158,11,1)]" />
      </div>
    </div>
  );
}

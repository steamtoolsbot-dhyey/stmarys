import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* Top-Right Luminous Amber Glow */}
      <div 
        className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-amber-300/15 via-gold-200/10 to-transparent blur-3xl animate-float-1"
        style={{ willChange: 'transform' }}
      />
      
      {/* Mid-Left Soft Sapphire Depth */}
      <div 
        className="absolute top-[40%] -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-300/10 via-indigo-200/5 to-transparent blur-3xl animate-float-2"
        style={{ willChange: 'transform' }}
      />

      {/* Bottom-Center Warm Academic Haze */}
      <div 
        className="absolute -bottom-40 left-[25%] w-[650px] h-[650px] rounded-full bg-gradient-to-t from-amber-400/10 via-yellow-200/5 to-transparent blur-3xl animate-float-1"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}

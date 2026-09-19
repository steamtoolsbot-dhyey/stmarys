import React, { useState, useEffect } from 'react';

/**
 * PageTransition — A golden diagonal wipe overlay for page transitions.
 * Controlled by `isActive` prop and runs on initial site load.
 */
export default function PageTransition({ isActive, onComplete }) {
  const [phase, setPhase] = useState('entering'); // Start in entering for initial load

  // Initial load screen
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase('exiting');
      const timer2 = setTimeout(() => {
        setPhase('idle');
      }, 500);
      return () => clearTimeout(timer2);
    }, 450);
    return () => clearTimeout(timer1);
  }, []);

  // Navigation transition
  useEffect(() => {
    if (isActive) {
      setPhase('entering');
      const timer1 = setTimeout(() => {
        setPhase('exiting');
        const timer2 = setTimeout(() => {
          setPhase('idle');
          onComplete?.();
        }, 500);
        return () => clearTimeout(timer2);
      }, 400);
      return () => clearTimeout(timer1);
    }
  }, [isActive, onComplete]);

  if (phase === 'idle') return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99990,
        pointerEvents: phase !== 'idle' ? 'all' : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Primary gold curtain */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, var(--accent-primary) 100%)',
          transform: phase === 'entering' ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
          transformOrigin: phase === 'entering' ? 'left' : 'right',
        }}
      />
      {/* Secondary dark curtain with delay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--text-primary)',
          transform: phase === 'entering' ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0.08s',
        }}
      />
      {/* Center logo flash */}
      {phase === 'entering' && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            opacity: phase === 'entering' ? 1 : 0,
            transition: 'opacity 0.2s ease 0.2s',
          }}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
            <img 
              src="/assets/SCHOOLLOGOCOLOUR-full.png" 
              alt="" 
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}


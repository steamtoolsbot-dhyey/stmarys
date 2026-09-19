import React, { useRef, useState, useEffect } from 'react';

/**
 * TextReveal — Kinetic typography with word-by-word staggered reveal.
 * Triggers on scroll into viewport using IntersectionObserver.
 */
export default function TextReveal({
  text,
  as: Component = 'span',
  mode = 'word', // 'word' | 'letter'
  delay = 0,
  stagger = 60,
  duration = 600,
  className = '',
  style = {},
  threshold = 0.15,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  const units = mode === 'letter' ? text.split('') : text.split(' ');

  return (
    <Component
      ref={ref}
      className={`text-reveal-wrapper ${className}`}
      style={{ display: 'inline', ...style }}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(100%) rotateX(-80deg)',
            transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1), transform ${duration}ms cubic-bezier(0.16,1,0.3,1)`,
            transitionDelay: `${delay + i * stagger}ms`,
            willChange: 'opacity, transform',
            transformOrigin: 'bottom center',
          }}
          aria-hidden="true"
        >
          {unit}
          {mode === 'word' && i < units.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Component>
  );
}

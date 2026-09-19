import React, { useRef, useState, useEffect } from 'react';

/**
 * RingGauge — Animated SVG ring/arc that fills when scrolled into view.
 * Number counts up inside the ring.
 */
export default function RingGauge({
  value,
  max = 100,
  label,
  suffix = '',
  prefix = '',
  size = 120,
  strokeWidth = 6,
  duration = 2000,
  color = 'var(--accent-primary)',
  trackColor = 'var(--border-subtle)',
  className = '',
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const animRef = useRef(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = isVisible ? (value / max) : 0;
  const strokeDashoffset = circumference - (progress * circumference);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Count up animation
  useEffect(() => {
    if (!isVisible) return;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setCurrentValue(Math.round(eased * value));
      if (t < 1) {
        animRef.current = requestAnimationFrame(animate);
      }
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90"
        >
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />
          {/* Progress arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: `stroke-dashoffset ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
            }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-2xl font-extrabold text-[var(--text-primary)]">
            {prefix}{currentValue}{suffix}
          </span>
        </div>
      </div>
      {label && (
        <div className="text-sm font-bold text-[var(--text-secondary)] text-center max-w-[140px]">
          {label}
        </div>
      )}
    </div>
  );
}

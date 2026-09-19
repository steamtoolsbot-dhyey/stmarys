import React, { useState, useEffect, useRef } from 'react';

/**
 * StaggerGrid — Wraps children in a grid with staggered diagonal entrance animation.
 * Children cascade from top-left to bottom-right.
 */
export default function StaggerGrid({
  children,
  className = '',
  stagger = 80,
  threshold = 0.1,
  columns,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
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

  const childArray = React.Children.toArray(children);
  const cols = columns || Math.min(childArray.length, 4);

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, i) => {
        // Calculate diagonal index for stagger (row + col based)
        const row = Math.floor(i / cols);
        const col = i % cols;
        const diagIndex = row + col;

        return (
          <div
            key={i}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1), transform 500ms cubic-bezier(0.16,1,0.3,1)`,
              transitionDelay: `${diagIndex * stagger}ms`,
              willChange: 'opacity, transform',
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

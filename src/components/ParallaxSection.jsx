import React, { useEffect, useRef, useState } from 'react';

/**
 * ParallaxSection — Applies vertical parallax displacement to children.
 * `speed` controls the parallax factor: 0 = static, 0.5 = half speed, -0.2 = reverse.
 */
export default function ParallaxSection({
  children,
  speed = 0.3,
  className = '',
  style = {},
  as: Component = 'div',
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowH = window.innerHeight;
            // Only compute when element is near viewport
            if (rect.bottom > -200 && rect.top < windowH + 200) {
              const scrolled = windowH - rect.top;
              setOffset(scrolled * speed);
            }
          }
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translateY(${offset}px)`,
        willChange: 'transform',
        transition: 'transform 0.1s linear',
      }}
    >
      {children}
    </Component>
  );
}

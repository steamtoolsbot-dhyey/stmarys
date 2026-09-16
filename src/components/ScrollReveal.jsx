import React, { useState, useEffect, useRef } from 'react';

/**
 * ScrollReveal Component
 * High-performance, hardware-accelerated scroll-triggered animations.
 * Provides 'pop', 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom', and 'fade' effects.
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 650,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  className = '',
  style = {},
  as: Component = 'div',
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // If IntersectionObserver is not available, reveal immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  // Initial hidden transform styles based on animation type
  const getInitialTransform = () => {
    switch (animation) {
      case 'pop':
        return 'scale(0.88) translateY(18px)';
      case 'fade-up':
        return 'translateY(28px)';
      case 'fade-down':
        return 'translateY(-28px)';
      case 'fade-left':
        return 'translateX(-28px)';
      case 'fade-right':
        return 'translateX(28px)';
      case 'zoom':
        return 'scale(0.92)';
      case 'fade':
      default:
        return 'none';
    }
  };

  const timingFunction = animation === 'pop' 
    ? 'cubic-bezier(0.175, 0.885, 0.32, 1.25)' // Spring-like pop ease
    : 'cubic-bezier(0.16, 1, 0.3, 1)'; // Silky smooth glide ease

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getInitialTransform(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction,
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform',
    ...style,
  };

  return (
    <Component
      ref={domRef}
      style={animationStyle}
      className={`scroll-reveal ${isVisible ? 'is-revealed' : 'is-hidden'} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

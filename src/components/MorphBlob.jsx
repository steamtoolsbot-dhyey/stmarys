import React from 'react';

/**
 * MorphBlob — Animated organic blob shapes.
 * Decorative background elements that morph between shapes using CSS border-radius animation.
 */
export default function MorphBlob({
  color = 'var(--accent-primary)',
  opacity = 0.08,
  size = 400,
  className = '',
  speed = 'normal', // 'slow' | 'normal' | 'fast'
  style = {},
}) {
  const durations = {
    slow: '25s',
    normal: '15s',
    fast: '8s',
  };

  return (
    <div
      className={`morph-blob ${className}`}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 40%, ${color}, transparent 70%)`,
        opacity,
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        animation: `morph-blob-shape ${durations[speed] || durations.normal} ease-in-out infinite`,
        filter: 'blur(40px)',
        pointerEvents: 'none',
        willChange: 'border-radius',
        ...style,
      }}
      aria-hidden="true"
    />
  );
}

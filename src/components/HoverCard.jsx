import React, { useState } from 'react';

/**
 * HoverCard — Rich tooltip preview card with spring animations.
 * Shows thumbnail + brief text when hovering over a trigger element.
 */
export default function HoverCard({
  trigger,
  title,
  description,
  image,
  children,
  className = '',
  position = 'bottom', // 'bottom' | 'top'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEnter = () => {
    setIsOpen(true);
    setIsAnimating(true);
  };

  const handleLeave = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger element */}
      {trigger || children}

      {/* Preview card */}
      {isOpen && (
        <div
          className="absolute z-50 w-64"
          style={{
            [position === 'top' ? 'bottom' : 'top']: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            paddingTop: position === 'bottom' ? 8 : 0,
            paddingBottom: position === 'top' ? 8 : 0,
          }}
        >
          <div
            className="rounded-2xl overflow-hidden shadow-xl border border-[var(--border-subtle)]"
            style={{
              background: 'var(--bg-card)',
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? 'translateY(0) scale(1)' : `translateY(${position === 'top' ? '8px' : '-8px'}) scale(0.96)`,
              transition: 'opacity 0.25s cubic-bezier(0.16,1,0.3,1), transform 0.25s cubic-bezier(0.16,1,0.3,1)',
              willChange: 'opacity, transform',
            }}
          >
            {image && (
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={image}
                  alt={title || ''}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-3">
              {title && (
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-0.5">
                  {title}
                </h4>
              )}
              {description && (
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

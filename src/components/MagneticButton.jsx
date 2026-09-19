import React, { useRef, useState } from 'react';

/**
 * MagneticButton — A button wrapper that "magnetizes" toward the cursor.
 * Wraps any children with magnetic hover physics.
 */
export default function MagneticButton({ 
  children, 
  className = '', 
  strength = 0.35,
  as: Component = 'button',
  ...props 
}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('translate(0px, 0px)');

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) * strength;
    const dy = (e.clientY - centerY) * strength;
    setTransform(`translate(${dx}px, ${dy}px)`);
  };

  const handleMouseLeave = () => {
    setTransform('translate(0px, 0px)');
  };

  return (
    <Component
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform',
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

import React, { useEffect, useRef } from 'react';

/**
 * ParticleField — Full-screen canvas with drifting golden particles.
 * Responds to mouse proximity. Lightweight — no external library.
 */
export default function ParticleField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouse = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', onMouseMove);

    const PARTICLE_COUNT = 60;
    const particles = [];

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = canvas.offsetHeight + Math.random() * 50;
        this.size = Math.random() * 3 + 1;
        this.speedY = -(Math.random() * 0.6 + 0.15);
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.15;
        this.hue = Math.random() * 30 + 35; // Gold range: 35-65
        this.life = 0;
        this.maxLife = Math.random() * 400 + 200;
        this.wobbleSpeed = Math.random() * 0.02 + 0.005;
        this.wobbleAmp = Math.random() * 20 + 10;
        this.startX = this.x;
      }
      update() {
        this.life++;
        if (this.life > this.maxLife || this.y < -20) {
          this.reset();
          return;
        }

        // Wobble
        this.x = this.startX + Math.sin(this.life * this.wobbleSpeed) * this.wobbleAmp;
        this.y += this.speedY;
        this.startX += this.speedX;

        // Mouse repulsion
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          this.x += (dx / dist) * force * 3;
          this.y += (dy / dist) * force * 3;
          this.startX += (dx / dist) * force * 0.5;
        }

        // Fade in/out based on life
        const fadeIn = Math.min(this.life / 30, 1);
        const fadeOut = Math.max(1 - (this.life - this.maxLife + 60) / 60, 0);
        this.currentOpacity = this.opacity * fadeIn * fadeOut;
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 85%, 58%, ${this.currentOpacity})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 85%, 58%, ${this.currentOpacity * 0.15})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = new Particle();
      p.y = Math.random() * canvas.offsetHeight; // Spread initially
      p.life = Math.random() * 200; // Stagger start
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const p of particles) {
        p.update();
        p.draw(ctx);
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
        zIndex: 1,
      }}
    />
  );
}

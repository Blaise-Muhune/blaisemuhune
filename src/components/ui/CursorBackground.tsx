'use client';

import { useEffect, useRef } from 'react';

export default function CursorBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create circles with different colors and sizes
    const circles = Array.from({ length: 5 }, (_, i) => {
      const circle = document.createElement('div');
      const colors = [
        'from-blue-500/20 to-purple-500/20',
        'from-purple-500/20 to-pink-500/20',
        'from-pink-500/20 to-blue-500/20',
        'from-blue-400/20 to-purple-400/20',
        'from-purple-400/20 to-pink-400/20'
      ];
      const darkColors = [
        'dark:from-blue-400/20 dark:to-purple-400/20',
        'dark:from-purple-400/20 dark:to-pink-400/20',
        'dark:from-pink-400/20 dark:to-blue-400/20',
        'dark:from-blue-300/20 dark:to-purple-300/20',
        'dark:from-purple-300/20 dark:to-pink-300/20'
      ];
      
      circle.className = `absolute rounded-full bg-gradient-to-r ${colors[i]} ${darkColors[i]}`;
      circle.style.width = `${100 + i * 100}px`;
      circle.style.height = `${100 + i * 100}px`;
      circle.style.filter = 'blur(80px)';
      circle.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      circle.style.opacity = '0.8';
      container.appendChild(circle);
      return circle;
    });
    circlesRef.current = circles;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const speed = 0.1;

    const animate = () => {
      // Smoothly move towards the target position
      mouseX += (targetX - mouseX) * speed;
      mouseY += (targetY - mouseY) * speed;

      circles.forEach((circle, index) => {
        const offsetX = Math.sin(Date.now() * 0.001 + index) * 20;
        const offsetY = Math.cos(Date.now() * 0.001 + index) * 20;
        
        circle.style.transform = `translate(
          ${mouseX - parseInt(circle.style.width) / 2 + offsetX}px, 
          ${mouseY - parseInt(circle.style.height) / 2 + offsetY}px
        )`;
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      circles.forEach(circle => circle.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    />
  );
} 
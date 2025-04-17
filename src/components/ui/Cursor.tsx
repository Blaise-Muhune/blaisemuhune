'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      style={{
        background: resolvedTheme === 'dark'
          ? `radial-gradient(700px at ${position.x}px ${position.y}px, rgba(124, 58, 237, 0.15), transparent 70%)`
          : `radial-gradient(700px at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 70%)`,
      }}
    />
  );
} 
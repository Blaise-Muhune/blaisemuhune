'use client';

import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from 'next-themes';
import CursorBackground from '../ui/CursorBackground';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CursorBackground />
      <div className="min-h-screen flex flex-col bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
} 
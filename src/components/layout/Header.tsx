'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import StatusStrip from '@/components/layout/StatusStrip';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0.5 left-0 right-0 z-50 border-b-2 border-border bg-surface/95 backdrop-blur-sm">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight text-ink transition-opacity hover:opacity-70 md:text-xl"
          >
            Blaise Muhune
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`cursor-pointer px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                    active
                      ? 'bg-ink text-on-primary'
                      : 'text-muted-foreground hover:text-ink'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {mounted ? (
              <button
                type="button"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="cursor-pointer border-2 border-border px-2 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors duration-200 hover:border-ink sm:px-3 sm:text-xs"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
              >
                <span className={isDark ? 'text-muted-foreground' : 'text-ink'}>
                  Light
                </span>
                <span className="mx-1 text-border" aria-hidden="true">
                  /
                </span>
                <span className={isDark ? 'text-ink' : 'text-muted-foreground'}>
                  Dark
                </span>
              </button>
            ) : (
              <div
                className="h-9 w-[4.5rem] border-2 border-border sm:w-24"
                aria-hidden="true"
              />
            )}

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer border-2 border-border p-2.5 text-ink transition-colors duration-200 hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <StatusStrip />

      {isOpen && (
        <nav
          className="border-t-2 border-border bg-surface md:hidden"
          aria-label="Mobile"
        >
          <div className="container-page flex flex-col gap-1 py-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`cursor-pointer px-3 py-3 font-mono text-xs uppercase tracking-widest ${
                    active
                      ? 'bg-ink text-on-primary'
                      : 'text-muted-foreground hover:text-ink'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

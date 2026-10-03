import type { Metadata } from 'next';
import { Archivo, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Providers from '@/components/Providers';
import ScrollProgress from '@/components/ui/ScrollProgress';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blaisemuhune.com'),
  title: 'Blaise Muhune | Full Stack Developer & Web Solutions Expert',
  description:
    'Professional full stack developer specializing in modern web applications. Expert in Next.js, React, TypeScript, and AI integration. Available for freelance projects and consulting.',
  keywords:
    'full stack developer, web developer, next.js developer, react developer, typescript developer, AI integration, web solutions, freelance developer, software engineer',
  authors: [{ name: 'Blaise Muhune' }],
  openGraph: {
    title: 'Blaise Muhune | Full Stack Developer & Web Solutions Expert',
    description:
      'Professional full stack developer specializing in modern web applications. Expert in Next.js, React, TypeScript, and AI integration.',
    url: 'https://blaisemuhune.com',
    siteName: 'Blaise Muhune Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blaise Muhune - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blaise Muhune | Full Stack Developer & Web Solutions Expert',
    description:
      'Professional full stack developer specializing in modern web applications. Expert in Next.js, React, TypeScript, and AI integration.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative">
        <Providers>
          <ScrollProgress />
          <Header />
          <main className="relative z-10 min-h-screen pt-[7.25rem] md:pt-[7.75rem]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

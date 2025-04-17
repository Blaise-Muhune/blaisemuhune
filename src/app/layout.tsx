import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/ui/Cursor";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://blaisemuhune.com"),
  title: "Blaise Muhune | Full Stack Developer & Web Solutions Expert",
  description: "Professional full stack developer specializing in modern web applications. Expert in Next.js, React, TypeScript, and AI integration. Available for freelance projects and consulting.",
  keywords: "full stack developer, web developer, next.js developer, react developer, typescript developer, AI integration, web solutions, freelance developer, software engineer",
  authors: [{ name: "Blaise Muhune" }],
  openGraph: {
    title: "Blaise Muhune | Full Stack Developer & Web Solutions Expert",
    description: "Professional full stack developer specializing in modern web applications. Expert in Next.js, React, TypeScript, and AI integration.",
    url: "https://blaisemuhune.com",
    siteName: "Blaise Muhune Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blaise Muhune - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blaise Muhune | Full Stack Developer & Web Solutions Expert",
    description: "Professional full stack developer specializing in modern web applications. Expert in Next.js, React, TypeScript, and AI integration.",
    images: ["/og-image.jpg"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Cursor />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-page max-w-xl text-center">
        <p className="label-mono">Error 404</p>
        <h1 className="heading-display mt-4">This page doesn&apos;t exist.</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The link may be outdated or mistyped. Head home or go back to continue
          browsing.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" aria-hidden="true" />
            Home
          </Link>
          <Link href="/projects" className="btn-secondary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}

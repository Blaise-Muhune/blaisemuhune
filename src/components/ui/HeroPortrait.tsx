'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function HeroPortrait() {
  const [showPhoto, setShowPhoto] = useState(true);

  return (
    <div className="relative aspect-[4/5] w-full max-w-md border-2 border-ink bg-muted before:pointer-events-none before:absolute before:-left-1 before:-top-1 before:h-3 before:w-3 before:border-l-2 before:border-t-2 before:border-ink after:pointer-events-none after:absolute after:-bottom-1 after:-right-1 after:h-3 after:w-3 after:border-b-2 after:border-r-2 after:border-ink">
      {showPhoto ? (
        <Image
          src="/profile.jpg"
          alt="Portrait of Blaise Muhune"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 400px"
          onError={() => setShowPhoto(false)}
        />
      ) : (
        <div className="flex h-full flex-col justify-between p-6">
          <p className="label-mono">Portrait</p>
          <p
            className="font-heading text-[clamp(4rem,18vw,7rem)] font-semibold leading-none text-ink/15"
            aria-hidden="true"
          >
            BM
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Add public/profile.jpg
          </p>
        </div>
      )}
    </div>
  );
}

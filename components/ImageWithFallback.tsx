'use client';

import { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
};

export default function ImageWithFallback({ src, alt, className = '', fallback }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <>
        {fallback ?? (
          <div className="flex h-full w-full items-center justify-center bg-forest-100 text-forest-700/40">
            <span className="font-mono text-xs uppercase tracking-[0.22em]">Bilde mangler</span>
          </div>
        )}
      </>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
  );
}

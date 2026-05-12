'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  videoSrc?: string;
  posterSrc?: string;
  fallbackImage?: string;
};

/**
 * Bakgrunnsvideo for hero-seksjonen.
 * - Spiller automatisk, dempet, i loop
 * - Pauser når brukeren ikke ser den (sparer batteri)
 * - Faller tilbake til posterSrc eller fallbackImage hvis video ikke finnes
 */
export default function VideoHero({
  videoSrc = '/hero.mp4',
  posterSrc = '/hero-poster.jpg',
  fallbackImage = '/hero-poster.jpg',
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay blokkert — ikke noe vi kan gjøre, fortsetter med poster
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (videoFailed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={fallbackImage}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster={posterSrc}
      onError={() => setVideoFailed(true)}
      className="absolute inset-0 h-full w-full object-cover"
      aria-hidden
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}

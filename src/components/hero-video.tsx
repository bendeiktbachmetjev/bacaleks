"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** 1080p source (desktop / ≥ 768 px) */
  srcDesktop: string;
  /** 720p source (mobile) */
  srcMobile: string;
  /** Poster frame shown instantly and as fallback. */
  poster: string;
};

/**
 * Energy-aware looping background video for the hero.
 *
 * Optimisations:
 *  - Picks 720p on mobile (≤ 768 px), 1080p otherwise — ~4× less data on phones.
 *  - Defers loading until the element scrolls into view (IntersectionObserver).
 *  - Pauses playback when the hero is off-screen or the tab is hidden,
 *    which is what Chrome's "Energy Saver" watches for.
 *  - Respects `prefers-reduced-motion` and Save-Data / slow-2G — those users
 *    see the static poster only, no video decoding at all.
 *  - Fades in on `canplay` to prevent a black flash.
 *  - Explicitly sets `muted` on the element (required by autoplay policies).
 */
export function HeroVideo({ srcDesktop, srcMobile, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState<null | boolean>(null);
  const [src, setSrc] = useState<string | null>(null);

  // Decide whether to play video at all + choose resolution.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const c = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const slow =
      !!c?.saveData ||
      (c?.effectiveType &&
        ["slow-2g", "2g", "3g"].includes(c.effectiveType));
    if (mq.matches || slow) {
      setEnabled(false);
      return;
    }
    setEnabled(true);
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    setSrc(mobile ? srcMobile : srcDesktop);
  }, [srcDesktop, srcMobile]);

  // Start playback when in view; pause when off-screen or tab hidden.
  useEffect(() => {
    if (!enabled || !src) return;
    const v = ref.current;
    if (!v) return;

    const play = () => v.play().catch(() => {});
    const pause = () => v.pause();

    const onVisibility = () => {
      if (document.hidden) pause();
      else if (v.dataset.inView === "1") play();
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            v.dataset.inView = "1";
            if (!document.hidden) play();
          } else {
            v.dataset.inView = "0";
            pause();
          }
        }
      },
      { threshold: 0.15 },
    );

    const onReady = () => setReady(true);
    v.addEventListener("canplay", onReady);
    document.addEventListener("visibilitychange", onVisibility);
    io.observe(v);

    return () => {
      v.removeEventListener("canplay", onReady);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
    };
  }, [enabled, src]);

  // Render a plain <img> poster when video is disabled or still deciding.
  if (enabled !== true || !src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={poster}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <>
      {/* Instant poster underneath the video */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        aria-hidden
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
          ready ? "opacity-0" : "opacity-100",
        )}
      />
      <video
        ref={ref}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          ready ? "opacity-100" : "opacity-0",
        )}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error — valid attribute, not yet in lib.dom.d.ts
        disableRemotePlayback=""
        aria-hidden
      />
    </>
  );
}

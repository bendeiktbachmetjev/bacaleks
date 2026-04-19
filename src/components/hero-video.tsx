"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Looping, muted background video for the hero.
 * - Fades in when the first frame is ready (prevents flash of black).
 * - Falls back to the gradient placeholder on reduced-motion preference,
 *   save-data header or when the video fails to play.
 */
export function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const slow =
      connection?.saveData ||
      (connection?.effectiveType &&
        ["slow-2g", "2g", "3g"].includes(connection.effectiveType));
    if (mq.matches || slow) setEnabled(false);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const v = ref.current;
    if (!v) return;
    const onReady = () => setReady(true);
    v.addEventListener("loadeddata", onReady);
    v.addEventListener("canplay", onReady);
    return () => {
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("canplay", onReady);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <video
      ref={ref}
      className={cn(
        "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
        ready ? "opacity-100" : "opacity-0",
      )}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden
    />
  );
}

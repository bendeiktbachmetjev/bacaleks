import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Editorial image with the cool-blue harmonisation overlay described
 * in instructions.md — keeps the site's visual palette consistent.
 *
 * Use this wherever we render a real photograph (not a placeholder).
 */
export function MediaImage({
  src,
  alt,
  aspect = "16/9",
  sizes,
  priority,
  overlay = "default",
  className,
}: {
  src: string;
  alt: string;
  aspect?: "16/9" | "4/3" | "3/4" | "1/1" | "21/9" | "3/2";
  sizes?: string;
  priority?: boolean;
  overlay?: "none" | "default" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[14px] border border-[var(--color-border)] bg-[var(--color-atlantic-900)]",
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 1024px) 100vw, 50vw"}
        priority={priority}
        className="object-cover"
      />
      {overlay !== "none" && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0",
            overlay === "dark"
              ? "bg-gradient-to-t from-[#0a192f]/55 via-[#0a192f]/10 to-transparent"
              : // Subtle cool-blue tint per instructions.md
                "bg-gradient-to-tr from-[#0a192f]/15 via-transparent to-[#15315a]/10 mix-blend-multiply",
          )}
        />
      )}
    </div>
  );
}

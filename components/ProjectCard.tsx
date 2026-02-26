"use client";

import Image from "next/image";

export type ProjectCardProps = {
  title: string;
  urlText: string;
  urlHref: string;
  ctaText: string;
  ctaHref?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  cardHref: string;
  subtitleVariant?: "boldItalic" | "bold" | "regular";
  titleUppercase?: boolean;
};

const THUMB = 240;          // thumbnail size (match mock scale)
const TEXT_W = 260;         // text column width (critical to prevent squeeze)

export default function ProjectCard({
  title,
  urlText,
  urlHref,
  ctaText,
  ctaHref,
  description,
  imageSrc,
  imageAlt,
  cardHref,
  subtitleVariant = "bold",
  titleUppercase = false,
}: ProjectCardProps) {
  const open = () => window.open(cardHref, "_blank", "noopener,noreferrer");

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  };

  const subtitleClass =
    subtitleVariant === "boldItalic"
      ? "font-bold italic"
      : subtitleVariant === "regular"
        ? "font-normal"
        : "font-bold";

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={open}
      onKeyDown={onKeyDown}
      className={[
        // IMPORTANT: nowrap so the text never drops under image on desktop
        "group cursor-pointer",
        "flex flex-row flex-nowrap items-start gap-8",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 focus-visible:ring-offset-4",
      ].join(" ")}
    >
      {/* Left: thumbnail (non-shrinking) */}
      <div className="shrink-0">
        <div className="w-[240px] h-[240px] rounded-[32px] overflow-hidden bg-neutral-100">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={THUMB}
            height={THUMB}
            className="w-full h-full object-cover"
            sizes="240px"
          />
        </div>
      </div>

      {/* Right: text column (NON-SHRINKING fixed width) */}
      <div className="shrink-0 w-[260px]">
        <div className="text-left">
          <div className="text-[24px] leading-tight font-bold text-black">
            {titleUppercase ? title.toUpperCase() : title}
          </div>

          {ctaHref ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={[
                "mt-1 block text-[18px] leading-snug text-black",
                subtitleClass,
                "hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 focus-visible:ring-offset-2 rounded-sm w-fit",
              ].join(" ")}
            >
              {ctaText}
            </a>
          ) : (
            <div className={["mt-1 text-[18px] leading-snug text-black", subtitleClass].join(" ")}>
              {ctaText}
            </div>
          )}

          <p className="mt-4 text-[14px] italic leading-relaxed text-black w-[260px]">
            {description}
          </p>

          {/* keep url props for later, but do NOT render in this bottom mock layout */}
          {/* (the bottom mock doesn't show url text lines) */}
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

type MineralCoreProps = {
  progress: number;
  active: number;
  tag: string;
  compact?: boolean;
  sizeClass?: string;
  href?: string;
};

const RING_R = 94;
const RING_CIRC = 2 * Math.PI * RING_R;

const DIAL_TICKS = Array.from({ length: 48 }, (_, i) => {
  const angle = (i * 7.5 * Math.PI) / 180;
  const major = i % 4 === 0;
  const inner = major ? 66 : 68;
  const outer = 71;
  return {
    x1: 100 + inner * Math.cos(angle),
    y1: 100 + inner * Math.sin(angle),
    x2: 100 + outer * Math.cos(angle),
    y2: 100 + outer * Math.sin(angle),
    major,
  };
});

export default function MineralCore({
  progress,
  active,
  tag,
  compact = false,
  sizeClass = "w-44 sm:w-52 lg:w-64 xl:w-72",
  href,
}: MineralCoreProps) {
  const isRaw = active <= 1;
  const isScan = active === 2 || active === 3;
  const isSeal = active >= 4;
  const isLink = Boolean(href);
  const sheen: CSSProperties = { opacity: 0.12 + 0.45 * progress };

  const rootClass = `relative aspect-square select-none ${sizeClass} ${
    isLink
      ? "group cursor-pointer rounded-full transition-transform duration-500 ease-out hover:scale-[1.04] focus-visible:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-200 active:scale-[0.99] dark:focus-visible:ring-offset-gray-800"
      : ""
  }`;

  const seal = (
    <>
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-[14%] rounded-full bg-[radial-gradient(circle_at_center,rgba(58,186,180,0.16),transparent_62%)] dark:bg-[radial-gradient(circle_at_center,rgba(129,230,217,0.13),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className={`absolute -inset-[6%] rounded-full bg-[radial-gradient(circle_at_center,rgba(58,186,180,0.3),transparent_60%)] transition-opacity duration-700 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_center,rgba(79,209,197,0.22),transparent_60%)] ${
          isSeal ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-[8%] rounded-full bg-[radial-gradient(circle_at_center,rgba(58,186,180,0.32),transparent_62%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_center,rgba(79,209,197,0.24),transparent_62%)]"
      />

      {/* Progress ring */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r={RING_R}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 5"
          className="stroke-gray-300/70 transition-colors duration-700 group-hover:stroke-teal-500/60 dark:stroke-gray-600/70 dark:group-hover:stroke-teal-300/50"
        />
        <circle
          cx="100"
          cy="100"
          r={RING_R - 7}
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={`${RING_CIRC} ${RING_CIRC}`}
          strokeDashoffset={RING_CIRC - progress * RING_CIRC}
          className="stroke-teal-500 transition-colors duration-700 group-hover:stroke-teal-400 dark:stroke-teal-400 dark:group-hover:stroke-teal-300"
        />
      </svg>

      {/* Rotating dashed outer ring */}
      <div
        aria-hidden="true"
        className="journey-spin absolute inset-[3%] rounded-full border border-dashed border-copper-500/40 transition-colors duration-700 group-hover:border-teal-500/70 dark:border-copper-300/25 dark:group-hover:border-teal-300/40"
      />

      {/* Mineral core */}
      <div
        className="absolute inset-[7%] overflow-hidden rounded-full ring-1 ring-gray-900/10 dark:ring-white/10 shadow-[inset_0_2px_24px_rgba(0,0,0,0.35)]"
        aria-hidden="true"
      >
        {/* Geological bands */}
        <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_35%,#E6CBA5,#C98B4B)] dark:bg-[radial-gradient(circle_at_50%_35%,#7C4A22,#5E381C)]" />
        <div className="absolute left-[18%] right-[20%] top-[17%] bottom-[19%] rounded-full bg-[radial-gradient(circle_at_45%_40%,#F4E7D4,#D9A96C)] dark:bg-[radial-gradient(circle_at_45%_40%,#9C5F2A,#7C4A22)]" />
        <div className="absolute left-[34%] right-[33%] top-[35%] bottom-[32%] rounded-full bg-[radial-gradient(circle_at_55%_45%,#E6CBA5,#B87333)] dark:bg-[radial-gradient(circle_at_55%_45%,#5E381C,#422816)]" />
        <div className="absolute left-[50%] right-[49%] top-[51%] bottom-[48%] rounded-full bg-[radial-gradient(circle_at_50%_45%,#C98B4B,#7C4A22)] dark:bg-[radial-gradient(circle_at_50%_45%,#422816,#1D1D20)]" />

        {/* In-band mineral specks */}
        <div className="absolute left-[30%] top-[26%] h-1.5 w-1.5 rotate-45 bg-copper-200/70 dark:bg-copper-200/30" />
        <div className="absolute left-[60%] top-[40%] h-1 w-1 rounded-full bg-teal-500/50 dark:bg-teal-300/50" />
        <div className="absolute left-[44%] top-[64%] h-1.5 w-1.5 rotate-45 bg-copper-600/40 dark:bg-copper-300/25" />
        <div className="absolute left-[26%] top-[58%] h-1 w-1 rounded-full bg-teal-600/40 dark:bg-teal-400/40" />

        {/* Fracture / crush lines — raw & processing */}
        <svg
          viewBox="0 0 200 200"
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
            isRaw ? "opacity-100" : "opacity-0"
          }`}
        >
          <g
            strokeWidth="1.2"
            strokeLinecap="round"
            className="stroke-copper-900/30 dark:stroke-copper-100/25"
          >
            <path d="M100 100 L62 58 L40 44" fill="none" />
            <path d="M100 100 L118 62 L134 44 L152 32" fill="none" />
            <path d="M100 100 L150 138 L168 170" fill="none" />
            <path d="M100 100 L54 130 L32 148" fill="none" />
            <path d="M100 100 L62 158 L46 184" fill="none" />
            <path d="M100 100 L128 128 L146 146" fill="none" strokeWidth="0.8" />
          </g>
        </svg>

        {/* Laboratory scan — lab & verification */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isScan ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="journey-spin absolute inset-[4%] rounded-full border-t-2 border-teal-400/70" />
          <div className="journey-spin-reverse absolute inset-[10%] rounded-full border-b-2 border-teal-500/50" />
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" fill="none">
            <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.5" className="stroke-teal-500/40 dark:stroke-teal-400/40" />
            <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.5" className="stroke-teal-500/40 dark:stroke-teal-400/40" />
            <g strokeWidth="2" className="stroke-teal-600 dark:stroke-teal-400">
              <line x1="100" y1="6" x2="100" y2="18" />
              <line x1="100" y1="182" x2="100" y2="194" />
              <line x1="6" y1="100" x2="18" y2="100" />
              <line x1="182" y1="100" x2="194" y2="100" />
            </g>
            <circle cx="100" cy="100" r="3" className="animate-pulse fill-teal-600 dark:fill-teal-400" />
          </svg>
        </div>

        {/* Verification seal */}
        <div
          className={`absolute inset-[1%] rounded-full border-2 border-dashed transition-all duration-700 ${
            isSeal
              ? "journey-spin-reverse border-teal-500/80 opacity-100 dark:border-teal-400/70"
              : "border-transparent opacity-0"
          }`}
        />

        {/* Sheen / refinement overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-white/10 dark:via-white/10 dark:to-white/5"
          style={sheen}
        />
      </div>

      {/* Fine gauge dial — subtle technical detail */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <g className="opacity-70 transition-opacity duration-700 group-hover:opacity-100">
          <circle
            cx="100"
            cy="100"
            r="71"
            strokeWidth="0.6"
            className="stroke-gray-400/40 transition-colors duration-700 group-hover:stroke-teal-500/60 dark:stroke-gray-500/40 dark:group-hover:stroke-teal-300/50"
          />
          {DIAL_TICKS.map((t, i) => (
            <line
              key={i}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              strokeWidth={t.major ? 0.9 : 0.6}
              strokeLinecap="round"
              className="stroke-gray-400/40 transition-colors duration-700 group-hover:stroke-teal-500/60 dark:stroke-gray-500/40 dark:group-hover:stroke-teal-300/50"
            />
          ))}
        </g>
      </svg>

      {/* Centre label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-center">
        <span
          aria-hidden="true"
          className="h-px w-9 bg-copper-500/50 transition-colors duration-700 group-hover:bg-teal-500/60 dark:bg-copper-200/30 dark:group-hover:bg-teal-300/40"
        />
        <div className="relative">
          {/* Normal label */}
          <div className="flex flex-col items-center gap-1.5 transition-opacity duration-500 ease-out group-hover:opacity-0">
            {tag.split(" ").map((word) => (
              <span
                key={word}
                className="journey-tag-enter font-red-hat-display text-[10px] font-black uppercase tracking-[0.25em] text-teal-700 transition-colors duration-700 group-hover:text-teal-600 dark:text-teal-300 dark:group-hover:text-teal-200"
                style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.12)" }}
              >
                {word}
              </span>
            ))}
          </div>
          {/* Hover label — "Contact Us" */}
          {isLink && (
            <div
              aria-hidden="true"
              className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
            >
              <span
                className="font-red-hat-display text-[10px] font-black uppercase tracking-[0.25em] text-teal-600 dark:text-teal-200"
                style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.12)" }}
              >
                Contact
              </span>
              <span
                className="font-red-hat-display text-[10px] font-black uppercase tracking-[0.25em] text-teal-600 dark:text-teal-200"
                style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.12)" }}
              >
                Us
              </span>
            </div>
          )}
        </div>
        <span
          aria-hidden="true"
          className="h-px w-9 bg-copper-500/50 transition-colors duration-700 group-hover:bg-teal-500/60 dark:bg-copper-200/30 dark:group-hover:bg-teal-300/40"
        />
      </div>

      {/* Sealed check badge */}
      <div
        className={`absolute flex items-center justify-center rounded-full bg-teal-500 text-white shadow-lg ring-stone-200 transition-all duration-700 hover:scale-110 hover:bg-teal-400 hover:shadow-teal-500/40 dark:bg-teal-400 dark:ring-gray-800 dark:hover:bg-teal-300 dark:hover:shadow-teal-400/40 ${
          compact
            ? "-bottom-0.5 -right-0.5 h-8 w-8 ring-2"
            : "-bottom-1 -right-1 h-11 w-11 ring-4"
        } ${isSeal ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
        aria-hidden="true"
      >
        <svg
          className={compact ? "h-4 w-4" : "h-5 w-5"}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
    </>
  );

  return isLink ? (
    <Link href={href!} aria-label="Contact The 3 Rocks" className={rootClass}>
      {seal}
    </Link>
  ) : (
    <div className={rootClass}>{seal}</div>
  );
}

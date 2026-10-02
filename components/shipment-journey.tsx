"use client";

import "./shipment-journey.css";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export interface ShipmentStage {
  number: string;
  title: string;
  text: string;
}

interface ShipmentJourneyProps {
  stages: ShipmentStage[];
}

const PAD = "p-5 md:p-6";
const PARA = "mt-2.5 text-sm leading-relaxed text-gray-500 dark:text-gray-300";
const EYEBROW =
  "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-copper-600 dark:text-copper-400";
const TITLE =
  "mt-2 font-red-hat-display text-xl font-bold uppercase tracking-wide text-gray-900 dark:text-white md:text-2xl";

export default function ShipmentJourney({ stages }: ShipmentJourneyProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [panelHeight, setPanelHeight] = useState<number | undefined>(undefined);

  const panelRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Size the shared panel to the tallest visible layer so it wraps its
     content naturally while staying stable when switching between stages. */
  const measurePanel = useCallback(() => {
    let max = 0;
    layerRefs.current.forEach((el) => {
      if (el) max = Math.max(max, el.offsetHeight);
    });
    if (max > 0) setPanelHeight(max);
  }, []);

  useEffect(() => {
    measurePanel();

    const onFonts = () => measurePanel();
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(onFonts).catch(() => {});
    }
    const t = window.setTimeout(onFonts, 400);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => measurePanel());
      layerRefs.current.forEach((el) => el && ro?.observe(el));
      if (panelRef.current) ro.observe(panelRef.current);
    }

    return () => {
      ro?.disconnect();
      window.clearTimeout(t);
    };
  }, [measurePanel]);

  const progressLeft = (0.5 / stages.length) * 100;
  const progressWidth = (activeIndex / stages.length) * 100;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EFE3] via-[#EFE4CF]/80 to-[#F5EFE3] dark:from-[#121218] dark:via-[#23232D]/90 dark:to-[#121218]">
      {/* Subtle mineral grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply dark:opacity-[0.06] dark:mix-blend-screen"
      >
        <svg className="h-full w-full">
          <filter id="sj-mineral-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#sj-mineral-grain)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Editorial heading */}
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
          <span className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-copper-600 dark:text-copper-400">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-copper-500/60 dark:bg-copper-400/60"
            />
            Quality Control &amp; Export Logistics
            <span
              aria-hidden="true"
              className="h-px w-8 bg-copper-500/60 dark:bg-copper-400/60"
            />
          </span>
          <h2 className="mt-4 font-red-hat-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            FROM MINE TO EXPORT
          </h2>
          <p className="mx-auto mt-2.5 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Follow one shipment from the mine site to the port — verified, prepared, delivered.
          </p>
        </div>

        {/* Step navigation */}
        <nav aria-label="Shipment steps" className="mx-auto max-w-3xl">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gray-200 dark:bg-gray-700"
            />
            <div
              aria-hidden="true"
              className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-r from-copper-600 to-copper-400 dark:from-copper-500 dark:to-copper-300 transition-[width] duration-500 ease-out"
              style={{ left: `${progressLeft}%`, width: `${progressWidth}%` }}
            />
            <ol className="relative flex">
              {stages.map((stage, i) => {
                const active = activeIndex === i;
                return (
                  <li key={stage.number} className="flex w-1/4 flex-col items-center">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-pressed={active}
                      className="group flex flex-col items-center gap-1.5 focus:outline-none"
                    >
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full border-2 font-red-hat-display text-sm font-bold tracking-widest transition-all duration-300 md:h-12 md:w-12 ${
                          active
                            ? "border-copper-500 bg-copper-500 text-white dark:border-copper-400 dark:bg-copper-500"
                            : "border-gray-300 bg-white text-gray-500 group-hover:border-copper-400 group-hover:text-copper-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:group-hover:border-copper-500 dark:group-hover:text-copper-300"
                        }`}
                      >
                        {stage.number}
                      </span>
                      <span
                        className={`font-red-hat-display text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 md:text-xs ${
                          active
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"
                        }`}
                      >
                        {stage.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </nav>

        {/* Shared shipment information panel — one fixed content area, only the active step shows */}
        <div className="mt-4 md:mt-5">
          <div
            ref={panelRef}
            className={`relative mx-auto min-h-[150px] max-w-3xl overflow-hidden rounded-xl bg-gradient-to-b from-[#FBF8EF] to-[#F2E8D7] shadow-lg shadow-copper-900/10 ring-1 ring-gray-200/80 dark:from-gray-900/95 dark:to-gray-800/20 dark:ring-gray-700/50 dark:shadow-black/40 backdrop-blur-sm ${
              panelHeight !== undefined ? "transition-[height] duration-500 ease-out" : ""
            }`}
            style={{ height: panelHeight }}
          >
            {stages.map((stage, i) => {
              const active = activeIndex === i;
              return (
                <div
                  key={stage.number}
                  ref={(el) => {
                    layerRefs.current[i] = el;
                  }}
                  className={`sj-panel-layer ${PAD} ${active ? "sj-panel-active" : ""}`}
                  aria-hidden={!active}
                >
                  <span className={EYEBROW}>
                    <span aria-hidden="true" className="h-px w-8 bg-copper-500 dark:bg-copper-400" />
                    Step {stage.number}
                  </span>
                  <h3 className={TITLE}>{stage.title}</h3>
                  <div className={PARA}>
                    <p dangerouslySetInnerHTML={{ __html: stage.text }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-6 flex items-center gap-4 lg:mt-7">
          <div aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
          <Link
            href="/contact#contact"
            className="group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          >
            <span aria-hidden="true" className="inline-flex h-2 w-2 rounded-full bg-copper-500 transition-transform duration-300 group-hover:scale-125 dark:bg-copper-400" />
            <span className="font-red-hat-display text-sm font-bold uppercase tracking-[0.25em] text-gray-700 transition-colors duration-300 group-hover:text-copper-600 dark:text-gray-200 dark:group-hover:text-copper-400">
              Ready for Export
            </span>
            <span aria-hidden="true" className="font-semibold text-copper-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-copper-400">
              →
            </span>
          </Link>
          <div aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
        </div>
      </div>
    </section>
  );
}

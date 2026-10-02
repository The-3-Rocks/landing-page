"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import MineralCore from "@/components/mineral-core";

type JourneyStage = {
  num: string;
  title: string;
  body: ReactNode;
};

type ScrollJourneyProps = {
  stages: JourneyStage[];
  surfaceClass?: string;
};

const STAGE_TAGS = [
  "Raw Mineral",
  "Processing",
  "Laboratory Control",
  "Verification",
  "Export Ready",
];

const LEADS: Record<string, string> = {
  "01": "The chain of custody at The 3 Rocks extends well beyond the mine gate.",
  "02": "For base-metal ores such as lead, zinc, and copper, the processing route depends on the mineralogy and the target product form.",
  "03": "Quality control is woven into every stage of processing.",
  "04": "Independent third-party verification is required before any shipment leaves the depot.",
  "05": "Packing is tailored to the product form and the shipping mode.",
};

const SPECS: Record<string, [string, string][]> = {
  "01": [
    [
      "Methods",
      "Jigging for coarse fractions, wet shaking-table separation for fines, and magnetic separation to remove iron-stained gangue",
    ],
    [
      "Drilling",
      "Specific gravity 4.10, 4.20 and 4.25+ as required by API 13A and OCMA specifications",
    ],
    [
      "Chemical",
      "97–99% BaSO₄ for the paint, plastics and radiation-shielding industries",
    ],
  ],
  "02": [
    [
      "Lead",
      "Oxide ores crushed and screened to direct-shipping fines; carbonate and sulphide ores floated to 55–70% Pb concentrates",
    ],
    [
      "Zinc",
      "Calamine (smithsonite, hydrozincite) dry-screened and pneumatically sorted to 32–40% Zn",
    ],
    [
      "Copper",
      "Oxide ores acid-leach tested, blended and stockpiled at 12–22% Cu for smelting or the ferroalloy industry",
    ],
  ],
  "03": [
    [
      "Instruments",
      "Handheld XRF analyser, thermogravimetric analyser, sieve shaker and pycnometer",
    ],
    [
      "Traceability",
      "Unique internal reference number per lot, logged in a real-time digital database for export documentation",
    ],
  ],
  "04": [
    [
      "Labs",
      "Three ISO 17025-accredited laboratories in Casablanca, Rabat and Marrakech, plus buyer-nominated umpire analysis",
    ],
    [
      "Certificate",
      "Assay method, detection limits, accreditation reference and analyst signature",
    ],
    [
      "Extras",
      "Loss on ignition, mercury by cold-vapour atomic fluorescence, fluorine by ion-selective electrode",
    ],
  ],
  "05": [
    [
      "Formats",
      "Bulk into open-hatch holds; open-top 20&rsquo; and 40&rsquo; containers for lump materials; PP-lined containers for powders and concentrates; 50 kg, 1-tonne jumbo and 1.5-tonne sling bags",
    ],
    [
      "Controls",
      "Photographed at stuffing, weighed on a calibrated weighbridge, sealed with a unique bolt seal recorded on the bill of lading",
    ],
  ],
};

export default function ScrollJourney({
  stages,
  surfaceClass = "bg-white dark:bg-gray-900",
}: ScrollJourneyProps) {
  const [active, setActive] = useState("01");

  return (
    <div className={surfaceClass}>
      <div className="section-wrapper">
        <div className="pb-10 md:pb-14">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-teal-700 dark:text-teal-400 md:mb-8">
            The Processing Journey
          </p>

          <ul className="divide-y divide-stone-300 dark:divide-gray-700/60">
            {stages.map((s) => {
              const isOpen = active === s.num;
              return (
                <li key={s.num}>
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? "" : s.num)}
                    aria-expanded={isOpen}
                    aria-controls={`chapter-${s.num}`}
                    className="group flex w-full items-start justify-between gap-4 py-4 text-left md:py-5"
                  >
                    <span className="min-w-0">
                      <span
                        className={`h4 block font-red-hat-display transition-colors ${
                          isOpen
                            ? "text-teal-700 dark:text-teal-400"
                            : "text-gray-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400"
                        }`}
                      >
                        {s.title}
                      </span>
                      {!isOpen && (
                        <span className="mt-1.5 block text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                          {LEADS[s.num]}
                        </span>
                      )}
                    </span>
                    <svg
                      className={`mt-2 h-4 w-4 shrink-0 text-copper-500 transition-transform duration-300 dark:text-copper-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div
                      id={`chapter-${s.num}`}
                      className="stage-enter grid gap-4 pb-6 md:gap-6 md:pb-7 lg:grid-cols-12 lg:gap-10"
                    >
                      {/* Primary reading — main explanation */}
                      <div className="lg:col-span-8">
                        <div className="max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
                          {s.body}
                        </div>
                      </div>

                      {/* Secondary metadata — supporting specifications */}
                      <div className="lg:col-span-4">
                        <dl
                          className="stage-enter space-y-2 border-l-2 border-teal-200 pl-4 dark:border-teal-900 md:pl-5"
                          style={{ animationDelay: "120ms" }}
                        >
                          {SPECS[s.num].map(([label, value]) => (
                            <div key={label} className="flex gap-3">
                              <dt className="w-28 shrink-0 pt-px text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                                {label}
                              </dt>
                              <dd className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                {value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Process flow + sealed visual */}
          <div className="mt-8 flex flex-col items-center gap-6 border-t border-stone-300 pt-6 dark:border-gray-700/60 md:mt-10 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal-700 dark:text-teal-400">
                From Mine to Export
              </span>
              <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 md:justify-start">
                {STAGE_TAGS.map((t, i) => (
                  <li key={t} className="flex items-center gap-2">
                    {i > 0 && (
                      <span
                        className="inline-block h-1 w-1 rotate-45 bg-copper-500 dark:bg-copper-300"
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <MineralCore
                progress={1}
                active={4}
                tag="Export Ready"
                compact
                sizeClass="w-20 sm:w-24 lg:w-28"
                href="/contact"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

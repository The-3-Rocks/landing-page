"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Folio = {
  num: string;
  roman: string;
  title: string;
  context: string;
  record: string;
  minerals: { name: string; grade: string; spec: string }[];
  indexLabel: string;
  places: string[];
};

const FOLIOS: Folio[] = [
  {
    num: "01",
    roman: "I",
    title: "A Land Shaped Over 500 Million Years",
    context:
      "Morocco lies at the junction of the African and Eurasian tectonic plates, shaped by more than 500 million years of rifting, subduction, and continental collision.",
    record:
      "Morocco\u2019s mineral wealth is the product of a complex geological history that spans more than 500 million years. The country lies at the junction of the African and Eurasian tectonic plates, where repeated episodes of rifting, subduction, and continental collision have created a remarkable diversity of mineral deposit types in a relatively compact geographic area. The 3 Rocks sources its products from four principal geological domains, each of which contributes distinct mineral assemblages and grade profiles to our portfolio.",
    minerals: [
      {
        name: "Four principal domains",
        grade: "",
        spec: "Each contributes distinct mineral assemblages and grade profiles to our portfolio.",
      },
    ],
    indexLabel: "Principal domains",
    places: ["High Atlas Belt", "Anti-Atlas", "Eastern Meseta", "Satellite Deposits"],
  },
  {
    num: "02",
    roman: "II",
    title: "The High Atlas & Anti-Atlas Belts",
    context:
      "The High Atlas belt runs diagonally across central Morocco from Agadir in the southwest to the Algerian border near Figuig; the Anti-Atlas range in the south exposes Proterozoic basement through a cover of Paleozoic sediments.",
    record:
      "The High Atlas belt, running diagonally across central Morocco from Agadir in the southwest to the Algerian border near Figuig in the northeast, hosts the majority of our lead and zinc deposits. Mineralisation here occurs primarily as Mississippi Valley-type carbonate-hosted deposits within Jurassic and Cretaceous limestone and dolomite sequences. Our lead concentrate and zinc calamine ore from this region typically grade between 55 and 70 percent lead and 32 and 40 percent zinc respectively, with low levels of deleterious elements such as arsenic, cadmium, and mercury. The Anti-Atlas range in the south, where Proterozoic basement rocks are exposed through a cover of Paleozoic sediments, is our principal source of cobalt, antimony, and copper. The famous Bou Azzer district near Ouarzazate has been mined for cobalt since the 1930s and remains one of the world\u2019s few primary cobalt producers outside the Central African Copperbelt.",
    minerals: [
      { name: "Lead", grade: "55\u201370% Pb", spec: "Mississippi Valley-type carbonate-hosted deposits within Jurassic and Cretaceous limestone and dolomite sequences." },
      { name: "Zinc calamine", grade: "32\u201340% Zn", spec: "Lead and zinc ore carry low levels of deleterious elements such as arsenic, cadmium, and mercury." },
      { name: "Cobalt", grade: "", spec: "Bou Azzer district near Ouarzazate, mined since the 1930s \u2014 one of the world\u2019s few primary cobalt producers outside the Central African Copperbelt." },
      { name: "Antimony & Copper", grade: "", spec: "The Anti-Atlas range is our principal source of cobalt, antimony, and copper." },
    ],
    indexLabel: "Regions",
    places: ["Figuig", "Khenifra", "Midelt", "Tinghir", "Ouarzazate", "Bou Azzer"],
  },
  {
    num: "03",
    roman: "III",
    title: "The Eastern Meseta, Barite & Satellite Deposits",
    context:
      "The eastern Meseta around Nador and Oujda, the Middle Atlas and the Tafilalet region near Errachidia, and smaller satellite deposits in the Rehamna massif, the Jebilet region, and the Maider basin.",
    record:
      "The eastern Meseta around Nador and Oujda supplies our iron ore, which occurs as siderite-hematite bodies within Jurassic carbonate sequences. These deposits yield lump and fine iron ore grading 50 to 58 percent iron with moderate levels of silica and alumina that are well suited to sinter feed and direct-reduction feed for the Mediterranean steel industry. The barite deposits of the Middle Atlas and the Tafilalet region near Errachidia, hosted in veins and stratiform bodies within Paleozoic and Mesozoic rocks, produce barite ore ranging from 85 to 97 percent BaSO\u2084, which after simple gravity and magnetic separation reaches 4.20 specific gravity or higher for oil and gas drilling applications. Our supply network also includes smaller satellite deposits in the Rehamna massif, the Jebilet region, and the Maider basin, each of which contributes specialised grades that extend our product range.",
    minerals: [
      { name: "Iron ore", grade: "50\u201358% Fe", spec: "Siderite-hematite bodies within Jurassic carbonate sequences \u2014 well suited to sinter feed and direct-reduction feed for the Mediterranean steel industry." },
      { name: "Barite", grade: "85\u201397% BaSO\u2084", spec: "Veins and stratiform bodies within Paleozoic and Mesozoic rocks, reaching 4.20 specific gravity or higher for oil and gas drilling applications." },
      { name: "Satellite deposits", grade: "Specialised", spec: "Deposits in the Rehamna massif, the Jebilet region, and the Maider basin contribute specialised grades that extend our product range." },
    ],
    indexLabel: "Regions",
    places: ["Nador", "Oujda", "Errachidia", "Tafilalet", "Rehamna", "Jebilet", "Maider"],
  },
  {
    num: "04",
    roman: "IV",
    title: "Operational Control, From Blast Hole to Block Model",
    context:
      "A production workflow combining artisanal and small-scale mining with mechanised open-pit operations, matched to deposit geometry.",
    record:
      "On the operational side, our team manages a production workflow that combines artisanal and small-scale mining with mechanised open-pit operations, depending on the deposit geometry. For narrow-vein deposits such as those in the Bou Azzer cobalt district, extraction follows the vein orientation using hand-sorting and pneumatic drilling to maximise ore grade and minimise dilution. For bulk-tonnage deposits such as the iron ore bodies near Nador, full bench-and-blast open-pit methods are used, with run-of-mine ore crushed in a primary jaw crusher installed at the pit perimeter before being transported to the beneficiation plant. Our on-site geologists log every blast hole and every truck load, maintaining a block model that is updated daily and reconciled against the monthly survey. This level of operational control means that when we quote a grade range for a product, that range is anchored in real production data, not in a laboratory test on a single hand-picked sample.",
    minerals: [
      { name: "Narrow-vein extraction", grade: "Maximises grade", spec: "Bou Azzer cobalt district \u2014 extraction follows the vein orientation using hand-sorting and pneumatic drilling to minimise dilution." },
      { name: "Bulk open-pit", grade: "Bench-and-blast", spec: "Iron ore bodies near Nador \u2014 run-of-mine ore is crushed in a primary jaw crusher installed at the pit perimeter." },
    ],
    indexLabel: "Regions",
    places: ["Bou Azzer", "Nador"],
  },
];

const ContourField = ({ className = "" }: { className?: string }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
    <svg className="h-full w-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
      <g stroke="currentColor" strokeWidth="0.75" strokeLinecap="round">
        <path d="M-120 300 C 140 340, 400 270, 680 320 C 940 366, 1220 280, 1520 330" />
        <path d="M-120 348 C 140 388, 400 318, 680 368 C 940 414, 1220 328, 1520 378" />
        <path d="M-120 396 C 140 436, 400 366, 680 416 C 940 462, 1220 376, 1520 426" />
        <path d="M-120 444 C 140 484, 400 414, 680 464 C 940 510, 1220 424, 1520 474" />
        <path d="M-120 640 C 200 700, 480 610, 760 660 C 1020 704, 1240 630, 1520 680" />
        <path d="M-120 690 C 200 750, 480 660, 760 710 C 1020 754, 1240 680, 1520 730" />
        <path d="M-120 740 C 200 800, 480 710, 760 760 C 1020 804, 1240 730, 1520 780" />
      </g>
      <g stroke="currentColor" strokeWidth="0.75" strokeDasharray="1 7" strokeLinecap="round">
        <path d="M240 130 C 460 106, 720 154, 960 126 C 1160 102, 1360 150, 1560 122" />
        <path d="M180 830 C 420 806, 680 850, 940 826 C 1160 806, 1360 848, 1560 822" />
      </g>
    </svg>
  </div>
);

const StrataGlyph = () => (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden="true">
    <path d="M1.5 4.5 C 4.5 3.5, 7 5.5, 9.5 4.5 S 13.5 5, 14.5 4.5" />
    <path d="M1.5 8 C 4.5 7, 7 9, 9.5 8 S 13.5 8.5, 14.5 8" />
    <path d="M1.5 11.5 C 4.5 10.5, 7 12.5, 9.5 11.5 S 13.5 12, 14.5 11.5" />
  </svg>
);

const AUTO_INTERVAL = 2000;
const EXIT_MS = 280;

export default function GeologicalFootprint() {
  const [folio, setFolio] = useState(0);
  const [paused, setPaused] = useState(false);
  const [phase, setPhase] = useState<"enter" | "exit">("enter");
  const f = FOLIOS[folio];
  const swapTimer = useRef<number | null>(null);

  const flipTo = useCallback(
    (next: number) => {
      const target = ((next % FOLIOS.length) + FOLIOS.length) % FOLIOS.length;
      if (target === folio || phase === "exit") return;
      setPhase("exit");
      if (swapTimer.current) window.clearTimeout(swapTimer.current);
      swapTimer.current = window.setTimeout(() => {
        setFolio(target);
        setPhase("enter");
        swapTimer.current = null;
      }, EXIT_MS);
    },
    [folio, phase]
  );

  useEffect(() => {
    if (paused || phase === "exit") return;
    const id = window.setTimeout(() => flipTo(folio + 1), AUTO_INTERVAL);
    return () => window.clearTimeout(id);
  }, [paused, phase, folio, flipTo]);

  useEffect(() => {
    return () => {
      if (swapTimer.current) window.clearTimeout(swapTimer.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-stone-200 dark:bg-gray-800">
      <div aria-hidden="true" className="pointer-events-none absolute -top-28 -left-28 h-96 w-96 rounded-full bg-stone-100/80 blur-3xl dark:bg-teal-900/25" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-stone-100/60 blur-3xl dark:bg-teal-900/20" />
      <ContourField className="text-teal-900/[0.035] dark:text-teal-200/[0.045]" />
      <div className="relative section-wrapper">
        <div className="pt-3 pb-10 md:pt-5 md:pb-14">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4" data-aos="fade-up">
            <div className="max-w-2xl">
              <div className="teal-pill mb-4">Geology &amp; Operations</div>
              <h2 className="h2 font-red-hat-display text-gray-900 dark:text-white">
                Our Geological &amp; Operational Footprint
              </h2>
              <div className="w-14 h-1 bg-teal-500 rounded-full mt-5"></div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-sm md:text-right">
              Four principal geological domains across a territory shaped by more than 500 million years.
            </p>
          </div>

          {/* Folio reader */}
          <div
            className="mt-6 lg:mt-8 rounded-2xl border border-stone-300 dark:border-gray-700 bg-gradient-to-b from-stone-50 to-stone-100 dark:from-gray-700 dark:via-gray-700/90 dark:to-teal-900/[0.15] shadow-sm overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Reader header */}
            <div className="flex items-center justify-between border-b border-stone-300 dark:border-gray-600/50 px-5 py-3.5 md:px-7 bg-gradient-to-r from-copper-50 via-transparent to-transparent dark:from-teal-900/20">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Geological &amp; Operational Record &middot; Morocco
              </span>
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                <StrataGlyph />
                {f.num} / 04
              </span>
            </div>

            {/* Folio body */}
            <div
              key={folio}
              className={`relative grid lg:grid-cols-12 gap-8 lg:gap-10 p-6 md:p-8 lg:p-9 ${
                phase === "exit" ? "folio-exit" : "folio-enter"
              }`}
            >
              <ContourField className="text-teal-900/[0.025] dark:text-teal-200/[0.03]" />
              {/* Reading column */}
              <div className="relative lg:col-span-8">
                <div className="flex items-center gap-4">
                  <span
                    className="relative inline-flex h-11 w-11 shrink-0 select-none items-center justify-center rounded-sm border border-stone-300 dark:border-gray-600 bg-stone-100 dark:bg-teal-900/40"
                    aria-hidden="true"
                  >
                    <span className="font-red-hat-display text-lg font-semibold leading-none tracking-wide text-teal-700 dark:text-teal-400">
                      {f.roman}
                    </span>
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-red-hat-display font-semibold tracking-wide text-gray-900 dark:text-white">
                      {f.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 font-red-hat-display text-lg md:text-xl leading-snug text-gray-700 dark:text-gray-200">
                  {f.context}
                </p>

                <p className="mt-4 text-body dark:text-gray-300 first-letter:float-left first-letter:mr-2.5 first-letter:font-red-hat-display first-letter:text-5xl first-letter:leading-[0.75] first-letter:text-teal-700 dark:first-letter:text-teal-400">
                  {f.record}
                </p>
              </div>

              {/* Marginalia */}
              <aside className="relative lg:col-span-4 lg:border-l lg:border-stone-300 lg:dark:border-gray-600/50 lg:pl-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Minerals &amp; grades
                </p>
                <div className="mt-3 border-y border-stone-300 dark:border-gray-600/50 divide-y divide-stone-300 dark:divide-gray-600/50">
                  {f.minerals.map((m) => (
                    <div key={m.name} className="py-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="font-red-hat-display font-semibold text-gray-900 dark:text-white">{m.name}</dt>
                        {m.grade && <dd className="shrink-0 text-sm font-bold text-teal-700 dark:text-teal-400">{m.grade}</dd>}
                      </div>
                      <dd className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{m.spec}</dd>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  {f.indexLabel}
                </p>
                <p className="mt-2 text-body-sm text-gray-600 dark:text-gray-300">{f.places.join("  \u00b7  ")}</p>
              </aside>
            </div>

            {/* Reader controls */}
            <div className="flex items-center justify-between gap-4 border-t border-stone-300 dark:border-gray-600/50 px-5 py-4 md:px-7">
              <button
                type="button"
                onClick={() => flipTo(folio - 1)}
                className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-teal-700 dark:hover:text-teal-400 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                Previous
              </button>

              <div className="flex items-center gap-2" role="group" aria-label="Folio index">
                {FOLIOS.map((item, i) => (
                  <button
                    key={item.num}
                    type="button"
                    onClick={() => flipTo(i)}
                    aria-label={`Go to folio ${item.roman}`}
                    aria-pressed={folio === i}
                    className={`h-2 w-2 rounded-full transition-opacity duration-300 ${
                      folio === i
                        ? "bg-teal-700 opacity-100 dark:bg-teal-400"
                        : "bg-gray-400 opacity-40 hover:opacity-80 dark:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => flipTo(folio + 1)}
                className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-teal-700 dark:hover:text-teal-400 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

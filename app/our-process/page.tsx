// app/our-process/page.tsx
import Link from "next/link";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import ChatButtons from "@/components/ChatButtons";
import GeologicalFootprint from "@/components/geological-footprint";
import ScrollJourney from "@/components/scroll-journey";
import StepReveal from "@/components/step-reveal";

import ExtractionImage from "@/public/images/extraction1.webp";
import ProcessingImage from "@/public/images/process.webp";

export const metadata = {
  title: "Mining & Export Process — Moroccan Minerals from Mine to Port",
  description:
    "Learn about The 3 Rocks' efficient and sustainable process for extracting, processing, and exporting premium Moroccan minerals and raw materials worldwide. Specializing in Morocco's diverse mining sector.",
  openGraph: {
    title: "Mining & Export Process — Moroccan Minerals from Mine to Port",
    description:
      "Discover our streamlined process for extracting and exporting high-quality minerals and raw materials from Morocco's rich mineral deposits to global markets.",
    url: "https://www.the-3rocks.com/our-process",
    type: "website",
    siteName: "The 3 Rocks",
    images: [
      {
        url: "https://www.the-3rocks.com/images/process-og.png",
        width: 1200,
        height: 630,
        alt: "The 3 Rocks Mining Process - Premium Moroccan Minerals",
      },
    ],
    locale: "en_US",
  },
  linkedin: {
    title: "Mining Process | Premium Moroccan Minerals",
    description:
      "Discover our streamlined process for extracting and exporting high-quality minerals and raw materials from Morocco's rich mineral deposits to global markets.",
    images: ["https://www.the-3rocks.com/images/process-linkedin.png"],
    url: "https://www.the-3rocks.com/our-process",
    company: "The 3 Rocks Company",
    site: "The 3 Rocks Official Website",
  },
  alternates: { canonical: "https://www.the-3rocks.com/our-process" },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const exportSteps = [
  {
    step: "01",
    title: "Contract Signing",
    description:
      "Both parties sign the sales contract to finalize terms and specifications for the raw materials, including quantity, grade, packing, port of loading, and incoterm.",
    align: "right",
  },
  {
    step: "02",
    title: "Material Collection",
    description:
      "The raw materials are transported to our depot within a maximum of three weeks for processing, sampling, and preparation for laboratory analysis and buyer inspection.",
    align: "left",
  },
  {
    step: "03",
    title: "Inspection & Approval",
    description:
      "The buyer has the option to visit our facilities to inspect the available stock, draw independent samples, and confirm that the material meets the agreed specification.",
    align: "right",
  },
  {
    step: "04",
    title: "Financial Arrangements",
    description:
      "Secure payment is arranged via Letter of Credit (LC) or Telegraphic Transfer (TT), with optional on-site stock inspection for buyer confidence before the final payment is released.",
    align: "left",
  },
  {
    step: "05",
    title: "Processing & Analysis",
    description:
      "The raw materials undergo processing as needed, and detailed analysis reports are prepared by an independent laboratory to verify quality and compliance with the specification.",
    align: "right",
  },
  {
    step: "06",
    title: "Packaging & Preparation",
    description:
      "The materials are properly packed and stored in containers or bulk according to international shipping standards, sealed under customs supervision, and staged for export.",
    align: "left",
  },
  {
    step: "07",
    title: "Transportation & Shipping",
    description:
      "The containers are transported to the port — Casablanca, Tangier Med, or Jorf Lasfar — and loaded onto the vessel for export to the destination country, with full tracking provided.",
    align: "right",
  },
];

const principles = [
  {
    title: "Transparency & Trust",
    detail:
      "Maintain open and honest communication about stock, pricing, and delivery schedules to build mutual trust.",
  },
  {
    title: "Commitment to Quality",
    detail:
      "Ensure consistent quality control of raw materials and provide detailed analysis reports to meet expectations.",
  },
  {
    title: "Timely Deliveries",
    detail:
      "Adhere to agreed timelines for shipments, payments, and documentation to avoid delays at the port or in transit.",
  },
  {
    title: "Financial Reliability",
    detail:
      "Ensure smooth financial transactions, including timely LC opening and payments, to create a secure business environment for both parties.",
  },
  {
    title: "Long-Term Partnership",
    detail:
      "Focus on building a sustainable relationship by exploring future collaborations beyond initial materials, including other Moroccan raw materials from our portfolio.",
  },
  {
    title: "Effective Problem-Solving",
    detail:
      "Address any challenges quickly and professionally to maintain smooth operations and prevent disruptions to the buyer&rsquo;s supply chain.",
  },
];

const beneficiationChapters = [
  {
    num: "01",
    title: "Barite Beneficiation",
    body: (
      <p>
        The chain of custody at The 3 Rocks extends well beyond the mine gate.
        Once run-of-mine ore arrives at our depot, it enters a beneficiation
        workflow that is designed to match the physical and chemical
        characteristics of each mineral type. For barite, the primary
        beneficiation methods are jigging for coarse fractions and wet
        shaking-table separation for fines, followed by magnetic separation to
        remove iron-stained gangue minerals such as hematite and goethite. Our
        barite processing line can produce material suitable for oil and gas
        drilling applications at specific gravity 4.10, 4.20, and 4.25+ as
        required by API 13A and OCMA specifications, as well as chemical-grade
        barite for the paint, plastics, and radiation-shielding industries at 97
        to 99 percent BaSO₄ purity.
      </p>
    ),
  },
  {
    num: "02",
    title: "Base-Metal Processing Routes",
    body: (
      <p>
        For base-metal ores such as lead, zinc, and copper, the processing route
        depends on the mineralogy and the target product form. Lead oxide ores
        from the High Atlas region are crushed and screened to produce
        direct-shipping fines, while lead carbonate and lead sulphide ores can
        be upgraded by froth flotation to produce concentrates grading 55 to 70
        percent lead. Zinc calamine ore (smithsonite and hydrozincite) is
        processed by dry screening and pneumatic sorting to remove silica-rich
        gangue, yielding a calamine product grading 32 to 40 percent zinc that
        is directly usable by zinc smelters producing metal or zinc oxide.
        Copper oxide ores from our Anti-Atlas sources are typically upgraded by
        acid-leach testing to confirm solubility before being crushed, blended,
        and stockpiled for sale as copper ore grading 12 to 22 percent copper
        for direct smelting or for the ferroalloy industry.
      </p>
    ),
  },
  {
    num: "03",
    title: "On-Site Laboratory & Quality Control",
    body: (
      <p>
        Quality control is woven into every stage of processing. Our on-site
        laboratory at the Errachidia depot is equipped with a handheld X-ray
        fluorescence analyser for rapid grade screening of incoming lots, a
        thermogravimetric analyser for moisture determination, a sieve shaker
        for particle size distribution, and a pycnometer for specific gravity
        measurement. Every production lot is assigned a unique internal
        reference number that tracks it from the mine weighbridge through each
        processing step, and the results of all QC tests are recorded in a
        digital database that is accessible to our export documentation team in
        real time.
      </p>
    ),
  },
  {
    num: "04",
    title: "Independent Third-Party Verification",
    body: (
      <p>
        Independent third-party verification is required before any shipment
        leaves the depot. We work with three ISO 17025-accredited laboratories
        in Morocco — in Casablanca, Rabat, and Marrakech — and the buyer may
        nominate a fourth laboratory for umpire analysis in the event of a grade
        dispute. The laboratory certificate that accompanies each shipment
        includes the assay method used, the detection limits for each element,
        the laboratory's accreditation reference, and the signature of the
        responsible analyst. For buyers who require additional testing beyond
        the standard suite — such as loss on ignition, mercury content by
        cold-vapour atomic fluorescence, or fluorine determination by
        ion-selective electrode — our laboratory partners can add those
        parameters to the test schedule at a modest incremental cost.
      </p>
    ),
  },
  {
    num: "05",
    title: "Packing & Preparation for Shipping",
    body: (
      <p>
        Packing is tailored to the product form and the shipping mode. Bulk ore
        for open-hatch vessels is loaded directly into the hold using conveyor
        belts and telescopic chutes to minimise segregation and dust generation.
        Containerised products are loaded into 20-foot or 40-foot open-top
        containers for lump materials and into standard containers lined with
        polypropylene sheets for powders and concentrates. Bagged products are
        available in 50 kg, 1-tonne jumbo bags, or 1.5-tonne sling bags,
        depending on the buyer's handling equipment at the destination port.
        Every container is photographed at the stuffing stage, weighed on a
        calibrated weighbridge, and sealed with a high-security bolt seal
        bearing a unique serial number that is recorded on the bill of lading.
      </p>
    ),
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* <ChatButtons /> */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      {/* Hero - immersive editorial composition */}
      <section className="relative bg-gradient-to-b from-stone-50 to-stone-100 dark:from-gray-900 dark:to-gray-800">
        <div className="relative overflow-hidden pb-32 md:pb-40 -mb-32 md:-mb-40">
          {/* Immersive background */}
          <Image
            src={ExtractionImage}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            alt="Raw material extraction at The 3 Rocks mining operations in Morocco"
          />
          {/* Readability overlays */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(94,56,28,0.26)_0%,rgba(94,56,28,0.15)_30%,rgba(94,56,28,0.07)_55%,rgba(94,56,28,0.02)_80%,rgba(94,56,28,0)_100%)] dark:bg-gradient-to-r dark:from-teal-900/90 dark:via-teal-900/60 dark:to-teal-900/20"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(94,56,28,0)_0%,rgba(94,56,28,0)_45%,rgba(94,56,28,0.16)_70%,rgba(94,56,28,0.34)_86%,rgba(94,56,28,0.46)_100%)] dark:bg-gradient-to-t dark:from-gray-900/70 dark:via-transparent dark:to-gray-900/40"
            aria-hidden="true"
          />
          {/* Adaptive top scrim for nav legibility over the image */}
          <div
            className="absolute inset-x-0 top-0 h-40 md:h-48 bg-[linear-gradient(to_bottom,rgba(253,251,246,0.82)_0%,rgba(253,251,246,0.72)_14%,rgba(253,251,246,0.60)_30%,rgba(253,251,246,0.48)_46%,rgba(253,251,246,0.36)_60%,rgba(253,251,246,0.22)_75%,rgba(253,251,246,0.10)_90%,rgba(253,251,246,0)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(29,29,32,0.62)_0%,rgba(29,29,32,0.52)_16%,rgba(29,29,32,0.42)_32%,rgba(29,29,32,0.33)_48%,rgba(29,29,32,0.23)_64%,rgba(29,29,32,0.13)_80%,rgba(29,29,32,0)_100%)]"
            aria-hidden="true"
          />
          {/* Dissolve into next section */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 md:h-48 bg-[linear-gradient(to_bottom,rgba(246,241,231,0)_0%,rgba(246,241,231,0.08)_12%,rgba(246,241,231,0.17)_25%,rgba(246,241,231,0.27)_40%,rgba(246,241,231,0.38)_55%,rgba(246,241,231,0.52)_72%,rgba(246,241,231,0.74)_88%,rgba(246,241,231,1)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(46,46,51,0)_0%,rgba(46,46,51,0.12)_14%,rgba(46,46,51,0.25)_30%,rgba(46,46,51,0.37)_46%,rgba(46,46,51,0.49)_62%,rgba(46,46,51,0.66)_78%,rgba(46,46,51,0.85)_92%,rgba(46,46,51,1)_100%)]"
            aria-hidden="true"
          />

          <div className="relative section-wrapper">
            <div className="pt-32 pb-10 md:pt-44 md:pb-14">
              {/* Editorial area 1 - intro */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
                <div className="max-w-3xl" data-aos="fade-up">
                  <div className="teal-pill mb-5">
                    Morocco&rsquo;s Premium Mining Process
                  </div>
                  <h1 className="h1 font-red-hat-display mb-5 text-white">
                    Our <span className="text-teal-300">Process</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-teal-50/95 leading-snug">
                    From extraction to delivery, discover how we ensure the
                    highest quality Moroccan raw materials through our
                    meticulous process
                  </p>
                  <p className="mt-6 text-base md:text-lg text-teal-50/80 leading-relaxed max-w-2xl">
                    What sets The 3 Rocks apart is our integrated approach — we
                    oversee every stage from mine to port, maintaining full
                    control over quality, traceability, and timelines. Our
                    process combines decades of on-the-ground experience in
                    Morocco&rsquo;s mining regions with modern analytical
                    techniques and responsible sourcing practices that meet the
                    expectations of discerning international buyers.
                  </p>
                </div>

                {/* 7 Controlled Stages - integrated stat */}
                <div
                  className="shrink-0 lg:mt-20 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <div className="flex items-end gap-4">
                    <span className="text-6xl lg:text-7xl font-black text-teal-300 leading-none">
                      7
                    </span>
                    <span
                      className="w-px h-14 bg-white/40"
                      aria-hidden="true"
                    ></span>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-teal-50/90 leading-snug">
                    Controlled Stages
                    <span className="block text-xs font-medium normal-case tracking-normal text-teal-100/70 mt-1">
                      from Mine to Port
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial areas 2 & 3 - two-column process narrative */}
            <div className="border-t border-white/20 pt-10 pb-12 md:pt-12 md:pb-16">
              <div
                className="grid md:grid-cols-2 gap-6 md:gap-12"
                data-aos="fade-up"
              >
                <p className="text-base text-teal-50/85 leading-relaxed">
                  The 3 Rocks process begins long before ore is loaded onto a
                  vessel. It starts with geological mapping of deposits in the
                  Atlas Mountains, Anti-Atlas, and the mineral belts of
                  Errachidia, Khenifra, Midelt, Ouarzazate, Nador, Oujda,
                  Tinghir, and Bou Azzer. Our geologists work with our mining
                  partners to identify the most consistent sources of{" "}
                  <Link
                    href="/products/lead"
                    className="text-teal-200 underline underline-offset-4 decoration-teal-300/50 hover:text-white transition-colors"
                  >
                    lead
                  </Link>
                  ,{" "}
                  <Link
                    href="/products/zinc"
                    className="text-teal-200 underline underline-offset-4 decoration-teal-300/50 hover:text-white transition-colors"
                  >
                    zinc calamine
                  </Link>
                  ,{" "}
                  <Link
                    href="/products/copper"
                    className="text-teal-200 underline underline-offset-4 decoration-teal-300/50 hover:text-white transition-colors"
                  >
                    copper
                  </Link>
                  ,{" "}
                  <Link
                    href="/products/barite"
                    className="text-teal-200 underline underline-offset-4 decoration-teal-300/50 hover:text-white transition-colors"
                  >
                    barite
                  </Link>
                  ,{" "}
                  <Link
                    href="/products/iron"
                    className="text-teal-200 underline underline-offset-4 decoration-teal-300/50 hover:text-white transition-colors"
                  >
                    iron
                  </Link>
                  ,{" "}
                  <Link
                    href="/products/cobalt"
                    className="text-teal-200 underline underline-offset-4 decoration-teal-300/50 hover:text-white transition-colors"
                  >
                    cobalt
                  </Link>
                  , and{" "}
                  <Link
                    href="/products/antimony"
                    className="text-teal-200 underline underline-offset-4 decoration-teal-300/50 hover:text-white transition-colors"
                  >
                    antimony
                  </Link>
                  , and to plan extraction sequences that respect the host rock
                  and minimize waste.
                </p>
                <p className="text-base text-teal-50/85 leading-relaxed">
                  Once ore leaves the mine face, it moves through a defined
                  chain of custody to our depot, where every lot is weighed,
                  sampled, and tested using X-ray fluorescence screening and
                  inductively coupled plasma analysis. Independent laboratories
                  issue certificates of analysis against which the buyer can
                  later verify the shipment. Materials are crushed, screened, or
                  milled to the buyer&rsquo;s specification, packed into
                  containers or bulk bags, and loaded onto vessels at the port
                  of the buyer&rsquo;s choice. Throughout the process, our team
                  maintains a single point of accountability — the contact at
                  The 3 Rocks who handled the initial inquiry is reachable at
                  every step, from contract signing to bill of lading.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dark-mode teal underglow — carries the hero image's tone into the Mission/Vision surface */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-80 md:h-96 bg-transparent dark:bg-[linear-gradient(to_bottom,rgba(35,78,82,0.26)_0%,rgba(35,78,82,0.21)_20%,rgba(35,78,82,0.16)_40%,rgba(35,78,82,0.10)_60%,rgba(35,78,82,0.05)_80%,rgba(35,78,82,0)_100%)]"
          aria-hidden="true"
        />

        {/* Mission & Vision */}
        <div className="relative z-10 section-wrapper">
          <div className="grid md:grid-cols-2 gap-8 pt-12 pb-2 md:pt-16 md:pb-4">
            <div
              className="bg-stone-50 dark:bg-gray-700/40 p-8 rounded-lg shadow-md border border-stone-300 dark:border-gray-600/40 dark:shadow-black/40"
              data-aos="fade-right"
            >
              <div className="flex items-center mb-4">
                <div className="icon-circle mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="h3 font-red-hat-display">Our Mission</h3>
              </div>
              <p className="text-body dark:text-gray-300">
                Our mission is to successfully extract, process, and export
                premium raw materials with exceptional purity levels, ensuring
                high-quality processing, timely delivery, and smooth
                transactions. We are committed to meeting our clients&rsquo;
                expectations with reliability, transparency, and efficiency
                across every shipment.
              </p>
            </div>

            <div
              className="bg-stone-50 dark:bg-gray-700/40 p-8 rounded-lg shadow-md border border-stone-300 dark:border-gray-600/40 dark:shadow-black/40"
              data-aos="fade-left"
            >
              <div className="flex items-center mb-4">
                <div className="icon-circle mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="h3 font-red-hat-display">Our Vision</h3>
              </div>
              <p className="text-body dark:text-gray-300">
                We aim to expand our operations by increasing export volumes and
                working with a broader range of raw materials. Our goal is to
                build strong and long-term partnerships with our clients,
                fostering trust and growth for both parties while strengthening
                our position in the international market for ethically sourced
                Moroccan minerals.
              </p>
            </div>
          </div>
        </div>
        {/* Tonal bridge into the Geological section */}
        <div
          className="relative h-14 md:h-20 bg-[linear-gradient(to_bottom,#F6F1E7_0%,#F4EFE4_16%,#F3EDE1_32%,#F1EBDD_50%,#EFE8D9_68%,#EEE6D6_84%,#ECE4D3_100%)] dark:bg-none dark:bg-gray-800"
          aria-hidden="true"
        />
      </section>

      {/* Geological Context & Mining Operations */}
      <GeologicalFootprint />

      {/* Export Process */}
      <section className="bg-stone-100 dark:bg-gray-900">
        <div className="section-wrapper">
          <div className="pt-10 pb-8 md:pt-16 md:pb-12 section-divider">
            <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
              <div className="icon-circle w-16 h-16 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="section-h2">Our Moroccan Export Process</h2>
              <p className="text-xl text-gray-700 dark:text-gray-400">
                A streamlined seven-step procedure designed to ensure smooth
                transactions, full traceability, and timely delivery to any
                major international port
              </p>
              <p className="text-muted mt-4 max-w-2xl mx-auto">
                Every engagement at The 3 Rocks follows the same controlled
                sequence — from contract signing and material collection,
                through buyer inspection, laboratory analysis, packaging, and
                finally transportation to the port of loading. This repeatable
                workflow is what allows us to guarantee the same quality
                standard whether a buyer is sourcing 20 tons of lead concentrate
                or 40,000 tons of iron ore.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-stone-300 dark:bg-gray-700/60"
                  aria-hidden="true"
                />
                <div className="space-y-8 md:space-y-10">
                  {exportSteps.map((item, i) => (
                    <StepReveal key={item.step} delay={(i % 2) * 100}>
                      <div className="relative md:grid md:grid-cols-2 md:gap-12 md:items-start">
                        {/* Desktop alternating layout */}
                        <div
                          className={`hidden md:block ${item.align === "right" ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}
                        >
                          <h3 className="h4 font-red-hat-display mb-2 mt-1">
                            {item.title}
                          </h3>
                          <p className="text-body dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        <div
                          className={`hidden md:flex justify-center ${item.align === "right" ? "" : "md:order-1"}`}
                        >
                          <div className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center relative z-10 ring-4 ring-stone-100 dark:ring-gray-900 shadow-md">
                            <span className="text-lg font-bold">
                              {item.step}
                            </span>
                          </div>
                        </div>

                        {/* Mobile */}
                        <div className="md:hidden w-full">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-md">
                              <span className="text-lg font-bold">
                                {item.step}
                              </span>
                            </div>
                            <div>
                              <h3 className="h4 font-red-hat-display mb-2 mt-1">
                                {item.title}
                              </h3>
                              <p className="text-body mb-2 dark:text-gray-300">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </StepReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiation, Processing & Laboratory Quality Control */}
      <section className="bg-stone-200 dark:bg-gray-800">
        <div className="section-wrapper">
          <div className="pt-8 md:pt-12 section-divider">
            {/* Image banner */}
            <div
              className="relative rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-up"
            >
              <Image
                className="w-full h-64 md:h-80 object-cover"
                src={ProcessingImage}
                width={1152}
                height={360}
                alt="Mineral processing and laboratory quality control at The 3 Rocks depot"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500 text-white text-sm font-semibold mb-3">
                  Processing &amp; Quality
                </div>
                <h2 className="h2 font-red-hat-display text-white">
                  Beneficiation, Processing &amp; Laboratory Quality Control
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <ScrollJourney
            stages={beneficiationChapters}
            surfaceClass="bg-stone-200 dark:bg-gray-800"
          />
        </div>
      </section>

      {/* Key Principles */}
      <section className="bg-stone-100 dark:bg-gray-900">
        <div className="section-wrapper">
          <div className="pt-8 pb-8 md:pt-14 md:pb-12 section-divider">
            <div className="max-w-3xl mx-auto text-center pb-10 md:pb-14">
              <div className="icon-circle w-16 h-16 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="section-h2">
                Key Principles for a Strong Business Relationship
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-400">
                Six factors that guide our operations and ensure long-term
                success with our international partners
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {principles.map((p, i) => (
                <div
                  key={p.title}
                  className="card-feature"
                  data-aos="fade-up"
                  data-aos-delay={(i % 3) * 100}
                >
                  <h3 className="h4 font-red-hat-display mb-2 text-gray-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="text-body dark:text-gray-300">{p.detail}</p>
                </div>
              ))}
            </div>

            <div
              className="max-w-3xl mx-auto rounded-xl border border-stone-300 dark:border-teal-900 bg-stone-50 dark:bg-teal-900/20 p-6 md:p-8"
              data-aos="fade-up"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-teal-700 dark:text-teal-400">
                    Our Approach
                  </h4>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                    Build trust through transparency, ensure quality and timely
                    delivery, maintain financial reliability, and focus on
                    long-term collaboration. Address challenges proactively and
                    communicate openly to strengthen the partnership.
                  </p>
                  <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    Regular communication, clear agreements, and mutual respect
                    are the foundation of a successful and lasting business
                    relationship. We treat every shipment as the beginning of
                    the next one.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-8 md:mt-10">
              <h2 className="h2 font-red-hat-display mb-4 text-gray-900 dark:text-white">
                What the Process Means for Our Buyers
              </h2>
              <div className="prose-article">
                <p data-aos="fade-up">
                  The benefits of working with a fully integrated Moroccan
                  supplier go far beyond the convenience of a single point of
                  contact. By managing every stage in-house, The 3 Rocks is able
                  to provide buyers with documented chain of custody for every
                  ton, laboratory certificates that match the actual shipment,
                  transparent pricing without intermediary markups, and the
                  ability to scale from a 20-ton trial order to long-term
                  offtake contracts measured in tens of thousands of tons per
                  year. Buyers gain access to a team that has walked the mine
                  sites, knows the geological context, and can speak fluently
                  about the technical specification of every product in our
                  portfolio.
                </p>
                <p data-aos="fade-up" data-aos-delay="100">
                  For first-time buyers, our process is intentionally
                  low-friction: we share indicative pricing within 24 hours of
                  receiving a specification, we provide free samples for
                  laboratory analysis on request, and we can arrange video calls
                  with our geologists and logistics team to walk through the
                  workflow before any commitment. For established buyers, we run
                  dedicated account management and pre-position stock at our
                  depot during periods of high demand, smoothing the supply
                  curve and reducing lead times to destination ports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}

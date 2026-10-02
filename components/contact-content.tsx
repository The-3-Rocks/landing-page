"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Send, Package, FileCheck, CreditCard, ShieldCheck } from "lucide-react";

function Expandable({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`grid transition-all duration-500 ease-in-out motion-reduce:transition-none ${
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

function ChevronToggle({ open }: { open: boolean }) {
  return (
    <ChevronDown
      size={18}
      className={`shrink-0 text-teal-600 dark:text-teal-400 transition-transform duration-300 ease-in-out ${
        open ? "rotate-180" : ""
      }`}
    />
  );
}

const rfqItems = [
  {
    title: "Mineral and form",
    preview: "Which mineral and what physical form?",
    full: "Which mineral are you sourcing (lead, zinc calamine, copper, barite, iron ore, cobalt, or antimony)? What physical form do you require \u2014 run-of-mine ore, processed concentrate, milled powder, or graded lumps?",
  },
  {
    title: "Target specification",
    preview: "Purity, grade, or specific gravity requirements",
    full: "What is the minimum acceptable purity or grade? For barite, what specific gravity do you need? For copper, what is the minimum copper percentage? Do you have maximum limits for any impurities such as arsenic, mercury, lead, or cadmium?",
  },
  {
    title: "Quantity and packaging",
    preview: "Volume, frequency, and packaging format",
    full: "What volume are you looking to purchase, and what is the expected frequency? Do you require 25 kg bags, 1-tonne big bags, loose bulk container loading, or break-bulk vessel loading? What packaging material do you prefer \u2014 polypropylene, paper multi-ply, or jumbo bulk bags?",
  },
  {
    title: "Destination and incoterm",
    preview: "Port, incoterm, and logistics needs",
    full: "What is the port or address of destination? Do you require FOB Casablanca, FOB Tangier Med, CIF your port, CFR, or delivered duty-paid? Do you need door-to-door logistics support, or do you have your own customs clearance and inland transport at destination?",
  },
  {
    title: "Timeline",
    preview: "Delivery timing and payment method",
    full: "When do you need the material? What is the preferred payment instrument \u2014 letter of credit, telegraphic transfer, or documentary collection?",
  },
  {
    title: "Certification required",
    preview: "Required certificates and conformity statements",
    full: "Do you need a certificate of analysis from an independent laboratory, a certificate of origin, a phytosanitary certificate, a radioactive clearance certificate, or a statement of conformity with REACH, RoHS, or EU Battery Regulation requirements?",
  },
];

const qaBlocks = [
  {
    title: "Sampling & Laboratory Testing",
    preview: "How we sample, test, and verify mineral quality at every stage.",
    full: "Every shipment from The 3 Rocks is supported by a documented quality assurance process. For concentrate products, we sample each production batch at the beneficiation plant and again at the port before loading, using ASTM D2234 or equivalent standard sampling methods. For run-of-mine ore, we take composite samples from each stockpile and each truckload, with the buyer welcome to appoint an independent sampling agent at the loading point. All analyses are performed by ISO 17025-accredited laboratories in Casablanca and Rabat, using X-ray fluorescence for rapid elemental screening and inductively coupled plasma optical emission spectrometry for full trace-element quantification. Moisture content is determined by oven drying at 105 degrees Celsius, and particle size distribution is measured by mechanical sieving or laser diffraction as appropriate.",
  },
  {
    title: "Reference Samples & Dispute Resolution",
    preview: "Sample retention and how quality discrepancies are resolved.",
    full: "We retain a reference sample from every shipment for a minimum of 12 months and make it available for buyer verification at any time. Discrepancies between our certificate of analysis and the buyer\u2019s independent assay, if within standard industry tolerances, are resolved through a third-party referee analysis at a mutually agreed laboratory. If the referee analysis confirms the buyer\u2019s results, we initiate a credit or replacement shipment according to the terms of the contract.",
  },
];

const ports = [
  {
    name: "Casablanca",
    subtitle: "Containerised + break-bulk",
    details:
      "Located on Morocco\u2019s Atlantic coast approximately 90 kilometres from our Rabat headquarters. Handles containerised mineral shipments and break-bulk cargo, with regular liner services to Northern Europe, West Africa, South America, and the Mediterranean basin.",
  },
  {
    name: "Tangier Med",
    subtitle: "Global container hub",
    details:
      "Situated at the Strait of Gibraltar, Morocco\u2019s largest container transshipment hub. Offers the highest frequency of sailings to Asia, North America, and Northern Europe, making it the preferred port for buyers in China, India, Japan, South Korea, and the United States.",
  },
  {
    name: "Jorf Lasfar",
    subtitle: "Bulk / industrial cargo",
    details:
      "Approximately 50 kilometres south of Casablanca. Provides dedicated bulk loading facilities for phosphate-based products and industrial minerals, with the capacity to handle vessels of up to 80,000 deadweight tonnage.",
  },
];

const shippingData = [
  { route: "FOB", time: "10\u201315 working days" },
  { route: "Europe", time: "10\u201314 days" },
  { route: "West Africa / Mediterranean", time: "18\u201322 days" },
  { route: "Middle East / India", time: "25\u201330 days" },
  { route: "China / Southeast Asia", time: "35\u201345 days" },
  { route: "US Gulf Coast / South America", time: "40\u201350 days" },
];

const faqItems = [
  {
    q: "What is the best way to send a request for quotation?",
    icon: Send,
    a: "The contact form below is the fastest route to our commercial team. It sends your enquiry directly to our sales inbox, where it is triaged and assigned to the appropriate account manager within one hour during business hours. You may also email info@the-3rocks.com directly, but including all of the information listed in the RFQ section above will help us respond more quickly.",
  },
  {
    q: "Can I request a sample before placing an order?",
    icon: Package,
    a: "Yes. We provide free laboratory samples of up to 5 kilograms for concentrate and powder products, and up to 25 kilograms for run-of-mine ore and lump materials. The sample is dispatched by courier within 48 hours of the request, and we cover the courier cost for destinations in Europe, North America, the Middle East, and North Africa. For larger sample quantities or for multiple minerals, we may share the shipping cost with the buyer.",
  },
  {
    q: "Do you provide a certificate of analysis with every shipment?",
    icon: FileCheck,
    a: "Yes. Every shipment from The 3 Rocks is accompanied by a certificate of analysis issued by an ISO 17025-accredited laboratory. The certificate includes the mineral grade, full impurity profile, moisture content, and physical properties such as specific gravity for barite or particle size distribution for powder products. Additional testing \u2014 such as x-ray diffraction for mineral phase identification, or leachability testing for environmental compliance \u2014 can be arranged at the buyer\u2019s request and cost.",
  },
  {
    q: "What payment terms do you accept?",
    icon: CreditCard,
    a: "We accept irrevocable letters of credit confirmed by a major European or Moroccan bank, telegraphic transfer in euros or US dollars, and documentary collection (D/P or D/A) for established buyers with verifiable trading history. For first-time buyers, we typically require an L/C or 100 percent advance payment for trial orders below 100 metric tons. Long-term contract buyers can negotiate more flexible terms after the first three shipments.",
  },
  {
    q: "How does The 3 Rocks verify its supply chain due diligence?",
    icon: ShieldCheck,
    a: "We maintain a due diligence framework aligned with the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas. Our sourcing team conducts on-site assessments of all partner mines and beneficiation facilities annually, documenting the chain of custody from extraction to export. For buyers who require formal due diligence documentation \u2014 including battery supply chain participants and defence contractors \u2014 we provide a comprehensive due diligence report upon request, supported by third-party audit findings where the volume or destination justifies the cost.",
  },
];

export default function ContactContent() {
  const [rfqOpen, setRfqOpen] = useState<number | null>(null);
  const rfqContainerRef = useRef<HTMLDivElement>(null);
  const [qaOpen, setQaOpen] = useState<number | null>(null);
  const qaContainerRef = useRef<HTMLDivElement>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    if (rfqOpen === null) return;
    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (rfqContainerRef.current?.contains(target)) return;
      setRfqOpen(null);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [rfqOpen]);

  useEffect(() => {
    if (qaOpen === null) return;
    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (qaContainerRef.current?.contains(target)) return;
      setQaOpen(null);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [qaOpen]);

  const sectionClass =
    "py-10 md:py-14 first:pt-0 last:pb-0";

  const headingClass =
    "text-xl font-bold text-gray-900 dark:text-white tracking-tight";

  const subheadingClass =
    "text-base font-semibold text-gray-800 dark:text-gray-100";

  const bodyClass =
    "text-[15px] leading-relaxed text-gray-600 dark:text-gray-300";

  const previewClass =
    "text-sm text-gray-500 dark:text-gray-400 leading-relaxed";

  const readMoreClass =
    "inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-2">
      {/* ===== 1. OUR OFFICE & OPERATIONS ===== */}
      <div className={sectionClass}>
        <h2 className={`${headingClass} mb-3`}>Our Office &amp; Operations</h2>
        <div className="space-y-3">
          <p className={bodyClass}>
            The 3 Rocks Company maintains its headquarters and principal
            administrative office in Rabat, Morocco, with satellite logistics
            depots in Casablanca, Tangier, Errachidia, Ouarzazate, Nador, and
            Midelt. Each depot serves as a collection, quality inspection, and
            packing point for the minerals sourced from its surrounding mining
            region. Our Rabat office handles all commercial inquiries,
            contract management, export documentation, and after-sales
            support, while the regional depots manage day-to-day mine-site
            coordination, beneficiation oversight, and local trucking to the
            ports.
          </p>
          <p className={bodyClass}>
            All correspondence relating to quotations, orders, and technical
            inquiries should be directed to our Rabat office. For buyers who
            prefer to visit in person, we welcome scheduled appointments at our
            Rabat headquarters between 9:00 and 18:00 Moroccan time, Sunday
            through Thursday. Our commercial team is fluent in English, French,
            and Arabic, and can arrange for interpretation services for buyers
            who speak German, Spanish, Italian, Mandarin, or Japanese with at
            least forty-eight hours notice.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200/60 dark:border-gray-800/60" />

      {/* ===== 2. WHAT TO INCLUDE IN YOUR RFQ ===== */}
      <div className={sectionClass}>
        <h2 className={`${headingClass} mb-1`}>
          What to Include in Your Request for Quotation
        </h2>
        <p className={`${previewClass} mb-6`}>
          To help us respond with an accurate and complete quotation within 24
          hours, please include the following information in your initial
          enquiry:
        </p>

        <div ref={rfqContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rfqItems.map((item, i) => {
            const open = rfqOpen === i;
            return (
              <div
                key={i}
                className="border border-gray-200/60 dark:border-gray-800/60 rounded-lg p-4"
              >
                <div className="mb-1">
                  <h3 className={`${subheadingClass} mb-1`}>{item.title}</h3>
                    <p className={previewClass}>{item.preview}</p>
                </div>
                <Expandable open={open}>
                  <p className={`${bodyClass} pt-2`}>{item.full}</p>
                </Expandable>
                {!open && (
                  <button
                    type="button"
                    onClick={() => setRfqOpen(i)}
                    className={`${readMoreClass} mt-2`}
                  >
                    Read More
                    <ChevronToggle open={false} />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <Expandable open={rfqOpen !== null}>
          <p className={`${bodyClass} mt-4`}>
            If you are unsure about any of these details, please send us what
            you know and our commercial team will follow up with guidance. We
            routinely assist first-time buyers of Moroccan minerals in defining
            their specification requirements and navigating the export process
            from initial inquiry to port delivery.
          </p>
        </Expandable>
      </div>

      <div className="border-t border-gray-200/60 dark:border-gray-800/60" />

      {/* ===== 3. QUALITY ASSURANCE PROCESS ===== */}
      <div className={sectionClass}>
        <h2 className={`${headingClass} mb-6`}>Quality Assurance Process</h2>

        <div ref={qaContainerRef} className="space-y-4">
          {qaBlocks.map((block, i) => {
            const open = qaOpen === i;
            return (
              <div key={i}>
                <h3 className={`${subheadingClass} mb-1`}>{block.title}</h3>
                <p className={previewClass}>{block.preview}</p>
                <Expandable open={open}>
                  <p className={`${bodyClass} pt-2`}>{block.full}</p>
                </Expandable>
                {!open && (
                  <button
                    type="button"
                    onClick={() => setQaOpen(i)}
                    className={`${readMoreClass} mt-2`}
                  >
                    Read More
                    <ChevronToggle open={false} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-gray-200/60 dark:border-gray-800/60" />

      {/* ===== 4. EXPORT & SHIPPING INFORMATION ===== */}
      <div className={sectionClass}>
        <h2 className={`${headingClass} mb-6`}>
          Export &amp; Shipping Information
        </h2>

        <h3 className={`${subheadingClass} mb-3`}>Principal Export Ports</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {ports.map((port, i) => (
            <div
              key={i}
              className="border border-gray-200/60 dark:border-gray-800/60 rounded-lg p-4"
            >
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
                {port.name}
              </h4>
              <p className="text-xs font-medium text-teal-600 dark:text-teal-400 mb-2">
                {port.subtitle}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {port.details}
              </p>
            </div>
          ))}
        </div>

        <h3 className={`${subheadingClass} mb-3`}>Shipping Lead Times</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 mb-6">
          {shippingData.map((item, i) => (
            <div
              key={i}
              className="flex items-baseline justify-between gap-2 py-1.5 border-b border-gray-100 dark:border-gray-800/80"
            >
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {item.route}
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white tabular-nums whitespace-nowrap">
                {item.time}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-1">
          <p className={bodyClass}>
            The 3 Rocks exports from three principal Moroccan ports, each
            serving different cargo types and destination markets. Casablanca
            port, located on Morocco&apos;s Atlantic coast approximately 90
            kilometres from our Rabat headquarters, handles containerised
            mineral shipments and break-bulk cargo, with regular liner services
            to Northern Europe, West Africa, South America, and the
            Mediterranean basin. Tangier Med, situated at the Strait of
            Gibraltar, is Morocco&apos;s largest container transshipment hub
            and offers the highest frequency of sailings to Asia, North
            America, and Northern Europe, making it the preferred port for
            buyers in China, India, Japan, South Korea, and the United States.
            Jorf Lasfar, approximately 50 kilometres south of Casablanca,
            provides dedicated bulk loading facilities for phosphate-based
            products and industrial minerals, with the capacity to handle
            vessels of up to 80,000 deadweight tonnage.
          </p>
          <p className={bodyClass}>
            Standard shipping lead times are as follows: for FOB shipments, we
            require 10 to 15 working days from confirmation of the order and
            receipt of the letter of credit or advance payment. For CIF
            shipments, total transit time depends on the destination &mdash; 10
            to 14 days to European ports, 18 to 22 days to West Africa and the
            Mediterranean, 25 to 30 days to the Middle East and India, 35 to
            45 days to China and Southeast Asia, and 40 to 50 days to the
            United States Gulf Coast and South America. These estimates assume
            standard 20-foot or 40-foot container shipping; break-bulk and
            bulk vessel shipments may require additional lead time for vessel
            nomination and port berthing.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200/60 dark:border-gray-800/60" />

      {/* ===== 5. FAQ ===== */}
      <div className={sectionClass}>
        <h2 className={`${headingClass} mb-6`}>
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqItems.map((faq, i) => {
            const open = faqOpen === i;
            return (
              <div
                key={i}
                className="border border-gray-200/60 dark:border-gray-800/60 rounded-lg overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setFaqOpen(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 text-left px-4 py-3.5"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <faq.icon size={16} className="shrink-0 text-teal-600 dark:text-teal-400" />
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronToggle open={open} />
                </button>
                <Expandable open={open}>
                  <div className="px-4 pb-4">
                    <p className={`${bodyClass} pt-1`}>{faq.a}</p>
                  </div>
                </Expandable>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

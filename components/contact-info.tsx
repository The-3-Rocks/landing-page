"use client";

import { useState, type ReactNode } from "react";
import {
  FaBuilding,
  FaClipboardList,
  FaFlask,
  FaShip,
  FaChevronDown,
  FaRegEnvelope,
  FaPhoneAlt,
  FaRegClock,
  FaQuestionCircle,
} from "react-icons/fa";

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-teal-500 font-bold flex-shrink-0">&#10003;</span>
      <span className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
        {children}
      </span>
    </li>
  );
}

interface ExpandableCardProps {
  icon: ReactNode;
  title: string;
  badge: string;
  summary: string;
  delay?: number;
  children: ReactNode;
}

function ExpandableCard({
  icon,
  title,
  badge,
  summary,
  delay = 0,
  children,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="section-card group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="icon-circle group-hover:scale-105 transition-transform duration-300">
          {icon}
        </span>
        <div>
          <h2 className="text-lg font-semibold font-red-hat-display text-gray-900 dark:text-white leading-tight">
            {title}
          </h2>
          <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded-full text-xs font-semibold bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">
            {badge}
          </span>
        </div>
      </div>

      <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
        {summary}
      </p>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            {children}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors self-start"
        aria-expanded={open}
      >
        {open ? "Read less" : "Read more"}
        <FaChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}

const faqs = [
  {
    q: "What is the best way to send a request for quotation?",
    a: "The contact form on this page is the fastest route — it is triaged and assigned to an account manager within one hour during business hours. You can also email info@the-3rocks.com directly; including the RFQ details listed above helps us respond faster.",
  },
  {
    q: "Can I request a sample before placing an order?",
    a: "Yes. Free laboratory samples of up to 5 kg (concentrate and powder) or 25 kg (ore and lumps) are dispatched by courier within 48 hours. We cover the courier cost for Europe, North America, the Middle East, and North Africa.",
  },
  {
    q: "Do you provide a certificate of analysis with every shipment?",
    a: "Yes. Every shipment is accompanied by an ISO 17025-accredited certificate of analysis covering grade, impurities, moisture, and physical properties. Additional testing (XRD, leachability) can be arranged on request.",
  },
  {
    q: "What payment terms do you accept?",
    a: "Confirmed irrevocable L/Cs, telegraphic transfer in EUR or USD, and documentary collection (D/P or D/A). First-time trial orders below 100 metric tons typically require an L/C or 100% advance; long-term buyers can negotiate more flexible terms after three shipments.",
  },
  {
    q: "How do you verify supply chain due diligence?",
    a: "We follow the OECD Due Diligence Guidance, conduct annual on-site assessments of partner mines, and document the chain of custody from extraction to export. Formal due diligence reports are available on request.",
  },
];

export default function ContactInfo() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-20 md:pt-20 md:pb-24">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <div className="section-pill">Get in Touch</div>
            <h1 className="h1 font-red-hat-display mb-4">Contact The 3 Rocks</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Sourcing Moroccan{" "}
              <strong className="text-gray-900 dark:text-white">lead</strong>,{" "}
              <strong className="text-gray-900 dark:text-white">zinc</strong>,{" "}
              <strong className="text-gray-900 dark:text-white">copper</strong>,{" "}
              <strong className="text-gray-900 dark:text-white">barite</strong>,{" "}
              <strong className="text-gray-900 dark:text-white">iron ore</strong>,{" "}
              <strong className="text-gray-900 dark:text-white">cobalt</strong>, or{" "}
              <strong className="text-gray-900 dark:text-white">antimony</strong>{" "}
              for the first time, or placing a recurring order? Our Rabat team
              responds to every enquiry, quotation, sample, or certificate
              request within{" "}
              <span className="font-semibold text-gray-900 dark:text-white">24 hours</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a
                href="mailto:info@the-3rocks.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaRegEnvelope className="text-teal-500" />
                info@the-3rocks.com
              </a>
              <a
                href="tel:+212654352802"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaPhoneAlt className="text-teal-500" />
                +212 654 352 802
              </a>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                <FaRegClock className="text-teal-500" />
                Mon–Fri 9:00–18:00 (UTC+1)
              </span>
            </div>
          </div>

          {/* Cards grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <ExpandableCard
              icon={<FaBuilding className="w-5 h-5" />}
              title="Our Office & Operations"
              badge="Rabat, Morocco"
              delay={0}
              summary="HQ in Rabat handles all commercial, contract, and export documentation — supported by six logistics depots across Morocco's mining regions."
            >
              <ul className="space-y-3">
                <CheckItem>
                  Depots in Casablanca, Tangier, Errachidia, Ouarzazate, Nador,
                  and Midelt for collection, quality inspection, and packing.
                </CheckItem>
                <CheckItem>
                  In-person appointments at Rabat HQ, 9:00–18:00 Morocco time,
                  Sunday through Thursday.
                </CheckItem>
                <CheckItem>
                  Team fluent in English, French, and Arabic; interpretation in
                  German, Spanish, Italian, Mandarin, or Japanese with 48 hours'
                  notice.
                </CheckItem>
              </ul>
            </ExpandableCard>

            <ExpandableCard
              icon={<FaClipboardList className="w-5 h-5" />}
              title="What to Include in Your RFQ"
              badge="6 quick steps"
              delay={100}
              summary="Add these six details to your initial enquiry and we'll quote accurately within 24 hours."
            >
              <ul className="space-y-3">
                <CheckItem>
                  <strong>Mineral &amp; form</strong> — which mineral and
                  physical form (ore, concentrate, powder, lumps).
                </CheckItem>
                <CheckItem>
                  <strong>Target specification</strong> — minimum grade, purity,
                  and impurity limits.
                </CheckItem>
                <CheckItem>
                  <strong>Quantity &amp; packaging</strong> — volume, frequency,
                  bags, big bags, or bulk.
                </CheckItem>
                <CheckItem>
                  <strong>Destination &amp; incoterm</strong> — FOB, CIF, CFR,
                  or DDP; port or address.
                </CheckItem>
                <CheckItem>
                  <strong>Timeline &amp; payment</strong> — required date and
                  preferred payment instrument (L/C, T/T, or documentary
                  collection).
                </CheckItem>
                <CheckItem>
                  <strong>Certification required</strong> — CoA, origin,
                  phytosanitary, or REACH/RoHS declarations.
                </CheckItem>
              </ul>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
                Unsure about any detail? Send what you know — we guide
                first-time buyers from inquiry to port delivery.
              </p>
            </ExpandableCard>

            <ExpandableCard
              icon={<FaFlask className="w-5 h-5" />}
              title="Quality Assurance Process"
              badge="ISO 17025 tested"
              delay={200}
              summary="Every batch is sampled and tested by ISO 17025-accredited laboratories in Casablanca and Rabat — with independent inspection available."
            >
              <ul className="space-y-3">
                <CheckItem>
                  Sampling at the beneficiation plant and again at the port
                  before loading (ASTM D2234 or equivalent).
                </CheckItem>
                <CheckItem>
                  X-ray fluorescence (XRF) screening and ICP-OES trace-element
                  analysis; moisture and particle size measured.
                </CheckItem>
                <CheckItem>
                  Reference samples retained for 12 months; certificate
                  discrepancies resolved by third-party referee analysis.
                </CheckItem>
                <CheckItem>
                  Buyers may appoint an independent sampling agent at the
                  loading point.
                </CheckItem>
              </ul>
            </ExpandableCard>

            <ExpandableCard
              icon={<FaShip className="w-5 h-5" />}
              title="Export & Shipping"
              badge="3 Moroccan ports"
              delay={300}
              summary="We ship containers and break-bulk from Casablanca, Tangier Med, and Jorf Lasfar — with clear FOB and CIF lead times."
            >
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Casablanca
                  </p>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                    Containers &amp; break-bulk to Europe, West Africa, South
                    America, and the Mediterranean.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Tangier Med
                  </p>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                    Largest transshipment hub — frequent sailings to Asia, North
                    America, and Northern Europe.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Jorf Lasfar
                  </p>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                    Dedicated bulk loading for vessels up to 80,000 DWT.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Lead times
                  </p>
                  <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                    FOB: 10–15 working days. CIF: 10–14d Europe, 18–22d West
                    Africa/Mediterranean, 25–30d Middle East/India, 35–45d
                    China/SE Asia, 40–50d US Gulf/South America.
                  </p>
                </div>
              </div>
            </ExpandableCard>
          </div>

          {/* FAQ */}
          <div
            className="mt-16 max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <div className="text-center mb-8">
              <h2 className="section-title text-2xl md:text-3xl">
                Frequently Asked{" "}
                <span className="text-teal-600 dark:text-teal-400">
                  Questions
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Quick answers about contacting us, samples, certificates, and
                payment.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={i}
                    className="section-card !p-0 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                      aria-expanded={open}
                    >
                      <span className="flex items-center gap-3">
                        <FaQuestionCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                        <span className="text-[15px] font-semibold text-gray-900 dark:text-white">
                          {faq.q}
                        </span>
                      </span>
                      <FaChevronDown
                        className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                          open
                            ? "rotate-180 text-teal-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="px-6 pb-5 -mt-1 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-center mt-8">
              <a
                href="/faq"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
              >
                Have more questions? See our full FAQ page
                <FaChevronDown className="w-3.5 h-3.5 -rotate-90" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
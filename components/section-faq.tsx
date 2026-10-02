"use client";

import { useState } from "react";
import { ChevronDown, Package, ShieldCheck, Ship, FlaskConical } from "lucide-react";

const faqs = [
  {
    q: "What is the minimum order quantity?",
    icon: Package,
    items: [
      "Concentrates & processed products: 20 metric tons (1 × 20ft container)",
      "Run-of-mine ore: 50 metric tons (~2 containers)",
      "Bulk vessel (iron ore or barite): 5,000 metric tons minimum",
      "Free 5 kg lab samples available for qualification testing",
    ],
  },
  {
    q: "How do you ensure consistent quality across multiple shipments?",
    icon: ShieldCheck,
    items: [
      "Documented quality management system from mine to delivery",
      "Every batch tested and compared to buyer spec before release",
      "Long-term contracts include rolling quality assessment protocols",
      "Grade drift identified and corrected proactively",
    ],
  },
  {
    q: "What shipping ports and terms do you offer?",
    icon: Ship,
    items: [
      "Ports: Casablanca, Tangier Med, and Jorf Lasfar",
      "FOB from any Moroccan port",
      "CIF to major global ports",
      "CFR for buyers with their own insurance",
    ],
  },
  {
    q: "Do you provide independent laboratory analysis?",
    icon: FlaskConical,
    items: [
      "Yes — every shipment includes an ISO 17025 certificate of analysis",
      "Covers grade, full impurity profile, moisture, and physical properties",
      "Buyers may appoint SGS, Bureau Veritas, or Intertek for parallel sampling",
    ],
  },
];

export default function SectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <div className="section-pill">Common Questions</div>
          <h2 className="section-title">Frequently Asked <span className="text-teal-700 dark:text-teal-400">Questions</span></h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className="section-card">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <faq.icon size={18} className="shrink-0 text-[#1d9e75]" />
                    <h3 className="text-base font-medium text-gray-900 dark:text-white">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#1d9e75] transition-transform duration-300 ease-in-out ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
                      {faq.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-[#1d9e75] font-bold flex-shrink-0">&#10003;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

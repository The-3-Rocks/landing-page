"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the minimum order quantity?",
    items: [
      "Concentrates & processed products: 20 metric tons (1 × 20ft container)",
      "Run-of-mine ore: 50 metric tons (~2 containers)",
      "Bulk vessel (iron ore or barite): 5,000 metric tons minimum",
      "Free 5 kg lab samples available for qualification testing",
    ],
  },
  {
    q: "How do you ensure consistent quality across multiple shipments?",
    items: [
      "Documented quality management system from mine to delivery",
      "Every batch tested and compared to buyer spec before release",
      "Long-term contracts include rolling quality assessment protocols",
      "Grade drift identified and corrected proactively",
    ],
  },
  {
    q: "What shipping ports and terms do you offer?",
    items: [
      "Ports: Casablanca, Tangier Med, and Jorf Lasfar",
      "FOB from any Moroccan port",
      "CIF to major global ports",
      "CFR for buyers with their own insurance",
    ],
  },
  {
    q: "Do you provide independent laboratory analysis?",
    items: [
      "Yes — every shipment includes an ISO 17025 certificate of analysis",
      "Covers grade, full impurity profile, moisture, and physical properties",
      "Buyers may appoint SGS, Bureau Veritas, or Intertek for parallel sampling",
    ],
  },
];

export default function SectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="section-pill">Common Questions</div>
          <h2 className="section-title">
            Frequently Asked <span className="text-teal-700 dark:text-teal-400">Questions</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4" data-aos="fade-up">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl transition-all duration-300"
                style={{
                  border: "0.5px solid #e5e5e5",
                  boxShadow: isOpen ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                >
                  <h3
                    className="text-base font-medium transition-colors duration-200"
                    style={{ color: isOpen ? "#1d9e75" : undefined }}
                  >
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={18}
                    color="#1d9e75"
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-6 pt-0">
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

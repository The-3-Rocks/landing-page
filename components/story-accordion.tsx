"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  {
    num: "01",
    title: "OUR FOUNDATION",
    paras: [
      <>
        The 3 Rocks Company was founded to solve a problem that international buyers of Moroccan raw materials had been facing for decades: how to source lead, zinc, copper, barite, iron, cobalt, and antimony from a single trusted partner who could guarantee grade, documentation, and delivery, without having to coordinate with half a dozen intermediaries scattered across three continents. Our founders came from the Moroccan mining sector itself — geologists, beneficiation engineers, and export logistics professionals who had worked inside the country's largest mining groups before deciding to build a more agile, buyer-focused alternative.
      </>,
    ],
  },
  {
    num: "02",
    title: "OUR OPERATIONS",
    paras: [
      <>
        From our headquarters in Rabat and a network of depots in Errachidia, Khenifra, Midelt, Ouarzazate, Nador, and Casablanca, we now serve industrial buyers in more than twenty countries. Our portfolio covers the seven minerals that together represent the bulk of Morocco's strategic non-phosphate mining output. Each shipment is tested at an ISO 17025-accredited laboratory before loading, packaged in compliance with international shipping regulations, and documented end-to-end with certificates of origin, certificates of analysis, bills of lading, packing lists, and commercial invoices.
      </>,
      <>
        The 3 Rocks is, at its heart, a service company. We do not extract the ore ourselves; we partner with the best mining operations in each region, applying consistent quality standards across the entire supply chain. We do not own the vessels; we coordinate with established freight forwarders and shipping lines that serve the major Moroccan ports of Casablanca, Tangier Med, and Jorf Lasfar. What we own is the relationship with the buyer, the integrity of the chain of custody, and the commitment to be reachable, accountable, and fair at every stage of the engagement.
      </>,
    ],
  },
  {
    num: "03",
    title: "OUR TECHNICAL EXPERTISE",
    paras: [
      <>
        Our technical team brings together geologists who have mapped mineral deposits across the High Atlas, Anti-Atlas, and Middle Atlas ranges, mineral processing engineers with hands-on experience operating beneficiation plants for lead, zinc, barite, cobalt, and antimony, and logistics professionals who have managed export shipments from Morocco to over twenty destination countries. Each member of our technical staff holds relevant professional qualifications — including engineering degrees from Moroccan and European universities, certifications in XRF and ICP analysis, and professional memberships in organisations such as the Institute of Materials, Minerals and Mining and the Society for Mining, Metallurgy and Exploration. This depth of in-house expertise is what allows us to answer technical questions about mineral grade, impurity profiles, beneficiation routes, and application suitability without having to consult external consultants.
      </>,
    ],
  },
  {
    num: "04",
    title: "MINING PARTNERSHIPS",
    paras: [
      <>
        In the field, our team maintains direct relationships with mining operations that collectively span more than thirty individual deposits across Morocco&rsquo;s mineral-producing regions. Each deposit has been evaluated by our geological team for grade consistency, mineralogy, access infrastructure, and environmental compliance before being added to our supply network. We do not work with artisanal or unlicensed operations, and every mining partner in our network must demonstrate a valid exploitation licence, an approved environmental management plan, and a visible commitment to worker health and safety before the first shipment can be scheduled. This due diligence process is documented in writing and reviewed annually, and the records are available for inspection by buyers who request them during the contract negotiation phase.
      </>,
    ],
  },
  {
    num: "05",
    title: "QUALITY & TRACEABILITY",
    paras: [
      <>
        Our laboratory quality control system integrates on-site screening at our Errachidia depot with third-party analysis at ISO 17025-accredited laboratories in Casablanca, Rabat, and Marrakech. The on-site facility is equipped with a handheld XRF analyser for rapid elemental grade screening of incoming lots, a thermogravimetric analyser for moisture determination, a sieve shaker for particle size analysis, and a pycnometer for specific gravity measurement. All production lots are assigned unique reference numbers that track the material from the mine weighbridge through beneficiation, sampling, testing, and packing, and the results of all quality control tests are recorded in a digital database that is accessible to our export documentation team in real time. The third-party certificate of analysis that accompanies each shipment confirms the grade, impurity profile, moisture, and physical properties determined by the methods specified in the sales contract, and the buyer retains the right to nominate a fourth laboratory for umpire analysis in the event of a grade dispute.
      </>,
    ],
  },
  {
    num: "06",
    title: "OUR COMMITMENT",
    paras: [
      <>
        We are proud of the reputation we have built with our clients. More than seventy percent of our new business comes from referrals by existing customers — a metric that we consider the clearest possible endorsement of our work. Many of our first clients from a decade ago are still our clients today, and several have grown with us from single-trial orders into long-term offtake contracts measured in tens of thousands of tons per year. We have also invested heavily in our editorial library, our sustainability disclosures, and our laboratory protocols, so that buyers who are just discovering Moroccan raw materials have a transparent, well-documented entry point.
      </>,
      <>
        We are equally comfortable handling a 20-ton trial shipment of Moroccan zinc calamine for a brand-new customer as we are coordinating a 40,000-ton iron ore cargo from the Nador district to a Mediterranean steel mill. Whichever the size of the engagement, our quality system, our people, and our commitment to transparent communication remain the same. If you would like to learn more about our work, discuss a specific sourcing requirement, or arrange a visit to one of our depots, please <a href="/contact" className="text-teal-600 dark:text-teal-400 underline hover:no-underline">get in touch</a> — we respond to every enquiry within one business day.
      </>,
    ],
  },
];

export default function StoryAccordion() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateFromScroll = () => {
      const activationY = window.innerHeight / 2;
      let closest = 0;
      let minDist = Infinity;
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const dist = Math.abs(rowCenter - activationY);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex((prev) => (prev === closest ? prev : closest));
    };

    updateFromScroll();
    document.fonts?.ready?.then(updateFromScroll).catch(() => {});
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, []);

  return (
    <section className="relative bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="py-10 md:py-12">
          <div className="text-center pb-8 md:pb-10" data-aos="fade-down">
            <div className="section-pill">
              Our Story
            </div>
            <h2 className="h2 font-red-hat-display mb-4">A Moroccan Mining House Built on Trust</h2>
          </div>

          <div className="max-w-[960px] mx-auto" data-aos="fade-up">
            {sections.map((section, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={section.num}
                  className={`border-t border-gray-200 dark:border-gray-800 transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <div
                    ref={(el) => {
                      rowRefs.current[i] = el;
                    }}
                    className="w-full flex items-baseline gap-4 md:gap-6 py-5 md:py-6 text-left"
                  >
                    <span
                      aria-hidden="true"
                      className={`shrink-0 self-center rounded-full transition-all duration-300 ease-in-out ${
                        isActive
                          ? "w-4 h-4 bg-teal-500"
                          : "w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600"
                      }`}
                    />
                    <span
                      className={`text-lg md:text-xl font-red-hat-display font-semibold tracking-wide transition-colors duration-300 ${
                        isActive
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {section.title}
                    </span>
                    <span
                      className={`ml-auto h-px flex-1 self-center origin-left transition-transform duration-500 ease-in-out ${
                        isActive
                          ? "bg-teal-500 scale-x-100"
                          : "bg-gray-200 dark:bg-gray-700 scale-x-100"
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 md:pb-10 md:pl-12 lg:pl-14 max-w-3xl">
                        {section.paras.map((para, j) => (
                          <p
                            key={j}
                            className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5 last:mb-0"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-gray-200 dark:border-gray-800" />
          </div>
        </div>
      </div>
    </section>
  );
}

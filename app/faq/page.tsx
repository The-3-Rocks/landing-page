import { FAQPage, WithContext, Question } from "schema-dts";

export const metadata = {
  title: "FAQ — Moroccan Minerals & Raw Materials Export",
  description:
    "Discover frequently asked questions about raw materials supplying and more by The 3 Rocks.",
};

// FAQ items list
const faqs = [
  {
    question: "What types of raw materials do you sell?",
    answer:
      "We supply a diverse range of premium Moroccan minerals including lead (concentrate, powder, and ore), zinc (calamine ore and concentrate), copper (ore), barite (ore, powder, and lumps), iron (ore), cobalt (ore and concentrate), and antimony (ore and concentrate). Each material is ethically sourced from Morocco's richest mining regions and undergoes rigorous quality testing before export.",
  },
  {
    question: "What are the applications of these materials?",
    answer:
      "Our materials serve a wide range of global industries. Lead is essential for batteries, radiation shielding, and construction. Copper powers electrical systems, renewable energy infrastructure, and telecommunications. Barite is critical for oil and gas drilling, medical imaging, and paints. Iron forms the backbone of construction and manufacturing. Cobalt is indispensable for lithium-ion batteries, superalloys, and aerospace components. Zinc is used for galvanization, cosmetics, and die-casting, while antimony is vital for flame retardants, batteries, and electronics.",
  },
  {
    question: "What are your minimum order quantities (MOQ)?",
    answer:
      "Minimum order quantities vary by material and product form. For bulk ore and concentrate shipments, our MOQ typically starts from 20 metric tons. For processed materials and powders, MOQ may be lower depending on the product. We also accommodate smaller trial orders for new partnerships. Please contact us with your specific requirements for a detailed quotation.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can place an order by filling out the contact form on our website or by emailing us directly at info@the-3rocks.com. Our team will respond within 24 hours to discuss your requirements, provide current pricing, share product specifications, and arrange shipping logistics. We guide you through every step from initial inquiry to final delivery.",
  },
  {
    question: "What is the delivery timeframe?",
    answer:
      "Delivery timelines depend on the material, quantity, destination port, and shipping method. Standard shipments from Morocco to major international ports typically take 2 to 4 weeks from order confirmation. We work with experienced freight forwarders to ensure timely and secure delivery. Express shipping options may be available upon request for urgent orders.",
  },
  {
    question: "Do you provide quality certifications?",
    answer:
      "Yes, all our materials are accompanied by comprehensive quality documentation. We provide certificates of analysis (COA) from accredited laboratories, mill test certificates, and material safety data sheets (MSDS) where applicable. Our quality assurance process includes chemical composition testing, physical property analysis, and third-party verification to ensure every shipment meets international standards.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We offer flexible payment terms to accommodate different business relationships. Standard options include irrevocable letters of credit (L/C), telegraphic transfers (T/T), and bank guarantees. Payment terms are negotiated on a case-by-case basis depending on the order size, material type, and trading history. Contact our sales team to discuss the best option for your procurement needs.",
  },
  {
    question: "What shipping and export documentation do you provide?",
    answer:
      "We handle all export documentation required for international shipments. This includes the commercial invoice, packing list, certificate of origin (issued by Moroccan authorities), bill of lading or airway bill, phytosanitary certificate if applicable, and any additional customs documentation required by the destination country. Our logistics team ensures full compliance with Moroccan export regulations and international trade laws.",
  },
  {
    question: "Can I request a sample before ordering?",
    answer:
      "Yes, we provide material samples for prospective buyers. Sample requests can be made through our contact form or by email. Depending on the material and quantity requested, samples may be provided free of charge with the buyer covering shipping costs. Our team will coordinate with you to ensure you receive representative samples for your evaluation and testing.",
  },
  {
    question: "How can I reach customer support?",
    answer:
      "Our customer support team is available Monday through Friday from 9:00 AM to 6:00 PM (Morocco time, UTC+1). You can reach us through the contact form on our website, by emailing info@the-3rocks.com, or by phone. We strive to respond to all inquiries within 24 hours. For urgent matters, please indicate the priority in your subject line and we will prioritize your request.",
  },
  {
    question: "Which Moroccan ports do you ship from?",
    answer:
      "The 3 Rocks ships from three major Moroccan ports depending on cargo type, destination, and buyer preference. Casablanca handles most containerised and break-bulk mineral shipments and offers weekly liner services to Europe, West Africa, and the Americas. Tangier Med is the country’s largest container terminal and connects to over 180 ports worldwide, with frequent sailings to Asia, North America, and the Mediterranean. Jorf Lasfar offers dedicated bulk-loading facilities for industrial minerals and is the natural choice for large-volume bulk carriers. We can also arrange road transport to alternative Mediterranean ports such as Algeciras and Marseille on request.",
  },
  {
    question: "What incoterms do you support?",
    answer:
      "We support the full range of international commercial terms. The most common arrangements for our buyers are FOB (Free on Board) from one of the three Moroccan ports listed above, CIF (Cost, Insurance, and Freight) to a major global port of the buyer’s choice, and CFR (Cost and Freight) for buyers who prefer to arrange their own insurance through a known underwriter. We also work with ex-works arrangements for buyers who take full control of inland transport. Our logistics team prepares a detailed cost breakdown for every incoterm so the buyer can compare options before signing the contract.",
  },
  {
    question: "What laboratory analysis do you provide with each shipment?",
    answer:
      "Every shipment is accompanied by a certificate of analysis issued by an independent Moroccan laboratory accredited to ISO 17025. The certificate includes the results of X-ray fluorescence screening for major and minor elements, inductively coupled plasma testing for trace elements, particle size distribution where relevant, moisture content, and specific gravity for dense minerals such as barite. We retain reference samples from every shipment for twelve months so the buyer can request a re-test at any point. On request, we can also arrange third-party inspection by SGS, Bureau Veritas, or Intertek at the port of loading, with the cost split between buyer and seller as agreed in the contract.",
  },
  {
    question: "Do you offer samples for laboratory testing?",
    answer:
      "Yes. We provide free samples of Moroccan lead, zinc, copper, barite, iron, cobalt, and antimony for qualified buyers. Sample size is typically one to five kilograms depending on the mineral, enough for the buyer to run a full laboratory characterisation in their own facility. Sample shipments are dispatched by international courier (DHL, FedEx, or UPS) with the buyer covering the courier cost. For larger representative bulk samples of 50 kilograms or more — useful for pilot-scale processing trials — we can arrange those from our depot within two weeks of the request.",
  },
  {
    question: "What is the typical lead time from order to vessel departure?",
    answer:
      "Standard lead time for a single mineral shipment, once the contract is signed and the financial instrument is in place, is fourteen to twenty-one days for materials already in our depot. For materials requiring fresh extraction, crushing, or milling, allow an additional two to four weeks. Long-term offtake contracts are scheduled in advance and can be dispatched on a recurring monthly or quarterly cadence with shorter reaction time. Our team provides a confirmed vessel schedule — including ETA at the port of loading and estimated transit time to the destination — as part of the contract package.",
  },
  {
    question: "How do you handle environmental, social, and governance (ESG) requirements?",
    answer:
      "ESG compliance is built into our operating model. All mining partners in our network must hold valid Moroccan exploitation permits issued by the Ministry of Energy Transition and Sustainable Development, comply with the country’s environmental impact assessment regulations, and provide evidence of site rehabilitation plans. We maintain a chain-of-custody log for every lot that records the mine, the date of extraction, the transport route, and the laboratory certificate. For buyers who require additional ESG documentation — such as conflict-mineral declarations, modern slavery statements, or carbon footprint estimates per ton — we can prepare those on request at the quotation stage.",
  },
  {
    question: "Can you consolidate multiple minerals in a single shipment?",
    answer:
      "Yes. Many of our buyers source two or three minerals from us in a single vessel call, which reduces per-ton shipping cost and simplifies the documentary package. For example, a buyer might take 200 tons of lead concentrate and 100 tons of barite in the same 20-foot container shipment, or 1,000 tons of zinc ore and 500 tons of copper ore in a single bulk vessel. Our logistics team plans the loading sequence at the port, prepares a consolidated commercial invoice and packing list, and arranges the certificates of analysis in a single bound document set. There is no additional fee for consolidation as long as the cargo can be safely stowed together.",
  },
  {
    question: "How is the price of Moroccan raw materials typically structured?",
    answer:
      "Pricing is negotiated on a per-shipment basis and depends on the mineral, the grade, the form (ore, concentrate, powder), the packing, the incoterm, and the destination port. For long-term contracts, we offer formula-based pricing tied to the relevant LME reference price or to a published benchmark such as Metal Bulletin, with adjustments for grade and delivery terms. Indicative pricing for any of our minerals is available on request within twenty-four hours. We do not publish price lists on the website because raw material prices move with global commodity markets and we want our quotations to reflect the current market, not a stale figure.",
  },
  {
    question: "What packaging options do you offer for mineral shipments?",
    answer:
      "We offer a range of packaging options depending on the product form, the quantity, and the buyer's handling equipment at the destination. For concentrate and powder products, standard packaging is 50-kilogram polypropylene-lined bags palletised and shrink-wrapped, or one-metric-tonne jumbo bags with four lifting loops for crane handling. For lump ore and coarse materials, we use 20-foot or 40-foot open-top containers lined with polypropylene sheets, or bulk loading directly into the vessel hold for large-volume shipments exceeding 500 metric tons. Each packaging format is selected to minimise moisture absorption, prevent contamination, and withstand the handling and transport conditions of the specific shipping route. We provide photographs of every container at the stuffing stage, and the packaging specification is recorded in the packing list included with the export documentation.",
  },
  {
    question: "What laboratory testing methods does The 3 Rocks use for quality control?",
    answer:
      "Our quality control laboratory at the Errachidia depot is equipped with a handheld X-ray fluorescence analyser for rapid elemental screening of incoming lots, a thermogravimetric analyser for moisture content determination, a mechanical sieve shaker for particle size distribution analysis, and a gas pycnometer for specific gravity measurement of dense minerals such as barite. For comprehensive elemental analysis, we partner with ISO 17025-accredited laboratories in Casablanca, Rabat, and Marrakech that use inductively coupled plasma optical emission spectrometry for major and minor elements, inductively coupled plasma mass spectrometry for trace elements at parts-per-million and parts-per-billion detection limits, and cold-vapour atomic fluorescence spectrometry for mercury determination where required by the buyer's specification. All test methods are selected from internationally recognised standards published by ASTM, ISO, or EN, and the specific method used for each parameter is stated on the certificate of analysis.",
  },
];

// Schema.org structured data
const jsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto">
              <article>
                {/* Article header */}
                <header className="mb-8">
                  {/* Title and excerpt */}
                  <div className="text-center md:text-left">
                    <h1
                      className="h1 font-red-hat-display mb-4"
                      data-aos="fade-down"
                    >
                      Frequently Asked Questions (FAQs)
                    </h1>
                    <p
                      className="text-xl text-gray-600 dark:text-gray-400"
                      data-aos="fade-down"
                      data-aos-delay="150"
                    >
                      Here are answers to some common questions about our
                      products and services.
                    </p>
                  </div>
                </header>
                <hr
                  className="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8"
                  data-aos="fade-down"
                  data-aos-delay="450"
                />

                {/* Article content */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="450">
                  <article className="prose text-lg text-gray-600 dark:text-gray-400 max-w-none prose-lg prose-p:leading-normal prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-teal-500 dark:prose-blockquote:border-gray-400 prose-blockquote:font-normal prose-blockquote:text-inherit">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
                  </article>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

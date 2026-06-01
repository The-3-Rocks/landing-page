import Image from "next/image";
import { FAQPage, WithContext, Question } from "schema-dts";

export const metadata = {
  title: "Frequently Asked Questions",
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
      <script type="application/ld+json" src="/structured-data/faq-page.json" />
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0 h-128 pt-16 box-content">
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            src="/images/about-hero.jpg"
            width={1440}
            height={577}
            priority
            alt="FAQs"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
            aria-hidden="true"
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
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

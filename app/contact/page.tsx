export const metadata = {
  title: "Contact The 3 Rocks - Moroccan Mining Minerals Supplier",
  description:
    "Get in touch with The 3 Rocks for premium Moroccan minerals including lead, zinc, copper, barite, iron, cobalt, and antimony. Ethically sourced from Morocco's legendary mining regions.",
  keywords:
    "Contact The 3 Rocks, Morocco mining supplier, Moroccan minerals contact, lead supplier contact, zinc supplier contact, raw materials Morocco, mining company Morocco, mineral supplier contact",
  openGraph: {
    title: "Contact The 3 Rocks - Premium Moroccan Mining Materials",
    description:
      "Contact our team to source high-quality Moroccan minerals and raw materials directly from Morocco's leading mining regions.",
    images: [
      {
        url: "/images/raw-material-lead.webp",
        width: 1200,
        height: 630,
        alt: "Contact The 3 Rocks Moroccan Mining Supplier",
      },
    ],
  },
};

import Contact from "@/components/contact-comp";

export default function Contacts() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Connect with The 3 Rocks
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              The 3 Rocks is Morocco's premier supplier of ethically sourced
              premium minerals and raw materials. Whether you are a
              manufacturing company seeking bulk mineral supplies, an industrial
              buyer looking for quality certification, or a trader sourcing for
              international markets, our team of mining specialists and supply
              chain experts are ready to assist you.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              We supply the world's leading industries with high-grade Moroccan
              minerals including lead, zinc (calamine), copper, barite, iron
              ore, cobalt, and antimony extracted from Morocco's legendary
              mining regions including the Atlas Mountains, Tinghir, Khenifra,
              and other strategically important reserves. Our commitment to
              sustainable mining practices, transparent sourcing, and rigorous
              quality control ensures that every shipment meets international
              standards.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Our Service Areas
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Direct mineral sourcing from Moroccan mines</li>
                  <li>• Quality testing and certification</li>
                  <li>• Bulk order fulfillment and logistics</li>
                  <li>• Custom mineral specifications</li>
                  <li>• Long-term supply contracts</li>
                  <li>• International shipping and export</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Industries We Serve
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Construction & Infrastructure</li>
                  <li>• Electronics & Semiconductors</li>
                  <li>• Battery & Energy Storage</li>
                  <li>• Automotive Manufacturing</li>
                  <li>• Chemical Processing</li>
                  <li>• Water Treatment & Purification</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Our team includes experienced geologists, mining engineers, and
              supply chain specialists who understand the unique requirements of
              each industry. We provide detailed technical specifications,
              certificates of analysis, safety data sheets, and comprehensive
              documentation to ensure seamless integration into your supply
              chain.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              With offices in Casablanca, Morocco and partnerships across
              Europe, Asia, and Africa, we are positioned to deliver premium
              Moroccan minerals to clients worldwide. Whether you need a
              one-time bulk order or an ongoing supply arrangement, we customize
              solutions to meet your business needs, timeline, and budget
              constraints.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

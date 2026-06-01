export const metadata = {
  title: "Premium Moroccan Minerals & Mining Materials Supplier",
  description:
    "Leading supplier of high-quality Moroccan minerals including lead, zinc, copper, barite, iron, cobalt, and antimony. Ethically sourced from Morocco's richest mining regions for global industrial applications.",
  keywords: [
    "Morocco mining",
    "Moroccan minerals",
    "lead",
    "zinc",
    "copper",
    "barite",
    "iron",
    "cobalt",
    "antimony",
    "raw materials Morocco",
    "mining company Morocco",
    "mineral supplier",
    "Moroccan lead ore",
    "zinc concentrate Morocco",
    "copper minerals Morocco",
    "barite powder supplier",
    "iron ore exporter",
    "cobalt mining Morocco",
    "antimony producer Morocco",
    "Morocco mineral exports",
    "African mining company",
    "North Africa minerals",
    "bulk mineral supplier",
    "industrial minerals",
    "Morocco natural resources",
    "mining materials supplier",
    "heavy metals supplier",
    "non-ferrous metals Morocco",
    "mineral concentrate",
    "Moroccan mining industry",
    "metallic ores supplier",
    "mineral commodities",
    "Morocco barite density",
    "high purity minerals",
    "Moroccan cobalt battery grade",
    "lead concentrate Morocco",
    "zinc ore Morocco",
    "copper cathode Morocco",
    "iron ore Morocco",
    "cobalt concentrate",
    "antimony trioxide",
    "mining raw materials",
    "Moroccan geological survey",
    "mineral processing Morocco",
    "metallurgical grade minerals",
    "industrial mineral powders",
    "Morocco mining regulations",
    "sustainable mining Morocco",
    "mineral extraction",
    "ore beneficiation",
    "mineral trading company",
    "Morocco export minerals",
  ],
  openGraph: {
    title: "Premium Moroccan Mining Materials Supplier",
    description:
      "Ethically sourced Moroccan minerals for global industries. High-quality lead, zinc, copper, barite, iron, cobalt, and antimony from Morocco's legendary mines.",
    url: "https://www.the-3rocks.com/products",
    type: "website",
    siteName: "The 3 Rocks Company",
    images: [
      {
        url: "https://www.the-3rocks.com/images/the3rocks.png",
        width: 1200,
        height: 630,
        alt: "The 3 Rocks Company - Premium Moroccan Minerals",
      },
    ],
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.the-3rocks.com/products",
  },
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

import ChatButtons from "@/components/ChatButtons";
import ProductsPage from "@/components/raw";

export default function OurRawPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Premium Moroccan Minerals & Raw Materials
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              The 3 Rocks supplies the world's most demanding industries with
              premium, ethically sourced minerals and raw materials extracted
              from Morocco's most productive mining regions. Our comprehensive
              mineral portfolio includes lead, zinc (calamine), copper, barite,
              iron ore, cobalt, and antimony — all tested to rigorous
              international standards and available for immediate shipment to
              clients worldwide.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              We are committed to sustainable mining practices, transparent
              supply chains, and partnerships with local communities. Every
              mineral we supply carries full documentation including
              certificates of analysis, safety data sheets, and environmental
              compliance records. Whether you need bulk quantities for
              industrial production or specialized grades for research and
              development, we have the expertise and resources to meet your
              unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mineral Categories
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Base Metals
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Lead, zinc, copper — the foundation of industrial
                      manufacturing
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Industrial Minerals
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Barite, iron ore, and specialty minerals for processing
                      and manufacturing
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Battery & Energy Metals
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Cobalt and specialty minerals for EV batteries and
                      renewable energy applications
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Specialty Elements
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Antimony and rare minerals for electronics,
                      pharmaceuticals, and advanced applications
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Quality Assurance
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Independent lab testing and certification
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Full traceability from mine to delivery
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Environmental compliance documentation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Custom purity and specification options
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-8 border border-teal-200 dark:border-teal-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose The 3 Rocks?
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold text-lg">→</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Direct from Morocco:</strong> We work directly with
                  mining operations, eliminating middlemen and ensuring
                  competitive pricing
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold text-lg">→</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Proven Track Record:</strong> Decades of experience
                  supplying leading global manufacturers
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold text-lg">→</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Sustainable Practices:</strong> Committed to ethical
                  mining and environmental stewardship
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-500 font-bold text-lg">→</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Global Logistics:</strong> Efficient shipping to ports
                  worldwide with full documentation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ProductsPage /> <ChatButtons />{" "}
    </>
  );
}

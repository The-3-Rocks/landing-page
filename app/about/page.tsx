export const metadata = {
  title: "Leading Moroccan Mining Experts",
  description:
    "Discover Morocco's premier mining company with decades of expertise in extracting high-quality minerals from Morocco's rich geological deposits. Learn about our sustainable Moroccan mining practices and heritage.",
  keywords:
    "Moroccan mining, Morocco minerals, mining company Morocco, sustainable mining Morocco, Moroccan mineral extraction, Morocco mining experts",
  openGraph: {
    title: "About The 3 Rocks - Morocco's Premier Mining Experts",
    description:
      "Discover our Moroccan mining heritage, sustainable practices, and how we've become leaders in Morocco's mineral industry over generations.",
    images: [
      {
        url: "/images/moroccan-mining-heritage.jpg",
        width: 1200,
        height: 630,
        alt: "The 3 Rocks Mining Operations in Morocco",
      },
    ],
  },
};

import Hero from "@/components/hero-about";
import FeaturesGallery from "@/components/features-gallery";
import Timeline from "@/components/timeline";
import Career from "@/components/career";
import FeaturesAnimation from "@/components/features-animation";
import Team from "@/components/team";
import CtaContact from "@/components/cta-contact";
import ContactInfoSection from "@/components/data-company";
import ChatButtons from "@/components/ChatButtons";

export default function About() {
  return (
    <>
      <ChatButtons />

      {/* About Company Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Morocco's Premier Mining Supplier — The 3 Rocks
          </h1>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              The 3 Rocks is Morocco's leading supplier of premium, ethically
              sourced minerals and raw materials. With deep roots in Morocco's
              mining heritage and decades of operational excellence, we connect
              the world's most demanding industries with high-grade minerals
              extracted from Morocco's legendary mining regions including the
              Atlas Mountains, Tinghir, Khenifra, and other strategically
              important reserves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                To be the trusted partner for premium Moroccan minerals —
                delivering exceptional quality, transparency, and reliability to
                industries worldwide while maintaining sustainable mining
                practices and supporting local communities in Morocco's mining
                regions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe that responsible mining creates value for all
                stakeholders: our suppliers, customers, employees, and the
                communities where we operate. Every mineral we supply represents
                our commitment to excellence and ethical business practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Values
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Quality & Excellence
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Rigorous testing and certification ensure every mineral
                      meets international standards
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Transparency & Trust
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Full supply chain traceability and honest communication
                      with partners
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Sustainability
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Environmental responsibility and ethical mining practices
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Partnership
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Long-term relationships built on mutual respect and shared
                      success
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-8 border border-teal-200 dark:border-teal-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose The 3 Rocks?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Deep Industry Experience
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Our team includes geologists, mining engineers, and supply
                  chain specialists with hands-on experience across Morocco's
                  major mining operations. We understand both the technical and
                  commercial aspects of mineral sourcing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Direct Mine Access
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  We work directly with mining operations in Morocco,
                  eliminating unnecessary middlemen and ensuring competitive
                  pricing without compromising quality.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Every shipment undergoes independent laboratory testing and
                  certification. We maintain strict quality control standards
                  that exceed international requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Global Logistics
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  With established shipping relationships and experience
                  exporting to Europe, Asia, Africa, and the Americas, we handle
                  all logistics efficiently and professionally.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mineral Portfolio
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              The 3 Rocks supplies premium grades of the following minerals,
              each extracted from Morocco's most productive mining regions and
              tested to rigorous international specifications:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded p-4 border border-gray-200 dark:border-gray-700">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>
                    • <strong>Lead</strong> — Industrial and high-purity grades
                  </li>
                  <li>
                    • <strong>Zinc (Calamine)</strong> — Concentrated and powder
                    forms
                  </li>
                  <li>
                    • <strong>Copper</strong> — Various specifications for
                    manufacturing
                  </li>
                  <li>
                    • <strong>Barite</strong> — Drilling grade and industrial
                    applications
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded p-4 border border-gray-200 dark:border-gray-700">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>
                    • <strong>Iron Ore</strong> — High-grade and beneficiated
                    concentrates
                  </li>
                  <li>
                    • <strong>Cobalt</strong> — Battery-grade and superalloy
                    applications
                  </li>
                  <li>
                    • <strong>Antimony</strong> — Industrial and specialty
                    grades
                  </li>
                  <li>
                    • <strong>Custom Minerals</strong> — Tailored specifications
                    on request
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Serving Global Industries
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The 3 Rocks supplies minerals to leading companies in
              construction, automotive manufacturing, electronics, battery
              production, chemical processing, water treatment, and numerous
              other industries. Our partnerships span Europe, Asia, Africa, and
              the Americas, reflecting the global demand for high-quality
              Moroccan minerals and our commitment to serving diverse markets
              with professionalism and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Hero section showcasing Moroccan mining heritage */}
      <Hero />

      {/* Gallery featuring our Moroccan mining operations */}
      <FeaturesGallery />

      {/* Uncomment when ready to display Moroccan mining history timeline */}
      {/* <Timeline /> */}

      {/* Uncomment when ready to display careers in Moroccan mining */}
      {/* <Career /> */}

      {/* Features highlighting our Moroccan mining innovations */}
      <FeaturesAnimation />

      {/* Our expert Moroccan mining team */}
      <Team />
      <ContactInfoSection />
      {/* Contact section for Moroccan mineral inquiries */}
      {/* <CtaContact /> */}
    </>
  );
}

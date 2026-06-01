import { getProductsPosts } from "@/components/mdx/utils";
import ArticlesClient from "./articles-client";
import ChatButtons from "@/components/ChatButtons";

export const metadata = {
  title: "Moroccan Mining Insights & Industry Articles",
  description:
    "Explore expert articles on Morocco's mining industry, mineral extraction, sustainability practices, and market trends from The 3 Rocks Company.",
  keywords:
    "Moroccan mining articles, mining insights Morocco, mineral industry news, Moroccan raw materials, cobalt mining, lead industry Morocco, sustainable mining Morocco",
  openGraph: {
    title: "Moroccan Mining Insights & Industry Articles",
    description:
      "Stay informed with in-depth articles covering Morocco's mining sector, raw materials, and sustainability innovations.",
    images: [
      {
        url: "/images/moroccan-mining-articles.jpg",
        width: 1200,
        height: 630,
        alt: "Moroccan Mining Articles by The 3 Rocks Company",
      },
    ],
  },
  alternates: {
    canonical: "https://www.the-3rocks.com/articles",
  },
};

export default function Blog() {
  const allBlogs = getProductsPosts();

  // Sort posts by date
  allBlogs.sort((a, b) => {
    return new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? -1
      : 1;
  });

  return (
    <>
      <ChatButtons />
      
      {/* Comprehensive Article Intro Section - BEFORE Client Component */}
      <section className="bg-white dark:bg-gray-900 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Moroccan Mining Industry Insights, Technical Guides & Educational Resources
            </h1>
            
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-semibold">
              The Premier Knowledge Hub for Morocco's Mineral Industry
            </p>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Welcome to The 3 Rocks' comprehensive knowledge hub — your authoritative source for in-depth information about Morocco's mining industry, mineral resources, extraction technologies, market analysis, and sustainable practices. Our extensive library contains over 60+ specialized articles covering every aspect of mineral sourcing, from geological formations to industrial applications, global market trends, and regulatory compliance.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-8 mb-8 border border-teal-200 dark:border-teal-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What You'll Find Here</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                  <div>
                    <strong>Complete Mineral Guides:</strong> Detailed specifications for lead, zinc, copper, barite, iron ore, cobalt, antimony, and emerging industrial minerals — including physical properties, chemical composition, purity grades, and global market data
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                  <div>
                    <strong>Extraction & Processing Technology:</strong> Articles on mining methods, beneficiation processes, flotation techniques, mineral concentration, quality control procedures, and laboratory testing (XRF, ICP, wet chemical analysis)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                  <div>
                    <strong>Industry Applications:</strong> How Moroccan minerals serve construction, automotive, electronics, battery manufacturing, renewable energy, aerospace, pharmaceuticals, water treatment, and other global industries
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                  <div>
                    <strong>Market Analysis & Trends:</strong> Global pricing trends, supply chain dynamics, regulatory changes, emerging technologies, sustainability innovations, and future outlook for Moroccan mining
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                  <div>
                    <strong>Sustainability & Environmental Practices:</strong> Responsible mining methods, environmental impact assessments, remediation practices, carbon footprint reduction, and ethical sourcing standards
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Whether you're a mining engineer planning extraction strategies, an industrial procurement specialist sourcing materials, a trader analyzing market opportunities, a student researching geology and mineral economics, or a researcher investigating industrial minerals, our knowledge base provides the technical depth, scientific rigor, and practical insights needed for informed decision-making.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-3">60+</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">In-Depth Articles</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive guides covering minerals, technology, markets, and sustainable practices</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-3">Expert</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Editorial Team</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Geologists, mining engineers, and supply chain specialists with field experience</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-3">Updated</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quarterly</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Regular updates reflecting market changes, new technologies, and regulatory updates</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Our Research & Editorial Standards</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Every article is researched and written by our team of experienced geologists, mining engineers, and industry specialists with hands-on experience across Morocco's major mining regions including the Atlas Mountains (Anti-Atlas and High Atlas ranges), Tinghir copper region, Errachidia zinc belt, Khenifra antimony district, Midelt barite deposits, and coastal mining operations. Our team has direct experience working in:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              <li className="flex gap-3 text-gray-600 dark:text-gray-400">
                <span className="text-teal-500">✓</span> Extraction sites and open pit mining operations
              </li>
              <li className="flex gap-3 text-gray-600 dark:text-gray-400">
                <span className="text-teal-500">✓</span> Beneficiation plants and mineral processing facilities
              </li>
              <li className="flex gap-3 text-gray-600 dark:text-gray-400">
                <span className="text-teal-500">✓</span> Laboratory testing and quality assurance procedures
              </li>
              <li className="flex gap-3 text-gray-600 dark:text-gray-400">
                <span className="text-teal-500">✓</span> Port operations and international logistics
              </li>
              <li className="flex gap-3 text-gray-600 dark:text-gray-400">
                <span className="text-teal-500">✓</span> Supply chain management and commodity trading
              </li>
              <li className="flex gap-3 text-gray-600 dark:text-gray-400">
                <span className="text-teal-500">✓</span> Environmental and regulatory compliance
              </li>
            </ul>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Our sources include USGS mineral commodity summaries, peer-reviewed research from the Journal of African Earth Sciences, Morocco's Ministry of Energy Transition and Sustainable Development, International Commodities Exchange data, and direct communication with mining operators, processors, and distributors. We cite authoritative references throughout our articles and maintain a commitment to accuracy, scientific integrity, and practical applicability.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Content is updated quarterly to reflect current market conditions, new extraction technologies, regulatory changes, industry shifts, and emerging applications for Moroccan minerals. We actively monitor global commodity markets, follow mining industry publications, track government policy updates, and engage with industry professionals to ensure our articles remain current and relevant.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Use This Resource</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
              Browse our complete article library using the search function and category filters below. Articles are organized by topic including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              <li><strong>Material Guides:</strong> Individual mineral profiles with technical specifications and market information</li>
              <li><strong>Processing Technology:</strong> Extraction, beneficiation, and laboratory testing methodologies</li>
              <li><strong>Industry Applications:</strong> How minerals serve specific industries and manufacturing processes</li>
              <li><strong>Market & Economics:</strong> Pricing trends, supply dynamics, and market forecasts</li>
              <li><strong>Sustainability:</strong> Environmental practices, responsible mining, and regulatory compliance</li>
              <li><strong>Regional Guides:</strong> Geological information about Morocco's mining regions and deposit characteristics</li>
            </ul>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Each article includes sections on specifications, applications, market data, and references. Use the category filters to narrow by topic, or search by keyword to find specific minerals or technical information. New articles are published regularly, so bookmark this page and check back often for the latest industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Original Articles Component */}
              mining engineers, and industry specialists with hands-on
              experience across Morocco's mining regions including the Atlas
              Mountains, Tinghir, Khenifra, and other major reserves. Every
              article cites authoritative sources including USGS mineral
              commodity summaries, academic research, and data from Morocco's
              Ministry of Energy Transition.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We update our content regularly to reflect changes in mining
              regulations, global market conditions, extraction technologies,
              and industrial applications. Whether you're researching for
              business decisions, academic purposes, or industry analysis, our
              resources provide the depth and accuracy you need.
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Our article library is organized by category, making it easy to find
            resources on specific topics. Use the search function and category
            filters below to browse articles relevant to your needs — from
            individual mineral profiles to comprehensive industry analysis to
            sustainability and environmental topics.
          </p>
        </div>
      </section>
      <ArticlesClient allBlogs={allBlogs} />
    </>
  );
}

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
      {/* Comprehensive Article Intro Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Moroccan Mining Industry Insights & Educational Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Welcome to The 3 Rocks' comprehensive knowledge hub dedicated to
            Morocco's rich mining industry. Our library contains in-depth
            guides, technical articles, market analysis, and educational
            resources covering everything from mineral extraction techniques to
            global market trends, sustainability practices, and industrial
            applications.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Whether you're a mining engineer researching extraction methods, an
            industrial buyer sourcing materials, a trader analyzing market
            conditions, or a student learning about geology and mineral
            processing, our articles provide authoritative, well-researched
            information backed by scientific evidence and industry expertise.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Material Guides
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Comprehensive guides on lead, zinc, copper, barite, iron,
                cobalt, antimony, and other minerals — including properties,
                uses, quality standards, and market data.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Processing & Technology
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Technical articles on mineral extraction, beneficiation,
                flotation processes, quality control, and testing methodologies
                used in modern mining operations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Industry Trends
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Market analysis, pricing trends, global supply chains, emerging
                applications in batteries, electronics, renewable energy, and
                other industries.
              </p>
            </div>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800 mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              About Our Editorial Team
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Our articles are researched and written by a team of geologists,
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

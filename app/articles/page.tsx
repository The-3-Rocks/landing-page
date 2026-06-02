import { getProductsPosts } from "@/components/mdx/utils";
import ArticlesClient from "./articles-client";
import ChatButtons from "@/components/ChatButtons";
import Link from "next/link";

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
    return new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1;
  });

  // Pre-compute category groups (server-rendered for SEO)
  const categoryGroups: Record<string, typeof allBlogs> = {};
  for (const post of allBlogs) {
    const cat = (post.metadata as any).category || "Raw Materials";
    if (!categoryGroups[cat]) categoryGroups[cat] = [];
    categoryGroups[cat].push(post);
  }
  const categories = Object.keys(categoryGroups).sort();

  return (
    <>
      <ChatButtons />

      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-16">
            <div className="text-center pb-10" data-aos="fade-down">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
                The 3 Rocks Editorial Library
              </div>
              <h1 className="h1 font-red-hat-display mb-6">Moroccan Mining Insights & Industry Articles</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                The 3 Rocks publishes in-depth articles on every facet of Morocco’s mining sector — from geological formation in the Anti-Atlas and High Atlas ranges, through extraction, beneficiation, and quality control, to export logistics through the ports of Casablanca, Tangier Med, and Jorf Lasfar. Our editorial team includes geologists who have mapped deposits across the Atlas Mountains, mining engineers with hands-on experience in Moroccan beneficiation plants, and supply chain specialists who manage shipments to over twenty countries.
              </p>
            </div>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 max-w-none prose-p:leading-relaxed prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline" data-aos="fade-up">
              <p>
                The Moroccan mining industry sits among the most geologically diverse in the world. The country holds more than seventy percent of global phosphate reserves, substantial deposits of lead and zinc across the Atlas Mountain belts, growing production of copper in the Tinghir region, world-class barite in Midelt and Ouarzazate, high-purity iron ore in the Nador and Oujda districts, battery-grade cobalt from the historic Bou Azzer mining district, and an emerging antimony industry centred on the Khenifra region. Each of these commodities is examined in detail in the articles below, with references to USGS mineral commodity summaries, academic publications in the Journal of African Earth Sciences, and data from Morocco’s Ministry of Energy Transition and Sustainable Development.
              </p>
              <p>
                For industrial buyers, the library is designed to answer the questions that matter most when sourcing Moroccan raw materials: which deposit does this ore come from, what is the typical purity range, what is the standard certificate of analysis format, what are the main industrial applications, what incoterms are available from Moroccan ports, and how is the export documentation package assembled. For researchers, journalists, and students, the articles provide an accessible entry point to Morocco’s mining geography, its regulatory framework, and its role in the global supply chains for lead-acid batteries, lithium-ion batteries, drilling fluids, paints and coatings, ceramics, glass, flame retardants, radiation shielding, and renewable energy hardware.
              </p>
              <p>
                New articles are published every month. Recent additions cover strategic shifts in global zinc output, the role of Moroccan minerals in the energy transition, the geology of the Atlas Mountains, flotation and beneficiation techniques, X-ray fluorescence and inductively coupled plasma analysis, mine remediation practices, supply chain transparency, and the regulatory framework that governs mining in Morocco. Use the category filter or the search bar below to browse by topic, mineral, or application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticlesClient allBlogs={allBlogs} />

      <section className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-16">
            <div className="text-center pb-8" data-aos="fade-up">
              <h2 className="h2 font-red-hat-display mb-4">Browse the Editorial Library by Category</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Every article published by The 3 Rocks is grouped into one of the categories below. Each link opens a search-engine-friendly list of every article in that category, with publication date, summary, and direct link to the full piece.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {categories.map((cat) => (
                <div key={cat} className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold font-red-hat-display text-gray-900 dark:text-white mb-2">
                    {cat} <span className="text-sm font-normal text-gray-500">({categoryGroups[cat].length} articles)</span>
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {categoryGroups[cat].slice(0, 5).map((p) => (
                      <li key={p.slug}>
                        <Link href={`/articles/${p.slug}`} className="text-teal-600 dark:text-teal-400 hover:underline">
                          {p.metadata.title}
                        </Link>
                      </li>
                    ))}
                    {categoryGroups[cat].length > 5 && (
                      <li className="text-xs text-gray-500 italic">
                        and {categoryGroups[cat].length - 5} more — use the search above to find a specific topic
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 prose prose-base text-gray-600 dark:text-gray-400 max-w-none prose-p:leading-relaxed">
              <p>
                The 3 Rocks editorial team updates this library on a quarterly cadence to reflect changes in Moroccan mining regulations, USGS mineral commodity data, and shifts in global demand. Every article is reviewed by a member of our technical staff before publication and revisited annually to ensure the specifications, deposit names, and regulatory references remain current. If you spot an error or have a topic you would like us to cover — whether it is a new mining region, a new industrial application, or a deep-dive into a particular mineral grade — please reach out to our team in Rabat.
              </p>
              <p>
                We also welcome guest contributions from geologists, mining engineers, metallurgists, and procurement specialists working in or sourcing from Morocco. Co-authored articles receive dual bylines, an expanded author bio, and prominent placement in the library for the first ninety days after publication. Contact our editorial team to propose a topic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

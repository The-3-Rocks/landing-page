import { getProductsPosts } from "@/components/mdx/utils";
import ArticlesClient from "./articles-client";
import ChatButtons from "@/components/ChatButtons";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Moroccan Mining Insights & Industry Articles",
  description:
    "Explore expert articles on Morocco's mining industry, mineral extraction, sustainability practices, and market trends from The 3 Rocks Company.",
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

  // Pre-compute category groups (server-rendered for SEO)
  const categoryGroups: Record<string, typeof allBlogs> = {};
  for (const post of allBlogs) {
    const cat = (post.metadata as any).category || "Raw Materials";
    if (!categoryGroups[cat]) categoryGroups[cat] = [];
    categoryGroups[cat].push(post);
  }
  const categories = Object.keys(categoryGroups).sort();
  const expertCount =
    allBlogs.filter(
      (p) => p.metadata.author && p.metadata.author !== "The 3 Rocks Company",
    ).length + 1;

  // The Asian Metal article is pinned as the first card directly below the filter bar
  const asiaMetalSlug = "zinc-ore-output-increase-asia-metal";
  const asiaMetalPost = allBlogs.find((p) => p.slug === asiaMetalSlug);
  const collectionPosts = [
    ...(asiaMetalPost ? [asiaMetalPost] : []),
    ...allBlogs.filter((p) => p.slug !== asiaMetalSlug),
  ];

  return (
    <>
      {/* <ChatButtons /> */}

      {/* Masthead */}
      <section className="relative bg-stone-50 dark:bg-gray-900 border-b border-stone-200 dark:border-gray-800 overflow-hidden">
        {/* Morocco map silhouette — light mode: subtle background emerging from the right */}
        <div
          className="absolute top-20 right-0 h-[55%] w-[85%] md:top-20 md:right-0 md:bottom-0 md:left-0 md:h-auto md:w-auto dark:hidden [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_60%),linear-gradient(to_left,black_0%,black_40%,transparent_90%)] [-webkit-mask-composite:source-in] [mask-image:linear-gradient(to_top,transparent_0%,black_60%),linear-gradient(to_left,black_0%,black_40%,transparent_90%)] [mask-composite:intersect] md:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_80%,transparent_100%),linear-gradient(to_left,black_0%,black_35%,transparent_55%)] md:[mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_80%,transparent_100%),linear-gradient(to_left,black_0%,black_35%,transparent_55%)]"
          aria-hidden="true"
        >
          <Image
            src="/images/MaMapFoWhiteMode.png"
            alt=""
            fill
            sizes="60vw"
            priority
            className="object-contain object-right scale-[1.12] origin-top-right opacity-30"
          />
        </div>
        {/* Morocco map silhouette — dark mode, identical composition */}
        <div
          className="absolute top-20 right-0 h-[55%] w-[85%] md:top-20 md:right-0 md:bottom-0 md:left-0 md:h-auto md:w-auto hidden dark:block [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_60%),linear-gradient(to_left,black_0%,black_40%,transparent_90%)] [-webkit-mask-composite:source-in] [mask-image:linear-gradient(to_top,transparent_0%,black_60%),linear-gradient(to_left,black_0%,black_40%,transparent_90%)] [mask-composite:intersect] md:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_80%,transparent_100%),linear-gradient(to_left,black_0%,black_35%,transparent_55%)] md:[mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_80%,transparent_100%),linear-gradient(to_left,black_0%,black_35%,transparent_55%)]"
          aria-hidden="true"
        >
          <Image
            src="/images/MaMapForDarkMode.png"
            alt=""
            fill
            sizes="60vw"
            className="object-contain object-right scale-[1.12] origin-top-right opacity-30"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:pl-24">
          <div className="relative max-w-2xl pt-24 pb-16 md:pt-24 md:pb-20 md:min-h-[420px] md:flex md:flex-col md:justify-center">
            <h1 className="h1 font-red-hat-display text-gray-900 dark:text-white [text-wrap:balance]">
              Moroccan Mining Insights & Industry Articles
            </h1>
            <p className="mt-5 max-w-[65ch] text-gray-700 dark:text-gray-300 leading-relaxed">
              The 3 Rocks publishes in-depth articles on every facet of
              Morocco’s mining sector — from geological formation in the
              Anti-Atlas and High Atlas ranges, through extraction,
              beneficiation, and quality control, to export logistics through
              the ports of Casablanca, Tangier Med, and Jorf Lasfar. Our
              editorial team includes geologists who have mapped deposits across
              the Atlas Mountains, mining engineers with hands-on experience in
              Moroccan beneficiation plants, and supply chain specialists who
              manage shipments to over twenty countries.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial statistics divider */}
      <section
        className="relative bg-white dark:bg-gray-900 border-b border-stone-200 dark:border-gray-800"
        aria-label="Library statistics"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-10" data-aos="fade-up">
            <dl className="flex items-stretch justify-center divide-x divide-stone-200 dark:divide-gray-800">
              <div className="px-4 sm:px-8 text-center">
                <dt className="sr-only">Articles</dt>
                <dd className="font-red-hat-display font-black text-3xl sm:text-4xl tabular-nums text-teal-600 dark:text-teal-400 leading-none">
                  {allBlogs.length}
                </dd>
                <span
                  className="mx-auto mt-3 block h-px w-8 bg-teal-600/60 dark:bg-teal-400/50"
                  aria-hidden="true"
                ></span>
                <dd className="mt-3 text-[11px] sm:text-xs font-normal uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Articles
                </dd>
              </div>
              <div className="px-4 sm:px-8 text-center">
                <dt className="sr-only">Categories</dt>
                <dd className="font-red-hat-display font-black text-3xl sm:text-4xl tabular-nums text-teal-600 dark:text-teal-400 leading-none">
                  {categories.length}
                </dd>
                <span
                  className="mx-auto mt-3 block h-px w-8 bg-teal-600/60 dark:bg-teal-400/50"
                  aria-hidden="true"
                ></span>
                <dd className="mt-3 text-[11px] sm:text-xs font-normal uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Categories
                </dd>
              </div>
              <div className="px-4 sm:px-8 text-center">
                <dt className="sr-only">Experts</dt>
                <dd className="font-red-hat-display font-black text-3xl sm:text-4xl tabular-nums text-teal-600 dark:text-teal-400 leading-none">
                  {expertCount}
                </dd>
                <span
                  className="mx-auto mt-3 block h-px w-8 bg-teal-600/60 dark:bg-teal-400/50"
                  aria-hidden="true"
                ></span>
                <dd className="mt-3 text-[11px] sm:text-xs font-normal uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Experts
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Strip content field before passing to client to avoid __NEXT_DATA__ bloat */}
      <ArticlesClient
        allBlogs={
          collectionPosts.map(({ slug, metadata }) => ({
            slug,
            metadata,
          })) as any
        }
      />

      {/* About the library — editorial showcase */}
      <section className="relative bg-stone-50 dark:bg-gray-800/40 border-t border-stone-200 dark:border-gray-800 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-400/60 to-transparent dark:via-teal-500/40"
          aria-hidden="true"
        ></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Editorial masthead */}
            <div className="max-w-4xl" data-aos="fade-up">
              <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-teal-700 dark:text-teal-400">
                <span
                  className="h-px w-10 bg-teal-700 dark:bg-teal-400"
                  aria-hidden="true"
                ></span>
                Knowledge Hub
              </div>
              <h2 className="h2 font-red-hat-display mt-5 text-gray-900 dark:text-white [text-wrap:balance]">
                Insights from Morocco's Mining Experts
              </h2>
              <p className="mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Explore our comprehensive library of articles covering Morocco's
                rich mining industry — from mineral properties and extraction
                methods to market trends, quality standards, and sustainable
                practices. Each guide is written by our team of geologists,
                mining engineers, and industry specialists.
              </p>
              <div className="mt-8 border-b border-stone-200 dark:border-gray-800"></div>
            </div>

            {/* Editorial body */}
            <div className="mt-10 md:mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Main reading column */}
              <div
                className="lg:col-span-8 space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                data-aos="fade-up"
              >
                <p>
                  Whether you're sourcing raw materials, researching Moroccan
                  mineral deposits, or staying informed on global metal markets,
                  our resources provide the technical depth and practical
                  insights you need.
                </p>
                <p>
                  Each article is researched and reviewed by our in-house team
                  of geologists and mining engineers, drawing on firsthand
                  experience across Morocco's mining regions. New content is
                  published regularly as market conditions, extraction
                  techniques, and industry standards evolve.
                </p>
                <p>
                  Use the category filters below to browse specific topics —
                  from material guides and mining operations to sustainability
                  and market analysis. You can also search by keyword to find
                  articles relevant to your sourcing or research needs.
                </p>

                <div className="mt-8 border-t border-stone-200 dark:border-gray-800 pt-8">
                  <h3 className="font-red-hat-display font-black text-2xl text-gray-900 dark:text-white">
                    From the Field
                  </h3>
                  <div className="mt-4 space-y-6">
                    <p>
                      Our editorial team includes geologists with field
                      experience across Morocco's Atlas Mountains, mining
                      engineers who have worked in extraction and beneficiation
                      facilities, and supply chain experts who manage mineral
                      exports to markets in Europe, Asia, and the Americas.
                      Every article cites authoritative sources including USGS
                      mineral commodity summaries, academic research from the
                      Journal of African Earth Sciences, and data from Morocco’s
                      Ministry of Energy Transition and Sustainable Development.
                      We update our content quarterly to reflect changes in
                      mining regulations, market prices, and extraction
                      technologies.
                    </p>
                    <p>
                      The Moroccan mining industry sits among the most
                      geologically diverse in the world. The country holds more
                      than seventy percent of global phosphate reserves,
                      substantial deposits of lead and zinc across the Atlas
                      Mountain belts, growing production of copper in the
                      Tinghir region, world-class barite in Midelt and
                      Ouarzazate, high-purity iron ore in the Nador and Oujda
                      districts, battery-grade cobalt from the historic Bou
                      Azzer mining district, and an emerging antimony industry
                      centred on the Khenifra region. Each of these commodities
                      is examined in detail in the articles below, with
                      references to USGS mineral commodity summaries, academic
                      publications in the Journal of African Earth Sciences, and
                      data from Morocco’s Ministry of Energy Transition and
                      Sustainable Development.
                    </p>
                    <p>
                      For industrial buyers, the library is designed to answer
                      the questions that matter most when sourcing Moroccan raw
                      materials: which deposit does this ore come from, what is
                      the typical purity range, what is the standard certificate
                      of analysis format, what are the main industrial
                      applications, what incoterms are available from Moroccan
                      ports, and how is the export documentation package
                      assembled. For researchers, journalists, and students, the
                      articles provide an accessible entry point to Morocco’s
                      mining geography, its regulatory framework, and its role
                      in the global supply chains for lead-acid batteries,
                      lithium-ion batteries, drilling fluids, paints and
                      coatings, ceramics, glass, flame retardants, radiation
                      shielding, and renewable energy hardware.
                    </p>
                  </div>
                </div>
              </div>

              {/* Editorial sidebar */}
              <aside className="lg:col-span-4" data-aos="fade-up">
                <div className="lg:sticky lg:top-24 space-y-10">
                  <div className="border-l-2 border-teal-600 dark:border-teal-400 pl-5">
                    <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      What's New
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      New articles are published every month. Recent additions
                      cover strategic shifts in global zinc output, the role of
                      Moroccan minerals in the energy transition, the geology of
                      the Atlas Mountains, flotation and beneficiation
                      techniques, X-ray fluorescence and inductively coupled
                      plasma analysis, mine remediation practices, supply chain
                      transparency, and the regulatory framework that governs
                      mining in Morocco. Use the category filter or the search
                      bar below to browse by topic, mineral, or application.
                    </p>
                  </div>

                  <div className="rounded-lg border border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                    <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                      The Library at a Glance
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      The articles library currently spans {allBlogs.length}{" "}
                      individual pieces organised across {categories.length}{" "}
                      thematic categories. Each category corresponds to a major
                      mineral commodity, an industrial application area, or a
                      cross-cutting topic such as sustainability, geology, or
                      export logistics. Whether your interest lies in the
                      geochemistry of a specific deposit, the processing route
                      from ore to marketable concentrate, or the regulatory
                      framework that governs mineral exports from Morocco, the
                      library is designed to provide a single, authoritative
                      reference point.
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            {/* Editorial index */}
            <div
              className="mt-12 md:mt-16 border-t border-stone-200 dark:border-gray-800 pt-10"
              data-aos="fade-up"
            >
              <h3 className="font-red-hat-display font-black text-2xl text-gray-900 dark:text-white">
                The Editorial Index
              </h3>
              <div className="mt-6 grid gap-y-8 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-3 lg:gap-x-10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                    Mineral guides
                  </h4>
                  <span
                    className="mt-3 block h-px w-10 bg-copper-800/60 dark:bg-copper-400/60"
                    aria-hidden="true"
                  ></span>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Mineral guides &mdash; covering lead, zinc calamine, copper,
                    barite, iron ore, cobalt, and antimony &mdash; are the most
                    accessed articles in the library. Each guide describes the
                    geological setting of the relevant Moroccan deposit, the
                    typical ore grade and mineral assemblage, the extraction and
                    beneficiation methods employed, the commercial-grade
                    specifications, the primary industrial applications, and the
                    export packaging and logistics options available from The 3
                    Rocks. These guides are written for procurement managers,
                    metallurgists, and quality-control engineers who need a
                    concise yet technically accurate overview of the material
                    they are sourcing.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                    Industry application articles
                  </h4>
                  <span
                    className="mt-3 block h-px w-10 bg-copper-800/60 dark:bg-copper-400/60"
                    aria-hidden="true"
                  ></span>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Industry application articles &mdash; including pieces on
                    aerospace and defence alloys, automotive industry metals,
                    battery production materials, ceramics and glass production,
                    construction and infrastructure, electronics and
                    semiconductors, marine and shipbuilding, medical and
                    pharmaceutical applications, paints and coatings, radiation
                    shielding, renewable energy materials, textiles and flame
                    retardants, and water treatment solutions &mdash; explore
                    the intersection between a specific industrial sector and
                    the Moroccan mineral supply chain. Each application article
                    identifies which Moroccan mineral is relevant, what property
                    or purity threshold makes it suitable for the application,
                    and what qualification or certification buyers in that
                    sector typically request.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                    Technical and cross-cutting articles
                  </h4>
                  <span
                    className="mt-3 block h-px w-10 bg-copper-800/60 dark:bg-copper-400/60"
                    aria-hidden="true"
                  ></span>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Technical and cross-cutting articles &mdash; including
                    guides on flotation and beneficiation, ICP testing, X-ray
                    fluorescence analysis, mineral purity classification,
                    mineral export procedures, environmental impact assessments,
                    mine remediation practices, sustainable mining technologies,
                    supply chain transparency, the future of Moroccan mining,
                    and the geological formation of the Atlas Mountains &mdash;
                    serve readers who want a deeper understanding of the
                    methods, standards, and policies that shape the Moroccan
                    mining industry. Many of these articles are cited by
                    university researchers and by industry analysts preparing
                    country-risk assessments for North African mineral supply.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-x-12 gap-y-5 md:grid-cols-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Each article in the library includes a byline and publication
                  date, a summary of the key points, and at least three
                  authoritative references drawn from official sources such as
                  the United States Geological Survey (USGS) Mineral Commodity
                  Summaries, the Journal of African Earth Sciences,
                  Morocco\u2019s Ministry of Energy Transition and Sustainable
                  Development, the European Commission\u2019s Critical Raw
                  Materials Act, and industry bodies such as the International
                  Lead Association, the International Zinc Association, the
                  Cobalt Institute, and the Antimony Association. Where
                  relevant, articles also link to the corresponding product page
                  on The 3 Rocks website for buyers who wish to request a
                  quotation or a laboratory sample.
                </p>
                <p>
                  The library is updated every calendar quarter. Recent
                  additions include articles on strategic zinc ore output
                  increases and their impact on global supply, the application
                  of Moroccan minerals in the aerospace supply chain, and the
                  regulatory landscape for critical mineral exports from Morocco
                  to the European Union under the EU Critical Raw Materials Act.
                  Future planned topics include a deep-dive on Moroccan
                  manganese resources, an overview of Morocco\u2019s rare-earth
                  element potential, and a technical primer on the use of
                  Moroccan barite in high-density concrete for nuclear shielding
                  applications. Readers are encouraged to use the search bar and
                  category filters below to browse the full collection or to
                  navigate directly to a specific article by title.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category index */}
      <section className="relative bg-stone-100/50 dark:bg-gray-800/20 border-t border-stone-200 dark:border-gray-800">
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-400/60 to-transparent dark:via-teal-500/40"
          aria-hidden="true"
        ></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-10 md:py-14">
            <div className="max-w-3xl" data-aos="fade-up">
              <h2 className="h2 font-red-hat-display text-gray-900 dark:text-white">
                Browse the Editorial Library by Category
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                Every article published by The 3 Rocks is grouped into one of
                the categories below. Each link opens a search-engine-friendly
                list of every article in that category, with publication date,
                summary, and direct link to the full piece.
              </p>
            </div>

            <div
              className="mt-8 grid gap-px bg-stone-200 dark:bg-gray-800 border border-stone-200 dark:border-gray-800 rounded-lg overflow-hidden md:grid-cols-2"
              data-aos="fade-up"
            >
              {categories.map((cat) => (
                <div key={cat} className="p-5 bg-white dark:bg-gray-900">
                  <div className="flex items-baseline justify-between gap-3 mb-2.5">
                    <h3 className="text-base font-bold font-red-hat-display text-gray-900 dark:text-white">
                      {cat}
                    </h3>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-stone-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {categoryGroups[cat].length} articles
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {categoryGroups[cat].slice(0, 5).map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/articles/${p.slug}`}
                          className="text-teal-600 dark:text-teal-400 hover:underline"
                        >
                          {p.metadata.title}
                        </Link>
                      </li>
                    ))}
                    {categoryGroups[cat].length > 5 && (
                      <li className="text-xs text-gray-500 dark:text-gray-400 italic">
                        and {categoryGroups[cat].length - 5} more — use the
                        search above to find a specific topic
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            <div
              className="mt-8 grid gap-x-12 gap-y-4 md:grid-cols-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
              data-aos="fade-up"
            >
              <p>
                The 3 Rocks editorial team updates this library on a quarterly
                cadence to reflect changes in Moroccan mining regulations, USGS
                mineral commodity data, and shifts in global demand. Every
                article is reviewed by a member of our technical staff before
                publication and revisited annually to ensure the specifications,
                deposit names, and regulatory references remain current. If you
                spot an error or have a topic you would like us to cover —
                whether it is a new mining region, a new industrial application,
                or a deep-dive into a particular mineral grade — please reach
                out to our team in Rabat.
              </p>
              <p>
                We also welcome guest contributions from geologists, mining
                engineers, metallurgists, and procurement specialists working in
                or sourcing from Morocco. Co-authored articles receive dual
                bylines, an expanded author bio, and prominent placement in the
                library for the first ninety days after publication. Contact our
                editorial team to propose a topic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

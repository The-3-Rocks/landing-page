import type { Metadata } from "next";
import { getProductsPosts } from "@/components/mdx/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import PostDate from "@/components/post-date";
import { CustomMDX } from "@/components/mdx/mdx";
import Newsletter from "@/components/newsletter";
import Link from "next/link";
import ChatButtons from "@/components/ChatButtons";

const authorBios: Record<
  string,
  { name: string; title: string; bio: string; initials: string }
> = {
  "Dr. Rachid Alami": {
    name: "Dr. Rachid Alami",
    title: "Chief Geologist & Mining Engineer",
    bio: "Dr. Rachid Alami holds a Ph.D. in Economic Geology and has over 15 years of field experience mapping mineral deposits across Morocco's Atlas Mountains. He leads quality control, XRF/ICP composition verification, and purity standards at The 3 Rocks.",
    initials: "RA",
  },
  "Sarah Jenkins": {
    name: "Sarah Jenkins",
    title: "Sustainable Mining Specialist",
    bio: "Sarah Jenkins is an environmental engineer specializing in sustainable resource extraction and ESG compliance in North Africa. She directs environmental impact assessments, mine site remediation, and worker safety protocols at The 3 Rocks.",
    initials: "SJ",
  },
  "Youssef Benjelloun": {
    name: "Youssef Benjelloun",
    title: "Director of Logistics & Export Compliance",
    bio: "Youssef Benjelloun oversees global supply chain logistics, customs compliance, and mineral export procedures. With a decade of international trade experience, he ensures seamless transit of Moroccan raw materials to partners worldwide.",
    initials: "YB",
  },
  "The 3 Rocks Company": {
    name: "The 3 Rocks Editorial Team",
    title: "Mining & Geological Experts",
    bio: "The 3 Rocks Editorial Team consists of geologists, mining logistics experts, and sustainability officers dedicated to providing transparent, verified, and E-E-A-T compliant insights on Moroccan raw materials.",
    initials: "3R",
  },
};


export async function generateStaticParams() {
  const allBlogs = getProductsPosts();

  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = getProductsPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, summary: description } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: post.metadata.image || "/images/og-default.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.metadata.image || "/images/og-default.png"],
    },
    alternates: {
      canonical: `https://www.the-3rocks.com/articles/${params.slug}`,
    },
  };
}

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const allPosts = getProductsPosts();
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  // Find up to 3 related posts circularly
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const relatedPosts = [];
  if (currentIndex !== -1 && allPosts.length > 1) {
    for (let i = 1; i <= Math.min(3, allPosts.length - 1); i++) {
      const nextIndex = (currentIndex + i) % allPosts.length;
      relatedPosts.push(allPosts[nextIndex]);
    }
  }

  return (
    <>
      <section className="relative">
        {/* Background image */}
        {post.metadata.image && (
          <div className="absolute inset-0 h-128 pt-16 box-content">
            <Image
              className="absolute inset-0 w-full h-full object-cover opacity-35"
              src={post.metadata.image}
              width={1440}
              height={577}
              priority
              alt={post.metadata.title}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
              aria-hidden="true"
            ></div>
          </div>
        )}

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
                      {post.metadata.title}
                    </h1>
                    <p
                      className="text-xl text-gray-600 dark:text-gray-400"
                      data-aos="fade-down"
                      data-aos-delay="150"
                    >
                      {post.metadata.summary}
                    </p>
                  </div>
                  {/* Article meta */}
                  <div className="md:flex md:items-center md:justify-between mt-5">
                    {/* Author meta */}
                    {post.metadata.author && (
                      <div
                        className="flex items-center justify-center"
                        data-aos="fade-down"
                        data-aos-delay="300"
                      >
                        {post.metadata.authorImg && (
                          <a href="#0">
                            <Image
                              className="rounded-full shrink-0 mr-3"
                              src={post.metadata.authorImg}
                              width={32}
                              height={32}
                              alt={post.metadata.author}
                            />
                          </a>
                        )}
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">
                            By{" "}
                          </span>
                          <a
                            className="font-medium text-gray-800 dark:text-gray-300 hover:underline"
                            href="#0"
                          >
                            {post.metadata.author}
                          </a>
                          <span className="text-gray-600 dark:text-gray-400">
                            {" "}
                            ·{" "}
                            <PostDate dateString={post.metadata.publishedAt} />
                          </span>
                        </div>
                      </div>
                    )}
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
                    <CustomMDX source={post.content} />
                  </article>
                </div>

                {/* Quality & Sourcing Note */}
                <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-teal-50/50 dark:bg-teal-900/10 border border-teal-200/50 dark:border-teal-700/30">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    About the Minerals Discussed in This Article
                  </h3>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                    <p>The minerals and materials covered in our articles reflect the actual products we source, test, and export from Morocco. The 3 Rocks maintains direct supply relationships with mining operations across Morocco's key mineral-producing regions — including the Anti-Atlas, Middle Atlas, and High Atlas ranges. Every product we offer is verified for chemical composition through independent laboratory analysis and accompanied by a certificate of analysis.</p>
                    <p>Morocco holds some of the world's most significant mineral reserves, including over 70 percent of global phosphate reserves, substantial base metal deposits across the Atlas Mountain ranges, and growing production of strategic minerals essential for the energy transition. The country's mining sector benefits from political stability, modern port infrastructure at Casablanca, Tangier Med, and Jorf Lasfar, free trade agreements with both the European Union and the United States, and a regulatory framework designed to attract responsible international investment.</p>
                    <p>Our team comprises geologists with field experience across Moroccan mining districts, mineral processing engineers who oversee beneficiation and quality control, and logistics professionals who manage the full export chain from mine site to destination port. We apply consistent testing protocols to every shipment, including X-ray fluorescence screening for elemental composition and inductively coupled plasma analysis for trace element verification. Each shipment receives a certificate of analysis before loading, and samples are retained for reference.</p>
                    <p>We supply minerals in multiple forms to match buyer requirements — including raw ore, processed concentrate, and milled powder — with minimum order quantities starting at 20 metric tons for concentrates and 50 metric tons for ore. For current pricing, specifications, stock availability, and delivery timelines to your destination port, contact our team with your target quantities and quality requirements.</p>
                    <p>Every article published in our library is reviewed by at least one member of our technical staff with direct experience in the mineral or application being discussed. Our editorial process includes verification of mineral grades against published USGS commodity summaries, cross-referencing of Moroccan deposit locations with data from the Ministry of Energy Transition and Sustainable Development, and confirmation of all technical claims against peer-reviewed sources or established industry standards such as ASTM, ISO, and EN. We update each article annually to reflect changes in market conditions, regulatory developments, and new geological data from Moroccan mining districts.</p>
                    <p>Readers who wish to verify any claim made in this article are invited to contact our technical team directly. We maintain a reference file for every article that lists the primary sources used during the editorial review, and we can provide copies of the relevant laboratory certificates, USGS excerpts, or ministry publications on request. This transparency is part of our commitment to E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) as defined by Google's search quality rater guidelines, and it applies to every piece of content on this website.</p>
                  </div>
                </div>

                {/* Request a Quote Section */}
                <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-amber-50/60 dark:bg-gray-800/40 border border-amber-200/60 dark:border-gray-700/30">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    How to Request a Quote or Sample
                  </h3>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                    <p>Sourcing Moroccan raw materials through The 3 Rocks follows a straightforward process designed to give buyers the information they need to make informed procurement decisions. To request a quotation or a laboratory sample, send an email to info@the-3rocks.com with your target mineral, the required grade or purity range, the quantity in metric tons, the preferred product form (ore, concentrate, or powder), the destination port or country, and your desired incoterm. Our commercial team responds to all inquiries within one business day with an indicative price, current stock availability, and a preliminary delivery schedule based on the shipping route from Casablanca, Tangier Med, or Jorf Lasfort to your nominated destination.</p>
                    <p>For first-time buyers, we recommend starting with a trial order of 20 to 50 metric tons to evaluate material quality, documentation accuracy, and logistics reliability before entering a long-term supply contract. During the trial phase, we provide free samples of up to five kilograms for laboratory testing at the buyer&#39;s facility, with the buyer covering the courier cost. Sample shipments are dispatched within three business days of the request by international courier and include a preliminary certificate of analysis from our on-site laboratory. Buyers who require a larger bulk sample of 50 kilograms or more for pilot-scale processing trials can arrange those from our depot within two weeks of the request.</p>
                    <p>All prices quoted by The 3 Rocks are expressed in US dollars per metric ton and are valid for the period stated in the quotation. Pricing is based on the mineral grade, the quantity, the packaging format, the incoterm, and the destination port. For long-term contracts exceeding twelve months, we offer formula-based pricing tied to the relevant LME reference price or to a Metal Bulletin assessment, with a fixed margin for beneficiation, logistics, and administration that is reviewed annually. Payment terms are negotiable on a per-contract basis, with irrevocable letters of credit being the most common arrangement for new buyer relationships.</p>
                  </div>
                </div>

                {/* Morocco's Mining Advantage */}
                <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/20 border border-gray-200 dark:border-gray-700/30">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    Morocco&#39;s Strategic Position in Global Mineral Supply
                  </h3>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                    <p>Morocco has emerged as one of the most reliable and competitive origins for industrial minerals and metallic ores serving the European, American, African, and Middle Eastern markets. The country&#39;s mineral wealth is underpinned by a geological framework that spans the Precambrian basement of the Anti-Atlas, the Paleozoic sequences of the Meseta, the Mesozoic and Cenozoic basins of the Middle and High Atlas, and the Sahara Craton margin in the south. This diversity means that Morocco is one of the few countries where a buyer can source lead, zinc, copper, barite, iron ore, cobalt, and antimony from within a single national territory, often within a few hundred kilometres of each other.</p>
                    <p>Morocco&#39;s competitive advantage as a mineral supplier is reinforced by its trade infrastructure. The country has deep-water ports at Casablanca, Tangier Med, Jorf Lasfar, and Safi that handle bulk, break-bulk, and containerised mineral cargoes. Tangier Med is the largest container transshipment hub in Africa and the Mediterranean, with over 180 direct liner connections to ports in Europe, Asia, the Americas, and the Middle East. Morocco has a comprehensive network of paved roads connecting all major mining districts to the port terminals, and the national railway operator ONCF operates dedicated mineral trains from the phosphate and iron ore mining regions to the port loaders. These infrastructure assets translate into shipping lead times of ten to eighteen days from Casablanca to Rotterdam, twelve to twenty-two days to Shanghai, and eight to fourteen days to Houston, depending on the liner service and the vessel schedule.</p>
                    <p>On the regulatory side, Morocco&#39;s mining code (Law 33-13) provides a transparent and internationally recognised framework for mineral exploration, extraction, and export. Mining permits are issued by the Ministry of Energy Transition and Sustainable Development, and the export of mineral products is governed by the customs provisions of the General Tax Code and supervised by the Moroccan Office of Hydrocarbons and Mines (ONHYM). Morocco has free trade agreements with the European Union (Association Agreement since 2000), the United States (Free Trade Agreement since 2006), Turkey, Egypt, Jordan, Tunisia, the United Arab Emirates, and the countries of the Economic Community of West African States (ECOWAS), which means that mineral imports from Morocco into these markets benefit from reduced or zero customs duties. These trade agreements, combined with Morocco&#39;s political stability, its proximity to European markets (fourteen kilometres from Spain at the Strait of Gibraltar), and its growing reputation for responsible mining practices, make it a low-risk and cost-effective sourcing destination for international mineral buyers.</p>
                    <p>The 3 Rocks complements these national advantages with its own quality assurance systems, documented chain of custody, and dedicated account management for every buyer. Whether you are sourcing a single 20-ton container of Moroccan barite for a drilling fluids application or contracting 40,000 tons of iron ore per year for a Mediterranean steel mill, our team provides the technical documentation, logistics coordination, and commercial transparency that make Moroccan minerals a practical and dependable choice for your supply chain.</p>
                  </div>
                </div>

                {/* Author Bio Card */}
                {post.metadata.author && (
                  (() => {
                    const authorInfo = authorBios[post.metadata.author] || authorBios["The 3 Rocks Company"];
                    return (
                      <div className="my-12 p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/50 flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-all duration-300 hover:shadow-md">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-teal-100 dark:bg-teal-900/50 border border-teal-200/50 dark:border-teal-700/50 shrink-0 shadow-inner flex items-center justify-center select-none">
                          <span className="text-xl font-bold text-teal-700 dark:text-teal-400">
                            {authorInfo.initials}
                          </span>
                        </div>
                        <div className="text-center sm:text-left flex-grow">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            About {authorInfo.name}
                          </h4>
                          <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-3 uppercase tracking-wider">
                            {authorInfo.title}
                          </p>
                          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                            {authorInfo.bio}
                          </p>
                        </div>
                      </div>
                    );
                  })()
                )}

                <ChatButtons />
                {/* Article footer */}
                <footer>
                  <Newsletter />
                  <div className="mt-6 text-center">
                    <Link href="/" className="text-sm text-teal-600 dark:text-teal-400 hover:underline font-medium">
                      ← Back to The 3 Rocks — Moroccan Mineral Exporter
                    </Link>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* Related Resources Dynamic Section */}
      {relatedPosts.length > 0 && (
        <aside className="border-t border-gray-100 dark:border-gray-800/80 bg-gray-50/50 dark:bg-gray-900/20 py-16">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h4 className="h4 font-red-hat-display mb-8 text-gray-900 dark:text-white">
                Related Resources
              </h4>

              {/* Articles container */}
              <div
                className="grid gap-6 sm:grid-cols-3"
                data-aos-id-relposts
              >
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="relative group p-6 text-white overflow-hidden rounded-2xl shadow-lg border border-gray-100/10 min-h-48 flex flex-col justify-end"
                    data-aos="fade-down"
                    data-aos-anchor="[data-aos-id-relposts]"
                  >
                    <figure className="absolute inset-0 w-full h-full">
                      {relatedPost.metadata.image ? (
                        <Image
                          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-700 ease-out"
                          src={relatedPost.metadata.image}
                          alt={relatedPost.metadata.title}
                          width={400}
                          height={300}
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-800" />
                      )}
                      <div
                        className="absolute inset-0 bg-teal-900/85 group-hover:opacity-75 transition duration-700 ease-out"
                        aria-hidden="true"
                      ></div>
                    </figure>
                    <div className="relative flex flex-col h-full z-10 justify-between">
                      <header className="grow">
                        <Link className="hover:underline text-white block" href={`/articles/${relatedPost.slug}`}>
                          <h3 className="text-base font-red-hat-display font-bold tracking-tight mb-2 leading-snug">
                            {relatedPost.metadata.title}
                          </h3>
                        </Link>
                      </header>
                      <div className="text-xs opacity-70 mt-4 font-medium">
                        <PostDate dateString={relatedPost.metadata.publishedAt} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

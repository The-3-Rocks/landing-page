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

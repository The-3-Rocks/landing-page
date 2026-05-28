import type { Metadata } from "next";
import { getProductsPosts } from "@/components/mdx/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import PostDate from "@/components/post-date";
import { CustomMDX } from "@/components/mdx/mdx";
import Newsletter from "@/components/newsletter";
import RelatedPosts from "@/components/related-posts-02";
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
  const post = getProductsPosts().find((post) => post.slug === params.slug);

  if (!post) notFound();

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
      <RelatedPosts />
    </>
  );
}

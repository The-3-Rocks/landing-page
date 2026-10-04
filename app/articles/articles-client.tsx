"use client";

import Link from "next/link";
import Image from "next/image";
import PostDate from "@/components/post-date";
import { useState, useMemo, useRef, useEffect } from "react";

const ARTICLES_PER_PAGE = 50;
const STRATEGIC_SLUG = "zinc-ore-output-increase-asia-metal";

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    image?: string;
    summary?: string;
    author?: string;
    category?: string;
    tags?: string[];
  };
}

interface ArticlesClientProps {
  allBlogs: BlogPost[];
}

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/articles/${post.slug}`}
      aria-label={`Read ${post.metadata.title}`}
      className="group block"
      data-aos="fade-up"
    >
      <article className="flex flex-col h-full overflow-hidden rounded-lg border border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-[16/9] overflow-hidden">
          {post.metadata.image && (
            <Image
              src={post.metadata.image}
              alt=""
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          )}
        </div>
        <div className="p-4 md:p-5 flex flex-col grow">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
            {post.metadata.category}
          </span>
          <h3 className="mt-1.5 font-red-hat-display font-black text-lg text-gray-900 dark:text-white line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
            {post.metadata.title}
          </h3>
          {post.metadata.summary && (
            <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 grow">
              {post.metadata.summary}
            </p>
          )}
          <div className="mt-3 pt-2.5 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400">
            {post.metadata.author && <span className="truncate">{post.metadata.author}</span>}
            <span className="flex-shrink-0">
              <PostDate dateString={post.metadata.publishedAt} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function StrategicCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/articles/${post.slug}`}
      aria-label={`Read ${post.metadata.title}`}
      className="group block"
      data-aos="fade-up"
    >
      <article className="md:grid md:grid-cols-5 overflow-hidden rounded-xl border border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-[16/9] md:aspect-auto md:col-span-3 md:min-h-[320px] overflow-hidden border border-stone-200 dark:border-transparent">
          {post.metadata.image && (
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              priority
              className="object-cover"
            />
          )}
        </div>
        <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
            {post.metadata.category}
          </span>
          <h2 className="mt-2 font-red-hat-display font-black text-2xl md:text-3xl text-gray-900 dark:text-white line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
            {post.metadata.title}
          </h2>
          {post.metadata.summary && (
            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
              {post.metadata.summary}
            </p>
          )}
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-4">
            <span className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
              {post.metadata.author && <span>{post.metadata.author}</span>}
              {post.metadata.author && <span className="text-stone-300 dark:text-gray-600" aria-hidden="true">·</span>}
              <span>
                <PostDate dateString={post.metadata.publishedAt} />
              </span>
            </span>
            <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function ArticlesClient({ allBlogs }: ArticlesClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const articlesListRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Scroll to top of articles when page changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (articlesListRef.current) {
      articlesListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(allBlogs.map(post => post.metadata.category || "Raw Materials"));
    return ["All", ...Array.from(cats)];
  }, [allBlogs]);

  // Filter articles
  const filteredBlogs = useMemo(() => {
    return allBlogs.filter(post => {
      const postCategory = post.metadata.category || "Raw Materials";
      const matchesCategory = selectedCategory === "All" || postCategory === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        post.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.metadata.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (Array.isArray(post.metadata.tags) && post.metadata.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [allBlogs, selectedCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = Math.min(startIndex + ARTICLES_PER_PAGE, filteredBlogs.length);
  const paginatedPosts = filteredBlogs.slice(startIndex, endIndex);

  // The Strategic article is pinned first and rendered alone with a wide
  // horizontal presentation; everything else flows through the 3-column grid.
  const strategicPost = paginatedPosts[0]?.slug === STRATEGIC_SLUG ? paginatedPosts[0] : null;
  const gridPosts = strategicPost ? paginatedPosts.slice(1) : paginatedPosts;

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Editorial filter nav */}
          <div className="py-5">
            <div className="flex flex-col md:flex-row md:items-center gap-4" data-aos="fade-up">
              {/* Category filters */}
              <nav className="flex gap-5 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap min-w-0 grow" aria-label="Article categories">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`whitespace-nowrap pb-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                      selectedCategory === category
                        ? "text-teal-600 dark:text-teal-400 border-teal-600 dark:border-teal-400"
                        : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white hover:border-stone-300 dark:hover:border-gray-600"
                    }`}
                  >
                    {category === "All" ? (
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                        All
                      </span>
                    ) : (
                      category
                    )}
                  </button>
                ))}
              </nav>

              {/* Search */}
              <div className="relative md:w-64 flex-shrink-0">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-stone-200 dark:border-gray-700 bg-stone-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Results count */}
            {filteredBlogs.length > 0 && (
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400" data-aos="fade-up">
                <span>{startIndex + 1}–{endIndex} of {filteredBlogs.length} articles</span>
              </div>
            )}
          </div>

          {/* Compact article collection */}
          <div ref={articlesListRef} className="scroll-mt-24 py-8 md:py-12">
            {paginatedPosts.length > 0 ? (
              <>
                {strategicPost && (
                  <div className="mb-6">
                    <StrategicCard post={strategicPost} />
                  </div>
                )}

                {gridPosts.length > 0 && (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
                    {gridPosts.map((post) => (
                      <ArticleCard key={post.slug} post={post} />
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-stone-200 dark:border-gray-700 hover:bg-stone-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      Previous
                    </button>

                    {/* Desktop Page Numbers */}
                    <div className="hidden md:flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                            currentPage === page
                              ? "bg-teal-600 text-white"
                              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-stone-200 dark:border-gray-700 hover:bg-stone-50 dark:hover:bg-gray-700"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    {/* Mobile Page Indicator */}
                    <span className="md:hidden text-sm font-medium text-gray-600 dark:text-gray-400 px-2">
                      Page {currentPage} of {totalPages}
                    </span>

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-stone-200 dark:border-gray-700 hover:bg-stone-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-10">
                <p className="text-lg text-gray-600 dark:text-gray-400">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

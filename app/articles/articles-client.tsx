"use client";

import PostItem from "@/components/post-item";
import { useState, useMemo, useRef, useEffect } from "react";

const ARTICLES_PER_PAGE = 50;

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

export default function ArticlesClient({ allBlogs }: ArticlesClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const articlesListRef = useRef<HTMLElement>(null);
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

  return (
    <>
      {/* Intro Section */}
      <section className="relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-16">
            <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/20 border border-teal-200/50 dark:border-teal-700/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                Knowledge Hub
              </div>
              <h2 className="h2 font-red-hat-display mb-6 text-gray-900 dark:text-white">
                Insights from Morocco's Mining Experts
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-4">
                Explore our comprehensive library of articles covering Morocco's rich mining industry — from mineral properties and extraction methods to market trends, quality standards, and sustainable practices. Each guide is written by our team of geologists, mining engineers, and industry specialists.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-500 leading-relaxed max-w-2xl mx-auto">
                Whether you're sourcing raw materials, researching Moroccan mineral deposits, or staying informed on global metal markets, our resources provide the technical depth and practical insights you need.
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed max-w-xl mx-auto mt-4">
                Each article is researched and reviewed by our in-house team of geologists and mining engineers, drawing on firsthand experience across Morocco's mining regions. New content is published regularly as market conditions, extraction techniques, and industry standards evolve.
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600 leading-relaxed max-w-lg mx-auto mt-3 italic">
                Use the category filters below to browse specific topics — from material guides and mining operations to sustainability and market analysis. You can also search by keyword to find articles relevant to your sourcing or research needs.
              </p>
              {filteredBlogs.length > 0 && (
                <div className="mt-10 flex items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-red-hat-display text-teal-600 dark:text-teal-400">{filteredBlogs.length}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Articles</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-red-hat-display text-teal-600 dark:text-teal-400">{categories.length - 1}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Categories</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-red-hat-display text-teal-600 dark:text-teal-400">{allBlogs.filter(p => p.metadata.author && p.metadata.author !== "The 3 Rocks Company").length + 1}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Experts</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-10">
            {/* Search */}
            <div className="relative max-w-xl mx-auto md:mx-0">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow hover:shadow-md"
              />
            </div>

            {/* Category Filter */}
            <div className="mt-6">
              <div className="relative">
                {/* Mobile fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-50 dark:from-gray-800/50 to-transparent z-10 md:hidden"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-50 dark:from-gray-800/50 to-transparent z-10 md:hidden"></div>
                {/* Categories scroll container */}
                <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 whitespace-nowrap flex-shrink-0 border ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-teal-600 to-teal-500 text-white border-teal-500 shadow-lg shadow-teal-500/20 scale-105"
                          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-teal-300 dark:hover:border-teal-600 hover:text-teal-600 dark:hover:text-teal-400 hover:-translate-y-0.5"
                      }`}
                    >
                      {category === "All" ? (
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                          </svg>
                          All
                        </span>
                      ) : (
                        category
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results count */}
            {filteredBlogs.length > 0 && (
              <div className="mt-5 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{startIndex + 1}–{endIndex} of {filteredBlogs.length} articles</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section ref={articlesListRef} className="scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {paginatedPosts.length > 0 ? (
              <>
                {/* Articles grid */}
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 md:gap-y-8 items-start">
                  {paginatedPosts.map((post, postIndex) => (
                    <PostItem key={postIndex} {...post} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-wrap justify-center items-center gap-3 mt-12">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
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
                              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
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
                      className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-400">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

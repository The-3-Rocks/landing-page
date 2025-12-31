"use client";

import Link from "next/link";
import Image from "next/image";
import PostDate from "@/components/post-date";
import PostItem from "@/components/post-item";
import { useState, useMemo } from "react";

const ARTICLES_PER_PAGE = 6;

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

  const featuredPost = filteredBlogs[0];
  
  // Pagination
  const totalPages = Math.ceil((filteredBlogs.length - 1) / ARTICLES_PER_PAGE);
  const startIndex = 1 + (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = Math.min(startIndex + ARTICLES_PER_PAGE, filteredBlogs.length);
  const paginatedPosts = filteredBlogs.slice(startIndex, endIndex);

  return (
    <>
      {/* Featured post */}
      {featuredPost && (
        <section className="relative">
          {/* Background image */}
          {featuredPost.metadata.image && (
            <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
              <Image
                className="absolute inset-0 w-full h-full object-cover opacity-25"
                src={featuredPost.metadata.image}
                width={1440}
                height={577}
                priority
                alt={featuredPost.metadata.title}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
                aria-hidden="true"
              ></div>
            </div>
          )}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-16">
              {/* Featured article */}
              <div className="max-w-3xl" data-aos="fade-down">
                <article>
                  <header>
                    {/* Title and excerpt */}
                    <div className="text-center md:text-left">
                      <Link href={`/articles/${featuredPost.slug}`}>
                        <h1 className="h1 font-red-hat-display mb-4">
                          {featuredPost.metadata.title}
                        </h1>
                      </Link>
                      <p className="text-xl text-gray-600 dark:text-gray-400">
                        {featuredPost.metadata.summary}
                      </p>
                    </div>
                    {/* Article meta */}
                    <div className="md:flex md:items-center md:justify-between mt-5">
                      {/* Author meta */}
                      {featuredPost.metadata.author && (
                        <div className="flex items-center justify-center">
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">By </span>
                            <span className="font-medium text-gray-800 dark:text-gray-300">
                              {featuredPost.metadata.author}
                            </span>
                            <span className="text-gray-600 dark:text-gray-400">
                              {" · "}
                              <PostDate dateString={featuredPost.metadata.publishedAt} />
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Section */}
      <section className={`bg-gray-50 dark:bg-gray-800/50 ${!featuredPost ? 'pt-32 md:pt-40' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto md:flex-wrap md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                      selectedCategory === category
                        ? "bg-teal-600 text-white"
                        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            {filteredBlogs.length > 1 && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Showing {startIndex} - {endIndex - 1} of {filteredBlogs.length - 1} articles
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section>
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

import { MetadataRoute } from "next";
import { getProductsPosts } from "@/components/mdx/utils";

const BASE_URL = "https://www.the-3rocks.com";

// ─── Static pages with real priority values ──────────────────────────────────
const staticPages: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date("2024-01-15"),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/about`,
    lastModified: new Date("2024-01-10"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/our-process`,
    lastModified: new Date("2024-01-10"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/contact`,
    lastModified: new Date("2024-01-10"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/faq`,
    lastModified: new Date("2024-01-10"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/our-privacy-policy`,
    lastModified: new Date("2024-01-01"),
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    url: `${BASE_URL}/our-terms`,
    lastModified: new Date("2024-01-01"),
    changeFrequency: "yearly",
    priority: 0.4,
  },
];

// ─── Product pages ────────────────────────────────────────────────────────────
// Products list page + each individual product
const products = [
  "lead", "copper", "zinc", "barite", "iron", "cobalt", "antimony",
];

const productPages: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}/products`,
    lastModified: new Date("2024-01-15"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  ...products.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date("2024-01-15"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  })),
];

// ─── Article pages — dynamic from local MDX scanner ───────────────────────────
// This auto-includes every new .mdx file you create under content/articles
const allArticles = getProductsPosts();

const articlePages: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}/articles`,
    lastModified: new Date("2024-01-15"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  ...allArticles.map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.metadata.updatedAt ?? article.metadata.publishedAt ?? "2024-01-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
];

// ─── Export ───────────────────────────────────────────────────────────────────
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages,
    ...productPages,
    ...articlePages,
  ];
}

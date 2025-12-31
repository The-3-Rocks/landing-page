import { getProductsPosts } from "@/components/mdx/utils";
import ArticlesClient from "./articles-client";
import ChatButtons from "@/components/ChatButtons";

export const metadata = {
  title: "Moroccan Mining Insights & Industry Articles | The 3 Rocks Company",
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

  return (
    <>
      <ChatButtons />
      <ArticlesClient allBlogs={allBlogs} />
    </>
  );
}

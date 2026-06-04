export const metadata = {
  title:
    "Moroccan Mineral Products — Lead, Zinc, Copper, Barite, Iron, Cobalt & Antimony",
  description:
    "Leading supplier of high-quality Moroccan minerals including lead, zinc, copper, barite, iron, cobalt, and antimony. Ethically sourced from Morocco's richest mining regions for global industrial applications.",
  openGraph: {
    title: "Premium Moroccan Mining Materials Supplier",
    description:
      "Ethically sourced Moroccan minerals for global industries. High-quality lead, zinc, copper, barite, iron, cobalt, and antimony from Morocco's legendary mines.",
    url: "https://www.the-3rocks.com/products",
    type: "website",
    siteName: "The 3 Rocks Company",
    images: [
      {
        url: "https://www.the-3rocks.com/images/the3rocks.png",
        width: 1200,
        height: 630,
        alt: "The 3 Rocks Company - Premium Moroccan Minerals",
      },
    ],
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.the-3rocks.com/products",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import ChatButtons from "@/components/ChatButtons";
import ProductsPage from "@/components/raw";

export default function OurRawPage() {
  return (
    <>
      <ProductsPage /> <ChatButtons />{" "}
    </>
  );
}

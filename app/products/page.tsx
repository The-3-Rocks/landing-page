export const metadata = {
  title:
    "Premium Moroccan Minerals & Mining Materials Supplier | The 3 Rocks Co.",
  description:
    "Leading supplier of high-quality Moroccan minerals including lead, zinc, copper, barite, iron, cobalt, and antimony. Ethically sourced from Morocco's richest mining regions for global industrial applications.",
  keywords: [
    "Morocco mining",
    "Moroccan minerals",
    "lead",
    "zinc",
    "copper",
    "barite",
    "iron",
    "cobalt",
    "antimony",
    "raw materials Morocco",
    "mining company Morocco",
    "mineral supplier",
    "Moroccan lead ore",
    "zinc concentrate Morocco",
    "copper minerals Morocco",
    "barite powder supplier",
    "iron ore exporter",
    "cobalt mining Morocco",
    "antimony producer Morocco",
    "Morocco mineral exports",
    "African mining company",
    "North Africa minerals",
    "bulk mineral supplier",
    "industrial minerals",
    "Morocco natural resources",
    "mining materials supplier",
    "heavy metals supplier",
    "non-ferrous metals Morocco",
    "mineral concentrate",
    "Moroccan mining industry",
    "metallic ores supplier",
    "mineral commodities",
    "Morocco barite density",
    "high purity minerals",
    "Moroccan cobalt battery grade",
    "lead concentrate Morocco",
    "zinc ore Morocco",
    "copper cathode Morocco",
    "iron ore Morocco",
    "cobalt concentrate",
    "antimony trioxide",
    "mining raw materials",
    "Moroccan geological survey",
    "mineral processing Morocco",
    "metallurgical grade minerals",
    "industrial mineral powders",
    "Morocco mining regulations",
    "sustainable mining Morocco",
    "mineral extraction",
    "ore beneficiation",
    "mineral trading company",
    "Morocco export minerals",
  ],
  openGraph: {
    title: "Premium Moroccan Mining Materials Supplier | The 3 Rocks Company",
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

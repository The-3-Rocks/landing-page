export const metadata = {
  title: "Premium Moroccan Mining Materials | The 3 Rocks Company",
  description:
    "Discover high-quality Moroccan minerals including lead, zinc, copper, barite, iron, cobalt, and antimony, ethically sourced from Morocco's legendary mining regions.",
  keywords:
    "Morocco mining, Moroccan minerals, lead, zinc, copper, barite, iron, cobalt, antimony, raw materials Morocco, mining company Morocco, mineral supplier",
  openGraph: {
    title: "Premium Moroccan Mining Materials | The 3 Rocks Company",
    description:
      "Discover our extensive range of high-quality Moroccan minerals and raw materials sourced from Morocco's legendary mining regions.",
    images: [
      {
        url: "@/public/images/the3rocks.png",
        width: 1200,
        height: 630,
        alt: "Moroccan Premium Mining Materials",
      },
    ],
  },
};

import ProductsPage from "@/components/raw";

export default function OurRawPage() {
  return <ProductsPage />;
}

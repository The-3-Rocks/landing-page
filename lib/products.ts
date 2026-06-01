import { StaticImageData } from "next/image";

// Import product images
import leadImage from "@/public/images/raw-material-lead.webp";
import copperImage from "@/public/images/copper1.webp";
import zincImage from "@/public/images/zinc-product.webp";
import bariteImage from "@/public/images/Barite-Clay.webp";
import ironImage from "@/public/images/moroccan-iron-ore.webp";
import cobaltImage from "@/public/images/cobaltt.webp";
import antimonyImage from "@/public/images/antimony11.webp";

// Define Product type for the grid/listing
export interface Product {
  id: string;
  name: string;
  description: string;
  image: StaticImageData;
  purity: string;
  stock: string;
  color: string;
  forms: string[];
}

// Product data for listing page
export const products: Product[] = [
  {
    id: "lead",
    name: "Lead",
    description:
      "High-grade Moroccan lead with exceptional purity for various industrial applications, ethically sourced from Morocco's rich mineral deposits.",
    image: leadImage,
    purity: "86%",
    stock: "400 tons concentrate, 150 tons powder, 300 tons ore",
    color: "bg-gray-700",
    forms: ["Concentrate", "Powder", "Ore"],
  },
  {
    id: "copper",
    name: "Copper",
    description:
      "Premium Moroccan copper with exceptional quality extracted from Morocco's historic mining regions, offering versatility for industrial applications.",
    image: copperImage,
    purity: "8% to 21%",
    stock: "500 tons",
    color: "bg-amber-600",
    forms: ["Ore"],
  },
  {
    id: "zinc",
    name: "Zinc",
    description:
      "High-quality zinc calamine from Morocco's mineral-rich mountains for various applications, including cosmetics and industrial uses.",
    image: zincImage,
    purity: "+37%",
    stock: "300 tons ore, 80 tons concentrate",
    color: "bg-slate-300",
    forms: ["Ore", "Concentrate"],
  },
  {
    id: "barite",
    name: "Barite",
    description:
      "High-quality Moroccan barite sourced from premier mining regions of Morocco for drilling, medical, paint and construction applications.",
    image: bariteImage,
    purity: "Density: 4.18 - 4.28",
    stock: "400 tons",
    color: "bg-white",
    forms: ["Ore", "Powder", "Lumps"],
  },
  {
    id: "iron",
    name: "Iron",
    description:
      "Superior quality iron extracted from Morocco's ancient ore deposits for construction, manufacturing, and industrial uses worldwide.",
    image: ironImage,
    purity: "≥ 56%",
    stock: "40,000 tons",
    color: "bg-slate-500",
    forms: ["Ore"],
  },
  {
    id: "cobalt",
    name: "Cobalt",
    description:
      "High-quality Moroccan cobalt essential for modern battery technology and superalloys, sustainably mined from Morocco's mineral wealth.",
    image: cobaltImage,
    purity: "42%+",
    stock: "Available upon request",
    color: "bg-blue-800",
    forms: ["Ore", "Concentrate"],
  },
  {
    id: "antimony",
    name: "Antimony",
    description:
      "Premium antimony from Morocco's exclusive mining operations for flame retardants, batteries, and electronic components with guaranteed quality.",
    image: antimonyImage,
    purity: "30%+",
    stock: "Available upon request",
    color: "bg-gray-600",
    forms: ["Ore", "Concentrate"],
  },
];

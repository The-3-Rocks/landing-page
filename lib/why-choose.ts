import { StaticImageData } from "next/image";

import extractionImage from "@/public/images/extraction1.webp";
import analysesImage from "@/public/images/analyses.webp";
import exportImage from "@/public/images/export1.webp";

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: StaticImageData;
}

export const reasons: WhyChooseItem[] = [
  {
    id: "sourcing",
    title: "Direct Mine Sourcing",
    description:
      "We work directly with mines across the Anti-Atlas, High Atlas, and eastern Meseta regions. This eliminates intermediaries, guarantees traceability from extraction to delivery, and lets you lock in competitive pricing on lead, zinc, copper, barite, iron, cobalt, and antimony.",
    icon: "Pickaxe",
    image: extractionImage,
  },
  {
    id: "quality",
    title: "Certified Quality",
    description:
      "Every shipment is tested by ISO 17025-accredited laboratories in Casablanca and Rabat. You receive a full certificate of analysis covering target grade, impurity profile, moisture, and physical properties before the material leaves Morocco.",
    icon: "FlaskConical",
    image: analysesImage,
  },
  {
    id: "logistics",
    title: "Full-Service Logistics",
    description:
      "From trucking and customs clearance to container stuffing and port loading at Casablanca, Tangier Med, or Jorf Lasfar. We handle FOB, CIF, and CFR terms, provide real-time tracking, and assign a dedicated account manager to every buyer.",
    icon: "Ship",
    image: exportImage,
  },
];

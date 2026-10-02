import { StaticImageData } from "next/image";

import highAtlasImg from "@/public/images/morocco-lead-mining.webp";
import antiAtlasImg from "@/public/images/cobalt.webp";
import rifImg from "@/public/images/moroccan-iron-ore.webp";
import middleAtlasImg from "@/public/images/antimony-main.webp";

export interface RegionItem {
  id: string;
  num: string;
  title: string;
  description: string;
  image: StaticImageData;
}

export const regions: RegionItem[] = [
  {
    id: "high-atlas",
    num: "01",
    title: "High Atlas Mountains",
    description:
      "Lead, zinc, copper, and barite. Operations around Errachidia, Midelt, Ouarzazate, and Tafilalet.",
    image: highAtlasImg,
  },
  {
    id: "anti-atlas",
    num: "02",
    title: "Eastern Anti-Atlas",
    description:
      "Substantial copper resources and the historic Bou Azzer cobalt deposits — Africa's only primary cobalt source outside the DRC.",
    image: antiAtlasImg,
  },
  {
    id: "rif",
    num: "03",
    title: "Rif Mountains & Eastern Meseta",
    description:
      "Significant iron ore near Nador and Oujda, supplying Mediterranean steel mills and direct-reduction plants.",
    image: rifImg,
  },
  {
    id: "middle-atlas",
    num: "04",
    title: "Middle Atlas — Khenifra",
    description:
      "Emerging antimony district of strategic importance, classified as a critical mineral by the EU and US.",
    image: middleAtlasImg,
  },
];

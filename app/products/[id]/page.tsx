// app/products/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import PageIllustration from "@/components/page-illustration";
import React from "react";
import {
  ProductData,
  ProductsDataMap,
  IconName,
  ProductPageProps,
  MetadataParams,
  Specification,
  Application,
  ExtractionStep,
} from "app/types/product";

// Product data
const productsData: ProductsDataMap = {
  lead: {
    name: "Lead",
    title: "Lead | The 3 Rocks",
    description:
      "High-grade lead with exceptional purity and durability for various industrial applications, available as concentrate, powder, and ore.",
    mainImage: "/images/products/lead.jpg",
    intro:
      "At The 3 Rocks Company, we pride ourselves on offering high-quality lead that stands out for its exceptional purity and unmatched durability. Our lead is carefully engineered to meet the specific demands of various industries, from construction and automotive to electronics, energy, and cosmetics.",
    specs: [
      { name: "Concentrate Purity", value: "86% pure lead" },
      { name: "Powder Purity", value: "86% pure lead" },
      { name: "Ore Purity", value: "More than 50%" },
      { name: "Monthly Production", value: "150+ tons" },
      {
        name: "Available Stock",
        value: "400 tons concentrate, 150 tons powder, 300 tons ore",
      },
      { name: "Density", value: "11.34 g/cm³" },
      { name: "Melting Point", value: "327.5°C (621.5°F)" },
    ],
    applications: [
      {
        name: "Batteries",
        description:
          "Lead-acid batteries for automotive, industrial, and backup power storage applications.",
        icon: "battery",
      },
      {
        name: "Radiation Shielding",
        description:
          "Protection from radiation in medical facilities, nuclear plants, and scientific research.",
        icon: "shield",
      },
      {
        name: "Construction",
        description:
          "Roofing, sound insulation, vibration dampening, and historical building restoration.",
        icon: "building",
      },
      {
        name: "Electronics",
        description:
          "Solder, circuit boards, and various electronic components requiring high stability.",
        icon: "chip",
      },
      {
        name: "Cosmetics",
        description:
          "Specialized cosmetic applications requiring high-quality lead compounds.",
        icon: "sparkles",
      },
    ],
    extractionProcess: [
      {
        step: 1,
        name: "Mining",
        description:
          "Extraction of lead ore (galena) from underground or open-pit mines",
      },
      {
        step: 2,
        name: "Crushing",
        description: "Breaking down the ore into smaller pieces for processing",
      },
      {
        step: 3,
        name: "Concentration",
        description:
          "Separation of lead minerals from waste rock through flotation",
      },
      {
        step: 4,
        name: "Smelting",
        description:
          "High-temperature processing to separate lead from other minerals",
      },
      {
        step: 5,
        name: "Refining",
        description:
          "Purification to achieve the desired lead grade and quality",
      },
    ],
  },
  copper: {
    name: "Copper",
    title: "Copper | The 3 Rocks",
    description:
      "Premium copper with exceptional quality and versatility, available for a variety of industrial applications.",
    mainImage: "/images/products/copper.jpg",
    intro:
      "Our copper stands out for its exceptional quality and versatility, making it indispensable for a variety of industrial applications. With copper purity levels ranging from 8% to 21%, we ensure that our product meets stringent industry requirements. Through meticulous quality control from extraction to processing, we guarantee copper that consistently delivers performance and reliability.",
    specs: [
      { name: "Purity Range", value: "8% to 21%" },
      { name: "Special Grade", value: "40% purity (with permit for sale)" },
      { name: "Available Stock", value: "500 tons" },
      { name: "Melting Point", value: "1,085°C (1,985°F)" },
      { name: "Density", value: "8.96 g/cm³" },
      { name: "Electrical Conductivity", value: "Excellent" },
      { name: "Thermal Conductivity", value: "High" },
    ],
    applications: [
      {
        name: "Electrical Systems",
        description:
          "Wiring, cables, busbars and electrical components due to high conductivity.",
        icon: "bolt",
      },
      {
        name: "Construction",
        description:
          "Plumbing, roofing, architectural elements, and building hardware.",
        icon: "building",
      },
      {
        name: "Manufacturing",
        description:
          "Industrial machinery, equipment components, and production tools.",
        icon: "cog",
      },
      {
        name: "Electronics",
        description: "Circuit boards, semiconductors, and electronic devices.",
        icon: "chip",
      },
      {
        name: "Renewable Energy",
        description: "Solar panels, wind turbines, and energy storage systems.",
        icon: "sun",
      },
    ],
    extractionProcess: [
      {
        step: 1,
        name: "Mining",
        description:
          "Extraction of copper ore from open-pit or underground mines",
      },
      {
        step: 2,
        name: "Crushing & Grinding",
        description: "Breaking down the ore into small pieces",
      },
      {
        step: 3,
        name: "Concentration",
        description: "Flotation process to separate copper from other minerals",
      },
      {
        step: 4,
        name: "Smelting",
        description: "High-temperature treatment to produce copper matte",
      },
      {
        step: 5,
        name: "Converting & Refining",
        description: "Further processing to achieve desired purity levels",
      },
    ],
  },
  zinc: {
    name: "Zinc",
    title: "Zinc | The 3 Rocks",
    description:
      "High-quality zinc calamine offering exceptional purity and reliability for various applications, including cosmetics.",
    mainImage: "/images/products/zinc.jpg",
    intro:
      "Our high-quality zinc calamine offers exceptional purity and reliability for various applications, including cosmetics. With meticulous production and strict quality control, we meet the highest industry standards. Whether for manufacturing, pharmaceuticals, or skincare products, our superior zinc calamine delivers the quality you need.",
    specs: [
      { name: "Ore Purity", value: "+37%" },
      { name: "Concentrate Purity", value: "70%" },
      { name: "Available Stock (Ore)", value: "300 tons" },
      { name: "Available Stock (Concentrate)", value: "80 tons" },
      { name: "Density", value: "7.14 g/cm³" },
      { name: "Melting Point", value: "419.5°C (787.1°F)" },
    ],
    applications: [
      {
        name: "Galvanization",
        description:
          "Protecting steel and iron from corrosion in construction and automotive industries.",
        icon: "shield",
      },
      {
        name: "Cosmetics",
        description:
          "Valued for its soothing properties in skincare products and personal care formulations.",
        icon: "sparkles",
      },
      {
        name: "Pharmaceuticals",
        description:
          "Active ingredient in medicinal products and health supplements.",
        icon: "pill",
      },
      {
        name: "Die Casting",
        description:
          "Creating precise metal components for various industries.",
        icon: "cog",
      },
      {
        name: "Batteries",
        description: "Essential component in various battery technologies.",
        icon: "battery",
      },
    ],
    extractionProcess: [
      {
        step: 1,
        name: "Mining",
        description:
          "Extraction of zinc-containing minerals like sphalerite or calamine",
      },
      {
        step: 2,
        name: "Crushing & Grinding",
        description: "Breaking down the ore into fine particles",
      },
      {
        step: 3,
        name: "Flotation",
        description: "Separating zinc minerals from other minerals",
      },
      {
        step: 4,
        name: "Roasting",
        description: "Converting zinc sulfide to zinc oxide",
      },
      {
        step: 5,
        name: "Refining",
        description: "Final purification to achieve desired zinc quality",
      },
    ],
  },
  barite: {
    name: "Barite",
    title: "Barite | The 3 Rocks",
    description:
      "High-quality barite renowned for its purity and density, ideal for various industrial applications.",
    mainImage: "/images/products/barite.jpg",
    intro:
      "Our Barite is renowned for its high quality and purity, making it indispensable for a wide range of industrial applications. With rigorous sourcing and manufacturing processes, we ensure that our Barytine meets stringent industry standards. Whether used in drilling fluids, paints, or pharmaceuticals, our Barytine delivers consistent performance and reliability.",
    specs: [
      { name: "Density", value: "4.18 - 4.28" },
      { name: "Available Stock", value: "400 tons" },
      { name: "Chemical Formula", value: "BaSO₄" },
      { name: "Color", value: "White to light gray" },
      { name: "Hardness", value: "3-3.5 on Mohs scale" },
    ],
    applications: [
      {
        name: "Drilling Fluids",
        description:
          "Critical component in oil and gas drilling operations for its high density.",
        icon: "drill",
      },
      {
        name: "Medical Imaging",
        description:
          "Used as a contrast medium in X-ray and CT scan diagnostics.",
        icon: "xray",
      },
      {
        name: "Paints & Coatings",
        description:
          "Provides brightness, weight, and corrosion resistance in industrial coatings.",
        icon: "paintbrush",
      },
      {
        name: "Radiation Shielding",
        description:
          "Natural radiation barrier in medical and nuclear facilities.",
        icon: "shield",
      },
      {
        name: "Construction",
        description:
          "Component in high-density concrete and sound-dampening materials.",
        icon: "building",
      },
    ],
    extractionProcess: [
      {
        step: 1,
        name: "Mining",
        description:
          "Extraction from barite deposits through open-pit or underground methods",
      },
      {
        step: 2,
        name: "Crushing & Screening",
        description: "Breaking down raw barite and sorting by size",
      },
      {
        step: 3,
        name: "Washing",
        description: "Removing impurities and contaminants",
      },
      {
        step: 4,
        name: "Grinding",
        description:
          "Reducing to required particle size for specific applications",
      },
      {
        step: 5,
        name: "Classification",
        description: "Sorting by density and quality for different uses",
      },
    ],
  },
  iron: {
    name: "Iron",
    title: "Iron | The 3 Rocks",
    description:
      "Superior quality iron essential for a wide array of industrial applications, offering exceptional durability and reliability.",
    mainImage: "/images/products/iron.jpg",
    intro:
      "Our iron is distinguished by its superior quality and adaptability, essential for a wide array of industrial uses. With rigorous quality control from sourcing to production, we guarantee that our iron meets the most rigorous industry standards. Whether utilized in construction, manufacturing, or infrastructure development, our iron consistently demonstrates durability and reliability.",
    specs: [
      { name: "Purity", value: "≥ 56%" },
      { name: "Available Stock", value: "40,000 tons" },
      { name: "Density", value: "7.87 g/cm³" },
      { name: "Melting Point", value: "1,538°C (2,800°F)" },
      { name: "Form", value: "Ore, concentrate" },
    ],
    applications: [
      {
        name: "Construction",
        description:
          "Structural components, reinforcing bars, and framework in buildings and infrastructure.",
        icon: "building",
      },
      {
        name: "Manufacturing",
        description:
          "Production of machinery, tools, equipment, and consumer goods.",
        icon: "cog",
      },
      {
        name: "Transportation",
        description: "Railway tracks, bridges, and vehicle components.",
        icon: "truck",
      },
      {
        name: "Energy",
        description:
          "Power plants, transmission towers, and energy infrastructure.",
        icon: "bolt",
      },
      {
        name: "Steel Production",
        description:
          "Primary raw material for various steel grades and alloys.",
        icon: "flame",
      },
    ],
    extractionProcess: [
      {
        step: 1,
        name: "Mining",
        description:
          "Extraction of iron ore from open-pit or underground mines",
      },
      {
        step: 2,
        name: "Crushing & Grinding",
        description: "Breaking down the ore into smaller pieces",
      },
      {
        step: 3,
        name: "Concentration",
        description: "Removing impurities and increasing iron content",
      },
      {
        step: 4,
        name: "Pelletizing",
        description:
          "Converting concentrated ore into pellets for easier handling",
      },
      {
        step: 5,
        name: "Blast Furnace Processing",
        description: "Smelting iron ore to produce pig iron",
      },
    ],
  },
};

// Icons mapping
const icons: Record<IconName, JSX.Element> = {
  battery: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 4.5A2.5 2.5 0 014.5 2h11a2.5 2.5 0 012.5 2.5v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 15.5v-11z"></path>
    </svg>
  ),
  shield: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  building: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  chip: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 7H7v6h6V7z"></path>
      <path
        fillRule="evenodd"
        d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  sparkles: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  cog: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  bolt: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  sun: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  pill: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  drill: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  xray: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  paintbrush: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6,2.3L12.8,3l-1.1-1L10.9,2.8l1.1,1L9.5,6.2L8.5,5.2l-0.8,0.8l1.1,1L4.3,11.7c-0.6,0.6-0.6,1.5,0,2.1
      c0.6,0.6,1.5,0.6,2.1,0l4.6-4.6l1.1,1.1l0.8-0.8l-1.1-1.1l2.5-2.5l1.1,1.1l0.8-0.8l-1.1-1.1l0.8-0.8c0,0,0,0,0,0
      C16.6,3.5,15.8,1.2,13.6,2.3z"
      ></path>
    </svg>
  ),
  truck: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
    </svg>
  ),
  flame: (
    <svg
      className="w-6 h-6 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
};

// Icons function to render the correct icon
const getIcon = (iconName: IconName | string): JSX.Element => {
  // Check if the iconName is a valid key in our icons object
  if (iconName in icons) {
    return icons[iconName as IconName];
  }

  // Fallback to cog icon if not found
  return icons.cog;
};

// Metadata generators
export async function generateMetadata({ params }: MetadataParams) {
  const product = productsData[params.id];
  if (!product) {
    return {
      title: "Product Not Found | The 3 Rocks",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productsData[params.id];

  // Handle case where product ID doesn't exist
  if (!product) {
    return (
      <>
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 text-center">
              <h1 className="h1 font-red-hat-display mb-4">
                Product Not Found
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                The product you're looking for doesn't exist or has been moved.
              </p>
              <Link
                href="/articles"
                className="btn text-white bg-teal-500 hover:bg-teal-400"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Product header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 font-red-hat-display mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {product.intro}
              </p>
            </div>

            {/* Product overview */}
            <div className="md:flex md:space-x-8 mb-16">
              {/* Product image */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    className="w-full h-full object-cover"
                    src={product.mainImage || "/images/products/default.jpg"}
                    width={600}
                    height={400}
                    alt={`${product.name} raw material`}
                  />
                </div>
              </div>

              {/* Product details */}
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
                  <h2 className="h3 font-red-hat-display mb-4">
                    Product Specifications
                  </h2>

                  <div className="space-y-4">
                    {product.specs.map((spec: Specification, index: number) => (
                      <div key={index}>
                        <h3 className="font-bold text-gray-800 dark:text-gray-300">
                          {spec.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {spec.value}
                        </p>
                      </div>
                    ))}

                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="btn-sm text-white bg-teal-500 hover:bg-teal-400"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="mb-16">
              <h2 className="h2 font-red-hat-display text-center mb-8">
                Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {product.applications.map((app: Application, index: number) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 mb-4">
                      {getIcon(app.icon)}
                    </div>
                    <h3 className="text-xl font-bold font-red-hat-display mb-2">
                      {app.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {app.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extraction process */}
            <div className="mb-16">
              <h2 className="h2 font-red-hat-display text-center mb-8">
                {product.name} Extraction Process
              </h2>

              <div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
                data-aos="fade-up"
              >
                <div className="grid md:grid-cols-5 gap-4">
                  {product.extractionProcess.map(
                    (step: ExtractionStep, index: number) => (
                      <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 text-white text-xl font-bold mb-4">
                          {step.step}
                        </div>
                        <h3 className="font-bold mb-2">{step.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8">
                  <h3 className="font-bold text-gray-800 dark:text-gray-300 mb-4">
                    Our Sustainable Approach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    At The 3 Rocks, we employ advanced extraction technologies
                    that minimize environmental impact while maximizing resource
                    utilization. Our {product.name.toLowerCase()} extraction
                    process includes:
                  </p>
                  <ul className="list-disc pl-5 mt-4 text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Closed-loop water systems to prevent contamination</li>
                    <li>Energy-efficient processing technologies</li>
                    <li>Comprehensive waste management and recycling</li>
                    <li>Continuous monitoring of environmental metrics</li>
                    <li>Rehabilitation of mining sites after extraction</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quality standards */}
            <div className="mb-16">
              <h2 className="h2 font-red-hat-display text-center mb-8">
                Quality Standards & Certifications
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                  data-aos="fade-up"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-500 mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">ISO 9001:2015</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our {product.name.toLowerCase()} production facilities
                    maintain ISO 9001:2015 certification, ensuring consistent
                    quality management systems.
                  </p>
                </div>

                <div
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-500 mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">ISO 14001:2015</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Environmental management certification ensuring our{" "}
                    {product.name.toLowerCase()} extraction and processing meets
                    strict environmental standards.
                  </p>
                </div>

                <div
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-500 mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Product Quality Testing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Every batch of our {product.name.toLowerCase()} undergoes
                    rigorous testing to ensure it meets or exceeds industry
                    specifications and customer requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center">
              <h2 className="h3 font-red-hat-display mb-4">
                Ready to Order Premium {product.name}?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Contact our experts today to discuss your specific requirements
                and receive a personalized quote.
              </p>
              <Link
                href="/contact"
                className="btn text-white bg-teal-500 hover:bg-teal-400 mb-4 mr-4"
              >
                Request Quote
              </Link>
              <Link
                href="/articles"
                className="btn text-teal-500 bg-teal-100 hover:bg-teal-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-teal-400"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

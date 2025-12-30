"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProductGridItem } from "app/types/product";

// Define interfaces for our product details
interface BaseProductDetail {
  title: string;
  description: string;
  applications: string[];
  qualityAssurance: string;
  annualExtraction: string;
  purityLevel: string;
}

interface LeadZincDetail extends BaseProductDetail {
  purity: {
    concentrate: string;
    powder?: string;
    ore: string;
  };
  stock: {
    concentrate: string;
    powder?: string;
    ore: string;
  };
  monthlyCapacity?: string;
}

interface StandardProductDetail extends BaseProductDetail {
  purity: string;
  stock: string;
}

interface BariteDetail extends BaseProductDetail {
  density: string;
  stock: string;
}

type ProductDetail = LeadZincDetail | StandardProductDetail | BariteDetail;

// Detailed product data including info from your PDF - enhanced with Morocco references
const productDetails: Record<string, ProductDetail> = {
  lead: {
    title: "Moroccan Lead",
    description:
      "At The 3 Rocks Company, we pride ourselves on offering high-quality Moroccan lead that stands out for its exceptional purity and unmatched durability, sourced from Morocco's historic mining regions.",
    purity: {
      concentrate: "86% pure lead",
      powder: "86% pure lead",
      ore: "More than 50%",
    },
    stock: {
      concentrate: "400 tons",
      powder: "150 tons",
      ore: "300 tons",
    },
    monthlyCapacity: "700 tons each month",
    applications: [
      "Construction materials",
      "Automotive industry",
      "Electronics and energy storage",
      "Radiation shielding",
      "Cosmetics manufacturing",
    ],
    qualityAssurance:
      "Our Moroccan lead meets the highest industry standards with strict quality control processes throughout extraction and processing at our Morocco-based facilities.",
    annualExtraction: "8400 tons from Moroccan mines",
    purityLevel: "99.97%",
  },
  copper: {
    title: "Moroccan Copper",
    description:
      "Our Moroccan copper stands out for its exceptional quality and versatility, making it indispensable for a variety of industrial applications worldwide.",
    purity: "8% to 21% (with special permit for 40% high-purity copper)",
    stock: "+500 tons",
    applications: [
      "Electrical systems and wiring",
      "Electronics manufacturing",
      "Construction components",
      "Telecommunications infrastructure",
      "Heat exchangers and cooling systems",
    ],
    qualityAssurance:
      "Through meticulous quality control from extraction in Morocco's copper-rich regions to processing, we guarantee copper that consistently delivers performance and reliability.",
    annualExtraction: "60,000 tons from Morocco's mineral deposits",
    purityLevel: "99.9%",
  },
  zinc: {
    title: "Moroccan Zinc (Calamine)",
    description:
      "Our high-quality Moroccan zinc calamine offers exceptional purity and reliability for various applications, including cosmetics and industrial uses.",
    purity: {
      ore: "+37%",
      concentrate: "70%",
    },
    stock: {
      ore: "300 tons",
      concentrate: "80 tons",
    },
    applications: [
      "Manufacturing processes",
      "Pharmaceuticals",
      "Cosmetics and skincare products",
      "Galvanizing steel",
      "Die-casting",
    ],
    qualityAssurance:
      "With meticulous production and strict quality control at our Moroccan facilities, we meet the highest industry standards for zinc processing.",
    annualExtraction: "50,000+ tons from Morocco's zinc deposits",
    purityLevel: "99.95%",
  },
  barite: {
    title: "Moroccan Barite",
    description:
      "Our Moroccan Barite is renowned for its high quality and purity, making it indispensable for a wide range of industrial applications globally.",
    density: "4.18 - 4.28",
    stock: "400 tons",
    applications: [
      "Drilling fluids for oil and gas industry",
      "Medical applications (X-ray and radiation protection)",
      "Paint and coatings",
      "Construction materials",
      "Pharmaceutical applications",
    ],
    qualityAssurance:
      "With rigorous sourcing from Morocco's barite-rich regions and manufacturing processes, we ensure that our Barytine meets stringent industry standards.",
    annualExtraction: "80,000 tons from Morocco's mineral deposits",
    purityLevel: "4.2 specific gravity",
  },
  iron: {
    title: "Moroccan Iron",
    description:
      "Our Moroccan iron is distinguished by its superior quality and adaptability, essential for a wide array of industrial uses around the world.",
    purity: "≥ 56%",
    stock: "40,000 tons",
    applications: [
      "Construction and infrastructure",
      "Manufacturing equipment",
      "Automotive components",
      "Industrial machinery",
      "Tools and hardware",
    ],
    qualityAssurance:
      "With rigorous quality control from sourcing to production in our Moroccan facilities, we guarantee that our iron meets the most rigorous industry standards.",
    annualExtraction: "120,000 tons from Morocco's iron-rich mountains",
    purityLevel: "98.5%",
  },
  cobalt: {
    title: "Moroccan Cobalt",
    description:
      "Our high-quality Moroccan cobalt is essential for modern technology and industrial applications, sustainably sourced from Morocco's mineral wealth.",
    purity: "42%+",
    stock: "Available upon request",
    applications: [
      "Lithium-ion batteries",
      "Superalloys for aerospace",
      "Cutting tools and drill bits",
      "Magnetic materials",
      "Healthcare applications",
    ],
    qualityAssurance:
      "We source cobalt responsibly from Morocco's mining regions and ensure consistent quality for all technological and industrial uses.",
    annualExtraction: "New addition to Morocco's mineral exports",
    purityLevel: "99.8%",
  },
  antimony: {
    title: "Moroccan Antimony",
    description:
      "Our premium Moroccan antimony provides exceptional quality for various industrial applications, sourced from Morocco's exclusive mining operations.",
    purity: "30%+",
    stock: "+700 tons",
    applications: [
      "Flame retardants",
      "Battery manufacturing",
      "Electronic components",
      "Glass and ceramic production",
      "Metal alloys",
    ],
    qualityAssurance:
      "Our Moroccan antimony undergoes strict quality control to meet the highest industry standards in our state-of-the-art Moroccan facilities.",
    annualExtraction: "25,000 tons from Morocco's antimony deposits",
    purityLevel: "99.65%",
  },
};

interface ProductPopupProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductGridItem | null;
}

// Helper function to format purity
const formatPurity = (
  purity: string | { concentrate: string; powder?: string; ore: string }
): string => {
  if (typeof purity === "string") return purity;

  // If it's an object, create a readable string
  const parts = [];
  if (purity.concentrate) parts.push(`Concentrate: ${purity.concentrate}`);
  if (purity.powder) parts.push(`Powder: ${purity.powder}`);
  if (purity.ore) parts.push(`Ore: ${purity.ore}`);

  return parts.join(", ");
};

// Helper function to format stock
const formatStock = (
  stock: string | { concentrate: string; powder?: string; ore: string }
): string => {
  if (typeof stock === "string") return stock;

  // If it's an object, create a readable string
  const parts = [];
  if (stock.concentrate) parts.push(`Concentrate: ${stock.concentrate}`);
  if (stock.powder) parts.push(`Powder: ${stock.powder}`);
  if (stock.ore) parts.push(`Ore: ${stock.ore}`);

  return parts.join(", ");
};

export default function ProductPopup({
  isOpen,
  onClose,
  product,
}: ProductPopupProps) {
  if (!isOpen || !product) return null;

  const details = {
    ...productDetails[product.id as keyof typeof productDetails],
    id: product.id, // Add the ID from the product to the details
  };

  // Handle Escape key press to close popup
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keydown", handleEscapeKey);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  // Handle background click to close popup
  const handleBackgroundClick = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={handleBackgroundClick}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image section */}
            <div className="md:w-1/3">
              <div
                className={`relative rounded-lg overflow-hidden h-64 ${product.color} bg-opacity-20`}
              >
                <Image
                  src={product.image}
                  alt={`Moroccan ${product.name} mineral`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Content section */}
            <div className="md:w-2/3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold font-red-hat-display">
                  {details.title}
                </h2>
                <div className="inline-flex px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium dark:bg-teal-900 dark:text-teal-300">
                  Premium Moroccan Quality
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {details.description}
              </p>

              {/* Key specifications */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">
                  Moroccan Mining Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      Moroccan Purity Level
                    </span>
                    <span className="text-xl font-bold block">
                      {"density" in details
                        ? details.density
                        : "purity" in details
                        ? formatPurity(details.purity)
                        : "N/A"}
                    </span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      Annual Moroccan Extraction
                    </span>
                    <span className="text-xl font-bold block">
                      {details.annualExtraction}
                    </span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      Available Moroccan Stock
                    </span>
                    <span className="text-xl font-bold block">
                      {"stock" in details
                        ? formatStock(details.stock)
                        : "Available upon request"}
                    </span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      Morocco Industry Grade
                    </span>
                    <span className="text-xl font-bold block">
                      {details.purityLevel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">
                  Moroccan Mining Applications
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {details.applications.map((app, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-teal-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quality Assurance */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">
                  Moroccan Quality Assurance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {details.qualityAssurance}
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Request Moroccan Minerals Quote
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

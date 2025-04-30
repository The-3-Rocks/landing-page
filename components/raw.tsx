"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { ProductGridItem } from "app/types/product";
import ProductPopup from "@/components/product-popup"; // Import the popup component

// Import images using require to maintain @/public paths
import leadImage from "@/public/images/raw-material-lead.jpg";
import copperImage from "@/public/images/copper1.png";
import zincImage from "@/public/images/zinc-product.png";
import bariteImage from "@/public/images/Barite-Clay.jpg";
import ironImage from "@/public/images/iron-product.png";
import cobaltImage from "@/public/images/cobaltt.png";
import antimonyImage from "@/public/images/antimony11.jpg";

// Product data with enhanced Moroccan mining SEO
const products: ProductGridItem[] = [
  {
    id: "lead",
    name: "Lead",
    description:
      "High-grade Moroccan lead with exceptional purity for various industrial applications, ethically sourced from Morocco's rich mineral deposits.",
    image: leadImage,
    imagePath: "@/public/images/raw-material-lead.png",
    purity: "86%",
    stock: "400 tons concentrate, 150 tons powder, 300 tons ore",
    color: "bg-gray-700",
  },
  {
    id: "copper",
    name: "Copper",
    description:
      "Premium Moroccan copper with exceptional quality extracted from Morocco's historic mining regions, offering versatility for industrial applications.",
    image: copperImage,
    imagePath: "@/public/images/copper1.png",
    purity: "8% to 21%",
    stock: "500 tons",
    color: "bg-amber-600",
  },
  {
    id: "zinc",
    name: "Zinc",
    description:
      "High-quality zinc calamine from Morocco's mineral-rich mountains for various applications, including cosmetics and industrial uses.",
    image: zincImage,
    imagePath: "@/public/images/raw-material-zinc.png",
    purity: "+37%",
    stock: "300 tons ore, 80 tons concentrate",
    color: "bg-slate-300",
  },
  {
    id: "barite",
    name: "Barite",
    description:
      "High-quality Moroccan barite sourced from premier mining regions of Morocco for drilling, medical, paint and construction applications.",
    image: bariteImage,
    imagePath: "@/public/images/raw-material-barite.png",
    purity: "Density: 4.18 - 4.28",
    stock: "400 tons",
    color: "bg-white",
  },
  {
    id: "iron",
    name: "Iron",
    description:
      "Superior quality iron extracted from Morocco's ancient ore deposits for construction, manufacturing, and industrial uses worldwide.",
    image: ironImage,
    imagePath: "@/public/images/raw-material-iron.png",
    purity: "≥ 56%",
    stock: "40,000 tons",
    color: "bg-slate-500",
  },
  {
    id: "cobalt",
    name: "Cobalt",
    description:
      "High-quality Moroccan cobalt essential for modern battery technology and superalloys, sustainably mined from Morocco's mineral wealth.",
    image: cobaltImage,
    imagePath: "@/public/images/raw-material-cobalt.png",
    purity: "42%+",
    stock: "Available upon request",
    color: "bg-blue-800",
  },
  {
    id: "antimony",
    name: "Antimony",
    description:
      "Premium antimony from Morocco's exclusive mining operations for flame retardants, batteries, and electronic components with guaranteed quality.",
    image: antimonyImage,
    imagePath: "@/public/images/raw-material-antimony.png",
    purity: "30%+",
    stock: "Available upon request",
    color: "bg-gray-600",
  },
];

export default function ProductsPage() {
  // State for popup control
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductGridItem | null>(null);

  // Function to open popup with selected product
  const openProductPopup = (product: ProductGridItem) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  return (
    <>
      {/* Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section className="relative bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header with SEO-enhanced content */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 font-red-hat-display mb-4">
                Premium Moroccan Mining & Raw Materials
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Discover our extensive range of high-quality Moroccan minerals
                and raw materials sourced and processed from Morocco's legendary
                mining regions to meet the highest industry standards worldwide.
              </p>
            </div>

            {/* Featured product - Lead with Moroccan mining references */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="relative h-64 md:h-full">
                      <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={leadImage}
                        width={600}
                        height={400}
                        alt="Moroccan Lead raw material"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-50"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="inline-block px-4 py-2 rounded-full bg-teal-500 text-white font-semibold text-sm mb-2">
                          Featured Moroccan Mineral
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          Moroccan Lead
                        </h2>
                        <p className="text-white max-w-md">
                          86% pure lead from Morocco's premier mining regions,
                          available as concentrate, powder, and ore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <h3 className="h4 font-red-hat-display mb-3">
                      Exceptional Purity & Moroccan Mining Heritage
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      At The 3 Rocks Company, we pride ourselves on offering
                      high-quality Moroccan lead that stands out for its
                      exceptional purity and unmatched durability. Our lead is
                      carefully extracted from Morocco's mineral-rich mountains
                      and engineered to meet the specific demands of various
                      industries, from construction and automotive to
                      electronics, energy, and cosmetics.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <span className="block text-sm text-gray-500 dark:text-gray-400">
                          Moroccan Concentrate
                        </span>
                        <span className="block text-xl font-bold text-gray-900 dark:text-white">
                          86% pure lead
                        </span>
                        <span className="block text-sm text-teal-600 dark:text-teal-400">
                          400 tons in stock
                        </span>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <span className="block text-sm text-gray-500 dark:text-gray-400">
                          Moroccan Ore
                        </span>
                        <span className="block text-xl font-bold text-gray-900 dark:text-white">
                          +50% pure lead
                        </span>
                        <span className="block text-sm text-teal-600 dark:text-teal-400">
                          150 tons in stock
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => openProductPopup(products[0])}
                      className="btn-sm text-white bg-teal-500 hover:bg-teal-400"
                    >
                      Learn More About Our Moroccan Lead
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
              {products
                .filter((product) => product.id !== "lead") // Exclude lead as it's featured above
                .map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition duration-300"
                    data-aos="fade-up"
                  >
                    <div className="relative mb-5 overflow-hidden rounded-lg">
                      <div
                        className={`absolute inset-0 ${product.color} opacity-10`}
                      ></div>
                      <Image
                        className="w-full h-48 object-cover"
                        src={product.image}
                        width={300}
                        height={200}
                        alt={`Moroccan ${product.name} mineral`}
                      />
                    </div>
                    <div className="grow">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold font-red-hat-display">
                          Moroccan {product.name}
                        </h3>
                        <div className="text-sm font-medium inline-flex px-2 py-1 rounded-full text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-900">
                          {product.purity}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {product.description}
                      </p>
                      <div className="text-sm text-gray-500 mb-4">
                        <span className="font-semibold">Available Stock:</span>{" "}
                        {product.stock}
                      </div>
                    </div>
                    <button
                      onClick={() => openProductPopup(product)}
                      className="btn-sm text-white bg-teal-500 hover:bg-teal-400 w-full mt-3"
                    >
                      Learn More
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mining expertise section with Moroccan mining references */}
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 text-white mb-4">
                <svg
                  className="w-8 h-8"
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
              </div>
              <h2 className="h2 font-red-hat-display mb-4">
                Our Moroccan Mining Heritage & Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                With decades of experience in Moroccan mining and processing raw
                materials, we've developed sustainable and efficient extraction
                methods that honor Morocco's rich mineral legacy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                data-aos="fade-right"
              >
                <h3 className="h4 font-red-hat-display mb-3">
                  Moroccan Mining: Tradition & Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The 3 Rocks is a Moroccan mining business that combines
                  traditional methods with modern techniques. This enduring
                  enterprise adapts to technological and market changes while
                  preserving Morocco's inherited mining practices and values. We
                  honor the legacy of Morocco's mining past by using some
                  traditional techniques alongside advanced machinery like
                  excavators and modern drills to enhance efficiency and safety
                  in our Moroccan mineral operations.
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                data-aos="fade-left"
              >
                <h3 className="h4 font-red-hat-display mb-3">
                  Moroccan Quality & Global Reliability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our Moroccan minerals and raw materials are sold locally and
                  internationally, supported by strong relationships with buyers
                  and distributors. Our Moroccan mines are renowned for quality,
                  reliability, and excellence. We implement rigorous quality
                  control processes throughout our entire operation, from
                  extraction in Morocco's mineral-rich regions to final product
                  delivery.
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                data-aos="fade-right"
              >
                <h3 className="h4 font-red-hat-display mb-3">
                  Sustainability in Moroccan Mining
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We employ environmentally responsible Moroccan mining
                  practices that minimize ecological impact while maximizing
                  resource utilization. Our operations in Morocco follow strict
                  environmental guidelines and we continuously invest in green
                  technologies for a sustainable future in Moroccan mineral
                  extraction and processing.
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                data-aos="fade-left"
              >
                <h3 className="h4 font-red-hat-display mb-3">
                  The Future of Moroccan Mining
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Facing fluctuating mineral prices, regulations, and climate
                  changes, our Moroccan mining company plans for the long-term.
                  We aim to integrate emerging technologies into Morocco's
                  mining sector, expand into new markets, and train future
                  generations of Moroccan mining professionals while maintaining
                  our commitment to quality and sustainability in Morocco's
                  mineral industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Moroccan references */}
      <section className="relative bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 font-red-hat-display mb-4">
                Ready to unlock Morocco's mining potential?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Contact us today to discuss your Moroccan raw material and
                mineral needs and receive a personalized quote for premium
                Moroccan mining products.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn text-white bg-teal-500 hover:bg-teal-400"
                >
                  Connect with Morocco's Mining Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Popup */}
      <ProductPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { ProductGridItem } from "app/types/product";
import ProductPopup from "@/components/product-popup"; // Import the popup component

// Import images using require to maintain @/public paths
import leadImage from "@/public/images/raw-material-lead.png";
import copperImage from "@/public/images/copper1.png";
import zincImage from "@/public/images/raw-material-zinc.png";
import bariteImage from "@/public/images/raw-material-barite.png";
import ironImage from "@/public/images/raw-material-iron.png";
import cobaltImage from "@/public/images/raw-cobalt.png";
import antimonyImage from "@/public/images/raw-material-antimony.png";

// Product data
const products: ProductGridItem[] = [
  {
    id: "lead",
    name: "Lead",
    description:
      "High-grade lead with exceptional purity for various industrial applications.",
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
      "Premium copper with exceptional quality and versatility for industrial applications.",
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
      "High-quality zinc calamine for various applications, including cosmetics.",
    image: zincImage,
    imagePath: "@/public/images/raw-material-zinc.png",
    purity: "Ore: +37%, Concentrate: 70%",
    stock: "300 tons ore, 80 tons concentrate",
    color: "bg-slate-300",
  },
  {
    id: "barite",
    name: "Barite",
    description:
      "High-quality barite for drilling, medical, paint and construction applications.",
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
      "Superior quality iron for construction, manufacturing, and industrial uses.",
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
      "High-quality cobalt essential for modern battery technology and superalloys.",
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
      "Premium antimony for flame retardants, batteries, and electronic components.",
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
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 font-red-hat-display mb-4">
                Premium Raw Materials
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Discover our extensive range of high-quality raw materials
                sourced and processed to meet the highest industry standards.
              </p>
            </div>

            {/* Featured product - Lead */}
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
                        alt="Lead raw material"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-50"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="inline-block px-4 py-2 rounded-full bg-teal-500 text-white font-semibold text-sm mb-2">
                          Featured Material
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          Lead
                        </h2>
                        <p className="text-white max-w-md">
                          86% pure lead available as concentrate, powder, and
                          ore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <h3 className="h4 font-red-hat-display mb-3">
                      Exceptional Purity & Durability
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      At The 3 Rocks Company, we pride ourselves on offering
                      high-quality lead that stands out for its exceptional
                      purity and unmatched durability. Our lead is carefully
                      engineered to meet the specific demands of various
                      industries, from construction and automotive to
                      electronics, energy, and cosmetics.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <span className="block text-sm text-gray-500 dark:text-gray-400">
                          Concentrate
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
                          Ore
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
                      Learn More About Our Lead
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
                        alt={product.name}
                      />
                    </div>
                    <div className="grow">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold font-red-hat-display">
                          {product.name}
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

      {/* Mining expertise */}
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
                Our Mining Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                With decades of experience in mining and processing raw
                materials, we've developed sustainable and efficient extraction
                methods.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                data-aos="fade-right"
              >
                <h3 className="h4 font-red-hat-display mb-3">
                  Combining Tradition & Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The 3 Rocks is a mining business that combines traditional
                  methods with modern techniques. This enduring enterprise
                  adapts to technological and market changes while preserving
                  inherited practices and values. We honor the legacy of the
                  past by using some traditional techniques alongside advanced
                  machinery like excavators and modern drills to enhance
                  efficiency and safety.
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                data-aos="fade-left"
              >
                <h3 className="h4 font-red-hat-display mb-3">
                  Quality & Reliability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our products are sold locally and internationally, supported
                  by strong relationships with buyers and distributors. The mine
                  is renowned for quality, reliability, and excellence. We
                  implement rigorous quality control processes throughout our
                  entire operation, from extraction to final product delivery.
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                data-aos="fade-right"
              >
                <h3 className="h4 font-red-hat-display mb-3">
                  Sustainability Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We employ environmentally responsible mining practices that
                  minimize ecological impact while maximizing resource
                  utilization. Our operations follow strict environmental
                  guidelines and we continuously invest in green technologies
                  for a sustainable future.
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                data-aos="fade-left"
              >
                <h3 className="h4 font-red-hat-display mb-3">
                  Looking to the Future
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Facing fluctuating mineral prices, regulations, and climate
                  changes, the company plans long-term. We aim to integrate
                  emerging technologies, expand into new markets, and train
                  future generations while maintaining our commitment to quality
                  and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 font-red-hat-display mb-4">
                Ready to unlock your mining potential?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Contact us today to discuss your raw material needs and receive
                a personalized quote.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn text-white bg-teal-500 hover:bg-teal-400"
                >
                  Get in Touch
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

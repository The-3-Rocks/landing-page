"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Import gallery images
import MiningOperations from "@/public/images/11.webp";
import MineralProcessing from "@/public/images/22.webp";
import SustainablePractices from "@/public/images/66.webp";
import SustainablePractices1 from "@/public/images/33.webp";
import QualityControl from "@/public/images/44.webp";
import GlobalDistribution from "@/public/images/55.webp";

const galleryItems = [
  {
    id: 1,
    image: MiningOperations,
    alt: "Moroccan mining extraction operations",
    title: "Moroccan Extraction Techniques",
    text: "We apply advanced mining extraction techniques across Morocco, combining traditional knowledge with modern equipments for efficient and sustainable mineral recovery.",
    categories: ["all", "extraction"],
  },
  {
    id: 2,
    image: MineralProcessing,
    alt: "Moroccan mineral processing operations",
    title: "Mineral Processing",
    text: "We use beneficiation plants and modern processing lines to refine raw minerals into premium-grade products that meet the most demanding international specifications.",
    categories: ["all", "processing"],
  },
  {
    id: 3,
    image: SustainablePractices1,
    alt: "Sustainable mining practices in Morocco",
    title: "Sustainable Moroccan Mining",
    text: "We operate with ethical mining standards and environmental stewardship, ensuring our extraction practices protect Morocco's landscape for future generations.",
    categories: ["all", "sustainable"],
  },
  {
    id: 4,
    image: QualityControl,
    alt: "Moroccan quality assurance laboratory",
    title: "Moroccan Quality Assurance",
    text: "Our ISO 17025-certified laboratories and rigorous testing protocols guarantee consistent quality across every shipment and certificate of analysis.",
    categories: ["all", "processing"],
  },
  {
    id: 5,
    image: GlobalDistribution,
    alt: "Moroccan minerals shipped to world markets",
    title: "Morocco to World Markets",
    text: "The 3 Rocks exports Moroccan minerals to over 20 countries across Europe, Asia, Africa, and the Americas.",
    categories: ["all"],
  },
  {
    id: 6,
    image: SustainablePractices,
    alt: "Morocco's mining heritage and traditions",
    title: "Morocco's Mining Heritage",
    text: "Morocco's mining industry has a long-standing history, and we're proud to continue that tradition of excellence with modern sustainable practices.",
    categories: ["all", "sustainable"],
  },
];

export default function FeaturesGallery() {
  const [category, setCategory] = useState("all");

  useEffect(() => {
    import("aos").then(({ default: AOS }) => AOS.refreshHard());
  }, [category]);

  return (
    <section
      id="mining-heritage"
      className="relative bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200/50 dark:border-gray-700/50"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-14">
            <div className="section-pill">
              Moroccan Mining Excellence
            </div>
            <h2 className="h2 font-red-hat-display mb-4">
              Experience Morocco's Rich Mining Heritage
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our Moroccan mining facilities combine traditional knowledge with
              modern technology, ensuring sustainable extraction of Morocco's
              valuable mineral resources.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center mb-8 md:mb-10">
            <button
              className={`m-1 py-1 px-4 rounded-full transition-colors duration-300 ${
                category === "all"
                  ? "bg-teal-500 text-white"
                  : "bg-white text-teal-600 hover:bg-teal-500 hover:text-white dark:bg-gray-800 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-white"
              }`}
              onClick={() => setCategory("all")}
            >
              All Moroccan Operations
            </button>
            <button
              className={`m-1 py-1 px-4 rounded-full transition-colors duration-300 ${
                category === "extraction"
                  ? "bg-teal-500 text-white"
                  : "bg-white text-teal-600 hover:bg-teal-500 hover:text-white dark:bg-gray-800 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-white"
              }`}
              onClick={() => setCategory("extraction")}
            >
              Moroccan Extraction
            </button>
            <button
              className={`m-1 py-1 px-4 rounded-full transition-colors duration-300 ${
                category === "processing"
                  ? "bg-teal-500 text-white"
                  : "bg-white text-teal-600 hover:bg-teal-500 hover:text-white dark:bg-gray-800 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-white"
              }`}
              onClick={() => setCategory("processing")}
            >
              Mineral Processing
            </button>
            <button
              className={`m-1 py-1 px-4 rounded-full transition-colors duration-300 ${
                category === "sustainable"
                  ? "bg-teal-500 text-white"
                  : "bg-white text-teal-600 hover:bg-teal-500 hover:text-white dark:bg-gray-800 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-white"
              }`}
              onClick={() => setCategory("sustainable")}
            >
              Sustainable Mining
            </button>
          </div>

          {/* Gallery grid - 2 columns on desktop, 1 on mobile */}
          <div className="grid gap-8 sm:grid-cols-2 items-stretch">
            {galleryItems.map((item, index) => {
              const visible = item.categories.includes(category);
              return (
                <article
                  key={item.id}
                  className={`group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col ${
                    visible ? "" : "hidden"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={(index % 2) * 100}
                >
                  <div className="relative overflow-hidden h-56">
                    <Image
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={item.image}
                      width={352}
                      height={224}
                      alt={item.alt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                    <p className="absolute bottom-0 left-0 right-0 text-white font-bold text-lg p-5 drop-shadow-md">
                      {item.title}
                    </p>
                  </div>
                  <div className="p-6 md:p-7 flex-1">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

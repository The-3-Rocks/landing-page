"use client";

import { useState } from "react";
import Image from "next/image";

// Import gallery images
import MiningOperations from "@/public/images/11.jpg";
import MineralProcessing from "@/public/images/22.jpg";
import SustainablePractices from "@/public/images/66.jpg";
import SustainablePractices1 from "@/public/images/33.jpg";
import QualityControl from "@/public/images/44.jpg";
import GlobalDistribution from "@/public/images/55.jpg";

export default function FeaturesGallery() {
  const [category, setCategory] = useState("all");

  return (
    <section
      id="mining-heritage"
      className="relative bg-gray-50 dark:bg-gray-900"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-teal-600 bg-teal-200 rounded-full mb-4">
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
          <div className="flex flex-wrap justify-center mb-8">
            <button
              className={`m-1 py-1 px-4 rounded-full ${
                category === "all"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setCategory("all")}
            >
              All Moroccan Operations
            </button>
            <button
              className={`m-1 py-1 px-4 rounded-full ${
                category === "extraction"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setCategory("extraction")}
            >
              Moroccan Extraction
            </button>
            <button
              className={`m-1 py-1 px-4 rounded-full ${
                category === "processing"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setCategory("processing")}
            >
              Mineral Processing
            </button>
            <button
              className={`m-1 py-1 px-4 rounded-full ${
                category === "sustainable"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setCategory("sustainable")}
            >
              Sustainable Mining
            </button>
          </div>

          {/* Gallery */}
          <div
            className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-gallery
          >
            {/* Item 1 - Mining Operations */}
            {(category === "all" || category === "extraction") && (
              <div
                className="relative flex flex-col"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-gallery]"
              >
                <div className="relative">
                  <Image
                    className="w-full h-60 object-cover rounded-lg shadow-lg"
                    src={MiningOperations}
                    width={352}
                    height={240}
                    alt="Moroccan mining operations in the Atlas Mountains"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-transparent opacity-20 rounded-lg"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 shadow-lg mx-4 -mt-12 relative rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Moroccan Extraction Techniques
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our specialized Moroccan mining methods combine traditional
                    knowledge with modern technology for optimal mineral
                    extraction from Morocco's rich deposits.
                  </p>
                </div>
              </div>
            )}

            {/* Item 2 - Mineral Processing */}
            {(category === "all" || category === "processing") && (
              <div
                className="relative flex flex-col"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-gallery]"
                data-aos-delay="100"
              >
                <div className="relative">
                  <Image
                    className="w-full h-60 object-cover rounded-lg shadow-lg"
                    src={MineralProcessing}
                    width={352}
                    height={240}
                    alt="Advanced mineral processing facility in Morocco"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-transparent opacity-20 rounded-lg"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 shadow-lg mx-4 -mt-12 relative rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Moroccan Mineral Processing
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our state-of-the-art Moroccan facilities process raw
                    minerals to the highest standards, ensuring premium quality
                    for global markets.
                  </p>
                </div>
              </div>
            )}

            {/* Item 3 - Sustainable Practices */}
            {(category === "all" || category === "sustainable") && (
              <div
                className="relative flex flex-col"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-gallery]"
                data-aos-delay="200"
              >
                <div className="relative">
                  <Image
                    className="w-full h-60 object-cover rounded-lg shadow-lg"
                    src={SustainablePractices1}
                    width={352}
                    height={240}
                    alt="Sustainable mining practices in Morocco"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-transparent opacity-20 rounded-lg"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 shadow-lg mx-4 -mt-12 relative rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Sustainable Moroccan Mining
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    We implement environmentally responsible mining practices
                    that protect Morocco's natural landscapes while maximizing
                    resource utilization.
                  </p>
                </div>
              </div>
            )}

            {/* Item 4 - Quality Control */}
            {(category === "all" || category === "processing") && (
              <div
                className="relative flex flex-col"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-gallery]"
                data-aos-delay="300"
              >
                <div className="relative">
                  <Image
                    className="w-full h-60 object-cover rounded-lg shadow-lg"
                    src={QualityControl}
                    width={352}
                    height={240}
                    alt="Moroccan mineral quality control laboratory"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-transparent opacity-20 rounded-lg"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 shadow-lg mx-4 -mt-12 relative rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Moroccan Quality Assurance
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our rigorous testing ensures that all Moroccan minerals meet
                    international standards for purity and quality before
                    distribution.
                  </p>
                </div>
              </div>
            )}

            {/* Item 5 - Global Distribution */}
            {category === "all" && (
              <div
                className="relative flex flex-col"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-gallery]"
                data-aos-delay="400"
              >
                <div className="relative">
                  <Image
                    className="w-full h-60 object-cover rounded-lg shadow-lg"
                    src={GlobalDistribution}
                    width={352}
                    height={240}
                    alt="Moroccan minerals being prepared for global distribution"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-transparent opacity-20 rounded-lg"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 shadow-lg mx-4 -mt-12 relative rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Morocco to World Markets
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    From Morocco's mineral-rich mountains to global markets, we
                    ensure reliable supply chains for customers worldwide.
                  </p>
                </div>
              </div>
            )}

            {/* Item 6 - Mining Heritage */}
            {(category === "all" || category === "sustainable") && (
              <div
                className="relative flex flex-col"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-gallery]"
                data-aos-delay="500"
              >
                <div className="relative">
                  <Image
                    className="w-full h-60 object-cover rounded-lg shadow-lg"
                    src={SustainablePractices}
                    width={352}
                    height={240}
                    alt="Moroccan mining heritage and community engagement"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-transparent opacity-20 rounded-lg"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 shadow-lg mx-4 -mt-12 relative rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Morocco's Mining Heritage
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    We honor Morocco's rich mining tradition while creating
                    sustainable opportunities for local communities through
                    responsible mining practices.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

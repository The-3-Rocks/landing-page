"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Import process images
import ExtractionImage from "@/public/images/extraction1.webp";
import ProcessingImage from "@/public/images/process.webp";
import ExportImage from "@/public/images/export1.webp";
import AnalysisImage from "@/public/images/analyses11.webp";

const steps = [
  {
    num: "1",
    title: "Extraction",
    image: ExtractionImage,
    alt: "Moroccan raw material extraction",
    text: "We extract raw materials from Morocco using sustainable methods that minimize environmental impact while maximizing resource quality. Our mining partners employ selective extraction techniques tailored to each deposit's geology, reducing waste and preserving high-grade material. All operations follow Moroccan mining regulations and international safety standards, with ongoing rehabilitation of extraction sites.",
  },
  {
    num: "2",
    title: "Analysis",
    image: AnalysisImage,
    alt: "Moroccan material analysis",
    text: "Each batch undergoes rigorous testing and analysis to verify purity levels and ensure compliance with international quality standards. Our laboratory team conducts chemical composition analysis, particle size distribution, moisture content testing, and contaminant screening. Detailed certificates of analysis accompany every shipment, providing full transparency on product specifications.",
  },
  {
    num: "3",
    title: "Processing",
    image: ProcessingImage,
    alt: "Moroccan material processing",
    text: "Materials are carefully processed and prepared according to client specifications and international standards. This stage includes crushing, grinding, screening, grading, and homogenization to achieve consistent particle size and chemical composition. Each lot is individually sampled, labeled, and stored in segregated inventory for complete traceability from mine to delivery.",
  },
  {
    num: "4",
    title: "Export",
    image: ExportImage,
    alt: "Material export from Morocco",
    text: "We handle all documentation, logistics, and shipping requirements to ensure timely delivery from Morocco to your destination. Our export team manages customs clearance, certificates of origin, weight and quality verification at port, and container loading supervision. We coordinate with major Moroccan ports — Casablanca, Jorf Lasfar, and Tangier Med — to optimize shipping routes and transit times for clients worldwide.",
  },
];

export default function MiningProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [canHover, setCanHover] = useState(false);

  // Respect the user's reduced-motion preference (client only).
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener?.("change", handleChange);
    return () => mediaQuery.removeEventListener?.("change", handleChange);
  }, []);

  // Only treat mouse/touch hover as "hover" on hover-capable devices,
  // so autoplay keeps running on touch-only screens.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    const handleChange = () => setCanHover(mediaQuery.matches);
    setCanHover(mediaQuery.matches);
    mediaQuery.addEventListener?.("change", handleChange);
    return () => mediaQuery.removeEventListener?.("change", handleChange);
  }, []);

  // Single autoplay timer. Paused while the user is hovering (manual control
  // always wins) and disabled entirely when reduced motion is preferred.
  useEffect(() => {
    if (isHovering || reducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isHovering, reducedMotion]);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="section-pill">
              Morocco's Mining Excellence
            </div>
            <h2 className="h2 font-red-hat-display mb-4">
              Our <span className="text-teal-700 dark:text-teal-400">Premium</span> Raw Materials
              Process
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-400">
              From extraction to final export, we ensure the highest quality
              through our rigorous and sustainable process.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-500 leading-relaxed mt-6">
              Every order follows a documented sequence of controlled stages — from deposit evaluation and selective extraction to laboratory analysis, processing, and certified packaging for international shipment. Our process is designed to give buyers full visibility into the quality and provenance of every ton we deliver.
            </p>
          </div>

          {/* Glow illustration */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 mt-20 lg:mt-40 pointer-events-none -z-1 dark:opacity-20 hidden md:block"
            aria-hidden="true"
            width={854}
            height="509"
            viewBox="0 0 854 509"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="processglow__a"
              >
                <stop stopColor="#14b8a6" offset="0%" />
                <stop stopColor="#14b8a6" stopOpacity="0" offset="100%" />
              </radialGradient>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="processglow__b"
              >
                <stop stopColor="#14b8a6" offset="0%" />
                <stop stopColor="#14b8a6" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".64"
                fill="url(#processglow__a)"
                cx="300"
                cy="300"
                r="300"
              />
              <circle
                fillOpacity=".72"
                fill="url(#processglow__b)"
                cx="729"
                cy="384"
                r="240"
              />
            </g>
          </svg>

          {/* Process steps - horizontal timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting line */}
            <div
              className="absolute h-1 bg-teal-200 dark:bg-teal-900 hidden md:block"
              style={{ top: "30px", left: "12%", right: "12%" }}
            ></div>

            {/* Process steps */}
            <div
              className="grid md:grid-cols-4 gap-8 md:gap-12"
              onMouseLeave={() => setIsHovering(false)}
            >
              {steps.map((step, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={step.num}
                    className="relative flex flex-col items-center cursor-pointer"
                    onMouseEnter={() => {
                      setActiveIndex(index);
                      if (canHover) setIsHovering(true);
                    }}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Number */}
                    <div
                      className={`relative w-16 h-16 rounded-full bg-teal-500 flex justify-center items-center text-white font-bold text-xl mb-6 z-10 transition-all duration-700 ease-out ${
                        isActive
                          ? "grayscale-0 scale-105"
                          : "grayscale"
                      }`}
                    >
                      {step.num}
                    </div>
                    {/* Image */}
                    <div
                      className={`relative w-full h-56 mb-3 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                        isActive ? "shadow-2xl ring-1 ring-teal-400/60" : "shadow-lg"
                      }`}
                    >
                      <Image
                        className={`object-cover w-full h-full transition-all duration-700 ease-out ${
                          isActive
                            ? "grayscale-0 scale-105"
                            : "grayscale brightness-90"
                        }`}
                        src={step.image}
                        width={300}
                        height={225}
                        alt={step.alt}
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex items-end">
                        <h3 className="text-xl font-bold text-white p-4">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Shared description frame - single fixed box below all four images */}
            <div className="mt-4 md:mt-6">
              <div className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md p-6 md:p-10">
                {/* Current step label */}
                <div
                  key={activeIndex}
                  className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6 animate-fade-in-up"
                >
                  <span className="w-8 h-8 rounded-full bg-teal-500 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {steps[activeIndex].num}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                    {steps[activeIndex].title}
                  </span>
                </div>

                {/* All paragraphs share the same grid cell, so the area never moves or resizes */}
                <div className="grid">
                  {steps.map((step, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <p
                        key={step.num}
                        className={`col-start-1 row-start-1 w-full text-center md:text-left transition-opacity duration-500 ease-in-out pointer-events-none ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden={!isActive}
                      >
                        {step.text}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center mt-12 md:mt-20">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Discover how our comprehensive process ensures quality,
                reliability, and transparency at every stage.
              </p>
              <Link
                href="/our-process"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-800 hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                View Full Process Details
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

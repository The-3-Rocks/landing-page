"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Import carousel images
import CarouselImage01 from "@/public/images/zinc-product.png";
import CarouselImage02 from "@/public/images/raw-material-lead.jpg";
import CarouselImage03 from "@/public/images/Barite-Clay.jpg";
import CarouselImage04 from "@/public/images/iron-product.png";
import CarouselImage05 from "@/public/images/antimony11.jpg";
import CarouselImage07 from "@/public/images/cobalt1.png";
import CarouselImage08 from "@/public/images/copper.jpeg";

// Import Swiper
import Swiper from "swiper";
import "swiper/swiper.min.css";

export default function MoroccoMaterialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Materials data with concise descriptions
  const materials = [
    {
      id: "lead",
      name: "Lead",
      image: CarouselImage02,
      description: "Premium Moroccan lead with exceptional purity",
      link: "/articles/lead",
      purity: "Up to 60% purity",
      color: "from-gray-600 to-gray-900",
    },
    {
      id: "zinc",
      name: "Zinc",
      image: CarouselImage01,
      description: "High-quality zinc calamine from Morocco",
      link: "/articles/zinc",
      purity: "Up to 30% purity",
      color: "from-blue-200 to-blue-400",
    },
    {
      id: "copper",
      name: "Copper",
      image: CarouselImage08,
      description: "Superior Moroccan copper resources",
      link: "/articles/acopper",
      purity: "Up to 8% purity",
      color: "from-amber-500 to-amber-700",
    },
    {
      id: "barite",
      name: "Barite",
      image: CarouselImage03,
      description: "Premium density Moroccan barite",
      link: "/articles/barite",
      purity: "Density 4.18-4.28",
      color: "from-gray-100 to-gray-400",
    },
    {
      id: "iron",
      name: "Iron",
      image: CarouselImage04,
      description: "High-grade Moroccan iron ore",
      link: "/articles/iron",
      purity: "Up to 52% purity",
      color: "from-slate-400 to-slate-600",
    },
    {
      id: "antimony",
      name: "Antimony",
      image: CarouselImage05,
      description: "Premium Moroccan antimony",
      link: "/articles/antimony",
      purity: "High density material",
      color: "from-gray-500 to-gray-700",
    },
    {
      id: "cobalt",
      name: "Cobalt",
      image: CarouselImage07,
      description: "Battery-grade Moroccan cobalt",
      link: "/articles/cobalt",
      purity: "Premium grade",
      color: "from-blue-700 to-blue-900",
    },
  ];

  // Function to manually navigate slides
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    // Initialize Swiper
    swiperRef.current = new Swiper(".materials-carousel", {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 800,
      loop: true,
      centeredSlides: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      // Important: Do NOT use the navigation object here
      // We'll handle navigation manually with our buttons
      on: {
        slideChange: function () {
          try {
            setActiveIndex(this.realIndex || 0);
          } catch (e) {
            setActiveIndex(0);
          }
        },
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
        swiperRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hidden SEO content */}
      <div className="sr-only">
        <h2>Premium Moroccan Mining Materials</h2>
        <p>
          Discover Morocco's exceptional mineral resources including lead, zinc,
          copper, barite, iron, antimony, and cobalt. High-quality raw materials
          sourced from Morocco's mineral-rich regions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-10">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-600 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
            Morocco's Premium Resources
          </div>
          <h2 className="h2 font-red-hat-display mb-4">
            Discover Morocco's Exceptional Minerals
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore our premium raw materials meticulously sourced from
            Morocco's mineral-rich regions.
          </p>
        </div>

        {/* Material quick links */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {materials.map((material) => (
            <Link
              key={material.id}
              href={material.link}
              className="group inline-flex items-center px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-200 text-gray-700 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-300 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-teal-900 dark:hover:text-teal-300 text-sm"
            >
              <span
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${material.color} mr-2`}
              ></span>
              <span>{material.name}</span>
            </Link>
          ))}
        </div>

        {/* Compact premium carousel */}
        <div className="relative materials-carousel-container">
          <div className="materials-carousel swiper-container overflow-visible pb-12">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              {materials.map((material) => (
                <div key={material.id} className="swiper-slide h-auto">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Image section - more compact */}
                    <div className="relative h-48 overflow-hidden">
                      {/* Main image */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${material.color} opacity-30 mix-blend-multiply z-10`}
                      ></div>
                      <Image
                        src={material.image}
                        alt={`Premium Moroccan ${material.name}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        width={400}
                        height={300}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Material label */}
                      <div className="absolute top-3 left-3 z-20">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white bg-opacity-90 text-gray-800 text-xs font-medium shadow-sm dark:bg-gray-900 dark:bg-opacity-80 dark:text-white">
                          {material.name}
                        </span>
                      </div>

                      {/* Purity badge */}
                      <div className="absolute top-3 right-3 z-20">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-medium dark:bg-teal-900 dark:text-teal-200">
                          {material.purity}
                        </span>
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
                    </div>

                    {/* Content section - compact */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {material.name}
                        </h3>
                        <div className="flex items-center text-xs text-teal-600 dark:text-teal-400">
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>Morocco</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {material.description}
                      </p>

                      {/* CTA button */}
                      <Link
                        href={material.link}
                        className="inline-flex items-center justify-center w-full px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 dark:bg-teal-700 dark:hover:bg-teal-600"
                      >
                        <span>Discover {material.name} Solutions</span>
                        <svg
                          className="w-4 h-4 ml-1.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fixed navigation controls - using onClick handlers */}
          <div className="flex items-center justify-center -mt-6 mb-4 relative z-10">
            <button
              onClick={handlePrevClick}
              className="mr-3 w-10 h-10 rounded-full flex items-center justify-center bg-white text-teal-600 hover:bg-teal-600 hover:text-white border border-gray-200 shadow-md transition-all duration-200 dark:bg-gray-800 dark:border-gray-700 dark:text-teal-400 dark:hover:bg-teal-600 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>

            {/* Pagination dots */}
            <div className="flex items-center space-x-1.5">
              {materials.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-teal-500 w-4"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextClick}
              className="ml-3 w-10 h-10 rounded-full flex items-center justify-center bg-white text-teal-600 hover:bg-teal-600 hover:text-white border border-gray-200 shadow-md transition-all duration-200 dark:bg-gray-800 dark:border-gray-700 dark:text-teal-400 dark:hover:bg-teal-600 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Morocco resources banner - compact */}
        {/* Morocco resources banner - compact */}
        <div className="mt-10 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-700 dark:to-teal-800 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-5 sm:px-8 sm:py-6 text-white flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold">
                Morocco's Premium Mining Resources
              </h3>
              <p className="text-teal-100 text-sm mt-1">
                Discover our high-quality materials sourced from Morocco
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-white text-teal-700 hover:bg-teal-50 text-sm font-medium rounded-lg shadow transition-colors duration-200"
            >
              Request Information
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

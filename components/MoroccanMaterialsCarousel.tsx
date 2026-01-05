"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Import images
import LeadImage from "@/public/images/lead-product.jpg";

import ZincImage from "@/public/images/zinc-product.png";
import BariteImage from "@/public/images/barite-product.png";
import CobaltImage from "@/public/images/cobalt1.png";
import AntimonyImage from "@/public/images/antimony11.jpg";
import CopperImage from "@/public/images/copper1.png";

// Import Swiper
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Configure Swiper modules
// Swiper.use([Autoplay, Navigation, Pagination]); // REMOVED: Causing conflict with props modules

const materials = [
  {
    id: "cobalt",
    title: "Cobalt",
    category: "Battery Metals",
    description: "High-purity cobalt essential for the rechargeable battery revolution.",
    image: CobaltImage,
    link: "/products/cobalt",
  },
  {
    id: "lead",
    title: "Lead",
    category: "Industrial Base",
    description: "Premium lead concentrates renowned for exceptional purity levels.",
    image: LeadImage,
    link: "/products/lead",
  },
  {
    id: "zinc",
    title: "Zinc",
    category: "Galvanization",
    description: "Top-tier zinc calamine for widespread industrial application.",
    image: ZincImage,
    link: "/products/zinc",
  },
  {
    id: "copper",
    title: "Copper",
    category: "Conductive",
    description: "Superior grade copper ore powering modern infrastructure.",
    image: CopperImage,
    link: "/products/copper",
  },
  {
    id: "barite",
    title: "Barite",
    category: "Energy Sector",
    description: "High-density barite meeting strict API drilling standards.",
    image: BariteImage,
    link: "/products/barite",
  },

  {
    id: "antimony",
    title: "Antimony",
    category: "Specialty",
    description: "Critical raw material for flame retardants and advanced tech.",
    image: AntimonyImage,
    link: "/products/antimony",
  },
];

export default function MoroccanMaterialsCarousel() {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    // Ensure Swiper is initialized only on client side
    if (typeof window !== 'undefined') {
        swiperRef.current = new Swiper(".moroccan-carousel", {
        modules: [Autoplay, Navigation, Pagination],
        spaceBetween: 32,
        slidesPerView: 1,
        slidesPerGroup: 1,
        breakpoints: {
            640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            },
            1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            },
        },
        loop: true,
        speed: 800,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".modern-next",
            prevEl: ".modern-prev",
        },
        } as any);
    }

    return () => {
      if (swiperRef.current) swiperRef.current.destroy();
    };
  }, []);

  return (
    <section className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Modern Minimal Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
                <span className="block text-teal-600 dark:text-teal-400 font-bold tracking-wider text-sm uppercase mb-3">
                    Verified Moroccan Source
                </span>
                <h2 className="text-4xl md:text-5xl font-red-hat-display font-bold text-gray-900 dark:text-white leading-tight">
                    Exceptional <span className="relative z-10 box-decoration-clone bg-teal-50 dark:bg-teal-900/30 px-2 rounded-lg text-teal-900 dark:text-teal-100">Minerals</span>
                </h2>
                <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 font-light">
                    Sustainably extracted raw materials for the global market.
                </p>
            </div>
            
            {/* Minimalist Navigation */}
            <div className="flex items-center gap-4">
                <button className="modern-prev w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group">
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <button className="modern-next w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group">
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </div>

        {/* Carousel */}
        <div className="moroccan-carousel swiper-container !overflow-visible">
            <div className="swiper-wrapper">
            {materials.map((item) => (
                <div key={item.id} className="swiper-slide opacity-100 transition-opacity duration-300">
                    <Link href={item.link} className="block group h-full">
                        <article className="h-full flex flex-col bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all duration-500 hover:shadow-xl dark:hover:shadow-teal-900/10">
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-700">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide text-gray-900 dark:text-white shadow-sm">
                                    {item.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow relative">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                                    {item.description}
                                </p>
                                <div className="flex items-center text-teal-700 dark:text-teal-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                    View Specifications
                                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    </Link>
                </div>
            ))}
            </div>
            
            {/* Pagination Dots */}
            <div className="swiper-pagination !static !mt-12"></div>
        </div>

        {/* New Premium CTA Banner */}
        <div className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gray-900 dark:bg-gray-800">
                {/* Abstract bg shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-800/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
            </div>
            
            <div className="relative z-10 px-8 py-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-red-hat-display mb-4">
                        Ready to secure your supply?
                    </h3>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        Connect with our Morocco-based team for detailed composition reports, pricing models, and logistics planning.
                    </p>
                </div>
                
                <Link 
                    href="/contact" 
                    className="group whitespace-nowrap inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-white rounded-xl shadow-lg hover:bg-teal-50 hover:shadow-teal-500/20 transform hover:-translate-y-1 transition-all duration-300"
                >
                    Request Partner Access
                    <svg className="w-5 h-5 ml-2 text-teal-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>
        </div>
      </div>

      <style jsx global>{`
        .moroccan-carousel .swiper-pagination-bullet {
            background: #D1D5DB;
            opacity: 1;
            width: 10px;
            height: 10px;
            transition: all 0.3s;
        }
        .moroccan-carousel .swiper-pagination-bullet-active {
            background: #0D9488; /* Teal 600 */
            width: 30px;
            border-radius: 5px;
        }
        .dark .moroccan-carousel .swiper-pagination-bullet {
            background: #374151;
        }
        .dark .moroccan-carousel .swiper-pagination-bullet-active {
            background: #2DD4BF; /* Teal 400 */
        }
      `}</style>
    </section>
  );
}

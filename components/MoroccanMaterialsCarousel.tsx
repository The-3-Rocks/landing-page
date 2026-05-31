"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CardStack,
  CardStackItem,
  CardStackHandle,
} from "@/components/ui/card-stack";

// Import images
import LeadImage from "@/public/images/lead-product.jpg";
import ZincImage from "@/public/images/zinc11.jpeg";
import BariteImage from "@/public/images/barite11.jpeg";
import CobaltImage from "@/public/images/cobalt11.jpg";
import AntimonyImage from "@/public/images/antimony11.jpg";
import CopperImage from "@/public/images/copper1.png";

const materials: (CardStackItem & { image: any })[] = [
  {
    id: "lead",
    title: "Lead",
    tag: "Industrial Base",
    description:
      "Premium lead concentrates renowned for exceptional purity levels.",
    image: LeadImage,
    imageSrc: LeadImage.src,
    href: "/products",
  },
  {
    id: "cobalt",
    title: "Cobalt",
    tag: "Battery Metals",
    description:
      "High-purity cobalt essential for the rechargeable battery revolution.",
    image: CobaltImage,
    imageSrc: CobaltImage.src,
    href: "/products",
  },
  {
    id: "zinc",
    title: "Zinc",
    tag: "Galvanization",
    description:
      "Top-tier zinc calamine for widespread industrial application.",
    image: ZincImage,
    imageSrc: ZincImage.src,
    href: "/products",
  },
  {
    id: "copper",
    title: "Copper",
    tag: "Conductive",
    description: "Superior grade copper ore powering modern infrastructure.",
    image: CopperImage,
    imageSrc: CopperImage.src,
    href: "/products",
  },
  {
    id: "barite",
    title: "Barite",
    tag: "Energy Sector",
    description: "High-density barite meeting strict API drilling standards.",
    image: BariteImage,
    imageSrc: BariteImage.src,
    href: "/products",
  },
  {
    id: "antimony",
    title: "Antimony",
    tag: "Specialty",
    description:
      "Critical raw material for flame retardants and advanced tech.",
    image: AntimonyImage,
    imageSrc: AntimonyImage.src,
    href: "/products",
  },
];

export default function MoroccanMaterialsCarousel() {
  const cardStackRef = useRef<CardStackHandle>(null);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      style={{ marginTop: -68 }}
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ marginTop: -36 }}>
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
            Morocco's Mining Excellence
          </div>
          <h2 className="h2 font-red-hat-display mb-4">
            Our <span className="text-teal-700 dark:text-teal-400">Premium</span> Raw Materials
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400">
            Sustainably extracted and rigorously tested — from Morocco's mines to
            global markets.
          </p>

        </div>

        {/* CardStack with flanking buttons */}
        <div className="relative">
          {/* Prev button - left side */}
          <button
            onClick={() => cardStackRef.current?.prev()}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 group -ml-16"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>

          <CardStack
            ref={cardStackRef}
            items={materials}
            initialIndex={0}
            autoAdvance
            intervalMs={4000}
            pauseOnHover
            showDots
            maxVisible={5}
            cardWidth={400}
            cardHeight={440}
            overlap={0.35}
            spreadDeg={28}
            activeScale={1.08}
            inactiveScale={0.9}
            perspectivePx={1300}
            depthPx={180}
            renderCard={(item, { active }) => (
              <MaterialCard item={item as typeof materials[number]} active={active} />
            )}
          />

          {/* Next button - right side */}
          <button
            onClick={() => cardStackRef.current?.next()}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 group -mr-16"
          >
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function MaterialCard({
  item,
  active,
}: {
  item: (typeof materials)[number];
  active: boolean;
}) {
  return (
    <div className="relative h-full w-full">
      {/* Background image */}
      <Image
        src={item.image}
        alt={item.title}
        className="object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 480px"
      />

      {/* Category badge */}
      {item.tag && (
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide text-gray-900 dark:text-white shadow-sm">
          {item.tag}
        </div>
      )}

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-sm text-white/80 leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
        <Link
          href={item.href || "#"}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center text-teal-400 font-semibold text-sm hover:translate-x-2 transition-transform duration-300"
        >
          View Specifications
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

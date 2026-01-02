"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import LeadImage from "@/public/images/lead-product.jpg";
import IronImage from "@/public/images/moroccan-iron-ore.png";
import ZincImage from "@/public/images/zinc-product.png";
import BariteImage from "@/public/images/barite-product.png";

const materials = [
  {
    id: "lead",
    title: "Lead",
    description: "Versatile and reliable lead solutions mainly used for batteries.",
    image: LeadImage,
    link: "/articles/lead",
    color: "bg-teal-500",
  },
  {
    id: "barite",
    title: "Barite",
    description: "Premium barite for oil, gas, healthcare, and construction.",
    image: BariteImage,
    link: "/articles/barite",
    color: "bg-pink-500",
  },
  {
    id: "iron",
    title: "Iron",
    description: "High-quality iron for construction and manufacturing infrastructure.",
    image: IronImage,
    link: "/articles/iron",
    color: "bg-purple-500",
  },
  {
    id: "zinc",
    title: "Zinc",
    description: "Top-quality zinc products for diverse industrial needs.",
    image: ZincImage,
    link: "/articles/zinc",
    color: "bg-indigo-500",
  },
];

export default function MoroccanMaterialsCarousel() {
  return (
    <section className="relative mt-12 md:mt-20" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative">
          <h2 className="h3 font-red-hat-display mb-8 text-center text-gray-900 dark:text-gray-100">
            Our Premium Moroccan Materials
          </h2>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation={true}
            className="pb-12 !px-4" // Padding for shadow/hover effects
          >
            {materials.map((material) => (
              <SwiperSlide key={material.id} className="h-full">
                <div className="relative group h-full overflow-hidden rounded-2xl shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Image & Overlay */}
                  <figure className="relative h-64 overflow-hidden">
                    <Image
                      src={material.image}
                      alt={`Moroccan ${material.title}`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={60}
                    />
                    <div
                      className={`absolute inset-0 ${material.color} opacity-20 transition-opacity duration-300 group-hover:opacity-10`}
                    />
                  </figure>

                  {/* Content */}
                  <div className="relative bg-white dark:bg-gray-800 p-6">
                    <h3 className="h4 font-red-hat-display mb-2 text-gray-900 dark:text-gray-100">
                      <Link href={material.link}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {material.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {material.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

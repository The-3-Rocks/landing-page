"use client";

import React from "react";
import Image from "next/image";

// Import images
import MiningHeroImage from "@/public/images/company.jpeg";

export default function HeroAbout() {
  return (
    <section className="relative">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none -z-10"
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content area */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
              <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-up">
                Morocco's Premier Mining Experts
              </h1>
              <p
                className="text-xl text-gray-600 dark:text-gray-400 mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                The<span className="text-teal-400">3</span>Rocks Moroccan Mining
                Company brings generations of expertise to mineral extraction in
                Morocco's rich geological landscapes. Our commitment to
                sustainable Moroccan mining practices has established us as
                leaders in Morocco's mineral industry.
              </p>
              <div
                className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a
                  className="btn text-white bg-teal-500 hover:bg-teal-400 w-full sm:w-auto"
                  href="#mining-heritage"
                >
                  Our Moroccan Mining Heritage
                </a>
                <a
                  className="btn text-white bg-gray-700 hover:bg-gray-600 w-full sm:w-auto"
                  href="/contact"
                >
                  Contact Morocco's Mining Experts
                </a>
              </div>
            </div>

            {/* Image area */}
            <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="300">
              <div className="relative">
                <Image
                  className="mx-auto md:max-w-none rounded-lg shadow-xl"
                  src={MiningHeroImage}
                  width={540}
                  height={405}
                  priority
                  alt="The 3 Rocks mining operations in Morocco's mineral-rich mountains"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-purple-500 opacity-15 rounded-lg"></div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="text-3xl font-bold text-teal-500">+21</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years of Moroccan
                    <br />
                    Mining Excellence
                  </div>
                </div>
                <div
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="text-3xl font-bold text-teal-500">+7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Premium Moroccan
                    <br />
                    Minerals & Metals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

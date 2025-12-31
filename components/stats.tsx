"use client";
import { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";

export default function StatsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const [autorotateTiming] = useState(3000);

  const slides = [
    {
      name: "Lead",
      content: "+70 %",
      stock: "+800",
      clients: "79",
      periodicTable: "Pb",
    },
    // {
    //   name: "Amber",
    //   content: "Pure",
    //   stock: "+60",
    //   clients: "2",
    //   periodicTable: "Am",
    // },
    {
      name: "Barite",
      content: "+4",
      stock: "+400",
      clients: "113",
      periodicTable: "Ba",
    },
    {
      name: "Zinc",
      content: "+30",
      stock: "+120",
      clients: "26",
      periodicTable: "Zn",
    },
    {
      name: "Iron",
      content: "+50 %",
      stock: "+40K",
      clients: "52",
      periodicTable: "Fe",
    },
    {
      name: "Antimony",
      content: "+30 %",
      stock: "+700",
      clients: "14",
      periodicTable: "Sb",
    },
    {
      name: "Cobalt",
      content: "+40 %",
      stock: "+84",
      clients: "New",
      periodicTable: "CoAsS",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [currentSlide, autorotate, slides.length, autorotateTiming]);


  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden"
        aria-hidden="true"
      ></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="relative">
            <div
              className="relative flex flex-col items-start z-10 transition-all duration-300 ease-in-out h-full"
            >
              {slides.map((slide, index) => (
                <Transition
                  key={index}
                  show={currentSlide === index}
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-8"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-8"
                  unmount={false}
                >
                  <div className="w-full text-center px-12 py-8 mx-4 md:mx-0">
                    <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center">
                      <div
                        className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
                        data-aos="fade-down"
                        data-aos-anchor="[data-aos-id-stats]"
                      >
                        <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                          {slide.periodicTable}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          Raw material
                        </div>
                      </div>
                      <div
                        className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
                        data-aos="fade-down"
                        data-aos-anchor="[data-aos-id-stats]"
                        data-aos-delay="100"
                      >
                        <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                          {slide.content}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          The {slide.name.toLowerCase()} content
                        </div>
                      </div>
                      <div
                        className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
                        data-aos="fade-down"
                        data-aos-anchor="[data-aos-id-stats]"
                        data-aos-delay="200"
                      >
                        <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                          {slide.stock}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          Our stock (Tons)
                        </div>
                      </div>
                      <div
                        className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
                        data-aos="fade-down"
                        data-aos-anchor="[data-aos-id-stats]"
                        data-aos-delay="300"
                      >
                        <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                          {slide.clients}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          Satisfied clients
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              ))}
            </div>

            {/* Skewed borders */}
            <div
              className="absolute inset-0 transform -skew-x-3 border-2 border-gray-200 dark:border-gray-800 pointer-events-none"
              aria-hidden="true"
            ></div>

            {/* Arrows */}
            {/* <div className="absolute inset-0 flex items-center justify-between">
              <button
                className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform -translate-x-2 md:-translate-x-1/2 bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 transition duration-150 ease-in-out"
                onClick={() => { setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1); setAutorotate(false); }}
              >
                <span className="sr-only">Previous</span>
                <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                </svg>
              </button>
              <button
                className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform translate-x-2 md:translate-x-1/2 bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 transition duration-150 ease-in-out"
                onClick={() => { setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1); setAutorotate(false); }}
              >
                <span className="sr-only">Next</span>
                <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

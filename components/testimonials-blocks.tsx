import Image from "next/image";
import TestimonialImage01 from "@/public/images/testimonial-01.png";
import TestimonialImage02 from "@/public/images/testimonial-02.png";
import TestimonialImage03 from "@/public/images/testimonial-03.png";
import TestimonialImage04 from "@/public/images/testimonial-04.png";

export default function TestimonialsBlocks() {
  const size = 180;
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
            {/* 1st testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={TestimonialImage01}
                  width={size}
                  height={size}
                  alt="Testimonial 01"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-teal-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ Hi, I am Lead, or as my pals call me, "Plumbum." I'm the
                heavy-duty, laid-back metal with a bluish-gray complexion. I’m
                great at shielding radiation, making batteries, and even showing
                up in some make-up products. Just think of me as the sturdy
                guardian of the metal world! “
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">Lead Guardian</cite>,{" "}
                <cite
                  className="text-teal-500 transition duration-150 ease-in-out not-italic"
                >
                  Ancient Rome
                </cite>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={TestimonialImage02}
                  width={size}
                  height={size}
                  alt="Testimonial 02"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-teal-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ Hi, I am Zinc, also known as "Zn the Shiny One." I'm the
                superhero of the metal world, fighting off rust and keeping
                things fresh. I’m found in everything from sunscreen to
                batteries. You can say I'm the multi-talented rockstar of the
                periodic table! “
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">Zinc Shiny</cite>,{" "}
                <cite
                  className="text-teal-500 transition duration-150 ease-in-out not-italic"
                >
                  Earth's Crust
                </cite>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={TestimonialImage03}
                  width={size}
                  height={size}
                  alt="Testimonial 03"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-teal-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ Hi, I am Barite, but you can call me "Bary the Rock." I'm a
                mineral made of barium sulfate, usually dressed in white or
                colorless. My claim to fame? I hang out in the oil and gas
                industry, where I help keep things cool and under control in
                drilling muds. Think of me as the chill supervisor of the drill
                party! “
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Bary Rock</cite>,{" "}
                <cite
                  className="text-teal-500 transition duration-150 ease-in-out not-italic"
                >
                  Veins
                </cite>
              </div>
            </div>

            {/* 4th testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={TestimonialImage04}
                  width={size}
                  height={size}
                  alt="Testimonial 04"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-teal-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ Hi, I am Iron, but my friends call me "Fe." I'm the strong,
                silent type with a steely demeanor. You can find me in
                everything from your cereal to your car! I’m the backbone of
                construction and manufacturing. Think of me as the muscle behind
                the metal. “
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Iron Strong</cite>,{" "}
                <cite
                  className="text-teal-500 transition duration-150 ease-in-out not-italic"
                  
                >
                  Earth's Core
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

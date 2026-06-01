"use client";
import Image from "next/image";
import RelatedImage01 from "@/public/images/lead-product.webp";
import RelatedImage02 from "@/public/images/moroccan-iron-ore.webp";
import RelatedImage03 from "@/public/images/zinc-product.webp";
import RelatedImage04 from "@/public/images/barite-product.webp";
import { usePathname } from "next/navigation";

export default function RelatedPosts02() {
  const currentPath = usePathname();

  return (
    <aside>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <h4 className="h4 font-red-hat-display mb-8">Related products</h4>

            {/* Articles container */}
            <div
              className="grid gap-4 sm:gap-6 sm:grid-cols-3"
              data-aos-id-relposts
            >
              {/* Lead article */}
              {currentPath !== "/articles/lead" && (
                <article
                  className="relative group p-6 text-white"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-relposts]"
                >
                  <figure>
                    <Image
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out"
                      src={RelatedImage01}
                      alt="Lead product"
                    />
                    <div
                      className="absolute inset-0 bg-teal-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out"
                      aria-hidden="true"
                    ></div>
                  </figure>
                  <div className="relative flex flex-col h-full">
                    <header className="grow">
                      <a className="hover:underline" href="/articles/lead">
                        <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                          What makes lead indispensable across various
                          industries, and how does The
                          <span className="text-teal-400">3</span>rocks provide
                          versatile and reliable lead solutions to meet these
                          needs?
                        </h3>
                      </a>
                      <div className="text-sm opacity-80">Nov 16, 2020</div>
                    </header>
                  </div>
                </article>
              )}

              {/* Barite article */}
              {currentPath !== "/articles/barite" && (
                <article
                  className="relative group p-6 text-white"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-relposts]"
                  data-aos-delay="200"
                >
                  <figure>
                    <Image
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out"
                      src={RelatedImage04}
                      alt="Barite product"
                    />
                    <div
                      className="absolute inset-0 bg-pink-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out"
                      aria-hidden="true"
                    ></div>
                  </figure>
                  <div className="relative flex flex-col h-full">
                    <header className="grow">
                      <a className="hover:underline" href="/articles/barite">
                        <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                          What makes barite essential for industries like oil
                          and gas, healthcare, and construction, and how does
                          The<span className="text-teal-400">3</span>rocks
                          supply premium barite products?
                        </h3>
                      </a>
                      <div className="text-sm opacity-80">Nov 12, 2020</div>
                    </header>
                  </div>
                </article>
              )}

              {/* Iron article */}
              {currentPath !== "/articles/iron" && (
                <article
                  className="relative group p-6 text-white"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-relposts]"
                  data-aos-delay="400"
                >
                  <figure>
                    <Image
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out"
                      src={RelatedImage02}
                      alt="Iron product"
                    />
                    <div
                      className="absolute inset-0 bg-purple-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out"
                      aria-hidden="true"
                    ></div>
                  </figure>
                  <div className="relative flex flex-col h-full">
                    <header className="grow">
                      <a className="hover:underline" href="/articles/iron">
                        <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                          What makes iron indispensable for construction,
                          manufacturing, and infrastructure, and how does The
                          <span className="text-teal-400">3</span>rocks provide
                          high-quality iron products for these applications?
                        </h3>
                      </a>
                      <div className="text-sm opacity-80">Nov 12, 2020</div>
                    </header>
                  </div>
                </article>
              )}

              {/* Zinc article */}
              {currentPath !== "/articles/zinc" && (
                <article
                  className="relative group p-6 text-white"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-relposts]"
                  data-aos-delay="600"
                >
                  <figure>
                    <Image
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out"
                      src={RelatedImage03}
                      alt="Zinc product"
                    />
                    <div
                      className="absolute inset-0 bg-indigo-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out"
                      aria-hidden="true"
                    ></div>
                  </figure>
                  <div className="relative flex flex-col h-full">
                    <header className="grow">
                      <a className="hover:underline" href="/articles/zinc">
                        <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                          What makes zinc indispensable in modern industries,
                          and how does The
                          <span className="text-teal-400">3</span>rocks provide
                          top-quality zinc products to meet diverse industrial
                          needs?
                        </h3>
                      </a>
                      <div className="text-sm opacity-80">Nov 12, 2020</div>
                    </header>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

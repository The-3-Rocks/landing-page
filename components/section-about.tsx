import Image from "next/image";
import Link from "next/link";
import { Gem, Handshake, Leaf } from "lucide-react";
import aboutImage from "@/public/images/company.webp";

const values = [
  {
    icon: Gem,
    title: "Quality",
    description:
      "Certified, consistent, premium-grade minerals from Morocco&rsquo;s richest deposits. Every shipment is backed by independent lab analysis and meets international specifications.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description:
      "Transparent documentation, reliable delivery, and a single point of contact from inquiry to port. We respond within 24 hours and deliver what we promise.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Ethical sourcing and environmentally responsible mining practices that minimize ecological impact while maximizing resource efficiency for future generations.",
  },
];

export default function SectionAbout() {
  return (
    <section className="bg-[#fafafa] dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="section-pill">About Us</div>
          <h2 className="section-title">
            About The 3 Rocks — Morocco&rsquo;s{" "}
            <span className="text-teal-700 dark:text-teal-400">
              Premier Mineral Exporter
            </span>
          </h2>
        </div>

        <div
          className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center"
          data-aos="fade-up"
        >
          <div className="relative">
            <Image
              className="mx-auto md:max-w-none rounded-lg shadow-xl"
              src={aboutImage}
              width={540}
              height={405}
              priority
              alt="The 3 Rocks mining operations in Morocco's mineral-rich mountains"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-purple-500 opacity-15 rounded-lg pointer-events-none"></div>
          </div>

          <div>
            <h3 className="h3 font-red-hat-display mb-4 text-gray-900 dark:text-white">
              What&rsquo;s in a Name?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              The 3 Rocks represents our three core commitments&mdash;the
              foundation upon which every shipment, partnership, and
              relationship is built.
            </p>

            <div className="space-y-5">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#e1f5ee" }}
                  >
                    <v.icon size={18} color="#1d9e75" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {v.title}
                    </h4>
                    <p
                      className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: v.description }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium transition-colors group"
              >
                <span>Discover Our Story</span>
                <svg
                  className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="grid md:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative p-7 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md bg-white dark:bg-gray-800"
              style={{ border: "0.5px solid #e5e5e5" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "#e1f5ee" }}
              >
                <v.icon size={22} color="#1d9e75" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {v.title}
              </h3>
              <p
                className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: v.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

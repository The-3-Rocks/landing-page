import Image from "next/image";
import Link from "next/link";

// Import process images - replace these with your actual mining process images
import ExtractionImage from "@/public/images/extraction1.png";
import ProcessingImage from "@/public/images/process.png";
import ExportImage from "@/public/images/export1.png";
import AnalysisImage from "@/public/images/analyses11.png";

export default function MiningProcess() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
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
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div
              className="absolute h-1 bg-teal-200 dark:bg-teal-900 hidden md:block"
              style={{ top: "30px", left: "12%", right: "12%" }}
            ></div>

            {/* Process steps */}
            <div className="grid md:grid-cols-4 gap-8 md:gap-12">
              {/* Step 1: Extraction */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
              >
                {/* Number */}
                <div className="w-16 h-16 rounded-full bg-teal-500 flex justify-center items-center text-white font-bold text-xl mb-6 z-10">
                  1
                </div>
                {/* Image */}
                <div className="relative w-full h-56 mb-6 shadow-lg rounded-lg overflow-hidden">
                  <Image
                    className="object-cover w-full h-full"
                    src={ExtractionImage}
                    width={300}
                    height={225}
                    alt="Moroccan raw material extraction"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">
                      Extraction
                    </h3>
                  </div>
                </div>
                {/* Description */}
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    We extract raw materials from Morocco using sustainable
                    methods that minimize environmental impact while maximizing
                    resource quality. Our mining partners employ selective extraction techniques tailored to each deposit's geology, reducing waste and preserving high-grade material. All operations follow Moroccan mining regulations and international safety standards, with ongoing rehabilitation of extraction sites.
                  </p>
                </div>
              </div>

              {/* Step 2: Processing & Analysis */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Number */}
                <div className="w-16 h-16 rounded-full bg-teal-500 flex justify-center items-center text-white font-bold text-xl mb-6 z-10">
                  2
                </div>
                {/* Image */}
                <div className="relative w-full h-56 mb-6 shadow-lg rounded-lg overflow-hidden">
                  <Image
                    className="object-cover w-full h-full"
                    src={AnalysisImage}
                    width={300}
                    height={225}
                    alt="Moroccan material analysis"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">
                      Analysis
                    </h3>
                  </div>
                </div>
                {/* Description */}
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    Each batch undergoes rigorous testing and analysis to verify
                    purity levels and ensure compliance with international
                    quality standards. Our laboratory team conducts chemical composition analysis, particle size distribution, moisture content testing, and contaminant screening. Detailed certificates of analysis accompany every shipment, providing full transparency on product specifications.
                  </p>
                </div>
              </div>

              {/* Step 3: Processing */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* Number */}
                <div className="w-16 h-16 rounded-full bg-teal-500 flex justify-center items-center text-white font-bold text-xl mb-6 z-10">
                  3
                </div>
                {/* Image */}
                <div className="relative w-full h-56 mb-6 shadow-lg rounded-lg overflow-hidden">
                  <Image
                    className="object-cover w-full h-full"
                    src={ProcessingImage}
                    width={300}
                    height={225}
                    alt="Moroccan material processing"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">
                      Processing
                    </h3>
                  </div>
                </div>
                {/* Description */}
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    Materials are carefully processed and prepared according to
                    client specifications and international standards. This stage includes crushing, grinding, screening, grading, and homogenization to achieve consistent particle size and chemical composition. Each lot is individually sampled, labeled, and stored in segregated inventory for complete traceability from mine to delivery.
                  </p>
                </div>
              </div>

              {/* Step 4: Export */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {/* Number */}
                <div className="w-16 h-16 rounded-full bg-teal-500 flex justify-center items-center text-white font-bold text-xl mb-6 z-10">
                  4
                </div>
                {/* Image */}
                <div className="relative w-full h-56 mb-6 shadow-lg rounded-lg overflow-hidden">
                  <Image
                    className="object-cover w-full h-full"
                    src={ExportImage}
                    width={300}
                    height={225}
                    alt="Material export from Morocco"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">Export</h3>
                  </div>
                </div>
                {/* Description */}
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    We handle all documentation, logistics, and shipping
                    requirements to ensure timely delivery from Morocco to your
                    destination. Our export team manages customs clearance, certificates of origin, weight and quality verification at port, and container loading supervision. We coordinate with major Moroccan ports — Casablanca, Jorf Lasfar, and Tangier Med — to optimize shipping routes and transit times for clients worldwide.
                  </p>
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

import Image from "next/image";
import Link from "next/link";

import ExtractionImage from "@/public/images/extraction1.webp";
import AnalysisImage from "@/public/images/analyses11.webp";
import ProcessingImage from "@/public/images/process.webp";
import ExportImage from "@/public/images/export1.webp";

const steps = [
  {
    num: "01",
    title: "Extraction",
    desc: "Field geologists identify and evaluate deposits. Selective extraction techniques tailored to each deposit&rsquo;s geology minimize waste while preserving high-grade material.",
    image: ExtractionImage,
    alt: "Moroccan raw material extraction",
  },
  {
    num: "02",
    title: "Analysis",
    desc: "Each batch undergoes XRF and ICP testing for chemical composition, impurities, moisture, and particle size at ISO 17025-accredited laboratories in Casablanca and Rabat.",
    image: AnalysisImage,
    alt: "Moroccan material analysis",
  },
  {
    num: "03",
    title: "Processing",
    desc: "Crushing, grinding, screening, grading, and homogenization to meet buyer specification. Each lot is individually sampled, labelled, and stored for complete traceability.",
    image: ProcessingImage,
    alt: "Moroccan material processing",
  },
  {
    num: "04",
    title: "Export",
    desc: "Customs clearance, documentation, and container loading at Casablanca, Tangier Med, or Jorf Lasfar. Live tracking from loading to discharge.",
    image: ExportImage,
    alt: "Material export from Morocco",
  },
];

export default function SectionProcess() {
  return (
    <section className="bg-[#fafafa] dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="section-pill">Morocco&rsquo;s Mining Excellence</div>
          <h2 className="section-title">
            Our <span className="text-teal-700 dark:text-teal-400">Premium</span> Raw Materials Process
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ border: "0.5px solid #e5e5e5" }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <Image
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  src={step.image}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  alt={step.alt}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <span
                    className="text-[40px] font-bold leading-none"
                    style={{ color: "#1d9e75", opacity: 0.7 }}
                  >
                    {step.num}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <p className="text-[15px] text-gray-500 dark:text-gray-400 mb-5">
            Discover how our comprehensive process ensures quality, reliability, and transparency at every stage.
          </p>
          <Link
            href="/our-process"
            className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#1d9e75" }}
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
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// app/our-process/page.tsx
import Image from "next/image";
import Link from "next/link";
import PageIllustration from "@/components/page-illustration";
import CtaContact from "@/components/cta-contact";
import Cta from "@/components/cta";

export const metadata = {
  title: "Our Process | The 3 Rocks",
  description:
    "Learn about The 3 Rocks' efficient and sustainable process for extracting, processing, and exporting premium raw materials worldwide.",
};

export default function ProcessPage() {
  return (
    <>
      {/* Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      {/* Hero section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-600 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
                Morocco's Premium Mining Process
              </div>
              <h1 className="h1 font-red-hat-display mb-4">
                Our <span className="text-teal-500">Process</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                From extraction to delivery, discover how we ensure the highest
                quality Moroccan raw materials through our meticulous process
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
                data-aos="fade-right"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-500 text-white mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="h3 font-red-hat-display">Our Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Our mission is to successfully extract, process, and export
                  premium raw materials with exceptional purity levels, ensuring
                  high-quality processing, timely delivery, and smooth
                  transactions. We are committed to meeting our clients'
                  expectations with reliability, transparency, and efficiency.
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
                data-aos="fade-left"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-500 text-white mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="h3 font-red-hat-display">Our Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  We aim to expand our operations by increasing export volumes
                  and working with a broader range of raw materials. Our goal is
                  to build strong and long-term partnerships with our clients,
                  fostering trust and growth for both parties while
                  strengthening our position in the international market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Export Process section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 text-white mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="h2 font-red-hat-display mb-4">
                Our Moroccan Export Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                A streamlined step-by-step procedure to ensure smooth
                transactions and timely delivery
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Vertical line for desktop */}
                <div
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                  aria-hidden="true"
                ></div>

                {/* Steps container with improved mobile layout */}
                <div className="space-y-8 md:space-y-0">
                  {[
                    {
                      step: "01",
                      title: "Contract Signing",
                      description:
                        "Both parties sign the sales contract to finalize terms and specifications for the raw materials.",
                      align: "right",
                    },
                    {
                      step: "02",
                      title: "Material Collection",
                      description:
                        "The raw materials are transported to our depot within a maximum of three weeks for processing and preparation.",
                      align: "left",
                    },
                    {
                      step: "03",
                      title: "Inspection & Approval",
                      description:
                        "The buyer has the option to visit our facilities to inspect the available stock before proceeding.",
                      align: "right",
                    },
                    {
                      step: "04",
                      title: "Financial Arrangements",
                      description:
                        "Secure payment  Letter of Credit (LC) and Telegraphic Transfer (TT), with optional on-site stock inspection for buyer's confidence.",
                      align: "left",
                      special: true,
                    },
                    {
                      step: "05",
                      title: "Processing & Analysis",
                      description:
                        "The raw materials undergo processing as needed, and detailed analysis reports are prepared to verify quality and specifications.",
                      align: "right",
                    },
                    {
                      step: "06",
                      title: "Packaging & Preparation",
                      description:
                        "The materials are properly packed and stored in containers according to international shipping standards, ready for export.",
                      align: "left",
                    },
                    {
                      step: "07",
                      title: "Transportation & Shipping",
                      description:
                        "The containers are transported to the port and loaded onto the ship for export to the destination country.",
                      align: "right",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="relative md:grid md:grid-cols-12 md:gap-8 items-center"
                    >
                      {/* Desktop Layout */}
                      {item.align === "right" ? (
                        <>
                          <div className="md:col-span-5 md:text-right md:pr-12 md:border-r md:border-gray-200 dark:md:border-gray-700">
                            <div className="hidden md:block mb-4 text-right">
                              <h3 className="h4 font-red-hat-display mb-2">
                                {item.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <div className="hidden md:flex md:col-span-2 justify-center">
                            <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center">
                              <span className="text-lg font-bold">
                                {item.step}
                              </span>
                            </div>
                          </div>
                          <div className="md:col-span-5 md:pl-12"></div>
                        </>
                      ) : (
                        <>
                          <div className="md:col-span-5 md:text-right md:pr-12 hidden md:block"></div>
                          <div className="md:col-span-2 hidden md:flex justify-center">
                            <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center">
                              <span className="text-lg font-bold">
                                {item.step}
                              </span>
                            </div>
                          </div>
                          <div className="md:col-span-5 md:pl-12 md:border-l md:border-gray-200 dark:md:border-gray-700">
                            <div className="hidden md:block mb-4 text-left">
                              <h3 className="h4 font-red-hat-display mb-2">
                                {item.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Mobile Layout */}
                      <div className="md:hidden w-full">
                        <div className="flex justify-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center">
                            <span className="text-lg font-bold">
                              {item.step}
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <h3 className="h4 font-red-hat-display mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles section */}
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 text-white mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="h2 font-red-hat-display mb-4">
                Key Principles for a Strong Business Relationship
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Essential factors that guide our operations and ensure long-term
                success with our partners
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-teal-600 text-white">
                      <th className="py-4 px-6 text-left text-lg font-bold">
                        Principle
                      </th>
                      <th className="py-4 px-6 text-left text-lg font-bold">
                        Our Commitment
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-4 px-6 font-medium">
                        Transparency & Trust
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                        Maintain open and honest communication about stock,
                        pricing, and delivery schedules to build mutual trust.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-4 px-6 font-medium">
                        Commitment to Quality
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                        Ensure consistent quality control of raw materials and
                        provide detailed analysis reports to meet expectations.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-4 px-6 font-medium">
                        Timely Deliveries
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                        Adhere to agreed timelines for shipments, payments, and
                        documentation to avoid delays.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-4 px-6 font-medium">
                        Financial Reliability
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                        Ensure smooth financial transactions, including timely
                        LC opening and payments, to create a secure business
                        environment.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-4 px-6 font-medium">
                        Long-Term Partnership
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                        Focus on building a sustainable relationship by
                        exploring future collaborations beyond initial
                        materials, including other raw materials.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-4 px-6 font-medium">
                        Effective Problem-Solving
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                        Address any challenges quickly and professionally to
                        maintain smooth operations and prevent disruptions.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="max-w-3xl mx-auto bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 mt-12"
              data-aos="fade-up"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-8 w-8 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-teal-600 dark:text-teal-400">
                    Our Approach
                  </h4>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Build trust through transparency, ensure quality and timely
                    delivery, maintain financial reliability, and focus on
                    long-term collaboration. Address challenges proactively and
                    communicate openly to strengthen the partnership.
                  </p>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    Regular communication, clear agreements, and mutual respect
                    are the foundation of a successful and lasting business
                    relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <Cta />
    </>
  );
}

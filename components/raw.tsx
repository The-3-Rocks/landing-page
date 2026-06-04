"use client";
import Link from "next/link";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { products, Product } from "@/lib/products";

export default function ProductsPage() {
  return (
    <>
      {/* Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section className="relative bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 font-red-hat-display mb-4">
                Moroccan Mineral Exporter — Lead, Zinc, Copper, Barite, Iron, Cobalt & Antimony
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Discover our extensive range of high-quality Moroccan minerals and raw materials sourced and processed from Morocco's legendary mining regions to meet the highest industry standards worldwide.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-6">
                Each product listed below represents a carefully vetted supply chain — from geological survey and extraction to beneficiation, quality certification, and export logistics. Whether you need ore, concentrate, or processed material, we provide detailed specifications, independent lab analysis, and flexible volume options tailored to industrial buyers, traders, and manufacturers.
              </p>
              <div className="prose prose-base text-gray-600 dark:text-gray-400 max-w-none prose-p:leading-relaxed mt-6 mx-auto text-left">
                <p>
                  The 3 Rocks is Morocco’s premier exporter of seven industrial raw materials that together cover the bulk of the country’s strategic non-phosphate mining output. Our <strong>lead</strong> comes from the Bni Taddjit and Errachidia mineral belt and is shipped as concentrate, powder, or run-of-mine ore. Our <strong>zinc calamine</strong> is sourced from the eastern High Atlas and supplied as +37 percent ore or 70 percent concentrate for galvanising, die-casting, and pharmaceutical use. Our <strong>copper</strong> originates from the Tinghir and central High Atlas districts and is exported as 8 to 21 percent ore, with 40 percent-plus high-purity lots available under special permit.
                </p>
                <p>
                  <strong>Barite</strong> from Midelt and Ouarzazate, with specific gravity consistently between 4.18 and 4.28, is preferred by oil and gas drilling-fluid blenders, radiation shielding manufacturers, and the paints and coatings industry. <strong>Iron ore</strong> from the Nador and Oujda districts grades at 56 percent iron or higher and is exported in bulk to Mediterranean steel mills and direct-reduction plants. <strong>Cobalt</strong> from the Bou Azzer district — the only primary cobalt source in Africa outside the Copperbelt — is supplied as 42 percent-plus concentrate to battery precursor manufacturers, superalloy producers, and high-performance magnet makers. <strong>Antimony</strong> from the Khenifra region is shipped as 30 percent-plus ore or concentrate for flame retardants, lead-acid batteries, and defence applications.
                </p>
                <p>
                  Every product on this page is supported by a downloadable specification sheet, a current stock indicator, and a request-quote form that connects the buyer directly to our commercial team in Rabat. We respond to all enquiries within twenty-four hours and provide indicative pricing, lead times, and shipping options before the buyer commits to a contract.
                </p>
              </div>
            </div>

            {/* Featured product - Lead */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="relative h-64 md:h-full">
                      <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={products[0].image}
                        width={600}
                        height={400}
                        alt="Moroccan Lead raw material"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-50"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="inline-block px-4 py-2 rounded-full bg-teal-500 text-white font-semibold text-sm mb-2">
                          Featured Moroccan Mineral
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          Moroccan Lead
                        </h2>
                        <p className="text-white max-w-md">
                          86% pure lead from Morocco's premier mining regions,
                          available as concentrate, powder, and ore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <h3 className="h4 font-red-hat-display mb-3">
                      Exceptional Purity & Moroccan Mining Heritage
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      At The 3 Rocks Company, we pride ourselves on offering
                      high-quality Moroccan lead that stands out for its
                      exceptional purity and unmatched durability. Our lead is
                      carefully extracted from Morocco's mineral-rich mountains
                      and engineered to meet the specific demands of various
                      industries.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <span className="block text-sm text-gray-500 dark:text-gray-400">
                          Moroccan Concentrate
                        </span>
                        <span className="block text-xl font-bold text-gray-900 dark:text-white">
                          86% pure lead
                        </span>
                        <span className="block text-sm text-teal-600 dark:text-teal-400">
                          400 tons in stock
                        </span>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <span className="block text-sm text-gray-500 dark:text-gray-400">
                          Available Forms
                        </span>
                        <span className="block text-xl font-bold text-gray-900 dark:text-white">
                          Multiple options
                        </span>
                        <span className="block text-sm text-teal-600 dark:text-teal-400">
                          Contact for details
                        </span>
                      </div>
                    </div>

                    <Link
                      href="/products/lead"
                      className="btn-sm text-white bg-teal-500 hover:bg-teal-400"
                    >
                      Learn More About Our Moroccan Lead
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality & Logistics Overview */}
            <div className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold font-red-hat-display mb-6">Quality Control & Export Logistics</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>Every mineral listed on this page is supported by a documented quality control process that begins at the mine site and continues through beneficiation, packing, and port loading. Our quality assurance team collects samples at each stage of the supply chain and submits them to ISO 17025-accredited laboratories in Casablanca and Rabat for analysis by X-ray fluorescence, inductively coupled plasma optical emission spectrometry, and gravimetric methods as appropriate for the mineral type and the parameter being measured. The certificate of analysis issued for each shipment includes the target element grade, a full impurity profile covering all elements that could affect the material&rsquo;s performance in the buyer&rsquo;s process, moisture content, and relevant physical properties such as specific gravity for barite, particle size distribution for powder products, and bulk density for ore and lump materials.</p>
                <p>Export logistics are managed through our network of regional depots located near each mining district and through our port operations teams in Casablanca, Tangier Med, and Jorf Lasfar. Our logistics coordinators arrange trucking from the mine or beneficiation plant to the port, manage container booking and stuffing, clear shipments through Moroccan customs using the ADIL electronic system, and prepare the full export documentation package including the certificate of origin from the Moroccan Chamber of Commerce, the commercial invoice, the packing list, the bill of lading, and the insurance certificate. Buyers receive real-time tracking information once the container is gated into the port terminal and can monitor vessel position throughout the voyage using the AIS tracking link provided by our logistics team.</p>
                <p>We offer flexible shipping terms to match buyers&rsquo; procurement preferences. FOB Casablanca or Tangier Med is the most commonly used incoterm for first-time buyers, as it gives the buyer control over ocean freight selection and insurance placement. CIF and CFR terms are available for buyers who prefer a delivered price that includes all logistics costs to their nominated port. For long-term contract buyers who require stable delivered pricing, we can structure quarterly or biannual pricing based on the LME or Metal Bulletin reference price for the relevant mineral, with a fixed logistics margin that covers freight, insurance, and port handling charges for the duration of the contract term.</p>
                <p>Every buyer at The 3 Rocks is assigned a dedicated account manager who serves as the single point of contact from initial inquiry through contract negotiation, production scheduling, laboratory testing, shipping coordination, and post-delivery follow-up. This means that when you email or call about a Moroccan mineral shipment, you speak to someone who knows your specification, your quality requirements, your preferred incoterm, and your logistics chain. We also provide monthly market updates to active buyers covering price movements in the relevant commodities, regulatory changes affecting Moroccan mineral exports, and new stock availability from our network of partner mines across the Anti-Atlas, High Atlas, Middle Atlas, and eastern Meseta regions.</p>
              </div>
            </div>

            {/* Products grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
              {products
                .filter((product) => product.id !== "lead")
                .map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition duration-300"
                  >
                    <div className="relative mb-5 overflow-hidden rounded-lg">
                      <div
                        className={`absolute inset-0 ${product.color} opacity-10`}
                      ></div>
                      <Image
                        className="w-full h-48 object-cover"
                        src={product.image}
                        width={300}
                        height={200}
                        alt={`Moroccan ${product.name} mineral`}
                      />
                    </div>
                    <div className="grow">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold font-red-hat-display">
                          Moroccan {product.name}
                        </h3>
                        <div className="text-sm font-medium inline-flex px-2 py-1 rounded-full text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-900">
                          {product.purity}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {product.description}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 leading-relaxed">
                        {product.richDescription}
                      </p>
                      <div className="text-sm text-gray-500 mb-4">
                        <span className="font-semibold">Available Stock:</span>{" "}
                        {product.stock}
                      </div>
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="btn-sm text-white bg-teal-500 hover:bg-teal-400 w-full mt-3"
                    >
                      View Moroccan {product.name} Details
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mining expertise section */}
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
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="h2 font-red-hat-display mb-4">
                Our Moroccan Mining Heritage & Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                With decades of experience in Moroccan mining and processing raw
                materials, we've developed sustainable and efficient extraction
                methods that honor Morocco's rich mineral legacy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="h4 font-red-hat-display mb-3">
                  Moroccan Mining: Tradition & Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The 3 Rocks combines traditional Moroccan mining methods with
                  modern techniques. We honor Morocco's mining heritage while
                  implementing advanced technologies for enhanced efficiency and
                  safety in our mineral operations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="h4 font-red-hat-display mb-3">
                  Moroccan Quality & Global Reliability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our Moroccan minerals are renowned worldwide for their quality
                  and reliability. We implement rigorous quality control from
                  extraction to final delivery, ensuring our products meet
                  international standards.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="h4 font-red-hat-display mb-3">
                  Sustainability in Moroccan Mining
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We employ environmentally responsible mining practices that
                  minimize ecological impact while maximizing resource
                  utilization, following strict environmental guidelines in all
                  our Moroccan operations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="h4 font-red-hat-display mb-3">
                  The Future of Moroccan Mining
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We're committed to integrating emerging technologies into
                  Morocco's mining sector while maintaining our dedication to
                  quality and sustainability, training the next generation of
                  Moroccan mining professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 font-red-hat-display mb-4">
                Ready to unlock Morocco's mining potential?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Contact us today to discuss your Moroccan raw material needs and
                receive a personalized quote for premium Moroccan mining
                products.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn text-white bg-teal-500 hover:bg-teal-400"
                >
                  Connect with Morocco's Mining Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

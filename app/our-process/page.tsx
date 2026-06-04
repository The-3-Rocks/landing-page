// app/our-process/page.tsx
import Link from "next/link";
import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import ChatButtons from "@/components/ChatButtons";

export const metadata = {
  title: "Mining & Export Process — Moroccan Minerals from Mine to Port | The 3 Rocks",
  description:
    "Learn about The 3 Rocks' efficient and sustainable process for extracting, processing, and exporting premium Moroccan minerals and raw materials worldwide. Specializing in Morocco's diverse mining sector.",
  openGraph: {
    title: "Mining & Export Process — Moroccan Minerals from Mine to Port | The 3 Rocks",
    description:
      "Discover our streamlined process for extracting and exporting high-quality minerals and raw materials from Morocco's rich mineral deposits to global markets.",
    url: "https://www.the-3rocks.com/our-process",
    type: "website",
    siteName: "The 3 Rocks",
    images: [
      {
        url: "https://www.the-3rocks.com/images/process-og.png",
        width: 1200,
        height: 630,
        alt: "The 3 Rocks Mining Process - Premium Moroccan Minerals",
      },
    ],
    locale: "en_US",
  },
  linkedin: {
    title: "Mining Process | Premium Moroccan Minerals",
    description:
      "Discover our streamlined process for extracting and exporting high-quality minerals and raw materials from Morocco's rich mineral deposits to global markets.",
    images: ["https://www.the-3rocks.com/images/process-linkedin.png"],
    url: "https://www.the-3rocks.com/our-process",
    company: "The 3 Rocks Company",
    site: "The 3 Rocks Official Website",
  },
  alternates: { canonical: "https://www.the-3rocks.com/our-process" },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const exportSteps = [
  {
    step: "01",
    title: "Contract Signing",
    description:
      "Both parties sign the sales contract to finalize terms and specifications for the raw materials, including quantity, grade, packing, port of loading, and incoterm.",
    align: "right",
  },
  {
    step: "02",
    title: "Material Collection",
    description:
      "The raw materials are transported to our depot within a maximum of three weeks for processing, sampling, and preparation for laboratory analysis and buyer inspection.",
    align: "left",
  },
  {
    step: "03",
    title: "Inspection & Approval",
    description:
      "The buyer has the option to visit our facilities to inspect the available stock, draw independent samples, and confirm that the material meets the agreed specification.",
    align: "right",
  },
  {
    step: "04",
    title: "Financial Arrangements",
    description:
      "Secure payment is arranged via Letter of Credit (LC) or Telegraphic Transfer (TT), with optional on-site stock inspection for buyer confidence before the final payment is released.",
    align: "left",
  },
  {
    step: "05",
    title: "Processing & Analysis",
    description:
      "The raw materials undergo processing as needed, and detailed analysis reports are prepared by an independent laboratory to verify quality and compliance with the specification.",
    align: "right",
  },
  {
    step: "06",
    title: "Packaging & Preparation",
    description:
      "The materials are properly packed and stored in containers or bulk according to international shipping standards, sealed under customs supervision, and staged for export.",
    align: "left",
  },
  {
    step: "07",
    title: "Transportation & Shipping",
    description:
      "The containers are transported to the port — Casablanca, Tangier Med, or Jorf Lasfar — and loaded onto the vessel for export to the destination country, with full tracking provided.",
    align: "right",
  },
];

const principles = [
  {
    title: "Transparency & Trust",
    detail:
      "Maintain open and honest communication about stock, pricing, and delivery schedules to build mutual trust.",
  },
  {
    title: "Commitment to Quality",
    detail:
      "Ensure consistent quality control of raw materials and provide detailed analysis reports to meet expectations.",
  },
  {
    title: "Timely Deliveries",
    detail:
      "Adhere to agreed timelines for shipments, payments, and documentation to avoid delays at the port or in transit.",
  },
  {
    title: "Financial Reliability",
    detail:
      "Ensure smooth financial transactions, including timely LC opening and payments, to create a secure business environment for both parties.",
  },
  {
    title: "Long-Term Partnership",
    detail:
      "Focus on building a sustainable relationship by exploring future collaborations beyond initial materials, including other Moroccan raw materials from our portfolio.",
  },
  {
    title: "Effective Problem-Solving",
    detail:
      "Address any challenges quickly and professionally to maintain smooth operations and prevent disruptions to the buyer’s supply chain.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <ChatButtons />
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="section-wrapper">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <div className="teal-pill mb-4">Morocco’s Premium Mining Process</div>
              <h1 className="h1 font-red-hat-display mb-4">
                Our <span className="text-teal-500">Process</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                From extraction to delivery, discover how we ensure the highest quality Moroccan raw materials through our meticulous process
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-6">
                What sets The 3 Rocks apart is our integrated approach — we oversee every stage from mine to port, maintaining full control over quality, traceability, and timelines. Our process combines decades of on-the-ground experience in Morocco’s mining regions with modern analytical techniques and responsible sourcing practices that meet the expectations of discerning international buyers.
              </p>
            </div>

            <div className="prose prose-lg text-gray-600 dark:text-gray-400 max-w-none prose-p:leading-relaxed prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-white">
              <p>
                The 3 Rocks process begins long before ore is loaded onto a vessel. It starts with geological mapping of deposits in the Atlas Mountains, Anti-Atlas, and the mineral belts of Errachidia, Khenifra, Midelt, Ouarzazate, Nador, Oujda, Tinghir, and Bou Azzer. Our geologists work with our mining partners to identify the most consistent sources of <Link href="/products/lead">lead</Link>, <Link href="/products/zinc">zinc calamine</Link>, <Link href="/products/copper">copper</Link>, <Link href="/products/barite">barite</Link>, <Link href="/products/iron">iron</Link>, <Link href="/products/cobalt">cobalt</Link>, and <Link href="/products/antimony">antimony</Link>, and to plan extraction sequences that respect the host rock and minimize waste.
              </p>
              <p>
                Once ore leaves the mine face, it moves through a defined chain of custody to our depot, where every lot is weighed, sampled, and tested using X-ray fluorescence screening and inductively coupled plasma analysis. Independent laboratories issue certificates of analysis against which the buyer can later verify the shipment. Materials are crushed, screened, or milled to the buyer’s specification, packed into containers or bulk bags, and loaded onto vessels at the port of the buyer’s choice. Throughout the process, our team maintains a single point of accountability — the contact at The 3 Rocks who handled the initial inquiry is reachable at every step, from contract signing to bill of lading.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md" data-aos="fade-right">
                <div className="flex items-center mb-4">
                  <div className="icon-circle mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="h3 font-red-hat-display">Our Mission</h3>
                </div>
                <p className="text-body">
                  Our mission is to successfully extract, process, and export premium raw materials with exceptional purity levels, ensuring high-quality processing, timely delivery, and smooth transactions. We are committed to meeting our clients’ expectations with reliability, transparency, and efficiency across every shipment.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md" data-aos="fade-left">
                <div className="flex items-center mb-4">
                  <div className="icon-circle mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="h3 font-red-hat-display">Our Vision</h3>
                </div>
                <p className="text-body">
                  We aim to expand our operations by increasing export volumes and working with a broader range of raw materials. Our goal is to build strong and long-term partnerships with our clients, fostering trust and growth for both parties while strengthening our position in the international market for ethically sourced Moroccan minerals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geological Context & Mining Operations */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="section-wrapper">
          <div className="section-pad section-divider">
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-600 dark:text-gray-400 max-w-none prose-p:leading-relaxed prose-headings:text-gray-900 dark:prose-headings:text-gray-100">
              <h2 className="h2 font-red-hat-display mb-6 text-gray-900 dark:text-white">Our Geological & Operational Footprint</h2>
              <p>
                Morocco&rsquo;s mineral wealth is the product of a complex geological history that spans more than 500 million years. The country lies at the junction of the African and Eurasian tectonic plates, where repeated episodes of rifting, subduction, and continental collision have created a remarkable diversity of mineral deposit types in a relatively compact geographic area. The 3 Rocks sources its products from four principal geological domains, each of which contributes distinct mineral assemblages and grade profiles to our portfolio.
              </p>
              <p>
                The High Atlas belt, running diagonally across central Morocco from Agadir in the southwest to the Algerian border near Figuig in the northeast, hosts the majority of our lead and zinc deposits. Mineralisation here occurs primarily as Mississippi Valley-type carbonate-hosted deposits within Jurassic and Cretaceous limestone and dolomite sequences. Our lead concentrate and zinc calamine ore from this region typically grade between 55 and 70 percent lead and 32 and 40 percent zinc respectively, with low levels of deleterious elements such as arsenic, cadmium, and mercury. The Anti-Atlas range in the south, where Proterozoic basement rocks are exposed through a cover of Paleozoic sediments, is our principal source of cobalt, antimony, and copper. The famous Bou Azzer district near Ouarzazate has been mined for cobalt since the 1930s and remains one of the world&rsquo;s few primary cobalt producers outside the Central African Copperbelt.
              </p>
              <p>
                The eastern Meseta around Nador and Oujda supplies our iron ore, which occurs as siderite-hematite bodies within Jurassic carbonate sequences. These deposits yield lump and fine iron ore grading 50 to 58 percent iron with moderate levels of silica and alumina that are well suited to sinter feed and direct-reduction feed for the Mediterranean steel industry. The barite deposits of the Middle Atlas and the Tafilalet region near Errachidia, hosted in veins and stratiform bodies within Paleozoic and Mesozoic rocks, produce barite ore ranging from 85 to 97 percent BaSO₄, which after simple gravity and magnetic separation reaches 4.20 specific gravity or higher for oil and gas drilling applications. Our supply network also includes smaller satellite deposits in the Rehamna massif, the Jebilet region, and the Maider basin, each of which contributes specialised grades that extend our product range.
              </p>
              <p>
                On the operational side, our team manages a production workflow that combines artisanal and small-scale mining with mechanised open-pit operations, depending on the deposit geometry. For narrow-vein deposits such as those in the Bou Azzer cobalt district, extraction follows the vein orientation using hand-sorting and pneumatic drilling to maximise ore grade and minimise dilution. For bulk-tonnage deposits such as the iron ore bodies near Nador, full bench-and-blast open-pit methods are used, with run-of-mine ore crushed in a primary jaw crusher installed at the pit perimeter before being transported to the beneficiation plant. Our on-site geologists log every blast hole and every truck load, maintaining a block model that is updated daily and reconciled against the monthly survey. This level of operational control means that when we quote a grade range for a product, that range is anchored in real production data, not in a laboratory test on a single hand-picked sample.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="bg-white dark:bg-gray-900">
        <div className="section-wrapper">
          <div className="section-pad section-divider">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <div className="icon-circle w-16 h-16 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="section-h2">Our Moroccan Export Process</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                A streamlined seven-step procedure designed to ensure smooth transactions, full traceability, and timely delivery to any major international port
              </p>
              <p className="text-muted mt-4 max-w-2xl mx-auto">
                Every engagement at The 3 Rocks follows the same controlled sequence — from contract signing and material collection, through buyer inspection, laboratory analysis, packaging, and finally transportation to the port of loading. This repeatable workflow is what allows us to guarantee the same quality standard whether a buyer is sourcing 20 tons of lead concentrate or 40,000 tons of iron ore.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
                <div className="space-y-8 md:space-y-12">
                  {exportSteps.map((item) => (
                    <div key={item.step} className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
                      {/* Desktop alternating layout */}
                      <div className={`hidden md:block ${item.align === "right" ? "md:text-right md:pr-10" : "md:order-2 md:pl-10"}`}>
                        <h3 className="h4 font-red-hat-display mb-2">{item.title}</h3>
                        <p className="text-body">{item.description}</p>
                      </div>
                      <div className={`hidden md:flex justify-center ${item.align === "right" ? "" : "md:order-1"}`}>
                        <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center relative z-10">
                          <span className="text-lg font-bold">{item.step}</span>
                        </div>
                      </div>

                      {/* Mobile */}
                      <div className="md:hidden w-full">
                        <div className="flex justify-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center">
                            <span className="text-lg font-bold">{item.step}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <h3 className="h4 font-red-hat-display mb-2">{item.title}</h3>
                          <p className="text-body mb-2">{item.description}</p>
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

      {/* Beneficiation, Processing & Laboratory Quality Control */}
      <section className="bg-white dark:bg-gray-900">
        <div className="section-wrapper">
          <div className="section-pad section-divider">
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-600 dark:text-gray-400 max-w-none prose-p:leading-relaxed prose-headings:text-gray-900 dark:prose-headings:text-gray-100">
              <h2 className="h2 font-red-hat-display mb-6 text-gray-900 dark:text-white">Beneficiation, Processing & Laboratory Quality Control</h2>
              <p>
                The chain of custody at The 3 Rocks extends well beyond the mine gate. Once run-of-mine ore arrives at our depot, it enters a beneficiation workflow that is designed to match the physical and chemical characteristics of each mineral type. For barite, the primary beneficiation methods are jigging for coarse fractions and wet shaking-table separation for fines, followed by magnetic separation to remove iron-stained gangue minerals such as hematite and goethite. Our barite processing line can produce material suitable for oil and gas drilling applications at specific gravity 4.10, 4.20, and 4.25+ as required by API 13A and OCMA specifications, as well as chemical-grade barite for the paint, plastics, and radiation-shielding industries at 97 to 99 percent BaSO₄ purity.
              </p>
              <p>
                For base-metal ores such as lead, zinc, and copper, the processing route depends on the mineralogy and the target product form. Lead oxide ores from the High Atlas region are crushed and screened to produce direct-shipping fines, while lead carbonate and lead sulphide ores can be upgraded by froth flotation to produce concentrates grading 55 to 70 percent lead. Zinc calamine ore (smithsonite and hydrozincite) is processed by dry screening and pneumatic sorting to remove silica-rich gangue, yielding a calamine product grading 32 to 40 percent zinc that is directly usable by zinc smelters producing metal or zinc oxide. Copper oxide ores from our Anti-Atlas sources are typically upgraded by acid-leach testing to confirm solubility before being crushed, blended, and stockpiled for sale as copper ore grading 12 to 22 percent copper for direct smelting or for the ferroalloy industry.
              </p>
              <p>
                Quality control is woven into every stage of processing. Our on-site laboratory at the Errachidia depot is equipped with a handheld X-ray fluorescence analyser for rapid grade screening of incoming lots, a thermogravimetric analyser for moisture determination, a sieve shaker for particle size distribution, and a pycnometer for specific gravity measurement. Every production lot is assigned a unique internal reference number that tracks it from the mine weighbridge through each processing step, and the results of all QC tests are recorded in a digital database that is accessible to our export documentation team in real time.
              </p>
              <p>
                Independent third-party verification is required before any shipment leaves the depot. We work with three ISO 17025-accredited laboratories in Morocco — in Casablanca, Rabat, and Marrakech — and the buyer may nominate a fourth laboratory for umpire analysis in the event of a grade dispute. The laboratory certificate that accompanies each shipment includes the assay method used, the detection limits for each element, the laboratory&rsquo;s accreditation reference, and the signature of the responsible analyst. For buyers who require additional testing beyond the standard suite — such as loss on ignition, mercury content by cold-vapour atomic fluorescence, or fluorine determination by ion-selective electrode — our laboratory partners can add those parameters to the test schedule at a modest incremental cost.
              </p>
              <p>
                Packing is tailored to the product form and the shipping mode. Bulk ore for open-hatch vessels is loaded directly into the hold using conveyor belts and telescopic chutes to minimise segregation and dust generation. Containerised products are loaded into 20-foot or 40-foot open-top containers for lump materials and into standard containers lined with polypropylene sheets for powders and concentrates. Bagged products are available in 50 kg, 1-tonne jumbo bags, or 1.5-tonne sling bags, depending on the buyer&rsquo;s handling equipment at the destination port. Every container is photographed at the stuffing stage, weighed on a calibrated weighbridge, and sealed with a high-security bolt seal bearing a unique serial number that is recorded on the bill of lading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="section-wrapper">
          <div className="section-pad">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <div className="icon-circle w-16 h-16 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="section-h2">Key Principles for a Strong Business Relationship</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Six factors that guide our operations and ensure long-term success with our international partners
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {principles.map((p) => (
                <div key={p.title} className="card-feature">
                  <h3 className="h4 font-red-hat-display mb-2 text-gray-900 dark:text-white">{p.title}</h3>
                  <p className="text-body">{p.detail}</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6" data-aos="fade-up">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-teal-600 dark:text-teal-400">Our Approach</h4>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Build trust through transparency, ensure quality and timely delivery, maintain financial reliability, and focus on long-term collaboration. Address challenges proactively and communicate openly to strengthen the partnership.
                  </p>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    Regular communication, clear agreements, and mutual respect are the foundation of a successful and lasting business relationship. We treat every shipment as the beginning of the next one.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg text-gray-600 dark:text-gray-400 max-w-none prose-p:leading-relaxed mt-12 mx-auto" data-aos="fade-up">
              <h2 className="h2 font-red-hat-display mb-4 text-gray-900 dark:text-white">What the Process Means for Our Buyers</h2>
              <p>
                The benefits of working with a fully integrated Moroccan supplier go far beyond the convenience of a single point of contact. By managing every stage in-house, The 3 Rocks is able to provide buyers with documented chain of custody for every ton, laboratory certificates that match the actual shipment, transparent pricing without intermediary markups, and the ability to scale from a 20-ton trial order to long-term offtake contracts measured in tens of thousands of tons per year. Buyers gain access to a team that has walked the mine sites, knows the geological context, and can speak fluently about the technical specification of every product in our portfolio.
              </p>
              <p>
                For first-time buyers, our process is intentionally low-friction: we share indicative pricing within 24 hours of receiving a specification, we provide free samples for laboratory analysis on request, and we can arrange video calls with our geologists and logistics team to walk through the workflow before any commitment. For established buyers, we run dedicated account management and pre-position stock at our depot during periods of high demand, smoothing the supply curve and reducing lead times to destination ports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}

export const metadata = {
  title: {
    template: "%s | The 3 Rocks - Premium Moroccan Mining Materials",
    default: "The 3 Rocks - Morocco's Leading Mining & Raw Materials Supplier",
  },
  description:
    "Discover The 3 Rocks, Morocco's premier supplier of premium raw materials including lead, zinc, copper, barite, iron, cobalt and antimony. Our materials are ethically sourced from Morocco's legendary mining regions with sustainable practices. We deliver exceptional quality, transparency, and reliability to industries worldwide. Explore our extensive range of Moroccan minerals and see why we are the preferred choice for businesses seeking top-tier Moroccan raw materials.",
  keywords: [
    "The 3 Rocks mining",
    "The 3 Rocks ",
    "The3Rocks ",
    "The 3 Rocks Morocco",
    "The3Rocks Morocco",
    "Moroccan mining",
    "Morocco raw materials",
    "Lead from Morocco",
    "Zinc calamine Morocco",
    "Moroccan copper",
    "Barite supplier Morocco",
    "Moroccan iron ore",
    "Cobalt Morocco",
    "Antimony mining Morocco",
    "Moroccan minerals",
    "Premium mining materials",
    "Ethical mining Morocco",
    "Industrial minerals Morocco",
    "Raw material export Morocco",
    "Lead supplier",
    "Zinc supplier",
    "calamine supplier",
    "copper supplier",
    "Barite supplier ",
    " iron ore supplier",
    "Cobalt supplier",
    "Antimony supplier ",
    "Lead mining",
    "Zinc mining",
    "calamine mining",
    "copper mining",
    "Barite mining ",
    " iron ore mining",
    "Cobalt mining",
    "Antimony mining ",
  ],
  authors: [{ name: "The 3 Rocks Company" }],
  creator: "The 3 Rocks Mining Company",
  publisher: "The 3 Rocks Company, Morocco",
  openGraph: {
    title: "The 3 Rocks - Morocco's Premier Mining Materials Supplier",
    description:
      "Premium Moroccan mining materials supplier delivering exceptional quality lead, zinc, copper, barite, iron, cobalt and antimony from Morocco's mineral-rich regions. Ethical sourcing, sustainable practices, and global reliability.",
    url: "https://www.the-3rocks.com",
    siteName: "The 3 Rocks",
    images: [
      {
        url: "https://the-3rocks.com/images/og-the3rocks.png", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "The 3 Rocks - Premium Moroccan Mining Materials",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 3 Rocks - Premium Moroccan Mining Materials",
    description:
      "Discover exceptional quality raw materials from Morocco's legendary mining regions.",
    images: ["https://the-3rocks.com/images/og-the3rocks.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.the-3rocks.com",
  },
  category: "Moroccan Mining & Raw Materials",
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  other: {
    "geo.region": "MA", // Morocco country code
    "geo.placename": "Morocco",
    "og:country-name": "Morocco",
  },
};
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Stats from "@/components/stats";
import dynamic from "next/dynamic";

const MoroccanMaterialsCarousel = dynamic(() => import("@/components/MoroccanMaterialsCarousel"));
const ChatButtons = dynamic(() => import("@/components/ChatButtons"), { ssr: false });
const MiningProcess = dynamic(() => import("@/components/process"));
const Tabs = dynamic(() => import("@/components/tabs"));
const TestimonialsBlocks = dynamic(() => import("@/components/testimonials-blocks"));
const FeaturesBlocks = dynamic(() => import("@/components/features-blocks"));
const Cta = dynamic(() => import("@/components/cta"));
export default function Home() {
  return (
    <>
      {/*  Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>
      <Hero />
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-down">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
                Why Choose Us
              </div>
              <h2 className="h2 font-red-hat-display mb-4">Why The 3 Rocks for Moroccan Minerals</h2>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8" data-aos-id-whychoose>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-whychoose]">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">The 3 Rocks Company was founded to connect global industrial buyers with Morocco's exceptional mineral resources. Our team brings together geologists who have mapped deposits across the Anti-Atlas and High Atlas ranges, mining engineers with hands-on experience in beneficiation plants near Errachidia and Khenifra, and logistics professionals who manage port operations at Casablanca, Tangier Med, and Jorf Lasfar. We work with a network of artisanal and small-scale mines alongside larger industrial operations, applying consistent quality standards across every source. Each shipment is tested at our partner laboratories using XRF and ICP analysis, with certificates of analysis issued before loading.</p>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-whychoose]" data-aos-delay="150">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Our portfolio covers six core minerals: lead concentrate and powder from Bni Taddjit, zinc calamine ore and concentrate from the Errachidia mineral belt, copper ore with purity ranges from 8 to 40 percent from the Tinghir region, barite with specific gravity above 4.2 from mines near Midelt and Ouarzazate, iron ore exceeding 56 percent iron content from the Nador and Oujda areas, and cobalt ore sourced from the Bou Azzer district. We also supply antimony from the Khenifra region. Every mineral is available in raw ore, processed concentrate, or milled powder forms to match buyer specifications.</p>
              </div>
            </div>

            <div className="prose prose-lg text-gray-600 dark:text-gray-400 max-w-none prose-p:leading-relaxed prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline mt-12" data-aos="fade-up">
              <h3 className="h3 font-red-hat-display mb-3 text-gray-900 dark:text-white">About The 3 Rocks — Morocco’s Premier Mineral Exporter</h3>
              <p>
                The 3 Rocks Company is a Morocco-based supplier of ethically sourced industrial raw materials. We specialise in the export of <a href="/products/lead">lead</a>, <a href="/products/zinc">zinc calamine</a>, <a href="/products/copper">copper</a>, <a href="/products/barite">barite</a>, <a href="/products/iron">iron ore</a>, <a href="/products/cobalt">cobalt</a>, and <a href="/products/antimony">antimony</a> to industrial buyers, commodity traders, and procurement teams across Europe, Asia, the Americas, and the Middle East. Our headquarters and main depot are in Rabat, with satellite operations in Errachidia, Khenifra, Midelt, Ouarzazate, and Casablanca, giving us on-the-ground presence in every key Moroccan mining region.
              </p>
              <p>
                Our founders spent more than a decade working in Moroccan geology and mineral logistics before launching The 3 Rocks. They saw that international buyers consistently faced the same three challenges when sourcing Moroccan raw materials: inconsistent grade between lots, opaque documentation, and unreliable delivery timelines. The 3 Rocks was built to solve these problems. We publish a standard certificate of analysis for every shipment, run all minerals through X-ray fluorescence screening and inductively coupled plasma verification, and assign a single account manager to every buyer so that questions about grade, packing, port, or payment are answered by a person who knows the cargo personally.
              </p>
              <p>
                Today we work with buyers in more than twenty countries. Our client base ranges from publicly listed mining groups and industrial processors to mid-sized traders, family-run supply houses, and procurement teams at lithium-ion battery manufacturers, paint and coatings producers, drilling-fluid blenders, ceramics and glass plants, pharmaceutical and cosmetics companies, and steel mills. Whether a buyer needs a 20-ton trial shipment of Moroccan zinc calamine or a 40,000-ton long-term contract for Nador iron ore, our process — from contract signing to certificate of analysis to bill of lading — is the same, and is designed to give the buyer total visibility into the chain of custody of every ton we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Moroccan Mining Regions */}
      <section className="relative bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-5xl mx-auto" data-aos="fade-up">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
                  Morocco's Mineral Regions
                </div>
                <h2 className="h2 font-red-hat-display mb-4">Key Mining Regions Across Morocco</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Morocco's mineral wealth is distributed across a series of distinct geological belts that run from the Mediterranean coast in the north to the Sahara in the south, and from the Atlantic coast in the west to the border with Algeria in the east. The High Atlas Mountains, stretching diagonally across the country from southwest to northeast, host significant deposits of lead, zinc, copper, and barite, with mining operations concentrated around Errachidia, Midelt, Ouarzazate, and the Tafilalet region. The eastern Anti-Atlas belt, extending from the Tinghir area southward toward the Algerian border, contains substantial copper resources as well as the historic cobalt deposits of Bou Azzer, one of the most productive cobalt mining districts outside the Central African Copperbelt.</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">In northern Morocco, the Rif Mountain belt and the eastern Meseta contain significant iron ore deposits near Nador and Oujda, where hematite-rich formations have supplied Mediterranean steel mills since antiquity. The Middle Atlas region around Khenifra hosts an emerging antimony district that has gained strategic importance as global demand for this critical mineral has grown. Each of these mining regions has its own geological character, mineral assemblage, and infrastructure profile, which together create a diverse and resilient mineral supply base for international buyers.</p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">The 3 Rocks maintains direct relationships with mining operations in each of these regions, allowing us to offer buyers access to material from multiple producers within the same mineral category. For example, our lead portfolio includes ore from both the Errachidia belt and the Marrakech region, each with slightly different grade profiles and impurity signatures that can be matched to a buyer's specific process requirements. Our copper supply chain spans the Tinghir district, the Anti-Atlas, and the High Atlas, giving us the flexibility to source oxide ore for direct shipping or sulphide concentrate from flotation plants depending on the buyer's metallurgical preference.</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We regularly publish regional geological summaries and grade comparisons for every mineral we supply. These are available to buyers upon request and are updated whenever a new deposit enters our supply chain or when existing production zones change their grade profile. Our geological team also advises buyers who are evaluating Moroccan mineral sources for the first time, providing independent assessments of deposit potential, infrastructure access, and regulatory status.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control & Laboratory Testing */}
      <section className="relative bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-5xl mx-auto" data-aos="fade-up">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
                  Quality Assurance
                </div>
                <h2 className="h2 font-red-hat-display mb-4">Quality Control & Laboratory Standards</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">The 3 Rocks operates a multi-stage quality control system that begins at the mine face and continues through beneficiation, packing, and port loading. Our field geologists collect channel samples from active mining faces and blast-hole cuttings to confirm grade distribution before extraction. At the beneficiation plant, composite samples are taken from each production shift and analysed for the target element and for a suite of impurity elements including arsenic, cadmium, mercury, lead, zinc, copper, antimony, and silver, depending on the mineral type. The analytical methods used include X-ray fluorescence for rapid elemental screening, inductively coupled plasma optical emission spectrometry for precise quantification of major and trace elements, and inductively coupled plasma mass spectrometry for ultra-trace detection where required by the buyer's specification.</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">All laboratory analyses are performed by ISO 17025-accredited facilities in Casablanca and Rabat, using validated test methods that are traceable to international standards. Our quality assurance team reviews every analytical result before it is released and flags any result that falls outside the expected range for further investigation. If an out-of-specification result is confirmed, the affected lot is quarantined and re-sampled or redirected to a buyer whose specification it meets, ensuring that no non-conforming material is shipped under a contract that requires a higher standard.</p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">In addition to chemical analysis, we routinely measure physical properties that are critical to product performance. For barite, specific gravity is determined by helium pycnometry and checked against the API 13A requirement of 4.2 minimum for oil-drilling grades. For powder products, particle size distribution is measured by laser diffraction and reported as D10, D50, and D90 values. Moisture content is determined by oven drying at 105 degrees Celsius to constant weight. For lump and ore products, we measure bulk density, angle of repose, and fragmentation distribution to support the buyer's handling and processing planning.</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Our quality documentation for each shipment includes the full certificate of analysis with a declaration of conformity to the contract specification, a chain-of-custody summary showing the lot number, mining source, beneficiation date, packing date, and loading date, and an archive of the raw analytical data from the primary and referee laboratories. We retain representative samples from every shipment for a minimum of 12 months and make them available for buyer verification upon request. For contracts that include a quality-based pricing formula, the referee analysis procedure and the tolerance limits for each parameter are defined in the contract before shipment and are binding on both parties.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <ChatButtons />
      {/* <Carousel /> */}
      <MoroccanMaterialsCarousel />
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
              End-to-End Supply Chain
            </div>
            <h2 className="h2 font-red-hat-display mb-6 text-center">From Mine to Port</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We manage the full supply chain from mine to port. Our team coordinates with local mine operators, arranges on-site quality inspections, handles transport via truck to processing facilities and ports, manages all customs and export documentation through Morocco's Office des Changes and customs authorities, and books container or bulk vessel shipping to destinations worldwide.</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Buyers receive complete documentation packages including certificates of origin, bills of lading, packing lists, commercial invoices, and independent laboratory analysis reports. Minimum order quantities start at 20 metric tons for concentrates and 50 metric tons for ore, with larger volumes available for long-term contracts.</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Our logistics network spans three major Moroccan ports. Casablanca handles containerized and break-bulk mineral shipments with regular liner services to Europe and West Africa. Tangier Med connects to over 180 ports worldwide with frequent sailings to Asia, North America, and the Mediterranean. Jorf Lasfar offers dedicated bulk loading facilities for phosphate-based minerals and industrial products.</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We offer flexible shipping terms including FOB (free on board) from any Moroccan port, CIF (cost, insurance, freight) to major global ports, and CFR (cost and freight) for buyers with their own insurance arrangements. Our logistics team tracks every shipment from loading to discharge and provides regular updates on vessel position and estimated arrival.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Industries We Serve */}
      <section className="relative bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-5xl mx-auto" data-aos="fade-up">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
                  Global Industries
                </div>
                <h2 className="h2 font-red-hat-display mb-4">Industries That Rely on Moroccan Minerals</h2>
              </div>
              <div className="text-left text-gray-600 dark:text-gray-400 space-y-4 leading-relaxed">
                <p>Moroccan minerals from The 3 Rocks are used by manufacturers and processors across a wide spectrum of industries. Our lead products supply the lead-acid battery industry, which accounts for more than eighty percent of global lead consumption and is the primary driver of demand for high-purity lead concentrate. The radiation shielding sector uses our lead powder in medical, industrial, and nuclear protection applications, while the cosmetics and specialty chemicals industries value lead powder for its density and opacity in pigment and formulation applications.</p>
                <p>In the steel industry, our iron ore from the Nador and Oujda districts serves as a strategic secondary supply source for Mediterranean blast furnaces and direct-reduction plants, complementing the dominant supply from Brazil and Australia. Moroccan barite is specified by oil and gas drilling operators across West Africa, the Mediterranean, and the Middle East for drilling-fluid formulation, where specific gravity above 4.2 and low mercury and strontium content are essential for compliance with API 13A and OSPAR environmental standards. Barite from our Midelt and Ouarzazate sources is also used in paints, plastics, medical imaging, and concrete radiation shielding, where its chemical inertness and high density provide functional and cost advantages over alternative filler materials.</p>
                <p>The energy storage and electric vehicle battery supply chains increasingly rely on Moroccan cobalt from the Bou Azzer district, one of the world&rsquo;s few primary cobalt sources outside the Central African Copperbelt. Our cobalt concentrate is specified by lithium-ion battery precursor manufacturers, superalloy producers for aerospace and gas turbine applications, and producers of high-performance magnetic materials. The antimony industry is also experiencing strong demand growth driven by the mineral&rsquo;s use in brominated flame retardants for electronics and construction materials, in lead-acid battery hardening, and in military applications including night-vision equipment and infrared sensors. Our Khenifra-region antimony, with grades ranging from 30 to over 50 percent antimony, serves buyers across all of these sectors.</p>
                <p>Zinc calamine from the Errachidia mineral belt is used in the galvanizing industry for corrosion protection of steel structures and automotive components, in the die-casting industry for precision metal parts, in the cosmetics and pharmaceutical sectors for the production of zinc oxide and calamine lotion, and in the fertiliser industry as a micronutrient additive. Copper from the Tinghir region and the Anti-Atlas belt is essential for wire and cable manufacturers who supply the renewable energy, electrification, and telecommunications infrastructure sectors, as well as for brass and bronze producers, chemical processors, and architectural metals fabricators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="relative bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
                  Common Questions
                </div>
                <h2 className="h2 font-red-hat-display mb-4">Frequently Asked Questions About Moroccan Minerals</h2>
              </div>
              <div className="text-left space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold font-red-hat-display text-gray-900 dark:text-white mb-2">What is the minimum order quantity for Moroccan minerals?</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">For concentrates and processed products, our standard minimum order quantity is 20 metric tons per product per shipment, which corresponds to one 20-foot container. For run-of-mine ore, the minimum is typically 50 metric tons, or approximately two containers. For bulk vessel shipments of iron ore or barite ore, the minimum is 5,000 metric tons per vessel. Smaller quantities for evaluation purposes can be arranged on a case-by-case basis, and we offer free 5-kilogram laboratory samples for product qualification testing.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold font-red-hat-display text-gray-900 dark:text-white mb-2">How does The 3 Rocks ensure consistent quality across multiple shipments?</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We maintain a documented quality management system that covers every stage of the supply chain, from mine-site selection through beneficiation, packing, loading, and delivery. Each production batch is tested for chemical composition and physical properties at our partner laboratories, and the results are compared against the buyer&rsquo;s specification before the batch is released for shipment. Our long-term contracts include a rolling quality assessment protocol that averages results over multiple shipments, allowing us to identify and correct any drift in material quality before it becomes a problem for the buyer.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold font-red-hat-display text-gray-900 dark:text-white mb-2">What shipping ports does The 3 Rocks use for mineral exports?</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We ship from three principal Moroccan ports: Casablanca on the Atlantic coast serves containerised mineral shipments with regular liner services to Europe, West Africa, South America, and the Mediterranean; Tangier Med at the Strait of Gibraltar offers transshipment connections to over 180 ports worldwide including frequent sailings to Asia and North America; and Jorf Lasfar provides dedicated bulk loading facilities for large-volume shipments. The choice of port depends on the mineral type, the destination, the vessel size required, and the incoterm agreed between buyer and seller.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold font-red-hat-display text-gray-900 dark:text-white mb-2">Does The 3 Rocks provide independent laboratory analysis with each shipment?</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Yes. Every shipment is accompanied by a certificate of analysis from an ISO 17025-accredited laboratory in Morocco. The certificate covers the target element grade, full impurity profile, moisture content, and relevant physical properties such as specific gravity for barite or particle size distribution for powder products. Buyers are welcome to appoint an independent inspection company such as SGS, Bureau Veritas, or Intertek to take parallel samples at the port of loading and conduct their own analysis at their preferred laboratory.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MiningProcess />
      <Tabs />

      {/* <PricingTables /> */}
      <TestimonialsBlocks />
      <FeaturesBlocks />
      <Cta />
    </>
  );
}

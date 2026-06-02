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
      <MiningProcess />
      <Tabs />

      {/* <PricingTables /> */}
      <TestimonialsBlocks />
      <FeaturesBlocks />
      <Cta />
    </>
  );
}

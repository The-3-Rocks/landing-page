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
      <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-red-hat-display text-center mb-8 text-gray-900 dark:text-white">Why The 3 Rocks for Moroccan Minerals</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-800/30">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">The 3 Rocks Company was founded to connect global industrial buyers with Morocco's exceptional mineral resources. Our team brings together geologists who have mapped deposits across the Anti-Atlas and High Atlas ranges, mining engineers with hands-on experience in beneficiation plants near Errachidia and Khenifra, and logistics professionals who manage port operations at Casablanca, Tangier Med, and Jorf Lasfar. We work with a network of artisanal and small-scale mines alongside larger industrial operations, applying consistent quality standards across every source. Each shipment is tested at our partner laboratories using XRF and ICP analysis, with certificates of analysis issued before loading.</p>
              </div>
              <div className="p-6 rounded-xl bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-800/30">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Our portfolio covers six core minerals: lead concentrate and powder from Bni Taddjit, zinc calamine ore and concentrate from the Errachidia mineral belt, copper ore with purity ranges from 8 to 40 percent from the Tinghir region, barite with specific gravity above 4.2 from mines near Midelt and Ouarzazate, iron ore exceeding 56 percent iron content from the Nador and Oujda areas, and cobalt ore sourced from the Bou Azzer district. We also supply antimony from the Khenifra region. Every mineral is available in raw ore, processed concentrate, or milled powder forms to match buyer specifications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <ChatButtons />
      {/* <Carousel /> */}
      <MoroccanMaterialsCarousel />
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We manage the full supply chain from mine to port. Our team coordinates with local mine operators, arranges on-site quality inspections, handles transport via truck to processing facilities and ports, manages all customs and export documentation through Morocco's Office des Changes and customs authorities, and books container or bulk vessel shipping to destinations worldwide. Buyers receive complete documentation packages including certificates of origin, bills of lading, packing lists, commercial invoices, and independent laboratory analysis reports. Minimum order quantities start at 20 metric tons for concentrates and 50 metric tons for ore, with larger volumes available for long-term contracts.</p>
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

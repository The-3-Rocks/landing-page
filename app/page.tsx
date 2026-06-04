export const metadata = {
  title: {
    template: "%s | The 3 Rocks",
    default:
      "Moroccan Mineral Exporter — Lead, Zinc, Cobalt, Barite | The 3 Rocks",
  },
  description:
    "Discover The 3 Rocks, Morocco's premier supplier of premium raw materials including lead, zinc, copper, barite, iron, cobalt and antimony. Our materials are ethically sourced from Morocco's legendary mining regions with sustainable practices. We deliver exceptional quality, transparency, and reliability to industries worldwide. Explore our extensive range of Moroccan minerals and see why we are the preferred choice for businesses seeking top-tier Moroccan raw materials.",
  authors: [{ name: "The 3 Rocks Company" }],
  creator: "The 3 Rocks Mining Company",
  publisher: "The 3 Rocks Company, Morocco",
  openGraph: {
    title:
      "Moroccan Mineral Exporter — Lead, Zinc, Cobalt, Barite | The 3 Rocks",
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
import SectionWhyChoose from "@/components/section-why-choose";
import SectionAbout from "@/components/section-about";
import SectionRegions from "@/components/section-regions";
import SectionQuality from "@/components/section-quality";
import SectionMineToPort from "@/components/section-mine-to-port";
import SectionIndustries from "@/components/section-industries";
import SectionFAQ from "@/components/section-faq";
import dynamic from "next/dynamic";

const MoroccanMaterialsCarousel = dynamic(
  () => import("@/components/MoroccanMaterialsCarousel"),
);
const ChatButtons = dynamic(() => import("@/components/ChatButtons"), {
  ssr: false,
});
const MiningProcess = dynamic(() => import("@/components/process"));
const Tabs = dynamic(() => import("@/components/tabs"));
const TestimonialsBlocks = dynamic(
  () => import("@/components/testimonials-blocks"),
);
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

      <Stats />
      <ChatButtons />
      {/* <Carousel /> */}
      <MoroccanMaterialsCarousel />
      <SectionAbout />
      <SectionWhyChoose />
      <Tabs />

      {/* <PricingTables /> */}
      <SectionWhyChoose />
      <MiningProcess />
      <SectionRegions />
      <SectionQuality />
      <SectionMineToPort />
      <SectionIndustries />
      <SectionFAQ />

      <TestimonialsBlocks />
      <FeaturesBlocks />
      <Cta />
    </>
  );
}

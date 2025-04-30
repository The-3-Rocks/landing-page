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
    languages: {
      "en-US": "https://www.the-3rocks.com/en-US",
      "fr-FR": "https://www.the-3rocks.com/fr-FR",
      "ar-MA": "https://www.the-3rocks.com/ar-MA",
    },
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
import Carousel from "@/components/carousel";
import Tabs from "@/components/tabs";
import MiningProcess from "@/components/process";
import PricingTables from "@/components/pricing-tables";
import TestimonialsBlocks from "@/components/testimonials-blocks";
import FeaturesBlocks from "@/components/features-blocks";
import Cta from "@/components/cta";
import MoroccanMaterialsCarousel from "@/components/MoroccanMaterialsCarousel";
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
      {/* <Carousel /> */}
      <MoroccanMaterialsCarousel />
      {/* <MoroccanMaterialsCarousel /> */}
      <MiningProcess />
      <Tabs />

      {/* <PricingTables /> */}
      <TestimonialsBlocks />
      <FeaturesBlocks />
      <Cta />
    </>
  );
}

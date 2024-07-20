export const metadata = {
  title: {
    template: "%s | The 3 Rocks",
    default: "The 3 Rocks",
  },
  description:
    "Discover the leader in raw materials with our innovative solutions and exceptional quality. Our website offers comprehensive information on our extensive range of products, from precious metals to industrial minerals. We are committed to transparency, sustainability, and excellence, providing you with the highest standards in the industry. Explore our services, learn about our impact, and see why we are the preferred choice for businesses worldwide seeking top-tier raw materials.",
  keywords: ["Raw materials", "Lead", "buy raw materials", "Mining"],
  openGraph: {
    title: "The 3 Rocks",
    description:
      "The leader in raw materials with innovative solutions and exceptional quality.",
    url: "https://www.the-3rocks.com",
    siteName: "The 3 Rocks",
    images: [
      {
        url: "https://the-3rocks.com/images/og-the3rocks.png", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "The 3 Rocks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Stats from "@/components/stats";
import Carousel from "@/components/carousel";
import Tabs from "@/components/tabs";
import Process from "@/components/process";
import PricingTables from "@/components/pricing-tables";
import TestimonialsBlocks from "@/components/testimonials-blocks";
import FeaturesBlocks from "@/components/features-blocks";
import Cta from "@/components/cta";

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
      <Carousel />
      <Tabs />
      {/* <Process /> */}
      {/* <PricingTables /> */}
      <TestimonialsBlocks />
      <FeaturesBlocks />
      <Cta />
    </>
  );
}

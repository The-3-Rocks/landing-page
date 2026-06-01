export const metadata = {
  title: "Leading Moroccan Mining Experts",
  description:
    "Discover Morocco's premier mining company with decades of expertise in extracting high-quality minerals from Morocco's rich geological deposits. Learn about our sustainable Moroccan mining practices and heritage.",
  keywords:
    "Moroccan mining, Morocco minerals, mining company Morocco, sustainable mining Morocco, Moroccan mineral extraction, Morocco mining experts",
  openGraph: {
    title: "About The 3 Rocks - Morocco's Premier Mining Experts",
    description:
      "Discover our Moroccan mining heritage, sustainable practices, and how we've become leaders in Morocco's mineral industry over generations.",
    images: [
      {
        url: "/images/moroccan-mining-heritage.jpg",
        width: 1200,
        height: 630,
        alt: "The 3 Rocks Mining Operations in Morocco",
      },
    ],
  },
};

import Hero from "@/components/hero-about";
import FeaturesGallery from "@/components/features-gallery";
import Timeline from "@/components/timeline";
import Career from "@/components/career";
import FeaturesAnimation from "@/components/features-animation";
import Team from "@/components/team";
import CtaContact from "@/components/cta-contact";
import ContactInfoSection from "@/components/data-company";
import ChatButtons from "@/components/ChatButtons";

export default function About() {
  return (
    <>
      <ChatButtons />
      {/* Hero section showcasing Moroccan mining heritage */}
      <Hero />

      {/* Gallery featuring our Moroccan mining operations */}
      <FeaturesGallery />

      {/* Uncomment when ready to display Moroccan mining history timeline */}
      {/* <Timeline /> */}

      {/* Uncomment when ready to display careers in Moroccan mining */}
      {/* <Career /> */}

      {/* Features highlighting our Moroccan mining innovations */}
      <FeaturesAnimation />

      {/* Our expert Moroccan mining team */}
      <Team />
      <ContactInfoSection />
      {/* Contact section for Moroccan mineral inquiries */}
      {/* <CtaContact /> */}
    </>
  );
}

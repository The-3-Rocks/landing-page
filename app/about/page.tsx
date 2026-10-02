export const metadata = {
  title: "About The 3 Rocks — Lead, Zinc & Mineral Exporter Morocco",
  description:
    "Discover Morocco's premier mining company with decades of expertise in extracting high-quality minerals from Morocco's rich geological deposits. Learn about our sustainable Moroccan mining practices and heritage.",
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
import StoryAccordion from "@/components/story-accordion";
import FeaturesGallery from "@/components/features-gallery";
import Timeline from "@/components/timeline";
import Career from "@/components/career";
import Team from "@/components/team";
import CtaContact from "@/components/cta-contact";
import ContactInfoSection from "@/components/data-company";
import ChatButtons from "@/components/ChatButtons";

export default function About() {
  return (
    <>
      <ChatButtons />
      <Hero />
      <StoryAccordion />

      <FeaturesGallery />

      {/* <Timeline /> */}

      {/* <Career /> */}

      <Team />
      <ContactInfoSection />
      {/* <CtaContact /> */}
    </>
  );
}

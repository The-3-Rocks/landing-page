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
      <Hero />

      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-16">
            <div className="text-center pb-8" data-aos="fade-down">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
                Our Story
              </div>
              <h2 className="h2 font-red-hat-display mb-4">A Moroccan Mining House Built on Trust</h2>
            </div>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 max-w-none prose-p:leading-relaxed prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-white" data-aos="fade-up">
              <p>
                The 3 Rocks Company was founded to solve a problem that international buyers of Moroccan raw materials had been facing for decades: how to source lead, zinc, copper, barite, iron, cobalt, and antimony from a single trusted partner who could guarantee grade, documentation, and delivery, without having to coordinate with half a dozen intermediaries scattered across three continents. Our founders came from the Moroccan mining sector itself — geologists, beneficiation engineers, and export logistics professionals who had worked inside the country’s largest mining groups before deciding to build a more agile, buyer-focused alternative.
              </p>
              <p>
                From our headquarters in Rabat and a network of depots in Errachidia, Khenifra, Midelt, Ouarzazate, Nador, and Casablanca, we now serve industrial buyers in more than twenty countries. Our portfolio covers the seven minerals that together represent the bulk of Morocco’s strategic non-phosphate mining output. Each shipment is tested at an ISO 17025-accredited laboratory before loading, packaged in compliance with international shipping regulations, and documented end-to-end with certificates of origin, certificates of analysis, bills of lading, packing lists, and commercial invoices.
              </p>
              <p>
                We are proud of the reputation we have built with our clients. More than seventy percent of our new business comes from referrals by existing customers — a metric that we consider the clearest possible endorsement of our work. Many of our first clients from a decade ago are still our clients today, and several have grown with us from single-trial orders into long-term offtake contracts measured in tens of thousands of tons per year. We have also invested heavily in our editorial library, our sustainability disclosures, and our laboratory protocols, so that buyers who are just discovering Moroccan raw materials have a transparent, well-documented entry point.
              </p>
              <p>
                The 3 Rocks is, at its heart, a service company. We do not extract the ore ourselves; we partner with the best mining operations in each region, applying consistent quality standards across the entire supply chain. We do not own the vessels; we coordinate with established freight forwarders and shipping lines that serve the major Moroccan ports of Casablanca, Tangier Med, and Jorf Lasfar. What we own is the relationship with the buyer, the integrity of the chain of custody, and the commitment to be reachable, accountable, and fair at every stage of the engagement.
              </p>
              <p>
                Our technical team brings together geologists who have mapped mineral deposits across the High Atlas, Anti-Atlas, and Middle Atlas ranges, mineral processing engineers with hands-on experience operating beneficiation plants for lead, zinc, barite, cobalt, and antimony, and logistics professionals who have managed export shipments from Morocco to over twenty destination countries. Each member of our technical staff holds relevant professional qualifications — including engineering degrees from Moroccan and European universities, certifications in XRF and ICP analysis, and professional memberships in organisations such as the Institute of Materials, Minerals and Mining and the Society for Mining, Metallurgy and Exploration. This depth of in-house expertise is what allows us to answer technical questions about mineral grade, impurity profiles, beneficiation routes, and application suitability without having to consult external consultants.
              </p>
              <p>
                In the field, our team maintains direct relationships with mining operations that collectively span more than thirty individual deposits across Morocco&rsquo;s mineral-producing regions. Each deposit has been evaluated by our geological team for grade consistency, mineralogy, access infrastructure, and environmental compliance before being added to our supply network. We do not work with artisanal or unlicensed operations, and every mining partner in our network must demonstrate a valid exploitation licence, an approved environmental management plan, and a visible commitment to worker health and safety before the first shipment can be scheduled. This due diligence process is documented in writing and reviewed annually, and the records are available for inspection by buyers who request them during the contract negotiation phase.
              </p>
              <p>
                Our laboratory quality control system integrates on-site screening at our Errachidia depot with third-party analysis at ISO 17025-accredited laboratories in Casablanca, Rabat, and Marrakech. The on-site facility is equipped with a handheld XRF analyser for rapid elemental grade screening of incoming lots, a thermogravimetric analyser for moisture determination, a sieve shaker for particle size analysis, and a pycnometer for specific gravity measurement. All production lots are assigned unique reference numbers that track the material from the mine weighbridge through beneficiation, sampling, testing, and packing, and the results of all quality control tests are recorded in a digital database that is accessible to our export documentation team in real time. The third-party certificate of analysis that accompanies each shipment confirms the grade, impurity profile, moisture, and physical properties determined by the methods specified in the sales contract, and the buyer retains the right to nominate a fourth laboratory for umpire analysis in the event of a grade dispute.
              </p>
              <p>
                We are equally comfortable handling a 20-ton trial shipment of Moroccan zinc calamine for a brand-new customer as we are coordinating a 40,000-ton iron ore cargo from the Nador district to a Mediterranean steel mill. Whichever the size of the engagement, our quality system, our people, and our commitment to transparent communication remain the same. If you would like to learn more about our work, discuss a specific sourcing requirement, or arrange a visit to one of our depots, please <a href="/contact">get in touch</a> — we respond to every enquiry within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturesGallery />

      {/* <Timeline /> */}

      {/* <Career /> */}

      <FeaturesAnimation />

      <Team />
      <ContactInfoSection />
      {/* <CtaContact /> */}
    </>
  );
}

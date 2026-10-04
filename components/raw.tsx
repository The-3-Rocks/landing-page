"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Pickaxe,
  Compass,
  ShieldCheck,
  Leaf,
  Cpu,
} from "lucide-react";
import PageIllustration from "@/components/page-illustration";
import ShipmentJourney from "@/components/shipment-journey";
import MineralBackdrop from "@/components/mineral-backdrop";
import { products, Product } from "@/lib/products";

/* ------------------------------------------------------------------ */
/*  Decorative "geological survey" motifs (graphics only, no text)    */
/* ------------------------------------------------------------------ */

function ContourLines({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="currentColor" strokeWidth="1">
          <path d="M-100 240 C 220 180, 520 320, 840 240 S 1380 120, 1600 200" />
          <path d="M-100 280 C 220 220, 520 360, 840 280 S 1380 160, 1600 240" />
          <path d="M-100 320 C 220 260, 520 400, 840 320 S 1380 200, 1600 280" />
          <path d="M-100 360 C 220 300, 520 440, 840 360 S 1380 240, 1600 320" />
          <path d="M-100 400 C 220 340, 520 480, 840 400 S 1380 280, 1600 360" />
          <path d="M-100 440 C 220 380, 520 520, 840 440 S 1380 320, 1600 400" />
        </g>
        <g stroke="currentColor" strokeWidth="1" strokeDasharray="2 4">
          <path d="M1180 -40 L 1155 180 L 1235 420 L 1205 680" />
          <path d="M1510 100 L 1390 320 L 1450 540" />
          <path d="M120 640 L 260 620 L 340 700" />
        </g>
        <g stroke="currentColor" strokeWidth="1">
          <path d="M90 82 V 98 M82 90 H 98" />
          <path d="M470 120 V 136 M462 128 H 478" />
          <path d="M1000 190 V 206 M992 198 H 1008" />
          <path d="M320 640 V 656 M312 648 H 328" />
          <path d="M1180 620 V 636 M1172 628 H 1188" />
        </g>
      </svg>
    </div>
  );
}

function SurveyCorners({ className = "" }: { className?: string }) {
  const brackets = [
    { className: "top-3 left-3", style: {} },
    { className: "top-3 right-3", style: { transform: "scaleX(-1)" } },
    { className: "bottom-3 left-3", style: { transform: "scaleY(-1)" } },
    {
      className: "bottom-3 right-3",
      style: { transform: "scale(-1)" },
    },
  ];
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      {brackets.map((bracket, i) => (
        <svg
          key={i}
          viewBox="0 0 28 28"
          fill="none"
          className={`absolute h-7 w-7 ${bracket.className}`}
          style={bracket.style}
        >
          <path
            d="M1 27 V5 Q1 1 5 1 H27"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Products page                                                      */
/* ------------------------------------------------------------------ */

export default function ProductsPage() {
  const featured = products[0];
  const catalog = products.filter((product) => product.id !== "lead");

  const expertiseCards: {
    title: string;
    text: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: "Moroccan Mining: Tradition & Innovation",
      text: "The 3 Rocks combines traditional Moroccan mining methods with modern techniques. We honor Morocco's mining heritage while implementing advanced technologies for enhanced efficiency and safety in our mineral operations.",
      icon: <Compass size={20} strokeWidth={1.8} />,
    },
    {
      title: "Moroccan Quality & Global Reliability",
      text: "Our Moroccan minerals are renowned worldwide for their quality and reliability. We implement rigorous quality control from extraction to final delivery, ensuring our products meet international standards.",
      icon: <ShieldCheck size={20} strokeWidth={1.8} />,
    },
    {
      title: "Sustainability in Moroccan Mining",
      text: "We employ environmentally responsible mining practices that minimize ecological impact while maximizing resource utilization, following strict environmental guidelines in all our Moroccan operations.",
      icon: <Leaf size={20} strokeWidth={1.8} />,
    },
    {
      title: "The Future of Moroccan Mining",
      text: "We're committed to integrating emerging technologies into Morocco's mining sector while maintaining our dedication to quality and sustainability, training the next generation of Moroccan mining professionals.",
      icon: <Cpu size={20} strokeWidth={1.8} />,
    },
  ];

  return (
    <>
      {/* Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-[#F5EFE3] dark:bg-[#121218]">
        <ContourLines className="hidden dark:block text-gray-800/15 dark:text-gray-300/10" />
        <div aria-hidden="true" className="absolute inset-x-0 top-20 bottom-0">
          <MineralBackdrop preset="hero" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-16">
            {/* Page header */}
            <div
              className="max-w-4xl mx-auto text-center"
              data-aos="fade-up"
            >
              <h1 className="h1 font-red-hat-display font-black bg-gradient-to-br from-gray-900 via-gray-800 to-teal-700 dark:from-white dark:via-gray-200 dark:to-teal-300 bg-clip-text text-transparent">
                Moroccan Mineral Exporter
              </h1>
              <div className="mt-5 flex items-center justify-center gap-4">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-gradient-to-r from-transparent to-teal-600/60 dark:to-teal-400/60"
                />
                <p className="font-red-hat-display text-xs font-bold uppercase tracking-[0.3em] text-teal-700 dark:text-teal-300 sm:text-sm">
                  Lead, Zinc, Copper, Barite, Iron, Cobalt &amp; Antimony
                </p>
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-gradient-to-l from-transparent to-teal-600/60 dark:to-teal-400/60"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================== FEATURED — LEAD ====================== */}
      <section
        id="lead"
        className="relative scroll-mt-28 overflow-hidden bg-[#F5EFE3] dark:bg-[#121218]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-500/10"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-16 md:pb-24">
            <div
              className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-gray-900/5 ring-1 ring-gray-200/70 dark:bg-gray-800 dark:shadow-black/40 dark:ring-gray-700/50"
              data-aos="fade-up"
            >
              <div className="lg:grid lg:grid-cols-12 lg:items-stretch">
                {/* Image */}
                <div className="relative min-h-[320px] lg:col-span-7 md:min-h-[430px]">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src={featured.image}
                    width={900}
                    height={600}
                    alt="Moroccan Lead raw material"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                  <SurveyCorners className="text-white/70" />
                  <div className="absolute bottom-0 left-0 p-7 md:p-9">
                    <div className="inline-block px-4 py-2 rounded-full bg-teal-500 text-white font-semibold text-sm mb-3 shadow-lg shadow-teal-900/30">
                      Featured Moroccan Mineral
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-red-hat-display">
                      Moroccan Lead
                    </h2>
                    <p className="text-white/90 max-w-md">
                      86% pure lead from Morocco's premier mining regions,
                      available as concentrate, powder, and ore
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 md:p-10 lg:col-span-5 lg:p-12">
                  <h3 className="h4 font-red-hat-display mb-4 text-gray-900 dark:text-white">
                    Exceptional Purity &amp; Moroccan Mining Heritage
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    At The 3 Rocks Company, we pride ourselves on offering
                    high-quality Moroccan lead that stands out for its
                    exceptional purity and unmatched durability. Our lead is
                    carefully extracted from Morocco's mineral-rich mountains
                    and engineered to meet the specific demands of various
                    industries.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-7">
                    <div className="relative overflow-hidden rounded-xl border border-teal-500/25 bg-teal-50/70 p-4 dark:border-teal-500/30 dark:bg-teal-900/20">
                      <span className="absolute left-0 top-0 h-full w-1 bg-teal-500" />
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                        Moroccan Concentrate
                      </span>
                      <span className="block mt-1 text-xl font-bold text-gray-900 dark:text-white">
                        86% pure lead
                      </span>
                      <span className="block text-sm text-copper-700 dark:text-copper-300">
                        400 tons in stock
                      </span>
                    </div>
                    <div className="relative overflow-hidden rounded-xl border border-copper-500/25 bg-copper-50/70 p-4 dark:border-copper-500/30 dark:bg-copper-900/20">
                      <span className="absolute left-0 top-0 h-full w-1 bg-copper-500" />
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-copper-700 dark:text-copper-300">
                        Available Forms
                      </span>
                      <span className="block mt-1 text-xl font-bold text-gray-900 dark:text-white">
                        Multiple options
                      </span>
                      <span className="block text-sm text-teal-700 dark:text-teal-300">
                        Contact for details
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/products/lead"
                    className="btn-sm text-white bg-teal-500 hover:bg-teal-400 self-start group/btn"
                  >
                    Learn More About Our Moroccan Lead
                    <ArrowRight
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      strokeWidth={2}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CATALOG GRID ====================== */}
      <section className="relative overflow-hidden bg-[#F5EFE3] dark:bg-[#121218]">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-16 md:pb-24">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
              {catalog.map((product, index) => {
                const streakColor =
                  product.id === "barite" ? "bg-gray-300" : product.color;
                return (
                  <article
                    key={product.id}
                    id={product.id}
                    className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md ring-1 ring-gray-200/70 dark:ring-gray-700/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-teal-500/10 scroll-mt-28"
                    data-aos="fade-up"
                    data-aos-delay={(index % 3) * 100}
                  >
                    {/* mineral streak */}
                    <div
                      className={`h-1.5 w-full ${streakColor} transition-colors duration-500`}
                    />

                    {/* specimen image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src={product.image}
                        width={400}
                        height={260}
                        alt={`Moroccan ${product.name} mineral`}
                      />
                      <div
                        className={`absolute inset-0 ${product.color} opacity-20 mix-blend-multiply dark:opacity-25 dark:mix-blend-screen`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                      <SurveyCorners className="text-white/60" />

                      {/* purity badge */}
                      <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-900 shadow-md backdrop-blur dark:bg-gray-900/80 dark:text-white">
                        {product.purity}
                      </div>
                    </div>

                    {/* body */}
                    <div className="flex grow flex-col p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold font-red-hat-display text-gray-900 dark:text-white">
                          Moroccan {product.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
                        {product.description}
                      </p>
                      <div className="relative mb-4 overflow-hidden">
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-500 group-hover:text-gray-600 dark:group-hover:text-gray-100">
                          {product.richDescription}
                        </p>
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-0"
                        />
                      </div>

                      {/* forms */}
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {product.forms.map((form) => (
                          <span
                            key={form}
                            className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500 transition-colors duration-300 group-hover:border-teal-500/40 group-hover:text-teal-700 dark:border-gray-600 dark:text-gray-400 dark:group-hover:text-teal-300"
                          >
                            {form}
                          </span>
                        ))}
                      </div>

                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          Available Stock:
                        </span>{" "}
                        {product.stock}
                      </div>

                      <Link
                        href={`/products/${product.id}`}
                        className="btn-sm text-white bg-teal-500 hover:bg-teal-400 w-full mt-auto group/btn"
                      >
                        View Moroccan {product.name} Details
                        <ArrowRight
                          className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                          strokeWidth={2}
                        />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== QUALITY & LOGISTICS ====================== */}
      <ShipmentJourney
        stages={[
          { number: "01", title: "SOURCED", text: `Every mineral listed on this page is supported by a documented quality control process that begins at the mine site and continues through beneficiation, packing, and port loading. Our quality assurance team collects samples at each stage of the supply chain and submits them to ISO 17025-accredited laboratories in Casablanca and Rabat for analysis by X-ray fluorescence, inductively coupled plasma optical emission spectrometry, and gravimetric methods as appropriate for the mineral type and the parameter being measured. The certificate of analysis issued for each shipment includes the target element grade, a full impurity profile covering all elements that could affect the material&rsquo;s performance in the buyer&rsquo;s process, moisture content, and relevant physical properties such as specific gravity for barite, particle size distribution for powder products, and bulk density for ore and lump materials.` },
          { number: "02", title: "VERIFIED", text: `Export logistics are managed through our network of regional depots located near each mining district and through our port operations teams in Casablanca, Tangier Med, and Jorf Lasfar. Our logistics coordinators arrange trucking from the mine or beneficiation plant to the port, manage container booking and stuffing, clear shipments through Moroccan customs using the ADIL electronic system, and prepare the full export documentation package including the certificate of origin from the Moroccan Chamber of Commerce, the commercial invoice, the packing list, the bill of lading, and the insurance certificate. Buyers receive real-time tracking information once the container is gated into the port terminal and can monitor vessel position throughout the voyage using the AIS tracking link provided by our logistics team.` },
          { number: "03", title: "PREPARED", text: `We offer flexible shipping terms to match buyers&rsquo; procurement preferences. FOB Casablanca or Tangier Med is the most commonly used incoterm for first-time buyers, as it gives the buyer control over ocean freight selection and insurance placement. CIF and CFR terms are available for buyers who prefer a delivered price that includes all logistics costs to their nominated port. For long-term contract buyers who require stable delivered pricing, we can structure quarterly or biannual pricing based on the LME or Metal Bulletin reference price for the relevant mineral, with a fixed logistics margin that covers freight, insurance, and port handling charges for the duration of the contract term.` },
          { number: "04", title: "DELIVERED", text: `Every buyer at The 3 Rocks is assigned a dedicated account manager who serves as the single point of contact from initial inquiry through contract negotiation, production scheduling, laboratory testing, shipping coordination, and post-delivery follow-up. This means that when you email or call about a Moroccan mineral shipment, you speak to someone who knows your specification, your quality requirements, your preferred incoterm, and your logistics chain. We also provide monthly market updates to active buyers covering price movements in the relevant commodities, regulatory changes affecting Moroccan mineral exports, and new stock availability from our network of partner mines across the Anti-Atlas, High Atlas, Middle Atlas, and eastern Meseta regions.` },
        ]}
      />

      {/* ====================== MINING EXPERTISE ====================== */}
      <section className="relative overflow-hidden bg-[#F5EFE3] dark:bg-[#121218]">
        <ContourLines className="hidden dark:block text-gray-800/10 dark:text-gray-300/[0.07]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-16 md:py-24">
            <div
              className="max-w-3xl mx-auto text-center pb-12 md:pb-16"
              data-aos="fade-up"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 text-white mb-6 shadow-lg shadow-copper-500/25 rotate-3">
                <Pickaxe size={30} strokeWidth={1.7} />
              </div>
              <h2 className="h2 font-red-hat-display mb-4 text-gray-900 dark:text-white">
                Our Moroccan Mining Heritage &amp; Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                With decades of experience in Moroccan mining and processing raw
                materials, we've developed sustainable and efficient extraction
                methods that honor Morocco's rich mineral legacy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {expertiseCards.map((card, i) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-copper-500/10 dark:bg-gray-800 dark:ring-gray-700/50"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 right-8 h-1 w-14 rounded-b bg-gradient-to-r from-copper-400 to-transparent"
                  />
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl border border-teal-500/20 bg-teal-500/10 text-teal-700 transition-colors duration-300 group-hover:bg-teal-500 group-hover:text-white dark:text-teal-300">
                    {card.icon}
                  </div>
                  <h3 className="h4 font-red-hat-display mb-3 text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CTA ====================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F3EAD9] to-[#EADCC5] dark:from-[#20493C] dark:to-[#122A23]">
        <ContourLines className="hidden dark:block text-teal-200/20" />
        <MineralBackdrop preset="hero" />
        <div className="absolute inset-0 dark:bg-[#122A23]/55" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-20 md:py-28" data-aos="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 font-red-hat-display mb-5 text-gray-900 dark:text-white">
                Ready to unlock Morocco's mining potential?
              </h2>
              <p className="text-xl text-gray-600 dark:text-white/75">
                Contact us today to discuss your Moroccan raw material needs and
                receive a personalized quote for premium Moroccan mining
                products.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn text-white bg-teal-500 hover:bg-teal-400 font-semibold shadow-lg shadow-teal-900/20 dark:text-gray-900 dark:bg-white dark:hover:bg-teal-50 dark:shadow-xl dark:shadow-black/20"
                >
                  Connect with Morocco's Mining Experts
                </Link>
                <Link
                  href="/"
                  className="btn text-teal-800 bg-white/60 border border-teal-700/30 hover:bg-white/80 dark:text-white dark:bg-white/10 dark:border-white/30 dark:hover:bg-white/20 backdrop-blur"
                >
                  Explore The 3 Rocks Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

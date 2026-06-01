// app/products/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import PageIllustration from "@/components/page-illustration";
import React from "react";
import { products } from "@/lib/products";

// Detailed product information including data from ProductPopup
const productDetails: Record<string, any> = {
  lead: {
    title: "Moroccan Lead",
    description:
      "At The 3 Rocks Company, we pride ourselves on offering high-quality Moroccan lead that stands out for its exceptional purity and unmatched durability, sourced from Morocco's historic mining regions.",
    purityDetails: {
      concentrate: "86% pure lead",
      powder: "76% pure lead",
      ore: "More than 50%",
    },
    stockDetails: {
      concentrate: "400 tons",
      powder: "150 tons",
      ore: "300 tons",
    },
    monthlyCapacity: "700 tons each month",
    applications: [
      "Construction materials",
      "Automotive industry",
      "Electronics and energy storage",
      "Radiation shielding",
      "Cosmetics manufacturing",
    ],
    qualityAssurance:
      "Our Moroccan lead meets the highest industry standards with strict quality control processes throughout extraction and processing at our Morocco-based facilities.",
    annualExtraction: "8400 tons from Moroccan mines",
    purityLevel: "99.97%",
    specs: [
      { name: "Lead Concentrate Purity", value: "86% pure" },
      { name: "Lead Powder Purity", value: "76% pure" },
      { name: "Lead Ore Purity", value: "More than 50%" },
      { name: "Monthly Production", value: "700 tons" },
      { name: "Industry Grade", value: "99.97%" },
      { name: "Density", value: "11.34 g/cm³" },
      { name: "Melting Point", value: "327.5°C (621.5°F)" },
    ],
  },
  copper: {
    title: "Moroccan Copper",
    description:
      "Our Moroccan copper stands out for its exceptional quality and versatility, making it indispensable for a variety of industrial applications worldwide.",
    purity: "8% to 21% (with special permit for 40% high-purity copper)",
    stock: "500 tons",
    applications: [
      "Electrical systems and wiring",
      "Electronics manufacturing",
      "Construction components",
      "Telecommunications infrastructure",
      "Heat exchangers and cooling systems",
    ],
    qualityAssurance:
      "Through meticulous quality control from extraction in Morocco's copper-rich regions to processing, we guarantee copper that consistently delivers performance and reliability.",
    annualExtraction: "17,000 tons from Moroccan mines",
    purityLevel: "99.9%",
    specs: [
      { name: "Purity Range", value: "8% to 21%" },
      { name: "Available Stock", value: "500 tons" },
      { name: "Industry Grade", value: "99.9%" },
    ],
  },
  zinc: {
    title: "Moroccan Zinc (Calamine)",
    description:
      "Our high-quality Moroccan zinc calamine offers exceptional purity and reliability for various applications, including cosmetics and industrial uses.",
    purityDetails: {
      ore: "+37%",
      concentrate: "70%",
    },
    stockDetails: {
      ore: "300 tons",
      concentrate: "80 tons",
    },
    applications: [
      "Manufacturing processes",
      "Pharmaceuticals",
      "Cosmetics and skincare products",
      "Galvanizing steel",
      "Die-casting",
    ],
    qualityAssurance:
      "With meticulous production and strict quality control at our Moroccan facilities, we meet the highest industry standards for zinc processing.",
    annualExtraction: "50,000+ tons from Morocco's zinc deposits",
    purityLevel: "99.95%",
    specs: [
      { name: "Ore Purity", value: "+37%" },
      { name: "Concentrate Purity", value: "70%" },
      { name: "Available Stock (Ore)", value: "300 tons" },
      { name: "Available Stock (Concentrate)", value: "80 tons" },
      { name: "Industry Grade", value: "99.95%" },
      { name: "Density", value: "7.14 g/cm³" },
      { name: "Melting Point", value: "419.5°C (787.1°F)" },
    ],
  },
  barite: {
    title: "Moroccan Barite",
    description:
      "Our Moroccan Barite is renowned for its high quality and purity, making it indispensable for a wide range of industrial applications globally.",
    density: "4.18 - 4.28",
    stock: "400 tons",
    applications: [
      "Drilling fluids for oil and gas industry",
      "Medical applications (X-ray and radiation protection)",
      "Paint and coatings",
      "Construction materials",
      "Pharmaceutical applications",
    ],
    qualityAssurance:
      "With rigorous sourcing from Morocco's barite-rich regions and manufacturing processes, we ensure that our Barytine meets stringent industry standards.",
    annualExtraction: "80,000 tons from Morocco's mineral deposits",
    purityLevel: "4.2 specific gravity",
    specs: [
      { name: "Density", value: "4.18 - 4.28" },
      { name: "Available Stock", value: "400 tons" },
      { name: "Specific Gravity", value: "4.2" },
      { name: "Chemical Formula", value: "BaSO₄" },
      { name: "Color", value: "White to light gray" },
      { name: "Hardness", value: "3-3.5 on Mohs scale" },
    ],
  },
  iron: {
    title: "Moroccan Iron",
    description:
      "Our Moroccan iron is distinguished by its superior quality and adaptability, essential for a wide array of industrial uses around the world.",
    purity: "≥ 56%",
    stock: "40,000 tons",
    applications: [
      "Construction and infrastructure",
      "Manufacturing equipment",
      "Automotive components",
      "Industrial machinery",
      "Tools and hardware",
    ],
    qualityAssurance:
      "With rigorous quality control from sourcing to production in our Moroccan facilities, we guarantee that our iron meets the most rigorous industry standards.",
    annualExtraction: "120,000 tons from Morocco's iron-rich mountains",
    purityLevel: "98.5%",
    specs: [
      { name: "Purity", value: "≥ 56%" },
      { name: "Available Stock", value: "40,000 tons" },
      { name: "Industry Grade", value: "98.5%" },
      { name: "Density", value: "7.87 g/cm³" },
      { name: "Melting Point", value: "1,538°C (2,800°F)" },
      { name: "Form", value: "Ore, concentrate" },
    ],
  },
  cobalt: {
    title: "Moroccan Cobalt",
    description:
      "Our high-quality Moroccan cobalt is essential for modern technology and industrial applications, sustainably sourced from Morocco's mineral wealth.",
    purity: "42%+",
    stock: "Available upon request",
    applications: [
      "Lithium-ion batteries",
      "Superalloys for aerospace",
      "Cutting tools and drill bits",
      "Magnetic materials",
      "Healthcare applications",
    ],
    qualityAssurance:
      "We source cobalt responsibly from Morocco's mining regions and ensure consistent quality for all technological and industrial uses.",
    annualExtraction: "New addition to Morocco's mineral exports",
    purityLevel: "99.8%",
    specs: [
      { name: "Purity", value: "42%+" },
      { name: "Available Stock", value: "Available upon request" },
      { name: "Industry Grade", value: "99.8%" },
      { name: "Form", value: "Ore, Concentrate" },
    ],
  },
  antimony: {
    title: "Moroccan Antimony",
    description:
      "Our premium Moroccan antimony provides exceptional quality for various industrial applications, sourced from Morocco's exclusive mining operations.",
    purity: "30%+",
    stock: "+700 tons",
    applications: [
      "Flame retardants",
      "Battery manufacturing",
      "Electronic components",
      "Glass and ceramic production",
      "Metal alloys",
    ],
    qualityAssurance:
      "Our Moroccan antimony undergoes strict quality control to meet the highest industry standards in our state-of-the-art Moroccan facilities.",
    annualExtraction: "25,000 tons from Morocco's antimony deposits",
    purityLevel: "99.65%",
    specs: [
      { name: "Purity", value: "30%+" },
      { name: "Available Stock", value: "+700 tons" },
      { name: "Industry Grade", value: "99.65%" },
      { name: "Form", value: "Ore, Concentrate" },
    ],
  },
};

// Helper function to format purity
const formatPurity = (
  purity: string | { concentrate?: string; powder?: string; ore: string },
): string => {
  if (typeof purity === "string") return purity;

  const parts = [];
  if (purity.concentrate) parts.push(`Concentrate: ${purity.concentrate}`);
  if (purity.powder) parts.push(`Powder: ${purity.powder}`);
  if (purity.ore) parts.push(`Ore: ${purity.ore}`);

  return parts.join(", ");
};

// Helper function to format stock
const formatStock = (
  stock: string | { concentrate?: string; powder?: string; ore: string },
): string => {
  if (typeof stock === "string") return stock;

  const parts = [];
  if (stock.concentrate) parts.push(`Concentrate: ${stock.concentrate}`);
  if (stock.powder) parts.push(`Powder: ${stock.powder}`);
  if (stock.ore) parts.push(`Ore: ${stock.ore}`);

  return parts.join(", ");
};

// Product-specific SEO keywords
const productKeywords: Record<string, string[]> = {
  lead: [
    "Moroccan lead",
    "lead Morocco",
    "lead supplier Morocco",
    "Morocco lead mining",
    "lead concentrate Morocco",
    "lead powder Morocco",
    "lead ore Morocco",
    "Morocco lead concentrate",
    "Morocco lead powder",
    "Morocco lead ore",
    "lead concentrate supplier Morocco",
    "lead powder supplier Morocco",
    "lead ore supplier Morocco",
    "lead ingot exporter morocco",
    "high-purity lead Morocco",
    "Moroccan lead exporter",
    "Morocco lead deposits",
    "Bni Taddjit lead",
    "Errachidia lead mining",
    "lead-acid battery materials",
    "radiation shielding lead",
    "industrial lead Morocco",
    "99.97% pure lead",
    "lead mining Morocco",
    "Morocco raw materials lead",
    "African lead supplier",
    "North Africa lead",
    "lead concentrate supplier",
    "Morocco mineral exports lead",
    "ethically sourced lead",
    "sustainable lead mining",
    "lead for batteries",
    "construction lead materials",
    "automotive lead supplier",
    "electronics lead Morocco",
  ],
  copper: [
    "Moroccan copper",
    "copper Morocco",
    "copper supplier Morocco",
    "copper ore supplier morocco",
    "Moroccan copper concentrate",
    "copper raw material Morocco",
    "Morocco copper mining",
    "copper ore Morocco",
    "Morocco copper ore",
    "copper ore supplier Morocco",
    "copper concentrate Morocco",
    "Morocco copper concentrate",
    "high-quality copper Morocco",
    "Moroccan copper exporter",
    "Tinghir copper mining",
    "Morocco copper deposits",
    "industrial copper Morocco",
    "99.9% pure copper",
    "copper mining Morocco",
    "Morocco raw materials copper",
    "African copper supplier",
    "North Africa copper",
    "electrical copper Morocco",
    "Morocco mineral exports copper",
    "ethically sourced copper",
    "sustainable copper mining",
    "copper wiring materials",
    "electronics copper supplier",
    "telecommunications copper",
    "construction copper Morocco",
    "copper cathode Morocco",
    "renewable energy copper",
    "8-21% copper purity",
  ],
  zinc: [
    "Moroccan zinc",
    "zinc Morocco",
    "zinc calamine Morocco",
    "zinc supplier Morocco",
    "Morocco zinc mining",
    "zinc ore Morocco",
    "zinc concentrate Morocco",
    "Morocco zinc ore",
    "Morocco zinc concentrate",
    "zinc ore supplier Morocco",
    "zinc concentrate supplier Morocco",
    "calamine ore Morocco",
    "Morocco calamine ore",
    "high-purity zinc Morocco",
    "Moroccan zinc exporter",
    "Bni Taddjit zinc",
    "Errachidia zinc mining",
    "Morocco zinc deposits",
    "industrial zinc Morocco",
    "99.95% pure zinc",
    "zinc mining Morocco",
    "Morocco raw materials zinc",
    "African zinc supplier",
    "North Africa zinc",
    "galvanizing zinc Morocco",
    "Morocco mineral exports zinc",
    "ethically sourced zinc",
    "sustainable zinc mining",
    "zinc for cosmetics",
    "pharmaceutical zinc",
    "die-casting zinc",
    "zinc calamine skincare",
    "zinc galvanizing steel",
  ],
  barite: [
    "Moroccan barite",
    "barite Morocco",
    "baryte Morocco",
    "barite supplier Morocco",
    "Morocco barite mining",
    "barite powder Morocco",
    "barite ore Morocco",
    "barite lumps Morocco",
    "Morocco barite powder",
    "Morocco barite ore",
    "Morocco barite lumps",
    "barite powder supplier Morocco",
    "barite ore supplier Morocco",
    "barite lumps supplier Morocco",
    "high-density barite Morocco",
    "Moroccan barite exporter",
    "Morocco barite deposits",
    "industrial barite Morocco",
    "4.2 specific gravity barite",
    "barite mining Morocco",
    "Morocco raw materials barite",
    "African barite supplier",
    "North Africa barite",
    "drilling barite Morocco",
    "Morocco mineral exports barite",
    "ethically sourced barite",
    "sustainable barite mining",
    "oil drilling barite",
    "medical barite applications",
    "paint grade barite",
    "construction barite Morocco",
    "BaSO4 Morocco",
    "barium sulfate Morocco",
  ],
  iron: [
    "Moroccan iron",
    "iron Morocco",
    "iron ore Morocco",
    "Morocco iron ore",
    "iron ore supplier Morocco",
    "iron concentrate Morocco",
    "Morocco iron concentrate",
    "iron supplier Morocco",
    "Morocco iron mining",
    "high-purity iron Morocco",
    "Moroccan iron exporter",
    "Morocco iron deposits",
    "industrial iron Morocco",
    "98.5% pure iron",
    "iron ore mining Morocco",
    "Morocco raw materials iron",
    "African iron supplier",
    "North Africa iron",
    "iron ore concentrate Morocco",
    "Morocco mineral exports iron",
    "ethically sourced iron",
    "sustainable iron mining",
    "construction iron Morocco",
    "manufacturing iron ore",
    "automotive iron materials",
    "industrial machinery iron",
    "steel production iron",
    "iron ore 56% purity",
    "Morocco iron-rich mountains",
    "bulk iron ore supplier",
  ],
  cobalt: [
    "Moroccan cobalt",
    "cobalt Morocco",
    "cobalt supplier Morocco",
    "Morocco cobalt mining",
    "cobalt ore Morocco",
    "cobalt concentrate Morocco",
    "Morocco cobalt ore",
    "Morocco cobalt concentrate",
    "cobalt ore supplier Morocco",
    "cobalt concentrate supplier Morocco",
    "high-purity cobalt Morocco",
    "Moroccan cobalt exporter",
    "Morocco cobalt deposits",
    "industrial cobalt Morocco",
    "99.8% pure cobalt",
    "cobalt mining Morocco",
    "Morocco raw materials cobalt",
    "African cobalt supplier",
    "North Africa cobalt",
    "battery-grade cobalt Morocco",
    "Morocco mineral exports cobalt",
    "ethically sourced cobalt",
    "sustainable cobalt mining",
    "lithium-ion battery cobalt",
    "cobalt for batteries",
    "aerospace cobalt alloys",
    "superalloy cobalt Morocco",
    "cobalt 42% purity",
    "electric vehicle cobalt",
    "renewable energy cobalt",
  ],
  antimony: [
    "Moroccan antimony",
    "antimony Morocco",
    "antimony supplier Morocco",
    "Morocco antimony mining",
    "antimony ore Morocco",
    "antimony concentrate Morocco",
    "Morocco antimony ore",
    "Morocco antimony concentrate",
    "antimony ore supplier Morocco",
    "antimony concentrate supplier Morocco",
    "high-purity antimony Morocco",
    "Moroccan antimony exporter",
    "Khenifra antimony mining",
    "Morocco antimony deposits",
    "industrial antimony Morocco",
    "99.65% pure antimony",
    "antimony mining Morocco",
    "Morocco raw materials antimony",
    "African antimony supplier",
    "North Africa antimony",
    "antimony trioxide Morocco",
    "Morocco mineral exports antimony",
    "ethically sourced antimony",
    "sustainable antimony mining",
    "flame retardant antimony",
    "battery antimony materials",
    "electronics antimony Morocco",
    "antimony 30% purity",
    "antimony alloys Morocco",
  ],
};

// Metadata generator
export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const details = productDetails[params.id];

  if (!product || !details) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  const productUrl = `https://www.the-3rocks.com/products/${params.id}`;
  const productImage = `https://www.the-3rocks.com/images/${params.id}-product.png`;

  // Generate Schema.org Product structured data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: details.title,
    image: productImage,
    description: details.description,
    brand: {
      "@type": "Brand",
      name: "The 3 Rocks Company",
    },
    manufacturer: {
      "@type": "Organization",
      name: "The 3 Rocks Company",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Morocco",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "1000",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "The 3 Rocks Company",
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "MA",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: "30",
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "MA",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "0",
            maxValue: "1",
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: "1",
            maxValue: "5",
            unitCode: "DAY",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "85",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Industrial Partner",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Origin",
        value: "Morocco",
      },
      {
        "@type": "PropertyValue",
        name: "Purity Level",
        value: details.purityLevel,
      },
      {
        "@type": "PropertyValue",
        name: "Annual Extraction",
        value: details.annualExtraction,
      },
    ],
    category: "Mining & Raw Materials",
    countryOfOrigin: {
      "@type": "Country",
      name: "Morocco",
    },
  };

  return {
    title: `${details.title} | Premium Moroccan Mining Materials`,
    description: details.description,
    keywords: productKeywords[params.id] || [],
    authors: [{ name: "The 3 Rocks Company" }],
    creator: "The 3 Rocks Mining Company",
    publisher: "The 3 Rocks Company, Morocco",
    openGraph: {
      title: `${details.title} - Premium Quality from Morocco`,
      description: details.description,
      url: productUrl,
      siteName: "The 3 Rocks",
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: `${details.title} - Premium Moroccan Mining Material`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${details.title} - Premium Moroccan Mining Materials`,
      description: details.description,
      images: [productImage],
      creator: "@the3rocks",
      site: "@the3rocks",
    },
    alternates: {
      canonical: productUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": "MA",
      "geo.placename": "Morocco",
      "og:country-name": "Morocco",
    },
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const details = productDetails[params.id];

  // Handle case where product ID doesn't exist
  if (!product || !details) {
    return (
      <>
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 text-center">
              <h1 className="h1 font-red-hat-display mb-4">
                Product Not Found
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                The product you requested is not currently available in our
                catalog.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                This could mean the URL contains an error, the product listing
                has been updated to reflect changes in our Moroccan mining
                supply, or you may have followed an outdated or mistyped link.
                We review and refresh our product catalog every month to match
                current extraction capacity, stock levels, and export
                availability from Morocco's mining regions. Our portfolio
                focuses on the minerals that Morocco produces most abundantly —
                lead, zinc, copper, barite, iron, cobalt, and antimony — each
                available in multiple grades and forms to suit different
                industrial applications worldwide. If you arrived here from a
                search engine, try browsing our full product list or exploring
                our educational articles about Moroccan mining, mineral
                processing, and global supply chain standards.
              </p>
              <div className="mb-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200/50 dark:border-amber-700/30 max-w-lg mx-auto">
                <h2 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Looking for something specific?
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  We specialize in Moroccan lead, zinc, copper, barite, iron,
                  cobalt, and antimony — available as raw ore, high-grade
                  concentrate, and finely processed materials. Our team can
                  provide detailed specifications, current stock levels, and
                  competitive pricing within 24 hours. If you need a mineral
                  grade or form not listed on our site, we may still be able to
                  source it from our network of trusted Moroccan mining
                  partners. Every order includes full documentation, chemical
                  analysis certificates, and logistics coordination from
                  Moroccan ports to your destination. Contact us with your
                  requirements and we will respond with a tailored quote and
                  availability details.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-500 text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact our team for assistance
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/products"
                  className="btn text-white bg-teal-500 hover:bg-teal-400"
                >
                  View All Products
                </Link>
                <Link
                  href="/articles"
                  className="btn text-teal-600 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 hover:bg-teal-100 dark:hover:bg-teal-900/30"
                >
                  Browse Mining Resources
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Generate Schema.org Product structured data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: details.title,
    image: `https://www.the-3rocks.com/images/${params.id}-product.png`,
    description: details.description,
    brand: {
      "@type": "Brand",
      name: "The 3 Rocks Company",
    },
    manufacturer: {
      "@type": "Organization",
      name: "The 3 Rocks Company",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Morocco",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "1000",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "The 3 Rocks Company",
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "MA",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: "30",
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "MA",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "0",
            maxValue: "1",
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: "1",
            maxValue: "5",
            unitCode: "DAY",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "85",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Industrial Partner",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Origin",
        value: "Morocco",
      },
      {
        "@type": "PropertyValue",
        name: "Purity Level",
        value: details.purityLevel,
      },
      {
        "@type": "PropertyValue",
        name: "Annual Extraction",
        value: details.annualExtraction,
      },
    ],
    category: "Mining & Raw Materials",
    countryOfOrigin: {
      "@type": "Country",
      name: "Morocco",
    },
  };

  // Generate Schema.org FAQPage structured data for lead, zinc, and copper
  let faqSchema = null;
  if (params.id === "lead") {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the leading lead ore supplier in Morocco?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 3 Rocks Company is Morocco's leading lead ore supplier, offering high-purity Moroccan lead concentrate, lead powder, and raw lead ore ethically sourced from mineral-rich Moroccan mining regions.",
          },
        },
        {
          "@type": "Question",
          name: "What is the purity of Moroccan lead concentrate and powder you supply?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our lead concentrate features an exceptional purity of 86%, while our lead powder is 76% pure. Raw lead ore is also available at more than 50% purity.",
          },
        },
        {
          "@type": "Question",
          name: "Do you export lead ingots and concentrates globally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, as a trusted lead ingot exporter and raw materials supplier, we export lead concentrates and ores globally, complying with international shipping and environmental safety regulations.",
          },
        },
      ],
    };
  } else if (params.id === "zinc") {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I source high-quality zinc concentrate in Morocco?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 3 Rocks is a leading supplier of premium zinc concentrate in Morocco. We offer high-quality zinc calamine ore (+37% purity) and zinc concentrate (70% purity) sourced from legendary Moroccan mining regions.",
          },
        },
        {
          "@type": "Question",
          name: "What are the key specifications of Moroccan zinc calamine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our zinc calamine ore offers exceptional purity of +37%, a density of 7.14 g/cm³, and a melting point of 419.5°C, making it ideal for galvanization and die-casting.",
          },
        },
      ],
    };
  } else if (params.id === "copper") {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the purity range of Moroccan copper supplied by The 3 Rocks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Moroccan copper ore typically ranges from 8% to 21% purity. We also offer high-purity copper of up to 40% under special export permit.",
          },
        },
        {
          "@type": "Question",
          name: "What are the industrial applications of your Moroccan copper?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is widely used in electrical wiring, telecommunications infrastructure, heat exchangers, cooling systems, and electronics manufacturing.",
          },
        },
      ],
    };
  }

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        src={`/structured-data/products/${params.id}.json`}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          src={`/structured-data/products/${params.id}-faq.json`}
        />
      )}

      {/* Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Back to Products Button */}
            <div className="max-w-7xl mx-auto mb-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <svg
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span className="font-medium">Back to All Products</span>
              </Link>
            </div>

            {/* Product header */}
            <div
              className="max-w-4xl mx-auto text-center pb-12 md:pb-16"
              data-aos="fade-up"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6 shadow-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Premium Moroccan Quality
              </div>
              <h1 className="h1 font-red-hat-display mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {details.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {details.description}
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-4">
                Morocco is one of the world's most significant mineral
                producers, with deposits that have been worked for centuries.
                Our {product.name} is sourced from carefully selected Moroccan
                mining regions known for their exceptional geological
                characteristics. Each shipment reflects the unique mineral
                composition of these deposits, processed under strict quality
                controls to meet international specifications for global buyers.
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed mt-3">
                We offer {product.name} in multiple grades and forms — including
                ore, concentrate, and processed material — to match your exact
                production requirements. Every lot is tested for chemical
                composition, particle size, moisture content, and contaminants
                before shipment. Our logistics team manages all documentation,
                port handling, and shipping from major Moroccan ports to
                destinations worldwide.
              </p>
            </div>

            {/* Product overview with image and specs */}
            <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
              <div className="relative group">
                {/* Glassmorphic card */}
                <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                  <div className="md:flex">
                    {/* Image section */}
                    <div className="md:w-1/2 relative overflow-hidden">
                      <div className="relative h-72 md:h-full min-h-[450px]">
                        <Image
                          src={product.image}
                          alt={`Moroccan ${product.name} mineral`}
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                        <div
                          className={`absolute inset-0 ${product.color} opacity-10`}
                        ></div>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                      </div>
                    </div>

                    {/* Specifications section */}
                    <div className="md:w-1/2 p-8 md:p-10">
                      <h2 className="text-3xl font-bold font-red-hat-display mb-4 text-gray-900 dark:text-white">
                        Specifications
                      </h2>

                      {/* SEO-rich introduction */}
                      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        Our Moroccan {product.name.toLowerCase()} is sourced
                        from Morocco's most productive mining regions, ensuring
                        exceptional quality and purity. Each batch undergoes
                        rigorous quality control testing to meet international
                        industry standards and customer specifications.
                      </p>

                      {/* Annual Extraction */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl border border-teal-200/50 dark:border-teal-700/50">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Annual Extraction
                          </span>
                          <span className="text-lg font-bold text-teal-900 dark:text-teal-100">
                            {details.annualExtraction}
                          </span>
                        </div>
                      </div>

                      {/* Available Stock */}
                      <div className="mb-8">
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                          Available Stock
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                          {"stockDetails" in details ? (
                            <>
                              {details.stockDetails.concentrate && (
                                <div className="relative group/stock p-3 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200/50 dark:border-teal-700/50 hover:shadow-md transition-all">
                                  <div className="text-xs font-medium text-teal-700 dark:text-teal-400 mb-1">
                                    Concentrate
                                  </div>
                                  <div className="text-base font-bold text-teal-900 dark:text-teal-100">
                                    {details.stockDetails.concentrate}
                                  </div>
                                </div>
                              )}
                              {details.stockDetails.powder && (
                                <div className="relative group/stock p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all">
                                  <div className="text-xs font-medium text-blue-700 dark:text-blue-400 mb-1">
                                    Powder
                                  </div>
                                  <div className="text-base font-bold text-blue-900 dark:text-blue-100">
                                    {details.stockDetails.powder}
                                  </div>
                                </div>
                              )}
                              {details.stockDetails.ore && (
                                <div className="relative group/stock p-3 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-200/50 dark:border-amber-700/50 hover:shadow-md transition-all">
                                  <div className="text-xs font-medium text-amber-700 dark:text-amber-400 mb-1">
                                    Ore
                                  </div>
                                  <div className="text-base font-bold text-amber-900 dark:text-amber-100">
                                    {details.stockDetails.ore}
                                  </div>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="col-span-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/30 text-center">
                              <span className="font-semibold text-gray-900 dark:text-white">
                                {details.stock || "Available upon request"}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Additional specs */}
                      <div className="space-y-3 mb-8 p-5 bg-gray-50/50 dark:bg-gray-900/30 rounded-xl border border-gray-200/30 dark:border-gray-700/30">
                        {details.specs
                          .slice(0, 5)
                          .map((spec: any, index: number) => (
                            <div
                              key={index}
                              className="flex justify-between items-center py-2 border-b border-gray-200/50 dark:border-gray-700/50 last:border-0"
                            >
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {spec.name}
                              </span>
                              <span className="font-semibold text-gray-900 dark:text-white">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                      </div>

                      {/* CTA Button */}
                      <Link
                        href="/contact"
                        className="group/btn relative inline-flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-500 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Request Moroccan Minerals Quote
                          <svg
                            className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section - Product Specific */}
            <div className="mb-20" data-aos="fade-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-red-hat-display text-center mb-6 text-gray-900 dark:text-white">
                  Frequently Asked Questions About Moroccan {product.name}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 leading-relaxed">
                  Everything you need to know about our{" "}
                  {product.name.toLowerCase()} extraction, sourcing, and
                  applications.
                </p>

                <div className="space-y-4">
                  {/* FAQ Items - Product Specific */}
                  {product.id === "lead" && (
                    <>
                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Where is the lead mined in Morocco?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our lead is extracted from the{" "}
                          <strong className="text-gray-900 dark:text-white">
                            Errachidia region
                          </strong>
                          , specifically in{" "}
                          <strong className="text-gray-900 dark:text-white">
                            Bni Taddjit
                          </strong>
                          , one of Morocco's most productive mining areas. This
                          region is known for its high-purity lead deposits and
                          has been a key mining location for decades.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            How much lead is extracted annually?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          We extract approximately{" "}
                          <strong className="text-gray-900 dark:text-white">
                            8400 tons of lead annually
                          </strong>{" "}
                          from our Moroccan mines, with a monthly production
                          capacity of over 150 tons. Our current stock includes
                          400 tons of concentrate, 150 tons of powder, and 300
                          tons of ore.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            What applications is Moroccan lead used for?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our high-purity lead is primarily used for{" "}
                          <strong className="text-gray-900 dark:text-white">
                            lead-acid batteries
                          </strong>{" "}
                          in automotive and industrial applications. It's also
                          essential for{" "}
                          <strong className="text-gray-900 dark:text-white">
                            radiation shielding
                          </strong>{" "}
                          in medical and nuclear facilities, construction
                          materials, electronics manufacturing, and specialized
                          cosmetic applications.
                        </div>
                      </details>
                    </>
                  )}

                  {product.id === "zinc" && (
                    <>
                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Where is the zinc (calamine) mined in Morocco?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our zinc calamine is sourced from the{" "}
                          <strong className="text-gray-900 dark:text-white">
                            Errachidia region
                          </strong>
                          , specifically in{" "}
                          <strong className="text-gray-900 dark:text-white">
                            Bni Taddjit
                          </strong>
                          , the same mineral-rich area known for quality zinc
                          deposits in Morocco's mining belt.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            How much zinc is extracted annually?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          We extract over{" "}
                          <strong className="text-gray-900 dark:text-white">
                            50,000 tons of zinc annually
                          </strong>{" "}
                          from our Moroccan deposits. Current available stock
                          includes 300 tons of ore and 80 tons of concentrate,
                          with purity levels of +37% for ore and 70% for
                          concentrate.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            What applications is Moroccan zinc used for?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our zinc calamine is widely used for{" "}
                          <strong className="text-gray-900 dark:text-white">
                            galvanizing steel
                          </strong>{" "}
                          to prevent corrosion, in{" "}
                          <strong className="text-gray-900 dark:text-white">
                            cosmetics and skincare products
                          </strong>{" "}
                          for its soothing properties, pharmaceutical
                          applications, die-casting for precise metal
                          components, and battery manufacturing.
                        </div>
                      </details>
                    </>
                  )}

                  {product.id === "copper" && (
                    <>
                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Where is the copper mined in Morocco?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our copper is extracted from the{" "}
                          <strong className="text-gray-900 dark:text-white">
                            Tinghir region
                          </strong>{" "}
                          in Morocco, a historically significant copper mining
                          area known for its rich mineral deposits and quality
                          copper ore.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            How much copper is extracted annually?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          We extract approximately{" "}
                          <strong className="text-gray-900 dark:text-white">
                            17,000 tons of copper annually
                          </strong>{" "}
                          from our Moroccan mineral deposits. We maintain over
                          500 tons in stock with purity ranging from 8% to 21%,
                          with special high-purity copper available at 40% (with
                          permit).
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            What applications is Moroccan copper used for?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Copper is essential for{" "}
                          <strong className="text-gray-900 dark:text-white">
                            electrical wiring and systems
                          </strong>{" "}
                          due to its excellent conductivity, electronics
                          manufacturing, construction materials (plumbing,
                          roofing), telecommunications infrastructure, and
                          renewable energy systems like solar panels and wind
                          turbines.
                        </div>
                      </details>
                    </>
                  )}

                  {product.id === "antimony" && (
                    <>
                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Where is the antimony mined in Morocco?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our antimony is extracted from the{" "}
                          <strong className="text-gray-900 dark:text-white">
                            Khenifra region
                          </strong>{" "}
                          in Morocco, an area with significant antimony deposits
                          known for producing high-quality material.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            How much antimony is extracted annually?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          We extract approximately{" "}
                          <strong className="text-gray-900 dark:text-white">
                            25,000 tons of antimony annually
                          </strong>{" "}
                          from our Moroccan deposits. We maintain over 700 tons
                          in stock with purity levels of 30%+ for both ore and
                          concentrate forms.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            What applications is Moroccan antimony used for?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Antimony is primarily used for{" "}
                          <strong className="text-gray-900 dark:text-white">
                            flame retardants
                          </strong>{" "}
                          in textiles and plastics, battery manufacturing
                          (lead-acid batteries), electronic components, glass
                          and ceramic production, and metal alloys to improve
                          hardness and strength.
                        </div>
                      </details>
                    </>
                  )}

                  {/* General FAQ for other products (Barite, Iron, Cobalt) */}
                  {!["lead", "zinc", "copper", "antimony"].includes(
                    product.id,
                  ) && (
                    <>
                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Where is the {product.name.toLowerCase()} mined in
                            Morocco?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our {product.name.toLowerCase()} is extracted from
                          various productive mining regions across{" "}
                          <strong className="text-gray-900 dark:text-white">
                            Morocco
                          </strong>
                          , areas known for their rich mineral deposits and
                          quality {product.name.toLowerCase()} resources.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            How much {product.name.toLowerCase()} is extracted
                            annually?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          {details.annualExtraction} We maintain consistent
                          production to meet global demand while ensuring
                          sustainable mining practices.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg
                              className="w-6 h-6 text-teal-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            What applications is Moroccan{" "}
                            {product.name.toLowerCase()} used for?
                          </h3>
                          <svg
                            className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                          <ul className="space-y-2">
                            {details.applications.map(
                              (app: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2"
                                >
                                  <svg
                                    className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span>{app}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </details>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="mb-20">
              <h2
                className="text-4xl md:text-5xl font-bold font-red-hat-display text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                data-aos="fade-up"
              >
                Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.applications.map((app: string, index: number) => (
                  <div
                    key={index}
                    className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
                        {app}
                      </span>
                    </div>
                    {/* Accent border */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="mb-20" data-aos="fade-up">
              <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-10 md:p-12 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 dark:bg-teal-400/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600/5 dark:bg-teal-500/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold font-red-hat-display text-gray-900 dark:text-white">
                      Quality Assurance
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {details.qualityAssurance}
                  </p>
                </div>
              </div>
            </div>

            {/* Sourcing & Logistics */}
            <div className="mb-16" data-aos="fade-up">
              <div className="relative overflow-hidden bg-white dark:bg-gray-800/70 p-10 md:p-12 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold font-red-hat-display text-gray-900 dark:text-white">
                      Sourcing & Global Logistics
                    </h2>
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                    <p>
                      Every shipment of Moroccan {product.name.toLowerCase()}{" "}
                      begins at carefully evaluated deposits in Morocco's
                      mineral-rich regions. Our sourcing team works directly
                      with mine operators to select material that meets your
                      target specifications, from ore grade and concentrate
                      purity to particle size and moisture content. We then
                      coordinate all downstream logistics — including quality
                      verification at independent laboratories, export
                      documentation, port handling, and container loading — to
                      deliver your material efficiently from Moroccan ports to
                      your destination.
                    </p>
                    <p>
                      Our quality control process begins at the mine site, where
                      our field geologists assess mineral grade, consistency,
                      and physical characteristics before extraction. Material
                      then moves to partner beneficiation facilities where it
                      undergoes crushing, grinding, washing, and concentration
                      as needed to meet export specifications. At each stage,
                      samples are collected and analyzed using XRF for rapid
                      elemental screening and ICP-OES for precise trace element
                      quantification. Every shipment is tested for moisture
                      content, particle size distribution, and chemical
                      composition before a certificate of analysis is issued.
                    </p>
                    <p>
                      For export logistics, our team manages the complete
                      documentation chain — including certificates of origin
                      issued by the Moroccan Chamber of Commerce, bills of
                      lading, packing lists, commercial invoices, weight
                      certificates from certified scales at the port terminal,
                      and phytosanitary or radioactive clearance certificates
                      when required. We also arrange independent third-party
                      inspection at the port of loading when specified by the
                      buyer, with surveyors from SGS, Bureau Veritas, or
                      Intertek available for pre-shipment verification.
                    </p>
                    <p>
                      We ship from three principal Moroccan ports. Casablanca
                      port handles containerized minerals and break-bulk
                      shipments with direct liner services to Northern Europe,
                      West Africa, and the Americas. Tangier Med is Morocco's
                      largest container transshipment hub with connections to
                      over 180 ports worldwide, offering frequent sailings to
                      Asia and the Mediterranean. Jorf Lasfar specializes in
                      bulk mineral exports with dedicated loading facilities for
                      phosphate-based products and industrial minerals. For
                      specialized requirements, we can also arrange rail
                      transport from mining regions directly to port terminals,
                      reducing handling and ensuring material integrity
                      throughout the logistics chain.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center" data-aos="fade-up">
              <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-700 dark:from-teal-700 dark:to-teal-800 p-12 rounded-2xl shadow-2xl">
                {/* Decorative effects */}
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold font-red-hat-display mb-4 text-white">
                    Ready to Order Premium Moroccan {product.name}?
                  </h2>
                  <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
                    Contact our experts today to discuss your specific Moroccan
                    raw material requirements and receive a personalized quote.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="group/btn relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-teal-700 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Request Quote
                      <svg
                        className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                    >
                      View All Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

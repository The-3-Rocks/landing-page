// app/products/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import PageIllustration from "@/components/page-illustration";
import React from "react";
import { products } from "@/lib/products";

// Detailed product information including data from ProductPopup
const productDetails: Record<string, any> = {
  lead: {
    title: "Moroccan Lead",
    description:
      "At The 3 Rocks Company, we pride ourselves on offering high-quality Moroccan lead that stands out for its exceptional purity and unmatched durability, sourced from Morocco's historic mining regions.",
    narrative:
      "Moroccan lead ore is sourced primarily from the Bni Taddjit and Errachidia mineral belt in the eastern High Atlas, where vein and replacement-style deposits have been worked for centuries and remain among the most consistently high-grade lead sources in North Africa. The ore is concentrated at our partner facilities to a typical 86 percent lead grade for the concentrate stream, with a 76 percent grade for the powder form and a 50 percent-plus grade for run-of-mine ore, each matched to the requirements of downstream processors. Our lead concentrate is packed and shipped in 1.5-tonne big bags or 50-kilogram bags, loaded in twenty-foot containers at the Casablanca container terminal or as break-bulk cargo at Jorf Lasfar port. The powder form is supplied in sealed 25-kilogram multi-ply paper sacks with a PE liner and palletised for container stuffing. Moroccan lead concentrate is widely used by lead-acid battery manufacturers in Europe, Africa, and Asia — the battery sector alone accounts for more than eighty percent of global lead consumption. The powder form is preferred by radiation shielding producers, cosmetics formulators, and specialty alloy makers; the run-of-mine ore is exported to smelters that operate their own milling circuits. Every shipment is accompanied by an independent laboratory certificate covering lead, silver, zinc, copper, and antimony content, with X-ray fluorescence screening and ICP confirmation of the full assay suite. Our depot in Errachidia maintains standing stock of concentrate, powder, and ore throughout the year, and we coordinate monthly trucking to Casablanca and Jorf Lasfar on a published schedule that allows buyers to plan their logistics with confidence. For new buyers, we recommend beginning with a trial lot of twenty to fifty metric tons to evaluate the grade consistency and the responsiveness of our documentation and logistics team before committing to a long-term supply contract.",
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
    narrative:
      "Moroccan copper ore originates from the Tinghir region of the eastern Anti-Atlas and from the historic mining districts of the central High Atlas, where stratiform and vein-style deposits produce a clean oxide and sulphide ore well suited to both hydrometallurgical and pyrometallurgical processing. Our standard export grade runs from 8 to 21 percent copper, with 40 percent-plus high-purity lots available under special export permit for buyers who need higher-grade feed for their concentrators. The ore is sized, blended, and packaged at our depot in Ouarzazate before container loading at Casablanca or bulk loading at Jorf Lasfar. Sulphide ore is shipped as loose bulk in standard open-top containers or as bagged concentrate in sealed 1.5-tonne bulk bags, while oxide ore is typically containerised on pallets to minimise fines generation during transit. We maintain five hundred metric tons of standing stock graded by copper content and ready for dispatch within seven to ten working days of a confirmed order. Major end-use markets include wire and cable manufacturers serving renewable energy and electrification projects across Europe and the Mediterranean basin, telecommunications infrastructure suppliers, brass and bronze alloy producers, and chemical processors that recover copper from the oxide fraction. The copper content and impurity profile of each lot are verified using a triple-check protocol: field-portable X-ray fluorescence at the depot, laboratory ICP analysis before loading, and an optional referee analysis at an accredited laboratory in the buyer's country at the buyer's cost. For European buyers, the Casablanca-to-Rotterdam transit time is typically twelve to fourteen days, and we offer CIF, CFR, and FOB incoterms with full support for letter-of-credit documentation, SGS inspection, and phytosanitary certificates where required.",
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
    narrative:
      "Moroccan zinc calamine is extracted from the carbonate and silicate ore bodies of the Errachidia mineral belt in the eastern High Atlas, where the calamine form of zinc — natural zinc carbonate and hemimorphite — has been mined for cosmetic, pharmaceutical, and industrial use for generations. We export two principal forms: a +37 percent zinc ore suitable for direct feed to Waelz kilns and electrolytic zinc producers, and a 70 percent concentrate produced at our partner flotation facility for the galvanizing and die-casting industries. Calamine is also a key raw material in pharmaceutical-grade zinc oxide and in premium cosmetics, where its natural purity and low lead content are valued by formulators. The ore is hand-sorted, crushed, sized, and packed in 25-kilogram multi-ply paper sacks with a moisture barrier, or in 1-tonne big bags for larger buyers. The concentrate is shipped in sealed 1.5-tonne bulk bags that are fork-lift ready for container stuffing at the Casablanca depot. Our monthly capacity of seven hundred metric tons comfortably supports trial orders of twenty metric tons and recurring contracts of several hundred tons per quarter. Every shipment is certified with a full assay covering zinc, lead, cadmium, iron, and moisture content, and the calamine product can be accompanied by a pharmaceutical-grade suitability statement for buyers in the cosmetics and pharmaceutical sectors. We support FCA Errachidia, FOB Casablanca, and CIF destination incoterms, and our documentation package includes the certificate of origin, packing list, commercial invoice, and a fumigation certificate for wooden pallets used in bagged shipments. For galvanizing and die-casting buyers who require a consistent +37 percent zinc content, we recommend quarterly supply agreements with provision for a rolling assay verification at an agreed international laboratory.",
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
    narrative:
      "Moroccan barite, also known as baryte or barytine, is sourced from vein and bedded deposits near Midelt in the central High Atlas and from the Ouarzazate province to the south, both of which produce a clean, off-white to light grey barite with specific gravity consistently in the 4.18 to 4.28 range — well above the API 13A specification required by the oil and gas drilling industry. We export barite in three principal forms: run-of-mine ore for drilling-fluid blenders who operate their own grinding circuits, finely milled powder with controlled particle size distribution for paints, plastics, and radiation shielding, and graded lumps for medical imaging and concrete shielding applications. The run-of-mine ore is shipped in loose bulk or in 1.5-tonne bulk bags, the powder is supplied in 25-kilogram or 50-kilogram valve-mouth paper sacks palletised and shrink-wrapped for container loading, and the lump material is packed in 1-tonne bulk bags for easy handling at the destination. Our standing stock is four hundred metric tons, with an additional two hundred tons produced monthly, and we schedule dispatches to avoid demurrage at the port. Every lot is tested for specific gravity by helium pycnometry, for barium sulphate content by gravimetric analysis, and for leachable heavy metals by ICP-MS, with results issued on The 3 Rocks letterhead and accepted by most oilfield operators without additional third-party testing. Moroccan barite enjoys a strong reputation in the Mediterranean and West African markets because of its low impurity content — particularly strontium and mercury — and because of the country’s well-established shipping links from Casablanca to all major oilfield service hubs. We recommend first-time buyers request a five-kilogram sample of each form before placing a commercial order, and we provide this free of charge with a prepaid courier label for destinations in Europe, the Middle East, and West Africa.",
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
    narrative:
      "Moroccan iron ore comes from the ancient mining districts of the Nador and Oujda areas in the country's northeast, where hematite-rich formations have been worked since Phoenician times. The ore we export typically grades at 56 percent iron or higher, with low phosphorus and alumina content that makes it an attractive feed for both integrated steel mills and direct-reduction plants. We supply forty thousand metric tons of standing stock at any given time, sourced from our partner mines in the Rif and the eastern Meseta, and we can scale monthly volumes up or down to match buyer requirements. The ore is sized at our depot in Nador and dispatched as lump for blast furnace feed or as fines for sinter and pelletising plants, with options for washed and screened product to reduce the silica and alumina load. Lump ore is shipped by self-discharging bulk carrier from Nador's deep-water port, while fines are containerised in twenty-foot open-top containers with a PE liner and weighed at a certified truck scale before port delivery. European buyers benefit from the short sea route across the Mediterranean \u2014 the transit time from Nador to southern European ports such as Taranto, Piombino, or Sagunto is typically four to six days, making Moroccan iron ore a logistically compelling alternative to Brazilian or Australian supply. Port handling at Nador is managed by a dedicated stevedore team that The 3 Rocks has contracted on a multi-year basis, ensuring priority berthing for our vessels and consistent loading rates. For buyers in the Middle East, Asia, or the Americas, we offer FOB Nador terms and can arrange for an independent pre-shipment inspection by SGS, Bureau Veritas, or Intertek at the buyer's request and cost.",
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
    narrative:
      "Moroccan cobalt is sourced from the Bou Azzer mining district in the central Anti-Atlas, one of the world\u2019s oldest and most productive cobalt mining regions and the only primary cobalt source on the African continent outside the Copperbelt. The ore is typically a cobalt arsenide assemblage with co-product nickel and silver, processed into a 42 percent-plus cobalt concentrate suitable for downstream hydrometallurgical refining. The concentrate is the preferred feed stock for lithium-ion battery precursor manufacturers, superalloy producers serving the aerospace and gas turbine industries, and high-performance magnet producers. As global demand for battery-grade cobalt continues to grow, the Bou Azzer district has attracted renewed investment in exploration, mine modernisation, and tailings retreatment. The 3 Rocks works with mining partners in Bou Azzer to secure long-term offtake volumes, with current concentrate availability confirmed on a contract-by-contract basis and standing stock reserved for established buyers. Our cobalt concentrate is shipped in sealed 1.5-tonne bulk bags, containerised at Agadir port and routed to the buyer\u2019s designated refinery or precursor plant. Every lot is assayed for cobalt, nickel, arsenic, and silver content by ICP-OES, and the concentrate can be dried to a specified moisture content of less than eight percent on request. For battery supply chain buyers who require a due diligence statement under the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas, we maintain the necessary documentation chain from mine to FOB loading, supported by an annual third-party audit. New buyers in the battery sector typically begin with a five-metric-ton trial lot for precursor qualification testing before committing to a twelve-month offtake agreement. For aerospace superalloy producers, we offer a separate high-purity concentrate stream with arsenic below five hundred parts per million and a certified nickel-to-cobalt ratio.",
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
    narrative:
      "Moroccan antimony comes predominantly from the stibnite veins of the Khenifra region in the central Middle Atlas, where quartz-stibnite lodes cut through Palaeozoic shales and produce a clean, high-grade antimony ore well suited to both concentrate production and direct shipping ore. Our standard export grade runs from 30 percent antimony upward, with premium lots exceeding 50 percent antimony available from selected veins. Antimony is classified as a critical mineral by the European Union, the United States, and several Asian jurisdictions because of its irreplaceable role in flame retardants, lead-acid batteries, military applications, and specialised alloys. Demand has surged as construction, electronics, and electric-vehicle battery supply chains have expanded. The 3 Rocks holds standing relationships with the principal Khenifra mining operations and can reserve seven hundred tons of concentrate or run-of-mine ore for established buyers, with additional volumes mobilised within four to six weeks of a confirmed letter of credit. The concentrate is shipped in sealed 1.5-tonne bulk bags palletised for container loading at Casablanca, while run-of-mine ore is shipped in twenty-foot open-top containers lined with a single-use PE sheet to prevent cross-contamination. Each lot is assayed for antimony, arsenic, lead, and sulphur content by XRF and ICP-MS, with a full certificate of analysis issued before loading. European flame retardant manufacturers that use our antimony trioxide feed stock typically require an antimony content above 55 percent and arsenic below 2,000 parts per million — our premium Khenifra lots consistently deliver within these parameters. For military and aerospace buyers, we can arrange for an independent purity verification by an approved NATO laboratory, with the cost shared equally between buyer and seller for contracts exceeding one hundred metric tons.",
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
  purity: string | { concentrate?: string; powder?: string; ore: string }
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
  stock: string | { concentrate?: string; powder?: string; ore: string }
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
    url: productUrl,
    sku: `MRC-${params.id.toUpperCase()}`,
    mpn: `MRC-${params.id.toUpperCase()}`,
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
      url: productUrl,
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
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
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
  // Redirect known external links to relevant article
  if (params.id === "fertilizers") {
    permanentRedirect("/articles/agriculture-fertilizers-minerals");
  }

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
                The product you requested is not currently available in our catalog.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                This could mean the URL contains an error, the product listing has been updated to reflect changes in our Moroccan mining supply, or you may have followed an outdated or mistyped link. We review and refresh our product catalog every month to match current extraction capacity, stock levels, and export availability from Morocco's mining regions. Our portfolio focuses on the minerals that Morocco produces most abundantly — lead, zinc, copper, barite, iron, cobalt, and antimony — each available in multiple grades and forms to suit different industrial applications worldwide. If you arrived here from a search engine, try browsing our full product list or exploring our educational articles about Moroccan mining, mineral processing, and global supply chain standards.
              </p>
              <div className="mb-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200/50 dark:border-amber-700/30 max-w-lg mx-auto">
                <h2 className="font-semibold text-gray-900 dark:text-white mb-3">Looking for something specific?</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  We specialize in Moroccan lead, zinc, copper, barite, iron, cobalt, and antimony — available as raw ore, high-grade concentrate, and finely processed materials. Our team can provide detailed specifications, current stock levels, and competitive pricing within 24 hours. If you need a mineral grade or form not listed on our site, we may still be able to source it from our network of trusted Moroccan mining partners. Every order includes full documentation, chemical analysis certificates, and logistics coordination from Moroccan ports to your destination. Contact us with your requirements and we will respond with a tailored quote and availability details.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-500 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
    url: `https://www.the-3rocks.com/products/${params.id}`,
    sku: `MRC-${params.id.toUpperCase()}`,
    mpn: `MRC-${params.id.toUpperCase()}`,
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
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
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
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the leading lead ore supplier in Morocco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 3 Rocks Company is Morocco's leading lead ore supplier, offering high-purity Moroccan lead concentrate, lead powder, and raw lead ore ethically sourced from mineral-rich Moroccan mining regions."
          }
        },
        {
          "@type": "Question",
          "name": "What is the purity of Moroccan lead concentrate and powder you supply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our lead concentrate features an exceptional purity of 86%, while our lead powder is 76% pure. Raw lead ore is also available at more than 50% purity."
          }
        },
        {
          "@type": "Question",
          "name": "Do you export lead ingots and concentrates globally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, as a trusted lead ingot exporter and raw materials supplier, we export lead concentrates and ores globally, complying with international shipping and environmental safety regulations."
          }
        }
      ]
    };
  } else if (params.id === "zinc") {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I source high-quality zinc concentrate in Morocco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 3 Rocks is a leading supplier of premium zinc concentrate in Morocco. We offer high-quality zinc calamine ore (+37% purity) and zinc concentrate (70% purity) sourced from legendary Moroccan mining regions."
          }
        },
        {
          "@type": "Question",
          "name": "What are the key specifications of Moroccan zinc calamine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our zinc calamine ore offers exceptional purity of +37%, a density of 7.14 g/cm³, and a melting point of 419.5°C, making it ideal for galvanization and die-casting."
          }
        }
      ]
    };
  } else if (params.id === "copper") {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the purity range of Moroccan copper supplied by The 3 Rocks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Moroccan copper ore typically ranges from 8% to 21% purity. We also offer high-purity copper of up to 40% under special export permit."
          }
        },
        {
          "@type": "Question",
          "name": "What are the industrial applications of your Moroccan copper?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is widely used in electrical wiring, telecommunications infrastructure, heat exchangers, cooling systems, and electronics manufacturing."
          }
        }
      ]
    };
  }

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-medium">Back to All Products</span>
              </Link>
            </div>

            {/* Product header */}
            <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                Morocco is one of the world's most significant mineral producers, with deposits that have been worked for centuries. Our {product.name} is sourced from carefully selected Moroccan mining regions known for their exceptional geological characteristics. Each shipment reflects the unique mineral composition of these deposits, processed under strict quality controls to meet international specifications for global buyers.
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed mt-3">
                We offer {product.name} in multiple grades and forms — including ore, concentrate, and processed material — to match your exact production requirements. Every lot is tested for chemical composition, particle size, moisture content, and contaminants before shipment. Our logistics team manages all documentation, port handling, and shipping from major Moroccan ports to destinations worldwide.
              </p>
              {details.narrative && (
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mt-6 max-w-3xl mx-auto text-left">
                  {details.narrative}
                </p>
              )}
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
                        <div className={`absolute inset-0 ${product.color} opacity-10`}></div>
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
                        Our Moroccan {product.name.toLowerCase()} is sourced from Morocco's most productive mining regions, 
                        ensuring exceptional quality and purity. Each batch undergoes rigorous quality control testing 
                        to meet international industry standards and customer specifications.
                      </p>

                      {/* Annual Extraction */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl border border-teal-200/50 dark:border-teal-700/50">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Annual Extraction</span>
                          <span className="text-lg font-bold text-teal-900 dark:text-teal-100">{details.annualExtraction}</span>
                        </div>
                      </div>

                      {/* Available Stock */}
                      <div className="mb-8">
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Available Stock</h3>
                        <div className="grid grid-cols-3 gap-3">
                          {"stockDetails" in details ? (
                            <>
                              {details.stockDetails.concentrate && (
                                <div className="relative group/stock p-3 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200/50 dark:border-teal-700/50 hover:shadow-md transition-all">
                                  <div className="text-xs font-medium text-teal-700 dark:text-teal-400 mb-1">Concentrate</div>
                                  <div className="text-base font-bold text-teal-900 dark:text-teal-100">{details.stockDetails.concentrate}</div>
                                </div>
                              )}
                              {details.stockDetails.powder && (
                                <div className="relative group/stock p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all">
                                  <div className="text-xs font-medium text-blue-700 dark:text-blue-400 mb-1">Powder</div>
                                  <div className="text-base font-bold text-blue-900 dark:text-blue-100">{details.stockDetails.powder}</div>
                                </div>
                              )}
                              {details.stockDetails.ore && (
                                <div className="relative group/stock p-3 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-200/50 dark:border-amber-700/50 hover:shadow-md transition-all">
                                  <div className="text-xs font-medium text-amber-700 dark:text-amber-400 mb-1">Ore</div>
                                  <div className="text-base font-bold text-amber-900 dark:text-amber-100">{details.stockDetails.ore}</div>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="col-span-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/30 text-center">
                              <span className="font-semibold text-gray-900 dark:text-white">{details.stock || "Available upon request"}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Additional specs */}
                      <div className="space-y-3 mb-8 p-5 bg-gray-50/50 dark:bg-gray-900/30 rounded-xl border border-gray-200/30 dark:border-gray-700/30">
                        {details.specs.slice(0, 5).map((spec: any, index: number) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200/50 dark:border-gray-700/50 last:border-0">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {spec.name}
                            </span>
                            <span className="font-semibold text-gray-900 dark:text-white">{spec.value}</span>
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
                          <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
                  Everything you need to know about our {product.name.toLowerCase()} extraction, sourcing, and applications.
                </p>

                <div className="space-y-4">
                  {/* FAQ Items - Product Specific */}
                  {product.id === "lead" && (
                    <>
                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            Where is the lead mined in Morocco?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our lead is extracted from the <strong className="text-gray-900 dark:text-white">Errachidia region</strong>, specifically in <strong className="text-gray-900 dark:text-white">Bni Taddjit</strong>, one of Morocco's most productive mining areas. This region is known for its high-purity lead deposits and has been a key mining location for decades.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            How much lead is extracted annually?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          We extract approximately <strong className="text-gray-900 dark:text-white">8400 tons of lead annually</strong> from our Moroccan mines, with a monthly production capacity of over 150 tons. Our current stock includes 400 tons of concentrate, 150 tons of powder, and 300 tons of ore.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            What applications is Moroccan lead used for?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our high-purity lead is primarily used for <strong className="text-gray-900 dark:text-white">lead-acid batteries</strong> in automotive and industrial applications. It's also essential for <strong className="text-gray-900 dark:text-white">radiation shielding</strong> in medical and nuclear facilities, construction materials, electronics manufacturing, and specialized cosmetic applications.
                        </div>
                      </details>
                    </>
                  )}

                  {product.id === "zinc" && (
                    <>
                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            Where is the zinc (calamine) mined in Morocco?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our zinc calamine is sourced from the <strong className="text-gray-900 dark:text-white">Errachidia region</strong>, specifically in <strong className="text-gray-900 dark:text-white">Bni Taddjit</strong>, the same mineral-rich area known for quality zinc deposits in Morocco's mining belt.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            How much zinc is extracted annually?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          We extract over <strong className="text-gray-900 dark:text-white">50,000 tons of zinc annually</strong> from our Moroccan deposits. Current available stock includes 300 tons of ore and 80 tons of concentrate, with purity levels of +37% for ore and 70% for concentrate.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            What applications is Moroccan zinc used for?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our zinc calamine is widely used for <strong className="text-gray-900 dark:text-white">galvanizing steel</strong> to prevent corrosion, in <strong className="text-gray-900 dark:text-white">cosmetics and skincare products</strong> for its soothing properties, pharmaceutical applications, die-casting for precise metal components, and battery manufacturing.
                        </div>
                      </details>
                    </>
                  )}

                  {product.id === "copper" && (
                    <>
                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            Where is the copper mined in Morocco?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our copper is extracted from the <strong className="text-gray-900 dark:text-white">Tinghir region</strong> in Morocco, a historically significant copper mining area known for its rich mineral deposits and quality copper ore.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            How much copper is extracted annually?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          We extract approximately <strong className="text-gray-900 dark:text-white">17,000 tons of copper annually</strong> from our Moroccan mineral deposits. We maintain over 500 tons in stock with purity ranging from 8% to 21%, with special high-purity copper available at 40% (with permit).
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            What applications is Moroccan copper used for?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Copper is essential for <strong className="text-gray-900 dark:text-white">electrical wiring and systems</strong> due to its excellent conductivity, electronics manufacturing, construction materials (plumbing, roofing), telecommunications infrastructure, and renewable energy systems like solar panels and wind turbines.
                        </div>
                      </details>
                    </>
                  )}

                  {product.id === "antimony" && (
                    <>
                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            Where is the antimony mined in Morocco?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our antimony is extracted from the <strong className="text-gray-900 dark:text-white">Khenifra region</strong> in Morocco, an area with significant antimony deposits known for producing high-quality material.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            How much antimony is extracted annually?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          We extract approximately <strong className="text-gray-900 dark:text-white">25,000 tons of antimony annually</strong> from our Moroccan deposits. We maintain over 700 tons in stock with purity levels of 30%+ for both ore and concentrate forms.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            What applications is Moroccan antimony used for?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Antimony is primarily used for <strong className="text-gray-900 dark:text-white">flame retardants</strong> in textiles and plastics, battery manufacturing (lead-acid batteries), electronic components, glass and ceramic production, and metal alloys to improve hardness and strength.
                        </div>
                      </details>
                    </>
                  )}

                  {/* General FAQ for other products (Barite, Iron, Cobalt) */}
                  {!["lead", "zinc", "copper", "antimony"].includes(product.id) && (
                    <>
                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            Where is the {product.name.toLowerCase()} mined in Morocco?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          Our {product.name.toLowerCase()} is extracted from various productive mining regions across <strong className="text-gray-900 dark:text-white">Morocco</strong>, areas known for their rich mineral deposits and quality {product.name.toLowerCase()} resources.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            How much {product.name.toLowerCase()} is extracted annually?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                          {details.annualExtraction} We maintain consistent production to meet global demand while ensuring sustainable mining practices.
                        </div>
                      </details>

                      <details className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                            <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                            </svg>
                            What applications is Moroccan {product.name.toLowerCase()} used for?
                          </h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                          <ul className="space-y-2">
                            {details.applications.map((app: string, index: number) => (
                              <li key={index} className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                                <span>{app}</span>
                              </li>
                            ))}
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
              <h2 className="text-4xl md:text-5xl font-bold font-red-hat-display text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent" data-aos="fade-up">
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
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold font-red-hat-display text-gray-900 dark:text-white">
                      Sourcing & Global Logistics
                    </h2>
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                    <p>Every shipment of Moroccan {product.name.toLowerCase()} begins at carefully evaluated deposits in Morocco's mineral-rich regions. Our sourcing team works directly with mine operators to select material that meets your target specifications, from ore grade and concentrate purity to particle size and moisture content. We then coordinate all downstream logistics — including quality verification at independent laboratories, export documentation, port handling, and container loading — to deliver your material efficiently from Moroccan ports to your destination.</p>
                    <p>Our quality control process begins at the mine site, where our field geologists assess mineral grade, consistency, and physical characteristics before extraction. Material then moves to partner beneficiation facilities where it undergoes crushing, grinding, washing, and concentration as needed to meet export specifications. At each stage, samples are collected and analyzed using XRF for rapid elemental screening and ICP-OES for precise trace element quantification. Every shipment is tested for moisture content, particle size distribution, and chemical composition before a certificate of analysis is issued.</p>
                    <p>For export logistics, our team manages the complete documentation chain — including certificates of origin issued by the Moroccan Chamber of Commerce, bills of lading, packing lists, commercial invoices, weight certificates from certified scales at the port terminal, and phytosanitary or radioactive clearance certificates when required. We also arrange independent third-party inspection at the port of loading when specified by the buyer, with surveyors from SGS, Bureau Veritas, or Intertek available for pre-shipment verification.</p>
                    <p>We ship from three principal Moroccan ports. Casablanca port handles containerized minerals and break-bulk shipments with direct liner services to Northern Europe, West Africa, and the Americas. Tangier Med is Morocco's largest container transshipment hub with connections to over 180 ports worldwide, offering frequent sailings to Asia and the Mediterranean. Jorf Lasfar specializes in bulk mineral exports with dedicated loading facilities for phosphate-based products and industrial minerals. For specialized requirements, we can also arrange rail transport from mining regions directly to port terminals, reducing handling and ensuring material integrity throughout the logistics chain.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial Applications Detail */}
            <div className="mb-16" data-aos="fade-up">
              <div className="relative overflow-hidden bg-white dark:bg-gray-800/70 p-10 md:p-12 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold font-red-hat-display text-gray-900 dark:text-white">Industrial Applications & Market Sectors</h2>
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                    <p>Moroccan {product.name.toLowerCase()} serves a diverse range of industrial sectors, each with specific quality requirements, certification standards, and logistics preferences. The principal markets for this material include {details.applications.slice(0, 3).join(", ")}, and {details.applications.slice(-1)}. Buyers in each sector typically require different grades, packaging formats, and documentation, and our team works closely with each buyer to match the product specification to the intended end use.</p>
                    <p>For customers in the {details.applications[0] || "industrial manufacturing"} sector, we supply {product.name.toLowerCase()} in grades that meet the relevant international standards, supported by a full certificate of analysis and, where required, a statement of conformity with REACH, RoHS, or other applicable regulations. Our sales team can provide technical data sheets, safety data sheets, and application-specific recommendations based on the buyer's production process and quality thresholds.</p>
                    <p>In the {details.applications[1] || "specialty applications"} field, {product.name.toLowerCase()} from Moroccan deposits is valued for its consistent purity profile, low impurity content, and availability in multiple physical forms. Buyers in this segment typically require smaller volumes but higher documentation standards, including full traceability from mine to loading point. We accommodate these requirements by maintaining separate production batches with dedicated stock management and segregated container loading.</p>
                    <p>The {details.applications[2] || "global export"} market for Moroccan {product.name.toLowerCase()} has grown steadily as international buyers seek to diversify their supply sources. Morocco's geographic position at the crossroads of Europe, Africa, and the Middle East, combined with its modern port infrastructure at Casablanca and Tangier Med, makes it a competitive origin for mineral shipments to most major industrial regions. Our logistics team manages the complete export chain, from inland trucking and port handling to ocean freight and customs clearance at destination, under FOB, CFR, CIF, or DDP incoterms as agreed with the buyer.</p>
                    <p>New buyers are encouraged to begin with a trial shipment of 20 to 50 metric tons to evaluate the material quality, documentation accuracy, and logistics reliability before entering a long-term supply agreement. During the trial phase, we provide weekly updates on stock availability, production scheduling, and vessel booking, and we assign a dedicated account manager who serves as the single point of contact for all commercial and operational matters.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mining & Processing Details */}
            <div className="mb-16" data-aos="fade-up">
              <div className="relative overflow-hidden bg-white dark:bg-gray-800/70 p-10 md:p-12 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold font-red-hat-display text-gray-900 dark:text-white">Mining & Processing Overview</h2>
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                    <p>The extraction of Moroccan {product.name.toLowerCase()} takes place in geological formations that are characteristic of the Atlas Mountain belt, where tectonic activity has created mineral-rich zones with deposits that range from near-surface oxide zones suitable for open-pit extraction to deeper sulphide ore bodies accessed through underground mining. The specific mining method applied to each deposit depends on the depth, geometry, and grade distribution of the mineralised zone, as well as on the surrounding rock competence and the hydrological conditions of the area.</p>
                    <p>After extraction, the ore is transported to a beneficiation facility where it undergoes a sequence of physical and chemical processes designed to separate the valuable mineral from the waste rock and to upgrade the mineral content to the target export grade. For {product.name.toLowerCase()}, the beneficiation flowsheet typically includes crushing and grinding to liberate the mineral particles, followed by gravity separation, flotation, magnetic separation, or a combination of these methods, depending on the mineralogy of the deposit and the required product specification. The final concentrate or direct-shipping ore is then dried, sampled, and stored under cover awaiting dispatch.</p>
                    <p>Quality control is integrated into every stage of the mining and processing sequence. Field geologists map and sample each mining face before blasting to confirm grade continuity. The beneficiation plant operator monitors feed grade hourly and adjusts process parameters to maintain output within specification. Each production batch is assigned a unique lot number, and samples are collected at the plant and again at the port for independent laboratory analysis. The certified results are recorded against the lot number and made available to the buyer as part of the shipment documentation package.</p>
                    <p>Our monthly production capacity for Moroccan {product.name.toLowerCase()} is maintained through a network of partner mines and contract processing facilities, allowing us to scale volumes up or down in response to buyer demand. We hold standing stock at our regional depots and at the port terminals, with typical availability of {details.stock || details.stockDetails?.concentrate || details.monthlyCapacity || "several hundred metric tons"} at any given time. For long-term contracts exceeding 12 months, we work with our mining partners to reserve dedicated production capacity and to establish a quality baseline that remains consistent throughout the contract period.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Standards & Certification */}
            <div className="mb-16" data-aos="fade-up">
              <div className="relative overflow-hidden bg-white dark:bg-gray-800/70 p-10 md:p-12 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold font-red-hat-display text-gray-900 dark:text-white">Quality Standards & Export Compliance</h2>
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                    <p>Every export shipment of Moroccan {product.name.toLowerCase()} from The 3 Rocks is processed in accordance with Moroccan export regulations, international trade standards, and the specific quality requirements of the destination country. Our quality management system covers mineral grade verification, contaminant screening, moisture determination, particle size analysis, and physical property testing as applicable to each mineral type. Test methods are selected from international standards including ASTM, ISO, and EN where they exist for the specific mineral and parameter being measured.</p>
                    <p>For buyers in regulated industries — including aerospace, defence, pharmaceuticals, cosmetics, and food-contact applications — we can arrange for additional testing and certification beyond the standard certificate of analysis. This includes heavy metal screening by ICP-MS, mineral phase identification by X-ray diffraction, specific surface area measurement by BET analysis, thermal stability testing by thermogravimetric analysis, and microbiological testing for cosmetic-grade minerals. These additional tests are performed by accredited partner laboratories and the results are incorporated into the shipment documentation package.</p>
                    <p>Export documentation from The 3 Rocks includes the certificate of origin issued by the Moroccan Chamber of Commerce, the commercial invoice, the packing list, the bill of lading or air waybill, the certificate of analysis from a Moroccan ISO 17025-accredited laboratory, and any destination-specific certifications such as the European Union REACH compliance statement or the United States TSCA certification. For shipments to countries that require a phytosanitary certificate or a radioactive clearance certificate, we coordinate the inspection and certification through the relevant Moroccan authorities before loading.</p>
                    <p>We maintain records of all quality control data, shipment documentation, and correspondence for each transaction for a minimum of five years, and we make these records available to the buyer or to the buyer's nominated representative upon request. For contracts that specify a penalty for off-grade material, the reference analysis method and the arbitration procedure are defined in the contract terms before shipment, and both parties agree on a mutually acceptable referee laboratory before loading commences.</p>
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
                    Contact our experts today to discuss your specific Moroccan raw
                    material requirements and receive a personalized quote.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="group/btn relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-teal-700 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Request Quote
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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

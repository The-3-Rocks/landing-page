"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { products, Product } from "@/lib/products";

// Generate Product Schema for SEO (without prices)
const generateProductSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product: Product, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: `Moroccan ${product.name}`,
        description: product.description,
        image: `https://www.the-3rocks.com${product.image.src}`,
        brand: {
          "@type": "Brand",
          name: "The 3 Rocks Company",
        },
        offers: {
          "@type": "Offer",
          url: `https://www.the-3rocks.com/products#${product.id}`,
          availability: product.stock.includes("Available upon request")
            ? "https://schema.org/PreOrder"
            : "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
        },
        material: product.name,
        countryOfOrigin: {
          "@type": "Country",
          name: "Morocco",
        },
        additionalProperty: product.forms.map((form: string) => ({
          "@type": "PropertyValue",
          name: "form",
          value: form,
        })),
      },
    })),
  };
};

// Generate Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The 3 Rocks Company",
  url: "https://www.the-3rocks.com",
  logo: "https://www.the-3rocks.com/images/the3rocks.png",
  description:
    "Premium Moroccan mining materials supplier specializing in lead, zinc, copper, barite, iron, cobalt, and antimony",
  sameAs: ["https://www.linkedin.com/company/the-3-rocks"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Rabat",
    addressRegion: "Rabat-Salé-Kénitra",
    postalCode: "10000",
    addressCountry: "Morocco",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212-654-352802",
    contactType: "customer service",
    email: "info@the-3rocks.com",
    availableLanguage: ["English", "French", "Arabic"],
  },
};

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Premium Moroccan Mining Materials | The 3 Rocks Company</title>
        <meta
          name="description"
          content="Discover high-quality Moroccan minerals including lead, zinc, copper, barite, iron, cobalt, and antimony, ethically sourced from Morocco's legendary mining regions."
        />
        <meta
          name="keywords"
          content="Morocco mining, Moroccan minerals, lead, zinc, copper, barite, iron, cobalt, antimony, raw materials Morocco, mining company Morocco, mineral supplier"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.the-3rocks.com/products" />
        <meta
          property="og:title"
          content="Premium Moroccan Mining Materials | The 3 Rocks Company"
        />
        <meta
          property="og:description"
          content="Discover our extensive range of high-quality Moroccan minerals and raw materials sourced from Morocco's legendary mining regions."
        />
        <meta
          property="og:image"
          content="https://www.the-3rocks.com/images/the3rocks.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.the-3rocks.com/products"
        />
        <meta
          property="twitter:title"
          content="Premium Moroccan Mining Materials | The 3 Rocks Company"
        />
        <meta
          property="twitter:description"
          content="Discover our extensive range of high-quality Moroccan minerals and raw materials sourced from Morocco's legendary mining regions."
        />
        <meta
          property="twitter:image"
          content="https://www.the-3rocks.com/images/the3rocks.png"
        />

        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          src="/structured-data/products-organization.json"
        />
        <script
          type="application/ld+json"
          src="/structured-data/products-listing.json"
        />
      </Head>

      {/* Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section className="relative bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 font-red-hat-display mb-4">
                Premium Moroccan Mining & Raw Materials
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Discover our extensive range of high-quality Moroccan minerals
                and raw materials sourced and processed from Morocco's legendary
                mining regions to meet the highest industry standards worldwide.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-6">
                Each product listed below represents a carefully vetted supply
                chain — from geological survey and extraction to beneficiation,
                quality certification, and export logistics. Whether you need
                ore, concentrate, or processed material, we provide detailed
                specifications, independent lab analysis, and flexible volume
                options tailored to industrial buyers, traders, and
                manufacturers.
              </p>
            </div>

            {/* Featured product - Lead */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="relative h-64 md:h-full">
                      <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={products[0].image}
                        width={600}
                        height={400}
                        alt="Moroccan Lead raw material"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-50"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="inline-block px-4 py-2 rounded-full bg-teal-500 text-white font-semibold text-sm mb-2">
                          Featured Moroccan Mineral
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          Moroccan Lead
                        </h2>
                        <p className="text-white max-w-md">
                          86% pure lead from Morocco's premier mining regions,
                          available as concentrate, powder, and ore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <h3 className="h4 font-red-hat-display mb-3">
                      Exceptional Purity & Moroccan Mining Heritage
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      At The 3 Rocks Company, we pride ourselves on offering
                      high-quality Moroccan lead that stands out for its
                      exceptional purity and unmatched durability. Our lead is
                      carefully extracted from Morocco's mineral-rich mountains
                      and engineered to meet the specific demands of various
                      industries.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <span className="block text-sm text-gray-500 dark:text-gray-400">
                          Moroccan Concentrate
                        </span>
                        <span className="block text-xl font-bold text-gray-900 dark:text-white">
                          86% pure lead
                        </span>
                        <span className="block text-sm text-teal-600 dark:text-teal-400">
                          400 tons in stock
                        </span>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <span className="block text-sm text-gray-500 dark:text-gray-400">
                          Available Forms
                        </span>
                        <span className="block text-xl font-bold text-gray-900 dark:text-white">
                          Multiple options
                        </span>
                        <span className="block text-sm text-teal-600 dark:text-teal-400">
                          Contact for details
                        </span>
                      </div>
                    </div>

                    <Link
                      href="/products/lead"
                      className="btn-sm text-white bg-teal-500 hover:bg-teal-400"
                    >
                      Learn More About Our Moroccan Lead
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
              {products
                .filter((product) => product.id !== "lead")
                .map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition duration-300"
                  >
                    <div className="relative mb-5 overflow-hidden rounded-lg">
                      <div
                        className={`absolute inset-0 ${product.color} opacity-10`}
                      ></div>
                      <Image
                        className="w-full h-48 object-cover"
                        src={product.image}
                        width={300}
                        height={200}
                        alt={`Moroccan ${product.name} mineral`}
                      />
                    </div>
                    <div className="grow">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold font-red-hat-display">
                          Moroccan {product.name}
                        </h3>
                        <div className="text-sm font-medium inline-flex px-2 py-1 rounded-full text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-900">
                          {product.purity}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {product.description}
                      </p>
                      <div className="text-sm text-gray-500 mb-4">
                        <span className="font-semibold">Available Stock:</span>{" "}
                        {product.stock}
                      </div>
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="btn-sm text-white bg-teal-500 hover:bg-teal-400 w-full mt-3"
                    >
                      View Moroccan {product.name} Details
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mining expertise section */}
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 text-white mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="h2 font-red-hat-display mb-4">
                Our Moroccan Mining Heritage & Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                With decades of experience in Moroccan mining and processing raw
                materials, we've developed sustainable and efficient extraction
                methods that honor Morocco's rich mineral legacy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="h4 font-red-hat-display mb-3">
                  Moroccan Mining: Tradition & Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The 3 Rocks combines traditional Moroccan mining methods with
                  modern techniques. We honor Morocco's mining heritage while
                  implementing advanced technologies for enhanced efficiency and
                  safety in our mineral operations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="h4 font-red-hat-display mb-3">
                  Moroccan Quality & Global Reliability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our Moroccan minerals are renowned worldwide for their quality
                  and reliability. We implement rigorous quality control from
                  extraction to final delivery, ensuring our products meet
                  international standards.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="h4 font-red-hat-display mb-3">
                  Sustainability in Moroccan Mining
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We employ environmentally responsible mining practices that
                  minimize ecological impact while maximizing resource
                  utilization, following strict environmental guidelines in all
                  our Moroccan operations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="h4 font-red-hat-display mb-3">
                  The Future of Moroccan Mining
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We're committed to integrating emerging technologies into
                  Morocco's mining sector while maintaining our dedication to
                  quality and sustainability, training the next generation of
                  Moroccan mining professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 font-red-hat-display mb-4">
                Ready to unlock Morocco's mining potential?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Contact us today to discuss your Moroccan raw material needs and
                receive a personalized quote for premium Moroccan mining
                products.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn text-white bg-teal-500 hover:bg-teal-400"
                >
                  Connect with Morocco's Mining Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

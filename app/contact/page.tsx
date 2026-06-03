export const metadata = {
  title: "Contact The 3 Rocks | Request a Quote for Moroccan Minerals",
  description:
    "Contact The 3 Rocks, Morocco's premier supplier of lead, zinc, copper, barite, iron, cobalt and antimony. Request a quote, sample, certificate of analysis, or shipping terms within 24 hours.",
  keywords:
    "contact The 3 Rocks, Morocco mining supplier, request quote Moroccan minerals, sample Moroccan lead, sample Moroccan zinc, sample Moroccan barite, shipping terms Morocco",
  openGraph: {
    title: "Contact The 3 Rocks - Moroccan Mining Materials",
    description:
      "Reach our team in Rabat, Morocco for quotations, samples, certificates of analysis, and shipping terms on lead, zinc, copper, barite, iron, cobalt and antimony.",
    images: [
      {
        url: "https://www.the-3rocks.com/images/raw-material-lead.webp",
        width: 1200,
        height: 630,
        alt: "Contact The 3 Rocks - Premium Moroccan Mining Materials",
      },
    ],
  },
  alternates: { canonical: "https://www.the-3rocks.com/contact" },
};

import dynamic from "next/dynamic";

const ContactForm = dynamic(
  () => import("@/components/contact-comp"),
  { ssr: false }
);

export default function Contacts() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-8 md:pt-40 md:pb-12 text-center">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
              Get in Touch
            </div>
            <h1 className="h1 font-red-hat-display mb-4">Contact The 3 Rocks</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Whether you are sourcing Moroccan <strong>lead</strong>, <strong>zinc calamine</strong>, <strong>copper</strong>, <strong>barite</strong>, <strong>iron ore</strong>, <strong>cobalt</strong>, or <strong>antimony</strong> for the first time, or you are an established buyer placing a recurring order, our team in Rabat, Morocco is ready to help. Use the form below to request a quotation, a free laboratory sample, a current certificate of analysis, or details on shipping terms from Casablanca, Tangier Med, or Jorf Lasfar. We respond to all enquiries within twenty-four hours and provide indicative pricing, lead times, and laboratory documentation before any commitment is made.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-4 max-w-2xl mx-auto">
              Prefer email or phone? Reach us at <a href="mailto:info@the-3rocks.com" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">info@the-3rocks.com</a> or <a href="tel:+212654352802" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">+212 654 352 802</a>, Monday through Friday from 9:00 to 18:00 (Morocco time, UTC+1). For urgent enquiries outside business hours, please indicate the priority in the subject line of the contact form and a member of the team will be in touch as soon as possible.
            </p>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

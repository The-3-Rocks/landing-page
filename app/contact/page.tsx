export const metadata = {
  title: "Contact The 3 Rocks | Request a Quote for Moroccan Minerals",
  description:
    "Contact The 3 Rocks, Morocco's premier supplier of lead, zinc, copper, barite, iron, cobalt and antimony. Request a quote, sample, certificate of analysis, or shipping terms within 24 hours.",
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

import Image from "next/image";
import Contact from "@/components/contact-comp";
import ContactContent from "@/components/contact-content";
import heroTexture from "@/public/images/RockByAchraf.png";

export default function Contacts() {
  return (
    <>
      <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 -z-1" aria-hidden="true">
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-[0.12] brightness-[1.8] saturate-[0.4] dark:opacity-[0.06] dark:brightness-[1.5]"
            src={heroTexture}
            width={1440}
            height={577}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-900" />
          <div
            className="absolute inset-0 dark:hidden"
            style={{ background: "radial-gradient(ellipse at 75% 40%, rgba(58,186,180,0.05) 0%, transparent 60%)" }}
          />
          <div
            className="absolute inset-0 hidden dark:block"
            style={{ background: "radial-gradient(ellipse at 75% 40%, rgba(58,186,180,0.09) 0%, transparent 60%)" }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-8 md:pt-40 md:pb-10">
            <div className="text-center">
              <h1 className="h3 font-red-hat-display animate-fade-in-down">
                Get started with{" "}
                <span className="h1 font-red-hat-display">
                  the<span className="text-teal-500">3</span>Rocks
                </span>{" "}
                in Seconds
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 dark:hidden pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 75% 40%, rgba(58,186,180,0.05) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hidden dark:block pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 75% 40%, rgba(58,186,180,0.09) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <Contact />
      </div>

      <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 dark:hidden pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 75% 40%, rgba(58,186,180,0.05) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hidden dark:block pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 75% 40%, rgba(58,186,180,0.09) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <ContactContent />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 md:pt-12 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-down [animation-delay:75ms]">
              Whether you are sourcing Moroccan lead, zinc calamine, copper, barite, iron ore, cobalt, or antimony for the first time, or you are an established buyer placing a recurring order, our team in Rabat, Morocco is ready to help. Use the form below to request a quotation, a free laboratory sample, a current certificate of analysis, or details on shipping terms from Casablanca, Tangier Med, or Jorf Lasfar. We respond to all enquiries within twenty-four hours and provide indicative pricing, lead times, and laboratory documentation before any commitment is made.{"\n\n"}
              Prefer email or phone? Reach us at{" "}
              <a href="mailto:info@the-3rocks.com" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">info@the-3rocks.com</a> or{" "}
              <a href="tel:+212654352802" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">+212 654 352 802</a>, Monday through Friday from 9:00 to 18:00 (Morocco time, UTC+1). For urgent enquiries outside business hours, please indicate the priority in the subject line of the contact form and a member of the team will be in touch as soon as possible.
            </p>
            <a
              href="#contact"
              className="group btn-sm text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white dark:text-teal-400 dark:border-teal-400 dark:hover:bg-teal-400 dark:hover:text-gray-900 mt-8 transition-all duration-200 ease-in-out hover:translate-y-0.5 animate-fade-in-down [animation-delay:150ms]"
            >
              Open the Inquiry Form
              <svg className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10l-7-7m0 0l-7 7m7-7v18" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

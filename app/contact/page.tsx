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

import Contact from "@/components/contact-comp";
import ContactInfo from "@/components/contact-info";

export default function Contacts() {
  return (
    <>
      <Contact />
      <ContactInfo />
    </>
  );
}
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

export default function Contacts() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-8 md:pt-40 md:pb-12">
            <div className="text-center">
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

            <div className="mt-10 max-w-4xl mx-auto prose prose-lg text-gray-600 dark:text-gray-400 prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-teal-500">
              <h2>Our Office & Operations</h2>
              <p>The 3 Rocks Company maintains its headquarters and principal administrative office in Rabat, Morocco, with satellite logistics depots in Casablanca, Tangier, Errachidia, Ouarzazate, Nador, and Midelt. Each depot serves as a collection, quality inspection, and packing point for the minerals sourced from its surrounding mining region. Our Rabat office handles all commercial inquiries, contract management, export documentation, and after-sales support, while the regional depots manage day-to-day mine-site coordination, beneficiation oversight, and local trucking to the ports.</p>
              <p>All correspondence relating to quotations, orders, and technical inquiries should be directed to our Rabat office. For buyers who prefer to visit in person, we welcome scheduled appointments at our Rabat headquarters between 9:00 and 18:00 Moroccan time, Sunday through Thursday. Our commercial team is fluent in English, French, and Arabic, and can arrange for interpretation services for buyers who speak German, Spanish, Italian, Mandarin, or Japanese with at least forty-eight hours notice.</p>

              <h2>What to Include in Your Request for Quotation (RFQ)</h2>
              <p>To help us respond with an accurate and complete quotation within 24 hours, please include the following information in your initial enquiry:</p>
              <ul>
                <li><strong>Mineral and form:</strong> Which mineral are you sourcing (lead, zinc calamine, copper, barite, iron ore, cobalt, or antimony)? What physical form do you require — run-of-mine ore, processed concentrate, milled powder, or graded lumps?</li>
                <li><strong>Target specification:</strong> What is the minimum acceptable purity or grade? For barite, what specific gravity do you need? For copper, what is the minimum copper percentage? Do you have maximum limits for any impurities such as arsenic, mercury, lead, or cadmium?</li>
                <li><strong>Quantity and packaging:</strong> What volume are you looking to purchase, and what is the expected frequency? Do you require 25 kg bags, 1-tonne big bags, loose bulk container loading, or break-bulk vessel loading? What packaging material do you prefer — polypropylene, paper multi-ply, or jumbo bulk bags?</li>
                <li><strong>Destination and incoterm:</strong> What is the port or address of destination? Do you require FOB Casablanca, FOB Tangier Med, CIF your port, CFR, or delivered duty-paid? Do you need door-to-door logistics support, or do you have your own customs clearance and inland transport at destination?</li>
                <li><strong>Timeline:</strong> When do you need the material? What is the preferred payment instrument — letter of credit, telegraphic transfer, or documentary collection?</li>
                <li><strong>Certification required:</strong> Do you need a certificate of analysis from an independent laboratory, a certificate of origin, a phytosanitary certificate, a radioactive clearance certificate, or a statement of conformity with REACH, RoHS, or EU Battery Regulation requirements?</li>
              </ul>
              <p>If you are unsure about any of these details, please send us what you know and our commercial team will follow up with guidance. We routinely assist first-time buyers of Moroccan minerals in defining their specification requirements and navigating the export process from initial inquiry to port delivery.</p>

              <h2>Quality Assurance Process</h2>
              <p>Every shipment from The 3 Rocks is supported by a documented quality assurance process. For concentrate products, we sample each production batch at the beneficiation plant and again at the port before loading, using ASTM D2234 or equivalent standard sampling methods. For run-of-mine ore, we take composite samples from each stockpile and each truckload, with the buyer welcome to appoint an independent sampling agent at the loading point. All analyses are performed by ISO 17025-accredited laboratories in Casablanca and Rabat, using X-ray fluorescence for rapid elemental screening and inductively coupled plasma optical emission spectrometry for full trace-element quantification. Moisture content is determined by oven drying at 105 degrees Celsius, and particle size distribution is measured by mechanical sieving or laser diffraction as appropriate.</p>
              <p>We retain a reference sample from every shipment for a minimum of 12 months and make it available for buyer verification at any time. Discrepancies between our certificate of analysis and the buyer's independent assay, if within standard industry tolerances, are resolved through a third-party referee analysis at a mutually agreed laboratory. If the referee analysis confirms the buyer's results, we initiate a credit or replacement shipment according to the terms of the contract.</p>

              <h2>Export & Shipping Information</h2>
              <p>The 3 Rocks exports from three principal Moroccan ports, each serving different cargo types and destination markets. Casablanca port, located on Morocco's Atlantic coast approximately 90 kilometres from our Rabat headquarters, handles containerised mineral shipments and break-bulk cargo, with regular liner services to Northern Europe, West Africa, South America, and the Mediterranean basin. Tangier Med, situated at the Strait of Gibraltar, is Morocco's largest container transshipment hub and offers the highest frequency of sailings to Asia, North America, and Northern Europe, making it the preferred port for buyers in China, India, Japan, South Korea, and the United States. Jorf Lasfar, approximately 50 kilometres south of Casablanca, provides dedicated bulk loading facilities for phosphate-based products and industrial minerals, with the capacity to handle vessels of up to 80,000 deadweight tonnage.</p>
              <p>Standard shipping lead times are as follows: for FOB shipments, we require 10 to 15 working days from confirmation of the order and receipt of the letter of credit or advance payment. For CIF shipments, total transit time depends on the destination — 10 to 14 days to European ports, 18 to 22 days to West Africa and the Mediterranean, 25 to 30 days to the Middle East and India, 35 to 45 days to China and Southeast Asia, and 40 to 50 days to the United States Gulf Coast and South America. These estimates assume standard 20-foot or 40-foot container shipping; break-bulk and bulk vessel shipments may require additional lead time for vessel nomination and port berthing.</p>

              <h2>Frequently Asked Questions About Contacting The 3 Rocks</h2>
              <p><strong>What is the best way to send a request for quotation?</strong> The contact form below is the fastest route to our commercial team. It sends your enquiry directly to our sales inbox, where it is triaged and assigned to the appropriate account manager within one hour during business hours. You may also email info@the-3rocks.com directly, but including all of the information listed in the RFQ section above will help us respond more quickly.</p>
              <p><strong>Can I request a sample before placing an order?</strong> Yes. We provide free laboratory samples of up to 5 kilograms for concentrate and powder products, and up to 25 kilograms for run-of-mine ore and lump materials. The sample is dispatched by courier within 48 hours of the request, and we cover the courier cost for destinations in Europe, North America, the Middle East, and North Africa. For larger sample quantities or for multiple minerals, we may share the shipping cost with the buyer.</p>
              <p><strong>Do you provide a certificate of analysis with every shipment?</strong> Yes. Every shipment from The 3 Rocks is accompanied by a certificate of analysis issued by an ISO 17025-accredited laboratory. The certificate includes the mineral grade, full impurity profile, moisture content, and physical properties such as specific gravity for barite or particle size distribution for powder products. Additional testing — such as x-ray diffraction for mineral phase identification, or leachability testing for environmental compliance — can be arranged at the buyer's request and cost.</p>
              <p><strong>What payment terms do you accept?</strong> We accept irrevocable letters of credit confirmed by a major European or Moroccan bank, telegraphic transfer in euros or US dollars, and documentary collection (D/P or D/A) for established buyers with verifiable trading history. For first-time buyers, we typically require an L/C or 100 percent advance payment for trial orders below 100 metric tons. Long-term contract buyers can negotiate more flexible terms after the first three shipments.</p>
              <p><strong>How does The  Rocks verify its supply chain due diligence?</strong> We maintain a due diligence framework aligned with the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas. Our sourcing team conducts on-site assessments of all partner mines and beneficiation facilities annually, documenting the chain of custody from extraction to export. For buyers who require formal due diligence documentation — including battery supply chain participants and defence contractors — we provide a comprehensive due diligence report upon request, supported by third-party audit findings where the volume or destination justifies the cost.</p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

import Image from "next/image";
import Newsletter from "@/components/newsletter";
import RelatedPosts from "@/components/related-posts-02";

export const metadata = {
  title: "Privacy Policy",
  description:
    "At The 3 Rocks, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0 h-128 pt-16 box-content">
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            src="/images/about-hero.jpg"
            width={1440}
            height={577}
            priority
            alt="Privacy Policy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
            aria-hidden="true"
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto">
              <article>
                {/* Article header */}
                <header className="mb-8">
                  {/* Title and excerpt */}
                  <div className="text-center md:text-left">
                    <h1
                      className="h1 font-red-hat-display mb-4"
                      data-aos="fade-down"
                    >
                      Privacy Policy
                    </h1>
                    <p
                      className="text-xl text-gray-600 dark:text-gray-400"
                      data-aos="fade-down"
                      data-aos-delay="150"
                    >
                      At The 3 Rocks (https://www.the-3rocks.com), your
                      privacy is important to us. This Privacy Policy explains
                      how we collect, use, and protect your personal
                      information.
                    </p>
                  </div>
                  {/* Article meta */}
                </header>
                <hr
                  className="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8"
                  data-aos="fade-down"
                  data-aos-delay="450"
                />

                {/* Article content */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="450">
                  <article className="prose text-lg text-gray-600 dark:text-gray-400 max-w-none prose-lg prose-p:leading-normal prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-teal-500 dark:prose-blockquote:border-gray-400 prose-blockquote:font-normal prose-blockquote:text-inherit">
                    <h2>Information We Collect</h2>
                    <p>We may collect the following types of data when you interact with our website or contact us through our forms or email:</p>
                    <ul>
                      <li>Information you voluntarily provide, such as your name, email address, phone number, company name, and country when you fill out the contact form or request a quotation for Moroccan lead, zinc, copper, barite, iron ore, cobalt, or antimony products</li>
                      <li>Usage data collected automatically, including your IP address, browser type and version, device information, operating system, referring URLs, and pages visited on our website</li>
                      <li>Cookies and similar tracking technologies placed by us and by third-party services including Google Analytics and Google AdSense, as described in our Cookies Policy</li>
                      <li>Correspondence history, including emails and messages exchanged with our team regarding product inquiries, quotations, orders, and shipment tracking</li>
                    </ul>
                    <p>We collect this information to respond to your inquiries, provide quotations and product information, process orders, arrange shipments, and improve our website and services. We do not collect sensitive personal data such as racial or ethnic origin, political opinions, religious beliefs, health information, or biometric data unless voluntarily provided by you in the context of a specific business relationship.</p>

                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect for the following business purposes:</p>
                    <ul>
                      <li>To respond to your inquiries, provide quotations for Moroccan minerals and raw materials, and communicate with you about product specifications, pricing, and availability</li>
                      <li>To process and fulfil orders, arrange shipping and logistics through Moroccan ports including Casablanca, Tangier Med, and Jorf Lasfar, and manage export documentation including certificates of origin, bills of lading, and certificates of analysis</li>
                      <li>To operate and improve our website, personalize your browsing experience, and ensure that our content is presented effectively on your device</li>
                      <li>To display relevant advertisements through Google AdSense and other advertising platforms that may be of interest to industrial buyers and procurement professionals</li>
                      <li>To analyze website traffic, user behaviour, and trends using Google Analytics, helping us understand which pages and products generate the most interest and how visitors navigate our site</li>
                      <li>To comply with legal obligations, including Moroccan export regulations, anti-money laundering requirements, and international trade sanctions screening</li>
                      <li>To maintain records of our business correspondence and transactions for accounting, auditing, and dispute resolution purposes</li>
                    </ul>

                    <h2>Data Retention</h2>
                    <p>We retain your personal data only for as long as is necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. For enquiry and quotation correspondence, we retain records for a period of five years from the date of the last communication. For completed transactions, we retain all documentation including contracts, shipping records, certificates of analysis, and correspondence for a minimum of five years from the date of shipment, in accordance with Moroccan commercial law and international trade record-keeping standards. After the retention period, your personal data will be securely deleted or anonymized so that it can no longer be associated with you.</p>
                    <p>If you request that we delete your personal data earlier, we will do so within 30 days of receiving your request, subject to any legal obligations that require us to retain certain records. We will inform you if any such obligations prevent us from complying fully with your deletion request.</p>

                    <h2>International Data Transfers</h2>
                    <p>Your personal data may be transferred to and stored on servers located outside Morocco, including in the European Union, the United States, and other jurisdictions where our service providers operate. When we transfer your data internationally, we ensure that appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission, data processing agreements that comply with applicable data protection laws, and reliance on adequacy decisions where available. The 3 Rocks Company is headquartered in Rabat, Morocco, and our primary data processing takes place in Morocco. By submitting your personal data to us, you acknowledge that your data may be transferred to and processed in jurisdictions that may not provide the same level of data protection as your home country.</p>

                    <h2>Your Rights Under GDPR and CCPA</h2>
                    <p>If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, you have the following rights under the General Data Protection Regulation (GDPR) regarding your personal data:</p>
                    <ul>
                      <li><strong>Right of access:</strong> You may request a copy of the personal data we hold about you, together with information about how we process it</li>
                      <li><strong>Right to rectification:</strong> You may request that we correct any inaccurate or incomplete personal data</li>
                      <li><strong>Right to erasure (right to be forgotten):</strong> You may request that we delete your personal data in certain circumstances, including where it is no longer necessary for the purposes for which it was collected</li>
                      <li><strong>Right to restrict processing:</strong> You may request that we restrict the processing of your personal data in certain circumstances, such as where you contest its accuracy</li>
                      <li><strong>Right to data portability:</strong> You may request that we provide your personal data in a structured, commonly used, and machine-readable format, and that we transmit it to another data controller where technically feasible</li>
                      <li><strong>Right to object:</strong> You may object to the processing of your personal data for direct marketing purposes, or on grounds relating to your particular situation where we process your data for our legitimate interests</li>
                      <li><strong>Right to withdraw consent:</strong> Where we process your data based on your consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out before the withdrawal</li>
                    </ul>
                    <p>If you are a resident of California, you have the following rights under the California Consumer Privacy Act (CCPA):</p>
                    <ul>
                      <li><strong>Right to know:</strong> You may request that we disclose the categories and specific pieces of personal data we have collected about you, the sources of that data, the business purposes for collecting it, and the categories of third parties with whom we share it</li>
                      <li><strong>Right to delete:</strong> You may request that we delete personal data we have collected from you, subject to certain exceptions such as completing transactions, detecting security incidents, and complying with legal obligations</li>
                      <li><strong>Right to opt out of sale:</strong> The 3 Rocks does not sell your personal data. We do not share personal data for cross-context behavioural advertising purposes in exchange for monetary or other valuable consideration</li>
                      <li><strong>Right to non-discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights, including by denying services, charging different prices, or providing a different level or quality of service</li>
                    </ul>
                    <p>To exercise any of the rights described above, please contact us at <a href="mailto:info@the-3rocks.com">info@the-3rocks.com</a>. We will respond to your request within 30 days and may require additional information to verify your identity before processing your request. We will not charge a fee for exercising your rights unless your request is manifestly unfounded, excessive, or repetitive.</p>

                    <h2>Children's Privacy</h2>
                    <p>Our website and services are directed at industrial buyers, procurement professionals, and businesses in the mining, metals, and raw materials sectors. We do not knowingly collect personal data from children under the age of 16. If you are a parent or guardian and believe that your child has provided us with personal data without your consent, please contact us at <a href="mailto:info@the-3rocks.com">info@the-3rocks.com</a> and we will take steps to delete that information promptly. We do not use our website to market products or services to children.</p>

                    <h2>Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time to reflect changes in our data practices, legal requirements, or the services we offer. When we make material changes, we will post the updated policy on this page and update the effective date at the top of the policy. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your personal data. Your continued use of our website after any changes to this policy constitutes your acceptance of the updated terms.</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data protection practices, please contact us at:</p>
                    <ul>
                      <li>Email: <a href="mailto:info@the-3rocks.com">info@the-3rocks.com</a></li>
                      <li>Phone: +212 654 352 802</li>
                      <li>Address: The 3 Rocks Company, Rabat, Morocco</li>
                      <li>Business hours: Sunday through Thursday, 9:00 to 18:00 (Morocco time, UTC+1)</li>
                    </ul>
                    <p>We are committed to addressing your inquiries promptly and transparently. If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.</p>
                  </article>
                </div>

                {/* Article footer */}
                {/* <footer>
                  <Newsletter />
                </footer> */}
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

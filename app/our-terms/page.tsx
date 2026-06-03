import Image from "next/image";
import Newsletter from "@/components/newsletter";
import RelatedPosts from "@/components/related-posts-02";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Welcome to The 3 Rocks! By accessing or using our website, you agree to be bound by the following terms and conditions.",
};

export default function Terms() {
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
            alt="Terms and Conditions"
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
                      Terms and Conditions
                    </h1>
                    <p
                      className="text-xl text-gray-600 dark:text-gray-400"
                      data-aos="fade-down"
                      data-aos-delay="150"
                    >
                      Welcome to The 3 Rocks! By accessing or using our
                      website (https://www.the-3rocks.com), you agree to be
                      bound by the following terms and conditions.
                    </p>
                  </div>
                </header>
                <hr
                  className="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8"
                  data-aos="fade-down"
                  data-aos-delay="450"
                />

                {/* Article content */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="450">
                  <article className="prose text-lg text-gray-600 dark:text-gray-400 max-w-none prose-lg prose-p:leading-normal prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-teal-500 dark:prose-blockquote:border-gray-400 prose-blockquote:font-normal prose-blockquote:text-inherit">
                    <h2>Use of Website</h2>
                    <p>
                      The content provided on The 3 Rocks website is for general informational and business purposes only. By accessing our site, you agree to use it in accordance with these terms. You agree not to misuse, reproduce, distribute, or modify any content without prior written permission from The 3 Rocks. We reserve the right to modify, update, or remove content, features, or services at any time without prior notice. You are responsible for ensuring that your use of the website complies with all applicable local, national, and international laws and regulations, including the import and export control laws of the Kingdom of Morocco and the destination country.
                    </p>
                    <p>
                      The website may contain technical inaccuracies or typographical errors. The 3 Rocks does not warrant that the information on this site is complete, current, or error-free. Any reliance you place on such information is strictly at your own risk. The mineral grades, chemical compositions, and physical properties stated on product pages are indicative ranges based on representative sampling and may not reflect the exact composition of a specific shipment unless confirmed by a certificate of analysis issued by an accredited laboratory for that particular lot.
                    </p>

                    <h2>Commercial Terms & Product Inquiries</h2>
                    <p>
                      All pricing, quotations, and commercial offers communicated through this website or by email are indicative and subject to confirmation by a formal sales contract signed by both parties. Prices quoted are valid for the period stated in the quotation and may be withdrawn or revised if not accepted within that period. Minimum order quantities and delivery lead times are specified on a per-product basis in our commercial proposals and may vary depending on the product form, packaging, destination, and shipping schedule.
                    </p>
                    <p>
                      Product specifications published on this website — including but not limited to grade ranges, impurity limits, particle size distribution, moisture content, and physical properties — are provided as general guidance. The exact specification for each shipment is agreed in the sales contract and confirmed by the certificate of analysis issued by the independent laboratory nominated in the contract. The 3 Rocks reserves the right to reject orders that require specifications outside our standard production capability or that require processing methods or testing protocols not available in our supply chain.
                    </p>
                    <p>
                      All orders are subject to availability of stock. In the event that the specified material is not available at the time of order, The 3 Rocks will notify the buyer within five business days and, if possible, offer a substitute product or alternative delivery schedule. No binding contract exists until a signed sales contract or a pro-forma invoice and an accepted purchase order have been exchanged between the parties and, where applicable, the agreed financial instrument — letter of credit, bank guarantee, or telegraphic transfer — has been opened or received.
                    </p>

                    <h2>Intellectual Property</h2>
                    <p>
                      All content, text, images, graphics, logos, trademarks, branding, and software on this website are the exclusive property of The 3 Rocks Company unless otherwise stated. The 3 Rocks name, logo, and tagline are registered trademarks of The 3 Rocks Company in Morocco and may be registered in other jurisdictions. Unauthorized use, reproduction, or distribution of any content is strictly prohibited and may violate copyright, trademark, and other applicable laws. Nothing in these terms grants you any license or right to use our intellectual property without our express written consent. All rights not expressly granted are reserved by The 3 Rocks Company.
                    </p>
                    <p>
                      Users are permitted to view, download, and print pages from the website solely for their own internal business reference purposes, provided they do not remove any copyright or proprietary notices from the materials. Any other use, including republication, redistribution, transmission, or creation of derivative works, is prohibited without prior written authorisation from The 3 Rocks.
                    </p>

                    <h2>Third-Party Links &amp; Advertising</h2>
                    <p>
                      The 3 Rocks website may contain links to third-party websites, services, and advertisements, including ads served through Google AdSense. These external sites are not under our control, and we are not responsible for their content, privacy practices, or any damages or losses arising from their use. We encourage you to review the terms and privacy policies of any third-party sites you visit. The inclusion of any link does not imply endorsement by The 3 Rocks of the linked site or its operators. We do not guarantee the availability, accuracy, or security of external websites and disclaim all liability arising from your use of them.
                    </p>
                    <p>
                      Google AdSense may use cookies and web beacons to serve advertisements based on your prior visits to this website and other sites on the internet. You may opt out of personalised advertising by visiting Google&rsquo;s Ads Settings at adssettings.google.com or by using the cookie consent controls provided on this website. Google&rsquo;s use of advertising cookies is governed by Google&rsquo;s own privacy policy, which is available at policies.google.com/privacy.
                    </p>

                    <h2>Disclaimer of Warranties</h2>
                    <p>
                      All information, materials, and services on this website are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any representations or warranties of any kind, either express or implied. The 3 Rocks disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, non-infringement, and accuracy of content. We do not guarantee that the website will be uninterrupted, secure, or error-free, or that defects will be corrected. Access to the website may be suspended temporarily or permanently without notice for maintenance, upgrades, or other operational reasons.
                    </p>
                    <p>
                      The 3 Rocks makes no representation or warranty — express or implied, statutory or otherwise — regarding the accuracy, completeness, timeliness, or reliability of any mineral grade, product specification, or test result published on the website. All such information is provided for preliminary evaluation purposes only and does not constitute a guarantee of the composition or quality of any product that may be delivered under a future contract. Buyers should always rely on the certificate of analysis issued for the specific shipment and not on the indicative values published on this website.
                    </p>

                    <h2>Limitation of Liability</h2>
                    <p>
                      To the fullest extent permitted by applicable law, The 3 Rocks Company, its directors, employees, or affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or related to your use of this website, including but not limited to loss of profits, data, or business opportunities, even if advised of the possibility of such damages. Your sole remedy is to discontinue using the website. This limitation of liability applies regardless of the legal theory under which the claim is brought, whether in contract, tort, negligence, strict liability, or otherwise.
                    </p>
                    <p>
                      Where the website provides information about mineral products, including indicative grades, pricing, and availability, The 3 Rocks shall not be liable for any business decisions, investment decisions, or contractual commitments made in reliance on such information. Any contract for the sale of minerals or raw materials is governed exclusively by the terms of the signed sales contract between the parties, which shall prevail over any conflicting or additional terms contained on this website.
                    </p>

                    <h2>Product Warranty Limitation</h2>
                    <p>
                      The 3 Rocks warrants that each shipment of minerals delivered under a signed sales contract will conform to the specification expressly stated in that contract and verified by the certificate of analysis issued by the nominated independent laboratory at the port of loading. The buyer&rsquo;s exclusive remedy for any non-conforming shipment is limited, at The 3 Rocks&rsquo;s option, to replacement of the non-conforming material, a price adjustment proportionate to the deviation from specification, or rejection of the non-conforming lot with a refund of the purchase price paid for that lot. No warranty is given regarding the suitability of any product for a particular end use, application, or manufacturing process unless expressly stated in the sales contract.
                    </p>
                    <p>
                      The 3 Rocks shall not be liable for any loss, damage, or expense arising from the use of our products in applications for which they are not intended or specified, or from the buyer&rsquo;s failure to independently verify the suitability of the product for its intended purpose through appropriate testing. Any claim for non-conformance must be submitted in writing within fourteen days of discharge at the destination port and must be supported by a certificate of analysis from an independent laboratory mutually agreed by both parties.
                    </p>

                    <h2>Force Majeure</h2>
                    <p>
                      Neither party shall be held liable for any failure or delay in performance of its obligations under any contract arising from this website to the extent that such failure or delay is caused by events beyond its reasonable control. Force majeure events include but are not limited to acts of God, natural disasters, war, civil unrest, terrorism, strikes or labour disputes, government actions or regulations, pandemics, epidemics, port closures, shipping embargoes, supplier failures, disruptions to transportation or utilities, and any other circumstance that is unforeseeable and unavoidable. The affected party shall notify the other party in writing as soon as reasonably practicable and shall use reasonable efforts to mitigate the impact of the force majeure event.
                    </p>
                    <p>
                      During the period of a force majeure event, all delivery obligations under the affected contract shall be suspended and the delivery schedule shall be extended by a period equal to the duration of the force majeure event. If the force majeure event continues for more than sixty consecutive days, either party may terminate the affected contract without liability by giving written notice to the other party, provided that payments due for shipments already delivered and accepted before the force majeure event shall remain payable.
                    </p>

                    <h2>Indemnification</h2>
                    <p>
                      You agree to indemnify, defend, and hold harmless The 3 Rocks Company, its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of or in any way connected with your use of the website, your violation of these terms, your infringement of any intellectual property or other rights of any third party, or your failure to comply with applicable laws and regulations including export control and sanctions requirements. We reserve the right to assume the exclusive defence and control of any matter subject to indemnification by you, in which case you agree to cooperate with our defence.
                    </p>

                    <h2>Termination</h2>
                    <p>
                      We reserve the right to suspend or terminate your access to the website at any time, without prior notice or liability, for any reason, including if you breach these terms and conditions. Upon termination, your right to use the website will immediately cease. Provisions of these terms that by their nature should survive termination shall survive, including intellectual property, limitation of liability, product warranty limitation, indemnification, governing law, and dispute resolution. Any contractual obligations between you and The 3 Rocks that arise from a separately signed sales contract shall not be affected by termination of your access to this website.
                    </p>

                    <h2>Governing Law &amp; Dispute Resolution</h2>
                    <p>
                      These terms and conditions shall be governed by and construed in accordance with the laws of the Kingdom of Morocco, without regard to its conflict of law provisions. We also comply with applicable international regulations including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA) where they apply to our operations. Any disputes arising from these terms or from your use of the website shall first be resolved through good-faith negotiations between the parties. If a resolution cannot be reached within thirty days of the commencement of negotiations, the dispute shall be submitted to the competent courts of Casablanca, Morocco.
                    </p>
                    <p>
                      For disputes arising from sales contracts for minerals and raw materials, the dispute resolution mechanism specified in the applicable sales contract shall apply. In the absence of a specified mechanism, disputes shall be referred to arbitration in accordance with the Rules of Arbitration of the Casablanca International Mediation and Arbitration Centre (CIMAC) before a single arbitrator appointed in accordance with those rules. The language of the arbitration shall be English. The award of the arbitrator shall be final and binding on both parties.
                    </p>

                    <h2>Changes to Terms</h2>
                    <p>
                      We reserve the right to update or modify these terms and conditions at any time without prior notice. Changes will be effective immediately upon posting on this page. We encourage you to review these terms periodically to stay informed of any updates. Your continued use of the website after any changes constitutes acceptance of the revised terms. Material changes that affect your legal rights or obligations under these terms will be highlighted by a notice on the website for a period of at least fourteen days after the change is posted.
                    </p>

                    <h2>Severability</h2>
                    <p>
                      If any provision of these terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be severed, and the remaining provisions shall remain in full force and effect. The invalid or unenforceable provision shall be replaced by a valid, enforceable provision that most closely reflects the original intent of the parties. The failure to enforce any right or provision of these terms shall not be deemed a waiver of such right or provision, and no waiver shall be effective unless made in writing and signed by an authorised representative of The 3 Rocks.
                    </p>

                    <h2>Entire Agreement</h2>
                    <p>
                      These terms and conditions, together with the Privacy Policy and the Cookies Policy available on this website, constitute the entire agreement between you and The 3 Rocks Company regarding your use of the website and supersede all prior agreements, understandings, representations, and communications, whether written or oral, relating to the subject matter of these terms. Any rights not expressly granted in these terms are reserved by The 3 Rocks Company.
                    </p>

                    <h2>Contact</h2>
                    <p>
                      If you have any questions, concerns, or requests regarding these terms and conditions, please contact us at{" "}
                      <a href="mailto:info@the-3rocks.com">
                        info@the-3rocks.com
                      </a>
                      . We are committed to addressing your inquiries promptly and transparently. Communications regarding legal matters should be addressed to our Legal Department at the same email address with the subject line &ldquo;Legal: Terms and Conditions Inquiry&rdquo; to ensure proper routing and timely response.
                    </p>
                    <ul>
                      <li>
                        You agree not to misuse, reproduce, distribute, or
                        modify any content without prior written permission from
                        The 3 Rocks.
                      </li>
                      <li>
                        We reserve the right to modify, update, or remove
                        content, features, or services at any time without prior
                        notice.
                      </li>
                      <li>
                        You are responsible for ensuring that your use of the
                        website complies with all applicable local, national,
                        and international laws and regulations.
                      </li>
                    </ul>

                    <h2>Intellectual Property</h2>
                    <p>
                      All content, text, images, graphics, logos, trademarks,
                      branding, and software on this website are the exclusive
                      property of The 3 Rocks Company unless otherwise stated.
                      Unauthorized use, reproduction, or distribution of any
                      content is strictly prohibited and may violate copyright,
                      trademark, and other applicable laws. Nothing in these
                      terms grants you any license or right to use our
                      intellectual property without our express written consent.
                    </p>

                    <h2>Third-Party Links &amp; Advertising</h2>
                    <p>
                      The 3 Rocks website may contain links to third-party
                      websites, services, and advertisements, including ads
                      served through Google AdSense. These external sites are
                      not under our control, and we are not responsible for
                      their content, privacy practices, or any damages or losses
                      arising from their use. We encourage you to review the
                      terms and privacy policies of any third-party sites you
                      visit. The inclusion of any link does not imply
                      endorsement by The 3 Rocks.
                    </p>

                    <h2>Disclaimer of Warranties</h2>
                    <p>
                      All information, materials, and services on this website
                      are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any
                      representations or warranties of any kind, either express
                      or implied. The 3 Rocks disclaims all warranties,
                      including but not limited to merchantability, fitness for
                      a particular purpose, non-infringement, and accuracy of
                      content. We do not guarantee that the website will be
                      uninterrupted, secure, or error-free, or that defects will
                      be corrected.
                    </p>

                    <h2>Limitation of Liability</h2>
                    <p>
                      To the fullest extent permitted by applicable law, The 3
                      Rocks Company, its directors, employees, or affiliates
                      shall not be liable for any direct, indirect, incidental,
                      consequential, special, or punitive damages arising out of
                      or related to your use of this website, including but not
                      limited to loss of profits, data, or business
                        opportunities, even if advised of the possibility of such
                      damages. Your sole remedy is to discontinue using the
                      website.
                    </p>

                    <h2>Indemnification</h2>
                    <p>
                      You agree to indemnify, defend, and hold harmless The 3
                      Rocks Company, its officers, directors, employees, and
                      agents from and against any and all claims, liabilities,
                      damages, losses, costs, or expenses (including reasonable
                      legal fees) arising out of or in any way connected with
                      your use of the website, your violation of these terms, or
                      your infringement of any intellectual property or other
                      rights of any third party.
                    </p>

                    <h2>Termination</h2>
                    <p>
                      We reserve the right to suspend or terminate your access
                      to the website at any time, without prior notice or
                      liability, for any reason, including if you breach these
                      terms and conditions. Upon termination, your right to use
                      the website will immediately cease. Provisions of these
                      terms that by their nature should survive termination
                      shall survive, including intellectual property,
                      limitation of liability, indemnification, and governing
                      law.
                    </p>

                    <h2>Governing Law &amp; Dispute Resolution</h2>
                    <p>
                      These terms and conditions shall be governed by and
                      construed in accordance with the laws of the Kingdom of
                      Morocco, without regard to its conflict of law
                      provisions. We also comply with applicable international
                      regulations including GDPR and CCPA where they apply to
                      our operations. Any disputes arising from these terms
                      shall first be resolved through good-faith negotiations.
                      If a resolution cannot be reached, disputes shall be
                      submitted to the competent courts of Casablanca, Morocco.
                    </p>

                    <h2>Changes to Terms</h2>
                    <p>
                      We reserve the right to update or modify these terms and
                      conditions at any time without prior notice. Changes will
                      be effective immediately upon posting on this page. We
                      encourage you to review these terms periodically to stay
                      informed of any updates. Your continued use of the website
                      after any changes constitutes acceptance of the revised
                      terms.
                    </p>

                    <h2>Severability</h2>
                    <p>
                      If any provision of these terms is found to be
                      unenforceable or invalid by a court of competent
                      jurisdiction, that provision shall be severed, and the
                      remaining provisions shall remain in full force and
                      effect. The failure to enforce any right or provision of
                      these terms shall not be deemed a waiver of such right or
                      provision.
                    </p>

                    <h2>Contact</h2>
                    <p>
                      If you have any questions, concerns, or requests regarding
                      these terms and conditions, please contact us at{" "}
                      <a href="mailto:info@the-3rocks.com">
                        info@the-3rocks.com
                      </a>
                      . We are committed to addressing your inquiries promptly
                      and transparently.
                    </p>
                    <ul>
                      <li>
                        You agree not to misuse, reproduce, or redistribute any
                        content without permission.
                      </li>
                      <li>
                        We may modify, update, or remove content at any time
                        without notice.
                      </li>
                    </ul>

                    <h2>Intellectual Property</h2>
                    <p>
                      All content, images, and branding are the property of The
                      3 Rocks unless otherwise stated. Unauthorized use is
                      strictly prohibited.
                    </p>

                    <h2>Third-Party Links & Advertising</h2>
                    <p>
                      The 3 Rocks may contain links to third-party websites and
                      display ads through Google AdSense. We are not responsible
                      for the content or privacy practices of external sites.
                    </p>

                    <h2>Limitation of Liability</h2>
                    <p>
                      We are not liable for any loss or damage resulting from
                      your use of this website. All information is provided “as
                      is” without warranty.
                    </p>

                    <h2>Governing Law</h2>
                    <p>
                      These terms shall be governed in accordance with the laws
                      of Morocco, including applicable GDPR and CCPA
                      regulations.
                    </p>

                    <h2>Contact</h2>
                    <p>
                      For any questions, contact us at{" "}
                      <a href="mailto:info@the-3rocks.com">
                        info@the-3rocks.com
                      </a>
                      .
                    </p>
                  </article>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

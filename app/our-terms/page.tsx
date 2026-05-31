import Image from "next/image";
import Newsletter from "@/components/newsletter";
import RelatedPosts from "@/components/related-posts-02";

export const metadata = {
  title: "Terms and Conditions | The 3 Rocks",
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
                      The content provided on The 3 Rocks website is for general
                      informational and business purposes only. By accessing our
                      site, you agree to use it in accordance with these terms.
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

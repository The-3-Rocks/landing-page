import Image from "next/image";
import Newsletter from "@/components/newsletter";
import RelatedPosts from "@/components/related-posts-02";

export const metadata = {
  title: "Privacy Policy",
  description:
    "At The 3 Rocks, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.",
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
                      At The 3 Rocks (https://www.the-3rocks.com), your privacy
                      is important to us. This Privacy Policy explains how we
                      collect, use, and protect your personal information.
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
                    <h2>1. Introduction</h2>
                    <p>
                      This Privacy Policy is designed to help you understand how
                      The 3 Rocks Company ("The 3 Rocks," "we," "us," "our," or
                      "Company") collects, uses, shares, and safeguards your
                      information when you visit our website, the-3rocks.com
                      (the "Site"), and use our services. Please read this
                      Privacy Policy carefully. If you do not agree with our
                      policies and practices, please do not use our Site or
                      services.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <p>
                      We collect various types of information in connection with
                      the services we provide, including:
                    </p>
                    <ul>
                      <li>
                        <strong>Personal Information You Provide:</strong> When
                        you contact us through our website, submit an inquiry,
                        request a quote, or engage with our services, you may
                        provide us with personal information such as:
                        <ul>
                          <li>Name, company name, and job title</li>
                          <li>Email address and phone number</li>
                          <li>Mailing address and country of origin</li>
                          <li>
                            Information about your mineral sourcing needs and
                            project specifications
                          </li>
                          <li>
                            Payment and billing information (if applicable)
                          </li>
                          <li>Any other information you choose to provide</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Information Collected Automatically:</strong>
                        <ul>
                          <li>
                            Log data including IP address, browser type,
                            operating system, and pages visited
                          </li>
                          <li>
                            Device information including hardware model, mobile
                            network information
                          </li>
                          <li>
                            Cookies and similar tracking technologies to enhance
                            user experience
                          </li>
                          <li>
                            Website analytics including click patterns, time
                            spent on pages, and user flow
                          </li>
                          <li>
                            Geolocation data based on IP address (not precise
                            location)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Information from Third Parties:</strong> We may
                        receive information about you from third parties such as
                        payment processors, analytics providers, and advertising
                        partners.
                      </li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <p>
                      We use the information we collect for various purposes,
                      including:
                    </p>
                    <ul>
                      <li>
                        Processing and responding to your inquiries and requests
                        for mineral quotes
                      </li>
                      <li>
                        Providing customer support and technical assistance
                      </li>
                      <li>
                        Sending you relevant updates about our mineral products,
                        services, and industry news
                      </li>
                      <li>
                        Personalizing your experience on our website and
                        tailoring content to your interests
                      </li>
                      <li>
                        Analyzing website traffic, user behavior, and improving
                        our Site and services
                      </li>
                      <li>
                        Fulfilling legal obligations and protecting our rights
                        and the rights of others
                      </li>
                      <li>
                        Detecting, preventing, and addressing fraud, security,
                        and technical issues
                      </li>
                      <li>
                        Complying with applicable laws and regulations in
                        Morocco and internationally
                      </li>
                      <li>
                        Displaying targeted advertisements through Google
                        AdSense and other advertising networks
                      </li>
                      <li>
                        Conducting market research and collecting feedback to
                        improve our offerings
                      </li>
                    </ul>

                    <h2>4. Cookies and Tracking Technologies</h2>
                    <p>
                      We use cookies and similar tracking technologies to
                      enhance your browsing experience and analyze website
                      performance. Cookies are small text files stored on your
                      device that help us remember your preferences and track
                      your activity on our Site. Types of cookies we use
                      include:
                    </p>
                    <ul>
                      <li>
                        <strong>Essential Cookies:</strong> Necessary for
                        website functionality and security
                      </li>
                      <li>
                        <strong>Analytical Cookies:</strong> Help us understand
                        how visitors interact with our Site
                      </li>
                      <li>
                        <strong>Marketing Cookies:</strong> Used to deliver
                        personalized advertisements and track marketing
                        effectiveness
                      </li>
                      <li>
                        <strong>Preference Cookies:</strong> Remember your
                        settings and preferences for future visits
                      </li>
                    </ul>
                    <p>
                      You can control cookies through your browser settings.
                      Most browsers allow you to refuse cookies or alert you
                      when cookies are being sent. Disabling cookies may affect
                      the functionality of our Site.
                    </p>

                    <h2>5. Google AdSense and Third-Party Advertising</h2>
                    <p>
                      We use Google AdSense to display advertisements on our
                      website. Google and its partners may collect and use data
                      about your visits to this website and other websites to:
                    </p>
                    <ul>
                      <li>
                        Provide targeted advertisements based on your interests
                      </li>
                      <li>
                        Measure advertising effectiveness and campaign
                        performance
                      </li>
                      <li>Build user profiles based on browsing history</li>
                      <li>Serve ads across multiple devices and platforms</li>
                    </ul>
                    <p>
                      Google uses cookies, web beacons, and other technologies
                      to collect this data. For more information about Google's
                      advertising practices and how to opt out of personalized
                      advertising, visit Google's{" "}
                      <a
                        href="https://policies.google.com/technologies/partner-sites"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        policies page for partner sites
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://adssettings.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Ad Settings
                      </a>
                      .
                    </p>

                    <h2>6. Data Sharing and Disclosure</h2>
                    <p>
                      We may share your information in the following
                      circumstances:
                    </p>
                    <ul>
                      <li>
                        <strong>Service Providers:</strong> With third-party
                        vendors who assist us in operating our website and
                        conducting our business (payment processors, analytics
                        providers, hosting providers)
                      </li>
                      <li>
                        <strong>Business Partners:</strong> With partners for
                        joint ventures, research, or service provision
                      </li>
                      <li>
                        <strong>Legal Requirements:</strong> When required by
                        law, court order, or governmental request
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> In case of merger,
                        acquisition, or sale of assets
                      </li>
                      <li>
                        <strong>Your Consent:</strong> When you have explicitly
                        agreed to share your information
                      </li>
                    </ul>
                    <p>
                      We do not sell your personal data to third parties for
                      marketing purposes without your explicit consent.
                    </p>

                    <h2>7. Data Security</h2>
                    <p>
                      We implement reasonable security measures to protect your
                      personal information from unauthorized access, alteration,
                      disclosure, or destruction. These measures include:
                    </p>
                    <ul>
                      <li>
                        Encrypted data transmission using SSL/TLS protocols
                      </li>
                      <li>Secure storage systems and access controls</li>
                      <li>
                        Regular security audits and vulnerability assessments
                      </li>
                      <li>Employee training on data protection practices</li>
                      <li>
                        Incident response procedures for security breaches
                      </li>
                    </ul>
                    <p>
                      However, no method of transmission over the internet is
                      100% secure. While we strive to protect your information,
                      we cannot guarantee absolute security.
                    </p>

                    <h2>8. Data Retention</h2>
                    <p>
                      We retain your personal information for as long as
                      necessary to provide our services, fulfill the purposes
                      outlined in this Privacy Policy, or as required by
                      applicable law. The retention period may vary depending on
                      the type of information and the purposes for which we use
                      it:
                    </p>
                    <ul>
                      <li>
                        Contact information: Retained for ongoing business
                        relationship and legal compliance
                      </li>
                      <li>
                        Website usage data: Typically retained for 12-24 months
                        for analytics purposes
                      </li>
                      <li>
                        Transaction records: Retained for minimum 7 years for
                        legal and accounting requirements
                      </li>
                      <li>
                        Marketing information: Retained until you unsubscribe or
                        request deletion
                      </li>
                    </ul>

                    <h2>9. Your GDPR Rights (EU Residents)</h2>
                    <p>
                      If you are located in the European Union, you have the
                      following rights under the General Data Protection
                      Regulation (GDPR):
                    </p>
                    <ul>
                      <li>
                        <strong>Right of Access:</strong> You can request access
                        to the personal data we hold about you
                      </li>
                      <li>
                        <strong>Right to Rectification:</strong> You can request
                        correction of inaccurate personal data
                      </li>
                      <li>
                        <strong>Right to Erasure:</strong> You can request
                        deletion of your personal data (subject to legal
                        obligations)
                      </li>
                      <li>
                        <strong>Right to Restrict Processing:</strong> You can
                        request that we limit how we process your data
                      </li>
                      <li>
                        <strong>Right to Data Portability:</strong> You can
                        request a copy of your data in a structured format
                      </li>
                      <li>
                        <strong>Right to Object:</strong> You can object to
                        processing of your data for marketing or other purposes
                      </li>
                      <li>
                        <strong>Right to Lodge a Complaint:</strong> You can
                        file a complaint with your local data protection
                        authority
                      </li>
                    </ul>

                    <h2>10. Your CCPA Rights (California Residents)</h2>
                    <p>
                      If you are a California resident, you have the following
                      rights under the California Consumer Privacy Act (CCPA):
                    </p>
                    <ul>
                      <li>
                        <strong>Right to Know:</strong> You can request what
                        personal information we collect about you
                      </li>
                      <li>
                        <strong>Right to Delete:</strong> You can request
                        deletion of personal information we have collected
                      </li>
                      <li>
                        <strong>Right to Opt-Out:</strong> You can opt out of
                        the sale or sharing of your personal information
                      </li>
                      <li>
                        <strong>Right to Non-Discrimination:</strong> We will
                        not discriminate against you for exercising your CCPA
                        rights
                      </li>
                      <li>
                        <strong>Right to Correct:</strong> You can request
                        correction of inaccurate personal information
                      </li>
                    </ul>
                    <p>
                      To exercise these rights, California residents can submit
                      a request through our contact form or email us at
                      info@the-3rocks.com. We will verify your identity and
                      respond within 45 days.
                    </p>

                    <h2>11. CCPA "Do Not Track" (DNT)</h2>
                    <p>
                      Some browsers include a "Do Not Track" feature. Currently,
                      there is no industry standard for recognizing DNT signals,
                      and we do not respond to DNT browser signals. However, you
                      can use other tools to control data collection and use,
                      including cookie controls in your browser settings.
                    </p>

                    <h2>12. Links to Third-Party Websites</h2>
                    <p>
                      Our Site may contain links to third-party websites that
                      are not operated by The 3 Rocks. This Privacy Policy does
                      not apply to third-party websites, and we are not
                      responsible for their privacy practices. We encourage you
                      to review the privacy policies of any third-party websites
                      before providing your personal information.
                    </p>

                    <h2>13. Children's Privacy</h2>
                    <p>
                      Our Site and services are not intended for children under
                      the age of 13. We do not knowingly collect personal
                      information from children under 13. If we become aware
                      that we have collected personal information from a child
                      under 13, we will take steps to delete such information
                      and terminate the child's account.
                    </p>

                    <h2>14. International Data Transfers</h2>
                    <p>
                      Your personal information may be transferred to,
                      processed, and stored in countries other than your country
                      of residence, including Morocco and other jurisdictions.
                      These countries may have data protection laws that differ
                      from those in your country. By using our Site and
                      providing your information, you consent to such transfers.
                    </p>

                    <h2>15. Policy Updates</h2>
                    <p>
                      We may update this Privacy Policy from time to time to
                      reflect changes in our practices, technology, legal
                      requirements, or other factors. We will notify you of
                      material changes by posting the updated Privacy Policy on
                      our Site with an updated "Last Modified" date. Your
                      continued use of our Site following the posting of revised
                      Privacy Policy means that you accept and agree to the
                      changes.
                    </p>

                    <h2>16. Contact Us</h2>
                    <p>
                      If you have any questions about this Privacy Policy, our
                      privacy practices, or your personal information, please
                      contact us:
                    </p>
                    <ul>
                      <li>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:info@the-3rocks.com">
                          info@the-3rocks.com
                        </a>
                      </li>
                      <li>
                        <strong>Address:</strong> The 3 Rocks Company,
                        Casablanca, Morocco
                      </li>
                      <li>
                        <strong>Phone:</strong> +212 654352802 / +212 783046051
                      </li>
                    </ul>
                    <p>
                      We will respond to your inquiries within 30 days of
                      receipt.
                    </p>

                    <p>
                      <strong>Last Modified:</strong> June 1, 2026
                    </p>
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

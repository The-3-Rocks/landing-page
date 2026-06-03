
import Image from "next/image";
import Newsletter from "@/components/newsletter";

export const metadata = {
  title: "Cookies Policy",
  description:
    "Learn about how The 3 Rocks uses cookies to enhance your browsing experience and serve personalized content and ads.",
};

export default function CookiesPolicy() {
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
            alt="Cookies Policy"
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
                      Cookies Policy
                    </h1>
                    <p
                      className="text-xl text-gray-600 dark:text-gray-400"
                      data-aos="fade-down"
                      data-aos-delay="150"
                    >
                      The 3 Rocks uses cookies to enhance your browsing
                      experience and to serve personalized content and ads
                      through Google AdSense.
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
                    <h2>What Are Cookies?</h2>
                    <p>
                      Cookies are small text files stored on your device by your web browser when you visit a website. They allow the website to remember your actions, preferences, and browsing patterns over time, making your experience more efficient and personalized. Cookies can be set by the website you are visiting (first-party cookies) or by third-party services embedded on the page, such as analytics or advertising platforms.
                    </p>
                    <p>
                      At The 3 Rocks, we use cookies to ensure our website functions correctly, to understand how visitors interact with our content, and to deliver relevant advertisements through Google AdSense. By continuing to browse our site, you consent to our use of cookies in accordance with this policy.
                    </p>

                    <h2>Types of Cookies We Use</h2>
                    <ul>
                      <li>
                        <strong>Necessary cookies:</strong> Essential for the
                        website to function properly. These enable core functionality
                        such as page navigation, secure access, and form submissions.
                        Without these cookies, certain services on our website cannot
                        be provided.
                      </li>
                      <li>
                        <strong>Performance cookies:</strong> Help us analyze
                        website performance and understand how visitors use our site.
                        We use Google Analytics to collect aggregated data on page
                        visits, time spent on pages, and user navigation patterns.
                        This information helps us improve our content and user experience.
                      </li>
                      <li>
                        <strong>Advertising cookies:</strong> Used by Google
                        AdSense to deliver personalized ads based on your browsing
                        history and interests. These cookies track your visits across
                        websites and help display advertisements that are more relevant
                        to you. They also limit the number of times you see an ad and
                        help measure advertising effectiveness.
                      </li>
                    </ul>

                    <h2>Third-Party Cookies</h2>
                    <p>
                      Some cookies on our website are placed by trusted third-party services. Google Analytics uses cookies to collect anonymized traffic data. Google AdSense uses cookies to serve personalized advertisements. These third parties have their own privacy and cookie policies governing the use of your data. We encourage you to review Google's Privacy Policy for more information on how your data is handled.
                    </p>

                    <h2>Cookie Retention</h2>
                    <p>
                      Cookies remain on your device for different durations. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you manually delete them, allowing the website to remember your preferences on future visits. Our persistent cookies typically expire after 30 days to 24 months, depending on their purpose.
                    </p>

                    <h2>Cookies Used on This Website</h2>
                    <p>The following table lists the cookies that may be set on your device when you visit The 3 Rocks website. Please note that the specific cookies set may vary depending on your browser, device, and consent preferences.</p>
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                          <th className="p-2 border border-gray-300 dark:border-gray-600 text-left">Cookie Name</th>
                          <th className="p-2 border border-gray-300 dark:border-gray-600 text-left">Provider</th>
                          <th className="p-2 border border-gray-300 dark:border-gray-600 text-left">Purpose</th>
                          <th className="p-2 border border-gray-300 dark:border-gray-600 text-left">Type</th>
                          <th className="p-2 border border-gray-300 dark:border-gray-600 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border border-gray-300 dark:border-gray-600"><code>_ga</code>, <code>_ga_*</code></td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Google Analytics</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Distinguishes unique users and tracks website usage statistics including page visits, time spent, and navigation patterns</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Performance / Analytics</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">2 years / 2 years</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300 dark:border-gray-600"><code>_gid</code></td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Google Analytics</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Distinguishes unique users and throttles request rate for analytics tracking</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Performance / Analytics</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">24 hours</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300 dark:border-gray-600"><code>_gat</code></td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Google Analytics</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Throttles request rate to limit data collection on high-traffic sites</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Performance / Analytics</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">1 minute</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300 dark:border-gray-600"><code>_gcl_au</code></td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Google AdSense</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Tracks conversion events and measures advertising effectiveness for Google AdSense campaigns</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Advertising</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">3 months</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300 dark:border-gray-600"><code>IDE</code></td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Google DoubleClick</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Used for remarketing and personalisation of Google ads based on browsing behaviour across websites</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Advertising</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">13 months</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300 dark:border-gray-600"><code>NID</code></td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Google</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Remembers user preferences such as language selection, region, and ad personalisation settings</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Functional / Preferences</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">6 months</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300 dark:border-gray-600"><code>__cf_bm</code></td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Cloudflare</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Manages incoming traffic and identifies legitimate traffic to prevent malicious requests</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Necessary / Security</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">30 minutes</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Next.js session</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">The 3 Rocks</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Maintains session state and enables server-side rendering functionality for the Next.js framework</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Necessary / Functional</td>
                          <td className="p-2 border border-gray-300 dark:border-gray-600">Session</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>This table is updated periodically to reflect changes in the cookies set by third-party services. If you have questions about a specific cookie not listed here, please contact us at the email address provided in the Contact section below.</p>

                    <h2>Consent Management</h2>
                    <p>When you first visit The 3 Rocks website, a cookie consent banner is displayed that allows you to accept or decline the use of non-necessary cookies. Your consent preferences are stored in a first-party cookie so that the banner is not shown on subsequent visits. If you wish to change your preferences after your initial choice, you can clear your browser cookies and revisit the website to trigger the consent banner again, or you can manage cookies directly through your browser settings as described in the section above.</p>
                    <p>Under applicable data protection laws, including the General Data Protection Regulation (GDPR) and the ePrivacy Directive, we rely on your consent for the use of performance and advertising cookies. Necessary cookies are set without your consent because they are essential for the website to function. You have the right to withdraw your consent at any time without affecting the lawfulness of processing carried out before the withdrawal. Withdrawal of consent may affect certain features of the website, including personalized content and advertisements.</p>
                    <p>We use a cookie consent management platform that records your consent choice and provides a mechanism for you to review and change your preferences at any time. If you experience any issues with the consent banner or wish to exercise your data protection rights, please contact our Data Protection Officer at info@the-3rocks.com.</p>

                    <h2>Browser-Specific Instructions for Managing Cookies</h2>
                    <p>If you prefer to manage cookies directly through your browser settings rather than through our consent banner, the following instructions apply for commonly used browsers:</p>
                    <ul>
                      <li><strong>Google Chrome:</strong> Click the three-dot menu in the top-right corner of the browser window, select Settings, then Privacy and Security, then Cookies and Other Site Data. From this screen you can block all cookies, block third-party cookies only, or clear cookies for specific websites. For more detailed guidance, visit the Chrome Help Center at support.google.com.</li>
                      <li><strong>Mozilla Firefox:</strong> Click the menu button (three horizontal lines) in the top-right corner, select Settings, then Privacy and Security. Under the Cookies and Site Data section, you can choose to block all cookies, block cross-site tracking cookies, or clear cookies when Firefox closes. For more detailed guidance, visit the Firefox Support page at support.mozilla.org.</li>
                      <li><strong>Safari:</strong> On macOS, open Safari, click Safari in the menu bar, select Preferences, then the Privacy tab. From here you can block all cookies or prevent cross-site tracking. On iOS, open Settings, scroll to Safari, then tap Privacy and Security to adjust cookie and tracking settings. For more detailed guidance, visit the Safari Support page at support.apple.com.</li>
                      <li><strong>Microsoft Edge:</strong> Click the three-dot menu in the top-right corner, select Settings, then Cookies and Site Permissions, then Cookies and Data Stored. From this screen you can block cookies, allow only essential cookies, or clear existing cookies. For more detailed guidance, visit the Microsoft Edge Support page at support.microsoft.com.</li>
                      <li><strong>Opera:</strong> Click the Opera menu button in the top-left corner, select Settings, then Advanced, then Privacy and Security, then Cookies and Other Site Data. For more detailed guidance, visit the Opera Help page at help.opera.com.</li>
                      <li><strong>Brave:</strong> Click the three-line menu in the top-right corner, select Settings, then Shields, then Cookies and Site Data. Brave blocks third-party cookies by default and provides granular controls for per-site cookie management. For more detailed guidance, visit the Brave Support page at support.brave.com.</li>
                    </ul>
                    <p>If your browser is not listed above, please consult its help documentation or support website for instructions on managing cookies. You can also use the Global Privacy Control (GPC) signal if your browser supports it, which communicates your preference to opt out of data sharing or sale of personal information to all websites you visit that respect the GPC signal.</p>

                    <h2>Managing Cookies</h2>
                    <p>
                      You can choose to accept or decline cookies at any time. Most web browsers allow you to control cookies through their settings. You can block all cookies, delete existing cookies, or set preferences for specific websites. Below are links to instructions for common browsers:
                    </p>
                    <ul>
                      <li>Google Chrome: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                      <li>Mozilla Firefox: Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
                      <li>Safari: Preferences &gt; Privacy &gt; Cookies and website data</li>
                      <li>Microsoft Edge: Settings &gt; Cookies and site permissions &gt; Cookies</li>
                    </ul>
                    <p>
                      Please note that disabling cookies may affect your browsing experience and limit certain features of our website, including personalized content and ad preferences.
                    </p>

                    <h2>Opt-Out of Personalized Ads</h2>
                    <p>
                      You may opt out of personalized advertising from Google by visiting{" "}
                      <a
                        href="https://adssettings.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Ads Settings
                      </a>
                      . You can also opt out of interest-based advertising from participating companies through the{" "}
                      <a
                        href="https://www.aboutads.info"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Digital Advertising Alliance
                      </a>{" "}
                      opt-out portal. Additionally, mobile device users can adjust ad tracking preferences in their device settings under &quot;Limit Ad Tracking&quot; (iOS) or &quot;Opt out of Ads Personalization&quot; (Android).
                    </p>

                    <h2>Your GDPR &amp; CCPA Rights</h2>
                    <p>
                      If you are located in the European Economic Area (EEA) or California, you have specific rights regarding your personal data. Under the GDPR, you have the right to access, rectify, or erase your personal data, as well as the right to data portability and to withdraw consent at any time. Under the CCPA, California residents have the right to know what personal information is collected, to request deletion, and to opt out of the sale of their personal information. The 3 Rocks does not sell your personal data. To exercise your rights, please contact us at the email below.
                    </p>

                    <h2>Policy Updates</h2>
                    <p>
                      We may update this Cookies Policy from time to time to reflect changes in technology, regulation, or our data practices. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we use cookies. Your continued use of our website after any changes constitutes acceptance of the updated policy.
                    </p>

                    <h2>Contact</h2>
                    <p>
                      If you have any questions about our use of cookies, your data privacy rights, or this policy, please contact us at{" "}
                      <a href="mailto:info@the-3rocks.com">
                        info@the-3rocks.com
                      </a>
                      . We are committed to addressing your concerns promptly and transparently.
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

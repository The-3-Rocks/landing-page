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
                    <p>We may collect the following types of data:</p>
                    <ul>
                      <li>
                        Information you voluntarily provide (e.g., email address
                        when contacting us)
                      </li>
                      <li>
                        Usage data such as IP address, browser type, and device
                        information
                      </li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul>
                      <li>Operate and improve our website and services</li>
                      <li>Personalize your experience</li>
                      <li>
                        Display relevant advertisements through services like
                        Google AdSense
                      </li>
                      <li>Analyze website traffic and trends</li>
                    </ul>

                    <h2>Use of Cookies</h2>
                    <p>
                      We use cookies to provide a better user experience and to
                      serve personalized ads via Google AdSense. Cookies help us
                      analyze traffic and understand how visitors interact with
                      our website. You can manage or disable cookies through
                      your browser settings.
                    </p>

                    <h2>Google AdSense</h2>
                    <p>
                      We use Google AdSense to display ads. Google and its
                      partners may use cookies to personalize ads based on your
                      previous interactions with websites. You can learn more
                      about{" "}
                      <a
                        href="https://policies.google.com/technologies/partner-sites"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        how Google uses data on partner sites
                      </a>
                      .
                    </p>

                    <h2>Your GDPR & CCPA Rights</h2>
                    <p>
                      If you are located in the EU or California, you have the
                      right to:
                    </p>
                    <ul>
                      <li>
                        Access, update, or delete your personal data
                      </li>
                      <li>Object to or restrict processing</li>
                      <li>Request data portability</li>
                      <li>
                        Opt out of the sale or sharing of your personal
                        information (California residents)
                      </li>
                    </ul>
                    <p>
                      To exercise these rights, please contact us at{" "}
                      <a href="mailto:info@the-3rocks.com">
                        info@the-3rocks.com
                      </a>
                      .
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                      If you have any questions about this Privacy Policy,
                      please email us at{" "}
                      <a href="mailto:info@the-3rocks.com">
                        info@the-3rocks.com
                      </a>
                      .
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

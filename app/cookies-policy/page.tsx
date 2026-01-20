
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
                      Cookies are small data files stored on your device that
                      help us understand how you use our website and improve
                      your experience.
                    </p>

                    <h2>Types of Cookies We Use</h2>
                    <ul>
                      <li>
                        <strong>Necessary cookies:</strong> Essential for the
                        website to function properly.
                      </li>
                      <li>
                        <strong>Performance cookies:</strong> Help us analyze
                        website performance.
                      </li>
                      <li>
                        <strong>Advertising cookies:</strong> Used by Google
                        AdSense to deliver personalized ads.
                      </li>
                    </ul>

                    <h2>Managing Cookies</h2>
                    <p>
                      You can choose to accept or decline cookies. Most browsers
                      allow you to modify your settings to decline cookies if
                      you prefer. However, this may affect your user experience.
                    </p>

                    <h2>Opt-Out</h2>
                    <p>
                      You may opt out of personalized ads by visiting{" "}
                      <a
                        href="https://adssettings.google.com"
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        Ads Settings
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://www.aboutads.info"
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        www.aboutads.info
                      </a>
                      .
                    </p>

                    <h2>Contact</h2>
                    <p>
                      Questions about our cookie use? Email us at{" "}
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

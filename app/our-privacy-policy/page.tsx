import Image from "next/image";
import Newsletter from "@/components/newsletter";
import RelatedPosts from "@/components/related-posts-02";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0 h-128 pt-16 box-content">
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            src="/path/to/privacy-policy-background.jpg"
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
                      Your privacy is important to us. This privacy policy
                      explains the types of information we collect, how we use
                      it, and your rights regarding your information.
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
                    <h2>Information Collection</h2>
                    <p>
                      We collect various types of information in connection with
                      the services we provide. This includes:
                    </p>
                    <ul>
                      <li>
                        Information you provide directly to us through our
                        contact form, such as your first name, last name,
                        company name, phone number, country, and the products
                        you are interested in.
                      </li>
                      <li>
                        Information we collect when you download our product
                        catalog, including your email address.
                      </li>
                    </ul>

                    <h2>Use of Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                      <li>Provide, maintain, and improve our services.</li>
                      <li>Understand and analyze how you use our services.</li>
                      <li>
                        Communicate with you about our products, services, and
                        offers.
                      </li>
                      <li>
                        Respond to your inquiries and provide customer support.
                      </li>
                    </ul>

                    <h2>Data Storage</h2>
                    <p>
                      All collected information is securely stored in our
                      Firebase database. We take appropriate security measures
                      to protect against unauthorized access, alteration,
                      disclosure, or destruction of your personal information.
                    </p>

                    <h2>Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                      <li>
                        Access, correct, or delete your personal information.
                      </li>
                      <li>
                        Object to or restrict the processing of your
                        information.
                      </li>
                      <li>Withdraw your consent at any time.</li>
                    </ul>

                    <h2>Contact Us</h2>
                    <p>
                      If you have any questions about this privacy policy or our
                      data practices, please contact us at info@the3rocks.com
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

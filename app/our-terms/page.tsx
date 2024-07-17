import Image from "next/image";
import Newsletter from "@/components/newsletter";
import RelatedPosts from "@/components/related-posts-02";

export default function Terms() {
  return (
    <>
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0 h-128 pt-16 box-content">
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            src="/path/to/terms-background.jpg"
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
                      Please read these terms and conditions carefully before
                      using our website.
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
                    <h2>1. Introduction</h2>
                    <p>
                      Welcome to our website. By accessing and using our
                      website, you agree to comply with and be bound by the
                      following terms and conditions.
                    </p>

                    <h2>2. Intellectual Property</h2>
                    <p>
                      The content, layout, design, data, databases, and graphics
                      on this website are protected by intellectual property
                      laws and are owned by or licensed to us. You may not
                      reproduce, distribute, or transmit any of the content on
                      this website without our prior written permission.
                    </p>

                    <h2>3. Use of the Website</h2>
                    <p>
                      You agree to use this website for lawful purposes only.
                      You must not use this website to engage in any activity
                      that is unlawful, harmful, or fraudulent.
                    </p>

                    <h2>4. Privacy</h2>
                    <p>
                      Your use of our website is also subject to our Privacy
                      Policy. Please review our{" "}
                      <a href="/our-privacy-policy">Privacy Policy</a> to
                      understand our practices regarding your personal
                      information.
                    </p>

                    <h2>5. Limitation of Liability</h2>
                    <p>
                      We will not be liable for any damages arising out of or in
                      connection with the use of this website. This limitation
                      of liability applies to all damages of any kind, including
                      but not limited to direct, indirect, incidental, punitive,
                      or consequential damages.
                    </p>

                    <h2>6. Changes to the Terms</h2>
                    <p>
                      We may update these terms and conditions from time to
                      time. Any changes will be posted on this page, and it is
                      your responsibility to review these terms regularly to
                      ensure you are aware of any changes.
                    </p>

                    <h2>7. Governing Law</h2>
                    <p>
                      These terms and conditions are governed by and construed
                      in accordance with the laws of Morocco. Any disputes
                      relating to these terms and conditions will be subject to
                      the exclusive jurisdiction of the courts of Morocco.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                      If you have any questions about these terms and
                      conditions, please contact us at{" "}
                      <a href="mailto:info@the3rocks.com">info@the3rocks.com</a>
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

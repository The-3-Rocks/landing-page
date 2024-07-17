import Image from "next/image";

export default function FAQs() {
  return (
    <>
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0 h-128 pt-16 box-content">
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            src="/path/to/faqs-background.jpg"
            width={1440}
            height={577}
            priority
            alt="FAQs"
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
                      Frequently Asked Questions (FAQs)
                    </h1>
                    <p
                      className="text-xl text-gray-600 dark:text-gray-400"
                      data-aos="fade-down"
                      data-aos-delay="150"
                    >
                      Here are answers to some common questions about our
                      products and services.
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
                    <h2>Product Questions</h2>
                    <h3>What types of raw materials do you sell?</h3>
                    <p>We sell zinc, lead, barite, and iron.</p>

                    <h3>What are the applications of these materials?</h3>
                    <p>
                      Each material has various industrial applications, such as
                      in construction, manufacturing, and more.
                    </p>

                    <h2>Ordering and Delivery</h2>
                    <h3>How can I place an order?</h3>
                    <p>
                      You can place an order by contacting us through our
                      website or email.
                    </p>

                    <h3>What is the delivery timeframe?</h3>
                    <p>
                      Delivery times vary depending on location and product
                      availability. Please contact us for specific details.
                    </p>

                    <h2>Customer Support</h2>
                    <h3>How can I reach customer support?</h3>
                    <p>
                      You can reach our customer support team through the
                      contact form on our website or by emailing <span className="text-teal-500">info@the3rocks.com</span>.
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

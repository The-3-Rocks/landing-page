import Image from "next/image";
import { FAQPage, WithContext, Question } from "schema-dts";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Discover frequently asked questions about raw materials supplying and more by The 3 Rocks.",
};

// FAQ items list
const faqs = [
  {
    question: "What types of raw materials do you sell?",
    answer: "We sell zinc, lead, barite, and iron.",
  },
  {
    question: "What are the applications of these materials?",
    answer:
      "Each material has various industrial applications, such as in construction, manufacturing, and more.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can place an order by contacting us through our website or email.",
  },
  {
    question: "What is the delivery timeframe?",
    answer:
      "Delivery times vary depending on location and product availability. Please contact us for specific details.",
  },
  {
    question: "How can I reach customer support?",
    answer:
      "You can reach our customer support team through the contact form on our website or by emailing info@the3rocks.com.",
  },
];

// Schema.org structured data
const jsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
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

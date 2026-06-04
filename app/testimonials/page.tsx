export const metadata = {
  title: 'Client Testimonials | The 3 Rocks - Moroccan Mining Materials',
  description:
    'Read what industrial buyers, traders and procurement managers say about The 3 Rocks — Morocco’s trusted supplier of lead, zinc, copper, barite, iron, cobalt and antimony.',
  openGraph: {
    title: 'Client Testimonials | The 3 Rocks - Moroccan Mining Materials',
    description:
      'Feedback from international buyers, traders and procurement managers who source Moroccan lead, zinc, copper, barite, iron, cobalt and antimony from The 3 Rocks.',
    images: [
      {
        url: 'https://www.the-3rocks.com/images/og-the3rocks.png',
        width: 1200,
        height: 630,
        alt: 'The 3 Rocks - Client Testimonials',
      },
    ],
  },
  alternates: { canonical: 'https://www.the-3rocks.com/testimonials' },
}

import Link from 'next/link'
import Hero from '@/components/hero-testimonials'
import Clients from '@/components/clients'
import Video from '@/components/testimonials-video'
import Carousel from '@/components/testimonials-carousel'
import Circles from '@/components/testimonials-circles'
import Cta from '@/components/cta'

export default function Testimonials() {
  return (
    <>
      <Hero />

      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-16">
            <div className="text-center" data-aos="fade-down">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4 dark:bg-teal-900 dark:text-teal-400">
                Trusted by International Buyers
              </div>
              <h1 className="h1 font-red-hat-display mb-6">What Our Clients Say About The 3 Rocks</h1>
            </div>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 max-w-none prose-p:leading-relaxed prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline">
              <p>
                Over the past decade, The 3 Rocks has built long-term supply relationships with industrial buyers, commodity traders, and procurement teams across Europe, Asia, the Americas, and the Middle East. Our clients work in sectors as varied as lead-acid battery manufacturing, oil and gas drilling, paints and coatings, ceramics and glass production, pharmaceutical and cosmetics manufacturing, and the rapidly growing lithium-ion battery supply chain. What they all share is a requirement for <strong>documented, lab-verified Moroccan raw materials</strong> delivered on time and at a stable specification — and that is exactly what we deliver.
              </p>
              <p>
                The testimonials and case studies on this page reflect real engagements with buyers in over twenty countries. We work with publicly listed mining groups, mid-sized industrial processors, family-run trading houses, and procurement teams responsible for long-term offtake contracts. Every shipment is accompanied by a certificate of analysis issued by an independent Moroccan laboratory, and our logistics team provides tracking updates from mine to destination port. We are proud that more than seventy percent of our new business comes from referrals by existing clients — a metric we consider the clearest possible endorsement of our work.
              </p>
              <p>
                If you would like to receive references from buyers in your specific industry, speak to a geologist about mineral suitability for your process, or request a sample of Moroccan lead, zinc, copper, barite, iron, cobalt or antimony, please <Link href="/contact">contact our team</Link>. We respond to all enquiries within one business day and are happy to arrange a video call, site visit to our depot, or third-party sample analysis at a lab of your choice. The 3 Rocks is committed to being the most transparent and dependable Moroccan mining partner for any serious industrial buyer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Clients />
      <Video />
      <Carousel />
      <Circles />

      <section className="relative bg-gray-50 dark:bg-gray-800/30 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-16">
            <div className="text-center pb-8" data-aos="fade-up">
              <h2 className="h2 font-red-hat-display mb-4">Why Buyers Recommend The 3 Rocks</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Three operational strengths consistently emerge in our client feedback. First, <strong>specification reliability</strong>: every shipment is sampled, tested, and matched to a published certificate of analysis before it leaves our depot. Second, <strong>logistics discipline</strong>: our team plans vessel schedules, customs documentation, and on-site container loading weeks in advance, and provides position updates from port to port. Third, <strong>commercial flexibility</strong>: we accommodate FOB Casablanca, FOB Tangier Med, FOB Jorf Lasfar, CIF, CFR, and ex-works terms, and we work with both irrevocable letters of credit and open-account payment structures for clients with established trading history.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                These practices have made The 3 Rocks a long-term supplier to groups in Morocco’s phosphate, lead, zinc, copper, and barite value chains, and a preferred entry point for new buyers seeking their first reliable source of ethically extracted Moroccan minerals. We are equally comfortable handling a 20-ton trial shipment for a new customer as we are coordinating a 40,000-ton iron ore cargo from the Nador district to a steel mill abroad. Whichever the size of the engagement, our quality system, our people, and our commitment to transparent communication remain the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}

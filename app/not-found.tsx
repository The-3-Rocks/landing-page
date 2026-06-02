import Link from 'next/link'
import Image from 'next/image'
import NotFoundImage from '@/public/images/404.jpg'
import PageIllustration from '@/components/page-illustration'

export const metadata = {
  title: 'Page Not Found | The 3 Rocks - Moroccan Mining Materials',
  description:
    'The page you requested could not be found. Explore The 3 Rocks, Morocco’s premier supplier of lead, zinc, copper, barite, iron, cobalt and antimony — ethically sourced from Morocco’s legendary mining regions.',
  robots: { index: false, follow: true },
}

const quickLinks = [
  { href: '/', label: 'Home', description: 'Overview of The 3 Rocks, our mission and our Moroccan mineral portfolio.' },
  { href: '/about', label: 'About Us', description: 'Learn about our Moroccan mining heritage, team and global supply chain.' },
  { href: '/products', label: 'Products Catalog', description: 'Browse all seven minerals we export: lead, zinc, copper, barite, iron, cobalt, antimony.' },
  { href: '/our-process', label: 'Mining Process', description: 'Step-by-step explanation of extraction, analysis, processing and export.' },
  { href: '/articles', label: 'Articles & Insights', description: 'In-depth guides on Moroccan mining regions, mineral applications and market trends.' },
  { href: '/contact', label: 'Contact', description: 'Reach our team for quotations, samples, certificates of analysis and shipping terms.' },
  { href: '/faq', label: 'Frequently Asked Questions', description: 'Answers about minimum orders, payment terms, quality certification and documentation.' },
]

export default function NotFound() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative inline-flex justify-center items-center">
                <Image className="hidden sm:block opacity-50 md:opacity-80" src={NotFoundImage} width={768} height={432} priority alt="404" />
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
                <div className="sm:absolute w-full">
                  <h1 className="h3 font-red-hat-display mb-4">The page you were looking for is not at this address.</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    You have reached a URL that does not exist on <strong className="text-gray-900 dark:text-white">The 3 Rocks</strong>. This can happen when a link is mistyped, a product has been retired from our catalog, or a marketing campaign is referencing an old page. The 3 Rocks is Morocco’s leading exporter of premium raw materials — including <Link href="/products/lead" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">lead</Link>, <Link href="/products/zinc" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">zinc calamine</Link>, <Link href="/products/copper" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">copper</Link>, <Link href="/products/barite" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">barite</Link>, <Link href="/products/iron" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">iron ore</Link>, <Link href="/products/cobalt" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">cobalt</Link> and <Link href="/products/antimony" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">antimony</Link> — and our catalog is updated regularly to match seasonal extraction capacity, current stock levels, and shifts in global demand.
                  </p>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    If you arrived here while researching a specific Moroccan mineral, an industrial application, or a shipping term, the navigation below will take you to the most frequently requested sections of our site. Each of our product pages includes current purity specifications, available forms (ore, concentrate, powder), laboratory certificate information, and the ports we ship from. Our article library covers everything from geological formation in the Atlas Mountains to export documentation and the role of Moroccan minerals in lithium-ion batteries, flame retardants, drilling fluids, and radiation shielding.
                  </p>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    For direct assistance — quotation requests, sample orders, certificates of analysis, payment terms, or documentation for a specific destination country — please contact our team in Rabat, Morocco. We respond to all inquiries within one business day and provide tailored pricing based on quantity, form, packaging, and incoterm.
                  </p>
                  <Link className="btn text-white bg-teal-500 hover:bg-teal-400 inline-flex items-center" href="/">
                    <span>Back to The 3 Rocks Home</span>
                    <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-50 dark:bg-gray-800/40 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center pb-8 md:pb-10">
              <h2 className="h2 font-red-hat-display mb-3">Popular Sections of The 3 Rocks</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Use these links to navigate directly to the most visited pages on our site. Each section is written and reviewed by our team of Moroccan geologists, mining engineers and export specialists, and is updated regularly to reflect current mining activity, laboratory standards, and international trade requirements.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-lg font-bold font-red-hat-display text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 mb-2">
                    {link.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
            <div className="max-w-3xl mx-auto mt-10 p-5 rounded-lg bg-teal-50/60 dark:bg-teal-900/10 border border-teal-200/50 dark:border-teal-700/30 text-center">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Still can’t find what you need? Email <a href="mailto:info@the-3rocks.com" className="text-teal-700 dark:text-teal-400 font-semibold hover:underline">info@the-3rocks.com</a> or call <a href="tel:+212654352802" className="text-teal-700 dark:text-teal-400 font-semibold hover:underline">+212 654 352 802</a>. Our team in Rabat handles enquiries in English, French and Arabic, and can prepare a complete quotation package — including certificate of analysis, packing list, bill of lading template, and FOB Casablanca / Tangier Med / Jorf Lasfar pricing — within 24 hours of your request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

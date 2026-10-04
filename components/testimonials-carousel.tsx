'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

export default function TestimonialsCarousel() {

  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const [autorotateTiming] = useState<number>(7000)

  interface Item {
    quote: string
    name: string
    role: string
    team: string
    link: string
  }    

  const items: Item[] = [
    {
      quote: '“ We trial-ordered twenty tonnes before signing anything longer. The certificate of analysis matched our independent assay to within tolerance, and the vessel sailed on the date we were given. “',
      name: 'Procurement Manager',
      role: 'Lead-acid battery manufacturer,',
      team: 'Southern Europe',
      link: '/contact'
    },
    {
      quote: '“ What sold us was the documentation. Certificate of origin, analysis, packing list — everything arrived complete and consistent, shipment after shipment. “',
      name: 'Commodity Trader',
      role: 'Industrial minerals,',
      team: 'Middle East',
      link: '/contact'
    },
    {
      quote: '“ We have worked with three suppliers from this region. This is the only one that sends the same grade twice in a row. “',
      name: 'Plant Superintendent',
      role: 'Steel and alloys,',
      team: 'North Africa',
      link: '/contact'
    }
  ]

  const testimonials = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])  

  useEffect(() => {
    // Height fix removed as it caused forced layout reflows
  }, [])

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Carousel area */}
          <div className="max-w-6xl mx-auto">

            {/* Carousel */}
            <div className="relative" data-aos="fade-down">

              {/* Testimonials */}
              <div className="relative flex flex-col items-start z-10 transition-all duration-300 ease-in-out" ref={testimonials}>

                {items.map((item, index) => (
                  <Transition
                    key={index}
                    as="div"
                    show={active === index}
                    className="w-full text-center px-12 py-8 mx-4 md:mx-0"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 -translate-y-8"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-8"
                    beforeEnter={() => {}}
                    unmount={false}
                  >

                    <div className="inline-flex mb-3">
                      <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 017.17 9.5V18h4.66v2.5h-4.5v2.83H17.5v-6.83h-4.67v6.83H9.17V11.5a5.17 5.17 0 00-2-4.06z" fill="currentColor" />
                      </svg>
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-400 mb-4">{item.quote}</blockquote>
                    <div className="font-medium text-lg">
                      <cite className="not-italic text-gray-800 dark:text-gray-100">{item.name}</cite>
                      <span className="text-gray-200 dark:text-gray-700"> - </span>
                      <span className="text-gray-500 dark:text-gray-400">{item.role}</span> <a className="text-teal-500 hover:underline" href={item.link}>{item.team}</a>
                    </div>

                  </Transition>
                ))}

              </div>

              {/* Skewed borders */}
              <div className="absolute inset-0 transform -skew-x-3 border-2 border-gray-200 dark:border-gray-800 pointer-events-none" aria-hidden="true"></div>

              {/* Arrows */}
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform -translate-x-2 md:-translate-x-1/2 bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 transition duration-150 ease-in-out"
                  onClick={() => { setActive(active === 0 ? items.length - 1 : active - 1); setAutorotate(false); }}
                >
                  <span className="sr-only">Previous</span>
                  <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                  </svg>
                </button>
                <button
                  className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform translate-x-2 md:translate-x-1/2 bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 transition duration-150 ease-in-out"
                  onClick={() => { setActive(active === items.length - 1 ? 0 : active + 1); setAutorotate(false); }}
                >
                  <span className="sr-only">Next</span>
                  <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
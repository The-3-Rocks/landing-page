import Link from "next/link";
import LogoBig from "./logo-big";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">
          {/* Footer illustration */}
          <div className="pointer-events-none -z-1" aria-hidden="true">
            <svg
              className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40"
              width="800"
              height="264"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="400"
                cy="400"
                r="400"
                fill="url(#footerglow_paint0_radial)"
                fillOpacity=".4"
              />
              <defs>
                <radialGradient
                  id="footerglow_paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(90 0 400) scale(315.089)"
                >
                  <stop stopColor="#3ABAB4" />
                  <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-2 lg:col-span-3">
              {/* Logo */}
              <Link className="flex justify-center" href="/" aria-label="Cruip">
                <LogoBig />
              </Link>
              {/* Contact Information */}
              <div className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
                <a
                  href="mailto:info@the-3rocks.com"
                  className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  info@the-3rocks.com
                </a>
              </div>
            </div>

            {/* 2nd, 3rd, 4th and 5th blocks */}
            <div className="md:col-span-10 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Products</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="/our-products/lead"
                    >
                      Lead ore
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="/our-products/acopper"
                    >
                      Copper
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="/our-products/zinc"
                    >
                      Zinc ore
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="/our-products/barite"
                    >
                      Barite
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="/our-products/iron"
                    >
                      Iron
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="/our-products/cobalt"
                    >
                      Cobalt
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="/our-products/antimony"
                    >
                      Antimony
                    </a>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Contact Us</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="mailto:info@the-3rocks.com"
                    >
                      Email: info@the-3rocks.com
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="tel:+212654352802"
                    >
                      Phone: +212 654 352 802
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="https://www.linkedin.com/company/the-3-rocks/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Company</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="/about"
                    >
                      About us
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="/contact"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              {/* 5th block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Support</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="/our-products"
                    >
                      Articles
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="/faq"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-2 md:ml-4 md:mb-0">
              <div className="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
                <a
                  className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                  href="/our-terms"
                >
                  Terms
                </a>{" "}
                ·{" "}
                <a
                  className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                  href="/our-privacy-policy"
                >
                  Privacy Policy
                </a>
              </div>
            </ul>

            <ul className="flex mb-4 md:order-2 md:ml-4 md:mb-0">
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/company/the-3-rocks/"
                  aria-label="Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  href="mailto:info@the-3rocks.com"
                  aria-label="Email"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M25.6 9.6v12.8c0 .88-.72 1.6-1.6 1.6H8c-.88 0-1.6-.72-1.6-1.6V9.6c0-.88.72-1.6 1.6-1.6h16c.88 0 1.6.72 1.6 1.6zm-8 7.28l8-5.12V9.6c0-.08-.08-.16-.16-.16H8.16c-.08 0-.16.08-.16.16v2.16l8 5.12c.16.08.4.08.56 0zM8 13.28V22.4c0 .08.08.16.16.16h15.68c.08 0 .16-.08.16-.16v-9.12l-7.52 4.72c-.32.24-.8.24-1.12 0L8 13.28z" />
                  </svg>
                </a>
              </li>
            </ul>
            {/* Copyrights note */}
            <div className="text-gray-600 dark:text-gray-400 text-sm mr-4">
              &copy; The<span className="text-teal-400">3</span>Rocks. All
              rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

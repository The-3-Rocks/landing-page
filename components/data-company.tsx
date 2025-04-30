"use client";

import React from "react";
import Link from "next/link";

export default function ContactInfoSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-teal-600 bg-teal-100 rounded-full mb-4">
            Connect With Morocco's Mining Experts
          </div>
          <h2 className="h2 font-red-hat-display mb-4">
            Get In Touch With The<span className="text-teal-600">3</span>Rocks
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Contact our Moroccan mining specialists to discuss your mineral
            needs or to learn more about our sustainable mining operations in
            Morocco.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Location Card */}
          <div
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-teal-500"
            data-aos="fade-up"
          >
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Our Moroccan Headquarters
            </h3>
            <div className="text-gray-600 dark:text-gray-400 mb-4">
              <p className="mb-1">The 3 Rocks Mining Company</p>
              <p className="mb-1">Rabat, Morocco</p>
              <p>North Africa</p>
            </div>
            <Link
              href="https://maps.google.com/?q=Rabat+Morocco"
              target="_blank"
              className="inline-flex items-center text-teal-500 hover:text-teal-700 font-medium"
            >
              <span>View on Map</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

          {/* Email Card */}
          <div
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-teal-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Email Our Morocco Team</h3>
            <div className="text-gray-600 dark:text-gray-400 mb-4">
              <p className="mb-1">For general inquiries:</p>
              <a
                href="mailto:info@the-3rocks.com"
                className="text-teal-500 hover:text-teal-700 font-medium"
              >
                info@the-3rocks.com
              </a>
              {/* <p className="mt-3 mb-1">For business partnerships:</p>
              <a
                href="mailto:partnerships@the-3rocks.com"
                className="text-teal-500 hover:text-teal-700 font-medium"
              >
                partnerships@the-3rocks.com
              </a> */}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We typically respond within 24-48 hours
            </p>
          </div>

          {/* Phone Card */}
          <div
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-teal-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Call Our Morocco Office</h3>
            <div className="text-gray-600 dark:text-gray-400 mb-4">
              <p className="mb-1">Main phone line:</p>
              <a
                href="tel:+212612151391"
                className="text-teal-500 hover:text-teal-700 font-medium text-xl"
              >
                +212 612 151 391
              </a>
              <p className="mt-3 mb-1">Business hours:</p>
              <p>Monday - Friday: 9AM - 5PM (GMT+1)</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center text-teal-500 hover:text-teal-700 font-medium"
            >
              <span>Schedule a Call</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Looking for more information about our Moroccan mining operations?
          </p>
          <Link
            href="/contact"
            className="btn text-white bg-teal-500 hover:bg-teal-400"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}

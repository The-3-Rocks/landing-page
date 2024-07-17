"use client";

import { SetStateAction, useEffect, useState } from "react";
import {
  FaTools,
  FaGem,
  FaHandshake,
  FaSearch,
  FaHeadset,
} from "react-icons/fa";

export default function Tabs() {
  const [category, setCategory] = useState<string>("1");

  const setCateg = (num: SetStateAction<string>) => {
    console.log("🚀 ~ setCateg ~ num:", num);
    setCategory(num);
  };

  useEffect(() => {
    setCateg("1");
  }, []);

  return (
    <section id="services" className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div
        className="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">
              Exceptional Quality and Transparent Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Delivering top-quality raw materials with unwavering transparency
              and compliance. Discover the reliability and integrity that sets
              us apart.
            </p>
          </div>

          {/* Section content */}
          <div>
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-6">
              {/* Category buttons */}
              <div className="lg:col-span-1 lg:pr-16 flex flex-wrap lg:flex-col justify-center lg:justify-start -m-1 lg:mx-0">
                <button
                  className={`w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center m-1 lg:mx-0 ${
                    category === "1" &&
                    "!bg-rocks-500 hover:bg-rocks-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25"
                  }`}
                  onClick={() => setCateg("1")}
                >
                  <FaTools
                    className={`w-4 h-4 shrink-0 mr-2 ${
                      category === "1"
                        ? "text-white dark:text-white-400"
                        : "text-rocks-500 dark:text-gray-400"
                    }`}
                  />
                  <span
                    className={`flex-1 text-center ${
                      category === "1"
                        ? "text-white dark:text-white-400"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    All Services
                  </span>
                </button>

                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${
                    category === "2" &&
                    "!bg-rocks-500 hover:bg-rocks-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25"
                  }`}
                  onClick={() => setCateg("2")}
                >
                  <FaGem
                    className={`w-4 h-4 shrink-0 mr-2 ${
                      category === "2"
                        ? "text-white dark:text-white-400"
                        : "text-rocks-500 dark:text-gray-400"
                    }`}
                  />
                  <span
                    className={
                      category === "2"
                        ? "text-white dark:text-white-400"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  >
                    High-Quality Raw Material Supply
                  </span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${
                    category === "3" &&
                    "!bg-rocks-500 hover:bg-rocks-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25"
                  }`}
                  onClick={() => setCateg("3")}
                >
                  <FaHandshake
                    className={`w-4 h-4 shrink-0 mr-2 ${
                      category === "3"
                        ? "text-white dark:text-white-400"
                        : "text-rocks-500 dark:text-gray-400"
                    }`}
                  />
                  <span
                    className={
                      category === "3"
                        ? "text-white dark:text-white-400"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  >
                    Supplier Collaboration with Rigorous Standards
                  </span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${
                    category === "4" &&
                    "!bg-rocks-500 hover:bg-rocks-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25"
                  }`}
                  onClick={() => setCateg("4")}
                >
                  <FaSearch
                    className={`w-4 h-4 shrink-0 mr-2 ${
                      category === "4"
                        ? "text-white dark:text-white-400"
                        : "text-rocks-500 dark:text-gray-400"
                    }`}
                  />
                  <span
                    className={
                      category === "4"
                        ? "text-white dark:text-white-400"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  >
                    Transparent Tracking and Compliance
                  </span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${
                    category === "5" &&
                    "!bg-rocks-500 hover:bg-rocks-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25"
                  }`}
                  onClick={() => setCateg("5")}
                >
                  <FaHeadset
                    className={`w-4 h-4 shrink-0 mr-2 ${
                      category === "5"
                        ? "text-white dark:text-white-400"
                        : "text-rocks-500 dark:text-gray-400"
                    }`}
                  />
                  <span
                    className={
                      category === "5"
                        ? "text-white dark:text-white-400"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  >
                    Dedicated Customer Support and Transparency
                  </span>
                </button>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">
                <div>
                  <div
                    className={["1"].includes(category) ? undefined : "hidden"}
                  >
                    {/* Items */}
                    <div
                      className="  md:max-w-xl lg:max-w-none grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-2"
                      data-aos-id-featbl
                    >
                      {/* 1st item */}
                      <a
                        className="flex flex-col p-5 group text-white bg-gradient-to-br from-rocks-400 to-rocks-500 dark:from-rocks-400 dark:to-rocks-500 shadow-2xl rounded-lg"
                        href="#0"
                        data-aos="fade-down"
                        data-aos-anchor="[data-aos-id-featbl]"
                        onClick={() => setCateg("2")}
                      >
                        <FaGem
                          className={`w-8 h-8 mb-3 text-white dark:text-white-400`}
                        />
                        <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">
                          High-Quality Raw Material Supply
                        </div>
                        <div className="grow opacity-80 mb-4">
                          Delivering the highest quality lead, zinc, barite, and
                          iron with stringent quality control.
                        </div>
                        <svg
                          className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="fill-current"
                            d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                          />
                        </svg>
                      </a>

                      {/* 2nd item */}
                      <a
                        className="flex flex-col p-5 group text-white bg-gradient-to-bl from-rocks-400 to-rocks-500 dark:from-rocks-400 dark:to-rocks-500 shadow-2xl rounded-lg"
                        href="#0"
                        data-aos="fade-down"
                        data-aos-anchor="[data-aos-id-featbl]"
                        data-aos-delay="100"
                        onClick={() => setCateg("3")}
                      >
                        <FaHandshake
                          className={`w-8 h-8 mb-3 text-white dark:text-white-400`}
                        />
                        <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">
                          Supplier Collaboration with Rigorous Standards
                        </div>
                        <div className="grow opacity-80 mb-4">
                          Collaborating with trusted suppliers under strict
                          guidelines to ensure superior standards.
                        </div>
                        <svg
                          className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="fill-current"
                            d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                          />
                        </svg>
                      </a>

                      {/* 3rd item */}
                      <a
                        className="flex flex-col p-5 group text-white bg-gradient-to-tr from-rocks-400 to-rocks-500 dark:from-rocks-400 dark:to-rocks-500 shadow-2xl rounded-lg"
                        href="#0"
                        data-aos="fade-down"
                        data-aos-anchor="[data-aos-id-featbl]"
                        data-aos-delay="200"
                        onClick={() => setCateg("4")}
                      >
                        <FaSearch
                          className={`w-8 h-8 mb-3 text-white dark:text-white-400`}
                        />
                        <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">
                          Transparent Tracking and Compliance
                        </div>
                        <div className="grow opacity-80 mb-4">
                          Maintaining meticulous manual tracking and alignment
                          with legal regulations for complete transparency.
                        </div>
                        <svg
                          className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="fill-current"
                            d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                          />
                        </svg>
                      </a>

                      {/* 4th item */}
                      <a
                        className="flex flex-col p-5 group text-white bg-gradient-to-tl from-rocks-400 to-rocks-500 dark:from-rocks-400 dark:to-rocks-500 shadow-2xl rounded-lg"
                        href="#0"
                        data-aos="fade-down"
                        data-aos-anchor="[data-aos-id-featbl]"
                        data-aos-delay="300"
                        onClick={() => setCateg("5")}
                      >
                        <FaHeadset
                          className={`w-8 h-8 mb-3 text-white dark:text-white`}
                        />
                        <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">
                          Dedicated Customer Support and Transparency
                        </div>
                        <div className="grow opacity-80 mb-4">
                          Providing dedicated customer support and open
                          communication for a seamless client experience.
                        </div>
                        <svg
                          className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="fill-current"
                            d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div
                    className={["2"].includes(category) ? undefined : "hidden"}
                  >
                    <div className="relative">
                      <h1 className="h3 font-red-hat-display mb-4 flex items-center dark:text-white text-rocks-500">
                        <FaGem className=" w-16 h-16 mr-6" /> High-Quality Raw Material
                        Supply
                      </h1>

                      <p className="text-gray-700 dark:text-gray-300">
                        At our mining company, we take pride in delivering the
                        highest quality raw materials, including lead, zinc,
                        barite, and iron. We adhere to stringent quality control
                        measures to ensure that every shipment meets the highest
                        industry standards. Our commitment to excellence
                        guarantees that our clients receive only the best
                        materials for their needs, ensuring the success and
                        reliability of their projects.
                      </p>
                      <br></br>
                      <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5">
                        <li>Strict quality control for all materials</li>
                        <li>Assurance of industry-standard compliance</li>
                        <li>Reliable and consistent material supply</li>
                        <li>Commitment to client satisfaction</li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 mt-4">
                        For more information about our high-quality raw
                        materials, reach out to our sales team today.
                      </p>
                      <br></br>
                      <a
                        href="/contact"
                        className="bg-rocks-500 text-white py-2 px-4 rounded hover:bg-teal-600"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div
                    className={["3"].includes(category) ? undefined : "hidden"}
                  >
                    <div className="relative">
                      <h1 className="h3 font-red-hat-display mb-4 flex items-center dark:text-white text-rocks-500">
                        <FaHandshake className="w-20 h-20 mr-6" /> Supplier
                        Collaboration with Rigorous Standards
                      </h1>
                      <p className="text-gray-700 dark:text-gray-300">
                        While we occasionally collaborate with trusted
                        suppliers, our rigorous guidelines ensure that every
                        partner adheres to our high standards. We conduct
                        thorough assessments and maintain strict oversight to
                        ensure that all supplied materials match our quality
                        benchmarks. This dedication to maintaining superior
                        standards allows our clients to have complete confidence
                        in the materials they receive, knowing they meet our
                        exacting criteria.
                      </p>
                      <br></br>
                      <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5">
                        <li>Collaboration with trusted, vetted suppliers</li>
                        <li>Rigorous assessment and oversight processes</li>
                        <li>
                          Assurance of high-quality materials from all suppliers
                        </li>
                        <li>
                          Confidence in the reliability of all received
                          materials
                        </li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 mt-4">
                        To learn more about our supplier collaboration and
                        quality standards, get in touch with our procurement
                        team.
                      </p>
                      <br></br>
                      <a
                        href="/contact"
                        className="bg-rocks-500 text-white py-2 px-4 rounded hover:bg-teal-600"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div
                    className={["4"].includes(category) ? undefined : "hidden"}
                  >
                    <div className="relative">
                      <h1 className="h3 font-red-hat-display mb-4 flex items-center dark:text-white text-rocks-500">
                        <FaSearch className="w-16 h-16 mr-6" />{" "}
                        Transparent Tracking and Compliance
                      </h1>

                      <p className="text-gray-700 dark:text-gray-300">
                        Even though we do not currently utilize a software tool
                        for tracking, we employ meticulous manual tracking
                        methods to oversee all operations and transactions. We
                        are committed to transparency in all aspects of our
                        business, providing clients with clear, detailed records
                        of our processes. Our alignment with legal regulations
                        further assures clients that all dealings are conducted
                        with the utmost integrity and compliance.
                      </p>
                      <br></br>
                      <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5">
                        <li>
                          Meticulous manual tracking of operations and
                          transactions
                        </li>
                        <li>
                          Commitment to transparency in business processes
                        </li>
                        <li>Detailed records available for client review</li>
                        <li>Full compliance with legal regulations</li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 mt-4">
                        For any inquiries about our tracking methods and
                        compliance, please contact our operations team.
                      </p>
                      <br></br>
                      <a
                        href="/contact"
                        className="bg-rocks-500 text-white py-2 px-4 rounded hover:bg-teal-600"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div
                    className={["5"].includes(category) ? undefined : "hidden"}
                  >
                    <div className="relative">
                    <h1 className="h3 font-red-hat-display mb-4 flex items-center dark:text-white text-rocks-500">
  <FaHeadset className="w-16 h-16 mr-6 mb-3" /> Dedicated Customer Support and Transparency
</h1>

                      <p className="text-gray-700 dark:text-gray-300">
                        Our company values open communication and transparency.
                        We believe in building strong, trusting relationships
                        with our clients through dedicated customer support. Our
                        team is always available to address any concerns,
                        provide detailed information, and ensure that clients
                        are fully informed at every stage of their projects.
                        This commitment to transparency helps to create a
                        seamless and stress-free experience for our clients.
                      </p>
                      <br></br>
                      <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5">
                        <li>Open communication channels with clients</li>
                        <li>Comprehensive support for all client concerns</li>
                        <li>Detailed and transparent information sharing</li>
                        <li>Building strong, trusting client relationships</li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 mt-4">
                        To experience our dedicated customer support, contact
                        our customer service team today.
                      </p>
                      <br></br>
                      <a
                        href="/contact"
                        className="bg-rocks-500 text-white py-2 px-4 rounded hover:bg-teal-600"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

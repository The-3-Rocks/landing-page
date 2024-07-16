"use client";
import { useState } from "react";
import { ref, push, set } from "firebase/database";
import { db } from "../firebaseConfig"; // Import your Firebase config
import {
  FaCheck,
  FaGem,
  FaHandshake,
  FaSearch,
  FaHeadset,
} from "react-icons/fa";

import PageIllustration from "@/components/page-illustration";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  country: string;
  interestedProducts: string[];
  details: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    country: "",
    interestedProducts: [],
    details: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    // Create a copy of the array to safely modify
    let updatedProducts = [...formData.interestedProducts];

    if (checked && !updatedProducts.includes(name)) {
      updatedProducts.push(name); // Add the product if checked and not already in the array
    } else if (!checked && updatedProducts.includes(name)) {
      updatedProducts = updatedProducts.filter((product) => product !== name); // Remove the product if unchecked and currently in the array
    }

    // Update the state with the new array of interested products
    setFormData({
      ...formData,
      interestedProducts: updatedProducts,
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // setSubmitting(true);
      setSubmitting(true);
      const newRef = push(ref(db, "clients")); // Create a new reference under 'clients'
      await set(newRef, formData); // Write the data to the new reference

      // Handle successful submission (e.g., show a success message)
      console.log("Form submitted successfully!");
      // Clear the form after submission
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        country: "",
        interestedProducts: [],
        details: "",
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      // setSubmitting(false); // Reset loading state
      setTimeout(() => setSubmitting(false), 1000); // Reset submitted state after 2 seconds
      setTimeout(() => setSubmitted(false), 3000); // Reset submitted state after 2 seconds
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        country: "",
        interestedProducts: [],
        details: "",
      }); // Reset form fields
    }
  };

  return (
    <>
      {/*  Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h3 font-red-hat-display mb-4">
                Get started with{" "}
                <span className="h1 font-red-hat-display mb-4">
                  {" "}
                  the<span className="text-teal-500">3</span>Rocks{" "}
                </span>{" "}
                in Seconds
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400">
                We'll reach out soon with exclusive details about our premium
                raw materials and exceptional services.
              </p>
            </div>

            {/* Contact form */}
            <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="first-name"
                  >
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    className="form-input w-full"
                    placeholder="Enter your first name"
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="last-name"
                  >
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    className="form-input w-full"
                    placeholder="Enter your last name"
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="company"
                  >
                    Company <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="form-input w-full"
                    placeholder="Enter your company name"
                    required
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="phone"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-input w-full"
                    placeholder="Enter your phone number"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="country"
                  >
                    Country <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="country"
                    className="form-select w-full"
                    required
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your country</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-3">
                    In which products are you interested?{" "}
                    <span className="text-red-600">*</span>
                  </div>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="Lead"
                      value="Lead"
                      checked={formData.interestedProducts.includes("Lead")}
                      onChange={handleCheckboxChange}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">
                      Lead
                    </span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="Barite"
                      value="Barite"
                      checked={formData.interestedProducts.includes("Barite")}
                      onChange={handleCheckboxChange}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">
                      Barite
                    </span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="Zinc"
                      value="Zinc"
                      checked={formData.interestedProducts.includes("Zinc")}
                      onChange={handleCheckboxChange}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">
                      Zinc
                    </span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="Iron"
                      value="Iron"
                      checked={formData.interestedProducts.includes("Iron")}
                      onChange={handleCheckboxChange}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">
                      Iron
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="flex justify-between items-center mb-1">
                    <label
                      className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                      htmlFor="details"
                    >
                      Details
                    </label>
                    <span className="text-sm text-gray-500">Optional</span>
                  </div>
                  <textarea
                    id="details"
                    rows={4}
                    className="form-textarea w-full"
                    placeholder="What do you want to achieve with our premium raw materials and exceptional services?"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    className={`btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center ${
                      submitting ? "opacity-50 pointer-events-none" : ""
                    }`}
                  >
                    {submitting ? (
                      <span className="flex items-center">
                        Submitting{" "}
                        <svg
                          className="animate-spin h-5 w-5 ml-2 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </span>
                    ) : submitted ? (
                      <span className="flex items-center">
                        Submitted{" "}
                        <FaCheck className="w-4 h-4 shrink-0 ml-2 text-white dark:text-white-400" />
                      </span>
                    ) : (
                      <span>Unlock Mining Potential</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

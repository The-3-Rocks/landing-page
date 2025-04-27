"use client";
import { useState, useEffect, useRef } from "react";
import { ref, push, set } from "firebase/database";
import { db } from "../firebaseConfig"; // Import your Firebase config
import {
  FaCheck,
  FaChevronDown,
  FaSearch as FaSearchIcon,
} from "react-icons/fa";

import PageIllustration from "@/components/page-illustration";

// Don't forget to import the flag-icons CSS in your app
import "flag-icons/css/flag-icons.min.css";

// Complete list of countries with flags and dial codes using flag-icons
const allCountries = [
  { name: "Afghanistan", code: "af", dialCode: "+93" },
  { name: "Albania", code: "al", dialCode: "+355" },
  { name: "Algeria", code: "dz", dialCode: "+213" },
  { name: "Andorra", code: "ad", dialCode: "+376" },
  { name: "Angola", code: "ao", dialCode: "+244" },
  { name: "Antigua and Barbuda", code: "ag", dialCode: "+1268" },
  { name: "Argentina", code: "ar", dialCode: "+54" },
  { name: "Armenia", code: "am", dialCode: "+374" },
  { name: "Australia", code: "au", dialCode: "+61" },
  { name: "Austria", code: "at", dialCode: "+43" },
  { name: "Azerbaijan", code: "az", dialCode: "+994" },
  { name: "Bahamas", code: "bs", dialCode: "+1242" },
  { name: "Bahrain", code: "bh", dialCode: "+973" },
  { name: "Bangladesh", code: "bd", dialCode: "+880" },
  { name: "Barbados", code: "bb", dialCode: "+1246" },
  { name: "Belarus", code: "by", dialCode: "+375" },
  { name: "Belgium", code: "be", dialCode: "+32" },
  { name: "Belize", code: "bz", dialCode: "+501" },
  { name: "Benin", code: "bj", dialCode: "+229" },
  { name: "Bhutan", code: "bt", dialCode: "+975" },
  { name: "Bolivia", code: "bo", dialCode: "+591" },
  { name: "Bosnia and Herzegovina", code: "ba", dialCode: "+387" },
  { name: "Botswana", code: "bw", dialCode: "+267" },
  { name: "Brazil", code: "br", dialCode: "+55" },
  { name: "Brunei", code: "bn", dialCode: "+673" },
  { name: "Bulgaria", code: "bg", dialCode: "+359" },
  { name: "Burkina Faso", code: "bf", dialCode: "+226" },
  { name: "Burundi", code: "bi", dialCode: "+257" },
  { name: "Cambodia", code: "kh", dialCode: "+855" },
  { name: "Cameroon", code: "cm", dialCode: "+237" },
  { name: "Canada", code: "ca", dialCode: "+1" },
  { name: "Cape Verde", code: "cv", dialCode: "+238" },
  { name: "Central African Republic", code: "cf", dialCode: "+236" },
  { name: "Chad", code: "td", dialCode: "+235" },
  { name: "Chile", code: "cl", dialCode: "+56" },
  { name: "China", code: "cn", dialCode: "+86" },
  { name: "Colombia", code: "co", dialCode: "+57" },
  { name: "Comoros", code: "km", dialCode: "+269" },
  { name: "Congo", code: "cg", dialCode: "+242" },
  { name: "Costa Rica", code: "cr", dialCode: "+506" },
  { name: "Croatia", code: "hr", dialCode: "+385" },
  { name: "Cuba", code: "cu", dialCode: "+53" },
  { name: "Cyprus", code: "cy", dialCode: "+357" },
  { name: "Czech Republic", code: "cz", dialCode: "+420" },
  { name: "Denmark", code: "dk", dialCode: "+45" },
  { name: "Djibouti", code: "dj", dialCode: "+253" },
  { name: "Dominica", code: "dm", dialCode: "+1767" },
  { name: "Dominican Republic", code: "do", dialCode: "+1849" },
  { name: "Ecuador", code: "ec", dialCode: "+593" },
  { name: "Egypt", code: "eg", dialCode: "+20" },
  { name: "El Salvador", code: "sv", dialCode: "+503" },
  { name: "Equatorial Guinea", code: "gq", dialCode: "+240" },
  { name: "Eritrea", code: "er", dialCode: "+291" },
  { name: "Estonia", code: "ee", dialCode: "+372" },
  { name: "Ethiopia", code: "et", dialCode: "+251" },
  { name: "Fiji", code: "fj", dialCode: "+679" },
  { name: "Finland", code: "fi", dialCode: "+358" },
  { name: "France", code: "fr", dialCode: "+33" },
  { name: "Gabon", code: "ga", dialCode: "+241" },
  { name: "Gambia", code: "gm", dialCode: "+220" },
  { name: "Georgia", code: "ge", dialCode: "+995" },
  { name: "Germany", code: "de", dialCode: "+49" },
  { name: "Ghana", code: "gh", dialCode: "+233" },
  { name: "Greece", code: "gr", dialCode: "+30" },
  { name: "Grenada", code: "gd", dialCode: "+1473" },
  { name: "Guatemala", code: "gt", dialCode: "+502" },
  { name: "Guinea", code: "gn", dialCode: "+224" },
  { name: "Guinea-Bissau", code: "gw", dialCode: "+245" },
  { name: "Guyana", code: "gy", dialCode: "+592" },
  { name: "Haiti", code: "ht", dialCode: "+509" },
  { name: "Honduras", code: "hn", dialCode: "+504" },
  { name: "Hungary", code: "hu", dialCode: "+36" },
  { name: "Iceland", code: "is", dialCode: "+354" },
  { name: "India", code: "in", dialCode: "+91" },
  { name: "Indonesia", code: "id", dialCode: "+62" },
  { name: "Iran", code: "ir", dialCode: "+98" },
  { name: "Iraq", code: "iq", dialCode: "+964" },
  { name: "Ireland", code: "ie", dialCode: "+353" },
  { name: "Israel", code: "il", dialCode: "+972" },
  { name: "Italy", code: "it", dialCode: "+39" },
  { name: "Jamaica", code: "jm", dialCode: "+1876" },
  { name: "Japan", code: "jp", dialCode: "+81" },
  { name: "Jordan", code: "jo", dialCode: "+962" },
  { name: "Kazakhstan", code: "kz", dialCode: "+7" },
  { name: "Kenya", code: "ke", dialCode: "+254" },
  { name: "Kiribati", code: "ki", dialCode: "+686" },
  { name: "North Korea", code: "kp", dialCode: "+850" },
  { name: "South Korea", code: "kr", dialCode: "+82" },
  { name: "Kuwait", code: "kw", dialCode: "+965" },
  { name: "Kyrgyzstan", code: "kg", dialCode: "+996" },
  { name: "Laos", code: "la", dialCode: "+856" },
  { name: "Latvia", code: "lv", dialCode: "+371" },
  { name: "Lebanon", code: "lb", dialCode: "+961" },
  { name: "Lesotho", code: "ls", dialCode: "+266" },
  { name: "Liberia", code: "lr", dialCode: "+231" },
  { name: "Libya", code: "ly", dialCode: "+218" },
  { name: "Liechtenstein", code: "li", dialCode: "+423" },
  { name: "Lithuania", code: "lt", dialCode: "+370" },
  { name: "Luxembourg", code: "lu", dialCode: "+352" },
  { name: "Madagascar", code: "mg", dialCode: "+261" },
  { name: "Malawi", code: "mw", dialCode: "+265" },
  { name: "Malaysia", code: "my", dialCode: "+60" },
  { name: "Maldives", code: "mv", dialCode: "+960" },
  { name: "Mali", code: "ml", dialCode: "+223" },
  { name: "Malta", code: "mt", dialCode: "+356" },
  { name: "Marshall Islands", code: "mh", dialCode: "+692" },
  { name: "Mauritania", code: "mr", dialCode: "+222" },
  { name: "Mauritius", code: "mu", dialCode: "+230" },
  { name: "Mexico", code: "mx", dialCode: "+52" },
  { name: "Micronesia", code: "fm", dialCode: "+691" },
  { name: "Moldova", code: "md", dialCode: "+373" },
  { name: "Monaco", code: "mc", dialCode: "+377" },
  { name: "Mongolia", code: "mn", dialCode: "+976" },
  { name: "Montenegro", code: "me", dialCode: "+382" },
  { name: "Morocco", code: "ma", dialCode: "+212" },
  { name: "Mozambique", code: "mz", dialCode: "+258" },
  { name: "Myanmar", code: "mm", dialCode: "+95" },
  { name: "Namibia", code: "na", dialCode: "+264" },
  { name: "Nauru", code: "nr", dialCode: "+674" },
  { name: "Nepal", code: "np", dialCode: "+977" },
  { name: "Netherlands", code: "nl", dialCode: "+31" },
  { name: "New Zealand", code: "nz", dialCode: "+64" },
  { name: "Nicaragua", code: "ni", dialCode: "+505" },
  { name: "Niger", code: "ne", dialCode: "+227" },
  { name: "Nigeria", code: "ng", dialCode: "+234" },
  { name: "Norway", code: "no", dialCode: "+47" },
  { name: "Oman", code: "om", dialCode: "+968" },
  { name: "Pakistan", code: "pk", dialCode: "+92" },
  { name: "Palau", code: "pw", dialCode: "+680" },
  { name: "Palestine", code: "ps", dialCode: "+970" },
  { name: "Panama", code: "pa", dialCode: "+507" },
  { name: "Papua New Guinea", code: "pg", dialCode: "+675" },
  { name: "Paraguay", code: "py", dialCode: "+595" },
  { name: "Peru", code: "pe", dialCode: "+51" },
  { name: "Philippines", code: "ph", dialCode: "+63" },
  { name: "Poland", code: "pl", dialCode: "+48" },
  { name: "Portugal", code: "pt", dialCode: "+351" },
  { name: "Qatar", code: "qa", dialCode: "+974" },
  { name: "Romania", code: "ro", dialCode: "+40" },
  { name: "Russia", code: "ru", dialCode: "+7" },
  { name: "Rwanda", code: "rw", dialCode: "+250" },
  { name: "Saint Kitts and Nevis", code: "kn", dialCode: "+1869" },
  { name: "Saint Lucia", code: "lc", dialCode: "+1758" },
  { name: "Saint Vincent", code: "vc", dialCode: "+1784" },
  { name: "Samoa", code: "ws", dialCode: "+685" },
  { name: "San Marino", code: "sm", dialCode: "+378" },
  { name: "Saudi Arabia", code: "sa", dialCode: "+966" },
  { name: "Senegal", code: "sn", dialCode: "+221" },
  { name: "Serbia", code: "rs", dialCode: "+381" },
  { name: "Seychelles", code: "sc", dialCode: "+248" },
  { name: "Sierra Leone", code: "sl", dialCode: "+232" },
  { name: "Singapore", code: "sg", dialCode: "+65" },
  { name: "Slovakia", code: "sk", dialCode: "+421" },
  { name: "Slovenia", code: "si", dialCode: "+386" },
  { name: "Solomon Islands", code: "sb", dialCode: "+677" },
  { name: "Somalia", code: "so", dialCode: "+252" },
  { name: "South Africa", code: "za", dialCode: "+27" },
  { name: "South Sudan", code: "ss", dialCode: "+211" },
  { name: "Spain", code: "es", dialCode: "+34" },
  { name: "Sri Lanka", code: "lk", dialCode: "+94" },
  { name: "Sudan", code: "sd", dialCode: "+249" },
  { name: "Suriname", code: "sr", dialCode: "+597" },
  { name: "Sweden", code: "se", dialCode: "+46" },
  { name: "Switzerland", code: "ch", dialCode: "+41" },
  { name: "Syria", code: "sy", dialCode: "+963" },
  { name: "Taiwan", code: "tw", dialCode: "+886" },
  { name: "Tajikistan", code: "tj", dialCode: "+992" },
  { name: "Tanzania", code: "tz", dialCode: "+255" },
  { name: "Thailand", code: "th", dialCode: "+66" },
  { name: "Togo", code: "tg", dialCode: "+228" },
  { name: "Tonga", code: "to", dialCode: "+676" },
  { name: "Trinidad and Tobago", code: "tt", dialCode: "+1868" },
  { name: "Tunisia", code: "tn", dialCode: "+216" },
  { name: "Turkey", code: "tr", dialCode: "+90" },
  { name: "Turkmenistan", code: "tm", dialCode: "+993" },
  { name: "Tuvalu", code: "tv", dialCode: "+688" },
  { name: "Uganda", code: "ug", dialCode: "+256" },
  { name: "Ukraine", code: "ua", dialCode: "+380" },
  { name: "United Arab Emirates", code: "ae", dialCode: "+971" },
  { name: "United Kingdom", code: "gb", dialCode: "+44" },
  { name: "United States", code: "us", dialCode: "+1" },
  { name: "Uruguay", code: "uy", dialCode: "+598" },
  { name: "Uzbekistan", code: "uz", dialCode: "+998" },
  { name: "Vanuatu", code: "vu", dialCode: "+678" },
  { name: "Vatican City", code: "va", dialCode: "+379" },
  { name: "Venezuela", code: "ve", dialCode: "+58" },
  { name: "Vietnam", code: "vn", dialCode: "+84" },
  { name: "Yemen", code: "ye", dialCode: "+967" },
  { name: "Zambia", code: "zm", dialCode: "+260" },
  { name: "Zimbabwe", code: "zw", dialCode: "+263" },
];

// Sort countries alphabetically
const sortedCountries = [...allCountries].sort((a, b) =>
  a.name.localeCompare(b.name)
);

// Define popular countries to show at the top of the list
const popularCountryCodes = [
  "us",
  "gb",
  "ca",
  "au",
  "de",
  "fr",
  "in",
  "cn",
  "jp",
  "es",
  "it",
  "br",
  "ma",
];
const popularCountries = popularCountryCodes
  .map((code) => allCountries.find((country) => country.code === code))
  .filter((country) => country !== undefined) as typeof allCountries;

interface FormData {
  firstName: string;
  lastName: string;
  email: string; // Added email field
  company: string;
  phoneCode: string;
  phone: string;
  country: string;
  interestedProducts: string[];
  otherProduct?: string;
  details: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "", // Added email field with empty initial value
    company: "",
    phoneCode: "+1", // Default phone code
    phone: "",
    country: "United States", // Default to United States
    interestedProducts: [],
    otherProduct: "",
    details: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(popularCountries);
  const [searchQuery, setSearchQuery] = useState("");
  const phoneDropdownRef = useRef<HTMLDivElement>(null);

  // Find country data based on selected country name or code
  const findCountryByName = (name: string) => {
    return allCountries.find((country) => country.name === name);
  };

  // Updated find country by dial code function to handle North American countries
  const findCountryByDialCode = (dialCode: string, countryName?: string) => {
    // If we have a country name, prioritize exact match by name and dial code
    if (countryName) {
      const exactMatch = allCountries.find(
        (country) =>
          country.dialCode === dialCode && country.name === countryName
      );
      if (exactMatch) return exactMatch;
    }

    // Handle special case for +1 (North America)
    if (dialCode === "+1") {
      // Default to US unless another country is specifically selected
      const northAmericanCountry = countryName
        ? allCountries.find((country) => country.name === countryName)
        : allCountries.find((country) => country.code === "us");

      if (northAmericanCountry) return northAmericanCountry;
    }

    // General case - find by dial code
    return allCountries.find((country) => country.dialCode === dialCode);
  };

  // Fallback function to generate emoji flag when flag-icons doesn't work
  const getCountryFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        phoneDropdownRef.current &&
        !phoneDropdownRef.current.contains(event.target as Node)
      ) {
        setShowPhoneDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update filtered countries when search query changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCountries(popularCountries);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = allCountries.filter(
      (country) =>
        country.name.toLowerCase().includes(query) ||
        country.dialCode.toLowerCase().includes(query)
    );
    setFilteredCountries(filtered);
  }, [searchQuery]);

  // Update phone code when country changes
  useEffect(() => {
    if (formData.country) {
      const country = findCountryByName(formData.country);
      if (country) {
        setFormData((prev) => ({
          ...prev,
          phoneCode: country.dialCode,
        }));
      }
    }
  }, [formData.country]);

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

  // Handle changing the phone code from dropdown
  const handlePhoneCodeSelect = (dialCode: string, countryName: string) => {
    setFormData({
      ...formData,
      phoneCode: dialCode,
      country: countryName,
    });
    setShowPhoneDropdown(false);
    setSearchQuery("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    try {
      setSubmitting(true);
      const newRef = push(ref(db, "clients")); // Create a new reference under 'clients'

      // Combine phone code and phone number for storage
      const dataToSubmit = {
        ...formData,
        fullPhone: `${formData.phoneCode} ${formData.phone}`,
      };

      await set(newRef, dataToSubmit); // Write the data to the new reference

      // Handle successful submission (e.g., show a success message)
      console.log("Form submitted successfully!");

      // Clear the form after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "", // Reset email field
        company: "",
        phoneCode: "+1",
        phone: "",
        country: "United States", // Keep default as United States
        interestedProducts: [],
        otherProduct: "",
        details: "",
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setTimeout(() => setSubmitting(false), 1000); // Reset submitting state after 1 second
      setTimeout(() => setSubmitted(false), 3000); // Reset submitted state after 3 seconds
    }
  };

  // Get the current selected country data
  const selectedCountry = formData.phoneCode
    ? findCountryByDialCode(formData.phoneCode, formData.country)
    : allCountries.find((c) => c.code === "us");

  return (
    <>
      {/* Page illustration */}
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

              {/* Email field */}
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full"
                    placeholder="Enter your email address"
                    required
                    name="email"
                    value={formData.email}
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

              {/* Phone Number field with country code dropdown */}
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="phone"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <div className="flex">
                    {/* Country code dropdown */}
                    <div className="relative" ref={phoneDropdownRef}>
                      <button
                        type="button"
                        className="form-input flex items-center justify-between cursor-pointer border-r-0 rounded-r-none w-32"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowPhoneDropdown(!showPhoneDropdown);
                        }}
                      >
                        <div className="flex items-center">
                          {/* Try both flag-icon and emoji flag as fallback */}
                          {selectedCountry && (
                            <>
                              <span
                                className={`fi fi-${selectedCountry.code} mr-2`}
                              ></span>
                              <span style={{ display: "none" }}>
                                {getCountryFlagEmoji(selectedCountry.code)}
                              </span>
                            </>
                          )}
                          <span>{formData.phoneCode}</span>
                        </div>
                        <FaChevronDown className="text-gray-400 ml-1" />
                      </button>

                      {/* Dropdown menu */}
                      {showPhoneDropdown && (
                        <div className="absolute z-50 mt-1 w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg max-h-80 overflow-y-auto">
                          {/* Search box */}
                          <div className="p-2 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
                            <div className="relative">
                              <input
                                type="text"
                                className="form-input w-full pl-8"
                                placeholder="Search countries..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                              />
                              <FaSearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                          </div>

                          {/* Popular countries section */}
                          {searchQuery === "" && (
                            <>
                              <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700">
                                Popular
                              </div>
                              {popularCountries.map((country) => (
                                <div
                                  key={country.code}
                                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                  onClick={() =>
                                    handlePhoneCodeSelect(
                                      country.dialCode,
                                      country.name
                                    )
                                  }
                                >
                                  <span
                                    className={`fi fi-${country.code} mr-2`}
                                  ></span>
                                  <span className="truncate">
                                    {country.name}
                                  </span>
                                  <span className="ml-auto text-gray-500">
                                    {country.dialCode}
                                  </span>
                                </div>
                              ))}
                              <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700">
                                All Countries
                              </div>
                            </>
                          )}

                          {/* Countries list */}
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <div
                                key={country.code}
                                className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                onClick={() =>
                                  handlePhoneCodeSelect(
                                    country.dialCode,
                                    country.name
                                  )
                                }
                              >
                                <span
                                  className={`fi fi-${country.code} mr-2`}
                                ></span>
                                <span className="truncate">{country.name}</span>
                                <span className="ml-auto text-gray-500">
                                  {country.dialCode}
                                </span>
                              </div>
                            ))
                          ) : (
                            <div className="px-4 py-2 text-gray-500 dark:text-gray-400">
                              No countries found
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Phone number input */}
                    <input
                      id="phone"
                      type="tel"
                      className="form-input w-full rounded-l-none"
                      placeholder="Enter your phone number"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
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
                    {sortedCountries.map((country) => (
                      <option key={country.code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-3">
                    In which products are you interested?{" "}
                    <span className="text-red-600">*</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Lead */}
                    <label className="flex items-center">
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

                    {/* Copper */}
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="Copper"
                        value="Copper"
                        checked={formData.interestedProducts.includes("Copper")}
                        onChange={handleCheckboxChange}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">
                        Copper
                      </span>
                    </label>

                    {/* Barite */}
                    <label className="flex items-center">
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

                    {/* Zinc */}
                    <label className="flex items-center">
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

                    {/* Iron */}
                    <label className="flex items-center">
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

                    {/* Cobalt */}
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="Cobalt"
                        value="Cobalt"
                        checked={formData.interestedProducts.includes("Cobalt")}
                        onChange={handleCheckboxChange}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">
                        Cobalt
                      </span>
                    </label>

                    {/* Antimony */}
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="Antimony"
                        value="Antimony"
                        checked={formData.interestedProducts.includes(
                          "Antimony"
                        )}
                        onChange={handleCheckboxChange}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">
                        Antimony
                      </span>
                    </label>

                    {/* Gypsum */}
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="Gypsum"
                        value="Gypsum"
                        checked={formData.interestedProducts.includes("Gypsum")}
                        onChange={handleCheckboxChange}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">
                        Gypsum
                      </span>
                    </label>

                    {/* Others (Autre) */}
                    <div className="col-span-2 relative flex flex-col">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          name="Autre"
                          value="Autre"
                          checked={formData.interestedProducts.includes(
                            "Autre"
                          )}
                          onChange={handleCheckboxChange}
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">
                          Others raw materials
                        </span>
                      </label>

                      {/* Full width input field under checkbox */}
                      {formData.interestedProducts.includes("Autre") && (
                        <input
                          type="text"
                          className="form-input w-full text-sm mt-2"
                          placeholder="Please specify other raw materials"
                          name="otherProduct"
                          value={formData.otherProduct || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              otherProduct: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  </div>
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
                    className={`btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center justify-center ${
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

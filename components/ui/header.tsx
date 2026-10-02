"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import ThemeToggle from "./theme-toggle";
import MobileMenu from "./mobile-menu";
import imageLogo from "@/public/images/logo-4.png";
import Image from "next/image";

const navItems = [
  { href: "/about", label: "Who Are We" },
  { href: "/products", label: "Products" },
  { href: "/our-process", label: "Process" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-5">
            <Link
              href="/"
              className="block"
              aria-label="Moroccan Mining Company"
            >
              <Logo />
              {/* <Image src={imageLogo} alt="Logo" width={80} height={80} /> */}
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 px-5 py-2 flex items-center transition duration-150 ease-in-out ${
                        isActive ? "text-teal-600 dark:text-teal-400" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* 1st level: hover */}
            {/* <Dropdown title="Resources">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                >
                  Help center
                </Link>
              </li>
              <li>
                <Link
                  href="/404"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                >
                  404
                </Link>
              </li>
            </Dropdown> */}

            {/* Desktop lights switch */}
            <ThemeToggle className="ml-3" id="theme-toggle-desktop" />

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://t3v.the-3rocks.com/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-150 ml-6"
                >
                  <span>Explore The 3 Vegetables</span>
                  <svg
                    className="w-4 h-4 ml-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

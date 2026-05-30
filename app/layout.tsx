import type { Metadata } from "next";
import "./css/style.css";
import { Inter, Red_Hat_Display } from "next/font/google";
import RootLayoutClient from "./root-layout-client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Script from "next/script";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const redhat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.the-3rocks.com"),
  title: {
    template: "%s | The 3 Rocks - Premium Moroccan Mining Materials",
    default: "The 3 Rocks - Morocco's Leading Mining & Raw Materials Supplier",
  },
  description:
    "Discover The 3 Rocks, Morocco's premier supplier of premium raw materials including lead, zinc, copper, barite, iron, cobalt and antimony. Our materials are ethically sourced from Morocco's legendary mining regions with sustainable practices. We deliver exceptional quality, transparency, and reliability to industries worldwide. Explore our extensive range of Moroccan minerals and see why we are the preferred choice for businesses seeking top-tier Moroccan raw materials.",
  other: {
    "google-adsense-account": "ca-pub-6470650628887259",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = headers().get("x-nonce") ?? "";
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.the-3rocks.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The 3 Rocks Company",
              "alternateName": "The 3 Rocks Mining",
              "url": "https://www.the-3rocks.com",
              "logo": "https://www.the-3rocks.com/images/logo.png",
              "sameAs": [
                "https://twitter.com/the3rocks",
                "https://www.linkedin.com/company/the-3-rocks"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "areaServed": "Worldwide",
                "availableLanguage": ["en", "fr", "ar"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MA",
                "addressRegion": "Morocco"
              }
            })
          }}
        />
      </head>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${redhat.variable} font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0QV4CTYT36"
          strategy="lazyOnload"
          nonce={nonce}
        />
        <Script id="google-analytics" strategy="lazyOnload" nonce={nonce}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0QV4CTYT36');
          `}
        </Script>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6470650628887259"
          crossOrigin="anonymous"
          strategy="afterInteractive"
          nonce={nonce}
        />
        <RootLayoutClient>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </RootLayoutClient>
      </body>
    </html>
  );
}

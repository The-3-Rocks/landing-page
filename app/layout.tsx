import type { Metadata } from "next";
import "./css/style.css";
import "./css/additional-styles/utility-patterns.css";
import { Inter, Red_Hat_Display } from "next/font/google";
import RootLayoutClient from "./root-layout-client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Script from "next/script";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.the-3rocks.com" />
      </head>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${redhat.variable} font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0QV4CTYT36"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0QV4CTYT36');
          `}
        </Script>
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

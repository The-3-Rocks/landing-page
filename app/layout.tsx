import type { Metadata } from "next";
import "./css/style.css";
import { Inter, Red_Hat_Display } from "next/font/google";
import RootLayoutClient from "./root-layout-client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

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
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${redhat.variable} font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight`}
      >
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

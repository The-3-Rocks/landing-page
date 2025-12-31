"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import Theme from "./theme-provider";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        once: true,
        disable: "mobile",
        duration: 600,
        easing: "ease-out-sine",
      });
    };
    initAOS();
  }, []);

  return <Theme>{children}</Theme>;
}

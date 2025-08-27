// components/ChatButtons.tsx
"use client";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaWeixin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function ChatButtons() {
  const [open, setOpen] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const whatsappNumber = "212654352802";
  const wechatId = "wxid_3j2et54a5s2l12";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle icons dynamically every 1s when not open
  useEffect(() => {
    const interval = setInterval(() => {
      if (!open) setShowWhatsApp((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, [open]);

  const mobileSize = "w-16 h-16";
  const mobileIconSize = "w-8 h-8";
  const desktopSize = "lg:w-20 lg:h-20";
  const desktopIconSize = "lg:w-10 lg:h-10";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {/* Expanded buttons */}
      {open && (
        <div
          className={`flex flex-col gap-4 mb-2 ${isMobile ? "items-end" : ""}`}
        >
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center ${
              isMobile ? mobileSize : desktopSize
            } bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition`}
          >
            <FaWhatsapp
              className={`${isMobile ? mobileIconSize : desktopIconSize}`}
            />
          </a>

          <a
            href={`weixin://dl/chat?${wechatId}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center ${
              isMobile ? mobileSize : desktopSize
            } bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition`}
          >
            <FaWeixin
              className={`${isMobile ? mobileIconSize : desktopIconSize}`}
            />
          </a>
        </div>
      )}

      {/* Single dynamic icon before opening */}
      {!open && (
        <div
          className={`flex items-center justify-center ${mobileSize} ${desktopSize} bg-teal-600 text-white rounded-full shadow-lg transition cursor-pointer`}
          onClick={() => setOpen(true)}
        >
          {showWhatsApp ? (
            <FaWhatsapp className={`${mobileIconSize} ${desktopIconSize}`} />
          ) : (
            <FaWeixin className={`${mobileIconSize} ${desktopIconSize}`} />
          )}
        </div>
      )}

      {/* Close button */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className={`flex items-center justify-center ${mobileSize} ${desktopSize} bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition`}
        >
          <IoClose className={`${mobileIconSize} ${desktopIconSize}`} />
        </button>
      )}
    </div>
  );
}

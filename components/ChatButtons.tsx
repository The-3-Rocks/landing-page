// components/ChatButtons.tsx
"use client";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaWeixin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function ChatButtons() {
  const [open, setOpen] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  const whatsappNumber = "212654352802";
  const wechatId = "wxid_3j2et54a5s2l12";

  useEffect(() => {
    const interval = setInterval(() => {
      if (!open) setShowWhatsApp((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, [open]);

  // Combined sizes using Tailwind responsive classes
  const buttonSize = "w-16 h-16 lg:w-16 lg:h-16";
  const iconSize = "w-8 h-8 lg:w-10 lg:h-10";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {/* Expanded buttons */}
      {open && (
        <div className="flex flex-col gap-4 mb-2 items-end">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center ${buttonSize} bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition`}
          >
            <FaWhatsapp className={iconSize} />
          </a>

          <a
            href={`weixin://dl/chat?${wechatId}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center ${buttonSize} bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition`}
          >
            <FaWeixin className={iconSize} />
          </a>
        </div>
      )}

      {/* Single dynamic icon */}
      {!open && (
        <div
          className={`flex items-center justify-center ${buttonSize} bg-teal-600 text-white rounded-full shadow-lg transition cursor-pointer`}
          onClick={() => setOpen(true)}
        >
          {showWhatsApp ? (
            <FaWhatsapp className={iconSize} />
          ) : (
            <FaWeixin className={iconSize} />
          )}
        </div>
      )}

      {/* Close button */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className={`flex items-center justify-center ${buttonSize} bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition`}
        >
          <IoClose className={iconSize} />
        </button>
      )}
    </div>
  );
}

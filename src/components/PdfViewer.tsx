"use client";

import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";

export default function PdfViewer({ onClose }: { onClose: () => void }) {
  // 🧠 Disable body scroll when viewer is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* 🔹 Fullscreen PDF */}
      <iframe
        src="https://pdfobject.com/pdf/sample.pdf"
        className="w-full h-full"
        style={{ border: "none" }}
      />

      {/* 🔹 Back arrow button */}
      <button
        onClick={onClose}
        className="absolute top-20 left-3 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full p-3 shadow-lg hover:bg-white transition"
      >
        <IoArrowBack size={26} />
      </button>
    </div>
  );
}

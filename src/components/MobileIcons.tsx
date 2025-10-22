"use client";

import { useState, useEffect } from "react";
import { FaBook, FaComments, FaQuestion } from "react-icons/fa";
import { GiTargetPrize } from "react-icons/gi";
import AskQuestionPage from "./askQuestions/AskQuestion";
import LeaderBoard from "./LeaderBoard/LeaderBoard";

interface SocialIconsProps {
  className?: string;
}

export default function MobileIcons({ className }: SocialIconsProps) {
  const [openAsk, setOpenAsk] = useState(false);
  const [openBoard, setOpenBoard] = useState(false);

  const icons = [
    { icon: <FaBook />, link: "#curriculum" },
    { icon: <FaComments />, link: "#comments" },
    { icon: <FaQuestion />, onClick: () => setOpenAsk(true) },
    { icon: <GiTargetPrize />, onClick: () => setOpenBoard(true) },
  ];

  // 🧠 Disable body scroll when overlay is open
  useEffect(() => {
    if (openAsk || openBoard) {
      document.body.style.overflow = "hidden"; // stop body scroll
    } else {
      document.body.style.overflow = ""; // restore body scroll
    }
  }, [openAsk, openBoard]);

  // 🧠 Auto close overlays when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setOpenAsk(false);
        setOpenBoard(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={`flex gap-2 ${className || ""}`}>
        {icons.map((item, i) => (
          <button
            key={i}
            onClick={item.onClick}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-500 text-lg transition-all duration-300 hover:scale-105 hover:text-indigo-600"
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Overlays */}
      {openAsk && <AskQuestionPage onClose={() => setOpenAsk(false)} />}
      {openBoard && <LeaderBoard onClose={() => setOpenBoard(false)} />}
    </>
  );
}

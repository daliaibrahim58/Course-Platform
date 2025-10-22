import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

type SocialIconsProps = {
  className?: string;
};

const SocialIcons: React.FC<SocialIconsProps> = ({ className }) => {
  const icons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
  ];

  return (
    <div className={`flex gap-2 ${className || ""}`}>
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-500 text-lg transition-all duration-300"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

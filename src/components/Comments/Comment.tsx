"use client";

import Image from "next/image";

type CommentProps = {
  avatar?: string;
  name?: string;
  date?: string;
  text?: string;
};

const DEFAULT_AVATAR =
  "data:image/png;base64,iVBORw0K..."; // shortened for readability

export default function Comment({ avatar, name, date, text }: CommentProps) {
  // Only render if there is actual text
  if (!text) return null;

  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-md shadow-sm border">
      {/* Avatar */}
      <div className="w-12 h-12 relative flex-shrink-0">
        <Image
          src={avatar || DEFAULT_AVATAR}
          alt={name || "Anonymous"}
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* Comment content */}
      <div className="flex flex-col">
        {name && <span className="font-semibold text-gray-800">{name}</span>}
        {date && <span className="text-sm text-gray-500 mb-1">{date}</span>}
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Comment from "./Comment";

export default function CommentBox() {
  const [comments, setComments] = useState<
    { name: string; date: string; text: string }[]
  >([]);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;

    const newComment = {
      name: "User", // you can replace with logged-in user
      date: new Date().toLocaleString(),
      text,
    };

    setComments([newComment, ...comments]);
    setText(""); // clear textarea
  };

  return (
    <div className="flex flex-col gap-4 w-full items-start">
      {/* Comment Input Section */}
      <label htmlFor="comment" className="text-gray-700 font-medium">
        Write a comment
      </label>

      <textarea
        id="comment"
        placeholder="Write a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-3 text-gray-800 mb-5
               focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
        style={{ height: "260px" }}
      />

      <button
        type="button"
        onClick={handleSubmit}
        className="flex items-center justify-center gap-2 bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-all"
        style={{ width: "200px" }}
      >
        Submit Review
        <FiArrowRight size={18} />
      </button>

      {/* Display Comments */}
      <div className="w-full flex flex-col gap-3 mt-6">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            date={comment.date}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import Comment from "./Comment";

export default function CommentBox() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  function handleSubmit() {
    if (commentText.trim() === "") return;
    setComments((prev) => [commentText, ...prev]);
    setCommentText("");
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto mt-10 ml-0">
      <div className="flex flex-col gap-4 mt-8">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-sm">No comments yet.</p>
        ) : (
          comments.map((text, index) => <Comment key={index} text={text} />)
        )}

        {/* Textarea */}
        <textarea
          id="comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write your comment..."
          className="w-full h-40 border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center gap-2 bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-all"
          style={{ width: "200px" }}
        >
          Submit Review
          <FiArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import QuestionModal from "./QuestionModal";

type Question = {
  id: number;
  text: string;
};

interface AskQuestionPageProps {
  onClose: () => void;
}

export default function AskQuestionPage({ onClose }: AskQuestionPageProps) {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  function handleSubmit(text: string) {
    setQuestions((prev) => [{ id: Date.now(), text }, ...prev]);
    setOpen(false);
  }

  return (
    <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto flex flex-col bg-white text-[#001F3F] px-6 py-10">
      {/* Close arrow */}
      <button
        onClick={onClose}
        className="absolute top-6 left-4 text-[#001F3F] text-3xl hover:scale-110 transition-transform"
      >
        <IoArrowBack />
      </button>

      {/* Header */}
      <div className="mx-auto max-w-3xl mt-8">
        <h1 className="text-3xl font-bold mb-2 text-center">Ask a Question</h1>
        <p className="text-gray-600 text-center mb-6">
          Need help? Post your question below 👇
        </p>

        {/* Ask button */}
        <div className="flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg bg-indigo-600 px-6 py-2 text-white text-sm font-medium hover:opacity-90"
          >
            + Ask a Question
          </button>
        </div>

        {/* Modal */}
        <QuestionModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
        />

        {/* Questions list */}
        <div className="mt-8 space-y-4 pb-10">
          {questions.length === 0 ? (
            <p className="text-gray-500 text-center text-sm">
              No questions yet. Be the first to ask!
            </p>
          ) : (
            questions.map((q) => (
              <div
                key={q.id}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm"
              >
                <div className="text-gray-800 text-base">{q.text}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

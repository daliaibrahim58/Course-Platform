"use client";

import { useEffect, useState } from "react";

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (question: string) => void;
}
export default function QuestionModal({
  isOpen,
  onClose,
  onSubmit,
}: QuestionModalProps) {
  const STORAGE_KEY = "question_modal_draft_v1";
  const [text, setText] = useState("");

  // Load saved draft when modal opens
  useEffect(() => {
    if (isOpen) {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) setText(saved);
    }
  }, [isOpen]);

  // Save draft while typing
  useEffect(() => {
    if (!isOpen) return;
    const id = setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, text);
    }, 300);
    return () => clearTimeout(id);
  }, [text, isOpen]);

  function handleClose() {
    onClose?.();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit?.(text);
    sessionStorage.removeItem(STORAGE_KEY);
    setText("");
    onClose?.();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* overlay */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden
      />

      {/* modal content */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Ask a Question</h3>
              <p className="mt-1 text-sm text-gray-500">
                Your draft is automatically saved for this session.
              </p>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="rounded-md px-3 py-1 text-sm hover:bg-gray-100"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="mt-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={6}
              placeholder="Type your question here..."
              className="w-full resize-y rounded-lg border border-gray-200 p-4 text-base placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              Drafts are saved automatically in this session.
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  sessionStorage.removeItem(STORAGE_KEY);
                  setText("");
                }}
                className="rounded-md px-3 py-2 text-sm hover:bg-gray-100"
              >
                Clear
              </button>

              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:opacity-95"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

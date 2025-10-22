"use client";

import { useState } from "react";
import { IoDocumentTextOutline, IoLockClosedOutline } from "react-icons/io5";
import Exam from "./Exam/Exam";
import PdfViewer from "./PdfViewer";

export default function Lesson() {
  const [showExam, setShowExam] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);

  // ✅ 3 lessons total
  const lessons = [
    {
      title: "Week 1–4",
      desc: "Advanced storytelling techniques for writers:\nPersonas, Characters & Plots",
      details: [
        { label: "Introduction", value: "1" },
        { label: "Course Overview", value: "2" },
        { label: "Course Overview", value: "3" },
        { label: "Course Exercise / reference Files", value: "4" },
        {
          label: "Code Editor Installation (Optional if you have one)",
          value: "5",
        },
        { label: "Embedding PHP in HTML", value: "6" },
      ],
    },
    {
      title: "Week 5–8",
      desc: "Intermediate storytelling and editing techniques:\nTone, Style & Flow",
      details: [
        { label: "Introduction", value: "1" },
        { label: "Course Overview", value: "2" },
        { label: "Course Overview", value: "3" },
        { label: "Course Exercise / reference Files", value: "4" },
        { label: "Practical Writing Session", value: "5" },
        { label: "Embedding PHP in HTML", value: "6" },
      ],
    },
    {
      title: "Week 9–12",
      desc: "Professional writing projects:\nBuilding engaging narratives & publishing",
      details: [
        { label: "Introduction", value: "1" },
        { label: "Course Overview", value: "2" },
        { label: "Course Overview", value: "3" },
        { label: "Course Exercise / reference Files", value: "4" },
        { label: "Code Optimization", value: "5" },
        { label: "Final Exam", value: "6" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-start mb-16 relative p-5">
      {/* ✅ Show exam */}
      {showExam && <Exam />}

      {/* ✅ Show PDF */}
      {pdfOpen && <PdfViewer onClose={() => setPdfOpen(false)}/>}

      <div className="flex flex-col gap-10 w-full">
        {lessons.map((lesson, idx) => (
          <section
            key={idx}
            className="flex flex-col w-full bg-white rounded-md p-3"
          >
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {lesson.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-3 whitespace-pre-line">
                {lesson.desc}
              </p>
              <hr className="border-t border-gray-300" />
            </div>

            {/* Lesson details */}
            <dl className="divide-y divide-gray-300">
              {lesson.details.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (item.label === "Course Overview" && item.value === "3")
                      setPdfOpen(true);
                    if (item.value === "6") setShowExam(true);
                  }}
                  className="flex items-center py-3.5 justify-between cursor-pointer hover:bg-gray-100 transition"
                >
                  {/* Left side: text */}
                  <div className="flex items-center gap-2">
                    <IoDocumentTextOutline />
                    <dt className="text-gray-700 font-medium">{item.label}</dt>
                  </div>

                  {/* Right side: badges and lock */}
                  <div
                    className={`flex ${
                      // ✅ If lesson index is 1 or 2 → make column layout
                      idx === 1 || idx === 2
                        ? "flex-col items-end gap-1"
                        : "flex-row items-center gap-2"
                    }`}
                  >
                    {item.label === "Course Overview" && item.value === "3" && (
                      <>
                        <div className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                          0 QUESTION
                        </div>
                        <div className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                          10 MINUTES
                        </div>
                      </>
                    )}
                    <IoLockClosedOutline />
                  </div>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}

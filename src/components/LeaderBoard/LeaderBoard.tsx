"use client";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import MotivationalMessage from "./MotivationMessage";

type Student = {
  id: number;
  name: string;
  progress: number; // 0–100 (%)
};

interface LeaderBoardProps {
  onClose: () => void;
}

function LeaderBoard({ onClose }: LeaderBoardProps) {
  const students: Student[] = [
    { id: 1, name: "Ali", progress: 92 },
    { id: 2, name: "Dalia", progress: 85 },
    { id: 3, name: "Omar", progress: 70 },
    { id: 4, name: "Sara", progress: 78 },
  ];

  const sortedStudents = [...students].sort((a, b) => b.progress - a.progress);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-start min-h-screen overflow-y-auto bg-white text-[#001F3F] py-10 px-4">
      {/* 🔙 Close (arrow left) */}
      <button
        onClick={onClose}
        className="absolute top-6 left-4 text-[#001F3F] text-3xl hover:scale-110 transition-transform"
      >
        <IoArrowBack />
      </button>

      {/* Titles */}
      <h1 className="text-3xl font-bold mb-2 mt-2">Course Name</h1>
      <h2 className="text-2xl font-semibold mb-6">Leaderboard</h2>

      {/* Motivational message box */}
      <div className="bg-[#f2f6fd] rounded-2xl p-4 w-full max-w-md mb-8 shadow-md">
        <MotivationalMessage />
      </div>

      {/* Students leaderboard box */}
      <div className="bg-[#f2f6fd]  rounded-2xl p-4 w-full max-w-md shadow-md mb-10">
        <h3 className="text-lg font-semibold mb-4 text-center">Top Students</h3>

        <div className="flex flex-col gap-3">
          {sortedStudents.map((student, index) => (
            <div
              key={student.id}
              className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm"
            >
              <span className="font-medium">
                {index + 1}. {student.name}
              </span>
              <span className="text-sm text-gray-700">{student.progress}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;

"use client";

import { useEffect, useCallback } from "react";
import { CountdownTimer } from "nextjs-countdown-timer";
import { MdAccessAlarm } from "react-icons/md";
import Question from "./Question";
import QuestionsList from "./QuestionsList";
import { useQuestions } from "@/context/QuestionsContext";

function Exam() {
  const { setIsFinished } = useQuestions();
  useEffect(() => {
    // Disable body scroll when the exam is open
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scroll when exam is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleTimerEnd = useCallback(() => {
    // Delay the state update until after render
    setTimeout(() => setIsFinished(true), 0);
  }, []);

  <CountdownTimer initialSeconds={15} onTimerEnd={handleTimerEnd} />;

  return (
    <div className="fixed inset-0 z-50 bg-blue-500 overflow-hidden flex flex-col gap-[5%] items-center p-5 h-screen">
      {/* Timer */}
      <div className="flex justify-around items-center bg-yellow-300 w-[10%] rounded-md p-2 shadow-[0_0_10px_3px_rgba(255,255,0,0.8)]">
        <MdAccessAlarm className="text-3xl text-white drop-shadow-[0_0_6px_rgba(255,255,0,0.9)]" />
        <div className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,0,1)]">
          <CountdownTimer initialSeconds={15} onTimerEnd={handleTimerEnd} />
        </div>
      </div>

      {/* Questions List */}
      <div>
        <QuestionsList />
      </div>

      {/* Questions */}
      <div className="mt-5 w-full flex justify-center">
        <Question />
      </div>
    </div>
  );
}

export default Exam;

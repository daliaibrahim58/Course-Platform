"use client";

import { ReactNode, useContext, useState, createContext } from "react";
import type { QuestionType } from "../../types/question";

type QuestionContextType = {
  questions: QuestionType[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  isFinished: boolean;
  setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
};

const QuestionsContext = createContext<QuestionContextType | undefined>(
  undefined
);

export const QuestionProvider = ({ children }: { children: ReactNode }) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        setQuestions,
        currentIndex,
        setCurrentIndex,
        isFinished,
        setIsFinished,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestions = () => {
  const context = useContext(QuestionsContext);
  if (!context) throw new Error("useVideo must be used inside a VideoProvider");
  return context;
};

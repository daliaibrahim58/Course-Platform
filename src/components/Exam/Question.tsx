import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { LuSquare } from "react-icons/lu";
import { useQuestions } from "@/context/QuestionsContext";
import Button from "@mui/material/Button";
import { QuestionType } from "../../../types/question";

export default function Question() {
  const {
    questions,
    setQuestions,
    currentIndex,
    setCurrentIndex,
    isFinished,
    setIsFinished,
  } = useQuestions();

  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[][]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("/api/questions");
        const data = await res.json();
        setQuestions(data);
        setSelectedAnswers(new Array(data.length).fill(""));
        setShuffledAnswers(
          data.map((q: QuestionType) =>
            [...q.incorrect_answers, q.correct_answer].sort(
              () => Math.random() - 0.5
            )
          )
        );
      } catch (err) {
        console.error("Failed to fetch questions:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (questions.length === 0) return <p>No questions available.</p>;

  const currentQuestion = questions[currentIndex];
  const answers = shuffledAnswers[currentIndex] || [];

  const handleSelect = (answer: string) => {
    if (isFinished) return;
    const updated = [...selectedAnswers];
    updated[currentIndex] = answer;
    setSelectedAnswers(updated);
  };

  const handleFinish = () => {
    const firstUnanswered = selectedAnswers.findIndex((a) => a === "");
    if (firstUnanswered !== -1) {
      setCurrentIndex(firstUnanswered);
      return;
    }
    setIsFinished(true);
  };

  return (
    <div className="bg-white text-black p-4 flex flex-col rounded-md">
      <p> {currentIndex + 1}.</p>
      <h2 className="text-lg font-semibold mb-3">{currentQuestion.question}</h2>
      <div className="flex flex-col gap-5 my-10">
        {answers.map((answer, idx) => {
          const selectedAnswer = selectedAnswers[currentIndex];
          const correctAnswer = currentQuestion.correct_answer;

          const isSelected = selectedAnswer === answer;
          const isCorrect = answer === correctAnswer;
          const isWrongSelected = isFinished && isSelected && !isCorrect;
          const isNotAnswered = isFinished && !selectedAnswer && isCorrect;

          // determine background colors
          let bgColor = "bg-white";
          if (isFinished) {
            if (isCorrect) bgColor = "bg-green-100"; // correct
            else if (isWrongSelected) bgColor = "bg-red-100"; // wrong selected
          } else if (isSelected) {
            bgColor = "bg-blue-500 text-white"; // selected
          }

          return (
            <div
              key={idx}
              onClick={() => handleSelect(answer)}
              className={`relative cursor-pointer border rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                !isFinished ? "hover:border-blue-500" : "border-gray-300"
              } ${bgColor}`}
            >
              {/* Overlaid icons */}
              <div className="relative flex items-center justify-center w-9 h-9">
                <LuSquare
                  className={`${
                    isFinished
                      ? isCorrect
                        ? "text-green-600"
                        : isWrongSelected
                        ? "text-red-500"
                        : "text-blue-500"
                      : isSelected
                      ? "text-white"
                      : "text-blue-500"
                  } text-[36px]`}
                />
                {(isCorrect || isWrongSelected || isSelected) && (
                  <FaCircle
                    size={10}
                    className={`absolute ${
                      isFinished
                        ? isCorrect
                          ? "text-green-600"
                          : isWrongSelected
                          ? "text-red-500"
                          : "text-blue-500"
                        : "text-white"
                    }`}
                  />
                )}
              </div>

              {/* Vertical line */}
              <div
                className={`w-[2px] self-stretch ${
                  isSelected || (isFinished && isCorrect)
                    ? "bg-white"
                    : "bg-gray-300"
                } -my-3`}
              ></div>

              {/* Answer text */}
              <span
                className={`${
                  isSelected && !isFinished
                    ? "text-white"
                    : isFinished && isCorrect
                    ? "text-green-700"
                    : isFinished && isWrongSelected
                    ? "text-red-700"
                    : isNotAnswered
                    ? "text-gray-500 italic"
                    : "text-gray-800 text-sm"
                }`}
              >
                {answer}
                {((isFinished && isCorrect && isSelected) ||
                  (isFinished && !isNotAnswered && isCorrect && !isSelected)) && (
                  <span className="text-green-600 ml-2 font-medium">
                    (correct)
                  </span>
                )}
                {isFinished && isWrongSelected && (
                  <span className="text-red-600 ml-2 font-medium">(wrong)</span>
                )}
                {isNotAnswered && (
                  <span className="text-gray-500 ml-2 font-medium">
                    (Not answered)
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-5">
        {currentIndex === questions.length - 1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleFinish}
            disabled={isFinished}
          >
            {isFinished ? "Finished" : "Finish"}
          </Button>
        )}
      </div>
    </div>
  );
}

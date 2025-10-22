import { useQuestions } from "@/context/QuestionsContext";

function QuestionsList() {
  const { questions, currentIndex, setCurrentIndex } = useQuestions();

  return (
    <ol className="flex gap-2">
      {questions.map((q, idx) => (
        <li
          key={idx}
          onClick={() => setCurrentIndex(idx)}
          className={`flex items-center justify-center w-10 h-10 cursor-pointer rounded-full
            ${currentIndex === idx ? "bg-white text-blue-500" : "bg-blue-500 text-white border-2 border-white"}`}
        >
          {idx + 1}
        </li>
      ))}
    </ol>
  );
}

export default QuestionsList;

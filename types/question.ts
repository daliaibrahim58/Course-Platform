export type QuestionType = {
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

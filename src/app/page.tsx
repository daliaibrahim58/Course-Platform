"use client";

import { VideoProvider } from "@/context/VideoContext";
import { QuestionProvider } from "@/context/QuestionsContext";
import CourseLayoutContent from "@/components/CourseLayoutContent";

export default function HomePage() {
  return (
    <VideoProvider>
      <QuestionProvider>
        <CourseLayoutContent />
      </QuestionProvider>
    </VideoProvider>
  );
}

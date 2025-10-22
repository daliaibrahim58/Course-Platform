"use client";

import VideoPlayer from "@/components/VideoPlayer";
import SocialIcons from "@/components/SocialIcons";
import CourseMaterials from "@/components/CourseMaterials";
import CommentBox from "@/components/Comments/CommentBox";
import ProgressBar from "@/components/ProgressBar";
import { useVideo } from "@/context/VideoContext";
import MobileIcons from "@/components/MobileIcons";
import Lessons from "@/components/Lessons";

export default function CourseLayoutContent() {
  const { isWide } = useVideo();

  return (
    <div className="course-layout grid grid-cols-1 md:grid-cols-[752px_424px] gap-[3%] md:gap-[17%] w-[95%] max-w-full mx-auto p-5 sm:p-2">
      {/* Left Side */}
      <div className="left-side flex flex-col w-full sm:mb-10 order-1 md:order-1">
        <div
          className={`video-wrapper w-full h-[300px] relative mb-16 sm:mb-56 md:mb-60`}
        >
          <VideoPlayer
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            poster="https://www.w3schools.com/html/pic_trulli.jpg"
          />
        </div>

        <div
          className={`mb-14 flex flex-col sm:flex-row sm:items-center sm:justify-start`}
        >
          <SocialIcons
            className={`hidden sm:flex ${isWide ? "md:mt-20" : "mt-0"}`}
          />
          <MobileIcons
            className={`flex sm:hidden ${isWide ? "md:mt-20" : "mt-0"}`}
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4" id="curriculum">
          Course Materials
        </h2>
        <div className="flex flex-col items-center sm:flex-row justify-between w-full bg-white mb-6 gap-4">
          <CourseMaterials />
          <CourseMaterials />
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`right-side flex flex-col w-full md:h-[1103px] order-2 md:order-2 ${
          isWide ? "mt-6 md:mt-[650px] transition-none" : "mt-0"
        }`}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Topics for This Course
        </h2>
        <ProgressBar />
        <Lessons />
      </div>

      {/* Comments */}
      <div className="comments-container flex flex-col gap-4 w-full order-3 -mt-20 md:-mt-96">
        <h2 className="text-2xl font-bold text-gray-900 my-5">Comments</h2>
        <CommentBox />
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useProgress } from "@/context/ProgressContext";

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState(0);
  const {progress} = useProgress()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFill(progress); // Fill the bar when visible
          } else {
            setFill(0); // Reset when it goes out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the bar is visible
    );

    if (barRef.current) observer.observe(barRef.current);

    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, [progress]);

  return (
    <div ref={barRef} className="mt-15 w-full relative mb-20">
      <div className="w-full bg-gray-200 rounded-full h-4 relative">
        {/* Filled part */}
        <div
          className="bg-green-600 h-4 rounded-full transition-[width] duration-1000"
          style={{ width: `${fill}%` }}
        />

        {/* Circular handle */}
        <div
          className="absolute -top-14 w-10 h-10 bg-white border border-gray-400 rounded-full flex items-center justify-center -translate-x-1/2 text-sm font-semibold text-gray-900"
          style={{ left: `${fill}%` }}
        >
          <span className="text-blue-500">You</span>
        </div>

        {/* Percentage */}
        <p
          className="text-blue-500 absolute -translate-x-1/2 -translate-y-1 mt-2"
          style={{ left: `${fill}%` }}
        >
          {fill}%
        </p>
      </div>

      {/* Arrow below the circle */}
      <IoMdArrowDropdown
        style={{
          position: "absolute",
          left: `${fill}%`,
          bottom: "16px",
          color: "#99a1af",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}

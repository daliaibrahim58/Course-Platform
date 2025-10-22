"use client";

import { useProgress } from "@/context/ProgressContext";

export default function MotivationalMessage() {
  const { progress } = useProgress();
  let message = "";

  if (progress < 25) {
    message = "يلا يا بطل، لسه في أول الطريق! شد حيلك 👏";
  } else if (progress < 50) {
    message = "كويس يا صاحبي، كمل كده وركز شوية كمان 😉";
  } else if (progress < 75) {
    message =
      "عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا 💪";
  } else if (progress < 100) {
    message = "🔥 ممتاز جدًا! آخر خطوة وتبقى من المتفوقين!";
  } else {
    message = "💯 برافو! خلصت الكورس زي الأسد!";
  }

  return (
    <div className="text-center p-4 rounded-lg flex items-center justify-center">
      <p className="text-gray-800 text-lg font-medium">{message}</p>
    </div>
  );
}

function CourseMaterialsTwo() {
  const cardData = [
    {
      details: [
        { label: "Duration", value: "3 weeks" },
        { label: "Lessons", value: "8" },
        { label: "Enrolled", value: "65 students" },
        { label: "Language", value: "English" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-centre w-full">
      {/* Cards container */}
      <div className="flex gap-6 sm:justify-center w-full">
        {cardData.map((card, idx) => (
          <section
            key={idx}
            className="flex flex-col w-full p-6 sm:w-80 bg-white rounded-md"
          >
            <dl className="divide-y divide-gray-300">
              {card.details.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2"
                >
                  <dt className="text-gray-700 font-medium">{item.label}</dt>
                  <dd className="text-gray-500">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}

export default CourseMaterialsTwo;

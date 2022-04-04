import React from "react";
import calculateBackground from "../../utils/getBackground";
const HabitPercentage = ({ habit, index }) => {
  const bg = calculateBackground(index);

  return (
    <div className={`${bg.accent} text-lg p-6 rounded-md`}>
      <p className="text-white font-medium"> {habit.name}</p>
      <div className="progress">
        <p className="text-sm opacity-60 text-white mt-6">
          {habit.completed} {habit.completed <= 1 ? "day" : "days"} |{" "}
          {parseInt(habit.percentage)}%
        </p>
        <div className="progress-bar w-full mt-4">
          <div
            className={`progress-percentage w-full ${bg.progress}     h-1.5 rounded-md `}
          >
            <div
              className="percent h-1.5 bg-gray-100 rounded-md"
              style={{ width: `${habit.percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitPercentage;

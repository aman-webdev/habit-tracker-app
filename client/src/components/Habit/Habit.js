import React from "react";
import renderDate from "../../utils/renderDate";
const Habit = ({ habit }) => {
  return (
    <div className="bg-[#70367C] w-1/3 mt-10 p-4 px-6 rounded-md">
      <div className="flex justify-between items-center w-full">
        <p className="text-white text-lg font-medium">
          {`${habit.habitName[0].toUpperCase()}${habit.habitName.slice(1)}`}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon cursor-pointer opacity-60 icon-tabler icon-tabler-dots-vertical"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="12" cy="5" r="1" />
        </svg>
      </div>
      <p className="mt-5 text-[#f1b3f8] opacity-80">{habit.habitDescription}</p>
    </div>
  );
};

export default Habit;

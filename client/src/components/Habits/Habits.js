import React from "react";
import Habit from "../Habit/Habit";
import { useSelector } from "react-redux";
const Habits = () => {
  const { habits } = useSelector((state) => state);

  return (
    <div className="mt-6  ">
      {habits.map((habit) => (
        <Habit key={habit.habitName} habit={habit} />
      ))}
    </div>
  );
};

export default Habits;

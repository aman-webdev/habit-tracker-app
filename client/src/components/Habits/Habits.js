import React, { useEffect } from "react";
import Habit from "../Habit/Habit";
import { useSelector, useDispatch } from "react-redux";
import { getHabits } from "../../actions/habits";

const Habits = () => {
  const { habits } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHabits());
  }, [dispatch]);

  console.log(habits);
  return (
    <div className="mt-6  ">
      {habits.length &&
        habits.map((habit) => <Habit key={habit.habitName} habit={habit} />)}
    </div>
  );
};

export default Habits;

import React, { useState, useEffect } from "react";
import Habit from "../Habit/Habit";
import { ReactComponent as DashboardIllustration } from "../../assets/dashboard.svg";
import PuffLoader from "react-spinners/PuffLoader";
import { useSelector, useDispatch } from "react-redux";
import { getHabits } from "../../actions/habits";
import { Link } from "react-router-dom";

const Habits = () => {
  const { habits } = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("first");
    dispatch(getHabits(setIsLoading));
  }, [dispatch]);

  return (
    <div className=" w-full h-5/6 ">
      {isLoading ? (
        <div className="flex  md:top-auto relative top-1/2  justify-center items-center w-full my-auto h-full ">
          <PuffLoader
            size={200}
            loading={isLoading}
            color="#70367C"
            css={{ strokeWidth: "40px" }}
          />{" "}
        </div>
      ) : (
        <div
          className={`habits-container  grid items-center justify-center align-middle  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  w-full gap-4 ${
            habits.length ? "grid align-middle " : "block"
          }`}
        >
          {habits.length ? (
            habits.map((habit, i) => (
              <Habit key={habit.habitName} habit={habit} index={i} />
            ))
          ) : (
            <div className="  mx-auto text-center gap-4 h-full w-full py-10  ">
              <DashboardIllustration className="mx-auto" />
              <Link to="/habit">
                <p className="mt-6 hover:opacity-80 transition-opacity text-[#652675] text-md">
                  Add Habits to get Started
                </p>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Habits;

import React from "react";
import { useLocation } from "react-router-dom";
import renderDate from "../utils/renderDate";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginState } from "../actions/utilsAction";
import { motion } from "framer-motion";

const Header = ({ isGraphOpen, setIsGraphOpen, completedHabits }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { result } = useSelector((state) => state.user);
  const { habits } = useSelector((state) => state);

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");
  };

  const isAnyOneHabitCompleted = () => {
    let isCompleted = false;

    for (let i = 0; i < completedHabits.length; i++) {
      if (completedHabits[i].completed > 0) {
        isCompleted = true;
      }
    }
    return isCompleted;
  };

  return (
    <motion.div className="md:pt-4 text-center   flex justify-between items-center w-full mb-6">
      <div className="w-full mt-4 ">
        <p className="text-2xl font-medium md:text-left w-full mx-auto  text-center text-[#3E1D46]">
          {location.pathname === "/analytics"
            ? "Analyze your habits"
            : `Hello, ${result.firstName || result.name.split(" ")[0]}`}
        </p>
        <p
          className={`text-sm opacity-60 mt-1 md:text-left text-center w-full ${
            location.pathname === "/analytics" ? "mt-4" : ""
          }`}
        >
          {location.pathname === "/analytics"
            ? "Habits are not a finish line to be crossed, they are a lifestyle to be lived"
            : `Today is ${renderDate()}`}
        </p>
      </div>
      <div className=" gap-4  w-full md:flex hidden  justify-end">
        <button
          onClick={() => navigate("/habit")}
          className={`bg-[#0F1422] text-white hidden md:block py-5 px-4 text-sm rounded-md 
          
          `}
        >
          Add New Habit
        </button>
        {location.pathname === "/analytics" &&
        habits.length &&
        isAnyOneHabitCompleted() ? (
          <button
            onClick={() => setIsGraphOpen(!isGraphOpen)}
            className="bg-[#0F1422] text-white hidden md:block py-5 px-4 text-sm rounded-md"
          >
            View Graph
          </button>
        ) : (
          <button
            onClick={logoutHandler}
            className="bg-[#0F1422] text-white hidden md:block  py-5 px-4 text-sm rounded-md"
          >
            Logout
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Header;

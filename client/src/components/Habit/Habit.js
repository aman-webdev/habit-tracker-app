import React from "react";
import CheckBox from "../CheckBox/Checkbox";
import { useDispatch } from "react-redux";
import { addHabitId } from "../../actions/utilsAction";
import { deleteHabit } from "../../actions/habits";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getDaysInWeek } from "../../utils/getDates";
import calculateBackground from "../../utils/getBackground";
import "react-toastify/dist/ReactToastify.css";
import "./Habit.css";
const Habit = ({ habit, index }) => {
  const bg = calculateBackground(index);

  const notify = () =>
    toast.error("Can only select current date!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = () => {
    dispatch(addHabitId(habit));
    navigate("/habit");
  };

  return (
    <div className={` ${bg.accent} w-full mt-10 p-4 px-6 rounded-md`}>
      <div className="flex justify-between items-center w-full">
        <p className="text-white text-lg font-medium">
          {`${habit.habitName[0].toUpperCase()}${habit.habitName.slice(1)}`}
        </p>
        <svg
          onClick={onClickHandler}
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
      <div className="flex mt-5 items-center justify-between">
        <p className={`opacity-80 ${bg.text}`}>{habit.habitDescription}</p>
        <svg
          onClick={() => dispatch(deleteHabit(habit._id))}
          xmlns="http://www.w3.org/2000/svg"
          className="icon cursor-pointer opacity-40 icon-tabler icon-tabler-x"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="white"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <div className="flex w-full flex-wrap mt-6 gap-3 justify-center items-center cursor-pointer">
        {habit.habitFrequency.map((freq, i) => (
          <CheckBox
            name={i}
            value={freq}
            date={getDaysInWeek()[i].date}
            id={habit._id}
            notify={notify}
            dates={habit.dates}
          />
        ))}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Habit;

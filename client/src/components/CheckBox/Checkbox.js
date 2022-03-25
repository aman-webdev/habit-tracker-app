import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tickHabit } from "../../actions/habits";
const Checkbox = ({ name, value, date, id }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const checkedOnclickHandler = () => {
    setIsChecked(!isChecked);
  };

  const updateHabit = () => {
    const nowDate = new Date().toDateString();

    if (nowDate.includes(date)) {
      checkedOnclickHandler();
      dispatch(tickHabit(id));
    }
  };

  return (
    <button
      disabled={!value}
      className="w-1/6 flex flex-col justify-center items-center"
      onClick={updateHabit}
    >
      {!isChecked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={` icon  ${value && "hover:opacity-100"} ${
            value ? "opacity-60" : "opacity-20"
          } transition-opacity  icon-tabler icon-tabler-circle-dashed`}
          width="80%"
          height="80%"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
          <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
          <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
          <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
          <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
          <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
          <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
          <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
        </svg>
      ) : (
        <svg
          className={` icon  ${value && "hover:opacity-100"} ${
            value ? "opacity-80" : "opacity-20"
          } transition-opacity  icon-tabler icon-tabler-circle-dashed`}
          width="80%"
          height="80%"
          fill="none"
          stroke="#160040"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          ></path>
        </svg>
      )}
      <p className="text-xs text-[#fff] opacity-70 my-2">{date}</p>
    </button>
  );
};

export default Checkbox;

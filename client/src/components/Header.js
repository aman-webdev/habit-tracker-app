import React from "react";
import renderDate from "../utils/renderDate";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="py-8 flex justify-between items-center">
      <div>
        <p className="text-2xl font-medium text-[#3E1D46]">Hello, Sara</p>
        <p className="text-sm opacity-60 mt-1">Today is {renderDate()}</p>
      </div>
      <button
        onClick={() => navigate("/createhabit")}
        className="bg-[#0F1422] text-white  py-3 px-4 text-sm rounded-md"
      >
        Add New Habit
      </button>
    </div>
  );
};

export default Header;

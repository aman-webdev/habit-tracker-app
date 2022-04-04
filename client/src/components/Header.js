import React from "react";
import { useLocation } from "react-router-dom";
import renderDate from "../utils/renderDate";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginState } from "../actions/utilsAction";

const Header = ({ isGraphOpen, setIsGraphOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { result } = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");
  };

  return (
    <div className="pt-4 flex justify-between items-center w-full h-1/6">
      <div>
        <p className="text-2xl font-medium text-[#3E1D46]">
          {location.pathname === "/analytics"
            ? "Analyze your habits"
            : `Hello, ${result.firstName || result.name.split(" ")[0]}`}
        </p>
        <p
          className={`text-sm opacity-60 mt-1 ${
            location.pathname === "/analytics" ? "mt-4" : ""
          }`}
        >
          {location.pathname === "/analytics"
            ? "Habits are not a finish line to be crossed, they are a lifestyle to be lived"
            : `Today is ${renderDate()}`}
        </p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/habit")}
          className="bg-[#0F1422] text-white  py-3 px-4 text-sm rounded-md"
        >
          Add New Habit
        </button>
        {location.pathname === "/analytics" ? (
          <button
            onClick={() => setIsGraphOpen(!isGraphOpen)}
            className="bg-[#0F1422] text-white  py-3 px-4 text-sm rounded-md"
          >
            View Graph
          </button>
        ) : (
          <button
            onClick={logoutHandler}
            className="bg-[#0F1422] text-white  py-3 px-4 text-sm rounded-md"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

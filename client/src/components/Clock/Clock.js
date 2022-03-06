import React from "react";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

const Clock = ({ percentage }) => {
  return (
    <div className=" mx-auto flex justify-center items-center  clock-container bg-[#310E3A]">
      <p className="text-white text-6xl relative">
        {percentage} <span className="text-lg absolute bottom-0">%</span>{" "}
      </p>
    </div>
  );
};

export default Clock;

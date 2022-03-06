import React from "react";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

const Clock = ({ percentage }) => {
  return (
    <div className=" mx-auto flex justify-center items-center  clock-container bg-[#310E3A]">
      <p className="text-white text-6xl">{percentage}</p>
    </div>
  );
};

export default Clock;

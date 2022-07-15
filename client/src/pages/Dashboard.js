import React from "react";
import Habits from "../components/Habits/Habits";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="  w-full md:w-5/6 md:px-8 px-6 ">
      <Header />
      <Habits />
    </div>
  );
};

export default Dashboard;

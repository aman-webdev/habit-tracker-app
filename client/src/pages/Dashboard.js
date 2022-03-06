import React from "react";
import Habits from "../components/Habits/Habits";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className=" w-5/6 px-8 ">
      <Header />
      <Habits />
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Analytics } from "../assets/analytics.svg";
import { ReactComponent as TaskList } from "../assets/taskList.svg";
import NavItem from "./NavItem";

const Sidebar = () => {
  const [isActiveNav, setIsActiveNav] = useState("Dashboard");
  return (
    <div className="w-1/6  text-center my-8 border-r-1.5 border-solid border-[#E1DDE3] border-opacity-80 ">
      <div className="logo mx-auto w-1/2 text-center flex font-semibold items-center justify-center text-lg text-[#310E3A] ">
        <Logo />
        <p>chaart</p>
      </div>
      <div className="user-profile w-1/2 text-center my-12 mx-auto">
        <img
          src="https://images.pexels.com/photos/4769490/pexels-photo-4769490.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="h-24 w-24 object-cover rounded-full mx-auto"
          alt=""
        />
        <p className="profile-name mt-4 text-[#431b4b] text-sm font-semibold">
          Sarah Connar
        </p>
        <p className="profile-email mt-1 text-[#70367C] text-xs text-opacity-60">
          sarahc@gmail.com
        </p>
      </div>
      <nav className="nav-bar w-full mt-16 ">
        <ul className="nav-list w-full">
          <NavItem text="Dashboard" path="/">
            <Home />
          </NavItem>
          <NavItem text="Analytics" path="/analytics">
            <Analytics />
          </NavItem>
          <NavItem text="Task list" path="/tasks">
            <TaskList />
          </NavItem>
          <NavItem text="Pomodoro" path="/pomodoro">
            <Home />
          </NavItem>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

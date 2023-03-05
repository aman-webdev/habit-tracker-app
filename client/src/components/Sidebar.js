import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Analytics } from "../assets/analytics.svg";
import { ReactComponent as TaskList } from "../assets/taskList.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";

const Sidebar = () => {
  const location = useLocation();
  const currentPage =
    location.pathname.split("/")[1][0]?.toUpperCase() +
    location.pathname.split("/")[1]?.slice(1);

  const [isActiveNav, setIsActiveNav] = useState(currentPage);
  const { result } = useSelector((state) => state.user)

  return (
    <div className="lg:w-1/6 md:w-1/4 hidden md:block text-center my-8 border-r-1.5 border-solid border-[#E1DDE3] border-opacity-80 ">
      <div className="logo mx-auto w-1/2 text-center flex font-semibold items-center justify-center text-lg text-[#310E3A] ">
        <Logo />
        <p>habito</p>
      </div>
      <div className="user-profile w-full flex flex-col items-center my-12 mx-auto">
        {result.imageUrl ? (
          <img
            src={result?.imageUrl}
            className="h-24 w-24 object-cover rounded-full mx-auto"
            alt=""
          />
        ) : (
          <Profile />
        )}

        <p className="profile-name mt-4 text-[#431b4b] text-sm font-semibold">
          {result?.name || `${result.firstName} ${result.lastName}`}
        </p>
        <p className="profile-email mt-1  text-[#70367C] text-xs text-opacity-60">
          {result?.email.split("@")[0]}
        </p>
      </div>
      <nav className="nav-bar w-full mt-16 ">
        <ul className="nav-list w-full ">
          <NavItem
            text="Dashboard"
            path="/dashboard"
            setIsActiveNav={setIsActiveNav}
            isActiveNav={isActiveNav}
          >
            <Home />
          </NavItem>
          <NavItem
            text="Analytics"
            path="/analytics"
            setIsActiveNav={setIsActiveNav}
            isActiveNav={isActiveNav}
          >
            <Analytics />
          </NavItem>
          {/* <NavItem
            text="Task list"
            path="/tasks"
            setIsActiveNav={setIsActiveNav}
            isActiveNav={isActiveNav}
          >
            <TaskList />
          </NavItem>
          <NavItem
            text="Pomodoro"
            path="/pomodoro"
            setIsActiveNav={setIsActiveNav}
            isActiveNav={isActiveNav}
          >
            <Home />
          </NavItem> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

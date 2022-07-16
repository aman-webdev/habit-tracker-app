import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as MenuOpen } from "../assets/menu.svg";
import { ReactComponent as MenuClose } from "../assets/close.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { useSelector, useDispatch } from "react-redux";
import { ChangeNavState } from "../actions/utilsAction";

const MobileHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { result } = useSelector((state) => state.user);
  const { isNavOpen } = useSelector((state) => state.utils);

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");
  };

  const buttonHandler = () => {
    if (location.pathname === "/analytics") {
    } else {
      navigate("/habit");
    }
    dispatch(ChangeNavState());
  };

  return (
    <div className="py-6 px-4 md:hidden flex items-center h-20 justify-between relative">
      <div className="logo  flex font-semibold items-center justify-center text-xl text-[#310E3A] ">
        <Logo />
        <p>habito</p>
      </div>
      {isNavOpen ? (
        <MenuClose
          className="w-9 stroke-[#310E3A] cursor-pointer"
          onClick={() => dispatch(ChangeNavState())}
        />
      ) : (
        <MenuOpen
          className="w-9 stroke-[#310E3A] cursor-pointer"
          onClick={() => dispatch(ChangeNavState())}
        />
      )}
      {isNavOpen && (
        <div className="nav fixed py-4 px-6 z-50 flex flex-col   items-center text-lg bg-[#0F1422] text-white top-16 mt-2 bottom-0 left-0 right-0">
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

            <p className="profile-name mt-4 text-white text-base ">
              {result?.name || `${result.firstName} ${result.lastName}`}
            </p>
            <p className="profile-email mt-1  text-white text-base text-opacity-60">
              {result?.email.split("@")[0]}
            </p>
            <div className="line h-0.5 rounded-sm opacity-40 w-1/5 mt-5 bg-slate-100"></div>
          </div>
          <div className="flex flex-col justify-between h-full pb-8 w-full">
            <div className="links flex flex-col text-md font-light text-center gap-10">
              <Link onClick={() => dispatch(ChangeNavState())} to="/">
                Dashboard
              </Link>
              <Link onClick={() => dispatch(ChangeNavState())} to="/analytics">
                Analytics
              </Link>
              {/* <Link to="/analytics">Task List</Link> */}
            </div>
            <div className="buttons w-3/4 flex mx-auto items-center mb-4 gap-10">
              <button
                onClick={() => buttonHandler()}
                className={`text-black text-sm bg-white font-medium w-1/2  py-3 px-4 rounded-md 
          
          `}
              >
                Add New Habit
              </button>
              <button
                onClick={logoutHandler}
                className={`text-[#0F1422] bg-white font-medium w-1/2 text-sm  py-3 px-4 rounded-md 
          
          `}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;

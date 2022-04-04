import React from "react";
import { Link } from "react-router-dom";
const NavItem = ({ text, children, path, isActiveNav, setIsActiveNav }) => {
  return (
    <div onClick={() => setIsActiveNav(text)}>
      <Link to={path}>
        <li
          className={`nav-item flex w-1/2  ${
            isActiveNav === text
              ? "opacity-100 text-[#652675] font-medium"
              : "opavity-50"
          }   justify-between mx-auto items-center mt-8 opacity-80 cursor-pointer`}
        >
          {children}
          <p className={`m-0 text-sm text-left  w-2/3`}>{text}</p>
        </li>
      </Link>
    </div>
  );
};

export default NavItem;

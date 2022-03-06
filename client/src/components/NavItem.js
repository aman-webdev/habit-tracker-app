import React from "react";
import { Link } from "react-router-dom";
const NavItem = ({ text, children, path }) => {
  return (
    <Link to={path}>
      <li className="nav-item flex w-1/2  justify-between mx-auto items-center mt-8 opacity-80 cursor-pointer">
        {children}
        <p className="m-0 text-sm text-left text-[ #310E3A] w-2/3">{text}</p>
      </li>
    </Link>
  );
};

export default NavItem;

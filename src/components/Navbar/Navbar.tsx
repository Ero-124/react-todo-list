import "./Navbar.css";

import React from "react";
import { NavLink } from "react-router-dom";

import { useTheme } from "../../hooks/use-theme";

const Navbar: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <nav>
      <div className="nav-wrapper px1">
        <NavLink to="/" className="brand-logo">
          Todo List
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Todo List</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <button
              className=" text-white btn-floating button-theme"
              onClick={() => setTheme("light")}
            ></button>
          </li>
          <li>
            <button
              className="btn-floating ml1 black button-theme"
              onClick={() => setTheme("dark")}
            ></button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import './Navbar.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

import { useTheme } from '../../hooks/use-theme';

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
            <button
                          className="btn text-white"
                          onClick={() => setTheme('light')}
            >
              Light
            </button>
          </li>
          <li>
            <button
              className="btn ml1 black  "
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

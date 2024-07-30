import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <img src="logo.png" alt="logo" />

          <ul>
            <li>
              <a className="menu-item text-center">Home</a>
            </li>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Home</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            {" "}
            <li className="nav-items-menu">Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="nav-items-menu">About</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li className="nav-items-menu">Contact</li>{" "}
          </Link>
          <Link to="/instamart">
            {" "}
            <li className="nav-items-menu">Instamart</li>{" "}
          </Link>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import "./styles/Header.css";

import logo from "../assets/JJ_logo.png";

function Header() {
  const navigate = useNavigate();
  const mainEnter = () => {
    navigate("/");
  };

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div>
      <div className="Header">
        <div className="header_left">
          <img src={logo} id="main_logo" alt="main-logo" onClick={mainEnter} />
        </div>
        <div className="header_right">
          <NavLink
            className="Header-Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="./"
          >
            <span>주니어 쥬빌리</span>
          </NavLink>
          <NavLink
            className="Header-Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="./intro"
          >
            <span>소개</span>
          </NavLink>
          <NavLink
            className="Header-Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="./camp"
          >
            <span>캠프</span>
          </NavLink>
          <NavLink
            className="Header-Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="./contact"
          >
            <span>문의</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;

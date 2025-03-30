import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import logo from "../assets/JJ_logo.png";
import insta from "../assets/Instagram.jpg";

function Header() {
  const mainEnter = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="Header">
        <div className="header_left">
          <img src={logo} id="main_logo" alt="main-logo" onClick={mainEnter} />
        </div>
        <div className="header_right"></div>
      </div>
    </div>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "../components/styles/Header.css";
import main_logo from "../assets/JJ_logo.svg";
// import { useRecoilValue } from "recoil";
// import { sessionState } from "../atom/atom";

function Header() {
  // eslint-disable-next-line
  // const [notLoggedIn, setNotLoggedIn] = useState(false);
  // eslint-disable-next-line
  const [manager, setManager] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = sessionStorage.getItem("serverResponse");
  const userAuth = sessionStorage.getItem("serverResponse:Authority");

  const activeStyle = {
    color: "#EB5A3C",
  };

  // const isLoginActive = () => {
  //   return location.pathname === "/login" || location.pathname === "/";
  // };

  // const sessionValue = useRecoilValue(sessionState);

  useEffect(() => {
    // console.log("sessionValue", sessionValue);
    // console.log("sessionState", sessionState);
    if (userAuth === "1" || userAuth === "2") {
      setManager(true);
      const parsedUserInfo = JSON.parse(userInfo);
      if (parsedUserInfo.isManager) {
        setManager(true);
      }
    }
  }, [userAuth, userInfo]);

  const loginEnter = () => {
    navigate("/login");
    window.location.reload();
  };

  const homeEnter = () => {
    navigate("/");
    window.location.reload();
  };
  // const myPage = () => {
  //   navigate("/mypage");
  // };
  // const ManagerPage = () => {
  //   navigate("/manager");
  // };

  // 마이페이지 경로 체크 함수
  // eslint-disable-next-line
  const isMyPageActive = () => {
    return location.pathname.startsWith("/mypage");
  };

  return (
    <div>
      <div className="Header_Container">
        <div className="Header_Left">
          <img
            id="main-logo"
            src={main_logo}
            alt="main_logo"
            onClick={homeEnter}
          />
          <span>주니어 쥬빌리</span>
        </div>
        <div className="Header_Right">
          <NavLink
            className="Header_Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="/"
          >
            <span>주니어쥬빌리</span>
          </NavLink>
          <NavLink
            className="Header_Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="/intro"
          >
            <span>소개</span>
          </NavLink>
          <NavLink
            className="Header_Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="/camp"
          >
            <span>캠프</span>
          </NavLink>
          <NavLink
            className="Header_Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="/contact"
          >
            <span>문의</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;

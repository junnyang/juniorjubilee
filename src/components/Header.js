import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "../components/styles/Header.css";
import main_logo from "../assets/JJ_logo.svg";

function Header() {
  // eslint-disable-next-line
  // eslint-disable-next-line
  const [manager, setManager] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // 라우트 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div>
      <div
        className={`Header_Container ${
          mobileMenuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <div className="Header_Left" onClick={homeEnter}>
          <img id="main-logo" src={main_logo} alt="main_logo" />
          <span>주니어 쥬빌리</span>
        </div>
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="메뉴 토글"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
        <div className="Header_Right">
          <NavLink
            className="Header_Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>주니어쥬빌리</span>
          </NavLink>
          <NavLink
            className="Header_Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="/intro"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>소개</span>
          </NavLink>
          <NavLink
            className="Header_Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="/camp"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>캠프</span>
          </NavLink>
          <NavLink
            className="Header_Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>문의</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;

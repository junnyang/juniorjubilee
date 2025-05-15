import React from "react";

import "./styles/Footer.css";

import insta from "../assets/Instagram.jpg";

function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="footer_left"></div>
        <div className="footer_right">
          <div className="footer_contents">주니어 쥬빌리</div>
          <div className="footer_contents">연락처: 010-3161-8383</div>
          <div className="footer_contents">
            메일 JuniorJubilee2015@gmail.com
          </div>
          <div
            className="insta"
            onClick={() =>
              window.open("https://www.instagram.com/juniorjubilee__/")
            }
          >
            <img className="insta_logo" src={insta} alt="instagram"></img>
            <span>instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

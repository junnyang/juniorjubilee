import React, { useEffect, useState } from "react";

import logo from "../assets/JJ_logo.png";
import insta from "../assets/Instagram.jpg";

function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="footer_left"></div>
        <div className="footer_right">
          <span className="footer_contents">주니어 쥬빌리</span>
          <span className="footer_contents">
            연락처: 010-3161-8383 | 메일 JuniorJubilee2015@gmail.com
          </span>
          <div
            className="insta"
            onClick={() =>
              window.open("https://www.instagram.com/juniorjubilee__/")
            }
          >
            <img src={insta} alt="instagram"></img>
            <span>instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

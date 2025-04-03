import React, { useEffect, useState } from "react";

import "./styles/Main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Main() {
  return (
    <div className="wrap">
      <Header></Header>
      <div className="contents">
        <div className="banner">
          <h1 className="banner-txt">
            We are
            <br />
            주니어 쥬빌리
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Main;

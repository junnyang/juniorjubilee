import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import "./styles/Main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Apply from "../components/Apply";

function Main() {
  return (
    <div className="wrap">
      <Header></Header>
      <div className="contents">
        <Banner></Banner>
        <div className="empty"></div>
        <Apply></Apply>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Main;

import React, { useEffect, useState } from "react";

import "./styles/Main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Main() {
  return (
    <div className="wrap">
      <Header></Header>
      <div className="contents">
        <div>안녕</div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Main;

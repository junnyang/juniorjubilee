import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Main() {
  return (
    <div className="wrap">
      <Header></Header>
      <div className="contents"></div>
      <Footer></Footer>
    </div>
  );
}

export default Main;

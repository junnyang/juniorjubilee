import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Vision from "../components/Vision";
import Ministry from "../components/Ministry";

function Intro() {
  return (
    <div className="wrap">
      <Header></Header>
      <Vision></Vision>
      <Ministry></Ministry>
      <Footer></Footer>
    </div>
  );
}

export default Intro;

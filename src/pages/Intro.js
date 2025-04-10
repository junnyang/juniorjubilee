import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Vision from "../components/Vision";
import Ministry from "../components/Ministry";
import Server from "../components/Server";

function Intro() {
  return (
    <div className="wrap">
      <Header></Header>
      <Vision></Vision>
      <Ministry></Ministry>
      <Server></Server>
      <Footer></Footer>
    </div>
  );
}

export default Intro;

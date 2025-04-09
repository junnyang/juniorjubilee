import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Campc from "../components/Campc";

function Camp() {
  return (
    <div className="wrap">
      <Header></Header>
      <Campc></Campc>
      <Footer></Footer>
    </div>
  );
}

export default Camp;

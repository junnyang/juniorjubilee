import React, { Component } from "react";

import Poster from "../assets/25 poster.svg";
import "./styles/Campc.css";

export class Camp extends Component {
  render() {
    return (
      <div className="camp">
        <div className="camp-name-div">
          <div className="camp-name">2025</div>
          <div className="camp-name">MISSION COMPLETE</div>
        </div>
        <div className="camp-poster">
          <img className="poster" src={Poster} alt="poster" />
        </div>
      </div>
    );
  }
}

export default Camp;

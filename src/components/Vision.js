import React, { Component } from "react";

import "./styles/Vision.css";
import vision_pic from "../assets/vision.svg";

export class Vision extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="vision">
        <div className="vision-txt">
          <h2>VISION</h2>
        </div>
        <div className="vision-pic-div">
          <img className="vision-pic" src={vision_pic} alt="vision-pic"></img>
        </div>
      </div>
    );
  }
}

export default Vision;

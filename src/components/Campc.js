import React, { Component } from "react";

import Poster from "../assets/26 poster.svg";
import "./styles/Campc.css";

export class Camp extends Component {
  render() {
    return (
      <div className="camp">
        <div className="camp-name-div">
          <div className="camp-name">2026</div>
          <div className="camp-name">하나님의 긍휼</div>
        </div>
        <div className="camp-poster">
          <img
            className="poster"
            src={Poster}
            alt="poster"
            onClick={() => window.open("https://forms.gle/MUSWqQMdefx82QJy5")}
          />
        </div>
      </div>
    );
  }
}

export default Camp;

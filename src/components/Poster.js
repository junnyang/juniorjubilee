import React, { Component } from "react";

import poster from "../assets/25 poster.svg";
import "./styles/Poster.css";
export class Poster extends Component {
  render() {
    return (
      <div className="poster-div">
        <img className="poster" src={poster} alt="poster"></img>
      </div>
    );
  }
}

export default Poster;

import React, { Component } from "react";

import Poster from "../assets/24 poster.svg";

export class Camp extends Component {
  render() {
    return (
      <div className="camp">
        <div className="camp-name"></div>
        <div className="camp-poster">
          <img className="poster" src={Poster} alt="poster" />
        </div>
      </div>
    );
  }
}

export default Camp;

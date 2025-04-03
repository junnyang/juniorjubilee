import React, { Component } from "react";
import "./styles/Banner.css";

export class Banner extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="banner">
        <h1 className="banner-txt">
          We are
          <br />
          주니어 쥬빌리
        </h1>
      </div>
    );
  }
}

export default Banner;

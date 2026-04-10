import React, { Component } from "react";
import "./styles/Apply.css";

export class Apply extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="applys">
        <div
          className="apply"
          onClick={() => window.open("https://forms.gle/MUSWqQMdefx82QJy5")}
        >
          2026 캠프 학생으로 참여하기
        </div>
        <div
          className="apply"
          onClick={() => window.open("https://forms.gle/MUSWqQMdefx82QJy5")}
        >
          2026 캠프 스탭으로 참여하기
        </div>
      </div>
    );
  }
}

export default Apply;

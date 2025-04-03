import React, { Component } from "react";
import "./styles/Apply.css";

export class Apply extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="applys">
        <div className="apply" onClick={() => alert`신청기간이 아닙니다.`}>
          2025 캠프 학생으로 참여하기
        </div>
        <div
          className="apply"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSd8bT-7EbI1-HJWtO3m1pyBpkEp5GPuTN4EDPwsU5VKFjqTHw/viewform"
            )
          }
        >
          2025 캠프 스탭으로 참여하기
        </div>
      </div>
    );
  }
}

export default Apply;

import React, { Component } from "react";

import "./styles/Ministry.css";

export class Ministry extends Component {
  render() {
    return (
      <div className="ministry">
        <div className="mini-head">사역 소개</div>
        <ol className="mini-ol">
          <span>
            <li className="cont-li">1. 청소년 통일 캠프</li>
            <p className="cont-txt">
              매년 여름 7월의 마지막 주, 3박 4일로 캠프를 진행합니다.
            </p>
          </span>
          <span>
            <li className="cont-li">2. 원데이 집회</li>
            <p className="cont-txt">
              지역교회를 방문하여 복음, 통일, 하나님나라를 주제로 청소년 집회를
              진행합니다.
            </p>
          </span>
          <span>
            <li className="cont-li">3. 강사지원</li>
            <p className="cont-txt">
              청소년들에게 기독교 세계관으로 통일 및 복음과 삶에 대한 균형잡힌
              강의를 제공하는 강사 및 콘텐츠를 제공합니다.
            </p>
          </span>
        </ol>
      </div>
    );
  }
}

export default Ministry;

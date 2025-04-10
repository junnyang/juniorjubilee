import React, { Component } from "react";
import "./styles/Server.css";

export class Server extends Component {
  render() {
    return (
      <div className="server">
        <div className="server-head">섬기는 이</div>
        <div className="sever-con">
          <p className="server-txt">이사장 | 황덕영 목사(새중앙교회)</p>
          <p className="server-txt">대표 | 이병철 목사(주향교회)</p>
          <p className="server-txt">부대표 | 박종성 목사(늘사랑교회)</p>
          <p className="server-txt">예배디렉터 | 조성현 목사(일산광림교회)</p>
          <p className="server-txt">사무총장 | 여주현 목사(메이커스교회)</p>
          <p className="server-txt">행정간사 | 신예진전도사(주향교회)</p>
          <p className="server-txt">
            운영스텝 | 문모세, 오준영, 원경빈, 유준범, 유준호, 이슬비, 이하린
          </p>
        </div>
      </div>
    );
  }
}

export default Server;

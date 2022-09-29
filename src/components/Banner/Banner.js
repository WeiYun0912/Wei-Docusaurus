import React from "react";
import styled from "styled-components";
import Github from "../../../static/img/github.svg";
import Youtube from "../../../static/img/youtube.svg";
import Instagram from "../../../static/img/instagram.svg";

import Link from "@docusaurus/Link";
const Banner = () => {
  return (
    <BannerStyled>
      <BannerBox>
        <BannerTitle>Wei's Profile</BannerTitle>
        <BannerRewardTotal>競賽累積獎金：$216,400</BannerRewardTotal>
        <Link to="/docs/intro">
          <BannerPortfolio>我的程式筆記</BannerPortfolio>
        </Link>
        <BannerSocialMedia>
          <Link to="https://github.com/WeiYun0912" style={{ width: "100%" }}>
            <Github stroke="#fff" role="img" />
          </Link>
          <Link
            to="https://www.youtube.com/channel/UCy1Q33r6POsxGTtZcOF--Fw"
            style={{ width: "100%" }}
          >
            <Youtube stroke="#fff" role="img" />
          </Link>
          <Link
            to="https://www.instagram.com/weiwei225/"
            style={{ width: "100%" }}
          >
            <Instagram stroke="#fff" role="img" />
          </Link>
        </BannerSocialMedia>
      </BannerBox>
    </BannerStyled>
  );
};

export default Banner;

const BannerStyled = styled.div`
  width: 100%;
  height: 45vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("img/background.jpg");
  background-repeat: no-repeat;
  background-size: cover; //待調整
  background-position: center;
`;

const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45vh;
`;

const BannerTitle = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 3em;
`;

const BannerRewardTotal = styled.h2`
  color: #fff;
  font-size: 2em;
  margin-top: 30px;
`;

const BannerPortfolio = styled.button`
  padding: 0.5em;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 6px;
  color: #fff;
  background-color: #00c6cf;
  margin-top: 45px;
  border: 1px solid #00c6cf;
  cursor: pointer;
`;

const BannerSocialMedia = styled.div`
  margin-top: 30px;
  width: 200px;
  gap: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

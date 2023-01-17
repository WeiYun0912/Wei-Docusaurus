import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Blockchain from "../../../static/img/blockchain.png";
import WebDevelopment from "../../../static/img/web-development.png";
import MobileDevelopment from "../../../static/img/mobile-development.png";

const FeatureList = [
  {
    title: "網頁應用程式開發",
    imgSrc: WebDevelopment,
    description: (
      <p style={{ textAlign: "justify" }}>
        目前是使用 React 來開發前端應用程式，後端的部分是
        Node.js，大學時期是使用 PHP 框架 Codeigniter 3 (MVC)，資料庫則是使用
        MySQL 和 MongoDB。
      </p>
    ),
  },
  {
    title: "手機應用程式開發",
    imgSrc: MobileDevelopment,
    description: (
      <p style={{ textAlign: "justify" }}>
        目前是使用 React Native 來開發手機應用程式，但使用的經驗較少，只有開發過
        3~4 個 Side Project 。
      </p>
    ),
  },
  {
    title: "區塊鏈應用程式開發",
    imgSrc: Blockchain,
    description: (
      <p style={{ textAlign: "justify" }}>
        在碩士的研究領域是區塊鏈，碩士期間也使用區塊鏈技術開發了一個去中心化二手車交易與管理平台，入圍了
        2021 第 26 屆大專校院資訊應用服務創新競賽亞太中文組。
      </p>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={imgSrc} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h2 style={{ marginTop: "15px" }}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={styles.title}>專長</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Github from "../../../static/img/Github.png";
import Monster from "../../../static/img/Monster.png";

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

const Projects = () => {
  return (
    <div className={styles.features}>
      <div className="container">
        <div style={{ display: "flex" }}>
          <div style={{ width: "55%" }}>
            <img src={Github} className={styles.featureImg} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <h1>Github 主頁面經營</h1>
            <p>1111</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <div style={{ width: "55%" }}>
            <img src={Monster} className={styles.featureImg} />
          </div>
          <div>
            <h1>怪獸電力公司 刻板練習</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

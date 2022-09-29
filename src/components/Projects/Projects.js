import React from "react";
import styles from "./styles.module.css";

const Projects = () => {
  return (
    <div className={styles.features}>
      <div className="container">
        <div style={{ display: "flex" }}>
          <div style={{ width: "55%" }}>
            <img src="img/Github.png" className={styles.featureImg} />
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
            <img src="img/Monster.png" className={styles.featureImg} />
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

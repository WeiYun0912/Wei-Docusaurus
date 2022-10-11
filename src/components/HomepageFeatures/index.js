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
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        veritatis ratione dolores, quia ut nulla enim dolor animi illo eius?
      </>
    ),
  },
  {
    title: "手機應用程式開發",
    imgSrc: MobileDevelopment,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        veritatis ratione dolores, quia ut nulla enim dolor animi illo eius?
      </>
    ),
  },
  {
    title: "區塊鏈應用程式開發",
    imgSrc: Blockchain,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        veritatis ratione dolores, quia ut nulla enim dolor animi illo eius?
      </>
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

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
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "手機應用程式開發",
    imgSrc: MobileDevelopment,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "區塊鏈應用程式開發",
    imgSrc: Blockchain,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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

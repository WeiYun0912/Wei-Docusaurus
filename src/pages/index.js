import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";
import Project from "../helper/Projects.json";
import Skills from "../helper/Skills.json";
import Skill from "../components/Skill/Skill";

import SideProject from "../helper/SideProjects.json";
import Experiences from "../helper/Experiences.json";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "./index.css";
import Experience from "../components/Experience/Experience";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="WeiWei 前端程式教學與筆記"
    >
      <Banner />
      <main>
        <Skill Skills={Skills} />
        <h1
          style={{
            fontSize: "clamp(2rem, 3vw + 1rem, 3rem)",
            textAlign: "center",
            marginBottom: "4rem",
            marginTop: "4rem",
          }}
        >
          求學經歷
        </h1>

        <BrowserOnly fallback={<Loading />}>
          {() => {
            return <Experience Experiences={Experiences} />;
          }}
        </BrowserOnly>

        <Projects ProjectsData={Project} title="曾經參與過的專案 (比賽專題)" />
        <Projects ProjectsData={SideProject} title="個人作品 (Side Projects)" />
      </main>
    </Layout>
  );
}

const Loading = () => (
  <div class="loading">
    <div class="loadingio-spinner-rolling-f1v13ukb9js">
      <div class="ldio-nawj84fd2cd">
        <div></div>
      </div>
    </div>
  </div>
);

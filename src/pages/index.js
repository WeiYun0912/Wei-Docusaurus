import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";
import Project from "../helper/Projects.json";
import SideProject from "../helper/SideProjects.json";
import Experiences from "../helper/Experiences.json";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "./index.css";
import Experience from "../components/Experience/Experience";
import LottieView from "lottie-react";
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Banner />
      <main>
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
        <BrowserOnly
          fallback={
            <LottieView
              style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
              animationData={require("../helper/loading.json")}
              autoPlay
              speed={1}
              loop={true}
            />
          }
        >
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

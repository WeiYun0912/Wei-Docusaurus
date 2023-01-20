import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";
import Project from "../helper/Projects.json";
import SideProject from "../helper/SideProjects.json";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Banner />
      <main>
        <HomepageFeatures />
        <Projects ProjectsData={Project} title="曾經參與過的專案 (比賽專題)" />

        <Projects ProjectsData={SideProject} title="個人作品 (Side Projects)" />
      </main>
    </Layout>
  );
}

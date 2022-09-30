import React from "react";
import styles from "./styles.module.css";

const Projects = ({ ProjectsData, title }) => {
  return (
    <div className={styles.features}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        {ProjectsData?.map((project) => (
          <div
            className={
              project.id % 2 == 0
                ? styles.projectRightBox
                : styles.projectLeftBox
            }
            key={project.id}
          >
            <div className={styles.projectImageSide}>
              <img src={project.projectImage} className={styles.featureImg} />
            </div>
            <div className={styles.projectDescribeSide}>
              <h1 className={styles.projectTitle}>{project.projectTitle}</h1>
              <p className={styles.projectDescribe}>
                {project.projectDescribe}
              </p>
              <div className={styles.projectTechRole}>
                {project?.tech && <p>使用到的技術：{project.tech}</p>}
                {project?.role && <p>擔任的角色：{project.role}</p>}

                {project?.githubUrl && (
                  <p>
                    專案連結：
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      {project.githubUrl}
                    </a>
                  </p>
                )}

                {project?.channelUrl && (
                  <p>
                    頻道連結：
                    <a
                      href={project.channelUrl}
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      {project.channelUrl}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// const ProjectLeftSide = (project) => (
//   <div className={styles.projectLeftBox}>
//     <div className={styles.projectImageSide}>
//       <img src={project.projectImage} />
//     </div>
//     <div className={styles.projectDescribeSide}>
//       <h1 className={styles.projectTitle}>{project.projectTitle}</h1>
//       <p>1111</p>
//     </div>
//   </div>
// );

// const ProjectLeftRight = (project) => (
//   <div className={styles.projectRightBox}>
//     <div className={styles.projectImageSide}>
//       <img src={project.projectImage} />
//     </div>
//     <div className={styles.projectDescribeSide}>
//       <h1 className={styles.projectTitle}>{project.projectTitle}</h1>
//       <p>1111</p>
//     </div>
//   </div>
// );

export default Projects;

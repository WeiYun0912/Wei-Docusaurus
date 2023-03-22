import React from "react";
import styles from "./styles.module.css";
import Tilt from "react-tilt";
const Skill = ({ Skills }) => {
  return (
    <>
      <h1 className={styles.title}>關於我</h1>
      <div className={styles.skillContainer}>
        {Skills?.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </>
  );
};

const SkillCard = ({ name, img, tags }) => {
  return (
    <Tilt className={styles.tilt}>
      <div className={styles.tiltContainer}>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={styles.tiltContentContainer}
        >
          <img src={img} className={styles.tiltImage} />
          <h3 className={styles.tiltTitle}>{name}</h3>
        </div>
        <div className={styles.tiltTags}>
          {tags.map((tag) => (
            <div
              className={styles.tag}
              style={{ backgroundColor: tag.bgColor }}
            >
              <span>{tag.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Tilt>
  );
};

export default Skill;

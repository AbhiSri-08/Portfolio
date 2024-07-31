import React from "react";

import styles from "./education.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <div className={styles.container} id="experience">
      <h2 className={styles.title1}>EDUCATION</h2>
  
      <div className={styles.card}>
        <h1>SSC</h1>
        <p>Bhashyam English Medium High school - Eluru</p>
        <h5>CGPA:10</h5>
      </div>
      <div className={styles.card}>
        <h1>Intermediate</h1>
        <p>Sri Chaitanya Junior College - Eluru</p>
        <h5>Marks:940</h5>
      </div>
      <div className={styles.card}>
        <h1>BTech</h1>
        <p>Vishnu Institute of Technology -Bhimavaram</p>
      </div>
  
  
    </div>
  
  );
};


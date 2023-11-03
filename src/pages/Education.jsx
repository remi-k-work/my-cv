import styles from "./Education.module.css";

import JobExperience from "../components/JobExperience";

function Education() {
  return (
    <div className={styles["education"]}>
      <JobExperience />
    </div>
  );
}

export default Education;

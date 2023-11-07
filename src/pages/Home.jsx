import styles from "./Home.module.css";

import JobExperience from "../components/JobExperience";

function Home() {
  return (
    <div className={styles["home"]}>
      <JobExperience />
    </div>
  );
}

export default Home;

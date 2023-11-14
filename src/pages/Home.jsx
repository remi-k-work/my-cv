import styles from "./Home.module.css";

import JobExperience from "../components/JobExperience";

function Home() {
  return (
    <article className={styles["home"]}>
      <JobExperience />
    </article>
  );
}

export default Home;

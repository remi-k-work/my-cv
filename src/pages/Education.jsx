import styles from "./Education.module.css";

import MyCertificates from "../components/MyCertificates";
import MyEducation from "../components/MyEducation";

function Education() {
  return (
    <article className={styles["education"]}>
      <section>
        <MyCertificates />
      </section>
      <section>
        <MyEducation />
      </section>
    </article>
  );
}

export default Education;

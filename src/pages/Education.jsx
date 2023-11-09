import styles from "./Education.module.css";

import MyCertificates from "../components/MyCertificates";
import MyEducation from "../components/MyEducation";

function Education() {
  return (
    <div className={styles["education"]}>
      <section>
        <MyCertificates />
      </section>
      <section>
        <MyEducation />
      </section>
    </div>
  );
}

export default Education;

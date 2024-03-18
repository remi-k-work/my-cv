// component css styles
import styles from "./Education.module.css";

// components
import MyCertificates from "../components/MyCertificates";
import MyEducation from "../components/MyEducation";

export default function Education() {
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

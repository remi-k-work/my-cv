// component css styles
import styles from "./page.module.css";

// components
import MyCertificates from "@/components/MyCertificates";
import MyEducation from "@/components/MyEducation";

export default async function Page() {
  return (
    <article className={styles["page"]}>
      <section>
        <MyCertificates />
      </section>
      <section>
        <MyEducation />
      </section>
    </article>
  );
}

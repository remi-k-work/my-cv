// component css styles
import styles from "./PageTitle.module.css";

export default function PageTitle({ eyebrow, heading, children }) {
  return (
    <section className={styles["page-title"]}>
      <p className={styles["page-title__eyebrow"]}>{eyebrow}</p>
      <h1 className={styles["page-title__heading"]}>{heading}</h1>
      <p className={styles["page-title__intro"]}>{children}</p>
    </section>
  );
}

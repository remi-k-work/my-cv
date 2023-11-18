import styles from "./PageTitle.module.css";

function PageTitle({ eyebrow, heading, intro }) {
  return (
    <section className={styles["page-title"]}>
      <p className={styles["page-title__eyebrow"]}>{eyebrow}</p>
      <h1 className={styles["page-title__heading"]}>{heading}</h1>
      <p className={styles["page-title__intro"]}>{intro}</p>
    </section>
  );
}

export default PageTitle;

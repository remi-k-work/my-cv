import styles from "./PageTitle.module.css";

function PageTitle({ eyebrow, heading, intro }) {
  return (
    <div className={styles["page-title"]}>
      <p className={styles["page-title__eyebrow"]}>{eyebrow}</p>
      <h1 className={styles["page-title__heading"]}>{heading}</h1>
      <p className={styles["page-title__intro"]}>{intro}</p>
    </div>
  );
}

export default PageTitle;

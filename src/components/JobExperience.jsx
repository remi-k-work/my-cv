import styles from "./JobExperience.module.css";

function JobExperience() {
  return (
    <div className={styles["job-experience"]}>
      <div className={styles["job-experience__job"]}>
        <p className={styles["job-experience__year"]}>2021</p>
        <div className={styles["job-experience__info"]}>
          <h2 className={styles["job-info__role"]}>Sales Engineer</h2>
          <span className={styles["job-info__company"]}>Invinex LLC</span>
        </div>
        <p>This job involved the engineering of sales, which I am not totally sure what that means, but it is important.</p>
      </div>

      <div className={styles["job-experience__job"]}>
        <p className={styles["job-experience__year"]}>2021</p>
        <div className={styles["job-experience__info"]}>
          <h2 className={styles["job-info__role"]}>Sales Engineer</h2>
          <span className={styles["job-info__company"]}>Invinex LLC</span>
        </div>
        <p>This job involved the engineering of sales, which I am not totally sure what that means, but it is important.</p>
      </div>

      <div className={styles["job-experience__job"]}>
        <p className={styles["job-experience__year"]}>2021</p>
        <div className={styles["job-experience__info"]}>
          <h2 className={styles["job-info__role"]}>Sales Engineer</h2>
          <span className={styles["job-info__company"]}>Invinex LLC</span>
        </div>
        <p>This job involved the engineering of sales, which I am not totally sure what that means, but it is important.</p>
      </div>

      <div className={styles["job-experience__job"]}>
        <p className={styles["job-experience__year"]}>2021</p>
        <div className={styles["job-experience__info"]}>
          <h2 className={styles["job-info__role"]}>Sales Engineer</h2>
          <span className={styles["job-info__company"]}>Invinex LLC</span>
        </div>
        <p>This job involved the engineering of sales, which I am not totally sure what that means, but it is important.</p>
      </div>
    </div>
  );
}

export default JobExperience;

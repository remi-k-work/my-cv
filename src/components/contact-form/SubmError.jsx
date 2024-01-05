// component css styles
import styles from "./SubmError.module.css";

export default function SubmError({ error }) {
  return (
    <div className={styles["subm-error"]}>
      <h2>There was an Error</h2>
      <p>{error}</p>
      <p>Please try again!</p>
    </div>
  );
}

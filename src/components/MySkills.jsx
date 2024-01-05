// component css styles
import styles from "./MySkills.module.css";

// assets
import * as assets from "../assets/my-skills";

export default function MySkills() {
  return (
    <article className={styles["my-skills"]}>
      <ul className={styles["my-skills__list"]}>
        <li>
          <img src={assets.html} width="48" height="48" alt="HTML" />
          HTML
        </li>
        <li>
          <img src={assets.css} width="48" height="48" alt="CSS" />
          CSS
        </li>
        <li>
          <img src={assets.javascript} width="48" height="48" alt="JavaScript" />
          JavaScript
        </li>
        <li>
          <img src={assets.react} width="48" height="48" alt="React" />
          React
        </li>
        <li>
          <img src={assets.inkscape} width="48" height="48" alt="Inkscape" />
          Inkscape
        </li>
      </ul>
    </article>
  );
}

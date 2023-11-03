import styles from "./MySkills.module.css";

import html from "../assets/components/my-skills/html.svg";
import css from "../assets/components/my-skills/css.svg";
import javascript from "../assets/components/my-skills/javascript.svg";
import react from "../assets/components/my-skills/react.svg";
import inkscape from "../assets/components/my-skills/inkscape.svg";

function MySkills() {
  return (
    <div className={styles["my-skills"]}>
      <ul className={styles["my-skills__list"]}>
        <li>
          <img src={html} width="48" height="48" alt="HTML" />
          HTML
        </li>
        <li>
          <img src={css} width="48" height="48" alt="CSS" />
          CSS
        </li>
        <li>
          <img src={javascript} width="48" height="48" alt="JavaScript" />
          JavaScript
        </li>
        <li>
          <img src={react} width="48" height="48" alt="React" />
          React
        </li>
        <li>
          <img src={inkscape} width="48" height="48" alt="Inkscape" />
          Inkscape
        </li>
      </ul>
    </div>
  );
}

export default MySkills;

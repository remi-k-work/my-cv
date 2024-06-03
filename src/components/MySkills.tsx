// component css styles
import styles from "./MySkills.module.css";

// next
import Image from "next/image";

// assets
import * as assets from "../assets/my-skills";

export default function MySkills() {
  return (
    <article className={styles["my-skills"]}>
      <ul className={styles["my-skills__list"]}>
        <li>
          <Image src={assets.html} width="48" height="48" alt="HTML" className={styles["html"]} />
        </li>
        <li>
          <Image src={assets.css} width="48" height="48" alt="CSS" className={styles["css"]} />
        </li>
        <li className={styles["stack"]}>
          <Image src={assets.javascript} width="48" height="48" alt="JavaScript" className={styles["javascript"]} />
          <Image src={assets.typescript} width="48" height="48" alt="TypeScript" className={styles["typescript"]} />
        </li>
        <li className={styles["stack"]}>
          <Image src={assets.react} width="48" height="48" alt="React" className={styles["react"]} />
          <Image src={assets.nextjs} width="48" height="48" alt="NextJS" className={styles["nextjs"]} />
        </li>
        <li className={styles["stack"]}>
          <Image src={assets.inkscape} width="48" height="48" alt="Inkscape" className={styles["inkscape"]} />
          <Image src={assets.gimp} width="48" height="48" alt="GIMP" className={styles["gimp"]} />
        </li>
      </ul>
    </article>
  );
}

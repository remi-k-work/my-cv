// component css styles
import styles from "./page.module.css";

// components
import ExperienceSlider from "@/components/ExperienceSlider";

export default async function Page() {
  return (
    <article className={styles["page"]}>
      <section>
        <ExperienceSlider type={"e"} />
      </section>
      <section>
        <ExperienceSlider type={"p"} />
      </section>
    </article>
  );
}

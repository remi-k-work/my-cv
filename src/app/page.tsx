// component css styles
import styles from "./page.module.css";

// node.js
import { promises as fs } from "fs";
import path from "path";

// components
import ExperienceSlider from "@/components/ExperienceSlider";

export default async function Page() {
  // Obtain a list of all job experiences from an outside source
  const [fileExp, filePor] = await Promise.all([
    fs.readFile(path.join("./src/app/data/", "experience.json"), "utf8"),
    fs.readFile(path.join("./src/app/data/", "portfolio-projects.json"), "utf8"),
  ]);
  const listExp = JSON.parse(fileExp) as JobExperience[];
  const listPor = JSON.parse(filePor) as JobExperience[];

  return (
    <article className={styles["page"]}>
      <section>
        <header>Experience</header>
        <ExperienceSlider type={"e"} jobExperienceList={[...listExp].reverse()} />
      </section>
      <section>
        <header>Portfolio Projects</header>
        <ExperienceSlider type={"p"} jobExperienceList={listPor} />
      </section>
    </article>
  );
}

// component css styles
import styles from "./Home.module.css";

// rrd imports
import { useLoaderData } from "react-router-dom";

// components
import ExperienceSlider from "../components/ExperienceSlider";

export default function Home() {
  const jobExperienceList = useLoaderData() as [JobExperience[], JobExperience[]];

  return (
    <article className={styles["home"]}>
      <section>
        <header>Experience</header>
        <ExperienceSlider jobExperienceList={[...jobExperienceList[0]].reverse()} />
      </section>
      <section>
        <header>Portfolio Projects</header>
        <ExperienceSlider jobExperienceList={jobExperienceList[1]} />
      </section>
    </article>
  );
}

// loader
export async function homeLoader(): Promise<[JobExperience[], JobExperience[]]> {
  // Obtain a list of all job experiences from an outside source
  const resExperience = await fetch("/data/experience.json");
  if (!resExperience.ok) {
    throw new Error("Unable to load data.");
  }
  const resPortfolio = await fetch("/data/portfolio-projects.json");
  if (!resPortfolio.ok) {
    throw new Error("Unable to load data.");
  }

  return [await resExperience.json(), await resPortfolio.json()] as [JobExperience[], JobExperience[]];
}

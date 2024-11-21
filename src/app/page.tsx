// component css styles
import styles from "./page.module.css";

// other libraries
import DataLoader from "@/lib/DataLoader";

// components
import ExperienceSlider from "@/components/ExperienceSlider";

export default async function Page() {
  // Obtain a list of all job experiences from an outside source
  const dataLoader = await DataLoader.init();
  const [listExp, listPor] = await dataLoader.allExperiences();

  return (
    <article className={styles["page"]}>
      <section>
        <header>
          <span>{dataLoader.localizedContent["pageHome"]["experience"]}</span>
        </header>
        <ExperienceSlider type={"e"} jobExperienceList={listExp} />
      </section>
      <section>
        <header>
          <span>{dataLoader.localizedContent["pageHome"]["portfolioProjects"]}</span>
        </header>
        <ExperienceSlider type={"p"} jobExperienceList={listPor} />
      </section>
    </article>
  );
}

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
        <header>{dataLoader.localizedContent["pageHome"]["experience"]}</header>
        <ExperienceSlider localizedContent={dataLoader.localizedContent} type={"e"} jobExperienceList={listExp} />
      </section>
      <section>
        <header>{dataLoader.localizedContent["pageHome"]["portfolioProjects"]}</header>
        <ExperienceSlider localizedContent={dataLoader.localizedContent} type={"p"} jobExperienceList={listPor} />
      </section>
    </article>
  );
}

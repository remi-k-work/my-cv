// component css styles
import styles from "./Home.module.css";

// rrd imports
import { useLoaderData, useRouteLoaderData, useLocation } from "react-router-dom";

// other libraries
import { useRootContext } from "../layouts/Root";

// components
import PageTitle from "../components/PageTitle";
import JobExperienceList from "../components/JobExperienceList";

// assets
import avatar from "../assets/components/page-title/avatar.jpg";

export default function Home() {
  const pageTitles = useRouteLoaderData("root") as PageTitles;
  const jobExperienceList = useLoaderData() as [JobExperience[], JobExperience[]];
  const location = useLocation();

  const { isTypedHome, setIsTypedHome } = useRootContext();

  // Get the current page title data depending on the pathname of the location
  const pageTitle = pageTitles[location.pathname];

  return (
    <>
      <PageTitle {...pageTitle} isFinished={isTypedHome} onFinished={() => setIsTypedHome(true)}>
        {/* Show the avatar only on the homepage */}
        <img src={avatar} width={288} height={288} alt="Avatar" />
      </PageTitle>

      <article className={styles["home"]}>
        <section>
          <header>Experience</header>
          <JobExperienceList jobExperienceList={[...jobExperienceList[0]].reverse()} />
        </section>
        <section>
          <header>Portfolio Projects</header>
          <JobExperienceList jobExperienceList={jobExperienceList[1]} />
        </section>
      </article>
    </>
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

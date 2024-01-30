// component css styles
import styles from "./Home.module.css";

// rrd imports
import { useLoaderData } from "react-router-dom";

// components
import JobExperienceList from "../components/JobExperienceList";

export default function Home() {
  const jobExperienceList = useLoaderData();

  return (
    <article className={styles["home"]}>
      <JobExperienceList jobExperienceList={jobExperienceList.toReversed()} />
    </article>
  );
}

// loader
export async function homeLoader() {
  // Obtain a list of all job experiences from an outside source
  const response = await fetch("/data/job-experience-list.json");
  if (!response.ok) {
    throw new Error("Unable to load data.");
  }

  const data = await response.json();
  return data;
}

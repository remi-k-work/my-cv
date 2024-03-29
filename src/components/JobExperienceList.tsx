// component css styles
import styles from "./JobExperienceList.module.css";

// react
import { useRef, useState } from "react";

// components
import SingleJobExperience from "./SingleJobExperience";

// types
interface JobExperienceListProps {
  jobExperienceList: JobExperience[];
}

export default function JobExperienceList({ jobExperienceList }: JobExperienceListProps) {
  const allJobNodesListRef = useRef(new Map<number, HTMLElement>());
  const [viewedJobIndex, setViewedJobIndex] = useState(0);

  function handleViewedJobSwitch(direction: number, verticalAlignment: ScrollLogicalPosition) {
    setViewedJobIndex((prevViewedJobIndex) => {
      const allJobNodesList = allJobNodesListRef.current;
      const newViewedJobIndex = Math.min(Math.max(prevViewedJobIndex + direction, 0), allJobNodesList.size - 1);
      const viewedJobNode = allJobNodesList.get(newViewedJobIndex);
      if (viewedJobNode) {
        viewedJobNode.scrollIntoView({ behavior: "auto", block: verticalAlignment, inline: "center" });
      }
      return newViewedJobIndex;
    });
  }

  function addThisJobNodeRef(jobIndex: number, jobNode: HTMLElement | null) {
    const allJobNodesList = allJobNodesListRef.current;
    if (jobNode) {
      allJobNodesList.set(jobIndex, jobNode);
    } else {
      allJobNodesList.delete(jobIndex);
    }
  }

  return (
    <section className={styles["job-experience-list"]}>
      <button className={styles["job-experience-list__pjobt"]} type="button" onClick={() => handleViewedJobSwitch(-1, "nearest")}>
        &laquo; Prev
      </button>
      <span className={styles["job-experience-list__cjobt"]}>
        {viewedJobIndex + 1} of {jobExperienceList.length}
      </span>
      <button className={styles["job-experience-list__njobt"]} type="button" onClick={() => handleViewedJobSwitch(+1, "nearest")}>
        Next &raquo;
      </button>
      <div className={styles["job-experience-list__view"]}>
        {jobExperienceList.map((singleJobExperience, jobIndex) => {
          return <SingleJobExperience key={jobIndex} ref={(jobNode) => addThisJobNodeRef(jobIndex, jobNode)} {...singleJobExperience} />;
        })}
      </div>
      <button className={styles["job-experience-list__pjobb"]} type="button" onClick={() => handleViewedJobSwitch(-1, "nearest")}>
        &laquo; Prev
      </button>
      <span className={styles["job-experience-list__cjobb"]}>
        {viewedJobIndex + 1} of {jobExperienceList.length}
      </span>
      <button className={styles["job-experience-list__njobb"]} type="button" onClick={() => handleViewedJobSwitch(+1, "nearest")}>
        Next &raquo;
      </button>
    </section>
  );
}

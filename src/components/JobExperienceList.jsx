// component css styles
import styles from "./JobExperienceList.module.css";

// react
import { useEffect, useRef, useState } from "react";

// components
import SingleJobExperience from "./SingleJobExperience";

export default function JobExperienceList({ jobExperienceList }) {
  const allJobNodesListRef = useRef(new Map());
  const [viewedJobIndex, setViewedJobIndex] = useState(0);
  const [totalJobsNumber, setTotalJobsNumber] = useState(0);

  useEffect(() => {
    const allJobNodesList = allJobNodesListRef.current;
    setTotalJobsNumber(allJobNodesList.size);
  }, []);

  function handleViewedJobSwitch(direction) {
    setViewedJobIndex((prevViewedJobIndex) => {
      const allJobNodesList = allJobNodesListRef.current;
      const newViewedJobIndex = Math.min(Math.max(prevViewedJobIndex + direction, 0), allJobNodesList.size - 1);
      const viewedJobNode = allJobNodesList.get(newViewedJobIndex);
      viewedJobNode.scrollIntoView({ behavior: "auto", block: "nearest", inline: "center" });
      return newViewedJobIndex;
    });
  }

  function addThisJobNodeRef(jobIndex, jobNode) {
    const allJobNodesList = allJobNodesListRef.current;
    if (jobNode) {
      allJobNodesList.set(jobIndex, jobNode);
    } else {
      allJobNodesList.delete(jobIndex);
    }
  }

  return (
    <section className={styles["job-experience-list"]}>
      <button type="button" onClick={() => handleViewedJobSwitch(-1)}>
        Prev
        <br />
        {viewedJobIndex + 1}/{totalJobsNumber}
      </button>
      <div className={styles["job-experience-list__view"]}>
        {jobExperienceList.map((singleJobExperience, jobIndex) => {
          return <SingleJobExperience key={jobIndex} ref={(jobNode) => addThisJobNodeRef(jobIndex, jobNode)} {...singleJobExperience} />;
        })}
      </div>
      <button type="button" onClick={() => handleViewedJobSwitch(+1)}>
        Next
        <br />
        {viewedJobIndex + 1}/{totalJobsNumber}
      </button>
    </section>
  );
}

"use client";

// component css styles
import styles from "./ExperienceSlider.module.css";

// react
import { useState } from "react";

// other libraries
import clsx from "clsx";

// components
import ExperienceSlide from "./ExperienceSlide";

// assets
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, CubeIcon, CubeTransparentIcon } from "@heroicons/react/24/solid";

// types
interface ExperienceSliderProps {
  type: "e" | "p";
  jobExperienceList: JobExperience[];
}

export default function ExperienceSlider({ type, jobExperienceList }: ExperienceSliderProps) {
  const [viewedJobIndex, setViewedJobIndex] = useState(0);

  function handleNextExpClicked() {
    setViewedJobIndex((index) => {
      if (index === jobExperienceList.length - 1) return 0;
      return index + 1;
    });
  }

  function handlePrevExpClicked() {
    setViewedJobIndex((index) => {
      if (index === 0) return jobExperienceList.length - 1;
      return index - 1;
    });
  }

  return (
    <section className={styles["experience-slider"]}>
      <button type="button" className={clsx(styles["experience-slider__pjob"], styles["experience-slider__button"])} onClick={handlePrevExpClicked}>
        <ArrowLeftCircleIcon width={24} height={24} />
      </button>
      <button type="button" className={clsx(styles["experience-slider__njob"], styles["experience-slider__button"])} onClick={handleNextExpClicked}>
        <ArrowRightCircleIcon width={24} height={24} />
      </button>
      <header className={styles["experience-slider__cjobt"]}>
        {jobExperienceList.map((_, jobIndex) => (
          <button key={jobIndex} type="button" className={styles["experience-slider__button-dot"]} onClick={() => setViewedJobIndex(jobIndex)}>
            {viewedJobIndex === jobIndex ? <CubeIcon width={24} height={24} /> : <CubeTransparentIcon width={24} height={24} />}
          </button>
        ))}
      </header>
      <footer className={styles["experience-slider__cjobb"]}>
        {jobExperienceList.map((_, jobIndex) => (
          <button key={jobIndex} type="button" className={styles["experience-slider__button-dot"]} onClick={() => setViewedJobIndex(jobIndex)}>
            {viewedJobIndex === jobIndex ? <CubeIcon width={24} height={24} /> : <CubeTransparentIcon width={24} height={24} />}
          </button>
        ))}
      </footer>
      <div className={styles["experience-slider__view"]}>
        {jobExperienceList.map((singleJobExperience, jobIndex) => (
          <ExperienceSlide key={jobIndex} type={type} index={jobIndex} experience={singleJobExperience} style={{ translate: `${-100 * viewedJobIndex}%` }} />
        ))}
      </div>
    </section>
  );
}

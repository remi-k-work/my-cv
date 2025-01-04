"use client";

// component css styles
import styles from "./ExperienceSlider.module.css";

// react
import { useState } from "react";

// other libraries
import clsx from "clsx";
import { useGlobalContext } from "@/lib/GlobalContext";

// components
import ExperienceSlide from "./ExperienceSlide";

// assets
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, CubeIcon, CubeTransparentIcon } from "@heroicons/react/24/solid";

// types
interface ExperienceSliderProps {
  type: "e" | "p";
}

export default function ExperienceSlider({ type }: ExperienceSliderProps) {
  const {
    localizedContent,
    allExperiences: [listExp, listPor],
  } = useGlobalContext();
  const [viewedJobIndex, setViewedJobIndex] = useState(0);

  const jobExperienceList = type === "e" ? listExp : listPor;

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
    <figure className={styles["experience-slider"]}>
      <figcaption>{type === "e" ? localizedContent["pageHome"]["experience"] : localizedContent["pageHome"]["portfolioProjects"]}</figcaption>
      <button type="button" className={clsx(styles["experience-slider__pjobt"], styles["experience-slider__button"])} onClick={handlePrevExpClicked}>
        <ArrowLeftCircleIcon width={24} height={24} />
      </button>
      <button type="button" className={clsx(styles["experience-slider__njobt"], styles["experience-slider__button"])} onClick={handleNextExpClicked}>
        <ArrowRightCircleIcon width={24} height={24} />
      </button>
      <button type="button" className={clsx(styles["experience-slider__pjobb"], styles["experience-slider__button"])} onClick={handlePrevExpClicked}>
        <ArrowLeftCircleIcon width={24} height={24} />
      </button>
      <button type="button" className={clsx(styles["experience-slider__njobb"], styles["experience-slider__button"])} onClick={handleNextExpClicked}>
        <ArrowRightCircleIcon width={24} height={24} />
      </button>
      <header>
        {jobExperienceList.map((_, jobIndex) => (
          <button key={jobIndex} type="button" className={styles["experience-slider__button-dot"]} onClick={() => setViewedJobIndex(jobIndex)}>
            {viewedJobIndex === jobIndex ? <CubeIcon width={24} height={24} /> : <CubeTransparentIcon width={24} height={24} />}
          </button>
        ))}
      </header>
      <footer>
        {jobExperienceList.map((_, jobIndex) => (
          <button key={jobIndex} type="button" className={styles["experience-slider__button-dot"]} onClick={() => setViewedJobIndex(jobIndex)}>
            {viewedJobIndex === jobIndex ? <CubeIcon width={24} height={24} /> : <CubeTransparentIcon width={24} height={24} />}
          </button>
        ))}
      </footer>
      <article>
        {jobExperienceList.map((singleJobExperience, jobIndex) => (
          <ExperienceSlide key={jobIndex} type={type} index={jobIndex} experience={singleJobExperience} style={{ translate: `${-100 * viewedJobIndex}%` }} />
        ))}
      </article>
    </figure>
  );
}

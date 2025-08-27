"use client";

// react
import { useState } from "react";

// other libraries
import { cn } from "@/lib/utils";
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
    <figure className="mx-auto grid w-full max-w-xl grid-cols-[auto_1fr_auto] grid-rows-[auto_auto_1fr_auto] gap-1 [grid-template-areas:'hdr_hdr_hdr''pjobt_cjobt_njobt''jview_jview_jview''pjobb_cjobb_njobb']">
      <figcaption className="bg-clr-primary-300 mb-4 place-self-end rounded-ss-xl rounded-ee-xl p-3 italic [grid-area:hdr]">
        {type === "e" ? localizedContent["pageHome"]["experience"] : localizedContent["pageHome"]["portfolioProjects"]}
      </figcaption>
      <button
        type="button"
        className="text-clr-primary-300 border-clr-primary-700 hover:text-clr-primary-200 hover:border-clr-primary-200 rounded-xl border p-2 [grid-area:pjobt]"
        onClick={handlePrevExpClicked}
      >
        <ArrowLeftCircleIcon className="size-9" />
      </button>
      <button
        type="button"
        className="text-clr-primary-300 border-clr-primary-700 hover:text-clr-primary-200 hover:border-clr-primary-200 rounded-xl border p-2 [grid-area:njobt]"
        onClick={handleNextExpClicked}
      >
        <ArrowRightCircleIcon className="size-9" />
      </button>
      <button
        type="button"
        className="text-clr-primary-300 border-clr-primary-700 hover:text-clr-primary-200 hover:border-clr-primary-200 rounded-xl border p-2 [grid-area:pjobb]"
        onClick={handlePrevExpClicked}
      >
        <ArrowLeftCircleIcon className="size-9" />
      </button>
      <button
        type="button"
        className="text-clr-primary-300 border-clr-primary-700 hover:text-clr-primary-200 hover:border-clr-primary-200 rounded-xl border p-2 [grid-area:njobb]"
        onClick={handleNextExpClicked}
      >
        <ArrowRightCircleIcon className="size-9" />
      </button>
      <header className="flex flex-wrap items-center justify-center gap-2 place-self-center [grid-area:cjobt]">
        {jobExperienceList.map((_, jobIndex) => (
          <button
            key={jobIndex}
            type="button"
            className={cn(
              "text-clr-primary-300 border-clr-primary-700 hover:text-clr-primary-200 hover:border-clr-primary-200 rounded-xl border p-2",
              viewedJobIndex === jobIndex && "text-clr-primary-200",
            )}
            onClick={() => setViewedJobIndex(jobIndex)}
          >
            {viewedJobIndex === jobIndex ? <CubeIcon className="size-9" /> : <CubeTransparentIcon className="size-9" />}
          </button>
        ))}
      </header>
      <footer className="flex flex-wrap items-center justify-center gap-2 place-self-center [grid-area:cjobb]">
        {jobExperienceList.map((_, jobIndex) => (
          <button
            key={jobIndex}
            type="button"
            className={cn(
              "text-clr-primary-300 border-clr-primary-700 hover:text-clr-primary-200 hover:border-clr-primary-200 rounded-xl border p-2",
              viewedJobIndex === jobIndex && "text-clr-primary-200",
            )}
            onClick={() => setViewedJobIndex(jobIndex)}
          >
            {viewedJobIndex === jobIndex ? <CubeIcon className="size-9" /> : <CubeTransparentIcon className="size-9" />}
          </button>
        ))}
      </footer>
      <article className="flex overflow-x-hidden [grid-area:jview]">
        {jobExperienceList.map((singleJobExperience, jobIndex) => (
          <ExperienceSlide key={jobIndex} type={type} index={jobIndex} experience={singleJobExperience} style={{ translate: `${-100 * viewedJobIndex}%` }} />
        ))}
      </article>
    </figure>
  );
}

// components
import SlideSeo from "./slide/SeoVer";

// types
import type { JobExperience, LocalizedContent } from "@/types/shared";

interface ExperienceSliderSeoProps {
  localizedContent: LocalizedContent;
  allExperiences: [JobExperience[], JobExperience[]];
  type: "e" | "p";
}

export default function ExperienceSliderSeo({ localizedContent, allExperiences, type }: ExperienceSliderSeoProps) {
  return (
    <article className="sr-only">
      {allExperiences[type === "e" ? 0 : 1].map((singleJobExperience, jobIndex) => (
        <SlideSeo key={jobIndex} localizedContent={localizedContent} type={type} index={jobIndex} experience={singleJobExperience} />
      ))}
    </article>
  );
}

// next
import Link from "next/link";

// components
import Header from "./Header";
import ScreenShots from "./ScreenShots";
import SkillsUsed from "./SkillsUsed";

// types
import type { JobExperience, LocalizedContent } from "@/types/shared";

interface ExperienceDetailsProps {
  localizedContent: LocalizedContent;
  allExperiences: [JobExperience[], JobExperience[]];
  type: "e" | "p";
  index: number;
}

export default function ExperienceDetails({ localizedContent, allExperiences, type, index }: ExperienceDetailsProps) {
  const experience = allExperiences[type === "e" ? 0 : 1][index];
  const { txt, liveLink } = experience;

  return (
    <article className="bg-clr-primary-800 container rounded-xl p-3">
      <Header localizedContent={localizedContent} experience={experience} />
      {liveLink ? (
        <Link href={liveLink} target="_blank">
          <ScreenShots experience={experience} />
        </Link>
      ) : (
        <ScreenShots experience={experience} />
      )}
      <SkillsUsed localizedContent={localizedContent} experience={experience} />
      <p className="text-center sm:text-justify">{txt}</p>
    </article>
  );
}

// next
import Link from "next/link";

// components
import Header from "./Header";
import ScreenShots from "./ScreenShots";
import SkillsUsed from "./SkillsUsed";
import TypeWriterOutput from "@/components/TypeWriterOutput";

// types
import type { JobExperience, LocalizedContent } from "@/types/shared";
import type { UrlObject } from "url";

interface ExperienceDetailsProps {
  localizedContent: LocalizedContent;
  allExperiences: [JobExperience[], JobExperience[]];
  type: "e" | "p";
  index: number;
}

export default function ExperienceDetails({ localizedContent, allExperiences, type, index }: ExperienceDetailsProps) {
  const experience = allExperiences[type === "e" ? 0 : 1][index];
  const { txt, liveLink } = experience;

  // Split the full text into an array of pragraphs
  const paras = txt.split(". ");

  return (
    <article className="bg-clr-primary-800 mx-auto w-full max-w-4xl rounded-xl p-3">
      <Header localizedContent={localizedContent} experience={experience} />
      {liveLink ? (
        <Link href={liveLink as UrlObject} target="_blank">
          <ScreenShots experience={experience} />
        </Link>
      ) : (
        <ScreenShots experience={experience} />
      )}
      <SkillsUsed localizedContent={localizedContent} experience={experience} />
      <footer className="min-h-72">
        {paras.map((para, index) => (
          <TypeWriterOutput key={index} fullText={para + (index < paras.length - 1 ? "." : "")} />
        ))}
      </footer>
    </article>
  );
}

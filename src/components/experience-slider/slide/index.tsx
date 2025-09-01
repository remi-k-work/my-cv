// next
import Link from "next/link";

// components
import Header from "./Header";
import ScreenShots from "./ScreenShots";

// types
import type { JobExperience, LocalizedContent } from "@/types/shared";

interface SlideProps {
  localizedContent: LocalizedContent;
  type: "e" | "p";
  index: number;
  experience: JobExperience;
}

export default function Slide({ localizedContent, type, index, experience, experience: { liveLink } }: SlideProps) {
  return (
    <article className="bg-background rounded-xl p-3 select-none">
      <Header localizedContent={localizedContent} type={type} index={index} experience={experience} />
      {liveLink ? (
        <Link href={liveLink} target="_blank">
          <ScreenShots experience={experience} />
        </Link>
      ) : (
        <ScreenShots experience={experience} />
      )}
    </article>
  );
}

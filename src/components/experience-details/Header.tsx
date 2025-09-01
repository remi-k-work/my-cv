// next
import Link from "next/link";

// assets
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import GitHubIcon from "@/assets/icons/GitHub";

// types
import type { JobExperience, LocalizedContent } from "@/types/shared";

interface HeaderProps {
  localizedContent: LocalizedContent;
  experience: JobExperience;
}

export default function Header({ localizedContent, experience: { year, role, company, gitHubLink, liveLink } }: HeaderProps) {
  return (
    <header className="mb-4 flex min-h-28 gap-4 xl:min-h-auto">
      <section className="flex-4">
        <p className="text-accent-foreground text-sm font-semibold tracking-widest">{year}</p>
        <h2 className="text-xl">{role}</h2>
        <p className="text-clr-primary-200">{company}</p>
      </section>
      <section className="flex-3">
        <div className="flex flex-wrap items-center justify-end gap-2">
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              title={localizedContent["experienceSlide"]["liveLink"]}
              className="text-primary-foreground border-primary-foreground hover:text-accent-foreground hover:border-accent-foreground rounded-full border p-1 hover:scale-110"
            >
              <GlobeAltIcon className="size-11" />
            </Link>
          )}
          {gitHubLink && (
            <Link
              href={gitHubLink}
              target="_blank"
              title={localizedContent["experienceSlide"]["goAndSee"]}
              prefetch={false}
              className="text-primary-foreground border-primary-foreground hover:text-accent-foreground hover:border-accent-foreground rounded-full border p-1 hover:scale-110"
            >
              <GitHubIcon className="size-11" />
            </Link>
          )}
        </div>
      </section>
    </header>
  );
}

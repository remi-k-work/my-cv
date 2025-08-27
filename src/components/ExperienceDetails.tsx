"use client";

// next
import Image from "next/image";
import Link from "next/link";

// other libraries
import { useGlobalContext } from "@/lib/GlobalContext";

// components
// import TypeWriterOutput from "./TypeWriterOutput";

// assets
import { GlobeAltIcon } from "@heroicons/react/24/solid";

// types
import type { JobExperience } from "@/types/shared";

interface ExperienceDetailsProps {
  type: "e" | "p";
  index: number;
}

export default function ExperienceDetails({ type, index }: ExperienceDetailsProps) {
  const {
    localizedContent,
    allExperiences: [listExp, listPor],
  } = useGlobalContext();

  let experience: JobExperience | undefined = undefined;
  if (type === "e") {
    experience = listExp[index];
  } else if (type === "p") {
    experience = listPor[index];
  }

  // Ensure the experience exists
  // To prevent receiving the "cannot destructure property of undefined" exception, do not attempt to render anything
  if (!experience) return null;
  const { year, role, company, txt, gitHubLink, liveLink, lgPic, skillsUsed } = experience;

  return (
    <article className="bg-clr-primary-800 container rounded-xl p-3 transition-transform duration-1000 ease-in-out">
      <header className="mb-4 flex min-h-28 gap-4 sm:min-h-auto">
        <section className="flex-4">
          <p className="text-clr-accent-400 text-sm font-semibold tracking-widest">{year}</p>
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
                className="text-clr-primary-300 border-clr-primary-300 hover:text-clr-accent-400 hover:border-clr-accent-400 rounded-full border p-1 hover:scale-110"
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
                className="text-clr-primary-300 border-clr-primary-300 hover:text-clr-accent-400 hover:border-clr-accent-400 rounded-full border p-1 hover:scale-110"
              >
                <svg viewBox="0 0 24 24" className="size-11">
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
              </Link>
            )}
          </div>
        </section>
      </header>
      {liveLink ? (
        <Link href={liveLink} target="_blank">
          <Image src={`/images/${lgPic}`} width={1200} height={1187} alt={role} />
        </Link>
      ) : (
        <Image src={`/images/${lgPic}`} width={1200} height={1187} alt={role} />
      )}
      <aside className="my-4">
        <h4 className="text-clr-accent-400 text-sm font-semibold tracking-widest">{localizedContent["experienceDetails"]["skillsUsed"]}</h4>
        <ul className="flex list-none flex-wrap items-center sm:justify-around">
          {skillsUsed.map((skillUsed, skillIndex) => (
            <li key={skillIndex} className="before:text-clr-accent-400 odd:text-clr-primary-200 even:text-clr-primary-300 before:mx-2 before:content-['●']">
              {skillUsed}
            </li>
          ))}
        </ul>
      </aside>
      <p className="text-center sm:text-justify">{txt}</p>
    </article>
  );
}

// component css styles
import styles from "./ExperienceDetails.module.css";

// next
import Image from "next/image";
import Link from "next/link";

// other libraries
import clsx from "clsx";
import DataLoader from "@/lib/DataLoader";

// types
interface ExperienceDetailsProps {
  type: "e" | "p";
  index: number;
}

export default async function ExperienceDetails({ type, index }: ExperienceDetailsProps) {
  // Obtain a list of all job experiences from an outside source
  const dataLoader = await DataLoader.init();
  const [listExp, listPor] = await dataLoader.allExperiences();

  const { localizedContent } = dataLoader;

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
    <article className={styles["experience-details"]}>
      <header className="mb-4 flex flex-col xl:flex-row xl:place-items-center xl:gap-4">
        <div className="flex-1">
          <p className={styles["experience-details__year"]}>{year}</p>
          <h2 className={styles["experience-details__role"]}>{role}</h2>
        </div>
        <div className={clsx(styles["experience-details__company"], "flex-none xl:text-end")}>{company}</div>
      </header>

      <footer className={styles["experience-details__live-link"]}>
        <Link href={liveLink} target="_blank" className={clsx(styles["live-link__img"], "transition-shadow hover:shadow-xl")}>
          <Image src={`/images/${lgPic}`} width={1200} height={1187} alt={role} className="w-full object-contain" />
        </Link>
        {gitHubLink && (
          <div className={styles["live-link__inf"]}>
            <Link href={gitHubLink} target="_blank" title={localizedContent["experienceDetails"]["goAndSee"]} prefetch={false}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </Link>
          </div>
        )}
        <aside className={styles["live-link__skl"]}>
          <h4>{localizedContent["experienceDetails"]["skillsUsed"]}</h4>
          <ul className="flex list-inside list-disc flex-wrap gap-x-4">
            {skillsUsed.map((skillUsed, skillIndex) => (
              <li key={skillIndex}>{skillUsed}</li>
            ))}
          </ul>
        </aside>
      </footer>

      <br />
      <p>{txt}</p>
    </article>
  );
}

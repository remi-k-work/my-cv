// component css styles
import styles from "./ExperienceDetails.module.css";

// next
import Image from "next/image";
import Link from "next/link";

// other libraries
import clsx from "clsx";
import DataLoader from "@/lib/DataLoader";

// assets
import gitHubLogo from "../assets/components/job-experience/github-logo.svg";

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
  const { year, role, company, txt, gitHubLink, liveLink, lgPic } = experience;

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
            <Link href={gitHubLink} target="_blank" title={localizedContent["experienceDetails"]["goAndSee"]}>
              <Image src={gitHubLogo} width="48" height="48" alt={localizedContent["experienceDetails"]["gitHubRepo"]} />
            </Link>
          </div>
        )}
      </footer>

      <br />
      <p>{txt}</p>
    </article>
  );
}

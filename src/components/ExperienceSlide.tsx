// component css styles
import styles from "./ExperienceSlide.module.css";

// react
import { ComponentProps } from "react";

// next
import Image from "next/image";
import Link from "next/link";

// other libraries
import clsx from "clsx";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

// assets
import gitHubLogo from "../assets/components/job-experience/github-logo.svg";

// types
interface ExperienceSlideProps extends JobExperience, Omit<ComponentProps<"article">, "role"> {
  localizedContent: LocalizedContent;
  type: "e" | "p";
  index: number;
}

export default function ExperienceSlide({
  localizedContent,
  type,
  index,
  year,
  role,
  company,
  txt,
  gitHubLink,
  liveLink,
  lgPic,
  ...props
}: ExperienceSlideProps) {
  return (
    <article className={styles["experience-slide"]} {...props}>
      <header className="mb-4 flex flex-col xl:flex-row xl:place-items-center xl:gap-4">
        <div className="flex-1">
          <p className={styles["experience-slide__year"]}>{year}</p>
          <h2 className={styles["experience-slide__role"]}>{role}</h2>
        </div>
        <div className={clsx(styles["experience-slide__company"], "flex-none xl:text-end")}>{company}</div>
      </header>

      <footer className={styles["experience-slide__live-link"]}>
        <Link href={liveLink} target="_blank" className={clsx(styles["live-link__img"], "transition-shadow hover:shadow-xl")}>
          <Image src={`/images/${lgPic}`} width={1200} height={1187} alt={role} className="w-full object-contain" />
        </Link>
        <div className={styles["live-link__inf"]}>
          <Link href={`/exp/${type}/${index}`}>
            <InformationCircleIcon width={48} height={48} title={localizedContent["experienceSlide"]["moreInfo"]} />
          </Link>
          {gitHubLink && (
            <Link href={gitHubLink} target="_blank" title={localizedContent["experienceSlide"]["goAndSee"]}>
              <Image src={gitHubLogo} width="48" height="48" alt={localizedContent["experienceSlide"]["gitHubRepo"]} />
            </Link>
          )}
        </div>
      </footer>
    </article>
  );
}

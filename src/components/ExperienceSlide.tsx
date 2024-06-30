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
            <Link href={gitHubLink} target="_blank" title={localizedContent["experienceSlide"]["goAndSee"]} prefetch={false}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </Link>
          )}
        </div>
      </footer>
    </article>
  );
}

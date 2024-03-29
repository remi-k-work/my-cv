// component css styles
import styles from "./ExperienceSlide.module.css";

// react
import { ComponentProps } from "react";

// other libraries
import clsx from "clsx";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

// assets
import gitHubLogo from "../assets/components/job-experience/github-logo.svg";

// types
type ExperienceSlideProps = ComponentProps<"article"> & JobExperience;

export default function ExperienceSlide({ year, role, company, txt, gitHubLink, liveLink, lgPic, mdPic, smPic, xsPic, ...props }: ExperienceSlideProps) {
  return (
    <article className={styles["experience-slide"]} {...props}>
      <header className="place-items-center xl:flex">
        <div className="xl:flex-1">
          <p className={styles["experience-slide__year"]}>{year}</p>
          <h2 className={styles["experience-slide__role"]}>{role}</h2>
        </div>
        <div className={clsx(styles["experience-slide__company"], "text-end xl:flex-none")}>{company}</div>
      </header>

      <footer className={styles["experience-slide__live-link"]}>
        <a href={liveLink} target="_blank" className={clsx(styles["live-link__img"], "transition-shadow hover:shadow-xl")}>
          <picture>
            <source media="(min-width: 992px)" width={1200} height={1187} srcSet={`/images/${lgPic}`} />
            <source media="(min-width: 768px)" width={992} height={981} srcSet={`/images/${mdPic}`} />
            <source media="(min-width: 576px)" width={768} height={759} srcSet={`/images/${smPic}`} />
            <source media="(min-width: 1px)" width={576} height={570} srcSet={`/images/${xsPic}`} />
            <img src={`/images/${xsPic}`} width={576} height={570} alt={role} className="w-full object-contain" />
          </picture>
        </a>
        <div className={styles["live-link__inf"]}>
          <details className="dropdown">
            <summary className="btn btn-circle btn-info">
              <InformationCircleIcon width={32} height={32} />
            </summary>
            <div className={clsx(styles["experience-slide__txt"], "dropdown-content z-10")}>
              <p className="m-auto">{txt}</p>
            </div>
          </details>
          {gitHubLink && (
            <a href={gitHubLink} target="_blank" title="Go and see the GitHub Repo" className={styles["experience-slide__github"]}>
              <img src={gitHubLogo} width="48" height="48" alt="GitHub Repo" />
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}

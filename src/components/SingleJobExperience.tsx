// component css styles
import styles from "./SingleJobExperience.module.css";

// react
import { forwardRef } from "react";

// other libraries
import clsx from "clsx";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

// assets
import gitHubLogo from "../assets/components/job-experience/github-logo.svg";

const SingleJobExperience = forwardRef<HTMLElement, SingleJobExperienceProps>(
  ({ year, role, company, txt, gitHubLink, liveLink, lgPic, mdPic, smPic, xsPic }: SingleJobExperienceProps, ref) => {
    return (
      <article ref={ref} className={styles["single-job-experience"]}>
        <header className="place-items-center lg:flex">
          <div className="lg:flex-1">
            <p className={styles["single-job-experience__year"]}>{year}</p>
            <h2 className={styles["single-job-experience__role"]}>{role}</h2>
          </div>
          <div className={clsx(styles["single-job-experience__company"], "text-end lg:flex-none")}>{company}</div>
        </header>

        <footer className={styles["single-job-experience__live-link"]}>
          <a href={liveLink} target="_blank" className={clsx(styles["live-link__img"], "transition-shadow hover:shadow-xl")}>
            <picture>
              <source media="(min-width: 992px)" width={1200} height={1187} srcSet={`/images/${lgPic}`} />
              <source media="(min-width: 768px)" width={992} height={981} srcSet={`/images/${mdPic}`} />
              <source media="(min-width: 576px)" width={768} height={759} srcSet={`/images/${smPic}`} />
              <source media="(min-width: 1px)" width={576} height={570} srcSet={`/images/${xsPic}`} />
              <img src={`/images/${xsPic}`} width={576} height={570} alt={role} className="h-96 w-auto object-contain" />
            </picture>
          </a>
          <div className={styles["live-link__inf"]}>
            <details className="dropdown">
              <summary className="btn btn-circle btn-info">
                <InformationCircleIcon width={32} height={32} />
              </summary>
              <div className={clsx(styles["single-job-experience__txt"], "dropdown-content z-10")}>
                <p className="m-auto text-justify">{txt}</p>
              </div>
            </details>
            {gitHubLink && (
              <a href={gitHubLink} target="_blank" title="Go and see the GitHub Repo" className={styles["single-job-experience__github"]}>
                <img src={gitHubLogo} width="48" height="48" alt="GitHub Repo" />
              </a>
            )}
          </div>
        </footer>
      </article>
    );
  },
);

export default SingleJobExperience;

// component css styles
import styles from "./SingleJobExperience.module.css";

// react
import { forwardRef } from "react";

// assets
import gitHubLogo from "../assets/components/job-experience/github-logo.svg";

const SingleJobExperience = forwardRef(({ year, role, company, txt, gitHubLink, liveLink, lgPic, mdPic, smPic, xsPic }, ref) => {
  return (
    <article ref={ref} className={styles["single-job-experience"]}>
      <p className={styles["single-job-experience__year"]}>{year}</p>
      <div className={styles["single-job-experience__github"]}>
        {gitHubLink && (
          <a href={gitHubLink} target="_blank" title="Go and see the GitHub Repo">
            <img src={gitHubLogo} width="48" height="48" alt="GitHub Repo" />
          </a>
        )}
      </div>
      <h2 className={styles["single-job-experience__role"]}>{role}</h2>
      <span className={styles["single-job-experience__company"]}>{company}</span>
      <a className={styles["single-job-experience__pic"]} href={liveLink} target="_blank">
        <picture>
          <source media="(min-width: 992px)" width={1200} height={1187} srcSet={`/images/${lgPic}`} />
          <source media="(min-width: 768px)" width={992} height={981} srcSet={`/images/${mdPic}`} />
          <source media="(min-width: 576px)" width={768} height={759} srcSet={`/images/${smPic}`} />
          <source media="(min-width: 1px)" width={576} height={570} srcSet={`/images/${xsPic}`} />
          <img src={`/images/${xsPic}`} width={576} height={570} alt={role} />
        </picture>
      </a>
      <p className={styles["single-job-experience__txt"]}>{txt}</p>
    </article>
  );
});

export default SingleJobExperience;

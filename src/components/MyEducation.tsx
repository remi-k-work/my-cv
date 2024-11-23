"use client";

// component css styles
import styles from "./MyEducation.module.css";

// react
import { Fragment } from "react";

// other libraries
import { useGlobalContext } from "@/lib/GlobalContext";

export default function MyEducation() {
  const { localizedContent, educationSchools } = useGlobalContext();

  return (
    <figure className={styles["my-education"]}>
      <figcaption>{localizedContent["myEducation"]["myEducation"]}</figcaption>
      <dl>
        {educationSchools.map(({ name, year, location, info }, schoolIndex) => (
          <Fragment key={schoolIndex}>
            <dt className={styles["my-education__school"]}>
              <h2 className={styles["school__name"]}>{name}</h2>
              <p className={styles["school__year"]}>{year}</p>
              <p className={styles["school__location"]}>{location}</p>
            </dt>
            <dd className={styles["my-education__info"]}>{info}</dd>
          </Fragment>
        ))}
      </dl>
    </figure>
  );
}

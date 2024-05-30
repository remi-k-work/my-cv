// component css styles
import styles from "./PageTitle.module.css";

// rrd imports
import { useRouteLoaderData, useLocation } from "react-router-dom";

// components
import TypeWriterOutput from "./TypeWriterOutput";

// assets
import avatar from "../assets/components/page-title/avatar.jpg";

export default function PageTitle() {
  const pageTitles = useRouteLoaderData("root") as PageTitles;
  const { pathname } = useLocation();

  // Get the current page title data depending on the pathname of the location
  const { eyebrow, heading, intro } = pageTitles[pathname];

  return (
    <>
      <p className="sr-only">{intro}</p>

      <section className={styles["page-title"]}>
        <p className={styles["page-title__eyebrow"]}>{eyebrow}</p>
        <h1 className={styles["page-title__heading"]}>{heading}</h1>
        <p className={styles["page-title__intro"]}>
          {/* Show the avatar only on the homepage */}
          {pathname === "/" && <img src={avatar} width={288} height={288} alt="Avatar" />}
          <TypeWriterOutput />
        </p>
      </section>
    </>
  );
}

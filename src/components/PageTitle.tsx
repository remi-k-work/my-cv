"use client";

// component css styles
import styles from "./PageTitle.module.css";

// next
import { usePathname } from "next/navigation";

// other libraries
import { useGlobalContext } from "@/lib/GlobalContext";

// components
import TypeWriterOutput from "./TypeWriterOutput";

export default function PageTitle() {
  const pathname = usePathname();

  // Choose a random theme for the current page title to make it more engaging
  const { pageTitles, titleTheme } = useGlobalContext();

  // Get the current page title data depending on the pathname of the location
  if (!pageTitles[titleTheme][pathname]) return null;
  const { eyebrow, heading, intro } = pageTitles[titleTheme][pathname];

  return (
    <section className={styles["page-title"]}>
      <p className={styles["page-title__eyebrow"]}>{eyebrow}</p>
      <h1 className={styles["page-title__heading"]}>{heading}</h1>
      <p className={styles["page-title__intro"]}>
        <TypeWriterOutput key={pathname} fullText={intro} />
      </p>
    </section>
  );
}

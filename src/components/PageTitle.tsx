"use client";

// component css styles
import styles from "./PageTitle.module.css";

// next
import { usePathname } from "next/navigation";

// components
import TypeWriterOutput from "./TypeWriterOutput";

// types
interface PageTitleProps {
  pageTitles: PageTitles;
}

export default function PageTitle({ pageTitles }: PageTitleProps) {
  const pathname = usePathname();

  // Get the current page title data depending on the pathname of the location
  if (!pageTitles[pathname]) return null;
  const { eyebrow, heading, intro } = pageTitles[pathname];

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

"use client";

// component css styles
import styles from "./PageTitle.module.css";

// next
import { usePathname } from "next/navigation";
import Image from "next/image";

// components
import TypeWriterOutput from "./TypeWriterOutput";

// assets
import avatar from "../assets/components/page-title/avatar.jpg";

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
    <>
      <p className="sr-only">{intro}</p>

      <section className={styles["page-title"]}>
        <p className={styles["page-title__eyebrow"]}>{eyebrow}</p>
        <h1 className={styles["page-title__heading"]}>{heading}</h1>
        <p className={styles["page-title__intro"]}>
          {/* Show the avatar only on the homepage */}
          {pathname === "/" && <Image src={avatar} width={288} height={288} alt="Avatar" />}
          <TypeWriterOutput pageTitles={pageTitles} />
        </p>
      </section>
    </>
  );
}

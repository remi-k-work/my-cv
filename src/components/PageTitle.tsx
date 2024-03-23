// component css styles
import styles from "./PageTitle.module.css";

// react
import { PropsWithChildren } from "react";

// components
import TypeWriterOutput from "./TypeWriterOutput";

// types
interface PageTitleProps extends PropsWithChildren {
  eyebrow: string;
  heading: string;
  intro: string;
  isFinished?: boolean;
  onFinished: () => void;
}

export default function PageTitle({ eyebrow, heading, intro, children, isFinished, onFinished }: PageTitleProps) {
  return (
    <section className={styles["page-title"]}>
      <p className={styles["page-title__eyebrow"]}>{eyebrow}</p>
      <h1 className={styles["page-title__heading"]}>{heading}</h1>
      <p className={styles["page-title__intro"]}>
        {children}
        <TypeWriterOutput fullText={intro} isFinished={isFinished} onFinished={onFinished} />
      </p>
    </section>
  );
}

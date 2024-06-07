// component css styles
import styles from "./page.module.css";

// components
import ExperienceDetails from "@/components/ExperienceDetails";

// types
interface PageProps {
  params: { type: "e" | "p"; index: number };
}

export default async function Page({ params: { type, index } }: PageProps) {
  return (
    <article className={styles["page"]}>
      <ExperienceDetails type={type} index={index} />
    </article>
  );
}

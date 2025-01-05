// component css styles
import styles from "./page.module.css";

// components
import ExperienceDetails from "@/components/ExperienceDetails";

// types
interface PageProps {
  params: Promise<{ type: "e" | "p"; index: number }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;

  const {
    type,
    index
  } = params;

  return (
    <article className={styles["page"]}>
      <ExperienceDetails type={type} index={index} />
    </article>
  );
}

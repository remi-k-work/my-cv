// component css styles
import styles from "./page.module.css";

// other libraries
import DataLoader from "@/lib/DataLoader";

// components
import MyCertificates from "@/components/MyCertificates";
import MyEducation from "@/components/MyEducation";

export default async function Page() {
  // Create an instance of the data loader needed for localization
  const dataLoader = await DataLoader.init();

  return (
    <article className={styles["page"]}>
      <section>
        <MyCertificates localizedContent={dataLoader.localizedContent} />
      </section>
      <section>
        <MyEducation />
      </section>
    </article>
  );
}

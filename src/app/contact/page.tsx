// component css styles
import styles from "./page.module.css";

// next
import dynamic from "next/dynamic";

// other libraries
import DataLoader from "@/lib/DataLoader";

// components
import ContactForm from "@/components/ContactForm";
const ContactMap = dynamic(() => import("@/components/ContactMap"), { ssr: false });

export default async function Page() {
  // Create an instance of the data loader needed for localization
  const dataLoader = await DataLoader.init();

  return (
    <article className={styles["page"]}>
      <section>
        <ContactForm localizedContent={dataLoader.localizedContent} />
      </section>
      <section>
        <ContactMap localizedContent={dataLoader.localizedContent} />
      </section>
    </article>
  );
}

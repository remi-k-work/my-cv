// component css styles
import styles from "./page.module.css";

// components
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";

export default async function Page() {
  return (
    <article className={styles["page"]}>
      <section>
        <ContactForm />
      </section>
      <section>
        <ContactMap />
      </section>
    </article>
  );
}

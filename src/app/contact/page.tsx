// component css styles
import styles from "./page.module.css";

// next
import dynamic from "next/dynamic";

// components
import ContactForm from "@/components/ContactForm";
const ContactMap = dynamic(() => import("@/components/ContactMap"), { ssr: false });

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

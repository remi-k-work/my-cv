import styles from "./Contact.module.css";

import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className={styles["contact"]}>
      <ContactForm />
    </div>
  );
}

export default Contact;

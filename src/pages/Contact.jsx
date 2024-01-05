// component css styles
import styles from "./Contact.module.css";

// rrd imports
import { useActionData } from "react-router-dom";

// other libraries
import emailjs from "@emailjs/browser";

// components
import ContactForm from "../components/ContactForm";
import SubmError from "../components/contact-form/SubmError";
import ThankYou from "../components/contact-form/ThankYou";
import ContactMap from "../components/ContactMap";

export default function Contact() {
  const actionData = useActionData();

  return (
    <article className={styles["contact"]}>
      <section>
        {actionData?.status === "error" && <SubmError error={actionData?.error} />}
        {actionData?.status === "success" && <ThankYou />}
        {!actionData && <ContactForm />}
      </section>
      <section>
        <ContactMap />
      </section>
    </article>
  );
}

// action
export async function contactAction({ request }) {
  // Browsers will serialize all the data in the form into FormData and send it as the body of a new request to your server
  // React Router <Form> prevents the browser from sending that request and instead sends the request to your route action!
  // This enables highly dynamic web apps with the simple model of HTML and HTTP
  const formData = await request.formData();

  // Get the new contact data
  const newContact = Object.fromEntries(formData);

  try {
    // Utilize EmailJS to assist with sending emails solely using client-side technology
    await emailjs.send("default_service", "template_mmqusic", newContact, import.meta.env.VITE_EMAILJS_KEY);
  } catch (error) {
    // There was an error; return the status along with the error message, and the UI will respond to it
    return { status: "error", error: error.text };
  }

  // The contact form has been submitted successfully
  return { status: "success" };
}

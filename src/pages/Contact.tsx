// component css styles
import styles from "./Contact.module.css";

// rrd imports
import { useActionData, ActionFunctionArgs } from "react-router-dom";

// other libraries
import emailjs from "@emailjs/browser";

// components
import ContactForm from "../components/ContactForm";
import SubmError from "../components/contact-form/SubmError";
import ThankYou from "../components/contact-form/ThankYou";
import ContactMap from "../components/ContactMap";

// types
interface ActionResponse {
  status: string;
  error?: string;
}

export default function Contact() {
  const actionData = useActionData() as ActionResponse;

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
export async function contactAction({ request }: ActionFunctionArgs): Promise<ActionResponse> {
  // Browsers will serialize all the data in the form into FormData and send it as the body of a new request to your server
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
    if (typeof error === "string") {
      return { status: "error", error: error };
    } else if (error instanceof Error) {
      return { status: "error", error: error.message };
    } else {
      return { status: "error", error: "There was an error; please try again." };
    }
  }

  // The contact form has been submitted successfully
  return { status: "success" };
}

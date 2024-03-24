// component css styles
import styles from "./Contact.module.css";

// react
import { useCallback } from "react";

// rrd imports
import { useRouteLoaderData, useLocation, useActionData, ActionFunctionArgs } from "react-router-dom";

// other libraries
import { useRootContext } from "../layouts/Root";
import emailjs from "@emailjs/browser";

// components
import PageTitle from "../components/PageTitle";
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
  const pageTitles = useRouteLoaderData("root") as PageTitles;
  const location = useLocation();
  const actionData = useActionData() as ActionResponse;

  const { isTypedCont, setIsTypedCont } = useRootContext();

  // Get the current page title data depending on the pathname of the location
  const pageTitle = pageTitles[location.pathname];

  const handleTypedCont = useCallback(() => setIsTypedCont(true), []);

  return (
    <>
      <PageTitle {...pageTitle} isFinished={isTypedCont} onFinished={handleTypedCont} />

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
    </>
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

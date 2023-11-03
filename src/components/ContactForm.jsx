import styles from "./ContactForm.module.css";

import { useState } from "react";
import { Form } from "react-router-dom";

import cn from "classnames";
import { handleInput, handleInvalid, submitForm } from "../assets/components/contact-form/validation";

import SubmError from "./contact-form/SubmError";
import ThankYou from "./contact-form/ThankYou";

function ContactForm() {
  const [contact, setContact] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("empty");
  const [error, setError] = useState(null);

  function handleChange(ev) {
    const newContact = { ...contact, [ev.target.name]: ev.target.value };
    setContact(newContact);

    // Update the status of the form and the UI will respond to it
    const theForm = ev.target.form;
    if (theForm.checkValidity()) {
      // The form is valid and ready to submit
      setStatus("ready");
    } else if (!!(newContact.name || newContact.email || newContact.subject || newContact.message)) {
      // The user is still typing (a middle ground between "empty" and "ready" states)
      setStatus("typing");
    } else {
      // The form is empty
      setStatus("empty");
    }
  }

  async function handleSubmit(ev) {
    ev.preventDefault();

    // Do not allow submitting an invalid form
    const theForm = ev.currentTarget;
    if (!theForm.reportValidity()) {
      return;
    }

    // The form is being submitted; please deactivate all fields
    setStatus("submitting");

    let anyError = false;
    try {
      await submitForm(false);
      setStatus("success");
    } catch (error) {
      setError(error);
      setStatus("ready");
      anyError = true;
    }

    // Finally, submit the form, but only if there are no errors
    if (!anyError) {
      theForm.submit();
    }
  }

  function handleReset(ev) {
    setContact({ name: "", email: "", subject: "", message: "" });
    setStatus("empty");
  }

  if (status === "success") {
    return <ThankYou />;
  }

  return (
    <Form
      className={styles["contact-form"]}
      method="post"
      action="/contact"
      onSubmit={handleSubmit}
      onReset={handleReset}
      onInput={handleInput}
      onInvalid={handleInvalid}
    >
      <ul>
        <li className={styles["contact-form__row"]}>{error && <SubmError error={error.message} />}</li>
        <li className={cn(styles["contact-form__row"], styles["contact-form__row--split"])}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              title=""
              size={20}
              maxLength={50}
              spellCheck="false"
              autoComplete="name"
              required={true}
              disabled={status === "submitting"}
              value={contact.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              title=""
              size={20}
              maxLength={50}
              spellCheck="false"
              autoComplete="email"
              required={true}
              disabled={status === "submitting"}
              value={contact.email}
              onChange={handleChange}
            />
          </div>
        </li>
        <li className={styles["contact-form__row"]}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            title=""
            size={40}
            maxLength={50}
            spellCheck="true"
            required={true}
            disabled={status === "submitting"}
            value={contact.subject}
            onChange={handleChange}
          />
        </li>
        <li className={styles["contact-form__row"]}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            title=""
            cols={50}
            rows={6}
            spellCheck="true"
            required={true}
            disabled={status === "submitting"}
            value={contact.message}
            onChange={handleChange}
          ></textarea>
        </li>
        <li className={cn(styles["contact-form__row"], styles["contact-form__row--split"])}>
          <button type="submit" disabled={status !== "ready"}>
            Send
          </button>
          <button type="reset" disabled={status === "submitting" || status === "empty"}>
            Reset
          </button>
        </li>
      </ul>
    </Form>
  );
}

export default ContactForm;

"use client";

// component css styles
import styles from "./ContactForm.module.css";

// react
import { useState } from "react";

// server actions and mutations
import { newContact } from "../lib/actionsContactForm";

// other libraries
import ContactFormSchema, { ContactFormSchemaType, ContactFormState } from "../lib/ContactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useFormActionWithVal from "../lib/useFormActionWithVal";
import { FormProvider } from "react-hook-form";

// components
import { FormInputField, FormTextArea } from "./FormControls";
import FormSubmit from "./FormSubmit";
import ContactFormFeedback from "./ContactFormFeedback";

// types
interface TheFormWrappedProps {
  onResetClicked: () => void;
}

export default function ContactForm() {
  // Resetting a form with a key: you can force a subtree to reset its state by giving it a different key
  const [formResetKey, setFormResetKey] = useState("ContactForm");

  return <TheFormWrapped key={formResetKey} onResetClicked={() => setFormResetKey(`ContactForm${Date.now()}`)} />;
}

function TheFormWrapped({ onResetClicked }: TheFormWrappedProps) {
  const {
    isPending,
    formState: contactFormState,
    formAction,
    allFieldErrors,
    showFeedback,
    setShowFeedback,
    onSubmit,
    useFormMethods,
  } = useFormActionWithVal<ContactFormState, ContactFormSchemaType>({
    formActionFunc: newContact,
    resolver: zodResolver(ContactFormSchema.schema),
    formSchema: new ContactFormSchema(),
  });

  return (
    <>
      <FormProvider {...useFormMethods}>
        <form className={styles["contact-form"]} action={formAction} noValidate={true} onSubmit={useFormMethods.handleSubmit(onSubmit)}>
          {/* <form className={styles["contact-form"]} action={formAction} noValidate={true} onSubmit={(ev) => onSubmit({} as ContactFormSchemaType, ev)}> */}
          <FormInputField
            fieldName={"name"}
            fieldLabel={"name"}
            allFieldErrors={allFieldErrors}
            size={40}
            maxLength={26}
            spellCheck={"false"}
            autoComplete={"name"}
            required={true}
            placeholder={"Let me know who you are!"}
            defaultValue={""}
          />
          <br />
          <FormInputField
            fieldType={"email"}
            fieldName={"email"}
            fieldLabel={"email"}
            allFieldErrors={allFieldErrors}
            size={40}
            maxLength={50}
            spellCheck={"false"}
            autoComplete={"email"}
            required={true}
            placeholder={"I will reply to you here"}
            defaultValue={""}
          />
          <br />
          <FormInputField
            fieldName={"subject"}
            fieldLabel={"subject"}
            allFieldErrors={allFieldErrors}
            size={40}
            maxLength={41}
            spellCheck={"true"}
            autoComplete={"off"}
            required={true}
            placeholder={"Project Inquiry? Feedback? Let me know!"}
            defaultValue={""}
          />
          <br />
          <FormTextArea
            fieldName={"message"}
            fieldLabel={"message"}
            allFieldErrors={allFieldErrors}
            cols={50}
            rows={6}
            maxLength={2049}
            spellCheck={"true"}
            autoComplete={"off"}
            required={true}
            placeholder={"How can I help you today?"}
            defaultValue={""}
          />
          <FormSubmit isPending={isPending} onSubmitCompleted={() => setShowFeedback(true)} onResetClicked={onResetClicked} />
        </form>
      </FormProvider>
      {showFeedback && <ContactFormFeedback contactFormState={contactFormState} setShowFeedback={setShowFeedback} onResetClicked={onResetClicked} />}
    </>
  );
}

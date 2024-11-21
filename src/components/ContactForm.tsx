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
import { useGlobalContext } from "@/lib/GlobalContext";

// components
import { FormInputField, FormTextArea } from "./FormControls";
import FormSubmit from "./FormSubmit";
import ContactFormFeedback from "./ContactFormFeedback";
import Captcha from "@/features/auth/components/Captcha";

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
  const { preferredLang, localizedContent } = useGlobalContext();

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
    resolver: zodResolver(preferredLang === "pl" ? ContactFormSchema.schemaPl : ContactFormSchema.schemaEn),
    formSchema: new ContactFormSchema(preferredLang === "pl" ? "pl" : "en"),
  });

  return (
    <>
      <FormProvider {...useFormMethods}>
        <form className={styles["contact-form"]} action={formAction} noValidate={true} onSubmit={useFormMethods.handleSubmit(onSubmit)}>
          {/* <form className={styles["contact-form"]} action={formAction} noValidate={true} onSubmit={(ev) => onSubmit({} as ContactFormSchemaType, ev)}> */}
          <FormInputField
            fieldName={"name"}
            fieldLabel={localizedContent["contactForm"]["labelName"]}
            allFieldErrors={allFieldErrors}
            size={40}
            maxLength={26}
            spellCheck={"false"}
            autoComplete={"name"}
            required={true}
            placeholder={localizedContent["contactForm"]["placeholderName"]}
            defaultValue={""}
          />
          <br />
          <FormInputField
            fieldType={"email"}
            fieldName={"email"}
            fieldLabel={localizedContent["contactForm"]["labelEmail"]}
            allFieldErrors={allFieldErrors}
            size={40}
            maxLength={50}
            spellCheck={"false"}
            autoComplete={"email"}
            required={true}
            placeholder={localizedContent["contactForm"]["placeholderEmail"]}
            defaultValue={""}
          />
          <br />
          <FormInputField
            fieldName={"subject"}
            fieldLabel={localizedContent["contactForm"]["labelSubject"]}
            allFieldErrors={allFieldErrors}
            size={40}
            maxLength={41}
            spellCheck={"true"}
            autoComplete={"off"}
            required={true}
            placeholder={localizedContent["contactForm"]["placeholderSubject"]}
            defaultValue={""}
          />
          <br />
          <FormTextArea
            fieldName={"message"}
            fieldLabel={localizedContent["contactForm"]["labelMessage"]}
            allFieldErrors={allFieldErrors}
            cols={50}
            rows={6}
            maxLength={2049}
            spellCheck={"true"}
            autoComplete={"off"}
            required={true}
            placeholder={localizedContent["contactForm"]["placeholderMessage"]}
            defaultValue={""}
          />
          <br />
          <Captcha captchaName="captcha" />
          <br />
          <FormInputField
            fieldName={"captcha"}
            fieldLabel={localizedContent["contactForm"]["labelCaptcha"]}
            allFieldErrors={allFieldErrors}
            size={40}
            maxLength={7}
            spellCheck={"false"}
            autoComplete={"off"}
            required={true}
            placeholder={localizedContent["contactForm"]["placeholderCaptcha"]}
            defaultValue={""}
          />
          <FormSubmit isPending={isPending} onSubmitCompleted={() => setShowFeedback(true)} onResetClicked={onResetClicked} />
        </form>
      </FormProvider>
      {showFeedback && <ContactFormFeedback contactFormState={contactFormState} setShowFeedback={setShowFeedback} onResetClicked={onResetClicked} />}
    </>
  );
}

// other libraries
import { createServerValidate, formOptions, initialFormState } from "@tanstack/react-form/nextjs";
import { ContactFormSchemaEn, ContactFormSchemaPl } from "./contactForm";

// types
import type { ContactFormActionResult } from "@/actions/contactForm";

// constants
export const FORM_OPTIONS_EN = formOptions({
  defaultValues: { name: "", email: "", subject: "", message: "", captcha: "" },
  validators: { onMount: ContactFormSchemaEn },
});
export const FORM_OPTIONS_PL = formOptions({
  defaultValues: { name: "", email: "", subject: "", message: "", captcha: "" },
  validators: { onMount: ContactFormSchemaPl },
});

export const INITIAL_FORM_STATE: ContactFormActionResult = { ...initialFormState, actionStatus: "idle" };

export const SERVER_VALIDATE_EN = createServerValidate({ ...FORM_OPTIONS_EN, onServerValidate: ContactFormSchemaEn });
export const SERVER_VALIDATE_PL = createServerValidate({ ...FORM_OPTIONS_PL, onServerValidate: ContactFormSchemaPl });

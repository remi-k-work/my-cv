"use server";

// next
import { revalidatePath } from "next/cache";

// other libraries
import ContactFormSchema, { ContactFormState } from "./ContactFormSchema";

export async function newContact(formState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const contactFormSchema = new ContactFormSchema(formData);
  const { isSuccess, allFieldErrorsServer, validatedData } = contactFormSchema;

  // If form validation fails, return errors promptly; otherwise, continue
  if (!isSuccess) {
    // Return the new action state so that we can provide feedback to the user
    return {
      actionStatus: "invalid",
      allFieldErrors: allFieldErrorsServer,
    };
  }

  try {
    // Submit the contact form with validated data
    const data = {
      service_id: "default_service",
      template_id: "template_mmqusic",
      user_id: process.env.EMAILJS_PUB_KEY,
      template_params: { ...validatedData },
      accessToken: process.env.EMAILJS_PRI_KEY,
    };

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(res.statusText);
  } catch (error) {
    return { actionStatus: "failed" };
  }

  // Revalidate, so the fresh data will be fetched from the server next time this path is visited
  revalidatePath("/");
  revalidatePath("/contact");

  // Return the new action state so that we can provide feedback to the user
  const { name, email, subject } = validatedData!;

  return { actionStatus: "succeeded", contactExcerpt: { name, email, subject } };
}

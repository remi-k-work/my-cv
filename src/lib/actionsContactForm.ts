"use server";

// next
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// other libraries
import ContactFormSchema, { ContactFormState } from "./ContactFormSchema";
import DataLoader from "@/lib/DataLoader";
import { getIronSession } from "iron-session";
import { CaptchaSession } from "@/app/auth/captcha/[name]/route";

export async function newContact(formState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Create an instance of the data loader needed for localization
  const dataLoader = await DataLoader.init();

  const contactFormSchema = new ContactFormSchema(dataLoader.lang, formData);
  const { isSuccess, allFieldErrorsServer, validatedData } = contactFormSchema;

  // If form validation fails, return errors promptly; otherwise, continue
  if (!isSuccess) {
    // Return the new action state so that we can provide feedback to the user
    return { ...formState, actionStatus: "invalid", allFieldErrors: allFieldErrorsServer };
  }

  try {
    // Check the captcha to ensure it matches
    const { captchaString } = await getIronSession<CaptchaSession>(cookies(), {
      password: process.env.SESSION_SECRET as string,
      cookieName: "captcha",
    });

    if (validatedData?.captcha !== captchaString) {
      // The captcha is invalid; please try again
      return {
        ...formState,
        actionStatus: "invalid",
        allFieldErrors: {
          captcha: [dataLoader.localizedContent["contactFormFeedback"]["invalidCaptcha"]],
        },
      };
    }

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
    return { ...formState, actionStatus: "failed" };
  }

  // Revalidate, so the fresh data will be fetched from the server next time this path is visited
  revalidatePath("/");
  revalidatePath("/contact");

  // Return the new action state so that we can provide feedback to the user
  const { name, email, subject } = validatedData!;

  return { ...formState, actionStatus: "succeeded", contactExcerpt: { name, email, subject } };
}

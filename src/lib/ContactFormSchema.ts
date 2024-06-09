// other libraries
import { z } from "zod";
import { FieldErrors } from "react-hook-form";
import FormSchemaBase, { AllFieldErrors, FormStateBase } from "./FormSchemaBase";

// types
interface ContactExcerpt {
  name: string;
  email: string;
  subject: string;
}

export interface ContactFormState extends FormStateBase {
  contactExcerpt?: ContactExcerpt;
}

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema.schema>;

export default class ContactFormSchema extends FormSchemaBase<ContactFormSchemaType> {
  // Schema-based form validation with zod
  public static readonly schema = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Please provide your name; this is a necessary field" })
      .max(25, { message: "Please keep the name to a maximum of 25 characters" }),
    email: z
      .string()
      .trim()
      .min(1, { message: "Please provide your email address so that I can contact you; email is a mandatory field" })
      .email({ message: "The email address you gave appears to be incorrect; please update it" }),
    subject: z
      .string()
      .trim()
      .min(1, { message: "Your message's subject is a required field" })
      .max(40, { message: "Please keep the subject to a maximum of 40 characters" }),
    message: z
      .string()
      .trim()
      .min(1, { message: "What is the message you want to send? This is a mandatory field" })
      .max(2048, { message: "Please keep the message to a maximum of 2048 characters" }),
  });

  constructor(formData?: FormData) {
    super(formData);
  }

  getAllFieldErrorsClient(rhfErrors: FieldErrors<ContactFormSchemaType>) {
    // Transform react hook form errors to conform to our own all field errors format
    const allFieldErrors: AllFieldErrors = {};

    for (const fieldName in rhfErrors) {
      allFieldErrors[fieldName] = [rhfErrors[fieldName as keyof ContactFormSchemaType]?.message as string];
    }

    // Finally, only store field errors if there are actual problems; otherwise, leave them undefined
    return Object.keys(allFieldErrors).length > 0 ? allFieldErrors : undefined;
  }

  protected getAllFieldErrorsServer(formDataObj: { [k: string]: FormDataEntryValue }) {
    const validatedFields = ContactFormSchema.schema.safeParse(formDataObj);
    if (validatedFields.success === false) {
      this.isSuccess = false;

      return validatedFields.error.flatten().fieldErrors;
    } else {
      this.isSuccess = true;

      this.validatedData = validatedFields.data;
    }
  }
}

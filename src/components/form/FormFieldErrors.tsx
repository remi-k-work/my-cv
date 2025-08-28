// other libraries
import { useStore } from "@tanstack/react-form";
import { useFormContext } from "@/components/form";

// assets
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

// types
import type { StandardSchemaV1Issue } from "@tanstack/react-form";

interface FormFieldErrorsProps {
  name: string;
}

export default function FormFieldErrors({ name }: FormFieldErrorsProps) {
  // Get the form context
  const { store } = useFormContext();

  const [isPristine, isTouched, formErrors]: [boolean, boolean, (Record<string, StandardSchemaV1Issue[]> | undefined)[]] = useStore(store, (state) => [
    state.isPristine,
    state.isTouched,
    state.errors,
  ]);

  if (isPristine || !isTouched) return null;
  const error = formErrors?.find((error) => error?.[name]);

  if (error) {
    return error[name].map(({ message }, index) => (
      <p key={index} role="alert" className="border-destructive-foreground text-destructive-foreground flex items-center gap-2 rounded-b-xl border px-3 py-2">
        <ExclamationTriangleIcon className="size-9 flex-none" />
        {message}
      </p>
    ));
  }
}

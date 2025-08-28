// assets
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

// types
import type { AnyFieldMeta } from "@tanstack/react-form";
import type { ZodError } from "zod";

interface FieldErrorsProps {
  meta: AnyFieldMeta;
}

export default function FieldErrors({ meta: { isPristine, isTouched, errors } }: FieldErrorsProps) {
  if (isPristine || !isTouched) return null;

  return errors.map(({ message }: ZodError, index) => (
    <p key={index} role="alert" className="border-destructive-foreground text-destructive-foreground flex items-center gap-2 rounded-b-xl border px-3 py-2">
      <ExclamationTriangleIcon className="size-9 flex-none" />
      {message}
    </p>
  ));
}

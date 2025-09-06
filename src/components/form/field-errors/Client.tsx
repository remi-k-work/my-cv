// other libraries
import { useFieldContext } from "@/components/form";

// assets
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

// types
import type { ZodError } from "zod";

export default function Client() {
  // Get the field context
  const {
    state: {
      meta: { errors, isPristine, isTouched },
    },
  } = useFieldContext();

  if (isPristine || !isTouched) return null;

  return errors.map(({ message }: ZodError, index) => (
    <p
      key={index}
      role="alert"
      className="border-destructive-foreground text-destructive-foreground animate-valid-error flex max-w-none items-center gap-2 rounded-b-xl border px-3 py-2"
    >
      <ExclamationTriangleIcon className="size-9 flex-none" />
      {message}
    </p>
  ));
}

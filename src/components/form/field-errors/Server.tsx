// other libraries
import { useFormContext } from "@/components/form";
import { useFieldContext } from "@/components/form";
import { useStore } from "@tanstack/react-form";

// assets
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

// types
import type { StandardSchemaV1Issue } from "@tanstack/react-form";

export default function Server() {
  // Get the form context
  const { store } = useFormContext();

  // Get the field context
  const { name } = useFieldContext();

  const formServerErrors: Record<string, StandardSchemaV1Issue[]> | undefined = useStore(store, (state) => state.errorMap.onServer?.form);

  return formServerErrors?.[name]?.map(({ message }, index) => (
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

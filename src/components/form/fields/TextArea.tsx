// react
import { useId } from "react";

// other libraries
import { useFieldContext } from "@/components/form";

// components
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FieldErrors from "@/components/form/FieldErrors";

// types
import type { ComponentPropsWithoutRef } from "react";

interface TextAreaFieldProps extends ComponentPropsWithoutRef<typeof Textarea> {
  label: string;
}

export default function TextAreaField({ label, ...props }: TextAreaFieldProps) {
  // Get the field context
  const {
    name,
    state: { value, meta },
    handleChange,
    handleBlur,
  } = useFieldContext<string>();

  // Generate a unique id
  const id = useId();

  return (
    <>
      <Label htmlFor={id} className="text-clr-primary-200 p-1 text-sm font-semibold tracking-widest uppercase">
        {label}
      </Label>
      <Textarea id={id} name={name} value={value} onChange={(ev) => handleChange(ev.target.value)} onBlur={handleBlur} {...props} />
      <FieldErrors meta={meta} />
    </>
  );
}

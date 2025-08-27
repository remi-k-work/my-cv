// react
import { useId } from "react";

// other libraries
import { useFieldContext } from "@/components/form";

// components
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import FieldErrors from "@/components/form/FieldErrors";

// types
import type { ComponentPropsWithoutRef } from "react";

interface TextFieldProps extends ComponentPropsWithoutRef<typeof Input> {
  label: string;
}

export default function TextField({ label, ...props }: TextFieldProps) {
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
      <Input id={id} name={name} value={value} onChange={(ev) => handleChange(ev.target.value)} onBlur={handleBlur} {...props} />
      <FieldErrors meta={meta} />
    </>
  );
}

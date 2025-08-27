// next
import { useRouter } from "next/navigation";

// other libraries
import { useFormContext } from ".";
import { useStore } from "@tanstack/react-form";

// components
import { Button } from "@/components/ui/button";

// assets
import { HandThumbDownIcon, HandThumbUpIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Loader2 } from "lucide-react";

// types
interface FormSubmitProps {
  isPending: boolean;
}

export default function FormSubmit({ isPending }: FormSubmitProps) {
  // Get the form context
  const { store, reset } = useFormContext();

  const [isPristine, isSubmitting, canSubmit] = useStore(store, (state) => [state.isPristine, state.isSubmitting, state.canSubmit]);

  // To be able to send the user back after canceling
  const { back } = useRouter();

  return (
    <section className="flex w-full flex-wrap items-center justify-around gap-6">
      <Button type="submit" size="lg" disabled={isPending || isPristine || isSubmitting || !canSubmit}>
        {isPending || isSubmitting ? (
          <>
            <Loader2 className="size-9 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <HandThumbUpIcon className="size-9" />
            Submit
          </>
        )}
      </Button>
      <Button type="button" size="lg" variant="destructive" className="text-clr-primary-800" onClick={() => reset()}>
        <XCircleIcon className="size-9" />
        Reset
      </Button>
      <Button type="button" size="lg" variant="secondary" onClick={() => back()}>
        <HandThumbDownIcon className="size-9" />
        Cancel
      </Button>
    </section>
  );
}

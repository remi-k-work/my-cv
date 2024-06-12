"use client";

// component css styles
import styles from "./FormSubmit.module.css";

// react
import { useEffect, useRef } from "react";

// next
import { useRouter } from "next/navigation";

// other libraries
import { HandThumbDownIcon, HandThumbUpIcon, XCircleIcon } from "@heroicons/react/24/solid";

// types
interface FormSubmitProps {
  localizedContent: LocalizedContent;
  isPending: boolean;
  onSubmitCompleted: () => void;
  onResetClicked: () => void;
}

export default function FormSubmit({ localizedContent, isPending, onSubmitCompleted, onResetClicked }: FormSubmitProps) {
  // To be able to send the user back after canceling
  const { back } = useRouter();

  // To maintain referential equality and minimize excessive effect dependencies
  const onSubmitCompletedRef = useRef(onSubmitCompleted);

  useEffect(() => {
    // Inform the parent component that the form has been submitted
    if (!isPending) onSubmitCompletedRef.current();
  }, [isPending]);

  return (
    <section className={styles["form-submit"]}>
      <button type="submit" disabled={isPending}>
        {isPending ? (
          <>
            <span className="loading loading-spinner"></span>
            {localizedContent["formSubmit"]["sending"]}
          </>
        ) : (
          <>
            <HandThumbUpIcon width={24} height={24} />
            {localizedContent["formSubmit"]["send"]}
          </>
        )}
      </button>
      <button type="reset" onClick={() => onResetClicked()}>
        <XCircleIcon width={24} height={24} />
        {localizedContent["formSubmit"]["reset"]}
      </button>
      <button type="button" onClick={() => back()}>
        <HandThumbDownIcon width={24} height={24} />
        {localizedContent["formSubmit"]["cancel"]}
      </button>
    </section>
  );
}

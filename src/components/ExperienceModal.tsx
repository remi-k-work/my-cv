"use client";

// component css styles
import styles from "./ExperienceModal.module.css";

// react
import { useEffect, useRef } from "react";

// next
import { useRouter } from "next/navigation";

// other libraries
import { InformationCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

// types
interface ExperienceModalProps {
  children: React.ReactNode;
}

export default function ExperienceModal({ children }: ExperienceModalProps) {
  // To be able to call showModal() method on the dialog
  const dialogRef = useRef<HTMLDialogElement>(null);

  // To be able to close the modal
  const { back } = useRouter();

  useEffect(() => {
    // Show the dialog as a modal
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog ref={dialogRef} className={styles["experience-modal"]} onClose={() => back()}>
      <form method="dialog">
        <header>
          <InformationCircleIcon width={48} height={48} />
          <h3 className="text-center">Project Info & Description</h3>
          <button type="submit">
            <XCircleIcon width={32} height={32} />
          </button>
        </header>
        <article>{children}</article>
        <footer>
          <button type="submit" autoFocus>
            Close
          </button>
        </footer>
      </form>
    </dialog>
  );
}

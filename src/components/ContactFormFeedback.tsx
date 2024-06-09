"use client";

// react
import { Dispatch, SetStateAction } from "react";

// other libraries
import { CheckBadgeIcon, CircleStackIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { ContactFormState } from "../lib/ContactFormSchema";

// components
import Toastify from "@/components/Toastify";

// types
interface ContactFormFeedbackProps {
  contactFormState?: ContactFormState;
  setShowFeedback: Dispatch<SetStateAction<boolean>>;
  onResetClicked: () => void;
}

export default function ContactFormFeedback({ contactFormState = { actionStatus: "idle" }, setShowFeedback, onResetClicked }: ContactFormFeedbackProps) {
  const { actionStatus, contactExcerpt } = contactFormState;

  return (
    <>
      {actionStatus === "succeeded" && contactExcerpt && (
        <Toastify
          onTimedOut={() => {
            // After a successful submission, hide the feedback and restart the contact form
            setShowFeedback(false);
            onResetClicked();
          }}
        >
          <CheckBadgeIcon width={64} height={64} className="m-auto" />
          <p className="mb-8 text-center font-bold">Success!</p>
          <p className="mb-4">Your message has been sent.</p>
          <div className="max-w-72 overflow-x-auto">
            <table className="table bg-success text-success-content">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{contactExcerpt.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{contactExcerpt.email}</td>
                </tr>
                <tr>
                  <th>Subject</th>
                  <td>{contactExcerpt.subject}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Toastify>
      )}
      {actionStatus === "invalid" && (
        <Toastify type={"alert-warning"} onTimedOut={() => setShowFeedback(false)}>
          <ClipboardDocumentCheckIcon width={64} height={64} className="m-auto" />
          <p className="mb-8 text-center font-bold">Missing fields!</p>
          <p className="mt-4">Please correct the contact form fields and try again.</p>
        </Toastify>
      )}
      {actionStatus === "failed" && (
        <Toastify type={"alert-warning"} onTimedOut={() => setShowFeedback(false)}>
          <CircleStackIcon width={64} height={64} className="m-auto" />
          <p className="mb-8 text-center font-bold">Server error!</p>
          <p className="mt-4">The message was not sent successfully; please try again later.</p>
        </Toastify>
      )}
    </>
  );
}

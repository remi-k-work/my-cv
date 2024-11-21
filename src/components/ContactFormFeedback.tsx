"use client";

// react
import { Dispatch, SetStateAction } from "react";

// other libraries
import { ContactFormState } from "../lib/ContactFormSchema";
import { useGlobalContext } from "@/lib/GlobalContext";

// components
import Toastify from "@/components/Toastify";

// assets
import { CheckBadgeIcon, CircleStackIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";

// types
interface ContactFormFeedbackProps {
  contactFormState?: ContactFormState;
  setShowFeedback: Dispatch<SetStateAction<boolean>>;
  onResetClicked: () => void;
}

export default function ContactFormFeedback({ contactFormState = { actionStatus: "idle" }, setShowFeedback, onResetClicked }: ContactFormFeedbackProps) {
  const { localizedContent } = useGlobalContext();
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
          <p className="mb-8 text-center font-bold">{localizedContent["contactFormFeedback"]["success"]}</p>
          <p className="mb-4">{localizedContent["contactFormFeedback"]["messageSent"]}</p>
          <div className="max-w-72 overflow-x-auto">
            <table className="table bg-success text-success-content">
              <tbody>
                <tr>
                  <th>{localizedContent["contactFormFeedback"]["name"]}</th>
                  <td>{contactExcerpt.name}</td>
                </tr>
                <tr>
                  <th>{localizedContent["contactFormFeedback"]["email"]}</th>
                  <td>{contactExcerpt.email}</td>
                </tr>
                <tr>
                  <th>{localizedContent["contactFormFeedback"]["subject"]}</th>
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
          <p className="mb-8 text-center font-bold">{localizedContent["contactFormFeedback"]["missingFields"]}</p>
          <p className="mt-4">{localizedContent["contactFormFeedback"]["pleaseCorrect"]}</p>
        </Toastify>
      )}
      {actionStatus === "failed" && (
        <Toastify type={"alert-warning"} onTimedOut={() => setShowFeedback(false)}>
          <CircleStackIcon width={64} height={64} className="m-auto" />
          <p className="mb-8 text-center font-bold">{localizedContent["contactFormFeedback"]["serverError"]}</p>
          <p className="mt-4">{localizedContent["contactFormFeedback"]["messageNotSent"]}</p>
        </Toastify>
      )}
    </>
  );
}

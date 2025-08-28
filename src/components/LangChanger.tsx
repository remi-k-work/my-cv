"use client";

// react
import { useTransition } from "react";

// next
import { useRouter } from "next/navigation";

// server actions and mutations
import { setLangCookie } from "@/actions/langChanger";

// other libraries
import { Lang } from "@/lib/DataLoader";
import { useGlobalContext } from "@/lib/GlobalContext";

// components
import { Button } from "@/components/ui/custom/button";

export default function LangChanger() {
  const { preferredLang } = useGlobalContext();

  // To display a pending status while the server action is running
  const [isPending, startTransition] = useTransition();

  const { refresh } = useRouter();

  function handleLangToggled() {
    const newLang: Lang = preferredLang === "en" ? "pl" : "en";

    startTransition(async () => {
      await setLangCookie(newLang);
      refresh();
    });
  }

  return (
    <Button type="button" disabled={isPending} title={preferredLang === "en" ? "English" : "Polish"} onClick={handleLangToggled}>
      {preferredLang &&
        (preferredLang === "en" ? (
          <svg viewBox="0 0 512 512" className="size-11">
            <path fill="#bd3d44" d="M0 0h512v512H0" />
            <path stroke="#fff" strokeWidth="40" d="M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512" />
            <path fill="#192f5d" d="M0 0h390v275H0z" />
            <marker id="us-a" markerHeight="30" markerWidth="30">
              <path fill="#fff" d="m15 0 9.3 28.6L0 11h30L5.7 28.6" />
            </marker>
            <path
              fill="none"
              markerMid="url(#us-a)"
              d="m0 0 18 11h65 65 65 65 66L51 39h65 65 65 65L18 66h65 65 65 65 66L51 94h65 65 65 65L18 121h65 65 65 65 66L51 149h65 65 65 65L18 177h65 65 65 65 66L51 205h65 65 65 65L18 232h65 65 65 65 66z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 512 512" className="size-11">
            <g fillRule="evenodd">
              <path fill="#fff" d="M512 512H0V0h512z" />
              <path fill="#dc143c" d="M512 512H0V256h512z" />
            </g>
          </svg>
        ))}
    </Button>
  );
}

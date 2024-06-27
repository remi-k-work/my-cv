"use client";

// react
import { useTransition } from "react";

// next
import Image from "next/image";
import { useRouter } from "next/navigation";

// server actions and mutations
import { setLangCookie } from "../lib/actionsLangChanger";

// other libraries
import { Lang } from "@/lib/DataLoader";
import { useGlobalContext } from "../lib/GlobalContext";

// assets
import pl from "../assets/pl.svg";
import us from "../assets/us.svg";

export default function LangChanger() {
  // To display a pending status while the server action is running
  const [isPending, startTransition] = useTransition();

  const { lang, setLang } = useGlobalContext();
  const { refresh } = useRouter();

  function handleLangToggled() {
    const newLang: Lang = lang === "en" ? "pl" : "en";
    setLang(newLang);

    startTransition(async () => {
      await setLangCookie(newLang);
      refresh();
    });
  }

  return (
    <button type="button" className="btn btn-circle btn-ghost" disabled={isPending} onClick={handleLangToggled}>
      {lang !== undefined && (lang === "en" ? <Image src={us} width="32" height="32" alt="English" /> : <Image src={pl} width="32" height="32" alt="Polish" />)}
    </button>
  );
}

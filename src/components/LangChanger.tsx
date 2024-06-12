"use client";

// next
import Image from "next/image";
import { useRouter } from "next/navigation";

// other libraries
import { Lang } from "@/lib/DataLoader";
import { useGlobalContext } from "../lib/GlobalContext";

// assets
import pl from "../assets/pl.svg";
import us from "../assets/us.svg";

const LANG_COOKIE = "lang";

export default function LangChanger() {
  const { lang, setLang } = useGlobalContext();
  const { refresh } = useRouter();

  function handleLangToggled() {
    const newLang: Lang = lang === "en" ? "pl" : "en";
    setLang(newLang);

    document.cookie = `${LANG_COOKIE}=${newLang}; max-age=2592000`;
    refresh();
  }

  return (
    <button type="button" className="btn btn-circle btn-ghost" onClick={handleLangToggled}>
      {lang !== undefined && (lang === "en" ? <Image src={us} width="32" height="32" alt="English" /> : <Image src={pl} width="32" height="32" alt="Polish" />)}
    </button>
  );
}

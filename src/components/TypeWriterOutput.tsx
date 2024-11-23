"use client";

// component css styles
import styles from "./TypeWriterOutput.module.css";

// next
import { usePathname } from "next/navigation";
import Image from "next/image";

// other libraries
import { useGlobalContext } from "@/lib/GlobalContext";
import useTypeWriter from "@/lib/useTypeWriter";

// assets
import avatar from "@/assets/components/page-title/avatar.jpg";

// types
interface TypeWriterOutputProps {
  fullText: string;
}

export default function TypeWriterOutput({ fullText }: TypeWriterOutputProps) {
  const pathname = usePathname();

  const { isTypedHome, setIsTypedHome, isTypedEduc, setIsTypedEduc, isTypedCont, setIsTypedCont } = useGlobalContext();
  const { typedText } = useTypeWriter({
    fullText,
    onFinished: () => {
      if (pathname === "/") {
        setIsTypedHome(true);
      } else if (pathname === "/education") {
        setIsTypedEduc(true);
      } else {
        setIsTypedCont(true);
      }
    },
  });

  let isFinished = false;
  if (pathname === "/") {
    isFinished = isTypedHome;
  } else if (pathname === "/education") {
    isFinished = isTypedEduc;
  } else {
    isFinished = isTypedCont;
  }

  return isFinished ? (
    <>
      <span className="sr-only">{fullText}</span>
      <span className={styles["type-writer-output"]}>
        {/* Show the avatar only on the homepage */}
        {pathname === "/" && <Image src={avatar} width={288} height={288} alt="Avatar" />}
        {fullText}
      </span>
    </>
  ) : (
    <>
      <span className="sr-only">{fullText}</span>
      <span className={styles["type-writer-output"]}>
        {/* Show the avatar only on the homepage */}
        {pathname === "/" && <Image src={avatar} width={288} height={288} alt="Avatar" />}
        {typedText}
      </span>
    </>
  );
}

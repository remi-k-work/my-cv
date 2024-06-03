"use client";

// component css styles
import styles from "./TypeWriterOutput.module.css";

// react
import { useEffect, useRef } from "react";

// next
import { usePathname } from "next/navigation";

// other libraries
import { useGlobalContext } from "../lib/GlobalContext";
import TypeWriter from "../lib/TypeWriter";

// types
interface TypeWriterOutputProps {
  pageTitles: PageTitles;
}

export default function TypeWriterOutput({ pageTitles }: TypeWriterOutputProps) {
  const pathname = usePathname();

  // Get the current page title data depending on the pathname of the location
  const fullText = pageTitles[pathname].intro;

  const { isTypedHome, setIsTypedHome, isTypedEduc, setIsTypedEduc, isTypedCont, setIsTypedCont } = useGlobalContext();
  const outputRef = useRef<HTMLSpanElement>(null);

  let isFinished = false;
  if (pathname === "/") {
    isFinished = isTypedHome;
  } else if (pathname === "/education") {
    isFinished = isTypedEduc;
  } else {
    isFinished = isTypedCont;
  }

  useEffect(() => {
    // Has the whole text already been typed?
    if (isFinished) {
      // Yes, leave immediately
      return;
    }

    function onFinished() {
      if (pathname === "/") {
        setIsTypedHome(true);
      } else if (pathname === "/education") {
        setIsTypedEduc(true);
      } else {
        setIsTypedCont(true);
      }
    }

    const controller = new AbortController();
    const typewriter = new TypeWriter(false, 50, 50, onFinished, outputRef.current!, controller.signal);

    typewriter.typeFullText(fullText);
    typewriter.start();

    return () => controller.abort();
  }, [isFinished, pathname, fullText]);

  return isFinished ? (
    <span className={styles["type-writer-output"]}>{fullText}</span>
  ) : (
    <span key={pathname} ref={outputRef} className={styles["type-writer-output"]}></span>
  );
}

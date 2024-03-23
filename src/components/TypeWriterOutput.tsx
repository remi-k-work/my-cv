// component css styles
import styles from "./TypeWriterOutput.module.css";

// react
import { useEffect, useState } from "react";

// other libraries
import animationInterval from "../lib/animationInterval";
import TypeWriter from "../lib/TypeWriter";

// types
interface TypeWriterOutputProps {
  fullText: string;
  isFinished?: boolean;
  onFinished: () => void;
}

export default function TypeWriterOutput({ fullText, isFinished = false, onFinished }: TypeWriterOutputProps) {
  const [typedContent, setTypedContent] = useState("");

  useEffect(() => {
    const typewriter = new TypeWriter(false, 35, 35, onFinished);
    const controller = new AbortController();

    if (isFinished) {
      return;
    }

    animationInterval(10, controller.signal, () => {
      setTypedContent(() => typewriter.typedContent);
    });

    typewriter.typeFullText(fullText);
    typewriter.start();

    return () => controller.abort();
  }, [fullText, isFinished, onFinished]);

  return <span className={styles["type-writer-output"]}>{isFinished ? fullText : typedContent + "|"}</span>;
}

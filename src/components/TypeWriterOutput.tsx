// component css styles
import styles from "./TypeWriterOutput.module.css";

// react
import { memo, useEffect, useRef } from "react";

// other libraries
import TypeWriter from "../lib/TypeWriter";

// types
interface TypeWriterOutputProps {
  fullText: string;
  isFinished?: boolean;
  onFinished: () => void;
}

const TypeWriterOutput = memo(function ({ fullText, isFinished = false, onFinished }: TypeWriterOutputProps) {
  const outputRef = useRef<HTMLSpanElement>(null);
  const isStarted = useRef(false);

  useEffect(() => {
    if (isFinished) {
      return;
    }

    if (isStarted.current) {
      return;
    }

    isStarted.current = true;
    const output = outputRef.current!;

    const typewriter = new TypeWriter(false, 50, 50, onFinished, output);
    typewriter.typeFullText(fullText);
    typewriter.start();
  }, [fullText, isFinished, onFinished]);

  return isFinished ? <span className={styles["type-writer-output"]}>{fullText}</span> : <span ref={outputRef} className={styles["type-writer-output"]}></span>;
});

export default TypeWriterOutput;

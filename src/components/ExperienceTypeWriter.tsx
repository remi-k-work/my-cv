"use client";

// component css styles
import styles from "./ExperienceTypeWriter.module.css";

// react
import { useEffect, useRef } from "react";

// other libraries
import TypeWriter from "../lib/TypeWriter";

// types
interface ExperienceTypeWriterProps {
  fullText: string;
}

export default function ExperienceTypeWriter({ fullText }: ExperienceTypeWriterProps) {
  // const outputRef = useRef<HTMLParagraphElement>(null);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const typewriter = new TypeWriter(false, 10, 10, () => {}, outputRef.current!, controller.signal);
  //   typewriter.typeFullText(fullText);
  //   typewriter.start();
  //   return () => controller.abort();
  // }, [fullText]);
  // return <p ref={outputRef} className={styles["experience-type-writer"]}></p>;
}

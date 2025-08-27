// react
import { useRef, useState, useEffect } from "react";

// other libraries
import TypeWriter from "@/lib/TypeWriter";

// types
interface UseTypeWriterProps {
  fullText: string;
  onFinished: () => void;
}

interface UseTypeWriterReturn {
  typedText: string;
}

export default function useTypeWriter({ fullText, onFinished }: UseTypeWriterProps): UseTypeWriterReturn {
  // To maintain referential equality and minimize excessive effect dependencies
  const onFinishedRef = useRef(onFinished);

  // Currently typed text on the typewriter
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    function handleChanged(typedText: string) {
      setTypedText(typedText);
    }

    const controller = new AbortController();
    const typewriter = new TypeWriter(false, 50, 50, handleChanged, onFinishedRef.current, controller.signal);

    typewriter.typeFullText(fullText);
    typewriter.start();

    return () => controller.abort();
  }, [fullText]);

  return { typedText };
}

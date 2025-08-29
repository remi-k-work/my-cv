"use client";

// other libraries
import useTypeWriter from "@/hooks/useTypeWriter";

// types
interface TypeWriterOutputProps {
  fullText: string;
}

export default function TypeWriterOutput({ fullText }: TypeWriterOutputProps) {
  const { typedText } = useTypeWriter({ fullText, onFinished: () => {} });

  return (
    <>
      <p className="sr-only">{fullText}</p>
      <p className="after:bg-accent-foreground text-center after:inline-block after:size-4 after:content-[''] sm:text-justify">{typedText}</p>
    </>
  );
}

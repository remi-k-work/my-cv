"use client";

// other libraries
import useIsPortrait from "@/hooks/useIsPortrait";

export default function Page() {
  const isPortrait = useIsPortrait();

  console.log(isPortrait);

  return (
    <>
      Test
      <article className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-4">
        <section className="bg-clr-primary-800 rounded-xl p-4">Test</section>
        <section className="bg-clr-primary-800 rounded-xl p-4">Test</section>
      </article>
    </>
  );
}

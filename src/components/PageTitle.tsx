"use client";

// next
import { usePathname } from "next/navigation";

// other libraries
import { useGlobalContext } from "@/lib/GlobalContext";

export default function PageTitle() {
  const pathname = usePathname();

  // Choose a random theme for the current page title to make it more engaging
  const { pageTitles, titleTheme } = useGlobalContext();

  // Get the current page title data depending on the pathname of the location
  if (!pageTitles[titleTheme][pathname]) return null;
  const { eyebrow, heading, intro } = pageTitles[titleTheme][pathname];

  return (
    <section className="mx-4 my-3 lg:mx-0">
      <p className="text-clr-secondary-400 text-lg tracking-widest uppercase">{eyebrow}</p>
      <h1 className="text-3xl uppercase">{heading}</h1>
      <p>{intro}</p>
    </section>
  );
}

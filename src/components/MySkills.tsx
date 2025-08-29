// next
import Image from "next/image";

// other libraries
import { cn } from "@/lib/utils";

// assets
import html from "@/assets/my-skills-html.svg";
import css from "@/assets/my-skills-css.svg";
import javascript from "@/assets/my-skills-javascript.svg";
import typescript from "@/assets/my-skills-typescript.svg";
import react from "@/assets/my-skills-react.svg";
import nextjs from "@/assets/my-skills-nextjs.svg";
import inkscape from "@/assets/my-skills-inkscape.svg";
import gimp from "@/assets/my-skills-gimp.svg";

export default function MySkills() {
  return (
    <aside
      className={cn(
        "bg-clr-primary-800 z-9 grid w-full [grid-area:skills]",
        "max-lg:fixed max-lg:bottom-0 max-lg:h-28",
        "before:border-primary-foreground before:fixed before:content-['']",
        "after:border-primary-foreground after:fixed after:-z-1 after:content-['']",
        "max-lg:before:bottom-14 max-lg:before:left-0 max-lg:before:w-full max-lg:before:border-b",
        "lg:before:left-11 lg:before:h-full lg:before:border-r",
        "lg:after:left-33 lg:after:h-full lg:after:border-r",
      )}
    >
      <ul
        className={cn(
          "grid place-content-evenly place-items-center gap-2",
          "grid-flow-col grid-cols-none",
          "lg:sticky lg:top-28 lg:h-[calc(100dvh-7rem)] lg:grid-flow-row lg:grid-cols-2",
        )}
      >
        <li>
          <Image
            src={html}
            alt="HTML"
            className={cn(
              "max-h-24 w-full max-w-24 opacity-0 [--_dest-opacity:1]",
              "max-lg:animate-slide-bt max-lg:translate-y-full",
              "lg:animate-slide-lr lg:-translate-x-full",
            )}
          />
        </li>
        <li>
          <Image
            src={css}
            alt="CSS"
            className={cn(
              "max-h-24 w-full max-w-24 opacity-0 [--_dest-opacity:1]",
              "max-lg:animate-slide-bt max-lg:translate-y-full max-lg:[animation-delay:0.2s]",
              "lg:animate-slide-lr lg:-translate-x-full lg:[animation-delay:0.2s]",
            )}
          />
        </li>
        <li className="grid *:col-span-full *:row-span-full">
          <Image
            src={javascript}
            alt="JavaScript"
            className={cn(
              "max-h-24 w-full max-w-24 opacity-0 [--_dest-opacity:1]",
              "max-lg:animate-slide-bt-fade-out max-lg:translate-y-full max-lg:[animation-delay:0.4s]",
              "lg:animate-slide-lr-fade-out lg:-translate-x-full lg:[animation-delay:0.4s]",
            )}
          />
          <Image
            src={typescript}
            alt="TypeScript"
            className={cn(
              "max-h-24 w-full max-w-24 opacity-0 [--_dest-opacity:0]",
              "max-lg:animate-slide-bt-fade-in max-lg:translate-y-full max-lg:[animation-delay:0.4s]",
              "lg:animate-slide-lr-fade-in lg:-translate-x-full lg:[animation-delay:0.4s]",
            )}
          />
        </li>
        <li className="grid *:col-span-full *:row-span-full">
          <Image
            src={react}
            alt="React"
            className={cn(
              "max-h-24 w-full max-w-24 opacity-0 [--_dest-opacity:1]",
              "max-lg:animate-slide-bt-fade-out max-lg:translate-y-full max-lg:[animation-delay:0.6s,8s]",
              "lg:animate-slide-lr-fade-out lg:-translate-x-full lg:[animation-delay:0.6s,8s]",
            )}
          />
          <Image
            src={nextjs}
            alt="NextJS"
            className={cn(
              "max-h-24 w-full max-w-24 opacity-0 [--_dest-opacity:0]",
              "max-lg:animate-slide-bt-fade-in max-lg:translate-y-full max-lg:[animation-delay:0.6s,8s]",
              "lg:animate-slide-lr-fade-in lg:-translate-x-full lg:[animation-delay:0.6s,8s]",
            )}
          />
        </li>
        <li className="grid *:col-span-full *:row-span-full">
          <Image
            src={inkscape}
            alt="Inkscape"
            className={cn(
              "max-h-24 w-full max-w-24 opacity-0 [--_dest-opacity:1]",
              "max-lg:animate-slide-bt-fade-out max-lg:translate-y-full max-lg:[animation-delay:0.8s,16s]",
              "lg:animate-slide-lr-fade-out lg:-translate-x-full lg:[animation-delay:0.8s,16s]",
            )}
          />
          <Image
            src={gimp}
            alt="GIMP"
            className={cn(
              "max-h-24 w-full max-w-24 opacity-0 [--_dest-opacity:0]",
              "max-lg:animate-slide-bt-fade-in max-lg:translate-y-full max-lg:[animation-delay:0.8s,16s]",
              "lg:animate-slide-lr-fade-in lg:-translate-x-full lg:[animation-delay:0.8s,16s]",
            )}
          />
        </li>
      </ul>
    </aside>
  );
}

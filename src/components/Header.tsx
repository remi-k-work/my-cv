"use client";

// next
import { usePathname } from "next/navigation";
import Link from "next/link";

// other libraries
import { cn } from "@/lib/utils";

// components
import LangChanger from "./LangChanger";

// assets
import { AcademicCapIcon, DocumentTextIcon, HomeIcon, PhoneIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

// types
import type { Lang, LocalizedContent } from "@/types/shared";

interface HeaderProps {
  preferredLang: Lang;
  localizedContent: LocalizedContent;
}

export default function Header({ preferredLang, localizedContent }: HeaderProps) {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isEduc = pathname === "/education";
  const isCont = pathname === "/contact";

  return (
    <header
      className={cn(
        "bg-clr-primary-800 z-10 [grid-area:header]",
        "lg:sticky lg:top-0",
        "before:absolute before:top-12 before:left-0 before:-z-1 before:h-px before:w-full before:content-['']",
        "before:animate-spark-h before:from-primary-foreground before:to-primary-foreground before:via-accent-foreground before:bg-gradient-to-r before:via-[0.5%] before:to-[1%] before:bg-size-[200%]",
        "lg:before:fixed lg:before:top-14",
        "max-lg:after:absolute max-lg:after:top-34 max-lg:after:left-0 max-lg:after:-z-1 max-lg:after:h-px max-lg:after:w-full max-lg:after:content-['']",
        "max-lg:after:animate-spark-h max-lg:after:from-primary-foreground max-lg:after:to-primary-foreground max-lg:after:via-accent-foreground max-lg:after:bg-gradient-to-r max-lg:after:via-[0.5%] max-lg:after:to-[1%] max-lg:after:bg-size-[200%] max-lg:after:[animation-direction:reverse]",
      )}
    >
      <nav
        className={cn(
          "mx-2 grid place-content-evenly place-items-center gap-x-4 gap-y-1",
          "h-44 grid-flow-row grid-cols-4",
          "lg:h-28 lg:grid-flow-col lg:grid-cols-none",
          "*:bg-background *:text-clr-primary-200 *:hover:text-accent-foreground *:border *:p-3",
        )}
      >
        <Link
          href="/"
          title={localizedContent["header"]["home"]}
          className={cn(isHome ? "border-foreground" : "border-primary-foreground hover:border-accent-foreground hover:scale-110")}
        >
          <HomeIcon className={cn("size-11", isHome && "text-foreground size-13")} />
        </Link>
        <Link
          href="/education"
          title={localizedContent["header"]["education"]}
          className={cn(isEduc ? "border-foreground" : "border-primary-foreground hover:border-accent-foreground hover:scale-110")}
        >
          <AcademicCapIcon className={cn("size-11", isEduc && "text-foreground size-13")} />
        </Link>
        <Link
          href="/contact"
          title={localizedContent["header"]["contact"]}
          className={cn(isCont ? "border-foreground" : "border-primary-foreground hover:border-accent-foreground hover:scale-110")}
        >
          <PhoneIcon className={cn("size-11", isCont && "text-foreground size-13")} />
        </Link>
        <Link
          href={localizedContent["header"]["hrefPdf"]}
          target="_blank"
          title={localizedContent["header"]["pdf"]}
          prefetch={false}
          className="border-primary-foreground hover:border-accent-foreground hover:scale-110"
        >
          <DocumentTextIcon className="size-11" />
        </Link>
        <Link
          href="https://fyxk1xpcf8.ufs.sh/f/l5x42vpjizuQBzebVYT4mCZanFKgWlzyG7xJr0c1IRhfEH6T"
          target="_blank"
          title={localizedContent["header"]["video"]}
          prefetch={false}
          className="border-primary-foreground hover:border-accent-foreground hover:scale-110"
        >
          <VideoCameraIcon className="size-11" />
        </Link>
        <Link
          href="https://linkedin.com/in/remi-k-work"
          target="_blank"
          title="LinkedIn"
          prefetch={false}
          className="border-primary-foreground hover:border-accent-foreground hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="size-11">
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            />
          </svg>
        </Link>
        <Link
          href="https://github.com/remi-k-work"
          target="_blank"
          title="GitHub"
          prefetch={false}
          className="border-primary-foreground hover:border-accent-foreground hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="size-11">
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
        </Link>
        <LangChanger preferredLang={preferredLang} />
      </nav>
    </header>
  );
}

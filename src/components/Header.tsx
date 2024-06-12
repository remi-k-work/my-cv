"use client";

// component css styles
import styles from "./Header.module.css";

// next
import { usePathname } from "next/navigation";
import Link from "next/link";

// other libraries
import clsx from "clsx";
import { DocumentTextIcon } from "@heroicons/react/24/solid";

// components
import LangChanger from "./LangChanger";

// types
interface HeaderProps {
  localizedContent: LocalizedContent;
}

export default function Header({ localizedContent }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className={styles["header"]}>
      <nav>
        <Link href="/" className={clsx(pathname === "/" && styles["active"])}>
          {localizedContent["header"]["home"]}
        </Link>
        <Link href="/education" className={clsx(pathname === "/education" && styles["active"])}>
          {localizedContent["header"]["education"]}
        </Link>
        <Link href="/contact" className={clsx(pathname === "/contact" && styles["active"])}>
          {localizedContent["header"]["contact"]}
        </Link>
        <Link href={localizedContent["header"]["hrefPdf"]} target="_blank" title={localizedContent["header"]["pdf"]} prefetch={false}>
          <DocumentTextIcon width={24} height={24} />
        </Link>
        <LangChanger />
      </nav>
    </header>
  );
}

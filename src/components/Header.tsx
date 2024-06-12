"use client";

// component css styles
import styles from "./Header.module.css";

// next
import { usePathname } from "next/navigation";
import Link from "next/link";

// other libraries
import clsx from "clsx";
import { AcademicCapIcon, DocumentTextIcon, HomeIcon, PhoneIcon } from "@heroicons/react/24/solid";

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
        <Link href="/" className={clsx(pathname === "/" && styles["active"])} title={localizedContent["header"]["home"]}>
          <HomeIcon width={32} height={32} />
        </Link>
        <Link href="/education" className={clsx(pathname === "/education" && styles["active"])} title={localizedContent["header"]["education"]}>
          <AcademicCapIcon width={32} height={32} />
        </Link>
        <Link href="/contact" className={clsx(pathname === "/contact" && styles["active"])} title={localizedContent["header"]["contact"]}>
          <PhoneIcon width={32} height={32} />
        </Link>
        <Link href={localizedContent["header"]["hrefPdf"]} target="_blank" title={localizedContent["header"]["pdf"]} prefetch={false}>
          <DocumentTextIcon width={32} height={32} />
        </Link>
        <LangChanger />
      </nav>
    </header>
  );
}

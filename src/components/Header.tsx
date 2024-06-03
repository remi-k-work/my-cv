"use client";

// component css styles
import styles from "./Header.module.css";

// next
import { usePathname } from "next/navigation";
import Link from "next/link";

// other libraries
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles["header"]}>
      <nav>
        <Link href="/" className={clsx(pathname === "/" && styles["active"])}>
          Home
        </Link>
        <Link href="/education" className={clsx(pathname === "/education" && styles["active"])}>
          Education
        </Link>
        <Link href="/contact" className={clsx(pathname === "/contact" && styles["active"])}>
          Contact
        </Link>
        <Link href="/my-cv.pdf" target="_blank">
          <b>Pdf</b>
        </Link>
      </nav>
    </header>
  );
}

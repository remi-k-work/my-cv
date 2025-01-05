"use client";

// component css styles
import styles from "./ContactMap.module.css";

// next
import dynamic from "next/dynamic";

// other libraries
import { useGlobalContext } from "@/lib/GlobalContext";

// components
const ReactLeaflet = dynamic(() => import("@/components/ReactLeaflet"), { ssr: false });

export default function ContactMap() {
  const { localizedContent } = useGlobalContext();

  return (
    <div className={styles["contact-map"]}>
      <ReactLeaflet />
      <div className={styles["contact-map__overlay"]}>
        Remi
        <br />
        Broniewskiego 24
        <br />
        35-206 Rzeszów
        <br />
        {localizedContent["contactMap"]["poland"]}
        <br />
        <br />
        <a href="mailto:remi.k.work@proton.me">remi.k.work@proton.me</a>
      </div>
    </div>
  );
}

"use client";

// component css styles
import styles from "./MyCertificates.module.css";

// next
import Image from "next/image";
import Link from "next/link";

// other libraries
import { useGlobalContext } from "@/lib/GlobalContext";

// assets
import * as assets from "@/assets/my-certificates";

export default function MyCertificates() {
  const { localizedContent } = useGlobalContext();

  return (
    <figure className={styles["my-certificates"]}>
      <figcaption>{localizedContent["myCertificates"]["myCertificates"]}</figcaption>
      <Link href="/my-certificates.pdf" target="_blank" prefetch={false}>
        <Image src={assets.artcom} alt="ARTCOM" />
        <Image src={assets.alcc} alt="ALCC" />
        <Image src={assets.prattOrig} alt="Pratt" />
        <Image src={assets.prattTrans} alt="Pratt" />
      </Link>
    </figure>
  );
}

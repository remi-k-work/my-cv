// component css styles
import styles from "./MyCertificates.module.css";

// next
import Image from "next/image";
import Link from "next/link";

// assets
import * as assets from "../assets/my-certificates";

// types
interface MyCertificatesProps {
  localizedContent: LocalizedContent;
}

export default function MyCertificates({ localizedContent }: MyCertificatesProps) {
  return (
    <figure className={styles["my-certificates"]}>
      <figcaption>{localizedContent["myCertificates"]["myCertificates"]}</figcaption>
      <Link href="/my-certificates.pdf" target="_blank" prefetch={false}>
        <Image src={assets.alccLg} width={1200} height={854} alt="ALCC" />
        <Image src={assets.prattOrigLg} width={1200} height={854} alt="Pratt" />
        <Image src={assets.prattTransLg} width={1200} height={854} alt="Pratt" />
      </Link>
    </figure>
  );
}

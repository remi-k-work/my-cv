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
        <Image src={assets.artcom} alt="ARTCOM" />
        <Image src={assets.alcc} alt="ALCC" />
        <Image src={assets.prattOrig} alt="Pratt" />
        <Image src={assets.prattTrans} alt="Pratt" />
      </Link>
    </figure>
  );
}

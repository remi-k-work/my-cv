// component css styles
import styles from "./MyCertificates.module.css";

// next
import Image from "next/image";
import Link from "next/link";

// assets
import * as assets from "../assets/my-certificates";

export default function MyCertificates() {
  return (
    <figure className={styles["my-certificates"]}>
      <figcaption>My Certificates</figcaption>
      <Link href="/my-certificates.pdf" target="_blank">
        <Image src={assets.alccLg} width={1200} height={854} alt="ALCC" />
        <Image src={assets.prattOrigLg} width={1200} height={854} alt="Pratt" />
        <Image src={assets.prattTransLg} width={1200} height={854} alt="Pratt" />
      </Link>
    </figure>
  );
}

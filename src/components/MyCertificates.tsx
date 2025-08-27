"use client";

// next
import Image from "next/image";
import Link from "next/link";

// other libraries
import { useGlobalContext } from "@/lib/GlobalContext";

// assets
import artcom from "@/assets/my-certificates-artcom.webp";
import alcc from "@/assets/my-certificates-alcc.webp";
import prattOrig from "@/assets/my-certificates-pratt-orig.webp";
import prattTrans from "@/assets/my-certificates-pratt-trans.webp";

export default function MyCertificates() {
  const { localizedContent } = useGlobalContext();

  return (
    <figure className="mx-auto w-full max-w-xl">
      <figcaption className="bg-clr-primary-300 mb-4 place-self-end rounded-ss-xl rounded-ee-xl p-3 italic">
        {localizedContent["myCertificates"]["myCertificates"]}
      </figcaption>
      <Link href="/my-certificates.pdf" target="_blank" prefetch={false} className="space-y-4">
        <Image src={artcom} alt="ARTCOM" />
        <Image src={alcc} alt="ALCC" />
        <Image src={prattOrig} alt="Pratt" />
        <Image src={prattTrans} alt="Pratt" />
      </Link>
    </figure>
  );
}

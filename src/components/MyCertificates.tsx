// next
import Image from "next/image";
import Link from "next/link";

// other libraries
import DataLoader from "@/lib/DataLoader";

// assets
import artcom from "@/assets/my-certificates-artcom.webp";
import alcc from "@/assets/my-certificates-alcc.webp";
import prattOrig from "@/assets/my-certificates-pratt-orig.webp";
import prattTrans from "@/assets/my-certificates-pratt-trans.webp";

export default async function MyCertificates() {
  // Create an instance of the data loader needed for localization
  const dataLoader = await DataLoader.create();

  return (
    <figure className="mx-auto w-full max-w-4xl">
      <figcaption className="bg-primary-foreground mb-4 place-self-end rounded-ss-xl rounded-ee-xl p-3 italic">
        {dataLoader.localizedContent()["myCertificates"]["myCertificates"]}
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

"use client";

// next
import dynamic from "next/dynamic";
import Image from "next/image";

// other libraries
import { useGlobalContext } from "@/lib/GlobalContext";

// components
const ReactLeaflet = dynamic(() => import("@/components/ReactLeaflet"), { ssr: false });

// assets
import avatar from "@/assets/avatar.jpg";

export default function ContactMap() {
  const { localizedContent } = useGlobalContext();

  return (
    <div className="relative z-0 mx-auto size-full min-h-72 max-w-xl">
      <ReactLeaflet />
      <div className="bg-clr-primary-700/90 absolute end-4 top-4 p-3 text-sm">
        <Image src={avatar} alt="Avatar" className="max-h-32 w-full object-cover" />
        <p className="mt-4">Remi</p>
        <p className="text-clr-primary-200">Broniewskiego 24</p>
        <p className="text-clr-primary-200">35-206 Rzeszów</p>
        <p className="text-clr-primary-200 mb-4">{localizedContent["contactMap"]["poland"]}</p>
        <a href="mailto:remi.k.work@proton.me" className="underline">
          remi.k.work@proton.me
        </a>
      </div>
    </div>
  );
}

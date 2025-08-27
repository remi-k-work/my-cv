"use client";

// react
import { Fragment } from "react";

// other libraries
import { useGlobalContext } from "@/lib/GlobalContext";

export default function MyEducation() {
  const { localizedContent, educationSchools } = useGlobalContext();

  return (
    <figure className="mx-auto w-full max-w-xl">
      <figcaption className="bg-clr-primary-300 mb-4 place-self-end rounded-ss-xl rounded-ee-xl p-3 italic">
        {localizedContent["myEducation"]["myEducation"]}
      </figcaption>
      <dl>
        {educationSchools.map(({ name, year, location, info }, schoolIndex) => (
          <Fragment key={schoolIndex}>
            <dt className="mb-4">
              <h2 className="text-clr-primary-200 text-lg uppercase">{name}</h2>
              <p className="text-clr-accent-400 text-sm font-semibold tracking-widest">{year}</p>
              <p className="text-clr-primary-300">{location}</p>
            </dt>
            <dd className="mb-8 last:mb-0">{info}</dd>
          </Fragment>
        ))}
      </dl>
    </figure>
  );
}

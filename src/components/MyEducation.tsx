// react
import { Fragment } from "react";

// other libraries
import DataLoader from "@/lib/DataLoader";

export default async function MyEducation() {
  // Create an instance of the data loader needed for localization
  const dataLoader = await DataLoader.create();

  return (
    <figure className="mx-auto w-full max-w-xl">
      <figcaption className="bg-primary-foreground mb-4 place-self-end rounded-ss-xl rounded-ee-xl p-3 italic">
        {dataLoader.localizedContent()["myEducation"]["myEducation"]}
      </figcaption>
      <dl>
        {dataLoader.allEducationSchools().map(({ name, year, location, info }, schoolIndex) => (
          <Fragment key={schoolIndex}>
            <dt className="mb-4">
              <h2 className="text-clr-primary-200 text-lg uppercase">{name}</h2>
              <p className="text-accent-foreground text-sm font-semibold tracking-widest">{year}</p>
              <p className="text-primary-foreground">{location}</p>
            </dt>
            <dd className="mb-8 last:mb-0">{info}</dd>
          </Fragment>
        ))}
      </dl>
    </figure>
  );
}

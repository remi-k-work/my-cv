// other libraries
import DataLoader from "@/lib/DataLoader";
import { getRandomInt } from "@/lib/helpers";

// components
import PageTitle from "@/components/PageTitle";
import ExperienceSlider from "@/components/experience-slider";

export default async function Page() {
  // Create an instance of the data loader needed for localization
  const dataLoader = await DataLoader.create();

  return (
    <>
      <PageTitle titleTheme={getRandomInt(0, 2)} pathname="/" />
      <article className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-4">
        <section className="bg-clr-primary-800 rounded-xl p-4">
          <ExperienceSlider localizedContent={dataLoader.localizedContent()} allExperiences={dataLoader.allExperiences()} type="e" />
        </section>
        <section className="bg-clr-primary-800 rounded-xl p-4">
          <ExperienceSlider localizedContent={dataLoader.localizedContent()} allExperiences={dataLoader.allExperiences()} type="p" />
        </section>
      </article>
    </>
  );
}

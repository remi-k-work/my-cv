// other libraries
import DataLoader from "@/lib/DataLoader";
import { getRandomInt } from "@/lib/helpers";

// components
import PageTitle from "@/components/PageTitle";
import ExperienceDetails from "@/components/experience-details";

export default async function Page({ params: paramsPromise }: PageProps<"/exp/[type]/[index]">) {
  const { type, index } = await paramsPromise;
  const validType = type === "e" || type === "p" ? type : "e";
  const validIndex = Number(index);

  // Create an instance of the data loader needed for localization
  const dataLoader = await DataLoader.create();

  return (
    <>
      <PageTitle titleTheme={getRandomInt(0, 2)} pathname="/" />
      <ExperienceDetails localizedContent={dataLoader.localizedContent()} allExperiences={dataLoader.allExperiences()} type={validType} index={validIndex} />
    </>
  );
}

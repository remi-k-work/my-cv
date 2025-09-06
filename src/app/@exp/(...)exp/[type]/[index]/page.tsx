// other libraries
import DataLoader from "@/lib/DataLoader";

// components
import ExperienceModal from "@/components/ExperienceModal";
import ExperienceDetails from "@/components/experience-details";

export default async function Page({ params: paramsPromise }: PageProps<"/exp/[type]/[index]">) {
  const { type, index } = await paramsPromise;
  const validType = type === "e" || type === "p" ? type : "e";
  const validIndex = Number(index);

  // Create an instance of the data loader needed for localization
  const { localizedContent, allExperiences } = await DataLoader.create();

  return (
    <ExperienceModal localizedContent={localizedContent()}>
      <ExperienceDetails localizedContent={localizedContent()} allExperiences={allExperiences()} type={validType} index={validIndex} />
    </ExperienceModal>
  );
}

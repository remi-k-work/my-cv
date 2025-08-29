// other libraries
import DataLoader from "@/lib/DataLoader";

// components
import ExperienceModal from "@/components/ExperienceModal";
import ExperienceDetails from "@/components/ExperienceDetails";

// types
interface PageProps {
  params: Promise<{ type: "e" | "p"; index: number }>;
}

export default async function Page({ params: paramsPromise }: PageProps) {
  const { type, index } = await paramsPromise;

  // Create an instance of the data loader needed for localization
  const dataLoader = await DataLoader.create();

  return (
    <ExperienceModal localizedContent={dataLoader.localizedContent()}>
      <ExperienceDetails localizedContent={dataLoader.localizedContent()} allExperiences={dataLoader.allExperiences()} type={type} index={index} />
    </ExperienceModal>
  );
}

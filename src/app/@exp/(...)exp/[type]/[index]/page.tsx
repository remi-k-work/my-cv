// other libraries
import DataLoader from "@/lib/DataLoader";

// components
import ExperienceModal from "@/components/ExperienceModal";
import ExperienceDetails from "@/components/ExperienceDetails";

// types
interface PageProps {
  params: { type: "e" | "p"; index: number };
}

export default async function Page({ params: { type, index } }: PageProps) {
  // Create an instance of the data loader needed for localization
  const dataLoader = await DataLoader.init();

  return (
    <ExperienceModal localizedContent={dataLoader.localizedContent}>
      <ExperienceDetails type={type} index={index} />
    </ExperienceModal>
  );
}

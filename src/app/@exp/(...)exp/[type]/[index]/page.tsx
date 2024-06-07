// components
import ExperienceModal from "@/components/ExperienceModal";
import ExperienceDetails from "@/components/ExperienceDetails";

// types
interface PageProps {
  params: { type: "e" | "p"; index: number };
}

export default async function Page({ params: { type, index } }: PageProps) {
  return (
    <ExperienceModal>
      <ExperienceDetails type={type} index={index} />
    </ExperienceModal>
  );
}

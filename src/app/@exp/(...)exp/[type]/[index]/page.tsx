// components
import ExperienceModal from "@/components/ExperienceModal";
import ExperienceDetails from "@/components/ExperienceDetails";

// types
interface PageProps {
  params: Promise<{ type: "e" | "p"; index: number }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;

  const {
    type,
    index
  } = params;

  return (
    <ExperienceModal>
      <ExperienceDetails type={type} index={index} />
    </ExperienceModal>
  );
}

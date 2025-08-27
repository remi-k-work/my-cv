// components
import ExperienceDetails from "@/components/ExperienceDetails";

// types
interface PageProps {
  params: Promise<{ type: "e" | "p"; index: number }>;
}

export default async function Page({ params: paramsPromise }: PageProps) {
  const { type, index } = await paramsPromise;

  return <ExperienceDetails type={type} index={index} />;
}

// components
import ExperienceSlider from "@/components/ExperienceSlider";

export default async function Page() {
  return (
    <article className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-4">
      <section className="bg-clr-primary-800 rounded-xl p-4">
        <ExperienceSlider type={"e"} />
      </section>
      <section className="bg-clr-primary-800 rounded-xl p-4">
        <ExperienceSlider type={"p"} />
      </section>
    </article>
  );
}

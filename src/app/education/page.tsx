// other libraries
import { getRandomInt } from "@/lib/helpers";

// components
import PageTitle from "@/components/PageTitle";
import MyCertificates from "@/components/MyCertificates";
import MyEducation from "@/components/MyEducation";

export default async function Page() {
  return (
    <>
      <PageTitle titleTheme={getRandomInt(0, 2)} pathname="/education" />
      <article className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-4">
        <section className="bg-clr-primary-800 rounded-xl p-4">
          <MyCertificates />
        </section>
        <section className="bg-clr-primary-800 rounded-xl p-4">
          <MyEducation />
        </section>
      </article>
    </>
  );
}

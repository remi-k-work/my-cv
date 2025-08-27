// components
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";

export default async function Page() {
  return (
    <article className="grid auto-rows-[minmax(min(100%,24rem),1fr)] grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-4">
      <section className="bg-clr-primary-800 rounded-xl p-4">
        <ContactForm />
      </section>
      <section className="bg-clr-primary-800 rounded-xl p-4">
        <ContactMap />
      </section>
    </article>
  );
}

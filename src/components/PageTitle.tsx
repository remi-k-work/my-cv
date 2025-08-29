// other libraries
import DataLoader from "@/lib/DataLoader";

// types
interface PageTitleProps {
  titleTheme: number;
  pathname: string;
}

export default async function PageTitle({ titleTheme, pathname }: PageTitleProps) {
  // Create an instance of the data loader needed for localization
  const dataLoader = await DataLoader.create();

  // Get the current page title data depending on the theme and pathname
  const { eyebrow, heading, intro } = dataLoader.allPageTitles()[titleTheme][pathname];

  return (
    <section className="mx-4 my-3 lg:mx-0">
      <p className="text-secondary-foreground text-lg tracking-widest uppercase">{eyebrow}</p>
      <h1 className="text-3xl uppercase">{heading}</h1>
      <p>{intro}</p>
    </section>
  );
}

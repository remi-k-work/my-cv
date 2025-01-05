// react
import { ReactNode } from "react";

// other libraries
import DataLoader from "@/lib/DataLoader";

// components
import { GlobalContextProvider } from "@/lib/GlobalContext";

// types
interface GlobalContextFetcherProps {
  children: ReactNode;
}

export default async function GlobalContextFetcher({ children }: GlobalContextFetcherProps) {
  // Create an instance of the data loader needed for localization
  const dataLoader = await DataLoader.create();

  // Obtain the localized content for the preferred language
  const localizedContent = await dataLoader.localizedContent();

  // Get all the page titles from an outside source
  const pageTitles = await dataLoader.allPageTitles();

  // Obtain a list of all job experiences from an outside source
  const allExperiences = await dataLoader.allExperiences();

  // Obtain a list of all education schools from an outside source
  const educationSchools = await dataLoader.allEducationSchools();

  return (
    <GlobalContextProvider
      preferredLang={dataLoader.lang}
      localizedContent={localizedContent}
      pageTitles={pageTitles}
      allExperiences={allExperiences}
      educationSchools={educationSchools}
    >
      {children}
    </GlobalContextProvider>
  );
}

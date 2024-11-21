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
  const { lang, localizedContent } = await DataLoader.init();

  return (
    <GlobalContextProvider preferredLang={lang} localizedContent={localizedContent}>
      {children}
    </GlobalContextProvider>
  );
}

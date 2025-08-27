"use client";

// react
import { createContext, useContext, useState, useEffect } from "react";

// other libraries
import { getRandomInt } from "@/lib/helpers";

// types
import type { Lang } from "@/lib/DataLoader";
import type { EducationSchool, JobExperience, LocalizedContent, PageTitles } from "@/types/shared";

interface GlobalContextType {
  preferredLang: Lang;
  localizedContent: LocalizedContent;
  pageTitles: PageTitles[];
  allExperiences: JobExperience[][];
  educationSchools: EducationSchool[];

  titleTheme: number;

  isTypedHome: boolean;
  setIsTypedHome: React.Dispatch<React.SetStateAction<boolean>>;
  isTypedEduc: boolean;
  setIsTypedEduc: React.Dispatch<React.SetStateAction<boolean>>;
  isTypedCont: boolean;
  setIsTypedCont: React.Dispatch<React.SetStateAction<boolean>>;
}

interface GlobalContextProviderProps {
  preferredLang: Lang;
  localizedContent: LocalizedContent;
  pageTitles: PageTitles[];
  allExperiences: JobExperience[][];
  educationSchools: EducationSchool[];
  children: React.ReactNode;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalContextProvider({ preferredLang, localizedContent, pageTitles, allExperiences, educationSchools, children }: GlobalContextProviderProps) {
  const [titleTheme, setTitleTheme] = useState(0);

  const [isTypedHome, setIsTypedHome] = useState(false);
  const [isTypedEduc, setIsTypedEduc] = useState(false);
  const [isTypedCont, setIsTypedCont] = useState(false);

  // Use an effect hook in order to prevent ssr inconsistencies and errors
  useEffect(() => {
    // Choose a random theme for the current page title to make it more engaging
    setTitleTheme(getRandomInt(0, 2));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        preferredLang,
        localizedContent,
        pageTitles,
        allExperiences,
        educationSchools,
        titleTheme,
        isTypedHome,
        setIsTypedHome,
        isTypedEduc,
        setIsTypedEduc,
        isTypedCont,
        setIsTypedCont,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) throw new Error("useGlobalContext must be used within a GlobalContextProvider.");
  return context;
}

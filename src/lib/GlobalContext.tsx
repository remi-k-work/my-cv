"use client";

// react
import { createContext, useContext, useState, useEffect } from "react";

// other libraries
import { Lang } from "@/lib/DataLoader";

// types
interface GlobalContextType {
  lang?: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang | undefined>>;
  isTypedHome: boolean;
  setIsTypedHome: React.Dispatch<React.SetStateAction<boolean>>;
  isTypedEduc: boolean;
  setIsTypedEduc: React.Dispatch<React.SetStateAction<boolean>>;
  isTypedCont: boolean;
  setIsTypedCont: React.Dispatch<React.SetStateAction<boolean>>;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  const [lang, setLang] = useState<Lang>();
  const [isTypedHome, setIsTypedHome] = useState(false);
  const [isTypedEduc, setIsTypedEduc] = useState(false);
  const [isTypedCont, setIsTypedCont] = useState(false);

  // Use an effect hook in order to prevent ssr inconsistencies and errors
  useEffect(() => {
    setLang(document.documentElement.lang as Lang);
  }, []);

  return (
    <GlobalContext.Provider value={{ lang, setLang, isTypedHome, setIsTypedHome, isTypedEduc, setIsTypedEduc, isTypedCont, setIsTypedCont }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) throw new Error("useGlobalContext must be used within a GlobalContextProvider.");
  return context;
}

// component css styles
import styles from "./Root.module.css";

// react
import { useState } from "react";

// rrd imports
import { Outlet, NavLink, ScrollRestoration, useOutletContext } from "react-router-dom";

// components
import MySkills from "../components/MySkills";

// types
interface ContextType {
  isTypedHome: boolean;
  setIsTypedHome: React.Dispatch<React.SetStateAction<boolean>>;
  isTypedEduc: boolean;
  setIsTypedEduc: React.Dispatch<React.SetStateAction<boolean>>;
  isTypedCont: boolean;
  setIsTypedCont: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Root() {
  const [isTypedHome, setIsTypedHome] = useState(false);
  const [isTypedEduc, setIsTypedEduc] = useState(false);
  const [isTypedCont, setIsTypedCont] = useState(false);

  return (
    <div className={styles["main-grid"]}>
      <div className={styles["main-grid__placehl"]}></div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="education">Education</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <a href="/my-cv.pdf" target="_blank">
            <b>Pdf</b>
          </a>
        </nav>
      </header>
      <aside>
        <MySkills />
      </aside>
      <main>
        <ScrollRestoration />
        <Outlet context={{ isTypedHome, setIsTypedHome, isTypedEduc, setIsTypedEduc, isTypedCont, setIsTypedCont } satisfies ContextType} />
      </main>
    </div>
  );
}

export function useRootContext() {
  return useOutletContext<ContextType>();
}

// loader
export async function rootLoader(): Promise<PageTitles> {
  // Get all the page titles from an outside source
  const response = await fetch("/data/page-titles.json");
  if (!response.ok) {
    throw new Error("Unable to load data.");
  }

  return (await response.json()) as PageTitles;
}

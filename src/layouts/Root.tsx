// component css styles
import styles from "./Root.module.css";

// rrd imports
import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";

// components
import MySkills from "../components/MySkills";
import PageTitle from "../components/PageTitle";

export default function Root() {
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
        <PageTitle />
        <Outlet />
      </main>
    </div>
  );
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

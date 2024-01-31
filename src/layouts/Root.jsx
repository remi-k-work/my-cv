// component css styles
import styles from "./Root.module.css";

// rrd imports
import { Outlet, NavLink, useLocation, useLoaderData, ScrollRestoration } from "react-router-dom";

// components
import MySkills from "../components/MySkills";
import PageTitle from "../components/PageTitle";

// assets
import avatar from "../assets/components/page-title/avatar.jpg";

export default function Root() {
  const pageTitles = useLoaderData();
  const location = useLocation();

  // Get the current page title data depending on the pathname of the location
  const pageTitle = pageTitles[location.pathname];

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
        {location.pathname === "/" ? (
          // Show the avatar only on the homepage
          <PageTitle {...pageTitle}>
            <img src={avatar} width={288} height={288} alt="Avatar" />
            {pageTitle?.intro}
          </PageTitle>
        ) : (
          <PageTitle {...pageTitle}>{pageTitle?.intro}</PageTitle>
        )}
        <Outlet />
      </main>
    </div>
  );
}

// loader
export async function rootLoader() {
  // Get all the page titles from an outside source
  const response = await fetch("/data/page-titles.json");
  if (!response.ok) {
    throw new Error("Unable to load data.");
  }

  const data = await response.json();
  return data;
}

import styles from "./Root.module.css";
import { Outlet, NavLink } from "react-router-dom";

import MySkills from "../components/MySkills";
import PageTitle from "../components/PageTitle";

function Root({ pageTitle }) {
  return (
    <div className={styles["main-grid"]}>
      <div className={styles["main-grid__placehl"]}></div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="education">Education</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>
      <aside>
        <MySkills />
      </aside>
      <main>
        <PageTitle {...pageTitle} />
        <Outlet />
      </main>
    </div>
  );
}

export default Root;

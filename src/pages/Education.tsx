// component css styles
import styles from "./Education.module.css";

// react
import { useCallback } from "react";

// rrd imports
import { useRouteLoaderData, useLocation } from "react-router-dom";

// other libraries
import { useRootContext } from "../layouts/Root";

// components
import PageTitle from "../components/PageTitle";
import MyCertificates from "../components/MyCertificates";
import MyEducation from "../components/MyEducation";

export default function Education() {
  const pageTitles = useRouteLoaderData("root") as PageTitles;
  const location = useLocation();

  const { isTypedEduc, setIsTypedEduc } = useRootContext();

  // Get the current page title data depending on the pathname of the location
  const pageTitle = pageTitles[location.pathname];

  const handleTypedEduc = useCallback(() => setIsTypedEduc(true), []);

  return (
    <>
      <PageTitle {...pageTitle} isFinished={isTypedEduc} onFinished={handleTypedEduc} />

      <article className={styles["education"]}>
        <section>
          <MyCertificates />
        </section>
        <section>
          <MyEducation />
        </section>
      </article>
    </>
  );
}

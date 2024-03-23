// rrd imports
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// other libraries
import { Analytics } from "@vercel/analytics/react";

// *** Pages ***
import Home, { homeLoader } from "./pages/Home";
import Education from "./pages/Education";
import Contact, { contactAction } from "./pages/Contact";

// *** Layouts ***
import { default as RootLayout, rootLoader } from "./layouts/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} loader={rootLoader} id="root">
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="education" element={<Education />} />
      <Route path="contact" element={<Contact />} action={contactAction} />
    </Route>,
  ),
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics debug={false} />
    </>
  );
}

import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// *** Pages ***
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

// *** Layouts ***
import { default as RootLayout } from "./layouts/Root";

const pageTitleHome = {
  eyebrow: "Skills & Experience",
  heading: "My Resume",
  intro:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam dolor itaque blanditiis quia quas inventore aspernatur porro cumque, natus obcaecati accusantium aperiam nesciunt ipsa ullam voluptate dolorum voluptas temporibus.",
};
const pageTitleEducation = {
  eyebrow: "Education",
  heading: "Education",
  intro:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam dolor itaque blanditiis quia quas inventore aspernatur porro cumque, natus obcaecati accusantium aperiam nesciunt ipsa ullam voluptate dolorum voluptas temporibus.",
};
const pageTitleContact = {
  eyebrow: "Contact Me",
  heading: "Contact Me",
  intro:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam dolor itaque blanditiis quia quas inventore aspernatur porro cumque, natus obcaecati accusantium aperiam nesciunt ipsa ullam voluptate dolorum voluptas temporibus.",
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout pageTitle={pageTitleHome} />}>
        <Route index element={<Home />} />
      </Route>
      <Route element={<RootLayout pageTitle={pageTitleEducation} />}>
        <Route path="education" element={<Education />} />
      </Route>
      <Route element={<RootLayout pageTitle={pageTitleContact} />}>
        <Route path="contact" element={<Contact />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

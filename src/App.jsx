import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

// *** Pages ***
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact, { contactAction } from "./pages/Contact";

// *** Layouts ***
import { default as RootLayout } from "./layouts/Root";

const pageTitleHome = {
  eyebrow: "Self-Taught Web Developer",
  heading: "Ready to Relaunch My Career",
  intro:
    "I am a self-taught web developer with over 5 years of experience in building and maintaining websites. I have a strong foundation in ASP.NET and C#, but I am also eager to learn new technologies and frameworks. I took a long break from the industry to focus on other pursuits, but I am now passionate about returning to web development. I am particularly interested in internship opportunities where I can learn from experienced professionals and contribute to a team. Even though I had a long break, I am confident that I can quickly get back up to speed on the latest technologies and trends. I am a hard worker, and I am always willing to go the extra mile. I am also a team player, and I am eager to learn new things. I am confident that I can be a valuable asset to any company that is willing to give me a chance.",
};
const pageTitleEducation = {
  eyebrow: "Developer with Interactive Media Degree",
  heading: "My Education",
  intro:
    "I began my studies at the Ignacy Łukasiewicz Rzeszów University of Technology in Poland, where I majored in computer science. I studied for two years before transferring to Pratt Institute in the United States. At Pratt, I enrolled in the Interactive Media program, where I learned about the latest trends in web development, design, and user experience. While I do not have a formal degree in computer science, I have a strong foundation in the fundamentals of the subject. I am also proficient in a variety of programming languages and technologies, including JavaScript, HTML, CSS, and React. I am a hard worker, and I am always willing to go the extra mile. I am also a team player, and I am eager to learn new things. I am confident that I can be a valuable asset to any company that is willing to give me a chance.",
};
const pageTitleContact = {
  eyebrow: "Get in Touch",
  heading: "Contact Me",
  intro:
    "I would love to hear from you! Whether you have a question about my work or you are interested in hiring me for a project, please feel free to contact me using the form below. I will do my best to respond to your inquiry as soon as possible. Please note that I am currently looking for internship opportunities, so if you have any leads, please let me know! I hope to hear from you soon!",
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
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics debug={false} />
    </>
  );
}

export default App;

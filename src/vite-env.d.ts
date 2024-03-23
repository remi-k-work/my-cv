/// <reference types="vite/client" />

interface JobExperience {
  year: string;
  role: string;
  company: string;
  txt: string;
  gitHubLink?: string;
  liveLink: string;
  lgPic: string;
  mdPic: string;
  smPic: string;
  xsPic: string;
}

interface PageTitles {
  [key: string]: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
}

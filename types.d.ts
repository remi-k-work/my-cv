// types
interface JobExperience {
  year: string;
  role: string;
  company: string;
  txt: string;
  gitHubLink?: string;
  liveLink: string;
  lgPic: string;
}

interface PageTitles {
  [key: string]: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
}

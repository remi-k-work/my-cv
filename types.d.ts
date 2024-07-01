// types
interface JobExperience {
  year: string;
  role: string;
  company: string;
  txt: string;
  gitHubLink?: string;
  liveLink: string;
  lgPic: string;
  skillsUsed: string[];
}

interface EducationSchool {
  name: string;
  year: string;
  location: string;
  info: string;
}

interface PageTitles {
  [key: string]: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
}

interface LocalizedContent {
  [key: string]: {
    [key: string]: string;
  };
}

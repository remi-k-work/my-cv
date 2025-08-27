// types
export interface JobExperience {
  year: string;
  role: string;
  company: string;
  txt: string;
  gitHubLink?: string;
  liveLink?: string;
  lgPic: string;
  skillsUsed: string[];
}

export interface EducationSchool {
  name: string;
  year: string;
  location: string;
  info: string;
}

export interface PageTitles {
  [key: string]: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
}

export interface LocalizedContent {
  [key: string]: {
    [key: string]: string;
  };
}

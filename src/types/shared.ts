// types
export type Lang = "en" | "pl";

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

export type PageTitles = Record<
  string,
  {
    eyebrow: string;
    heading: string;
    intro: string;
  }
>;

export type LocalizedContent = Record<string, Record<string, string>>;

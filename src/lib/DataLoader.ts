// node.js
import { promises as fs } from "fs";
import path from "path";

// next
import { cookies, headers } from "next/headers";

// other libraries
import { resolveAcceptLanguage } from "resolve-accept-language";

// types
export type Lang = "en" | "pl";

const DATA_DIR = "public/data";
const LANG_COOKIE = "lang";

export default class DataLoader {
  public readonly lang: Lang = "en";
  private readonly dataDir: string = path.resolve(process.cwd(), DATA_DIR, "en");

  constructor() {
    // Try obtaining the lang value from a local cookie
    const langCookieValue = cookies().get(LANG_COOKIE)?.value;
    if (langCookieValue) {
      if (langCookieValue === "en") this.lang = "en";
      if (langCookieValue === "pl") this.lang = "pl";
    } else {
      // Otherwise, use the client's preferred language
      const acceptLanguageHeader = headers().get("Accept-Language");
      if (acceptLanguageHeader) {
        const resolvedLanguage = resolveAcceptLanguage(acceptLanguageHeader, ["en-US", "en-GB", "pl-PL"], "en-US");
        this.lang = resolvedLanguage.includes("en") ? "en" : "pl";
      }
    }

    // Determine the right place for all data based on the desired language
    if (this.lang === "en") {
      this.dataDir = path.resolve(process.cwd(), DATA_DIR, "en");
    } else {
      this.dataDir = path.resolve(process.cwd(), DATA_DIR, "pl");
    }
  }

  // Obtain the localized content for the preferred language
  async localizedContent() {
    const fileLoc = await fs.readFile(path.join(this.dataDir, "localized-content.json"), "utf8");
    const localizedContent = JSON.parse(fileLoc) as LocalizedContent;

    return localizedContent;
  }

  // Obtain a list of all job experiences from an outside source
  async allExperiences() {
    const [fileExp, filePor] = await Promise.all([
      fs.readFile(path.join(this.dataDir, "experience.json"), "utf8"),
      fs.readFile(path.join(this.dataDir, "portfolio-projects.json"), "utf8"),
    ]);
    const listExp = JSON.parse(fileExp) as JobExperience[];
    const listPor = JSON.parse(filePor) as JobExperience[];

    return [listExp, listPor];
  }

  // Get all the page titles from an outside source
  async allPageTitles() {
    const fileTit = await fs.readFile(path.join(this.dataDir, "page-titles.json"), "utf8");
    const pageTitles = JSON.parse(fileTit) as PageTitles[];

    return pageTitles;
  }

  // Obtain a list of all education schools from an outside source
  async allEducationSchools() {
    const fileEdu = await fs.readFile(path.join(this.dataDir, "education-schools.json"), "utf8");
    const educationSchools = JSON.parse(fileEdu) as EducationSchool[];

    return educationSchools;
  }
}

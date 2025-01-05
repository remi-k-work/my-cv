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
  private readonly dataUrl: string = "/data/en/";

  private constructor(lang: Lang) {
    // Save the just-established preferred language by the user
    this.lang = lang;

    // Determine the right place for all data based on the desired language
    if (this.lang === "en") {
      this.dataDir = path.resolve(process.cwd(), DATA_DIR, "en");
      this.dataUrl = "/data/en/";
    } else {
      this.dataDir = path.resolve(process.cwd(), DATA_DIR, "pl");
      this.dataUrl = "/data/pl/";
    }
  }

  // Create a new instance of DataLoader (we use a factory method because constructors cannot be async)
  public static async create(): Promise<DataLoader> {
    return new DataLoader(await DataLoader.prefferedLanguage());
  }

  // Establish the preferred language by the user
  private static async prefferedLanguage(): Promise<Lang> {
    // Try obtaining the lang value from a local cookie
    const langCookieValue = (await cookies()).get(LANG_COOKIE)?.value;
    if (langCookieValue) {
      if (langCookieValue === "en") return "en";
      if (langCookieValue === "pl") return "pl";

      // Unrecognized language? use english by default
      return "en";
    } else {
      // Otherwise, use the client's preferred language
      const acceptLanguageHeader = (await headers()).get("Accept-Language");
      if (acceptLanguageHeader) {
        const resolvedLanguage = resolveAcceptLanguage(acceptLanguageHeader, ["en-US", "en-GB", "pl-PL"], "en-US");
        return resolvedLanguage.includes("en") ? "en" : "pl";
      }

      // Unrecognized language? use english by default
      return "en";
    }
  }

  // Obtain the localized content for the preferred language
  async localizedContent() {
    const fileLoc = await fetch(new URL(this.dataUrl + "localized-content.json", process.env.WEBSITE_URL));
    const localizedContent = (await fileLoc.json()) as LocalizedContent;

    return localizedContent;
  }

  async localizedContent_old() {
    const fileLoc = await fs.readFile(path.join(this.dataDir, "localized-content.json"), "utf8");
    const localizedContent = JSON.parse(fileLoc) as LocalizedContent;

    return localizedContent;
  }

  // Obtain a list of all job experiences from an outside source
  async allExperiences() {
    const [fileExp, filePor] = await Promise.all([
      fetch(new URL(this.dataUrl + "experience.json", process.env.WEBSITE_URL)),
      fetch(new URL(this.dataUrl + "portfolio-projects.json", process.env.WEBSITE_URL)),
    ]);
    const listExp = (await fileExp.json()) as JobExperience[];
    const listPor = (await filePor.json()) as JobExperience[];

    return [listExp, listPor];
  }

  async allExperiences_old() {
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
    const fileTit = await fetch(new URL(this.dataUrl + "page-titles.json", process.env.WEBSITE_URL));
    const pageTitles = (await fileTit.json()) as PageTitles[];

    return pageTitles;
  }

  async allPageTitles_old() {
    const fileTit = await fs.readFile(path.join(this.dataDir, "page-titles.json"), "utf8");
    const pageTitles = JSON.parse(fileTit) as PageTitles[];

    return pageTitles;
  }

  // Obtain a list of all education schools from an outside source
  async allEducationSchools() {
    const fileEdu = await fetch(new URL(this.dataUrl + "education-schools.json", process.env.WEBSITE_URL));
    const educationSchools = (await fileEdu.json()) as EducationSchool[];

    return educationSchools;
  }

  async allEducationSchools_old() {
    const fileEdu = await fs.readFile(path.join(this.dataDir, "education-schools.json"), "utf8");
    const educationSchools = JSON.parse(fileEdu) as EducationSchool[];

    return educationSchools;
  }
}

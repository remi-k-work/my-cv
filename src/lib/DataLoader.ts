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
  private readonly dataDir: string;

  private constructor(
    public readonly lang: Lang = "en",
    public readonly localizedContent: LocalizedContent,
  ) {
    if (this.lang === "pl") {
      this.dataDir = path.resolve(process.cwd(), DATA_DIR, "pl");
    } else {
      this.dataDir = path.resolve(process.cwd(), DATA_DIR, "en");
    }
  }

  static async init() {
    const lang = DataLoader.preferredLang;

    let fileLoc: string;
    if (lang === "pl") {
      const dataDir = path.resolve(process.cwd(), DATA_DIR, "pl");
      fileLoc = await fs.readFile(path.join(dataDir, "localized-content.json"), "utf8");
    } else {
      const dataDir = path.resolve(process.cwd(), DATA_DIR, "en");
      fileLoc = await fs.readFile(path.join(dataDir, "localized-content.json"), "utf8");
    }

    const localizedContent = JSON.parse(fileLoc) as LocalizedContent;
    return new DataLoader(lang, localizedContent);
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

  private static get preferredLang(): Lang {
    // Try obtaining the lang value from a local cookie
    const lang = cookies().get(LANG_COOKIE)?.value;
    if (lang === "en") return "en";
    if (lang === "pl") return "pl";

    // Otherwise, use the client's preferred language
    const acceptLanguageHeader = headers().get("Accept-Language");
    if (acceptLanguageHeader == null) return "en";

    const resolvedLanguage = resolveAcceptLanguage(acceptLanguageHeader, ["en-US", "en-GB", "pl-PL"], "en-US");
    return resolvedLanguage.includes("en") ? "en" : "pl";
  }
}

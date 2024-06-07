// node.js
import { promises as fs } from "fs";
import path from "path";

// components
import PageTitle from "@/components/PageTitle";

export default async function Default() {
  // Get all the page titles from an outside source
  const fileTit = await fs.readFile(path.join("./src/app/data/", "page-titles.json"), "utf8");
  const pageTitles = JSON.parse(fileTit) as PageTitles;

  return <PageTitle pageTitles={pageTitles} />;
}

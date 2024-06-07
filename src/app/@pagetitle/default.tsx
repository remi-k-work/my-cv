// node.js
import { promises as fs } from "fs";

// components
import PageTitle from "@/components/PageTitle";

export default async function Default() {
  // Get all the page titles from an outside source
  const fileTit = await fs.readFile(process.cwd() + "/data/page-titles.json", "utf8");
  const pageTitles = JSON.parse(fileTit) as PageTitles;

  return <PageTitle pageTitles={pageTitles} />;
}

// other libraries
import DataLoader from "@/lib/DataLoader";

// components
import PageTitle from "@/components/PageTitle";

export default async function Page() {
  // Get all the page titles from an outside source
  const dataLoader = await DataLoader.init();
  const pageTitles = await dataLoader.allPageTitles();

  return <PageTitle pageTitles={pageTitles} />;
}

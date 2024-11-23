// components
import GlobalContextFetcher from "@/lib/GlobalContextFetcher";
import PageTitle from "@/components/PageTitle";

export default function Page() {
  return (
    <GlobalContextFetcher>
      <PageTitle />
    </GlobalContextFetcher>
  );
}

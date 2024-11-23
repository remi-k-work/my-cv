// components
import GlobalContextFetcher from "@/lib/GlobalContextFetcher";
import PageTitle from "@/components/PageTitle";

export default function Default() {
  return (
    <GlobalContextFetcher>
      <PageTitle />
    </GlobalContextFetcher>
  );
}

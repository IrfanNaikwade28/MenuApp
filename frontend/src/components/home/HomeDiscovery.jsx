import { SearchInput } from "../ui/SearchInput";
import { Filter } from "../ui/Filter";
import { CuisineList } from "./CuisineList";
import { DiscoverBusinesses } from "./DiscoverBusinesses";
export const HomeDiscovery = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-between gap-x-2">
        <SearchInput placeholder={"Search dishes..."} />
        <Filter />
      </div>
      <CuisineList />
      <DiscoverBusinesses />
    </div>
  );
};

import { useState } from "react";
import { filterMenuItemData } from "../../constants/filters";
import { SearchInput } from "../ui/SearchInput";
import { Filter } from "../ui/Filter";
import { MenuItemsContainer } from "./MenuItemsContainer";

export const DiscoverMenu = ({ menuCategories = []}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

  const query = searchQuery.trim().toLowerCase();
  const filteredCategories = menuCategories.filter((category) => {
    const matchesSearch =
      !query ||
      category.name.toLowerCase().includes(query) ||
      category.items.some((item) =>
         item.name.toLowerCase().includes(query)
       );

    return matchesSearch;
  });
  const handleFilterChange = (filterId, checked) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: checked,
    }));
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="mt-7">
      <div className="flex justify-between gap-x-2">
        <SearchInput
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={"Search dishes..."}
        />
        <Filter
          filterData={filterMenuItemData}
          onChange={handleFilterChange}
          selectedFilters={selectedFilters}
        />
      </div>
      <MenuItemsContainer menuCategories={filteredCategories} />
    </div>
  );
};

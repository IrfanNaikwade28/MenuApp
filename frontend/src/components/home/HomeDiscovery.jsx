import { useState, useEffect } from "react";
import { getBusinesses, getCuisines } from "../../api/businesses";
import { SearchInput } from "../ui/SearchInput";
import { Filter } from "../ui/Filter";
import { CuisineList } from "./CuisineList";
import { DiscoverBusinesses } from "./DiscoverBusinesses";
import { filterData } from "../../constants/filters";

export const HomeDiscovery = () => {
  const [businesses, setBusinesses] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const query = searchQuery.trim().toLowerCase();

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch =
      !query ||
      business.name.toLowerCase().includes(query) ||
      business.cuisines.join(" ").toLowerCase().includes(query);
    const matchesVeg = !selectedFilters.veg || business.servesVeg;
    const matchesNonVeg = !selectedFilters["non-veg"] || business.servesNonVeg;
    const matchesOpen = !selectedFilters.open || business.openingHours.isOpen;
    const matchesRating = !selectedFilters.rating || business.rating >= 4;
    const matchesCuisine =
      !selectedCuisine || business.cuisines.includes(selectedCuisine);

    return (
      matchesSearch &&
      matchesOpen &&
      matchesVeg &&
      matchesRating &&
      matchesNonVeg &&
      matchesCuisine
    );
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleFilterChange = (filterId, checked) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: checked,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const businessData = await getBusinesses();
      setBusinesses(businessData);
      const cuisineData = await getCuisines();
      setCuisines(cuisineData);
    };
    fetchData();
  }, []);
  return (
    <div className="mt-5">
      <div className="sticky top-0 z-20 bg-white py-3 border-b border-gray-100">
        <div className="flex justify-between gap-x-2">
          <SearchInput
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={"Search dishes..."}
          />
          <Filter
            filterData={filterData}
            onChange={handleFilterChange}
            selectedFilters={selectedFilters}
            filterStyle={"justify-between"}
          />
        </div>
      </div>
        <CuisineList
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={setSelectedCuisine}
          cuisines={cuisines}
        />
      <DiscoverBusinesses businesses={filteredBusinesses} />
    </div>
  );
};

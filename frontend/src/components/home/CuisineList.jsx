import { CuisineCard } from "./CuisineCard";

export const CuisineList = ({ selectedCuisine, setSelectedCuisine, cuisines }) => {
  return (
    <div className="flex gap-2 w-full overflow-x-scroll mt-5 remove-scrollbar pr-3">
      {cuisines.map((cuisine) => (
        <CuisineCard
          key={cuisine.id}
          cuisine={cuisine}
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={setSelectedCuisine}
        />
      ))}
    </div>
  );
};

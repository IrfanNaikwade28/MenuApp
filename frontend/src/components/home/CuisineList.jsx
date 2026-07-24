import { cuisines } from "../../mock/businesses";
import { CuisineCard } from "./CuisineCard";
export const CuisineList = () => {
  return (
    <>
      <div className="flex gap-2 w-full overflow-x-scroll mt-5 remove-scrollbar pr-3">
        {cuisines.map((cuisine) => (
          <CuisineCard
            key={cuisine.id}
            CuisineCardImage={cuisine.icon}
            CuisineCardName={cuisine.name}
          />
        ))}
      </div>
    </>
  );
};

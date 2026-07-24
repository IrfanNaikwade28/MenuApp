import Arrow from "../../assets/icons/arrow-circle-down.svg?react";
import { BusinessCard } from "../business/BusinessCard";
import { businesses } from "../../mock/businesses";
export const DiscoverBusinesses = () => {
  return (
    <div className="mt-10 pb-20">
      <div className="flex justify-between items-center text-primary">
        <div className="flex flex-col">
          <div className="text-2xl font-semibold">Discover Restaurants</div>
          <div className="text-xs font-light tracking-wider">
            Find your favourite food nearby
          </div>
        </div>
        <div className="select-none flex gap-1 text-brand items-center text-xs font-light">
          See all <Arrow className="w-4 h-4" />
        </div>
      </div>
      <div className="py-5 flex flex-col gap-3">
        {businesses.map((business, id) => (
          <BusinessCard key={id} business={business}/>
        ))}
      </div>
    </div>
  );
};

import Arrow from "../../assets/icons/arrow-circle-down.svg?react";
import { BusinessCard } from "../business/BusinessCard";
export const DiscoverBusinesses = ({ businesses }) => {
  return (
    <div className="mt-10 pb-20">
      <div className="flex justify-between items-center text-primary">
        <div className="flex flex-col">
          <div className="text-2xl font-semibold">Discover Restaurants</div>
          <div className="text-xs font-light tracking-wider">
            Find your favourite food nearby
          </div>
        </div>
        <button type='button' onClick={()=>alert('Under Developement')} className="select-none flex gap-1 text-brand items-center text-xs font-light">
          See all <Arrow className="w-4 h-4" />
        </button>
      </div>

      <div className="py-5 flex flex-col gap-3">
        {businesses.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            {/* Icon */}

            <h3 className="mt-4 text-lg font-medium text-primary">
              No Restaurants found
            </h3>

            <p className="mt-2 px-6 text-sm font-light leading-6 text-secondary">
              We couldn't find any restaurants matching your search or selected
              filters.
            </p>
          </div>
        )}
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
};

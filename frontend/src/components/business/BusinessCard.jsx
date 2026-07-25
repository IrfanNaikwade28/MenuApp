import Star from "../../assets/icons/star.svg?react";
import Location from "../../assets/icons/mini-location.svg?react";
import Clock from "../../assets/icons/clock.svg?react";
import Tick from "../../assets/icons/tick.svg?react";
import Direction from "../../assets/icons/direct-up.svg?react";
export const BusinessCard = ({business}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-back-secondary">
      {/* Image */}
      <div className="relative">
        <img src={business.coverImage} alt="Business" className="h-32 w-full object-cover" />

        {/* Cuisines */}
        <div className="absolute bottom-3 left-3 rounded-md bg-white px-3 py-1 text-xs text-primary shadow">
          {business.cuisines.slice(0,3).join(' | ')}
        </div>
        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-green-600 px-2">
          <span className="flex gap-1 items-center text-xs font-semibold text-white">
            <Star className="w-3 h-3 text-white" />
            {business.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-xl font-bold text-primary">
              {business.name}
            </h3>

            <div className="mt-1 flex items-center gap-1">
              <Location className="h-3 w-3 shrink-0" />

              <p className="truncate text-xs font-light text-primary">
                {business.address.area} , {business.address.city}
              </p>
            </div>
          </div>

          <div className="ml-3 shrink-0 text-right">
            <div className="flex items-center justify-end gap-1">
              <Clock className={`h-3 w-3 shrink-0 ${business.openingHours.isOpen ? 'text-green-600':'text-red-600'}`} />
              <span className={`text-sm font-medium ${business.openingHours.isOpen ? 'text-green-600':'text-red-600'}`}>
                {business.openingHours.isOpen ? 'Open':'Closed'}
              </span>
            </div>

            <p className="mt-1 text-es font-medium text-primary">
              {business.openingHours.open} to {business.openingHours.close}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between gap-3">
          {/* Tags */}
          <div className="flex flex-1 gap-2 overflow-x-scroll pr-1 remove-scrollbar">
            <div className="flex w-24 shrink-0 items-center gap-1 rounded-md bg-white px-2 py-1 text-xss">
              <Tick className="h-3 w-3 shrink-0" />
              <span className="truncate">Family Seating</span>
            </div>

            <div className="flex w-24 shrink-0 items-center gap-1 rounded-md bg-white px-2 py-1 text-xss">
              <Tick className="h-3 w-3 shrink-0" />
              <span className="truncate">Pure Veg Restaurant</span>
            </div>

            <div className="flex w-24 shrink-0 items-center gap-1 rounded-md bg-white px-2 py-1 text-xss">
              <Tick className="h-3 w-3 shrink-0" />
              <span className="truncate">Valet Parking</span>
            </div>
            <div className="flex w-24 shrink-0 items-center gap-1 rounded-md bg-white px-2 py-1 text-xss">
              <Tick className="h-3 w-3 shrink-0" />
              <span className="truncate">Valet Parking</span>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={()=>(alert('under development'))}
            className="flex shrink-0 items-center gap-1 rounded-md bg-primary px-3 py-1 text-xss text-white"
          >
            <Direction className="h-3 w-3" />
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

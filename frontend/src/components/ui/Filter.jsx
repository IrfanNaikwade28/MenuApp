import { useState } from "react";
import FilterIcon from "../../assets/icons/filter.svg?react";
import Clock from "../../assets/icons/clock.svg?react";
import Star from "../../assets/icons/rated.svg?react";
import Location from "../../assets/icons/nearby.svg?react";
import Veg from "../../assets/icons/veg.svg?react";
import NonVeg from "../../assets/icons/non-veg.svg?react";
import { Checkbox } from "./Checkbox";
const filters = [
  {
    id: "open",
    label: "Open Now",
    icon: Clock,
  },
  {
    id: "rating",
    label: "Highly Rated",
    icon: Star,
  },
  {
    id: "near",
    label: "Near By",
    icon: Location,
  },
  {
    id: "veg",
    label: "Veg",
    icon: Veg,
  },
  {
    id: "non-veg",
    label: "Non-Veg",
    icon: NonVeg,
  },
];

export const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsFilterOpen((prev) => !prev)}
        className="flex items-center justify-center rounded-lg border border-gray-200 bg-back-secondary px-4 py-4"
      >
        <FilterIcon className={`w-5 h-5 ${isFilterOpen?'text-brand':'text-primary'}`} />
      </button>
      {isFilterOpen && (
        <div
          className={`flex justify-between flex-col bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.20)] absolute w-44 h-44 right-0 top-16 py-3 rounded-lg`}
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <div
                key={filter.id}
                className="flex justify-between px-3 items-center"
              >
                <Checkbox
                  checked={selectedFilters[filter.id] || false}
                  onChange={(e) =>
                    setSelectedFilters((prev) => ({
                      ...prev,
                      [filter.id]: e.target.checked,
                    }))
                  }
                />
                <p className="text-left w-full pl-3 text-xs text-primary font-light select-none">{filter.label}</p>
                <Icon className="w-4 h-4" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

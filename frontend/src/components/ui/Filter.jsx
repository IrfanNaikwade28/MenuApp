import { useState } from "react";
import FilterIcon from "../../assets/icons/filter.svg?react";
import { Checkbox } from "./Checkbox";

export const Filter = ({filterData, onChange, selectedFilters}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
          {filterData.map((filter) => {
            const Icon = filter.icon;
            return (
              <div
                key={filter.id}
                className="flex justify-between px-3 items-center"
              >
                <Checkbox
                  checked={selectedFilters[filter.id] || false}
                  onChange={(e) =>
                    onChange(filter.id, e.target.checked)
                  }
                />
                <p className="text-left w-full pl-3 text-xs text-primary font-light select-none">{filter.label}</p>
                <Icon className={`w-4 h-4 ${filter.styles}`} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

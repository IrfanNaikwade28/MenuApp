import { useEffect, useRef, useState } from "react";
import FilterIcon from "../../assets/icons/filter.svg?react";
import { Checkbox } from "./Checkbox";

export const Filter = ({
  filterData,
  onChange,
  selectedFilters,
  filterStyle,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(e.target)
      ) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div ref={filterRef} className="relative">
      <button
        type="button"
        onClick={() => setIsFilterOpen((prev) => !prev)}
        className="flex items-center justify-center rounded-lg border border-gray-200 bg-back-secondary px-4 py-4"
      >
        <FilterIcon
          className={`h-5 w-5 ${
            isFilterOpen ? "text-brand" : "text-primary"
          }`}
        />
      </button>

      {isFilterOpen && (
        <div
          className={`absolute right-0 top-16 flex w-44 flex-col gap-2 rounded-lg bg-white py-3 shadow-[0px_1px_4px_rgba(0,0,0,0.20)] z-50 ${filterStyle}`}
        >
          {filterData.map((filter) => {
            const Icon = filter.icon;

            return (
              <div
                key={filter.id}
                className="flex items-center justify-between px-3"
              >
                <Checkbox
                  checked={selectedFilters[filter.id] || false}
                  onChange={(e) =>
                    onChange(filter.id, e.target.checked)
                  }
                />

                <p className="w-full select-none pl-3 text-left text-xs font-light text-primary">
                  {filter.label}
                </p>

                {Icon && (
                  <Icon className={`h-4 w-4 ${filter.styles}`} />
                )}              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

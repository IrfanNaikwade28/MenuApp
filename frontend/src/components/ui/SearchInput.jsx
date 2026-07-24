import Search from "../../assets/icons/search-normal.svg?react";
export const SearchInput = ({ placeholder }) => {
  return (
    <div className="flex w-full items-center gap-3 rounded-lg border border-gray-200 bg-back-secondary px-3 py-3">
      <Search className="h-5 w-5 text-secondary shrink-0" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-sm font-light text-primary placeholder:text-secondary outline-none"
      />
    </div>
  );
};

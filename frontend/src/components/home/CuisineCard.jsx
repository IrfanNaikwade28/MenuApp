export const CuisineCard = ({
  cuisine,
  selectedCuisine,
  setSelectedCuisine,
}) => {
  const isSelected = selectedCuisine === cuisine.name;
  return (
    <div
      onClick={() => setSelectedCuisine(isSelected ? null : cuisine.name)}
      className={`flex flex-col items-center gap-2 min-w-18`}
    >
      <div
        className={`flex h-18 w-18 items-center justify-center rounded-xl border border-gray-200 shadow-sm transition-all duration-150 ${isSelected ? "bg-brand/40" : "bg-back-secondary"}`}
      >
        <img
          src={cuisine.icon}
          loading="lazy"
          alt=""
          className="h-14 w-14 object-contain"
        />
      </div>
      <p className="text-center text-xs font-medium text-primary">
        {cuisine.name}
      </p>
    </div>
  );
};

import { BusinessCard } from "../business/BusinessCard";
export const FavoriteList = ({ businesses, favorites }) => {
  const filteredBusinesses = businesses.filter((business) =>
    favorites.includes(business.id),
  );

  if (filteredBusinesses.length === 0) {
    return (
      <div className="flex items-center justify-center h-120">
        No favorite restaurants yet.
      </div>
    );
  }
  return (
    <div className="flex pb-24 flex-col gap-5 remove-scrollbar">
      {filteredBusinesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
};

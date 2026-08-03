import {
  ArrowLeft,
  Favorite,
  FavoriteFilled,
  Share,
  Menu,
} from "../../constants/icons";
import { BusinessCard } from "./BusinessCard";
import { useNavigate } from "react-router-dom";

export const BusinessProfile = ({ business, isFavorite, onFavoriteToggle }) => {
  const navigate = useNavigate();

  if (!business) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">Business not found</h2>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-1">
        <div className="left flex items-center">
          <button type="button" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-7 h-7 cursor-pointer text-primary" />
          </button>
        </div>
        <div className="right flex items-center gap-5">
          <button type="button" onClick={onFavoriteToggle}>
            {isFavorite ? (
              <FavoriteFilled className="w-6 h-6 text-red-400" />
            ) : (
              <Favorite className="w-6 h-6 text-primary" />
            )}
          </button>

          <Share className="w-6 h-6 text-primary" />
          <Menu className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <BusinessCard business={business} disableNavigation />
      </div>
    </div>
  );
};

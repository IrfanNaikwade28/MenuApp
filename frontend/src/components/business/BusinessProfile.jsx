import {
  ArrowLeft,
  Favorite,
  FavoriteFilled,
  Share,
  Menu,
} from "../../constants/icons";
import { BusinessCard } from "./BusinessCard";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const BusinessProfile = ({ business, isFavorite, onFavoriteToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!business) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">Business not found</h2>
      </div>
    );
  }
  const handleShare = async () => {
    const currentUrl = `${window.location.origin}${location.pathname}`;
    console.log(currentUrl);

    if (navigator.share) {
      await navigator.share({
        title: business.name,
        text: `Check out ${business.name}`,
        url: currentUrl,
      });
    } else {
      await navigator.clipboard.writeText(currentUrl);
      alert("Link copied!");
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-1">
        <div className="left flex items-center">
          <button type="button" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-7 h-7 cursor-pointer text-primary" />
          </button>
        </div>
        <div className="right flex items-center gap-5">
          <button
            type="button"
            onClick={onFavoriteToggle}
            className="transition-transform duration-150 active:scale-90"
          >
            {isFavorite ? (
              <FavoriteFilled className="h-6 w-6 scale-105 text-red-400" />
            ) : (
              <Favorite className="h-6 w-6 text-primary" />
            )}
          </button>
          <button onClick={handleShare} type="button">
            <Share className="w-6 h-6 text-primary" />
          </button>
          <Menu className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <BusinessCard business={business} disableNavigation />
      </div>
    </div>
  );
};

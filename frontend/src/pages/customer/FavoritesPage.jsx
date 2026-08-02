import { getFavorites } from "../../api/favorites";
import { getBusinesses } from "../../api/businesses";
import { useState, useEffect } from "react";
import { PageHeader } from "../../components/common/PageHeader";
import { FavoriteList } from "../../components/favorites/FavoriteList";
export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const favoriteData = await getFavorites();
      setFavorites(favoriteData);
      const businessData = await getBusinesses();
      setBusinesses(businessData);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col px-3 pt-3">
      <PageHeader title="Favorites" />

      <div className="mt-5 flex-1 overflow-y-scroll remove-scrollbar">
        <FavoriteList
          businesses={businesses}
          favorites={favorites}
        />
      </div>
    </div>
  );
};

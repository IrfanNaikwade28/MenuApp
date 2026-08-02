import { getStoredFavorites, addFavorite, removeFavorite  } from "../utils/localStorage";
export const getFavorites = async () => {
  return getStoredFavorites();
};

export const toggleFavorite = async (id) => {
  const favorites = getStoredFavorites()
  favorites.includes(id) ?
    removeFavorite(id) :
    addFavorite(id)
};

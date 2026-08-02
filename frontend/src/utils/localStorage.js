const FAVORITES_KEY = "menuapp_favorites";

export const getStoredFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY));
  if (favorites === null) return []
  return favorites
};

export const saveStoredFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
};

export const addFavorite = (businessId) => {
  const favorites = getStoredFavorites();
  if (!favorites.includes(businessId)) {
    saveStoredFavorites([...favorites, businessId])
  }
};

export const removeFavorite = (businessId) => {
  const favorites = getStoredFavorites();
  const newFavorite = favorites.filter((id) => businessId !== id)
  saveStoredFavorites(newFavorite)
};

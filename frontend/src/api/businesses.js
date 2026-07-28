import { businesses, cuisines } from "../mock/businesses";

export const getBusinesses = async () => {
  return businesses;
};

export const getBusinessById = async (id) => {
  return businesses.find((business) => business.id === Number(id));
};

export const getCuisines = async () => {
  return cuisines;
};

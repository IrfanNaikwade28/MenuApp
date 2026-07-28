import { menus } from "../mock/menus";

export const getMenus = async () => {
  return menus;
};

export const getMenuById = async(id) =>{
  return menus.find((menu)=>menu.businessId === Number(id))
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBusinessById } from "../../api/businesses";
import { getMenuById } from "../../api/menus";
import { BusinessProfile } from "../../components/business/BusinessProfile";
import { SpecialMenu } from "../../components/business/SpecialMenu";
import { DiscoverMenu } from "../../components/business/DiscoverMenu";
import { BusinessInfo } from "../../components/business/BusinessInfo";
import { KeepInMind } from "../../components/business/KeepInMind";
export const BusinessPage = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  const [menuCategories, setMenuCategories] = useState([])
  const [specialMenu, setSpecialMenu] = useState([])

  useEffect(() => {
    if (!id) return;
    const fetchBusiness = async () => {
      const businessData = await getBusinessById(id);
      setBusiness(businessData);

      const specialMenuData = await getMenuById(id);
      setSpecialMenu(specialMenuData.specialMenu)

      const MenuData = await getMenuById(id);
      setMenuCategories(MenuData.categories)
    };
    fetchBusiness();
  }, [id]);

  return (
    <div className="px-3 mt-3 mb-3">
      <BusinessProfile business={business} />
      <SpecialMenu items={specialMenu} />
      <DiscoverMenu menuCategories={menuCategories} />
      <BusinessInfo business={business} />
      <KeepInMind />
    </div>
  );
};

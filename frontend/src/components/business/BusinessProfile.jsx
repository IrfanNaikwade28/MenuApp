import { ArrowLeft, Favorite, Share, Menu } from "../../constants/icons";
import { BusinessCard } from "../../components/business/BusinessCard";
import { useParams, useNavigate } from "react-router-dom";
export const BusinessProfile = ({ businesses }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const businessId = Number(id);
  const business = businesses.find((business) => business.id === businessId);

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
          <ArrowLeft
            onClick={() => navigate(-1)}
            className="w-7 h-7 cursor-pointer text-primary"
          />
        </div>
        <div className="right flex items-center gap-5">
          <Favorite className="w-6 h-6 text-primary" />
          <Share className="w-6 h-6 text-primary" />
          <Menu className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <BusinessCard business={business} />
      </div>
    </div>
  );
};

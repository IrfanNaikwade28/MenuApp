import { businesses } from "../../mock/businesses";
import { BusinessProfile } from "../../components/business/BusinessProfile";

export const BusinessPage = () => {
  return (
    <div className="px-3 mt-3">
      <BusinessProfile businesses={businesses} />
    </div>
  );
};

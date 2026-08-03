import { Marker } from "react-map-gl/maplibre";
import { DestinationPin, BusinessPin } from "../../constants/icons";
export const BusinessMarker = ({ business, isSelected }) => {
  if (!business) return null;
  return (
    <Marker
      latitude={business.location.lat}
      longitude={business.location.lng}
      anchor="bottom"
    >
      {
        isSelected ?
      <DestinationPin className="w-7 h-7" />:
      <BusinessPin className="w-7 h-7" />

      }
    </Marker>
  );
};

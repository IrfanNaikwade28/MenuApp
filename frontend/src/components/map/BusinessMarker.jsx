import { Marker } from "react-map-gl/maplibre";
import { DestinationPin } from "../../constants/icons";
export const BusinessMarker = ({ destination }) => {
  if (!destination) return null;

  return (
    <Marker
      latitude={destination.lat}
      longitude={destination.lng}
      anchor="bottom"
    >
      <DestinationPin className="w-7 h-7" />
    </Marker>
  );
};

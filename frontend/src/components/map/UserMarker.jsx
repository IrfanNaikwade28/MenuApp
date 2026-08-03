import { Marker } from "react-map-gl/maplibre";
import { NavigationPin, CurrentLocationPin } from "../../constants/icons";
export const UserMarker = ({ latitude, longitude, isNavigating }) => {
  if (!latitude || !longitude) return null;

  return (
    <Marker latitude={latitude} longitude={longitude} anchor="bottom">
      {
        isNavigating ?
          <NavigationPin className="w-7 h-7" /> :
          <CurrentLocationPin className="w-7 h-7" />


      }
    </Marker>
  );
};

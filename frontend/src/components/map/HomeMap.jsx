import "maplibre-gl/dist/maplibre-gl.css";
import Map, { NavigationControl } from "react-map-gl/maplibre";
import { UserMarker } from "./UserMarker";
import { BusinessMarker } from "./BusinessMarker";

const MAP_STYLE = `https://api.maptiler.com/maps/019f2749-01e9-7221-9c96-c881aa999d5f/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`;

export const HomeMap = ({
  latitude,
  longitude,
  businesses,
  selectedBusiness,
}) => {
  return (
    <div className="mt-5 h-[350px] w-full overflow-hidden rounded-xl">
      <Map
        initialViewState={{
          longitude: selectedBusiness?.location?.lng ?? longitude ?? 74.2433,
          latitude: selectedBusiness?.location?.lat ?? latitude ?? 16.705,
          zoom: 17,
        }}
        mapStyle={MAP_STYLE}
        style={{ width: "100%", height: "100%" }}
      >
        <NavigationControl position="top-right" />

        <UserMarker
          latitude={latitude}
          longitude={longitude}
          isNavigating={Boolean(selectedBusiness)}
        />

        {businesses.length > 0 &&
          businesses.map((business) => (
            <BusinessMarker
              key={business.id}
              business={business}
              isSelected={business.id === selectedBusiness?.id}
            />
          ))}
      </Map>
    </div>
  );
};

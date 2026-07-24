import Map, { NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const MAP_STYLE = `https://api.maptiler.com/maps/019f2749-01e9-7221-9c96-c881aa999d5f/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`;

export const HomeMap = ({ latitude, longitude }) => {
  return (
    <div className={`h-[350px] w-full overflow-hidden rounded-xl mt-5`}>

      <Map
        initialViewState={{
          longitude: longitude || 74.2433,
          latitude: latitude || 16.705,
          zoom: latitude && longitude ? 12 : 13,
        }}
        mapStyle={MAP_STYLE}
        style={{ width: "100%", height: "100%" }}
      >
        <NavigationControl position="top-right" />
      </Map>
    </div>
  );
};

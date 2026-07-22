import { useState } from "react";
import { Greeting } from "../../components/home/Greeting";
import { HomeMap } from "../../components/map/HomeMap";
import { LocationCard } from "../../components/map/LocationCard";
import { requestLocation, getLocationName, formatLocation } from "../../api/location";
export const HomePage = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [location, setLocation] = useState("Turn on Location");
  const [hasLocation, setHasLocation] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const onLocation = () => {
    setIsLoadingLocation(true);
    requestLocation(async (latitude, longitude) => {
      const address = await getLocationName(latitude, longitude);
      if (!address) {
        setLocation("Not Found");
        setHasLocation(false);
        return;
      }
      const location = formatLocation(address);
      setLocation(location)
      setCoordinates({
        latitude,
        longitude,
      });
      setHasLocation(true);
      setIsLoadingLocation(false);
    });
  };
  return (
    <>
      <div className="px-3 mt-3">
        <Greeting
          userName={"User"}
          location={location}
          onLocationClick={onLocation}
        />
        {hasLocation ? (
          <HomeMap
            latitude={coordinates.latitude}
            longitude={coordinates.longitude}
          />
        ) : (
          <LocationCard isLoadingLocation={isLoadingLocation} onLocationClick={onLocation} />
        )}
      </div>
    </>
  );
};

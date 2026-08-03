import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Greeting } from "../../components/home/Greeting";
import { HomeMap } from "../../components/map/HomeMap";
import { LocationCard } from "../../components/map/LocationCard";
import { getBusinessById } from "../../api/businesses";
import {
  requestLocation,
  getLocationName,
  formatLocation,
} from "../../api/location";
import { HomeDiscovery } from "../../components/home/HomeDiscovery";
import { useEffect } from "react";
export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const businessId = searchParams.get("business");
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [location, setLocation] = useState("");
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
      setLocation(location);
      setCoordinates({
        latitude,
        longitude,
      });
      setHasLocation(true);
      setIsLoadingLocation(false);
    });
  };
  useEffect(() => {
    if (!businessId) return;
    const fetchData = async () => {
      const data = await getBusinessById(businessId);
      setSelectedBusiness(data);
    };
    fetchData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [businessId]);
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
            destination={selectedBusiness?.location}
          />
        ) : (
          <LocationCard
            isLoadingLocation={isLoadingLocation}
            onLocationClick={onLocation}
          />
        )}

        <HomeDiscovery />
      </div>
    </>
  );
};

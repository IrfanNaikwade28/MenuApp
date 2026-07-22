import { useState } from "react";
import { Greeting } from "../../components/home/Greeting";
import { requestLocation, getLocationName } from "../../api/location";
export const HomePage = () => {
  const [location, setLocation] = useState("Turn on Location");
  const onLocation = () => {
    requestLocation(async(latitude, longitude) => {
      const address = await getLocationName(latitude,longitude)
      setLocation(`${address.road}, ${address.suburb}`);    });

  };
  return (
    <>
      <div className="px-3 mt-3">
        <Greeting
          userName={"User"}
          location={location}
          onLocationClick={onLocation}
        />
      </div>
    </>
  );
};

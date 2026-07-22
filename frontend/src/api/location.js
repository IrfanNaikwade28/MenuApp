export const requestLocation = (onSuccess) => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      onSuccess(latitude, longitude);
    },
    (error) => {
      console.error(error);
      alert("Unable to get your location.");
    },
  );
};

export const getLocationName = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
    );
    const data = await response.json();
    return data.address;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const formatLocation = (address) => {
  const firstPart = address.suburb || address.road || address.neighbourhood;

  const secondPart =
    address.city || address.town || address.village || address.hamlet;

  if (!firstPart && !secondPart) {
    return "Not Found";
  }

  if (!firstPart) {
    return secondPart;
  }

  if (!secondPart) {
    return firstPart;
  }

  return `${firstPart}, ${secondPart}`;
};

export const requestLocation = (onSuccess) => {
   if (!navigator.geolocation) {
     alert("Geolocation is not supported by your browser.");
     return;
   }
   navigator.geolocation.getCurrentPosition(
     (position) => {
       const { latitude, longitude } = position.coords;
       onSuccess(latitude, longitude)

     },
     (error) => {
       console.error(error);
       alert("Unable to get your location.");
     }
   );
 };

export const getLocationName = async (latitude, longitude) => {
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
  const data = await response.json()
  return data.address
}

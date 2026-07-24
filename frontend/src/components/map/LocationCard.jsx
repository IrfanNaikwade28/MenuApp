import MapPin from "../../assets/icons/map-location.svg?react"
import MapPlaceholder from '../../assets/images/map-placeholder.png'
export const LocationCard = ({ onLocationClick, isLoadingLocation }) => {
  return (
    <div className="relative mt-4 h-[330px] overflow-hidden rounded-xl">
      {/* Background Image */}
      <img
        src={MapPlaceholder}
        alt="Map Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute backdrop-blur-xs shadow-md shadow-black" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl">
          <MapPin/>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-primary">
          Turn on your location
        </h2>

        {/* Description */}
        <p className="text-sm text-primary">
          Turn on location to discover restaurants, cafes and bakeries near you.
        </p>

        {/* Button */}
        <button
          disabled={isLoadingLocation}
          onClick={onLocationClick}
          className="mt-4 rounded-xl bg-primary px-8 py-3 text-base font-light text-white transition hover:bg-gray-800"
        >
          {isLoadingLocation ? "Getting your location..." : "Turn on Location"}
        </button>
      </div>
    </div>
  );
};

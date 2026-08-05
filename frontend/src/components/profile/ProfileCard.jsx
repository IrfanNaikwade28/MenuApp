import { GuestUser } from "../../constants/icons";
export const ProfileCard = ({ image, name, description, buttonText }) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 mt-5">
      {/* Background Blur */}
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-300/20 blur-3xl" />

      {/* Content */}
      <div className="relative flex flex-col items-center">
        {/* Avatar */}
        <div className="flex h-20 w-20 items-center justify-center">
          {typeof image === "string" && image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <GuestUser className="h-full w-full text-primary" />
          )}
        </div>

        {/* Name */}
        <h2 className="mt-2 text-2xl font-semibold text-primary">{name}</h2>

        {/* Description */}
        <p className="mt-2 max-w-xs text-center text-sm text-app-secondary">
          {description}
        </p>

        {/* Button */}
        <button
          type="button"
          className="mt-4 w-56 rounded-xl bg-primary py-3 text-white transition duration-150 active:scale-95 hover:opacity-90"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

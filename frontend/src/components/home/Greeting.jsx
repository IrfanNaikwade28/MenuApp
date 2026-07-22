import RouteSquare from "../../assets/icons/route-square.svg?react";

export const Greeting = ({ userName, location, onLocationClick }) => {
  const hour = new Date().getHours();
  const greet =
    hour >= 4 && hour < 12
      ? "Good Morning"
      : hour >= 12 && hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <header className="flex items-center gap-1">
      <div className="h-10 w-10">
        <RouteSquare className="h-full w-full" />
      </div>

      <div className="flex flex-col">
        <h1 className="text-base font-semibold text-primary">
          {greet}, {userName}
        </h1>

        <button type="button" onClick={onLocationClick} className="text-xs text-app-orange underline tracking-[2%] text-left">
          {location}
        </button>
      </div>
    </header>
  );
};

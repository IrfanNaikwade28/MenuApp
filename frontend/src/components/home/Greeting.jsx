import RouteSquare from "../../assets/icons/route-square.svg?react";

export const Greeting = ({ userName, location, onLocationClick }) => {
  const hasLocation = location !== "";
  const hour = new Date().getHours();
  const greet =
    hour >= 4 && hour < 12
      ? "Good Morning"
      : hour >= 12 && hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <header className="flex items-center gap-x-2">
      <div className="h-10 w-10">
        <RouteSquare className="h-full w-full" />
      </div>

      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-primary">
          {greet}, {userName}
        </h1>

        <button type="button" onClick={onLocationClick} className={`${hasLocation?"text-primary font-light":"text-app-orange underline"} leading-tight text-sm tracking-[2%] text-left`}>
          {hasLocation?location:"Turn on Location"}
        </button>
      </div>
    </header>
  );
};

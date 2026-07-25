export const Slider = ({ children, className = "" }) => {
  return (
    <div
      className={`flex gap-3 overflow-x-auto remove-scrollbar snap-x snap-mandatory ${className}`}
    >
      {children}
    </div>
  );
};

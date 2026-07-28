import { ArrowDown } from "../../../constants/icons";

export const AccordionItem = ({
  title,
  subtitle,
  isOpen,
  onToggle,
  children,
  className = "",
  headerTextStyling = "",
  headerStyle
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <button
        onClick={onToggle}
        className={`flex w-full items-center justify-between text-left ${headerStyle}`}
      >
        <div>
          <h3 className={`font-semibold text-primary ${headerTextStyling}`}>{title}</h3>

          {subtitle && <p className="text-sm font-light">{subtitle}</p>}
        </div>

        <ArrowDown
          className={`h-3 w-3 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${headerStyle} ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

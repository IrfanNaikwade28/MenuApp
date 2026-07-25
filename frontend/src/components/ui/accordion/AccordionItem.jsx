import { ChevronDown } from "../../constants/icons";

export const AccordionItem = ({
  title,
  subtitle,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div>
          <h3 className="font-semibold text-primary">{title}</h3>

          {subtitle && <p className="text-xs text-secondary">{subtitle}</p>}
        </div>

        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

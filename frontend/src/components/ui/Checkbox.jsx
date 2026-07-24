import Check from "../../assets/icons/check.svg?react";

export const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />

      <div
        className={`flex h-4 w-4 items-center justify-center rounded-sm border transition-all duration-200 ${
          checked
            ? "border-brand bg-brand"
            : "border-gray-300 bg-white"
        }`}
      >
        {checked && <Check className="h-3 w-3 text-black" />}
      </div>
    </label>
  );
};

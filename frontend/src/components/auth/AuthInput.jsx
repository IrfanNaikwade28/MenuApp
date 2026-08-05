export const AuthInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  error,
}) => {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-medium text-primary">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-app-background px-4 py-3 text-sm outline-none transition ${
          error
            ? "border-red-500"
            : "border-gray-200 focus:border-brand"
        }`}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

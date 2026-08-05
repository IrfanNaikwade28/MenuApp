export const AuthButton = ({
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="mt-3 w-full rounded-xl bg-primary py-3 text-sm font-medium text-white transition duration-150 hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children}
    </button>
  );
};

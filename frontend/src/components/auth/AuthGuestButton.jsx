export const AuthGuestButton = ({
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-xl border border-gray-200 bg-white py-3 text-sm font-medium text-primary transition hover:bg-gray-50 active:scale-95"
    >
      Continue as Guest
    </button>
  );
};

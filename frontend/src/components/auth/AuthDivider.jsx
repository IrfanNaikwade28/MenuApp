export const AuthDivider = ({ text = "OR" }) => {
  return (
    <div className="my-8 flex items-center gap-4">
      <div className="h-px flex-1 bg-gray-200" />

      <span className="text-xs font-medium uppercase text-secondary">
        {text}
      </span>

      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
};

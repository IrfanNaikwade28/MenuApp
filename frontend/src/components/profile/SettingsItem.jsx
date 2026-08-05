import {ArrowRight} from "../../constants/icons"
export const SettingsItem = ({
  icon,
  title,
  onClick,
}) => {
  const Icon = icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-back-secondary px-4 py-3 transition-colors hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-primary" />

        <p className="text-sm font-medium text-primary">
          {title}
        </p>
      </div>

      <ArrowRight className="h-5 w-5 text-secondary" />
    </button>
  );
};

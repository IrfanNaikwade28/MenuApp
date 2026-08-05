export const AuthHeader = ({
  title,
  description,
}) => {
  return (
    <div className="mt-8 mb-8">
      <h1 className="text-3xl font-semibold text-primary">
        {title}
      </h1>

      <p className="mt-2 max-w-sm text-sm leading-6 text-secondary">
        {description}
      </p>
    </div>
  );
};

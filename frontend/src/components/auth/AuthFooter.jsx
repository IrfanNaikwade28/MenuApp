import { Link } from "react-router-dom";

export const AuthFooter = ({
  text,
  linkText,
  to,
}) => {
  return (
    <p className="mt-8 text-center text-sm text-secondary">
      {text}{" "}
      <Link
        to={to}
        className="font-semibold text-brand"
      >
        {linkText}
      </Link>
    </p>
  );
};

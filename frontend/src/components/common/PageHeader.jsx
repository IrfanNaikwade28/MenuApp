import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "../../constants/icons";
export const PageHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 items-center">
      <div>
        <button
          type="button"
          onClick={() =>
            window.history.length > 1 ? navigate(-1) : navigate("/")
          }
        >
          <ArrowLeft className="w-7 h-7 cursor-pointer text-primary" />
        </button>
      </div>

      <h1 className="text-center text-xl font-semibold text-primary tracking-wide">
        {title}
      </h1>

      <div />
    </div>
  );
};

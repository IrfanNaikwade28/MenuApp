import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "../../constants/icons";
export const PageHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-20 py-2 grid grid-cols-3 items-center bg-white">
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

      <h1 className="flex justify-center items-center text-xl font-semibold text-primary tracking-wide text-nowrap">
        {title}
      </h1>

      <div />
    </div>
  );
};
